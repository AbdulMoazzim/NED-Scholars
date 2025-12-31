"use server";

import { prisma } from "@/lib/auth";
import { Remembrance, Resource } from "@/lib/types";
import {
  createRollbackState,
  deleteResource,
  performRollback,
  uploadImageWithTracking,
} from "@/lib/serverUtils";
import { ErrorMsg } from "@/lib/utils";

export async function CreateRemembrance(remembranceData: {
  formData: Remembrance;
  images: Resource[];
}) {
  const rollbackState = createRollbackState("remembrance");

  try {
    const createdRemembrance = await prisma.remembrance.create({
      data: remembranceData.formData,
    });
    rollbackState.entityId = createdRemembrance.id;

    if (remembranceData.images?.length > 0) {
      for (const imageResource of remembranceData.images) {
        const result = await uploadImageWithTracking(
          imageResource,
          "remembrance",
          createdRemembrance.id,
          "remembrance",
          rollbackState
        );
        if (!result.success) {
          throw new Error("Failed to upload image");
        }
      }
    }

    return { success: true, data: createdRemembrance };
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

export async function GetAllRemembrances() {
  try {
    const news = await prisma.remembrance.findMany({
      include: {
        images: true,
      },
    });
    return { success: true, data: news };
  } catch (err) {
    console.log(err);
    return { success: false, error: ErrorMsg("getting all remembrance posts") };
  }
}

export async function GetRemembrance(id: string) {
  try {
    const news = await prisma.remembrance.findUnique({
      where: { id },
      include: {
        images: true,
      },
    });
    return { success: true, data: news };
  } catch (err) {
    console.log(err);
    return { success: false, error: ErrorMsg("getting remembrance post") };
  }
}

export async function DeleteRemembrance(id: string) {
  try {
    const images = await prisma.image.findMany({
      where: { remembranceId: id },
    });
    images.forEach(async (image) => {
      const result = await deleteResource(image.public_id);
      if (!result) {
        return {
          success: false,
          error: "Error occured during deleting Images",
        };
      }
    });
    await prisma.remembrance.delete({ where: { id } });
    return { success: true };
  } catch (err) {
    console.log(err);
    return { success: false, error: ErrorMsg("deleting remembrance post") };
  }
}

export async function UpdateRemembrance(id: string, data: Remembrance) {
  try {
      await prisma.remembrance.update({ where: { id: id }, data });
    return { success: true };
  } catch (err) {
    console.log(err);
    return { success: false, error: ErrorMsg("updating remembrance post") };
  }
}
