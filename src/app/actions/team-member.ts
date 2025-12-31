"use server";

import { prisma } from "@/lib/auth";
import { Resource, TeamMemberData, YouTubeUrl } from "@/lib/types";
import {
  createRollbackState,
  deleteResource,
  performRollback,
  saveYoutubeUrlWithTracking,
  uploadImageWithTracking,
  uploadVideoWithTracking,
} from "@/lib/serverUtils";
import { ErrorMsg } from "@/lib/utils";

export async function CreateTeamMember(teamData: {
  formData: TeamMemberData;
  images: Resource[];
  videos: Resource[];
  youtubeUrls: YouTubeUrl[];
}) {
  const rollbackState = createRollbackState("team");

  try {
    const createdMember = await prisma.teamMember.create({
      data: {
        ...teamData.formData,
        slug: `${teamData.formData.name.split(" ").join("-")}-${Date.now()}`,
      },
    });
    rollbackState.entityId = createdMember.id;

    if (teamData.images?.length > 0) {
      for (const imageResource of teamData.images) {
        const result = await uploadImageWithTracking(
          imageResource,
          "team",
          createdMember.id,
          "team",
          rollbackState
        );
        if (!result.success) {
          throw new Error("Failed to upload image");
        }
      }
    }

    if (teamData.videos?.length > 0) {
      for (const videoResource of teamData.videos) {
        const result = await uploadVideoWithTracking(
          videoResource,
          "team",
          createdMember.id,
          "team",
          rollbackState
        );
        if (!result.success) {
          throw new Error("Failed to upload video");
        }
      }
    }

    if (teamData.youtubeUrls?.length > 0) {
      for (const ytUrl of teamData.youtubeUrls) {
        if (ytUrl.url.trim()) {
          const result = await saveYoutubeUrlWithTracking(
            ytUrl.url,
            ytUrl.title,
            createdMember.id,
            "team",
            rollbackState
          );
          if (!result.success) {
            throw new Error("Failed to save YouTube URL");
          }
        }
      }
    }

    return { success: true, data: createdMember };
  } catch (err) {
    console.error("❌ CreateTeamMember error:", err);
    console.log("🔄 Starting rollback...");

    await performRollback(rollbackState);

    return {
      success: false,
      error: "Failed to create team member. All changes have been reverted.",
    };
  }
}

export async function GetAllMembers() {
  try {
    const members = await prisma.teamMember.findMany({
      include: {
        images: true,
        videos: true,
        youtubeUrls: true,
      },
    });
    return { success: true, data: members };
  } catch (err) {
    console.log(err);
    return { success: false, error: ErrorMsg("getting all team-members") };
  }
}

export async function GetMember(slug: string) {
  try {
    const member = await prisma.teamMember.findUnique({
      where: { slug },
      include: {
        images: true,
        videos: true,
        youtubeUrls: true,
      },
    });
    return { success: true, data: member };
  } catch (err) {
    console.log(err);
    return { success: false, error: ErrorMsg("getting team-member") };
  }
}

export async function DeleteMember(id: string) {
  try {
    const images = await prisma.image.findMany({ where: { teamMemberId: id } });
    console.log(images);
    images.forEach(async (image) => {
      const result = await deleteResource(image.public_id);
      if (!result) {
        return {
          success: false,
          error: "Error occured during deleting Images",
        };
      }
    });
    const videos = await prisma.video.findMany({ where: { teamMemberId: id } });
    videos.forEach(async (video) => {
      const result = await deleteResource(video.public_id);
      if (!result) {
        return {
          success: false,
          error: "Error occured during deleting videos",
        };
      }
    });
    await prisma.teamMember.delete({ where: { id } });
    return { success: true };
  } catch (err) {
    console.log(err);
    return { success: false, error: ErrorMsg("deleting team-member") };
  }
}

export async function UpdateMember(id: string, data: TeamMemberData) {
  try {
    await prisma.teamMember.update({ where: { slug: id }, data });
    return { success: true };
  } catch (err) {
    console.log(err);
    return { success: false, error: ErrorMsg("updating team-member") };
  }
}
