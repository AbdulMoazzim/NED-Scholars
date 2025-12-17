"use server"

import { prisma } from "@/lib/auth"
import { Resource, TeamMemberData, YouTubeUrl } from "@/lib/types";
import { HandleImages, HandleURLS, HandleVideos } from "@/lib/serverUtils";

export async function CreateTeamMember(memberData: {
  formData: TeamMemberData;
  images: Resource[];
  videos: Resource[];
  youtubeUrls: YouTubeUrl[];
}) {
  try {
    const createdMember = await prisma.teamMember.create({
      data: memberData.formData
    });

    // Handle images
        await HandleImages(memberData.images, `team-members/${createdMember.id}`, createdMember.id, "team-members");
        
        // Handle videos
        await HandleVideos(memberData.videos, `team-members/${createdMember.id}`, createdMember.id, "team-members");
        
        // Handle YouTube URLs
        await HandleURLS(memberData.youtubeUrls, createdMember.id, "team-members");

    return { success: true, data: createdMember };
  } catch (err) {
    console.log("CreateTeamMember error:", err);
    return { success: false, error: err };
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
    return { success: false, error: err };
  }
}

export async function GetMember(id: string) {
  try {
    const member = await prisma.teamMember.findUnique({
      where: { id },
      include: {
        images: true,
        videos: true,
        youtubeUrls: true,
      },
    });
    return { success: true, data: member };
  } catch (err) {
    console.log(err);
    return { success: false, error: err };
  }
}

export async function DeleteMember(id: string) {
  try {
    // Delete related media from Cloudinary if needed
    await prisma.teamMember.delete({ where: { id } });
    return { success: true };
  } catch (err) {
    console.log(err);
    return { success: false, error: err };
  }
}

export async function UpdateMember(id: string, data: TeamMemberData) {
  try {
    await prisma.teamMember.update({ where: { id }, data });
    return { success: true };
  } catch (err) {
    console.log(err);
    return { success: false, error: err };
  }
}