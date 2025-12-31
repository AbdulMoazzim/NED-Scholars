"use server";

import { prisma } from "@/lib/auth";
import { createSeminarAttendeeData, updateSeminarAttendeeData,  } from "@/lib/form-types";
import { ErrorMsg } from "@/lib/utils";



export async function RegisterSeminarAttendee(attendeeData: createSeminarAttendeeData) {
  try {
    // Use transaction to ensure atomic operation
    const result = await prisma.$transaction(async (tx) => {
      // Check seminar capacity
      const seminar = await tx.seminar.findUnique({
        where: { id: attendeeData.seminarId || "" },
        include: {
          attendees: {
            where: {
              registration_status: "confirmed",
            },
          },
        },
      });

      if (!seminar) {
        throw new Error("Seminar not found");
      }

      // Check if already registered
      const existingRegistration = await tx.attendeeSeminarForm.findFirst({
        where: {
          email: attendeeData.email,
          seminarId: attendeeData.seminarId,
          registration_status: {
            not: "cancelled",
          },
        },
      });

      if (existingRegistration) {
        throw new Error("Already registered for this seminar");
      }

      // Count confirmed attendees by attendance mode
      const confirmedByMode = seminar.attendees.filter(
        (a) => a.attendance_mode === attendeeData.attendance_mode
      ).length;

      const totalConfirmed = seminar.attendees.length;

      // Determine registration status based on capacity
      let registrationStatus = "confirmed";

      // Check total capacity first
      if (seminar.maxCapacity && totalConfirmed >= seminar.maxCapacity) {
        registrationStatus = "waitlist";
      }

      // Check mode-specific capacity
      if (registrationStatus === "confirmed") {
        if (attendeeData.attendance_mode === "virtual") {
          if (
            seminar.virtualCapacity &&
            confirmedByMode >= seminar.virtualCapacity
          ) {
            registrationStatus = "waitlist";
          }
        } else if (attendeeData.attendance_mode === "physical") {
          if (
            seminar.physicalCapacity &&
            confirmedByMode >= seminar.physicalCapacity
          ) {
            registrationStatus = "waitlist";
          }
        }
      }

      // Create attendee registration
      const attendee = await tx.attendeeSeminarForm.create({
        data: {
          ...attendeeData,
          registration_status: registrationStatus,
        },
      });

      return { attendee, registrationStatus };
    });

    return {
      success: true,
      data: result.attendee,
      message:
        result.registrationStatus === "waitlist"
          ? "Added to waitlist - we'll notify you if a spot opens up"
          : "Successfully registered for the seminar",
    };
  } catch(err) {
    console.error("RegisterSeminarAttendee error", err);
    return {
      success: false,
      error: ErrorMsg("registering for seminar"),
    };
  }
}

export async function GetSeminarAttendees(seminarId: string) {
  try {
    const attendees = await prisma.attendeeSeminarForm.findMany({
      where: { seminarId },
      orderBy: { createdAt: "desc" },
    });

    return { success: true, data: attendees };
  } catch (err) {
    console.error("GetSeminarAttendees error:", err);
    return { success: false, error: ErrorMsg("getting seminar attendees") };
  }
}

export async function GetSeminarAttendee(id: string) {
  try {
    const attendee = await prisma.attendeeSeminarForm.findUnique({
      where: { id },
      include: {
        seminar: {
          select: {
            title: true,
            date: true,
            location: true,
          },
        },
      },
    });

    if (!attendee) {
      return { success: false, error: "Attendee registration not found" };
    }

    return { success: true, data: attendee };
  } catch (err) {
    console.error("GetSeminarAttendee error:", err);
    return { success: false, error: ErrorMsg("getting seminar attendee") };
  }
}

export async function UpdateSeminarAttendee(
  id: string,
  attendeeData: updateSeminarAttendeeData
) {
  try {
    const attendee = await prisma.attendeeSeminarForm.update({
      where: { id },
      data: attendeeData,
    });

    return { success: true, data: attendee };
  } catch (err) {
    console.error("UpdateSeminarAttendee error:", err);
    return { success: false, error: ErrorMsg("updating seminar attendee") };
  }
}

