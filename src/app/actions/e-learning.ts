"use server";

import { prisma } from "@/lib/auth";
import { CourseData } from "@/lib/form-types";
import { createRollbackState, deleteResource, performRollback, saveYoutubeUrlWithTracking, uploadImageWithTracking, uploadVideoWithTracking } from "@/lib/serverUtils";
import { Resource, YouTubeUrl } from "@/lib/types";
import { ErrorMsg } from "@/lib/utils";

// Create Course
export async function CreateCourse(formData: CourseData, images: Resource[],
  videos: Resource[],
  youtubeUrls: YouTubeUrl[]) {
  const rollbackState = createRollbackState("course");
  
    try {
  
      const createdCourse = await prisma.course.create({
        data: {
          ...formData,
          slug: `${formData.title.split(" ").join("-")}-${Date.now()}`,
        },
      });
      rollbackState.entityId = createdCourse.id;
  
      if (images?.length > 0) {
        for (const imageResource of images) {
          const result = await uploadImageWithTracking(
            imageResource,
            "course",
            createdCourse.id,
            "course",
            rollbackState
          );
          if (!result.success) {
            throw new Error("Failed to upload image");
          }
        }
      }
  
      if (videos?.length > 0) {
        for (const videoResource of videos) {
          const result = await uploadVideoWithTracking(
            videoResource,
             "course",
            createdCourse.id,
            "course",
            rollbackState
          );
          if (!result.success) {
            throw new Error("Failed to upload video");
          }
        }
      }
  
      if (youtubeUrls?.length > 0) {
        for (const ytUrl of youtubeUrls) {
          if (ytUrl.url.trim()) {
            const result = await saveYoutubeUrlWithTracking(
              ytUrl.url,
              ytUrl.title,
              createdCourse.id,
              "course",
              rollbackState
            );
            if (!result.success) {
              throw new Error("Failed to save YouTube URL");
            }
          }
        }
      }
  
      return { success: true, data: createdCourse };
    } catch (err) {
      console.error("❌ CreateCourse error:", err);
      console.log("🔄 Starting rollback...");
  
      await performRollback(rollbackState);
  
      return {
        success: false,
        error: "Failed to create course. All changes have been reverted.",
      };
    }
  }

// Get All Courses
export async function GetAllCourses() {
  try {
    const courses = await prisma.course.findMany({
      include: {
        images: true,
        videos: true,
        youtubeUrls: true,
      },
      orderBy: {createdAt: "desc"}
    });

    return { success: true, data: courses };
  } catch (err) {
    console.error("GetAllCourses error:", err);
    return { success: false, error: ErrorMsg("getting courses") };
  }
}

// Get Course by ID
export async function GetCourseById(id: string) {
  try {
    const course = await prisma.course.findUnique({
      where: { id },
      include: {
        images: true,
        videos: true,
        youtubeUrls: true,
      },
    });

    if (!course) {
      return { success: false, error: "Course not found" };
    }

    return { success: true, data: course };
  } catch (err) {
    console.error("GetCourseById error:", err);
    return { success: false, error: ErrorMsg("getting course") };
  }
}

// Get Course by Slug
export async function GetCourseBySlug(slug: string) {
  try {
    const course = await prisma.course.findUnique({
      where: { slug },
      include: {
        images: true,
        videos: true,
        youtubeUrls: true,
      },
    });


    if (!course) {
      return { success: false, error: "Course not found" };
    }

    return { success: true, data: course };
  } catch (err) {
    console.error("GetCourseBySlug error:", err);
    return { success: false, error: ErrorMsg("getting course") };
  }
}

// Update Course
export async function UpdateCourse(id: string, data: CourseData) {
  try {
    await prisma.course.update({ where: { slug: id }, data });
    return { success: true };
  } catch (err) {
    console.log(err);
    return { success: false, error: ErrorMsg("updating course") };
  }
}

// Delete Course
export async function DeleteCourse(id: string) {
  try {
    const images = await prisma.image.findMany({ where: { courseId: id } });
    images.forEach(async (image) => {
      const result = await deleteResource(image.public_id);
      if (!result) {
        return {
          success: false,
          error: "Error occured during deleting Images",
        };
      }
    });
    const videos = await prisma.video.findMany({ where: { courseId: id } });
    videos.forEach(async (video) => {
      const result = await deleteResource(video.public_id);
      if (!result) {
        return {
          success: false,
          error: "Error occured during deleting videos",
        };
      }
    });
    await prisma.course.delete({
      where: { id },
    });

    return { success: true };
  } catch (err) {
    console.error("DeleteCourse error:", err);
    return { success: false, error: ErrorMsg("deleting course") };
  }
}