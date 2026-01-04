"use server";

import { prisma } from "@/lib/auth";
import {
  CreateInternshipApplication,
  CreateInternshipData,
  UpdateInternshipData,
} from "@/lib/form-types";
import {
  createRollbackState,
  performRollback,
  uploadResourceWithTracking,
} from "@/lib/serverUtils";
import {Resource } from "@/lib/types";
import { ErrorMsg } from "@/lib/utils";

// Create Internship
export async function CreateInternship(internshipData: CreateInternshipData) {
  try {
    const internship = await prisma.internship.create({
      data: {
        ...internshipData,
        locationType: internshipData.locationType,
        category: internshipData.category,
        status: internshipData.status || "active",
      },
      include: {
        applications: true,
      },
    });

    return { success: true, data: internship };
  } catch (err) {
    console.error("CreateInternship error:", err);
    return { success: false, error: ErrorMsg("creating internship") };
  }
}

// Get All Internships
export async function GetAllInternships() {
  try {
    const internships = await prisma.internship.findMany({
      include: {
        applications: true,
      },
      orderBy: [{ featured: "desc" }, { createdAt: "desc" }],
    });

    return { success: true, data: internships };
  } catch (err) {
    console.error("GetAllInternships error:", err);
    return { success: false, error: ErrorMsg("getting internships") };
  }
}

// Get Active Internships (for public page)
export async function GetActiveInternships() {
  try {
    const internships = await prisma.internship.findMany({
      where: {
        status: "active",
        OR: [
          { applicationDeadline: null },
          { applicationDeadline: { gte: new Date() } },
        ],
      },
      include: {
        _count: {
          select: { applications: true },
        },
      },
      orderBy: [{ featured: "desc" }, { createdAt: "desc" }],
    });

    return { success: true, data: internships };
  } catch (err) {
    console.error("GetActiveInternships error:", err);
    return { success: false, error: ErrorMsg("getting active internships") };
  }
}

// Get Featured Internships
export async function GetFeaturedInternships() {
  try {
    const internships = await prisma.internship.findMany({
      where: {
        featured: true,
        status: "active",
      },
      include: {
        _count: {
          select: { applications: true },
        },
      },
      orderBy: { createdAt: "desc" },
      take: 6,
    });

    return { success: true, data: internships };
  } catch (err) {
    console.error("GetFeaturedInternships error:", err);
    return { success: false, error: ErrorMsg("getting featured internships") };
  }
}

// Get Internship by ID
export async function GetInternshipById(id: string) {
  try {
    const internship = await prisma.internship.findUnique({
      where: { id },
      include: {
        applications: true,
      },
    });

    if (!internship) {
      return { success: false, error: "Internship not found" };
    }

    return { success: true, data: internship };
  } catch (err) {
    console.error("GetInternshipById error:", err);
    return { success: false, error: ErrorMsg("getting internship") };
  }
}

// Get Internship by Slug
export async function GetInternshipBySlug(slug: string) {
  try {
    const internship = await prisma.internship.findUnique({
      where: { slug },
      include: {
        _count: {
          select: { applications: true },
        },
      },
    });

    if (!internship) {
      return { success: false, error: "Internship not found" };
    }

    return { success: true, data: internship };
  } catch (err) {
    console.error("GetInternshipBySlug error:", err);
    return { success: false, error: ErrorMsg("getting internship") };
  }
}

// Update Internship
export async function UpdateInternship(
  id: string,
  internshipData: UpdateInternshipData
) {
  try {
    const updateData: UpdateInternshipData = { ...internshipData };

    // Convert string enums if provided
    if (internshipData.locationType) {
      updateData.locationType = internshipData.locationType;
    }
    if (internshipData.category) {
      updateData.category = internshipData.category;
    }
    if (internshipData.status) {
      updateData.status = internshipData.status;
    }

    const internship = await prisma.internship.update({
      where: { id },
      data: updateData,
      include: {
        applications: true,
      },
    });

    return { success: true, data: internship };
  } catch (err) {
    console.error("UpdateInternship error:", err);
    return { success: false, error: ErrorMsg("updating internship") };
  }
}

