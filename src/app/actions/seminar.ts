"use server";

import { prisma } from "@/lib/auth";
import { CreateSeminarData, UpdateSeminarData } from "@/lib/form-types";
import { ErrorMsg } from "@/lib/utils";

export async function CreateSeminar(seminarData: CreateSeminarData) {
  try {
    const seminar = await prisma.seminar.create({
      data: {
        ...seminarData,
        status: seminarData.status || "upcoming",
      },
      include: {
        attendees: true,
        presenters: true,
        images: true,
        videos: true,
      },
    });

    return { success: true, data: seminar };
  } catch (err) {
    console.error("CreateSeminar error:", err);
    return { success: false, error: ErrorMsg("creating seminar") };
  }
}

export async function CreateSeminarForPresenter(
  presenterId: string,
  seminarData: CreateSeminarData
) {
  try {
    const result = await prisma.$transaction(async (tx) => {
      // Create the seminar
      const seminar = await tx.seminar.create({
        data: {
          ...seminarData,
          status: seminarData.status || "upcoming",
        },
      });

      // Link the presenter to the seminar and approve them
      await tx.presenterSeminarForm.update({
        where: { id: presenterId },
        data: {
          seminarId: seminar.id,
          application_status: "approved",
        },
      });

      // Fetch the complete seminar with relations
      const completeSeminar = await tx.seminar.findUnique({
        where: { id: seminar.id },
        include: {
          attendees: true,
          presenters: true,
          images: true,
          videos: true,
        },
      });

      return completeSeminar;
    });

    return { success: true, data: result };
  } catch (err) {
    console.error("CreateSeminarForPresenter error:", err);
    return { success: false, error: ErrorMsg("creating seminar for presenter") };
  }
}

export async function GetAllSeminars() {
  try {
    const seminars = await prisma.seminar.findMany({
      include: {
        attendees: {
          orderBy: { createdAt: "desc" },
        },
        presenters: {
          orderBy: { createdAt: "desc" },
        },
        images: true,
        videos: true,
      },
      orderBy: { date: "desc" },
    });

    return { success: true, data: seminars };
  } catch (err) {
    console.error("GetAllSeminars error:", err);
    return { success: false, error: ErrorMsg("getting seminars") };
  }
}

export async function GetSeminar(id: string) {
  try {
    const seminar = await prisma.seminar.findUnique({
      where: { id },
      include: {
        attendees: {
          orderBy: { createdAt: "desc" },
        },
        presenters: {
          orderBy: { createdAt: "desc" },
        },
        images: true,
        videos: true,
      },
    });

    if (!seminar) {
      return { success: false, error: "Seminar not found" };
    }

    return { success: true, data: seminar };
  } catch (err) {
    console.error("GetSeminar error:", err);
    return { success: false, error: ErrorMsg("getting seminar") };
  }
}

export async function GetUpcomingSeminars() {
  try {
    const seminars = await prisma.seminar.findMany({
      where: {
        status: "upcoming",
        date: {
          gte: new Date(),
        },
      },
      include: {
        attendees: true,
        presenters: true,
        images: true,
      },
      orderBy: { date: "asc" },
    });

    return { success: true, data: seminars };
  } catch (err) {
    console.error("GetUpcomingSeminars error:", err);
    return { success: false, error: ErrorMsg("getting upcoming seminars") };
  }
}

export async function UpdateSeminar(id: string, seminarData: UpdateSeminarData) {
  try {
    const seminar = await prisma.seminar.update({
      where: { id },
      data: seminarData,
      include: {
        attendees: true,
        presenters: true,
        images: true,
        videos: true,
      },
    });

    return { success: true, data: seminar };
  } catch (err) {
    console.error("UpdateSeminar error:", err);
    return { success: false, error: ErrorMsg("updating seminar") };
  }
}

export async function DeleteSeminar(id: string) {
  try {
    await prisma.seminar.delete({
      where: { id },
    });

    return { success: true };
  } catch (err) {
    console.error("DeleteSeminar error:", err);
    return { success: false, error: ErrorMsg("deleting seminar") };
  }
}

