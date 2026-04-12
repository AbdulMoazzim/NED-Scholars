"use client";

import { useLayoutEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  ArrowLeft,
  Loader2,
  Play,
  Youtube,
  Edit,
  Trash2,
} from "lucide-react";
import Link from "next/link";
import { GetCourseBySlug, DeleteCourse } from "@/app/actions/e-learning";
import { toast } from "sonner";
import { Course } from "@/lib/form-types";
import { useSession } from "@/lib/auth-client";

export default function CourseDetailsPage({}: {
  params: Promise<{ elearning: string }>;
}) {
  const router = useRouter();
  const pageParams = useParams();
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(false);
  const { data: session } = useSession();

  useLayoutEffect(() => {
    fetchCourse();
  }, [pageParams?.elearning]);

  const fetchCourse = async () => {
    setLoading(true);
    try {
      const result = await GetCourseBySlug(
        (pageParams?.elearning as string) || ""
      );
      if (result.success && result.data) {
        setCourse(result.data as Course);
      } else {
        toast.error("Course not found");
        router.push("/events/e-learning");
      }
    } catch {
      toast.error("Failed to load course");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!course) return;
    if (!confirm("Are you sure you want to delete this course?")) return;
    setDeleting(true);
    try {
      await DeleteCourse(course.id);
      toast.success("Course deleted");
      router.push("/events/e-learning");
    } catch {
      toast.error("Failed to delete course");
      setDeleting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-12 h-12 animate-spin text-[#1164A3]" />
      </div>
    );
  }

  if (!course) return null;

  const thumbnail =
    course.images && course.images.length > 0 ? course.images[0].url : null;
  const youtubeUrls = course.youtubeUrls ?? [];
  const videos = course.videos ?? [];
  const extraImages = course.images?.slice(1) ?? [];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#1164A3] to-[#68B9C4] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Button
              variant="ghost"
              onClick={() => router.push("/events/e-learning")}
              className="text-white hover:bg-white/20 mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Courses
            </Button>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Title + Description */}
              <div className="lg:col-span-2">
                <Badge className="mb-4 bg-white/20 text-white border-white/30">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Course
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  {course.title}
                </h1>
                <p className="text-xl text-white/90">
                  {course.description
                    .replace(/<[^>]*>/g, " ")
                    .replace(/\s+/g, " ")
                    .trim()}
                </p>
              </div>

              {/* Enrollment / Media Card */}
              <div className="lg:col-span-1">
                    {/* Thumbnail */}
                    {thumbnail && (
                      <div className="w-full h-44 rounded-lg overflow-hidden mb-2">
                        <img
                          src={thumbnail}
                          alt={course.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}

                    {/* YouTube links */}
                    {youtubeUrls.map((yt, i) => (
                      <Button
                        key={i}
                        variant="outline"
                        className="w-full border-red-500 text-red-500 hover:bg-red-50"
                        onClick={() => window.open(yt.url, "_blank")}
                      >
                        <Youtube className="w-4 h-4 mr-2" />
                        {yt.title || "Watch on YouTube"}
                      </Button>
                    ))}

                    {/* Uploaded videos */}
                    {videos.map((vid, i) => (
                      <Button
                        key={i}
                        variant="outline"
                        className="w-full border-[#68B9C4] text-[#1164A3] hover:bg-[#82B4CC]/10"
                        onClick={() => window.open(vid.url, "_blank")}
                      >
                        <Play className="w-4 h-4 mr-2" />
                        {vid.title || `Watch Video ${videos.length > 1 ? i + 1 : ""}`}
                      </Button>
                    ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admin Action Buttons */}
      {session?.user.role === "admin" && (
        <div className="bg-gray-100 border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto py-4 flex items-center justify-end gap-3">
              <Link href={`/edit/e-learning/${course.slug}`}>
                <Button
                  variant="outline"
                  className="flex items-center gap-2 border-[#1164A3] text-[#1164A3] hover:bg-[#1164A3] hover:text-white"
                >
                  <Edit className="w-4 h-4" />
                  Update Course
                </Button>
              </Link>
              <Button
                variant="destructive"
                className="flex items-center gap-2 bg-red-600 hover:bg-red-700"
                onClick={handleDelete}
                disabled={deleting}
              >
                {deleting ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Trash2 className="w-4 h-4" />
                )}
                Delete Course
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Course Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-8">

            {/* Full Description */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-6 h-6 text-[#1164A3]" />
                  Course Description
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 whitespace-pre-line leading-relaxed">
                  {course.description
                    .replace(/<[^>]*>/g, " ")
                    .replace(/\s+/g, " ")
                    .trim()}
                </p>
              </CardContent>
            </Card>

            {/* Additional Images */}
            {extraImages.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#1164A3]">Gallery</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {extraImages.map((img, i) => (
                      <div
                        key={i}
                        className="rounded-lg overflow-hidden h-44 border border-[#82B4CC]/30"
                      >
                        <img
                          src={img.url}
                          alt={img.alt || `Course image ${i + 2}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* All YouTube Links */}
            {youtubeUrls.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Youtube className="w-6 h-6 text-red-500" />
                    Video Resources
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-3">
                  {youtubeUrls.map((yt, i) => (
                    <Button
                      key={i}
                      variant="outline"
                      className="w-full justify-start border-red-500 text-red-500 hover:bg-red-50"
                      onClick={() => window.open(yt.url, "_blank")}
                    >
                      <Youtube className="w-4 h-4 mr-2" />
                      {yt.title || `YouTube Video ${youtubeUrls.length > 1 ? i + 1 : ""}`}
                    </Button>
                  ))}
                </CardContent>
              </Card>
            )}

            {/* Uploaded Videos */}
            {videos.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Play className="w-6 h-6 text-[#1164A3]" />
                    Course Videos
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-3">
                  {videos.map((vid, i) => (
                    <Button
                      key={i}
                      variant="outline"
                      className="w-full justify-start border-[#68B9C4] text-[#1164A3] hover:bg-[#82B4CC]/10"
                      onClick={() => window.open(vid.url, "_blank")}
                    >
                      <Play className="w-4 h-4 mr-2" />
                      {vid.title || `Video ${videos.length > 1 ? i + 1 : ""}`}
                    </Button>
                  ))}
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}