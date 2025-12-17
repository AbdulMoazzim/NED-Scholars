"use server";

import { prisma } from "@/lib/auth";
import { BlogData, Resource, YouTubeUrl } from "@/lib/types";
import { HandleImages, HandleURLS, HandleVideos } from "@/lib/serverUtils";

export async function CreateBlog(blogData: {
  formData: BlogData;
  images: Resource[];
  videos: Resource[];
  youtubeUrls: YouTubeUrl[];
}) {
  try {
    const createdBlog = await prisma.blogPost.create({
      data: {...blogData.formData, slug: `${blogData.formData.title.split(" ").join("-")}-${crypto.randomUUID()}`},
    });

    // Handle images
    await HandleImages(
      blogData.images,
      `blogs/${createdBlog.id}`,
      createdBlog.id,
      "blogs"
    );

    // Handle videos
    await HandleVideos(
      blogData.videos,
      `blogs/${createdBlog.id}`,
      createdBlog.id,
      "blogs"
    );

    // Handle YouTube URLs
    await HandleURLS(blogData.youtubeUrls, createdBlog.id, "blogs");

    return { success: true, data: createdBlog };
  } catch (err) {
    console.log("CreateBlog error:", err);
    return { success: false, error: err };
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
    return { success: false, error: err };
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
    return { success: false, error: err };
  }
}

export async function DeleteBlog(id: string) {
  try {
    // Delete related media from Cloudinary if needed
    await prisma.blogPost.delete({ where: { id } });
    return { success: true };
  } catch (err) {
    console.log(err);
    return { success: false, error: err };
  }
}

export async function UpdateBlog(id: string, data: BlogData) {
  try {
    await prisma.blogPost.update({ where: { id }, data });
    return { success: true };
  } catch (err) {
    console.log(err);
    return { success: false, error: err };
  }
}
