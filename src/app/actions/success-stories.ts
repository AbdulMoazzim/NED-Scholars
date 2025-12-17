"use server"

import { prisma } from "@/lib/auth"
import { Resource, SuccessStoryData, YouTubeUrl } from "@/lib/types";
import { HandleImages, HandleURLS, HandleVideos } from "@/lib/serverUtils";


export async function CreateSuccessStory(storyData: {
  formData: SuccessStoryData;
  images: Resource[];
  videos: Resource[];
  youtubeUrls: YouTubeUrl[];
}) {
  try {
    const createdStory = await prisma.successStory.create({
      data: storyData.formData
    });

    // Handle images
    await HandleImages(storyData.images, `success-story/${createdStory.id}`, createdStory.id, "success-story");
    
    // Handle videos
    await HandleVideos(storyData.videos, `success-story/${createdStory.id}`, createdStory.id, "success-story");
    
    // Handle YouTube URLs
    await HandleURLS(storyData.youtubeUrls, createdStory.id, "success-story");
    

    return { success: true, data: createdStory };
  } catch (err) {
    console.log("CreateSuccessStory error:", err);
    return { success: false, error: err };
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
    return { success: true, data: stories };
  } catch (err) {
    console.log(err);
    return { success: false, error: err };
  }
}

export async function GetSuccessStory(id: string) {
  try {
    const story = await prisma.successStory.findUnique({
      where: { id },
      include: {
        images: true,
        videos: true,
        youtubeUrls: true,
      },
    });
    return { success: true, data: story };
  } catch (err) {
    console.log(err);
    return { success: false, error: err };
  }
}

export async function DeleteSuccessStory(id: string) {
  try {
    // Delete related media from Cloudinary if needed
    await prisma.successStory.delete({ where: { id } });
    return { success: true };
  } catch (err) {
    console.log(err);
    return { success: false, error: err };
  }
}

export async function UpdateSuccessStory(id: string, data: SuccessStoryData) {
  try {
    await prisma.successStory.update({ where: { id }, data });
    return { success: true };
  } catch (err) {
    console.log(err);
    return { success: false, error: err };
  }
}