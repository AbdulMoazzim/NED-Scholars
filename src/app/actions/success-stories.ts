"use server";

import { prisma } from "@/lib/auth";
import { Resource, SuccessStoryData, YouTubeUrl } from "@/lib/types";
import {
  createRollbackState,
  deleteResource,
  performRollback,
  saveYoutubeUrlWithTracking,
  uploadImageWithTracking,
  uploadVideoWithTracking,
} from "@/lib/serverUtils";
import { ErrorMsg } from "@/lib/utils";

export async function CreateSuccessStory(storyData: {
  formData: SuccessStoryData;
  images: Resource[];
  videos: Resource[];
  youtubeUrls: YouTubeUrl[];
}) {
  const rollbackState = createRollbackState("success-story");

  try {
    const createdStory = await prisma.successStory.create({
      data: {
        ...storyData.formData,
        slug:
          storyData.formData.studentName.split(" ").join("-") +
          "-" +
          Date.now(),
      },
    });
    rollbackState.entityId = createdStory.id;

    if (storyData.images?.length > 0) {
      for (const imageResource of storyData.images) {
        const result = await uploadImageWithTracking(
          imageResource,
          "success-story",
          createdStory.id,
          "success-story",
          rollbackState
        );
        if (!result.success) {
          throw new Error("Failed to upload image");
        }
      }
    }

    if (storyData.videos?.length > 0) {
      for (const videoResource of storyData.videos) {
        const result = await uploadVideoWithTracking(
          videoResource,
          "success-story",
          createdStory.id,
          "success-story",
          rollbackState
        );
        if (!result.success) {
          throw new Error("Failed to upload video");
        }
      }
    }

    if (storyData.youtubeUrls?.length > 0) {
      for (const ytUrl of storyData.youtubeUrls) {
        if (ytUrl.url.trim()) {
          const result = await saveYoutubeUrlWithTracking(
            ytUrl.url,
            ytUrl.title,
            createdStory.id,
            "success-story",
            rollbackState
          );
          if (!result.success) {
            throw new Error("Failed to save YouTube URL");
          }
        }
      }
    }

    return { success: true, data: createdStory };
  } catch (err) {
    console.error("❌ Create success-story error:", err);
    console.log("🔄 Starting rollback...");

    await performRollback(rollbackState);

    return {
      success: false,
      error: "Failed to create success-story. All changes have been reverted.",
    };
  }
}

export async function GetAllSuccessStories() {
  try {
    const stories = await prisma.successStory.findMany({
      include: {
        images: true,
        videos: true,
        youtubeUrls: true,
      },
    });
    const parsedStories = stories.map((story) => ({
      ...story,
      createdAt: story.createdAt.toISOString(),
      updatedAt: story.updatedAt.toISOString(),
    }));
    return { success: true, data: parsedStories };
  } catch (err) {
    console.log(err);
    return { success: false, error: ErrorMsg("getting all success-stories") };
  }
}

export async function GetSuccessStory(slug: string) {
  try {
    const story = await prisma.successStory.findUnique({
      where: { slug },
      include: {
        images: true,
        videos: true,
        youtubeUrls: true,
      },
    });
    return { success: true, data: story };
  } catch (err) {
    console.log(err);
    return { success: false, error: ErrorMsg("getting success-story") };
  }
}

export async function DeleteSuccessStory(id: string) {
  try {
    const images = await prisma.image.findMany({
      where: { successStoryId: id },
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
    const videos = await prisma.video.findMany({
      where: { successStoryId: id },
    });
    videos.forEach(async (video) => {
      const result = await deleteResource(video.public_id);
      if (!result) {
        return {
          success: false,
          error: "Error occured during deleting videos",
        };
      }
    });
    await prisma.successStory.delete({ where: { id } });
    return { success: true };
  } catch (err) {
    console.log(err);
    return { success: false, error: ErrorMsg("deleting success-story") };
  }
}

export async function UpdateSuccessStory(id: string, data: SuccessStoryData) {
  try {
      await prisma.successStory.update({ where: { slug: id }, data });
    return { success: true };
  } catch (err) {
    console.log(err);
    return { success: false, error: ErrorMsg("updating success-story") };
  }
}
