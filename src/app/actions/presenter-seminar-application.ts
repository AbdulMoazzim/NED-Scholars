"use server";

import { prisma } from "@/lib/auth";
import { CreateSeminarPresenterData, UpdateSeminarPresenterData } from "@/lib/form-types";
import { ErrorMsg } from "@/lib/utils";


export async function SubmitPresenterApplication(presenterData: CreateSeminarPresenterData) {
  try {
    // Check if already applied for this seminar (if seminarId provided)
    if (presenterData.seminarId) {
      const existing = await prisma.presenterSeminarForm.findFirst({
        where: {
          email: presenterData.email,
          seminarId: presenterData.seminarId,
          application_status: {
            not: "rejected",
          },
        },
      });

      if (existing) {
        return {
          success: false,
          error: "You have already applied as a presenter for this seminar",
        };
      }
    }

    const presenter = await prisma.presenterSeminarForm.create({
      data: {
        ...presenterData,
        application_status: "pending",
      },
    });

    return {
      success: true,
      data: presenter,
      message: "Application submitted successfully! We'll review it soon.",
    };
  } catch (err) {
    console.error("SubmitPresenterApplication error:", err);
    return { success: false, error: ErrorMsg("submitting presenter application") };
  }
}

export async function GetAllPresenters(seminarId?: string) {
  try {
    const presenters = await prisma.presenterSeminarForm.findMany({
      where: seminarId ? { seminarId } : undefined,
      include: {
        seminar: {
          select: {
            id: true,
            title: true,
            date: true,
            location: true,
          },
        },
      },
      orderBy: { createdAt: "desc" },
    });

    return { success: true, data: presenters };
  } catch (err) {
    console.error("GetAllPresenters error:", err);
    return { success: false, error: ErrorMsg("getting presenters") };
  }
}

export async function GetPendingPresenterApplications() {
  try {
    const presenters = await prisma.presenterSeminarForm.findMany({
      where: {
        application_status: "pending",
      },
      include: {
        seminar: {
          select: {
            id: true,
            title: true,
            date: true,
            location: true,
          },
        },
      },
      orderBy: { createdAt: "asc" },
    });

    return { success: true, data: presenters };
  } catch (err) {
    console.error("GetPendingPresenterApplications error:", err);
    return {
      success: false,
      error: ErrorMsg("getting pending presenter applications"),
    };
  }
}

export async function GetPresenterApplicationsWithoutSeminar() {
  try {
    // Get applications that are pending and don't have a seminar assigned
    const presenters = await prisma.presenterSeminarForm.findMany({
      where: {
        application_status: "pending",
        seminarId: null,
      },
      orderBy: { createdAt: "asc" },
    });

    return { success: true, data: presenters };
  } catch (err) {
    console.error("GetPresenterApplicationsWithoutSeminar error:", err);
    return {
      success: false,
      error: ErrorMsg("getting presenter applications without seminar"),
    };
  }
}

export async function GetPresenter(id: string) {
  try {
    const presenter = await prisma.presenterSeminarForm.findUnique({
      where: { id },
      include: {
        seminar: {
          select: {
            id: true,
            title: true,
            date: true,
            location: true,
            status: true,
          },
        },
      },
    });

    if (!presenter) {
      return { success: false, error: "Presenter application not found" };
    }

    return { success: true, data: presenter };
  } catch (err) {
    console.error("GetPresenter error:", err);
    return { success: false, error: ErrorMsg("getting presenter") };
  }
}

export async function UpdatePresenter(id: string, presenterData: UpdateSeminarPresenterData) {
  try {
    const presenter = await prisma.presenterSeminarForm.update({
      where: { id },
      data: presenterData,
    });

    return { success: true, data: presenter };
  } catch (err) {
    console.error("UpdatePresenter error:", err);
    return { success: false, error: ErrorMsg("updating presenter") };
  }
}

export async function ApprovePresenterApplication(
  id: string,
  seminarId?: string
) {
  try {
    const presenter = await prisma.presenterSeminarForm.update({
      where: { id },
      data: {
        application_status: "approved",
        ...(seminarId && { seminarId }),
      },
      include: {
        seminar: true,
      },
    });

    return {
      success: true,
      data: presenter,
      message: seminarId
        ? "Presenter approved and assigned to seminar"
        : "Presenter approved - please create a seminar for them",
    };
  } catch (err) {
    console.error("ApprovePresenterApplication error:", err);
    return {
      success: false,
      error: ErrorMsg("approving presenter application"),
    };
  }
}

