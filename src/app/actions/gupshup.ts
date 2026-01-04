"use server";

import { prisma } from "@/lib/auth";
import {
  CreateGupShupRegistrationData,
  CreateGupShupSessionData,
  UpdateGupShupSessionData,
} from "@/lib/form-types";
import {
  createRollbackState,
  performRollback,
  uploadImageWithTracking,
} from "@/lib/serverUtils";
import { Resource } from "@/lib/types";
import { ErrorMsg } from "@/lib/utils";
import { deleteImage } from "./resource";

// Create Session
export async function CreateGupShupSession(
  sessionData: CreateGupShupSessionData,
  image: Resource | null
) {
  const rollbackState = createRollbackState("gupshup");
  try {
    const session = await prisma.gupShupSession.create({
      data: {
        ...sessionData,
        category: sessionData.category,
        status: sessionData.status || "upcoming",
        requiresRegistration: sessionData.requiresRegistration ?? true,
        isPublic: sessionData.isPublic ?? true,
        featured: sessionData.featured ?? false,
      },
      include: {
        registrations: true,
      },
    });
    rollbackState.entityId = session.id;
    if (image) {
      const result = await uploadImageWithTracking(
        image,
        "gupshup",
        session.id,
        "gupshup",
        rollbackState
      );
      if (!result.success) {
        throw new Error("Failed to upload image");
      }
    }
    return { success: true, data: session };
  } catch (err) {
    console.error("CreateGupShupSession error:", err);
    console.log("🔄 Starting rollback...");

    await performRollback(rollbackState);
    return { success: false, error: ErrorMsg("creating Gup Shup session") };
  }
}

// Get All Sessions
export async function GetAllGupShupSessions() {
  try {
    const sessions = await prisma.gupShupSession.findMany({
      include: {
        registrations: true,
        thumbnailImage: true,
        _count: {
          select: { registrations: true },
        },
      },
      orderBy: [{ featured: "desc" }, { date: "desc" }],
    });

    return { success: true, data: sessions };
  } catch (err) {
    console.error("GetAllGupShupSessions error:", err);
    return { success: false, error: ErrorMsg("getting Gup Shup sessions") };
  }
}

// Get Upcoming Sessions
export async function GetUpcomingGupShupSessions() {
  try {
    const sessions = await prisma.gupShupSession.findMany({
      where: {
        status: "upcoming",
        isPublic: true,
        date: {
          gte: new Date(),
        },
      },
      include: {
        thumbnailImage: true,
        _count: {
          select: { registrations: true },
        },
      },
      orderBy: { date: "asc" },
    });

    return { success: true, data: sessions };
  } catch (err) {
    console.error("GetUpcomingGupShupSessions error:", err);
    return { success: false, error: ErrorMsg("getting upcoming sessions") };
  }
}

// Get Completed Sessions (for recordings)
export async function GetCompletedGupShupSessions() {
  try {
    const sessions = await prisma.gupShupSession.findMany({
      where: {
        status: "completed",
        isPublic: true,
        youtubeUrl: {
          not: null,
        },
      },
      include: {
        thumbnailImage: true,
        _count: {
          select: { registrations: true },
        },
      },
      orderBy: { date: "desc" },
    });

    return { success: true, data: sessions };
  } catch (err) {
    console.error("GetCompletedGupShupSessions error:", err);
    return { success: false, error: ErrorMsg("getting completed sessions") };
  }
}

// Get Session by ID
export async function GetGupShupSessionById(id: string) {
  try {
    const session = await prisma.gupShupSession.findUnique({
      where: { id },
      include: {
        registrations: true,
        _count: {
          select: { registrations: true },
        },
      },
    });

    if (!session) {
      return { success: false, error: "Session not found" };
    }

    return { success: true, data: session };
  } catch (err) {
    console.error("GetGupShupSessionById error:", err);
    return { success: false, error: ErrorMsg("getting session") };
  }
}

// Get Session by Slug
export async function GetGupShupSessionBySlug(slug: string) {
  try {
    if (!slug) throw new Error("No slug given");
    const session = await prisma.gupShupSession.findUnique({
      where: { slug },
      include: {
        _count: {
          select: { registrations: true },
        },
        thumbnailImage: true,
        registrations: true,
      },
    });

    if (!session) {
      return { success: false, error: "Session not found" };
    }

    return { success: true, data: session };
  } catch (err) {
    console.error("GetGupShupSessionBySlug error:", err);
    return { success: false, error: ErrorMsg("getting session") };
  }
}

