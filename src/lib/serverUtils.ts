import cloudinary from "./cloudinary-config";
import {
  imageData,
  Resource,
  videoData,
  YouTubeUrl,
} from "./types";
import { prisma } from "./auth";


export async function fileToDataUri(file: File): Promise<string> {
  const buffer = await file.arrayBuffer();
  const bytes = new Uint8Array(buffer);
  let binary = "";
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  const base64 = Buffer.from(binary, "binary").toString("base64");
  return `data:${file.type};base64,${base64}`;
}

// Handle images
export async function HandleImages(
  images: Resource[],
  folderName: string,
  id: string,
  type: string
) {
  if (images?.length > 0) {
    for (const img of images) {
      try {
        const dataUri = await fileToDataUri(img.file);
        const image = await cloudinary.uploader.upload(dataUri, {
          resource_type: "image",
          folder: folderName,
        });
        let data: imageData = {
          url: image.secure_url,
          alt: image.original_filename || img.name,
          blogPostId: null,
          successStoryId: null,
          teamMemberId: null,
          newsUpdateId: null,
        };

        switch (type) {
    case "blogs":
      data = { ...data, blogPostId: id };
      break;
    case "news":
      data = { ...data, newsUpdateId: id };
      break;
    case "success-story":
      data = { ...data, successStoryId: id };
      break;
    default:
      data = { ...data, teamMemberId: id };
      break;
  }
        await prisma.image.create({
          data,
        });
        return true;
      } catch (err) {
        console.log("Image upload error:", err);
        return false;
      }
    }
  }
}
// Handle videos
export async function HandleVideos(
  videos: Resource[],
  folderName: string,
  id: string,
  type: string
) {
  if (videos?.length > 0) {
    for (const vid of videos) {
      try {
        const dataUri = await fileToDataUri(vid.file);
        const video = await cloudinary.uploader.upload(dataUri, {
          resource_type: "video",
          folder: folderName,
        });

        let data: videoData = {
          url: video.secure_url,
          title: video.original_filename || vid.name,
          blogPostId: null,
          successStoryId: null,
          teamMemberId: null,
          newsUpdateId: null,
        };

        switch (type) {
    case "blogs":
      data = { ...data, blogPostId: id };
      break;
    case "news":
      data = { ...data, newsUpdateId: id };
      break;
    case "success-story":
      data = { ...data, successStoryId: id };
      break;
    default:
      data = { ...data, teamMemberId: id };
      break;
  }

        await prisma.video.create({
          data,
        });
        return true;
      } catch (err) {
        console.log("Video upload error:", err);
        return false;
      }
    }
  }
}



// Handle YouTube URLs
export async function HandleURLS(urls: YouTubeUrl[], id: string, type: string) {
  if (urls?.length > 0) {
    for (const yturl of urls) {
      if (yturl.url.trim()) {
        try {
          let data: videoData = {
            url: yturl.url,
            title: yturl.title || "YouTube Video",
            blogPostId: null,
            successStoryId: null,
            teamMemberId: null,
            newsUpdateId: null,
          };
          switch (type) {
    case "blogs":
      data = { ...data, blogPostId: id };
      break;
    case "news":
      data = { ...data, newsUpdateId: id };
      break;
    case "success-story":
      data = { ...data, successStoryId: id };
      break;
    default:
      data = { ...data, teamMemberId: id };
      break;
  }

          await prisma.youtubeUrl.create({
            data,
          });
          return true;
        } catch (err) {
          console.log("YouTube URL save error:", err);
          return false;
        }
      }
    }
  }
}

