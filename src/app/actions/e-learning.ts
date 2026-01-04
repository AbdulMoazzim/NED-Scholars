"use server";

import { prisma } from "@/lib/auth";
import { ErrorMsg } from "@/lib/utils";

export interface CourseData {
  title: string;
  instructor: string;
  instructorTitle: string | null;
  instructorBio: string | null;
  overview: string;
  description: string;
  learningOutcomes: string;
  category: string;
  level: string;
  thumbnailUrl: string | null;
  youtubeUrl: string | null;
  videoUrl: string | null;
  duration: string | null;
  targetAudience: string;
  prerequisites: string;
  syllabus: string | null;
  modules: number | null;
  lessons: number | null;
  isFree: boolean;
  price: number;
  currency: string;
  status: string;
  featured: boolean;
  publishedDate: Date;
  slug: string;
  tags: string[];
}

// ============================================
// COURSE ACTIONS
// ============================================

// Create Course
export async function CreateCourse(courseData: CourseData) {
  try {
    const course = await prisma.course.create({
      data: {
        ...courseData,
        category: courseData.category,
        level: courseData.level || "beginner",
        status: courseData.status || "active",
        isFree: courseData.isFree ?? true,
        tags: courseData.tags || [],
      },
      include: {
        enrollments: true,
      },
    });

    return { success: true, data: course };
  } catch (err) {
    console.error("CreateCourse error:", err);
    return { success: false, error: ErrorMsg("creating course") };
  }
}

// Get All Courses
export async function GetAllCourses() {
  try {
    const courses = await prisma.course.findMany({
      include: {
        _count: {
          select: { enrollments: true },
        },
      },
      orderBy: [{ featured: "desc" }, { createdAt: "desc" }],
    });

    return { success: true, data: courses };
  } catch (err) {
    console.error("GetAllCourses error:", err);
    return { success: false, error: ErrorMsg("getting courses") };
  }
}

// Get Active Courses (for public page)
export async function GetActiveCourses() {
  try {
    const courses = await prisma.course.findMany({
      where: {
        status: "active",
      },
      include: {
        _count: {
          select: { enrollments: true },
        },
      },
      orderBy: [{ featured: "desc" }, { createdAt: "desc" }],
    });

    return { success: true, data: courses };
  } catch (err) {
    console.error("GetActiveCourses error:", err);
    return { success: false, error: ErrorMsg("getting active courses") };
  }
}

// Get Featured Courses
export async function GetFeaturedCourses() {
  try {
    const courses = await prisma.course.findMany({
      where: {
        featured: true,
        status: "active",
      },
      include: {
        _count: {
          select: { enrollments: true },
        },
      },
      orderBy: { createdAt: "desc" },
      take: 6,
    });

    return { success: true, data: courses };
  } catch (err) {
    console.error("GetFeaturedCourses error:", err);
    return { success: false, error: ErrorMsg("getting featured courses") };
  }
}

