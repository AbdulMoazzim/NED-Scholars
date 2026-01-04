"use client";

import { ReactNode, useEffect, useLayoutEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  BookOpen,
  Users,
  Clock,
  Award,
  CheckCircle,
  Target,
  TrendingUp,
  Laptop,
  Brain,
  Code,
  BarChart3,
  Youtube,
  Star,
  Loader2,
  ArrowLeft,
  GraduationCap,
  Building,
  Mail,
  Phone,
  User,
  Sparkles,
} from "lucide-react";
import {
  GetCourseBySlug,
  EnrollInCourse,
  SubmitCourseReview,
  GetEnrollmentsByUser,
} from "@/app/actions/e-learning";
import { toast } from "sonner";
import { Course, CourseEnrollment } from "@/lib/form-types";
import Image from "next/image";
import { useSession } from "@/lib/auth-client";
import { getEnrollmentStatusColor } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";

interface EnrollmentFormData {
  userId: string;
  fullName: string;
  email: string;
  phone: string;
  currentStatus: string;
  organization: string;
  department: string;
}

export default function CourseDetailsPage({
  params,
}: {
  params: Promise<{ elearning: string }>;
}) {
  const router = useRouter();
  const session = useSession();
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);
  const [enrolling, setEnrolling] = useState(false);
  const [showEnrollDialog, setShowEnrollDialog] = useState(false);
  const [formData, setFormData] = useState<EnrollmentFormData>({
    userId: "",
    fullName: "",
    email: "",
    phone: "",
    currentStatus: "",
    organization: "",
    department: "",
  });

  const pageParams = useParams();
  const [userEnrollment, setUserEnrollment] = useState<CourseEnrollment | null>(
    null
  );
  const [tempRating, setTempRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [submittingReview, setSubmittingReview] = useState(false);

  // Fetch user enrollment
  useEffect(() => {
    if (session.data?.user && course) {
      fetchUserEnrollment();
    }
  }, [session.data?.user, course]);

  const fetchUserEnrollment = async () => {
    if (!session.data?.user.id || !course?.id) return;

    try {
      const result = await GetEnrollmentsByUser(session.data.user.id);
      if (result.success && result.data) {
        const enrollment = (result.data as CourseEnrollment[]).find(
          (e) => e.courseId === course.id
        );
        if (enrollment) {
          setEnrolling(session.data?.user.id === enrollment.userId)
          setUserEnrollment(enrollment);
        }
      }
    } catch (error) {
      console.error("Error fetching enrollment:", error);
    }
  };

  const handleSubmitReview = async () => {
    if (!userEnrollment || tempRating === 0) return;

    setSubmittingReview(true);
    try {
      const result = await SubmitCourseReview(
        userEnrollment.id,
        tempRating,
        reviewText
      );

      if (result.success) {
        toast.success("Review submitted successfully!");
        fetchUserEnrollment();
        setTempRating(0);
        setReviewText("");
      } else {
        toast.error(result.error || "Failed to submit review");
      }
    } catch (error) {
      toast.error("An error occurred");
      console.error("Error:", error);
    } finally {
      setSubmittingReview(false);
    }
  };

  useLayoutEffect(() => {
    if (!session.data?.user) {
      router.push("/auth");
    }
    fetchCourse();
  }, [pageParams?.elearning]);
  const fetchCourse = async () => {
    setLoading(true);
    try {
      const result = await GetCourseBySlug(pageParams?.elearning as string || "");
      if (result.success && result.data) {
        setCourse(result.data as Course);
      } else {
        toast.error("Course not found");
        router.push("/events/e-learning");
      }
    } catch (error) {
      toast.error("Failed to load course");
      console.error("Error fetching course:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleEnrollment = async () => {
    if (!course) return;

    // Validate form
    if (!formData.fullName || !formData.email || !formData.currentStatus) {
      toast.error("Please fill in all required fields");
      return;
    }

    setEnrolling(true);
    try {
      const result = await EnrollInCourse({
        ...formData,
        userId: session.data?.user.id || "",
        courseId: course.id,
      });

      if (result.success) {
        toast.success("Successfully enrolled in the course!");
        setShowEnrollDialog(false);
        setFormData({
          userId: "",
          fullName: "",
          email: "",
          phone: "",
          currentStatus: "",
          organization: "",
          department: "",
        });
      } else {
        toast.error(result.error || "Failed to enroll");
      }
    } catch (error) {
      toast.error("An error occurred during enrollment");
      console.error("Enrollment error:", error);
    } finally {
      setEnrolling(false);
    }
  };

  const getCategoryIcon = (category: string) => {
    const icons: Record<string, ReactNode> = {
      engineering: <Laptop className="w-5 h-5" />,
      data_science: <BarChart3 className="w-5 h-5" />,
      programming: <Code className="w-5 h-5" />,
      artificial_intelligence: <Brain className="w-5 h-5" />,
      statistics: <BarChart3 className="w-5 h-5" />,
      six_sigma: <Target className="w-5 h-5" />,
    };
    return icons[category] || <BookOpen className="w-5 h-5" />;
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      engineering: "from-[#1164A3] to-[#68B9C4]",
      data_science: "from-[#68B9C4] to-[#82B4CC]",
      programming: "from-[#82B4CC] to-[#B0A3B3]",
      artificial_intelligence: "from-[#1164A3] to-[#82B4CC]",
      statistics: "from-[#68B9C4] to-[#B0A3B3]",
      six_sigma: "from-[#82B4CC] to-[#1164A3]",
    };
    return colors[category] || "from-[#1164A3] to-[#68B9C4]";
  };

  const formatCategory = (category: string) => {
    return category
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const formatLevel = (level: string) => {
    return level.charAt(0).toUpperCase() + level.slice(1);
  };

  const parseLearningOutcomes = (outcomes: string): string[] => {
    try {
      return JSON.parse(outcomes);
    } catch {
      return outcomes.split("\n").filter((line) => line.trim());
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-12 h-12 animate-spin text-[#1164A3]" />
      </div>
    );
  }

  if (!course) {
    return null;
  }

  const learningOutcomes = parseLearningOutcomes(course.learningOutcomes);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section
        className={`bg-gradient-to-r ${getCategoryColor(
          course.category
        )} text-white py-16`}
      >
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
              <div className="lg:col-span-2">
                <div className="flex items-center gap-4 mb-4">
                  <Badge className="bg-white/20 text-white border-white/30">
                    {getCategoryIcon(course.category)}
                    <span className="ml-2">
                      {formatCategory(course.category)}
                    </span>
                  </Badge>
                  <Badge
                    variant="outline"
                    className="bg-white/20 text-white border-white/30"
                  >
                    {formatLevel(course.level)}
                  </Badge>
                  {course.featured && (
                    <Badge className="bg-yellow-500 text-white border-yellow-600">
                      <Sparkles className="w-3 h-3 mr-1" />
                      Featured
                    </Badge>
                  )}
                </div>

                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  {course.title}
                </h1>
                <p className="text-xl text-white/90 mb-6">{course.overview}</p>

                <div className="flex flex-wrap items-center gap-6 text-white/90">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    <span>
                      {course.instructorTitle} {course.instructor}
                    </span>
                  </div>
                  {course.duration && (
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5" />
                      <span>{course.duration}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    <span>{course.enrollmentCount} students enrolled</span>
                  </div>
                  {course.rating && course.rating > 0 && (
                    <div className="flex items-center gap-2">
                      <Star className="w-5 h-5 fill-white" />
                      <span>{course.rating.toFixed(1)}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Enrollment Card */}

              
                <div className="lg:col-span-1">
                  <Card className="bg-white shadow-2xl">
                    <CardContent className="p-6">
                      <div className="text-center mb-6">
                        {course.isFree ? (
                          <div className="text-4xl font-bold text-[#1164A3] mb-2">
                            Free
                          </div>
                        ) : (
                          <div className="text-4xl font-bold text-[#1164A3] mb-2">
                            {course.currency} {course.price}
                          </div>
                        )}
                        <p className="text-gray-600">Full lifetime access</p>
                      </div>

                      <Dialog
                        open={showEnrollDialog}
                        onOpenChange={setShowEnrollDialog}
                      >
                        <DialogTrigger asChild disabled={enrolling}>
                          <Button className="w-full bg-gradient-to-r from-[#1164A3] to-[#68B9C4] text-white text-lg py-6">
                            <GraduationCap className="w-5 h-5 mr-2" />
                            {enrolling ? `Enrolled` :`Enroll Now`}
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-md">
                          <DialogHeader>
                            <DialogTitle>Enroll in Course</DialogTitle>
                            <DialogDescription>
                              Please fill in your details to enroll in this
                              course
                            </DialogDescription>
                          </DialogHeader>
                          <div className="space-y-4 mt-4">
                            <div>
                              <Label className="pb-2" htmlFor="fullName">
                                Full Name{" "}
                                <span className="text-red-500">*</span>
                              </Label>
                              <div className="relative">
                                <User className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                                <Input
                                  id="fullName"
                                  placeholder="John Doe"
                                  value={formData.fullName}
                                  onChange={(e) =>
                                    setFormData({
                                      ...formData,
                                      fullName: e.target.value,
                                    })
                                  }
                                  className="pl-10"
                                />
                              </div>
                            </div>
                            <div>
                              <Label className="pb-2" htmlFor="email">
                                Email <span className="text-red-500">*</span>
                              </Label>
                              <div className="relative">
                                <Mail className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                                <Input
                                  id="email"
                                  type="email"
                                  placeholder="john@example.com"
                                  value={formData.email}
                                  onChange={(e) =>
                                    setFormData({
                                      ...formData,
                                      email: e.target.value,
                                    })
                                  }
                                  className="pl-10"
                                />
                              </div>
                            </div>
                            <div>
                              <Label className="pb-2" htmlFor="phone">
                                Phone
                              </Label>
                              <div className="relative">
                                <Phone className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                                <Input
                                  id="phone"
                                  placeholder="+92 300 1234567"
                                  value={formData.phone}
                                  onChange={(e) =>
                                    setFormData({
                                      ...formData,
                                      phone: e.target.value,
                                    })
                                  }
                                  className="pl-10"
                                />
                              </div>
                            </div>
                            <div>
                              <Label className="pb-2" htmlFor="currentStatus">
                                Current Status{" "}
                                <span className="text-red-500">*</span>
                              </Label>
                              <Select
                                value={formData.currentStatus}
                                onValueChange={(value) =>
                                  setFormData({
                                    ...formData,
                                    currentStatus: value,
                                  })
                                }
                              >
                                <SelectTrigger>
                                  <SelectValue placeholder="Select your status" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="student">
                                    Student
                                  </SelectItem>
                                  <SelectItem value="professional">
                                    Professional
                                  </SelectItem>
                                  <SelectItem value="faculty">
                                    Faculty
                                  </SelectItem>
                                  <SelectItem value="researcher">
                                    Researcher
                                  </SelectItem>
                                  <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div>
                              <Label className="pb-2" htmlFor="organization">
                                Organization
                              </Label>
                              <div className="relative">
                                <Building className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                                <Input
                                  id="organization"
                                  placeholder="Your university or company"
                                  value={formData.organization}
                                  onChange={(e) =>
                                    setFormData({
                                      ...formData,
                                      organization: e.target.value,
                                    })
                                  }
                                  className="pl-10"
                                />
                              </div>
                            </div>
                            <div>
                              <Label className="pb-2" htmlFor="department">
                                Department
                              </Label>
                              <Input
                                id="department"
                                placeholder="e.g., Computer Science"
                                value={formData.department}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    department: e.target.value,
                                  })
                                }
                              />
                            </div>
                            <Button
                              onClick={handleEnrollment}
                              disabled={enrolling}
                              className="w-full bg-gradient-to-r from-[#1164A3] to-[#68B9C4]"
                            >
                              {enrolling ? (
                                <>
                                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                  Enrolling...
                                </>
                              ) : (
                                <>
                                  <CheckCircle className="w-4 h-4 mr-2" />
                                  Complete Enrollment
                                </>
                              )}
                            </Button>
                          </div>
                        </DialogContent>
                      </Dialog>

                      {course.youtubeUrl && (
                        <Button
                          variant="outline"
                          className="w-full mt-3 border-red-500 text-red-500 hover:bg-red-50"
                          onClick={() =>
                            window.open(course.youtubeUrl || "", "_blank")
                          }
                        >
                          <Youtube className="w-4 h-4 mr-2" />
                          Watch on YouTube
                        </Button>
                      )}
                      {course.thumbnailUrl && (
                        <Image
                          fill
                          alt="thumbnail"
                          src={course.thumbnailUrl}
                          className="w-full mt-3 border-red-500 text-red-500 hover:bg-red-50"
                        />
                      )}
                      {course.videoUrl && (
                        <Button
                          variant="outline"
                          className="w-full mt-3 border-red-500 text-red-500 hover:bg-red-50"
                          onClick={() =>
                            window.open(course.videoUrl || "", "_blank")
                          }
                        >
                          <Youtube className="w-4 h-4 mr-2" />
                          Watch Now
                        </Button>
                      )}

                      <Separator className="my-6" />

                      <div className="space-y-3 text-sm">
                        <div className="flex items-center gap-2 text-gray-700">
                          <CheckCircle className="w-5 h-5 text-[#68B9C4]" />
                          <span>Lifetime access</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-700">
                          <CheckCircle className="w-5 h-5 text-[#68B9C4]" />
                          <span>Certificate of completion</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-700">
                          <CheckCircle className="w-5 h-5 text-[#68B9C4]" />
                          <span>Self-paced learning</span>
                        </div>
                        {course.modules && (
                          <div className="flex items-center gap-2 text-gray-700">
                            <CheckCircle className="w-5 h-5 text-[#68B9C4]" />
                            <span>{course.modules} modules</span>
                          </div>
                        )}
                        {course.lessons && (
                          <div className="flex items-center gap-2 text-gray-700">
                            <CheckCircle className="w-5 h-5 text-[#68B9C4]" />
                            <span>{course.lessons} lessons</span>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
            </div>
          </div>
        </div>
      </section>

      {session && userEnrollment && (
        <section className="py-12 bg-gradient-to-r from-[#B0A3B3]/5 to-[#82B4CC]/5">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <Card className="border-[#82B4CC]/30 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="w-6 h-6 text-[#1164A3]" />
                    My Enrollment
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label className="pb-2 text-sm text-gray-600">
                        Status
                      </Label>
                      <Badge
                        className={getEnrollmentStatusColor(
                          userEnrollment.status
                        )}
                      >
                        {userEnrollment.status}
                      </Badge>
                    </div>
                    <div>
                      <Label className="pb-2 text-sm text-gray-600">
                        Enrolled Date
                      </Label>
                      <p className="font-medium">
                        {new Date(
                          userEnrollment.enrollmentDate
                        ).toLocaleDateString()}
                      </p>
                    </div>
                    {userEnrollment.rating && (
                      <div>
                        <Label className="pb-2 text-sm text-gray-600">
                          Your Rating
                        </Label>
                        <div className="flex items-center gap-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`w-5 h-5 ${
                                star <= (userEnrollment.rating || 0)
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Feedback Form */}
                  {!userEnrollment.rating && (
                    <div className="border-t pt-6">
                      <h3 className="text-lg font-semibold mb-4">
                        Rate This Course
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <Label className="pb-2">Rating</Label>
                          <div className="flex items-center gap-2 mt-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <button
                                key={star}
                                onClick={() => setTempRating(star)}
                                className="transition-transform hover:scale-110"
                              >
                                <Star
                                  className={`w-8 h-8 ${
                                    star <= tempRating
                                      ? "fill-yellow-400 text-yellow-400"
                                      : "text-gray-300"
                                  }`}
                                />
                              </button>
                            ))}
                          </div>
                        </div>
                        <div>
                          <Label className="pb-2">Review (Optional)</Label>
                          <Textarea
                            value={reviewText}
                            onChange={(e) => setReviewText(e.target.value)}
                            placeholder="Share your experience with this course..."
                            rows={4}
                          />
                        </div>
                        <Button
                          onClick={handleSubmitReview}
                          disabled={tempRating === 0 || submittingReview}
                          className="bg-gradient-to-r from-[#1164A3] to-[#68B9C4]"
                        >
                          {submittingReview ? (
                            <>
                              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                              Submitting...
                            </>
                          ) : (
                            <>
                              <CheckCircle className="w-4 h-4 mr-2" />
                              Submit Review
                            </>
                          )}
                        </Button>
                      </div>
                    </div>
                  )}

                  {/* Display existing review */}
                  {userEnrollment.rating && userEnrollment.review && (
                    <div className="border-t pt-6">
                      <h3 className="text-lg font-semibold mb-4">
                        Your Review
                      </h3>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-gray-700 italic mb-2">
                          &quot;{userEnrollment.review}&quot;
                        </p>
                        {userEnrollment.reviewDate && (
                          <p className="text-xs text-gray-500">
                            Reviewed on{" "}
                            {new Date(
                              userEnrollment.reviewDate
                            ).toLocaleDateString()}
                          </p>
                        )}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Course Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Description */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="w-6 h-6 text-[#1164A3]" />
                      Course Description
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 whitespace-pre-line leading-relaxed">
                      {course.description}
                    </p>
                  </CardContent>
                </Card>

                {/* Learning Outcomes */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="w-6 h-6 text-[#1164A3]" />
                      What You&apos;ll Learn
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {learningOutcomes.map((outcome, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-[#68B9C4] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Prerequisites */}
                {course.prerequisites && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Award className="w-6 h-6 text-[#1164A3]" />
                        Prerequisites
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 whitespace-pre-line">
                        {course.prerequisites}
                      </p>
                    </CardContent>
                  </Card>
                )}

                {/* Syllabus */}
                {course.syllabus && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <BookOpen className="w-6 h-6 text-[#1164A3]" />
                        Course Syllabus
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 whitespace-pre-line">
                        {course.syllabus}
                      </p>
                    </CardContent>
                  </Card>
                )}

                {/* Instructor */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="w-6 h-6 text-[#1164A3]" />
                      Your Instructor
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-start gap-4">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#1164A3] to-[#68B9C4] flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                        {course.instructor.charAt(0)}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800">
                          {course.instructorTitle} {course.instructor}
                        </h3>
                        {course.instructorBio && (
                          <p className="text-gray-600 mt-2">
                            {course.instructorBio}
                          </p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1 space-y-6">
                {/* Target Audience */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Users className="w-5 h-5 text-[#1164A3]" />
                      Who This Course Is For
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 text-sm">
                      {course.targetAudience}
                    </p>
                  </CardContent>
                </Card>

                {/* Tags */}
                {course.tags.length > 0 && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <Sparkles className="w-5 h-5 text-[#1164A3]" />
                        Topics Covered
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {course.tags.map((tag, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="border-[#82B4CC] text-[#1164A3]"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Course Stats */}
                <Card className="bg-gradient-to-br from-[#1164A3]/5 to-[#68B9C4]/5">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <TrendingUp className="w-5 h-5 text-[#1164A3]" />
                      Course Stats
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Students</span>
                      <span className="font-semibold text-[#1164A3]">
                        {course.enrollmentCount}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Level</span>
                      <span className="font-semibold text-[#1164A3]">
                        {formatLevel(course.level)}
                      </span>
                    </div>
                    {course.rating && course.rating > 0 && (
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Rating</span>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-[#68B9C4] text-[#68B9C4]" />
                          <span className="font-semibold text-[#1164A3]">
                            {course.rating.toFixed(1)}
                          </span>
                        </div>
                      </div>
                    )}
                    {course.duration && (
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Duration</span>
                        <span className="font-semibold text-[#1164A3]">
                          {course.duration}
                        </span>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