// Update Session
export async function UpdateGupShupSession(
  id: string,
  sessionData: UpdateGupShupSessionData,
  image: Resource | null
) {
  const rollbackState = createRollbackState("gupshup-updated");
  try {
    const updateData = { ...sessionData };

    // Convert enum if provided
    if (sessionData.category) {
      updateData.category = sessionData.category;
    }
    if (sessionData.status) {
      updateData.status = sessionData.status;
    }
    if (image) {
      const previousSession = await prisma.gupShupSession.findFirst({
        where: { id },
        include: { thumbnailImage: true },
      });
      if (previousSession) {
        if (previousSession?.thumbnailImage.length > 0) {
          await deleteImage(
            previousSession?.thumbnailImage[0].id || "",
            previousSession.thumbnailImage[0].public_id || ""
          );
        }
      }
    }
    const session = await prisma.gupShupSession.update({
      where: { id },
      data: updateData,
      include: {
        registrations: true,
        _count: {
          select: { registrations: true },
        },
      },
    });

    rollbackState.entityId = session.id;
    if (image) {
      const result = await uploadImageWithTracking(
        image,
        "gupshup",
        session.id,
        "gupshup-updated",
        rollbackState
      );
      if (!result.success) {
        throw new Error("Failed to upload image");
      }
    }

    return { success: true, data: session };
  } catch (err) {
    console.error("UpdateGupShupSession error:", err);
    console.log("🔄 Starting rollback...");

    await performRollback(rollbackState);
    return { success: false, error: ErrorMsg("updating session") };
  }
}

// Delete Session
export async function DeleteGupShupSession(id: string) {
  try {
    await prisma.gupShupSession.delete({
      where: { id },
    });

    return { success: true };
  } catch (err) {
    console.error("DeleteGupShupSession error:", err);
    return { success: false, error: ErrorMsg("deleting session") };
  }
}

// ============================================
// GUP SHUP REGISTRATION ACTIONS
// ============================================

// Register for Session
export async function RegisterForGupShupSession(
  registrationData: CreateGupShupRegistrationData
) {
  try {
    // Check for duplicate registration
    const existingRegistration = await prisma.gupShupRegistration.findUnique({
      where: {
        email_sessionId: {
          email: registrationData.email,
          sessionId: registrationData.sessionId,
        },
      },
    });

    if (existingRegistration) {
      return {
        success: false,
        error: "You have already registered for this session",
      };
    }

    // Check session capacity
    const session = await prisma.gupShupSession.findUnique({
      where: { id: registrationData.sessionId },
      include: {
        _count: {
          select: { registrations: true },
        },
      },
    });

    if (!session) {
      return { success: false, error: "Session not found" };
    }

    // Determine registration status based on capacity
    let registrationStatus: "confirmed" | "waitlist" = "confirmed";
    if (
      session.maxAttendees &&
      session._count.registrations >= session.maxAttendees
    ) {
      registrationStatus = "waitlist";
    }

    // Create registration
    const registration = await prisma.gupShupRegistration.create({
      data: {
        ...registrationData,
        registrationStatus,
      },
      include: {
        session: true,
      },
    });

    return { success: true, data: registration };
  } catch (err) {
    console.error("RegisterForGupShupSession error:", err);
    return { success: false, error: ErrorMsg("registering for session") };
  }
}

// Get All Registrations
export async function GetAllGupShupRegistrations() {
  try {
    const registrations = await prisma.gupShupRegistration.findMany({
      include: {
        session: {
          select: {
            id: true,
            title: true,
            date: true,
            speakerName: true,
            category: true,
          },
        },
      },
      orderBy: { createdAt: "desc" },
    });

    return { success: true, data: registrations };
  } catch (err) {
    console.error("GetAllGupShupRegistrations error:", err);
    return { success: false, error: ErrorMsg("getting registrations") };
  }
}
export async function GetAllGupShupRegistrationsByUser(userId: string) {
  try {
    const registrations = await prisma.gupShupRegistration.findMany({
      where: {
        userId,
      },
      include: {
        session: {
          select: {
            id: true,
            title: true,
            date: true,
            speakerName: true,
            category: true,
          },
        },
      },
      orderBy: { createdAt: "desc" },
    });

    return { success: true, data: registrations };
  } catch (err) {
    console.error("GetAllGupShupRegistrations error:", err);
    return { success: false, error: ErrorMsg("getting registrations") };
  }
}