// Get Course by ID
export async function GetCourseById(id: string) {
  try {
    const course = await prisma.course.findUnique({
      where: { id },
      include: {
        enrollments: true,
        _count: {
          select: { enrollments: true },
        },
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
        _count: {
          select: { enrollments: true },
        },
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
export async function UpdateCourse(id: string, courseData: CourseData) {
  try {
    const updateData = { ...courseData };

    // Convert string enums if provided
    if (courseData.category) {
      updateData.category = courseData.category;
    }
    if (courseData.level) {
      updateData.level = courseData.level;
    }
    if (courseData.status) {
      updateData.status = courseData.status;
    }

    const course = await prisma.course.update({
      where: { id },
      data: updateData,
      include: {
        enrollments: true,
      },
    });

    return { success: true, data: course };
  } catch (err) {
    console.error("UpdateCourse error:", err);
    return { success: false, error: ErrorMsg("updating course") };
  }
}

// Delete Course
export async function DeleteCourse(id: string) {
  try {
    await prisma.course.delete({
      where: { id },
    });

    return { success: true };
  } catch (err) {
    console.error("DeleteCourse error:", err);
    return { success: false, error: ErrorMsg("deleting course") };
  }
}

// Get Courses by Category
export async function GetCoursesByCategory(category: string) {
  try {
    const courses = await prisma.course.findMany({
      where: {
        category: category,
        status: "active",
      },
      include: {
        _count: {
          select: { enrollments: true },
        },
      },
      orderBy: { createdAt: "desc" },
    });

    return { success: true, data: courses };
  } catch (err) {
    console.error("GetCoursesByCategory error:", err);
    return { success: false, error: ErrorMsg("getting courses by category") };
  }
}

// Increment Enrollment Count
export async function IncrementEnrollmentCount(courseId: string) {
  try {
    const course = await prisma.course.update({
      where: { id: courseId },
      data: {
        enrollmentCount: {
          increment: 1,
        },
      },
    });

    return { success: true, data: course };
  } catch (err) {
    console.error("IncrementEnrollmentCount error:", err);
    return { success: false, error: ErrorMsg("updating enrollment count") };
  }
}

// ============================================
// ENROLLMENT ACTIONS
// ============================================

interface CreateEnrollmentData {
  userId: string;
  fullName: string;
  email: string;
  phone: string | null;
  currentStatus: string;
  organization: string | null;
  department: string | null;
  courseId: string;
}

// Enroll in Course
export async function EnrollInCourse(enrollmentData: CreateEnrollmentData) {
  try {
    // Check if already enrolled
    const existingEnrollment = await prisma.courseEnrollment.findFirst({
      where: {
        email: enrollmentData.email,
        courseId: enrollmentData.courseId,
      },
    });

    if (existingEnrollment) {
      return {
        success: false,
        error: "You are already enrolled in this course",
      };
    }

    // Create enrollment
    const enrollment = await prisma.courseEnrollment.create({
      data: enrollmentData,
      include: {
        course: true,
      },
    });

    // Increment course enrollment count
    await IncrementEnrollmentCount(enrollmentData.courseId);

    return { success: true, data: enrollment };
  } catch (err) {
    console.error("EnrollInCourse error:", err);
    return { success: false, error: ErrorMsg("enrolling in course") };
  }
}

// Get All Enrollments
export async function GetAllEnrollments() {
  try {
    const enrollments = await prisma.courseEnrollment.findMany({
      include: {
        course: {
          select: {
            id: true,
            title: true,
            instructor: true,
            category: true,
          },
        },
      },
      orderBy: { enrollmentDate: "desc" },
    });

    return { success: true, data: enrollments };
  } catch (err) {
    console.error("GetAllEnrollments error:", err);
    return { success: false, error: ErrorMsg("getting enrollments") };
  }
}

// Get Enrollments by User - NEW FUNCTION
export async function GetEnrollmentsByUser(userId: string) {
  try {
    const enrollments = await prisma.courseEnrollment.findMany({
      where: { userId },
      include: {
        course: {
          select: {
            id: true,
            title: true,
            instructor: true,
            category: true,
            slug: true,
            status: true,
          },
        },
      },
      orderBy: { enrollmentDate: "desc" },
    });

    return { success: true, data: enrollments };
  } catch (err) {
    console.error("GetEnrollmentsByUser error:", err);
    return { success: false, error: ErrorMsg("getting enrollments") };
  }
}

// Get Enrollments by Course
export async function GetEnrollmentsByCourse(courseId: string) {
  try {
    const enrollments = await prisma.courseEnrollment.findMany({
      where: { courseId },
      orderBy: { enrollmentDate: "desc" },
    });

    return { success: true, data: enrollments };
  } catch (err) {
    console.error("GetEnrollmentsByCourse error:", err);
    return { success: false, error: ErrorMsg("getting enrollments") };
  }
}

// Get Enrollments by Email
export async function GetEnrollmentsByEmail(email: string) {
  try {
    const enrollments = await prisma.courseEnrollment.findMany({
      where: { email },
      include: {
        course: true,
      },
      orderBy: { enrollmentDate: "desc" },
    });

    return { success: true, data: enrollments };
  } catch (err) {
    console.error("GetEnrollmentsByEmail error:", err);
    return { success: false, error: ErrorMsg("getting enrollments") };
  }
}

// Submit Course Review
export async function SubmitCourseReview(
  enrollmentId: string,
  rating: number,
  review?: string
) {
  try {
    const enrollment = await prisma.courseEnrollment.update({
      where: { id: enrollmentId },
      data: {
        rating,
        review,
        reviewDate: new Date(),
      },
      include: {
        course: true,
      },
    });

    // Update course average rating
    const allReviews = await prisma.courseEnrollment.findMany({
      where: {
        courseId: enrollment.courseId,
        rating: { not: null },
      },
      select: { rating: true },
    });

    const avgRating =
      allReviews.reduce((sum, r) => sum + (r.rating || 0), 0) /
      allReviews.length;

    await prisma.course.update({
      where: { id: enrollment.courseId },
      data: { rating: avgRating },
    });

    return { success: true, data: enrollment };
  } catch (err) {
    console.error("SubmitCourseReview error:", err);
    return { success: false, error: ErrorMsg("submitting review") };
  }
}

// Get Course Stats
export async function GetCourseStats() {
  try {
    const [totalCourses, activeCourses, totalEnrollments, completedEnrollments] =
      await Promise.all([
        prisma.course.count(),
        prisma.course.count({ where: { status: "active" } }),
        prisma.courseEnrollment.count(),
        prisma.courseEnrollment.count({ where: { status: "completed" } }),
      ]);

    const completionRate =
      totalEnrollments > 0
        ? (completedEnrollments / totalEnrollments) * 100
        : 0;

    return {
      success: true,
      data: {
        totalCourses,
        activeCourses,
        totalEnrollments,
        completedEnrollments,
        completionRate: completionRate.toFixed(2),
      },
    };
  } catch (err) {
    console.error("GetCourseStats error:", err);
    return { success: false, error: ErrorMsg("getting stats") };
  }
}