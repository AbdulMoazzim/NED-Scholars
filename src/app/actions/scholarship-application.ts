"use server";

import { prisma } from "@/lib/auth";
import { Resource} from "@/lib/types";
import {
  createRollbackState,
  deleteResource,
  performRollback,
  uploadResourceWithTracking,
} from "@/lib/serverUtils";
import { ErrorMsg } from "@/lib/utils";
import { ScholarshipForm } from "@/lib/form-types";


export async function CreateScholarshipApplication(applicationData: {
  formData: ScholarshipForm;
  files: Resource[];
}) {
  const rollbackState = createRollbackState("remembrance");

  try {
    const createdApplication = await prisma.scholarshipForm.create({
      data: applicationData.formData,
    });
    rollbackState.entityId = createdApplication.id;

    if (applicationData.files?.length > 0) {
      for (const Resource of applicationData.files) {
        const result = await uploadResourceWithTracking(
          Resource,
          "resources",
          createdApplication.id,
          "scholarship",
          rollbackState
        );
        if (!result.success) {
          console.log(result)
          throw new Error("Failed to upload image");
        }
      }
    }

    return { success: true, data: createdApplication };
  } catch (err) {
    console.error("❌ CreateRemembrance error:", err);
    console.log("🔄 Starting rollback...");

    await performRollback(rollbackState);

    return {
      success: false,
      error: "Failed to create remembrance. All changes have been reverted.",
    };
  }
}

export async function GetAllScholarships() {
  try {
    const applications = await prisma.scholarshipForm.findMany({
      include: {
        resources: true,
      },
    });
    return { success: true, data: applications };
  } catch (err) {
    console.log(err);
    return { success: false, error: ErrorMsg("getting all scholarship applications") };
  }
}

export async function GetScholarship(id: string) {
  try {
    const application = await prisma.scholarshipForm.findUnique({
      where: { id },
      include: {
        resources: true,
      },
    });
    return { success: true, data: application };
  } catch (err) {
    console.log(err);
    return { success: false, error: ErrorMsg("getting scholarship application") };
  }
}

export async function DeleteScholarshipApplication(id: string) {
  try {
    const resources = await prisma.resources.findMany({ where: { scholarshipResourceId: id } });
    resources.forEach(async (resource) => {
      const result = await deleteResource(resource.public_id);
      if (!result) {
        return {
          success: false,
          error: "Error occured during deleting Files",
        };
      }
    });
    await prisma.scholarshipForm.delete({ where: { id } });
    return { success: true };
  } catch (err) {
    console.log(err);
    return { success: false, error: ErrorMsg("deleting scholarship application") };
  }
}

export async function UpdateScholarshipApplication(id: string, status: string) {
  try {
    await prisma.scholarshipForm.update({ where: { id }, data: {status} });
    return { success: true };
  } catch (err) {
    console.log(err);
    return { success: false, error: ErrorMsg("updating scholarship") };
  }
}