export async function RejectPresenterApplication(id: string) {
  try {
    const presenter = await prisma.presenterSeminarForm.update({
      where: { id },
      data: {
        application_status: "rejected",
      },
    });

    return {
      success: true,
      data: presenter,
      message: "Presenter application rejected",
    };
  } catch (err) {
    console.error("RejectPresenterApplication error:", err);
    return {
      success: false,
      error: ErrorMsg("rejecting presenter application"),
    };
  }
}

export async function AssignPresenterToSeminar(
  presenterId: string,
  seminarId: string
) {
  try {
    // Check if seminar exists
    const seminar = await prisma.seminar.findUnique({
      where: { id: seminarId },
    });

    if (!seminar) {
      return { success: false, error: "Seminar not found" };
    }

    // Update presenter
    const presenter = await prisma.presenterSeminarForm.update({
      where: { id: presenterId },
      data: {
        seminarId,
        application_status: "approved",
      },
      include: {
        seminar: true,
      },
    });

    return {
      success: true,
      data: presenter,
      message: "Presenter assigned to seminar successfully",
    };
  } catch (err) {
    console.error("AssignPresenterToSeminar error:", err);
    return { success: false, error: ErrorMsg("assigning presenter to seminar") };
  }
}

export async function RemovePresenterFromSeminar(presenterId: string) {
  try {
    const presenter = await prisma.presenterSeminarForm.update({
      where: { id: presenterId },
      data: {
        seminarId: null,
        application_status: "pending",
      },
    });

    return {
      success: true,
      data: presenter,
      message: "Presenter removed from seminar",
    };
  } catch (err) {
    console.error("RemovePresenterFromSeminar error:", err);
    return {
      success: false,
      error: ErrorMsg("removing presenter from seminar"),
    };
  }
}

export async function DeletePresenterApplication(id: string) {
  try {
    await prisma.presenterSeminarForm.delete({
      where: { id },
    });

    return { success: true };
  } catch (err) {
    console.error("DeletePresenterApplication error:", err);
    return {
      success: false,
      error: ErrorMsg("deleting presenter application"),
    };
  }
}

export async function GetPresenterByEmail(email: string, seminarId?: string) {
  try {
    const presenter = await prisma.presenterSeminarForm.findFirst({
      where: {
        email,
        ...(seminarId && { seminarId }),
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

    return { success: true, data: presenter };
  } catch (err) {
    console.error("GetPresenterByEmail error:", err);
    return { success: false, error: ErrorMsg("getting presenter by email") };
  }
}

export async function BulkApprovePresenterApplications(presenterIds: string[]) {
  try {
    const result = await prisma.presenterSeminarForm.updateMany({
      where: {
        id: {
          in: presenterIds,
        },
      },
      data: {
        application_status: "approved",
      },
    });

    return {
      success: true,
      data: result,
      message: `${result.count} presenter applications approved`,
    };
  } catch (err) {
    console.error("BulkApprovePresenterApplications error:", err);
    return {
      success: false,
      error: ErrorMsg("bulk approving presenter applications"),
    };
  }
}

export async function BulkRejectPresenterApplications(presenterIds: string[]) {
  try {
    const result = await prisma.presenterSeminarForm.updateMany({
      where: {
        id: {
          in: presenterIds,
        },
      },
      data: {
        application_status: "rejected",
      },
    });

    return {
      success: true,
      data: result,
      message: `${result.count} presenter applications rejected`,
    };
  } catch (err) {
    console.error("BulkRejectPresenterApplications error:", err);
    return {
      success: false,
      error: ErrorMsg("bulk rejecting presenter applications"),
    };
  }
}

export async function GetPresenterStats() {
  try {
    const [total, pending, approved, rejected] = await Promise.all([
      prisma.presenterSeminarForm.count(),
      prisma.presenterSeminarForm.count({
        where: { application_status: "pending" },
      }),
      prisma.presenterSeminarForm.count({
        where: { application_status: "approved" },
      }),
      prisma.presenterSeminarForm.count({
        where: { application_status: "rejected" },
      }),
    ]);

    const withoutSeminar = await prisma.presenterSeminarForm.count({
      where: {
        application_status: "approved",
        seminarId: null,
      },
    });

    return {
      success: true,
      data: {
        total,
        pending,
        approved,
        rejected,
        withoutSeminar,
      },
    };
  } catch (err) {
    console.error("GetPresenterStats error:", err);
    return { success: false, error: ErrorMsg("getting presenter stats") };
  }
}