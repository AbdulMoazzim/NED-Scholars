"use server";

import { prisma } from "@/lib/auth";
import { NewsData, Resource, YouTubeUrl } from "@/lib/types";
import {
  createRollbackState,
  deleteResource,
  performRollback,
  saveYoutubeUrlWithTracking,
  uploadImageWithTracking,
  uploadVideoWithTracking,
} from "@/lib/serverUtils";
import { ErrorMsg } from "@/lib/utils";

export async function CreateNews(newsData: {
  formData: NewsData;
  images: Resource[];
  videos: Resource[];
  youtubeUrls: YouTubeUrl[];
}) {
  const rollbackState = createRollbackState("news");

  try {
    const createdNews = await prisma.newsUpdate.create({
      data: {
        ...newsData.formData,
        slug: `${newsData.formData.headline
          .split(" ")
          .join("-")}-${Date.now()}`,
      },
    });
    rollbackState.entityId = createdNews.id;

    if (newsData.images?.length > 0) {
      for (const imageResource of newsData.images) {
        const result = await uploadImageWithTracking(
          imageResource,
          "news",
          createdNews.id,
          "news",
          rollbackState
        );
        if (!result.success) {
          throw new Error("Failed to upload image");
        }
      }
    }

    if (newsData.videos?.length > 0) {
      for (const videoResource of newsData.videos) {
        const result = await uploadVideoWithTracking(
          videoResource,
          "news",
          createdNews.id,
          "news",
          rollbackState
        );
        if (!result.success) {
          throw new Error("Failed to upload video");
        }
      }
    }

    if (newsData.youtubeUrls?.length > 0) {
      for (const ytUrl of newsData.youtubeUrls) {
        if (ytUrl.url.trim()) {
          const result = await saveYoutubeUrlWithTracking(
            ytUrl.url,
            ytUrl.title,
            createdNews.id,
            "news",
            rollbackState
          );
          if (!result.success) {
            throw new Error("Failed to save YouTube URL");
          }
        }
      }
    }

    return { success: true, data: createdNews };
  } catch (err) {
    console.error("❌ CreateNews error:", err);
    console.log("🔄 Starting rollback...");

    await performRollback(rollbackState);

    return {
      success: false,
      error: "Failed to create news. All changes have been reverted.",
    };
  }
}

export async function GetAllNews() {
  try {
    const news = await prisma.newsUpdate.findMany({
      include: {
        images: true,
        videos: true,
        youtubeUrls: true,
      },
    });
    return { success: true, data: news };
  } catch (err) {
    console.log(err);
    return { success: false, error: ErrorMsg("getting all news") };
  }
}

export async function GetNews(id: string) {
  try {
    const news = await prisma.newsUpdate.findUnique({
      where: { id },
      include: {
        images: true,
        videos: true,
        youtubeUrls: true,
      },
    });
    return { success: true, data: news };
  } catch (err) {
    console.log(err);
    return { success: false, error: ErrorMsg("getting news") };
  }
}

export async function DeleteNews(id: string) {
  try {
    const images = await prisma.image.findMany({ where: { newsUpdateId: id } });
    images.forEach(async (image) => {
      const result = await deleteResource(image.public_id);
      if (!result) {
        return {
          success: false,
          error: "Error occured during deleting Images",
        };
      }
    });
    const videos = await prisma.video.findMany({ where: { newsUpdateId: id } });
    videos.forEach(async (video) => {
      const result = await deleteResource(video.public_id);
      if (!result) {
        return {
          success: false,
          error: "Error occured during deleting videos",
        };
      }
    });
    await prisma.newsUpdate.delete({ where: { id } });
    return { success: true };
  } catch (err) {
    console.log(err);
    return { success: false, error: ErrorMsg("deleting news") };
  }
}

export async function UpdateNews(id: string, data: NewsData) {
  try {
    await prisma.newsUpdate.update({ where: { slug: id }, data });
    return { success: true };
  } catch (err) {
    console.log(err);
    return { success: false, error: ErrorMsg("updating news") };
  }
}