// Get Registrations by Session
export async function GetGupShupRegistrationsBySession(sessionId: string) {
  try {
    const registrations = await prisma.gupShupRegistration.findMany({
      where: { sessionId },
      orderBy: { createdAt: "desc" },
    });

    return { success: true, data: registrations };
  } catch (err) {
    console.error("GetGupShupRegistrationsBySession error:", err);
    return { success: false, error: ErrorMsg("getting registrations") };
  }
}

// Update Registration Status
export async function UpdateGupShupRegistrationStatus(
  registrationId: string,
  status: string
) {
  try {
    const registration = await prisma.gupShupRegistration.update({
      where: { id: registrationId },
      data: {
        registrationStatus: status,
      },
      include: {
        session: true,
      },
    });

    return { success: true, data: registration };
  } catch (err) {
    console.error("UpdateGupShupRegistrationStatus error:", err);
    return { success: false, error: ErrorMsg("updating registration status") };
  }
}

// Mark Attendance
export async function MarkGupShupAttendance(
  registrationId: string,
  attended: boolean
) {
  try {
    const registration = await prisma.gupShupRegistration.update({
      where: { id: registrationId },
      data: {
        attended,
        registrationStatus: attended ? "attended" : "confirmed",
      },
    });

    return { success: true, data: registration };
  } catch (err) {
    console.error("MarkGupShupAttendance error:", err);
    return { success: false, error: ErrorMsg("marking attendance") };
  }
}

// Submit Feedback
export async function SubmitGupShupFeedback(
  registrationId: string,
  rating: number,
  feedback: string
) {
  try {
    const registration = await prisma.gupShupRegistration.update({
      where: { id: registrationId },
      data: {
        rating,
        feedback,
        feedbackDate: new Date(),
      },
    });

    return { success: true, data: registration };
  } catch (err) {
    console.error("SubmitGupShupFeedback error:", err);
    return { success: false, error: ErrorMsg("submitting feedback") };
  }
}

// Get Session Stats
export async function GetGupShupSessionStats(sessionId: string) {
  try {
    const session = await prisma.gupShupSession.findUnique({
      where: { id: sessionId },
      include: {
        registrations: true,
      },
    });

    if (!session) {
      return { success: false, error: "Session not found" };
    }

    const stats = {
      totalRegistrations: session.registrations.length,
      confirmed: session.registrations.filter(
        (r) => r.registrationStatus === "confirmed"
      ).length,
      waitlist: session.registrations.filter(
        (r) => r.registrationStatus === "waitlist"
      ).length,
      attended: session.registrations.filter((r) => r.attended).length,
      cancelled: session.registrations.filter(
        (r) => r.registrationStatus === "cancelled"
      ).length,
      averageRating:
        session.registrations.filter((r) => r.rating).length > 0
          ? (
              session.registrations
                .filter((r) => r.rating)
                .reduce((sum, r) => sum + (r.rating || 0), 0) /
              session.registrations.filter((r) => r.rating).length
            ).toFixed(1)
          : null,
      availableSlots: session.maxAttendees
        ? session.maxAttendees -
          session.registrations.filter(
            (r) => r.registrationStatus === "confirmed"
          ).length
        : null,
    };

    return { success: true, data: stats };
  } catch (err) {
    console.error("GetGupShupSessionStats error:", err);
    return { success: false, error: ErrorMsg("getting session stats") };
  }
}

// Get Overall Stats
export async function GetGupShupOverallStats() {
  try {
    const [
      totalSessions,
      upcomingSessions,
      completedSessions,
      totalRegistrations,
    ] = await Promise.all([
      prisma.gupShupSession.count(),
      prisma.gupShupSession.count({ where: { status: "upcoming" } }),
      prisma.gupShupSession.count({ where: { status: "completed" } }),
      prisma.gupShupRegistration.count(),
    ]);

    return {
      success: true,
      data: {
        totalSessions,
        upcomingSessions,
        completedSessions,
        totalRegistrations,
      },
    };
  } catch (err) {
    console.error("GetGupShupOverallStats error:", err);
    return { success: false, error: ErrorMsg("getting overall stats") };
  }
}

// Cancel Registration
export async function CancelGupShupRegistration(registrationId: string) {
  try {
    const registration = await prisma.gupShupRegistration.update({
      where: { id: registrationId },
      data: {
        registrationStatus: "cancelled",
      },
    });

    return { success: true, data: registration };
  } catch (err) {
    console.error("CancelGupShupRegistration error:", err);
    return { success: false, error: ErrorMsg("cancelling registration") };
  }
}
