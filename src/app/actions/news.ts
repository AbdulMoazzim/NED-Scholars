"use server"

import { prisma } from "@/lib/auth"
import { NewsData, Resource, YouTubeUrl } from "@/lib/types";
import {  HandleImages, HandleURLS, HandleVideos } from "@/lib/serverUtils";


export async function CreateNews(newsData: {
  formData: NewsData;
  images: Resource[];
  videos: Resource[];
  youtubeUrls: YouTubeUrl[];
}) {
  try {
    const createdNews = await prisma.newsUpdate.create({
      data: {...newsData.formData, slug: newsData.formData.headline.split(" ").join("-")+"-"+crypto.randomUUID()}
    });

    // Handle images
        await HandleImages(newsData.images, `news/${createdNews.id}`, createdNews.id, "news");
        
        // Handle videos
        await HandleVideos(newsData.videos, `news/${createdNews.id}`, createdNews.id, "news");
        
        // Handle YouTube URLs
        await HandleURLS(newsData.youtubeUrls, createdNews.id, "news");

    return { success: true, data: createdNews };
  } catch (err) {
    console.log("CreateNewsError error:", err);
    return { success: false, error: err };
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
    return { success: false, error: err };
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
    return { success: false, error: err };
  }
}

export async function DeleteNews(id: string) {
  try {
    // Delete related media from Cloudinary if needed
    await prisma.newsUpdate.delete({ where: { id } });
    return { success: true };
  } catch (err) {
    console.log(err);
    return { success: false, error: err };
  }
}

export async function UpdateNews(id: string, data: NewsData) {
  try {
    await prisma.newsUpdate.update({ where: { id }, data });
    return { success: true };
  } catch (err) {
    console.log(err);
    return { success: false, error: err };
  }
}