// Delete Internship
export async function DeleteInternship(id: string) {
  try {
    await prisma.internship.delete({
      where: { id },
    });

    return { success: true };
  } catch (err) {
    console.error("DeleteInternship error:", err);
    return { success: false, error: ErrorMsg("deleting internship") };
  }
}

// Get Internships by Category
export async function GetInternshipsByCategory(category: string) {
  try {
    const internships = await prisma.internship.findMany({
      where: {
        category: category,
        status: "active",
      },
      include: {
        _count: {
          select: { applications: true },
        },
      },
      orderBy: { createdAt: "desc" },
    });

    return { success: true, data: internships };
  } catch (err) {
    console.error("GetInternshipsByCategory error:", err);
    return {
      success: false,
      error: ErrorMsg("getting internships by category"),
    };
  }
}

// ============================================
// INTERNSHIP APPLICATION ACTIONS
// ============================================

// Submit Internship Application
export async function SubmitInternshipApplication(
  applicationData: CreateInternshipApplication,
  resume: Resource
) {
  const rollbackState = createRollbackState("interships");
  try {
    const application = await prisma.internshipApplication.create({
      data: applicationData,
      include: {
        internship: true,
      },
    });
    rollbackState.entityId = application.id;

    if (resume) {
      const result = await uploadResourceWithTracking(
        resume,
        "resources",
        application.id,
        "internships",
        rollbackState
      );
      if (!result.success) {
        console.log(result);
        throw new Error("Failed to upload image");
      }
    }

    return { success: true, data: application };
  } catch (err) {
    console.error("SubmitInternshipApplication error:", err);
    console.log("🔄 Starting rollback...");

    await performRollback(rollbackState);
    return { success: false, error: ErrorMsg("submitting application") };
  }
}

// Get All Applications
export async function GetAllApplications() {
  try {
    const applications = await prisma.internshipApplication.findMany({
      include: {
        internship: true,
        resume: true,
      },
      orderBy: { createdAt: "desc" },
    });

    return { success: true, data: applications };
  } catch (err) {
    console.error("GetAllApplications error:", err);
    return { success: false, error: ErrorMsg("getting applications") };
  }
}

// Get Applications by Internship
export async function GetApplicationsByInternship(internshipId: string) {
  try {
    const applications = await prisma.internshipApplication.findMany({
      where: { internshipId },
      orderBy: { createdAt: "desc" },
    });

    return { success: true, data: applications };
  } catch (err) {
    console.error("GetApplicationsByInternship error:", err);
    return { success: false, error: ErrorMsg("getting applications") };
  }
}

// Update Application Status
export async function UpdateApplicationStatus(
  applicationId: string,
  status: string,
  reviewedBy?: string,
  notes?: string
) {
  try {
    const application = await prisma.internshipApplication.update({
      where: { id: applicationId },
      data: {
        applicationStatus: status,
        notes: notes || null,
      },
      include: {
        internship: true,
      },
    });

    return { success: true, data: application };
  } catch (err) {
    console.error("UpdateApplicationStatus error:", err);
    return { success: false, error: ErrorMsg("updating application status") };
  }
}

// Get Internship Stats
export async function GetInternshipStats() {
  try {
    const [
      totalInternships,
      activeInternships,
      totalApplications,
      pendingApplications,
    ] = await Promise.all([
      prisma.internship.count(),
      prisma.internship.count({ where: { status: "active" } }),
      prisma.internshipApplication.count(),
      prisma.internshipApplication.count({
        where: { applicationStatus: "submitted" },
      }),
    ]);

    return {
      success: true,
      data: {
        totalInternships,
        activeInternships,
        totalApplications,
        pendingApplications,
      },
    };
  } catch (err) {
    console.error("GetInternshipStats error:", err);
    return { success: false, error: ErrorMsg("getting stats") };
  }
}
