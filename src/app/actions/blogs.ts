"use server";

import { prisma } from "@/lib/auth";
import { BlogData, Resource, YouTubeUrl } from "@/lib/types";
import {
  createRollbackState,
  deleteResource,
  performRollback,
  saveYoutubeUrlWithTracking,
  uploadImageWithTracking,
  uploadVideoWithTracking,
} from "@/lib/serverUtils";
import { ErrorMsg } from "@/lib/utils";

export async function CreateBlog(blogData: {
  formData: BlogData;
  images: Resource[];
  videos: Resource[];
  youtubeUrls: YouTubeUrl[];
}) {
  // Initialize rollback state
  const rollbackState = createRollbackState("blogs");

  try {
    const createdBlog = await prisma.blogPost.create({
      data: {
        ...blogData.formData,
        slug: `${blogData.formData.title.split(" ").join("-")}-${Date.now()}`,
      },
    });
    rollbackState.entityId = createdBlog.id;

    if (blogData.images?.length > 0) {
      for (const imageResource of blogData.images) {
        const result = await uploadImageWithTracking(
          imageResource,
          "blogs",
          createdBlog.id,
          "blogs",
          rollbackState
        );
        if (!result.success) {
          throw new Error("Failed to upload image");
        }
      }
    }

    if (blogData.videos?.length > 0) {
      for (const videoResource of blogData.videos) {
        const result = await uploadVideoWithTracking(
          videoResource,
          "blogs",
          createdBlog.id,
          "blogs",
          rollbackState
        );
        if (!result.success) {
          throw new Error("Failed to upload video");
        }
      }
    }

    if (blogData.youtubeUrls?.length > 0) {
      for (const ytUrl of blogData.youtubeUrls) {
        if (ytUrl.url.trim()) {
          const result = await saveYoutubeUrlWithTracking(
            ytUrl.url,
            ytUrl.title,
            createdBlog.id,
            "blogs",
            rollbackState
          );
          if (!result.success) {
            throw new Error("Failed to save YouTube URL");
          }
        }
      }
    }

    return { success: true, data: createdBlog };
  } catch (err) {
    console.error("❌ CreateBlog error:", err);
    console.log("🔄 Starting rollback...");

    await performRollback(rollbackState);

    return {
      success: false,
      error: "Failed to create blog. All changes have been reverted.",
    };
  }
}

export async function GetAllBlogs() {
  try {
    const blogs = await prisma.blogPost.findMany({
      include: {
        images: true,
        videos: true,
        youtubeUrls: true,
      },
    });
    return { success: true, data: blogs };
  } catch (err) {
    console.log(err);
    return { success: false, error: ErrorMsg("getting all blogs") };
  }
}

export async function GetBlog(id: string) {
  try {
    const blog = await prisma.blogPost.findUnique({
      where: { id },
      include: {
        images: true,
        videos: true,
        youtubeUrls: true,
      },
    });
    return { success: true, data: blog };
  } catch (err) {
    console.log(err);
    return { success: false, error: ErrorMsg("getting blog") };
  }
}

export async function DeleteBlog(id: string) {
  try {
    const images = await prisma.image.findMany({ where: { blogPostId: id } });
    images.forEach(async (image) => {
      const result = await deleteResource(image.public_id);
      if (!result) {
        return {
          success: false,
          error: "Error occured during deleting Images",
        };
      }
    });
    const videos = await prisma.video.findMany({ where: { blogPostId: id } });
    videos.forEach(async (video) => {
      const result = await deleteResource(video.public_id);
      if (!result) {
        return {
          success: false,
          error: "Error occured during deleting videos",
        };
      }
    });
    await prisma.blogPost.delete({ where: { id } });
    return { success: true };
  } catch (err) {
    console.log(err);
    return { success: false, error: ErrorMsg("deleting blog") };
  }
}

export async function UpdateBlog(id: string, data: BlogData) {
  try {
    await prisma.blogPost.update({ where: { slug: id }, data });
    return { success: true };
  } catch (err) {
    console.log(err);
    return { success: false, error: ErrorMsg("updating blog") };
  }
}