export async function UpdateSeminarStatus(id: string, status: string) {
  try {
    const seminar = await prisma.seminar.update({
      where: { id },
      data: { status },
    });

    return { success: true, data: seminar };
  } catch (err) {
    console.error("UpdateSeminarStatus error:", err);
    return { success: false, error: ErrorMsg("updating seminar status") };
  }
}

export async function GetSeminarStats(id: string) {
  try {
    const seminar = await prisma.seminar.findUnique({
      where: { id },
      include: {
        attendees: true,
        presenters: {
          where: {
            application_status: "approved",
          },
        },
      },
    });

    if (!seminar) {
      return { success: false, error: "Seminar not found" };
    }

    const virtualAttendees = seminar.attendees.filter(
      (a) =>
        a.attendance_mode === "virtual" && a.registration_status === "confirmed"
    );
    const physicalAttendees = seminar.attendees.filter(
      (a) =>
        a.attendance_mode === "physical" && a.registration_status === "confirmed"
    );

    const stats = {
      totalRegistrations: seminar.attendees.length,
      confirmedAttendees: seminar.attendees.filter(
        (a) => a.registration_status === "confirmed"
      ).length,
      waitlistAttendees: seminar.attendees.filter(
        (a) => a.registration_status === "waitlist"
      ).length,
      cancelledAttendees: seminar.attendees.filter(
        (a) => a.registration_status === "cancelled"
      ).length,
      virtualAttendees: virtualAttendees.length,
      physicalAttendees: physicalAttendees.length,
      approvedPresenters: seminar.presenters.length,
      availableSlots: {
        total: seminar.maxCapacity
          ? seminar.maxCapacity -
            seminar.attendees.filter((a) => a.registration_status === "confirmed")
              .length
          : null,
        virtual: seminar.virtualCapacity
          ? seminar.virtualCapacity - virtualAttendees.length
          : null,
        physical: seminar.physicalCapacity
          ? seminar.physicalCapacity - physicalAttendees.length
          : null,
      },
      fillPercentage: {
        total: seminar.maxCapacity
          ? Math.round(
              (seminar.attendees.filter((a) => a.registration_status === "confirmed")
                .length /
                seminar.maxCapacity) *
                100
            )
          : null,
        virtual: seminar.virtualCapacity
          ? Math.round((virtualAttendees.length / seminar.virtualCapacity) * 100)
          : null,
        physical: seminar.physicalCapacity
          ? Math.round((physicalAttendees.length / seminar.physicalCapacity) * 100)
          : null,
      },
    };

    return { success: true, data: stats };
  } catch (err) {
    console.error("GetSeminarStats error:", err);
    return { success: false, error: ErrorMsg("getting seminar stats") };
  }
}

export async function CheckSeminarAvailability(
  id: string,
  attendanceMode: "virtual" | "physical"
) {
  try {
    const seminar = await prisma.seminar.findUnique({
      where: { id },
      include: {
        attendees: {
          where: {
            attendance_mode: attendanceMode,
            registration_status: "confirmed",
          },
        },
      },
    });

    if (!seminar) {
      return { success: false, error: "Seminar not found" };
    }

    const confirmedCount = seminar.attendees.length;
    const capacity =
      attendanceMode === "virtual"
        ? seminar.virtualCapacity
        : seminar.physicalCapacity;

    const isAvailable = capacity ? confirmedCount < capacity : true;

    // Also check total capacity
    const totalConfirmed = await prisma.attendeeSeminarForm.count({
      where: {
        seminarId: id,
        registration_status: "confirmed",
      },
    });

    const isTotalAvailable = seminar.maxCapacity
      ? totalConfirmed < seminar.maxCapacity
      : true;

    return {
      success: true,
      data: {
        isAvailable: isAvailable && isTotalAvailable,
        confirmedCount,
        capacity,
        remainingSlots: capacity ? capacity - confirmedCount : null,
        totalConfirmed,
        maxCapacity: seminar.maxCapacity,
      },
    };
  } catch (err) {
    console.error("CheckSeminarAvailability error:", err);
    return { success: false, error: ErrorMsg("checking seminar availability") };
  }
}