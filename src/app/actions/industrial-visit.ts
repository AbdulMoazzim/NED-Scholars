"use server";

import { prisma } from "@/lib/auth";
import { CreateRegistrationData, CreateVisitData, UpdateVisitData, UpdateWebinarData } from "@/lib/form-types";
import { createRollbackState, performRollback, uploadImageWithTracking, uploadVideoWithTracking } from "@/lib/serverUtils";
import { Resource } from "@/lib/types";
import { ErrorMsg } from "@/lib/utils";



// Create Industrial Visit
export async function CreateIndustrialVisit(visitData: CreateVisitData) {
  try {
    const visit = await prisma.industrialVisit.create({
      data: {
        ...visitData,
        industry: visitData.industry,
        status: (visitData.status) || "upcoming",
        transportProvided: visitData.transportProvided ?? false,
      },
      include: {
        registrations: true,
        images: true,
        videos: true,
      },
    });

    return { success: true, data: visit };
  } catch (err) {
    console.error("CreateIndustrialVisit error:", err);
    return { success: false, error: ErrorMsg("creating industrial visit") };
  }
}

// Get All Industrial Visits
export async function GetAllIndustrialVisits() {
  try {
    const visits = await prisma.industrialVisit.findMany({
      include: {
        _count: {
          select: { registrations: true },
        },
        images: true,
        videos: true,
      },
      orderBy: [{ visitDate: "desc" }],
    });

    return { success: true, data: visits };
  } catch (err) {
    console.error("GetAllIndustrialVisits error:", err);
    return { success: false, error: ErrorMsg("getting industrial visits") };
  }
}

// Get Upcoming Visits (for public page)
export async function GetUpcomingVisits() {
  try {
    const visits = await prisma.industrialVisit.findMany({
      where: {
        status: "upcoming",
        visitDate: {
          gte: new Date(),
        },
      },
      include: {
        _count: {
          select: { registrations: true },
        },
        images: true,
        videos: true
      },
      orderBy: [{ visitDate: "asc" }],
    });

    return { success: true, data: visits };
  } catch (err) {
    console.error("GetUpcomingVisits error:", err);
    return { success: false, error: ErrorMsg("getting upcoming visits") };
  }
}

// Get Past Visits (completed)
export async function GetPastVisits() {
  try {
    const visits = await prisma.industrialVisit.findMany({
      where: {
        status: "completed",
      },
      include: {
        _count: {
          select: { registrations: true },
        },
        images: true,
        videos: true,
      },
      orderBy: { visitDate: "desc" },
      take: 10,
    });

    return { success: true, data: visits };
  } catch (err) {
    console.error("GetPastVisits error:", err);
    return { success: false, error: ErrorMsg("getting past visits") };
  }
}

// Get Visit by ID
export async function GetVisitById(id: string) {
  try {
    const visit = await prisma.industrialVisit.findUnique({
      where: { id },
      include: {
        registrations: true,
        images: true,
        videos: true,
      },
    });

    if (!visit) {
      return { success: false, error: "Visit not found" };
    }

    return { success: true, data: visit };
  } catch (err) {
    console.error("GetVisitById error:", err);
    return { success: false, error: ErrorMsg("getting visit") };
  }
}

// Get Visit by Slug
export async function GetVisitBySlug(slug: string) {
  try {
    const visit = await prisma.industrialVisit.findUnique({
      where: { slug },
      include: {
        _count: {
          select: { registrations: true },
        },
        registrations: true,
        images: true,
        videos: true,
      },
    });

    if (!visit) {
      return { success: false, error: "Visit not found" };
    }

    return { success: true, data: visit };
  } catch (err) {
    console.error("GetVisitBySlug error:", err);
    return { success: false, error: ErrorMsg("getting visit") };
  }
}

