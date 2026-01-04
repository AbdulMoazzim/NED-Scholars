import { prisma } from "./auth";
import cloudinary from "./cloudinary-config";
import { fileData, imageData, Resource, urlData, videoData } from "./types";

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

export async function deleteResource(id: string) {
  try {
    await cloudinary.uploader.destroy(id);
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
}

// ============================================
// GENERIC ROLLBACK STATE INTERFACE
// ============================================

export interface RollbackState {
  entityType: string; // 'blog', 'news', 'team', 'success-story', 'remembrance'
  entityId?: string;
  imageIds: string[];
  videoIds: string[];
  youtubeUrlIds: string[];
  resourceIds: string[];
  cloudinaryPublicIds: string[];
}

// ============================================
// HELPER FUNCTION TO INITIALIZE ROLLBACK STATE
// ============================================

export function createRollbackState(entityType: string): RollbackState {
  return {
    entityType,
    entityId: undefined,
    imageIds: [],
    videoIds: [],
    youtubeUrlIds: [],
    resourceIds: [],
    cloudinaryPublicIds: [],
  };
}

// ============================================
// UPLOAD RESOURCE WITH ROLLBACK TRACKING
// ============================================

export async function uploadResourceWithTracking(
  file: Resource,
  folderName: string,
  entityId: string,
  entityType: string,
  rollbackState: RollbackState
) {
  try {
    // Upload to Cloudinary
    const dataUri = await fileToDataUri(file.file);
    const uploadedResource = await cloudinary.uploader.upload(dataUri, {
      resource_type: "raw",
      folder: folderName,
      format: "pdf",
      "access_mode": "public" 
    });

    // Track Cloudinary upload
    rollbackState.cloudinaryPublicIds.push(uploadedResource.public_id);

    // Prepare data based on entity type
    const resourceData: fileData = {
      url: uploadedResource.secure_url,
      scholarshipResourceId: null,
      transparencyResourceId: null,
      public_id: uploadedResource.public_id,
      resumeId: ""
    };

    // Set the appropriate foreign key
    switch (entityType) {
      case "scholarship":
        resourceData.scholarshipResourceId = entityId;
        break;
      case "transparency":
        resourceData.transparencyResourceId = entityId;
        break;
      case "internships":
        resourceData.resumeId = entityId;
        break;
    }

    // Save to database
    const createdResource = await prisma.resources.create({
      data: resourceData,
    });

    // Track database entry
    rollbackState.resourceIds.push(createdResource.id);

    return { success: true, resource: createdResource };
  } catch (err) {
    console.error("Resource upload error:", err);
    return { success: false, error: "Failed to upload Resource" };
  }
}

// ============================================
// UPLOAD IMAGE WITH ROLLBACK TRACKING
// ============================================

export async function uploadImageWithTracking(
  file: Resource,
  folderName: string,
  entityId: string,
  entityType: string,
  rollbackState: RollbackState
) {
  try {
    // Upload to Cloudinary
    const dataUri = await fileToDataUri(file.file);
    const uploadedImage = await cloudinary.uploader.upload(dataUri, {
      resource_type: "image",
      folder: folderName,
    });

    // Track Cloudinary upload
    rollbackState.cloudinaryPublicIds.push(uploadedImage.public_id);

    // Prepare data based on entity type
    const imageData: imageData = {
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
      industrialVisitId: null,
      gupshupId: ""
    };

    // Set the appropriate foreign key
    switch (entityType) {
      case "blogs":
        imageData.blogPostId = entityId;
        break;
      case "news":
        imageData.newsUpdateId = entityId;
        break;
      case "success-story":
        imageData.successStoryId = entityId;
        break;
      case "team":
        imageData.teamMemberId = entityId;
        break;
      case "remembrance":
        imageData.remembranceId = entityId;
        break;
      case "webinar":
        imageData.webinarId = entityId;
        break;
      case "seminar":
        imageData.seminarId = entityId;
        break;
      case "industrial-visit":
        imageData.industrialVisitId = entityId;
        break;
      default:
        imageData.gupshupId = entityId;
        break;
    }

    // Save to database
    const createdImage = await prisma.image.create({
      data: imageData,
    });

    // Track database entry
    rollbackState.imageIds.push(createdImage.id);

    return { success: true, image: createdImage };
  } catch (err) {
    console.error("Image upload error:", err);
    return { success: false, error: "Failed to upload image" };
  }
}

// ============================================
// UPLOAD VIDEO WITH ROLLBACK TRACKING
// ============================================

export async function uploadVideoWithTracking(
  file: Resource,
  folderName: string,
  entityId: string,
  entityType: string,
  rollbackState: RollbackState
) {
  try {
    // Upload to Cloudinary
    const dataUri = await fileToDataUri(file.file);
    const uploadedVideo = await cloudinary.uploader.upload(dataUri, {
      resource_type: "video",
      folder: folderName,
    });

    // Track Cloudinary upload
    rollbackState.cloudinaryPublicIds.push(uploadedVideo.public_id);

    // Prepare data based on entity type
    const videoData: videoData = {
      url: uploadedVideo.secure_url,
      title: uploadedVideo.original_filename || file.name,
      public_id: uploadedVideo.public_id,
      blogPostId: null,
      successStoryId: null,
      teamMemberId: null,
      newsUpdateId: null,
      webinarId: null,
      seminarId: null,
      industrialVisitId: null
    };

    // Set the appropriate foreign key
    switch (entityType) {
      case "blogs":
        videoData.blogPostId = entityId;
        break;
      case "news":
        videoData.newsUpdateId = entityId;
        break;
      case "success-story":
        videoData.successStoryId = entityId;
        break;
      case "team":
        videoData.teamMemberId = entityId;
        break;
      case "webinar":
        videoData.webinarId = entityId;
        break;
      case "seminar":
        videoData.seminarId = entityId;
        break;
      case "industrial-visit":
        videoData.industrialVisitId = entityId;
        break;
    }

    // Save to database
    const createdVideo = await prisma.video.create({
      data: videoData,
    });

    // Track database entry
    rollbackState.videoIds.push(createdVideo.id);

    return { success: true, video: createdVideo };
  } catch (err) {
    console.error("Video upload error:", err);
    return { success: false, error: "Failed to upload video" };
  }
}

// ============================================
// SAVE YOUTUBE URL WITH ROLLBACK TRACKING
// ============================================

export async function saveYoutubeUrlWithTracking(
  url: string,
  title: string,
  entityId: string,
  entityType: string,
  rollbackState: RollbackState
) {
  try {
    const urlData: urlData = {
      url,
      title: title || "YouTube Video",
      blogPostId: null,
      successStoryId: null,
      teamMemberId: null,
      newsUpdateId: null,
    };

    // Set the appropriate foreign key
    switch (entityType) {
      case "blogs":
        urlData.blogPostId = entityId;
        break;
      case "news":
        urlData.newsUpdateId = entityId;
        break;
      case "success-story":
        urlData.successStoryId = entityId;
        break;
      case "team":
        urlData.teamMemberId = entityId;
        break;
    }

    const createdUrl = await prisma.youtubeUrl.create({
      data: urlData,
    });

    // Track database entry
    rollbackState.youtubeUrlIds.push(createdUrl.id);

    return { success: true, youtubeUrl: createdUrl };
  } catch (err) {
    console.error("YouTube URL save error:", err);
    return { success: false, error: "Failed to save YouTube URL" };
  }
}

export async function performRollback(rollbackState: RollbackState) {
  const results = {
    youtubeUrls: 0,
    videos: 0,
    images: 0,
    resources: 0,
    cloudinaryFiles: 0,
    entity: false,
  };

  try {
    // 1. Delete YouTube URLs from database
    if (rollbackState.youtubeUrlIds.length > 0) {
      const deleted = await prisma.youtubeUrl.deleteMany({
        where: { id: { in: rollbackState.youtubeUrlIds } },
      });
      results.youtubeUrls = deleted.count;
    }

    // 2. Delete Videos from database
    if (rollbackState.videoIds.length > 0) {
      const deleted = await prisma.video.deleteMany({
        where: { id: { in: rollbackState.videoIds } },
      });
      results.videos = deleted.count;
    }

    // 3. Delete Images from database
    if (rollbackState.imageIds.length > 0) {
      const deleted = await prisma.image.deleteMany({
        where: { id: { in: rollbackState.imageIds } },
      });
      results.images = deleted.count;
    }

    // 4. Delete Resources from database (if applicable)
    if (rollbackState.resourceIds.length > 0) {
      const deleted = await prisma.resources.deleteMany({
        where: { id: { in: rollbackState.resourceIds } },
      });
      results.resources = deleted.count;
    }

    // 5. Delete files from Cloudinary
    if (rollbackState.cloudinaryPublicIds.length > 0) {
      const cloudinaryResults = await Promise.allSettled(
        rollbackState.cloudinaryPublicIds.map((publicId) =>
          deleteResource(publicId)
        )
      );
      results.cloudinaryFiles = cloudinaryResults.filter(
        (r) => r.status === "fulfilled" && r.value === true
      ).length;
    }

    // 6. Delete main entity from database
    if (rollbackState.entityId) {
      switch (rollbackState.entityType) {
        case "blogs":
          await prisma.blogPost.delete({
            where: { id: rollbackState.entityId },
          });
          break;
        case "news":
          await prisma.newsUpdate.delete({
            where: { id: rollbackState.entityId },
          });
          break;
        case "success-story":
          await prisma.successStory.delete({
            where: { id: rollbackState.entityId },
          });
          break;
        case "team":
          await prisma.teamMember.delete({
            where: { id: rollbackState.entityId },
          });
          break;
        case "remembrance":
          await prisma.remembrance.delete({
            where: { id: rollbackState.entityId },
          });
          break;
        case "transparency":
          await prisma.transparency.delete({
            where: { id: rollbackState.entityId },
          });
          break;
        case "scholarship":
          await prisma.scholarshipForm.delete({
            where: { id: rollbackState.entityId },
          });
          break;
        case "gupshup":
          await prisma.gupShupSession.delete({
            where: { id: rollbackState.entityId },
          });
          break;
        default:
          break;
      }
      results.entity = true;
      console.log(
        `✅ Rolled back ${rollbackState.entityType}: ${rollbackState.entityId}`
      );
    }

    return { success: true, results };
  } catch (rollbackError) {
    console.error("❌ Error during rollback:", rollbackError);

    return {
      success: false,
      error: rollbackError,
      results,
      warning: "Partial rollback completed. Manual cleanup may be required.",
    };
  }
}