export async function UpdateSeminarAttendeeStatus(id: string, status: string) {
  try {
    // Use transaction to handle status changes that affect capacity
    const result = await prisma.$transaction(async (tx) => {
      const attendee = await tx.attendeeSeminarForm.findUnique({
        where: { id },
        include: { seminar: true },
      });

      if (!attendee) {
        throw new Error("Attendee not found");
      }

      // Update the attendee status
      const updatedAttendee = await tx.attendeeSeminarForm.update({
        where: { id },
        data: { registration_status: status },
      });

      // If moving from waitlist to confirmed, this is a promotion
      if (status === "confirmed" && attendee.registration_status === "waitlist") {
        return { attendee: updatedAttendee, promoted: false };
      }

      // If cancelling a confirmed attendee, promote next waitlisted person
      if (
        status === "cancelled" &&
        attendee.registration_status === "confirmed" &&
        attendee.seminar
      ) {
        // Find next waitlisted attendee with same attendance mode
        const nextWaitlisted = await tx.attendeeSeminarForm.findFirst({
          where: {
            seminarId: attendee.seminarId!,
            registration_status: "waitlist",
            attendance_mode: attendee.attendance_mode,
          },
          orderBy: { createdAt: "asc" },
        });

        if (nextWaitlisted) {
          await tx.attendeeSeminarForm.update({
            where: { id: nextWaitlisted.id },
            data: { registration_status: "confirmed" },
          });

          return { attendee: updatedAttendee, promoted: nextWaitlisted };
        }
      }

      return { attendee: updatedAttendee, promoted: false };
    });

    return {
      success: true,
      data: result.attendee,
      promoted: result.promoted,
    };
  } catch (err) {
    console.error("UpdateSeminarAttendeeStatus error:", err);
    return {
      success: false,
      error:  ErrorMsg("updating attendee status"),
    };
  }
}

export async function DeleteSeminarAttendee(id: string) {
  try {
    await prisma.attendeeSeminarForm.delete({
      where: { id },
    });

    return { success: true };
  } catch (err) {
    console.error("DeleteSeminarAttendee error:", err);
    return { success: false, error: ErrorMsg("deleting seminar attendee") };
  }
}

export async function CancelSeminarRegistration(id: string) {
  try {
    // Use the status update function which handles waitlist promotion
    return await UpdateSeminarAttendeeStatus(id, "cancelled");
  } catch (err) {
    console.error("CancelSeminarRegistration error:", err);
    return { success: false, error: ErrorMsg("cancelling registration") };
  }
}

export async function GetAttendeeByEmail(email: string, seminarId: string) {
  try {
    const attendee = await prisma.attendeeSeminarForm.findFirst({
      where: {
        email,
        seminarId,
      },
      include: {
        seminar: {
          select: {
            title: true,
            date: true,
            location: true,
          },
        },
      },
    });

    return { success: true, data: attendee };
  } catch (err) {
    console.error("GetAttendeeByEmail error:", err);
    return { success: false, error: ErrorMsg("getting attendee by email") };
  }
}

export async function BulkUpdateSeminarAttendees(
  attendeeIds: string[],
  status: string
) {
  try {
    const result = await prisma.attendeeSeminarForm.updateMany({
      where: {
        id: {
          in: attendeeIds,
        },
      },
      data: {
        registration_status: status,
      },
    });

    return { success: true, data: result };
  } catch (err) {
    console.error("BulkUpdateSeminarAttendees error:", err);
    return { success: false, error: ErrorMsg("bulk updating attendees") };
  }
}

export async function ChangeAttendanceMode(
  id: string,
  newMode: string
) {
  try {
    // Use transaction to check capacity for new mode
    const result = await prisma.$transaction(async (tx) => {
      const attendee = await tx.attendeeSeminarForm.findUnique({
        where: { id },
        include: {
          seminar: {
            include: {
              attendees: {
                where: {
                  registration_status: "confirmed",
                  attendance_mode: newMode,
                },
              },
            },
          },
        },
      });

      if (!attendee || !attendee.seminar) {
        throw new Error("Attendee or seminar not found");
      }

      // Check if there's capacity in the new mode
      const capacity =
        newMode === "virtual"
          ? attendee.seminar.virtualCapacity
          : attendee.seminar.physicalCapacity;

      if (capacity) {
        const confirmedInMode = attendee.seminar.attendees.length;
        if (confirmedInMode >= capacity) {
          throw new Error(`No capacity available for ${newMode} attendance`);
        }
      }

      // Update attendance mode
      const updated = await tx.attendeeSeminarForm.update({
        where: { id },
        data: { attendance_mode: newMode },
      });

      return updated;
    });

    return { success: true, data: result };
  } catch (err) {
    console.error("ChangeAttendanceMode error:", err);
    return {
      success: false,
      error: ErrorMsg("changing attendance mode"),
    };
  }
}