// Update Industrial Visit
export async function UpdateIndustrialVisit(
  id: string,
  visitData: UpdateVisitData,
  images: Resource[],
  videos: Resource[]
) {
  const rollbackState = createRollbackState("industrial-visit");
  try {
    const updateData: UpdateVisitData = { ...visitData };

    if (visitData.industry) {
      updateData.industry = visitData.industry;
    }
    if (visitData.status) {
      updateData.status = visitData.status;
    }

    const visit = await prisma.industrialVisit.update({
      where: { id },
      data: updateData,
      include: {
        registrations: true,
        images: true,
        videos: true,
      },
    });

    rollbackState.entityId = visit.id;

    if (images?.length > 0) {
      for (const imageResource of images) {
        const result = await uploadImageWithTracking(
          imageResource,
          "industrial-visit",
          visit.id,
          "industrial-visit",
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
          "industrial-visit",
          visit.id,
          "industrial-visit",
          rollbackState
        );
        if (!result.success) {
          throw new Error("Failed to upload video");
        }
      }
    }

    return { success: true, data: visit };
  } catch (err) {
    console.error("UpdateIndustrialVisit error:", err);
    console.log("🔄 Starting rollback...");
    
    await performRollback(rollbackState);
    return { success: false, error: ErrorMsg("updating visit") };
  }
}

// Delete Industrial Visit
export async function DeleteIndustrialVisit(id: string) {
  try {
    await prisma.industrialVisit.delete({
      where: { id },
    });

    return { success: true };
  } catch (err) {
    console.error("DeleteIndustrialVisit error:", err);
    return { success: false, error: ErrorMsg("deleting visit") };
  }
}

// Get Visits by Industry
export async function GetVisitsByIndustry(industry: string) {
  try {
    const visits = await prisma.industrialVisit.findMany({
      where: {
        industry: industry,
        status: "upcoming",
      },
      include: {
        _count: {
          select: { registrations: true },
        },
        images: true,
      },
      orderBy: { visitDate: "asc" },
    });

    return { success: true, data: visits };
  } catch (err) {
    console.error("GetVisitsByIndustry error:", err);
    return { success: false, error: ErrorMsg("getting visits by industry") };
  }
}

// Check Visit Availability
export async function CheckVisitAvailability(visitId: string) {
  try {
    const visit = await prisma.industrialVisit.findUnique({
      where: { id: visitId },
      include: {
        _count: {
          select: { registrations: true },
        },
      },
    });

    if (!visit) {
      return { success: false, error: "Visit not found" };
    }

    const availableSlots = visit.maxParticipants - visit.currentParticipants;
    const isAvailable = availableSlots > 0;

    return {
      success: true,
      data: {
        isAvailable,
        availableSlots,
        currentParticipants: visit.currentParticipants,
        maxParticipants: visit.maxParticipants,
      },
    };
  } catch (err) {
    console.error("CheckVisitAvailability error:", err);
    return { success: false, error: ErrorMsg("checking availability") };
  }
}

// ============================================
// REGISTRATION ACTIONS
// ============================================


// Register for Visit
export async function RegisterForVisit(registrationData: CreateRegistrationData) {
  try {
    // Check if already registered
    const existingRegistration = await prisma.visitRegistration.findFirst({
      where: {
        email: registrationData.email,
        visitId: registrationData.visitId,
      },
    });

    if (existingRegistration) {
      return {
        success: false,
        error: "You are already registered for this visit",
      };
    }

    // Check availability
    const availability = await CheckVisitAvailability(registrationData.visitId);
    if (!availability.success || !availability.data?.isAvailable) {
      return {
        success: false,
        error: "Visit is full. No seats available.",
      };
    }

    // Create registration
    const registration = await prisma.visitRegistration.create({
      data: {
        ...registrationData,
        registrationStatus: "registered",
      },
      include: {
        visit: true,
      },
    });

    // Increment participant count
    await prisma.industrialVisit.update({
      where: { id: registrationData.visitId },
      data: {
        currentParticipants: {
          increment: 1,
        },
      },
    });

    return { success: true, data: registration };
  } catch (err) {
    console.error("RegisterForVisit error:", err);
    return { success: false, error: ErrorMsg("registering for visit") };
  }
}

