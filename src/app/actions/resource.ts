"use server";

import { prisma } from "@/lib/auth";
import { deleteResource, fileToDataUri } from "@/lib/serverUtils";
import { imageData, Resource, urlData, videoData } from "@/lib/types";
import { ErrorMsg } from "@/lib/utils";
import cloudinary from "../../lib/cloudinary-config";

export async function deleteImage(id: string, public_id: string) {
  try {
    await prisma.image.delete({ where: { id } });
    if (!(await deleteResource(public_id))) {
      throw new Error("Error occurred during deleting Image from cloudinary");
    }
    return { success: true };
  } catch (err) {
    console.log(err);
    return { success: false };
  }
}
export async function deleteVideo(id: string, public_id: string) {
  try {
    await prisma.video.delete({ where: { id } });
    if (!(await deleteResource(public_id))) {
      throw new Error("Error occurred during deleting Video from cloudinary");
    }
    return { success: true };
  } catch (err) {
    console.log(err);
    return { success: false };
  }
}
export async function deleteYoutubeUrl(id: string) {
  try {
    await prisma.youtubeUrl.delete({ where: { id } });
    return { success: true };
  } catch (err) {
    console.log(err);
    return { success: false };
  }
}

export async function addYoutubeUrl(
  url: string,
  type: string,
  foreignId: string,
  title?: string
) {
  try {
    let urlData: urlData = {
      url,
      title: title || "YouTube Video",
      blogPostId: null,
      successStoryId: null,
      teamMemberId: null,
      newsUpdateId: null,
    };
    switch (type) {
      case "team-member":
        urlData = { ...urlData, teamMemberId: foreignId };
        break;
      case "success-stories":
        urlData = { ...urlData, successStoryId: foreignId };
        break;
      case "news":
        urlData = { ...urlData, newsUpdateId: foreignId };

        break;
      default:
        urlData = { ...urlData, blogPostId: foreignId };

        break;
    }

    const newUrl = await prisma.youtubeUrl.create({ data: urlData });
    return { success: true, data: newUrl, error: null };
  } catch (err) {
    console.log(err);
    return {
      success: false,
      error: ErrorMsg("storing youtube URL"),
      data: null,
    };
  }
}
export async function addVideo(
  file: Resource,
  type: string,
  foreignId: string,
  folderName: string
) {
  try {
    const dataUri = await fileToDataUri(file.file);
    const uploadedVideo = await cloudinary.uploader.upload(dataUri, {
      folder: folderName,
    });
    let videoData: videoData = {
      url: uploadedVideo.secure_url,
      title: uploadedVideo.original_filename || file.name,
      public_id: uploadedVideo.public_id,
      blogPostId: null,
      successStoryId: null,
      teamMemberId: null,
      newsUpdateId: null,
      webinarId: null,
      seminarId: null,
    };

    switch (type) {
      case "team-member":
        videoData = { ...videoData, teamMemberId: foreignId };
        break;
      case "success-stories":
        videoData = { ...videoData, successStoryId: foreignId };
        break;
      case "news":
        videoData = { ...videoData, newsUpdateId: foreignId };

        break;
      default:
        videoData = { ...videoData, blogPostId: foreignId };

        break;
    }

    const newUrl = await prisma.video.create({ data: videoData });
    return { success: true, data: newUrl, error: null };
  } catch (err) {
    console.log(err);
    return {
      success: false,
      error: ErrorMsg("storing video"),
      data: null,
    };
  }
}
export async function addImage(
  file: Resource,
  type: string,
  foreignId: string,
  folderName: string
) {
  try {
    const dataUri = await fileToDataUri(file.file);
    const uploadedImage = await cloudinary.uploader.upload(dataUri, {
      folder: folderName,
    });
    let imageData: imageData = {
      url: uploadedImage.secure_url,
      alt: uploadedImage.original_filename || file.name,
      public_id: uploadedImage.public_id,
      blogPostId: null,
      successStoryId: null,
      teamMemberId: null,
      newsUpdateId: null,
      remembranceId: null,
      webinarId: null,
      seminarId: null,
    };
    switch (type) {
      case "team-member":
        imageData = { ...imageData, teamMemberId: foreignId };
        break;
      case "success-stories":
        imageData = { ...imageData, successStoryId: foreignId };
        break;
      case "news":
        imageData = { ...imageData, newsUpdateId: foreignId };

        break;
      case "remembrance":
        imageData = { ...imageData, remembranceId: foreignId };

        break;
      default:
        imageData = { ...imageData, blogPostId: foreignId };

        break;
    }
    console.log(imageData);

    const newUrl = await prisma.image.create({ data: imageData });
    return { success: true, data: newUrl, error: null };
  } catch (err) {
    console.log(err);
    return {
      success: false,
      error: ErrorMsg("storing video"),
      data: null,
    };
  }
}
