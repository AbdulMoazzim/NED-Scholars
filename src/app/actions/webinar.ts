"use server";

import { prisma } from "@/lib/auth";
import { CreateWebinarData, UpdateWebinarData } from "@/lib/form-types";
import {
  createRollbackState,
  performRollback,
  uploadImageWithTracking,
  uploadVideoWithTracking,
} from "@/lib/serverUtils";
import { Resource } from "@/lib/types";
import { ErrorMsg } from "@/lib/utils";

export async function CreateWebinar(webinarData: CreateWebinarData) {
  try {
    const webinar = await prisma.webinar.create({
      data: {
        ...webinarData,
        status: webinarData.status || "upcoming",
      },
      include: {
        attendees: true,
        images: true,
        videos: true,
      },
    });

    return { success: true, data: webinar };
  } catch (err) {
    console.error("CreateWebinar error:", err);
    return { success: false, error: ErrorMsg("creating webinar") };
  }
}

export async function GetAllWebinars() {
  try {
    const webinars = await prisma.webinar.findMany({
      include: {
        attendees: {
          orderBy: { createdAt: "desc" },
        },
        images: true,
        videos: true,
      },
      orderBy: { date: "desc" },
    });

    return { success: true, data: webinars };
  } catch (err) {
    console.error("GetAllWebinars error:", err);
    return { success: false, error: ErrorMsg("getting webinars") };
  }
}

export async function GetWebinar(id: string) {
  try {
    const webinar = await prisma.webinar.findUnique({
      where: { id },
      include: {
        attendees: {
          orderBy: { createdAt: "desc" },
        },
        images: true,
        videos: true,
      },
    });

    if (!webinar) {
      return { success: false, error: "Webinar not found" };
    }

    return { success: true, data: webinar };
  } catch (err) {
    console.error("GetWebinar error:", err);
    return { success: false, error: ErrorMsg("getting webinar") };
  }
}

export async function GetUpcomingWebinars() {
  try {
    const webinars = await prisma.webinar.findMany({
      where: {
        status: "upcoming",
        date: {
          gte: new Date(),
        },
      },
      include: {
        attendees: true,
        images: true,
        videos: true
      },
      orderBy: { date: "asc" },
    });

    return { success: true, data: webinars };
  } catch (err) {
    console.error("GetUpcomingWebinars error:", err);
    return { success: false, error: ErrorMsg("getting upcoming webinars") };
  }
}

export async function UpdateWebinar(
  id: string,
  webinarData: UpdateWebinarData,
  images: Resource[],
  videos: Resource[]
) {
  const rollbackState = createRollbackState("webinar");
  try {
    const webinar = await prisma.webinar.update({
      where: { id },
      data: webinarData,
      include: {
        attendees: true,
        images: true,
        videos: true,
      },
    });
    rollbackState.entityId = webinar.id;

    if (images?.length > 0) {
      for (const imageResource of images) {
        const result = await uploadImageWithTracking(
          imageResource,
          "webinar",
          webinar.id,
          "webinar",
          rollbackState
        );
        if (!result.success) {
          throw new Error("Failed to upload image");
        }
      }
    }

    if (videos?.length > 0) {
      for (const videoResource of videos) {
        const result = await uploadVideoWithTracking(
          videoResource,
          "webinar",
          webinar.id,
          "webinar",
          rollbackState
        );
        if (!result.success) {
          throw new Error("Failed to upload video");
        }
      }
    }
    return { success: true, data: webinar };
  } catch (err) {
    console.error("UpdateWebinar error:", err);
    console.log("🔄 Starting rollback...");

    await performRollback(rollbackState);
    return { success: false, error: ErrorMsg("updating webinar") };
  }
}

export async function DeleteWebinar(id: string) {
  try {
    await prisma.webinar.delete({
      where: { id },
    });

    return { success: true };
  } catch (err) {
    console.error("DeleteWebinar error:", err);
    return { success: false, error: ErrorMsg("deleting webinar") };
  }
}

export async function UpdateWebinarStatus(id: string, status: string) {
  try {
    const webinar = await prisma.webinar.update({
      where: { id },
      data: { status },
    });

    return { success: true, data: webinar };
  } catch (err) {
    console.error("UpdateWebinarStatus error:", err);
    return { success: false, error: ErrorMsg("updating webinar status") };
  }
}

export async function GetWebinarStats(id: string) {
  try {
    const webinar = await prisma.webinar.findUnique({
      where: { id },
      include: {
        attendees: true,
      },
    });

    if (!webinar) {
      return { success: false, error: "Webinar not found" };
    }

    const stats = {
      totalRegistrations: webinar.attendees.length,
      confirmedAttendees: webinar.attendees.filter(
        (a) => a.registration_status === "confirmed"
      ).length,
      waitlistAttendees: webinar.attendees.filter(
        (a) => a.registration_status === "waitlist"
      ).length,
      cancelledAttendees: webinar.attendees.filter(
        (a) => a.registration_status === "cancelled"
      ).length,
      availableSlots: webinar.maxParticipants
        ? webinar.maxParticipants -
          webinar.attendees.filter((a) => a.registration_status === "confirmed")
            .length
        : null,
      fillPercentage: webinar.maxParticipants
        ? Math.round(
            (webinar.attendees.filter(
              (a) => a.registration_status === "confirmed"
            ).length /
              webinar.maxParticipants) *
              100
          )
        : null,
    };

    return { success: true, data: stats };
  } catch (err) {
    console.error("GetWebinarStats error:", err);
    return { success: false, error: ErrorMsg("getting webinar stats") };
  }
}

export async function CheckWebinarAvailability(id: string) {
  try {
    const webinar = await prisma.webinar.findUnique({
      where: { id },
      include: {
        attendees: {
          where: {
            registration_status: "confirmed",
          },
        },
      },
    });

    if (!webinar) {
      return { success: false, error: "Webinar not found" };
    }

    const confirmedCount = webinar.attendees.length;
    const isAvailable = webinar.maxParticipants
      ? confirmedCount < webinar.maxParticipants
      : true;

    return {
      success: true,
      data: {
        isAvailable,
        confirmedCount,
        maxParticipants: webinar.maxParticipants,
        remainingSlots: webinar.maxParticipants
          ? webinar.maxParticipants - confirmedCount
          : null,
      },
    };
  } catch (err) {
    console.error("CheckWebinarAvailability error:", err);
    return { success: false, error: ErrorMsg("checking webinar availability") };
  }
}