// Get All Registrations
export async function GetAllRegistrations() {
  try {
    const registrations = await prisma.visitRegistration.findMany({
      include: {
        visit: true,
      },
      orderBy: { createdAt: "desc" },
    });

    return { success: true, data: registrations };
  } catch (err) {
    console.error("GetAllRegistrations error:", err);
    return { success: false, error: ErrorMsg("getting registrations") };
  }
}
export async function GetAllRegistrationsByUser(userId: string) {
  try {
    const registrations = await prisma.visitRegistration.findMany({
      where: {
        userId
      },
      include: {
        visit: true,
      },
      orderBy: { createdAt: "desc" },
    });

    return { success: true, data: registrations };
  } catch (err) {
    console.error("GetAllRegistrations error:", err);
    return { success: false, error: ErrorMsg("getting registrations") };
  }
}

// Get Registrations by Visit
export async function GetRegistrationsByVisit(visitId: string) {
  try {
    const registrations = await prisma.visitRegistration.findMany({
      where: { visitId },
      orderBy: { createdAt: "desc" },
    });

    return { success: true, data: registrations };
  } catch (err) {
    console.error("GetRegistrationsByVisit error:", err);
    return { success: false, error: ErrorMsg("getting registrations") };
  }
}

// Update Registration Status
export async function UpdateRegistrationStatus(
  registrationId: string,
  status: string
) {
  try {
    const registration = await prisma.visitRegistration.update({
      where: { id: registrationId },
      data: {
        registrationStatus: status as string,
      },
      include: {
        visit: true,
      },
    });

    return { success: true, data: registration };
  } catch (err) {
    console.error("UpdateRegistrationStatus error:", err);
    return { success: false, error: ErrorMsg("updating registration status") };
  }
}



// Submit Visit Feedback
export async function SubmitVisitFeedback(
  registrationId: string,
  rating: number,
  feedback?: string
) {
  try {
    const registration = await prisma.visitRegistration.update({
      where: { id: registrationId },
      data: {
        rating,
        feedback,
        feedbackDate: new Date(),
      },
      include: {
        visit: true,
      },
    });

    return { success: true, data: registration };
  } catch (err) {
    console.error("SubmitVisitFeedback error:", err);
    return { success: false, error: ErrorMsg("submitting feedback") };
  }
}

// Get Visit Stats
export async function GetVisitStats() {
  try {
    const [totalVisits, upcomingVisits, completedVisits, totalRegistrations] =
      await Promise.all([
        prisma.industrialVisit.count(),
        prisma.industrialVisit.count({ where: { status: "upcoming" } }),
        prisma.industrialVisit.count({ where: { status: "completed" } }),
        prisma.visitRegistration.count(),
      ]);

    return {
      success: true,
      data: {
        totalVisits,
        upcomingVisits,
        completedVisits,
        totalRegistrations,
      },
    };
  } catch (err) {
    console.error("GetVisitStats error:", err);
    return { success: false, error: ErrorMsg("getting stats") };
  }
}

// Cancel Registration
export async function CancelRegistration(registrationId: string) {
  try {
    const registration = await prisma.visitRegistration.findUnique({
      where: { id: registrationId },
    });

    if (!registration) {
      return { success: false, error: "Registration not found" };
    }

    // Update status
    const updated = await prisma.visitRegistration.update({
      where: { id: registrationId },
      data: {
        registrationStatus: "cancelled",
      },
      include: {
        visit: true,
      },
    });

    // Decrement participant count
    await prisma.industrialVisit.update({
      where: { id: registration.visitId },
      data: {
        currentParticipants: {
          decrement: 1,
        },
      },
    });

    return { success: true, data: updated };
  } catch (err) {
    console.error("CancelRegistration error:", err);
    return { success: false, error: ErrorMsg("cancelling registration") };
  }
}