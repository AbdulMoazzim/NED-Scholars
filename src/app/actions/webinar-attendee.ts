"use server";

import { prisma } from "@/lib/auth";
import { createWebinarAttendeeData, updateWebinarAttendeeData } from "@/lib/form-types";
import { ErrorMsg } from "@/lib/utils";

export async function RegisterWebinarAttendee(attendeeData: createWebinarAttendeeData) {
  try {
    // Use transaction to ensure atomic operation
    const result = await prisma.$transaction(async (tx) => {
      // Check webinar capacity
      const webinar = await tx.webinar.findUnique({
        where: { id: attendeeData.webinarId || "" },
        include: {
          attendees: {
            where: {
              registration_status: "confirmed",
            },
          },
        },
      });

      if (!webinar) {
        throw new Error("Webinar not found");
      }

      // Check if already registered
      const existingRegistration = await tx.attendeeWebinarForm.findFirst({
        where: {
          email: attendeeData.email,
          webinarId: attendeeData.webinarId,
          registration_status: {
            not: "cancelled",
          },
        },
      });

      if (existingRegistration) {
        throw new Error("Already registered for this webinar");
      }

      // Determine registration status based on capacity
      let registrationStatus = "confirmed";
      
      if (webinar.maxParticipants) {
        const confirmedCount = webinar.attendees.length;
        if (confirmedCount >= webinar.maxParticipants) {
          registrationStatus = "waitlist";
        }
      }

      // Create attendee registration
      const attendee = await tx.attendeeWebinarForm.create({
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
          : "Successfully registered for the webinar",
    };
  } catch(err) {
    console.error("RegisterWebinarAttendee error", err);
    return {
      success: false,
      error: ErrorMsg("registering for webinar"),
    };
  }
}

export async function GetWebinarAttendees(webinarId: string) {
  try {
    const attendees = await prisma.attendeeWebinarForm.findMany({
      where: { webinarId },
      orderBy: { createdAt: "desc" },
    });

    return { success: true, data: attendees };
  } catch (err) {
    console.error("GetWebinarAttendees error:", err);
    return { success: false, error: ErrorMsg("getting webinar attendees") };
  }
}

export async function GetWebinarAttendee(id: string) {
  try {
    const attendee = await prisma.attendeeWebinarForm.findUnique({
      where: { id },
      include: {
        webinar: {
          select: {
            title: true,
            date: true,
            meetingLink: true,
          },
        },
      },
    });

    if (!attendee) {
      return { success: false, error: "Attendee registration not found" };
    }

    return { success: true, data: attendee };
  } catch (err) {
    console.error("GetWebinarAttendee error:", err);
    return { success: false, error: ErrorMsg("getting webinar attendee") };
  }
}

export async function UpdateWebinarAttendee(
  id: string,
  attendeeData: updateWebinarAttendeeData
) {
  try {
    const attendee = await prisma.attendeeWebinarForm.update({
      where: { id },
      data: attendeeData,
    });

    return { success: true, data: attendee };
  } catch (err) {
    console.error("UpdateWebinarAttendee error:", err);
    return { success: false, error: ErrorMsg("updating webinar attendee") };
  }
}

export async function UpdateWebinarAttendeeStatus(id: string, status: string) {
  try {
    // Use transaction to handle status changes that affect capacity
    const result = await prisma.$transaction(async (tx) => {
      const attendee = await tx.attendeeWebinarForm.findUnique({
        where: { id },
        include: { webinar: true },
      });

      if (!attendee) {
        throw new Error("Attendee not found");
      }

      // Update the attendee status
      const updatedAttendee = await tx.attendeeWebinarForm.update({
        where: { id },
        data: { registration_status: status },
      });

      // If moving from waitlist to confirmed, check if we need to promote next waitlisted person
      if (status === "confirmed" && attendee.registration_status === "waitlist") {
        // This is now a confirmed attendee
        return { attendee: updatedAttendee, promoted: false };
      }

      // If cancelling a confirmed attendee, promote next waitlisted person
      if (
        status === "cancelled" &&
        attendee.registration_status === "confirmed" &&
        attendee.webinar
      ) {
        // Find next waitlisted attendee
        const nextWaitlisted = await tx.attendeeWebinarForm.findFirst({
          where: {
            webinarId: attendee.webinarId!,
            registration_status: "waitlist",
          },
          orderBy: { createdAt: "asc" },
        });

        if (nextWaitlisted) {
          await tx.attendeeWebinarForm.update({
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
  } catch {
    console.error("UpdateWebinarAttendeeStatus error:");
    return {
      success: false,
      error: ErrorMsg("updating attendee status"),
    };
  }
}

export async function DeleteWebinarAttendee(id: string) {
  try {
    await prisma.attendeeWebinarForm.delete({
      where: { id },
    });

    return { success: true };
  } catch (err) {
    console.error("DeleteWebinarAttendee error:", err);
    return { success: false, error: ErrorMsg("deleting webinar attendee") };
  }
}

export async function CancelWebinarRegistration(id: string) {
  try {
    // Use the status update function which handles waitlist promotion
    return await UpdateWebinarAttendeeStatus(id, "cancelled");
  } catch (err) {
    console.error("CancelWebinarRegistration error:", err);
    return { success: false, error: ErrorMsg("cancelling registration") };
  }
}

export async function GetAttendeeByEmail(email: string, webinarId: string) {
  try {
    const attendee = await prisma.attendeeWebinarForm.findFirst({
      where: {
        email,
        webinarId,
      },
      include: {
        webinar: {
          select: {
            title: true,
            date: true,
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

export async function BulkUpdateWebinarAttendees(
  attendeeIds: string[],
  status: string
) {
  try {
    const result = await prisma.attendeeWebinarForm.updateMany({
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
    console.error("BulkUpdateWebinarAttendees error:", err);
    return { success: false, error: ErrorMsg("bulk updating attendees") };
  }
}