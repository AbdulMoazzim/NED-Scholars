"use server";

import { prisma } from "@/lib/auth";
import { Resource } from "@/lib/types";
import {
  createRollbackState,
  deleteResource,
  performRollback,
  uploadResourceWithTracking,
} from "@/lib/serverUtils";
import { ErrorMsg } from "@/lib/utils";
import { Transparency } from "@/lib/form-types";

export async function CreateTransparency(data: {
  formData: Transparency;
  files: Resource[];
}) {
  const rollbackState = createRollbackState("remembrance");

  try {
    const createdFiles = await prisma.transparency.create({
      data: data.formData,
    });
    rollbackState.entityId = createdFiles.id;

    if (data.files?.length > 0) {
      for (const Resource of data.files) {
        const result = await uploadResourceWithTracking(
          Resource,
          "resources",
          createdFiles.id,
          "transparency",
          rollbackState
        );
        if (!result.success) {
          console.log(result);
          throw new Error("Failed to upload files");
        }
      }
    }

    return { success: true, data: createdFiles };
  } catch (err) {
    console.error("❌ CreateTransparencyFiles error:", err);
    console.log("🔄 Starting rollback...");

    await performRollback(rollbackState);

    return {
      success: false,
      error:
        "Failed to create TransparencyFiles. All changes have been reverted.",
    };
  }
}

export async function GetAllTransparencyFiles() {
  try {
    const files = await prisma.transparency.findMany({
      include: {
        files: true
      }, orderBy: {
        year:"desc"
      }
    });
    return { success: true, data: files };
  } catch (err) {
    console.log(err);
    return {
      success: false,
      error: ErrorMsg("getting all transparency files applications"),
    };
  }
}

export async function DeleteTransparencyFiles(id: string) {
  try {
    const resources = await prisma.resources.findMany({
      where: { transparencyResourceId: id },
    });
    resources.forEach(async (resource) => {
      const result = await deleteResource(resource.public_id);
      if (!result) {
        return {
          success: false,
          error: "Error occured during deleting Files",
        };
      }
    });
    await prisma.transparency.delete({ where: { id } });
    return { success: true };
  } catch (err) {
    console.log(err);
    return { success: false, error: ErrorMsg("deleting transparency file") };
  }
}
