"use client";

import { ReactNode, useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  BookOpen,
  GraduationCap,
  Users,
  TrendingUp,
  CheckCircle,
  Target,
  Award,
  Clock,
  Search,
  Filter,
  Loader2,
  Play,
  Sparkles,
  Laptop,
  Brain,
  Code,
  BarChart3,
  Youtube,
  Star,
  ExternalLink,
  Calendar,
} from "lucide-react";
import {
  GetActiveCourses,
  GetEnrollmentsByUser,
} from "@/app/actions/e-learning";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useSession } from "@/lib/auth-client";
import { Course, CourseEnrollment } from "@/lib/form-types";
import { getEnrollmentStatusColor } from "@/lib/utils";


export default function ELearningPage() {
  const router = useRouter();
  const session = useSession();
  const [courses, setCourses] = useState<Course[]>([]);
  const [filteredCourses, setFilteredCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [levelFilter, setLevelFilter] = useState("all");
  const [userEnrollments, setUserEnrollments] = useState<CourseEnrollment[]>(
    []
  );


  useEffect(() => {
    if (session.data?.user) {
      fetchUserEnrollments();
    }
  }, [session.data?.user]);

  const fetchUserEnrollments = async () => {
    if (!session.data?.user.id) return;

    try {
      const result = await GetEnrollmentsByUser(session.data.user.id);
      if (result.success && result.data) {
        setUserEnrollments(result.data as CourseEnrollment[]);
      }
    } catch (error) {
      console.error("Error fetching enrollments:", error);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  useEffect(() => {
    filterCourses();
  }, [searchQuery, categoryFilter, levelFilter, courses]);

  const fetchCourses = async () => {
    setLoading(true);
    try {
      const result = await GetActiveCourses();
      if (result.success && result.data) {
        setCourses(result.data as Course[]);
        setFilteredCourses(result.data as Course[]);
      }
    } catch (error) {
      toast.error("Failed to load courses");
      console.error("Error fetching courses:", error);
    } finally {
      setLoading(false);
    }
  };

  const filterCourses = () => {
    let filtered = [...courses];

    if (searchQuery) {
      filtered = filtered.filter(
        (course) =>
          course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          course.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
          course.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (categoryFilter !== "all") {
      filtered = filtered.filter(
        (course) => course.category === categoryFilter
      );
    }

    if (levelFilter !== "all") {
      filtered = filtered.filter((course) => course.level === levelFilter);
    }

    setFilteredCourses(filtered);
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

  const platformFeatures = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Expert-Led Courses",
      description:
        "Learn from industry professionals and experienced instructors",
      color: "from-[#1164A3] to-[#68B9C4]",
    },
    {
      icon: <Laptop className="w-8 h-8" />,
      title: "Flexible Learning",
      description: "Study at your own pace with on-demand video content",
      color: "from-[#68B9C4] to-[#82B4CC]",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Practical Skills",
      description: "Gain hands-on experience with real-world projects",
      color: "from-[#82B4CC] to-[#B0A3B3]",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Support",
      description: "Connect with fellow learners and instructors",
      color: "from-[#1164A3] to-[#82B4CC]",
    },
  ];

  const benefits = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      text: "Learn from industry experts",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      text: "Study at your own pace",
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      text: "Earn certificates of completion",
    },
    {
      icon: <Target className="w-6 h-6" />,
      text: "Build practical skills",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      text: "Advance your career",
    },
    {
      icon: <Users className="w-6 h-6" />,
      text: "Join a learning community",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1164A3] via-[#68B9C4] to-[#82B4CC] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30 text-base px-4 py-2">
              <BookOpen className="w-4 h-4 mr-2 inline" />
              E-Learning Platform
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Learn, Grow, Excel
            </h1>
            <p className="text-2xl text-white/90 mb-4">
              Master New Skills with Expert-Led Online Courses
            </p>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Access high-quality courses designed to enhance your knowledge and
              advance your career in engineering, technology, and data science
            </p>
          </div>
        </div>
      </section>

      

      {/* Platform Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 text-base bg-[#68B9C4] text-white">
                Why Choose NED Scholars E-Learning
              </Badge>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Learn from the Best
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our platform provides comprehensive learning experiences
                designed to help you succeed in today&apos;s competitive
                landscape
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {platformFeatures.map((feature, index) => (
                <Card
                  key={index}
                  className="hover:shadow-2xl hover:border-[#1164A3] transition-all duration-300"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center text-white flex-shrink-0`}
                      >
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Learning Benefits */}
      <section className="py-20 bg-gradient-to-r from-[#B0A3B3]/10 to-[#82B4CC]/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 text-base bg-[#1164A3] text-white">
                Student Benefits
              </Badge>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                What You&apos;ll Gain
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <Card
                  key={index}
                  className="border-[#82B4CC]/30 hover:shadow-lg transition-all"
                >
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[#1164A3]/10 flex items-center justify-center text-[#1164A3]">
                      {benefit.icon}
                    </div>
                    <p className="text-gray-700 font-medium">{benefit.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {session && userEnrollments.length > 0 && (
        <section className="py-12 bg-gradient-to-r from-[#B0A3B3]/5 to-[#82B4CC]/5">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-8">
                <Badge className="mb-3 text-base bg-[#1164A3] text-white">
                  <GraduationCap className="w-4 h-4 mr-2 inline" />
                  Your Learning Journey
                </Badge>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                  My Enrolled Courses
                </h2>
                <p className="text-gray-600">Continue your learning journey</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {userEnrollments.slice(0, 3).map((enrollment) => (
                  <Card
                    key={enrollment.id}
                    className="hover:shadow-xl hover:border-[#1164A3] transition-all cursor-pointer"
                    onClick={() =>
                      router.push(
                        `/events/e-learning/${enrollment.course.slug}`
                      )
                    }
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge
                          className={getEnrollmentStatusColor(
                            enrollment.status
                          )}
                        >
                          {enrollment.status}
                        </Badge>
                        {enrollment.rating && (
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm">
                              {enrollment.rating}/5
                            </span>
                          </div>
                        )}
                      </div>
                      <CardTitle className="text-lg">
                        {enrollment.course.title}
                      </CardTitle>
                      <p className="text-sm text-gray-600">
                        by {enrollment.course.instructor}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>
                            Enrolled:{" "}
                            {new Date(
                              enrollment.enrollmentDate
                            ).toLocaleDateString()}
                          </span>
                        </div>
                        {!enrollment.rating && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full mt-3 border-[#1164A3] text-[#1164A3]"
                            onClick={(e) => {
                              e.stopPropagation();
                              router.push(
                                `/events/e-learning/${enrollment.course.slug}`
                              );
                            }}
                          >
                            <Star className="w-4 h-4 mr-2" />
                            Rate Course
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {userEnrollments.length > 3 && (
                <div className="text-center mt-6">
                  <Button
                    variant="outline"
                    onClick={() => {
                      // Scroll to or show all enrollments
                    }}
                  >
                    View All ({userEnrollments.length})
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Available Courses */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 text-base bg-[#1164A3] text-white">
                <Sparkles className="w-4 h-4 mr-1 inline" />
                Course Catalog
              </Badge>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Available Courses
              </h2>
              <p className="text-xl text-gray-600">
                Explore our curated selection of courses across various
                disciplines
              </p>
            </div>

            {/* Filters */}
            <Card className="mb-8 border-[#82B4CC]/30">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <Input
                      placeholder="Search courses..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 border-[#82B4CC]/50 focus:ring-[#1164A3]"
                    />
                  </div>
                  <Select
                    value={categoryFilter}
                    onValueChange={setCategoryFilter}
                  >
                    <SelectTrigger className="border-[#82B4CC]/50">
                      <Filter className="w-4 h-4 mr-2" />
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="engineering">Engineering</SelectItem>
                      <SelectItem value="data_science">Data Science</SelectItem>
                      <SelectItem value="programming">Programming</SelectItem>
                      <SelectItem value="artificial_intelligence">
                        AI
                      </SelectItem>
                      <SelectItem value="statistics">Statistics</SelectItem>
                      <SelectItem value="six_sigma">Six Sigma</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select value={levelFilter} onValueChange={setLevelFilter}>
                    <SelectTrigger className="border-[#82B4CC]/50">
                      <GraduationCap className="w-4 h-4 mr-2" />
                      <SelectValue placeholder="Level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Levels</SelectItem>
                      <SelectItem value="beginner">Beginner</SelectItem>
                      <SelectItem value="intermediate">Intermediate</SelectItem>
                      <SelectItem value="advanced">Advanced</SelectItem>
                      <SelectItem value="expert">Expert</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Course Cards */}
            {loading ? (
              <div className="flex justify-center items-center py-20">
                <Loader2 className="w-12 h-12 animate-spin text-[#1164A3]" />
              </div>
            ) : filteredCourses.length === 0 ? (
              <Card className="border-[#82B4CC]/30">
                <CardContent className="p-20 text-center">
                  <BookOpen className="w-16 h-16 text-[#68B9C4] mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    No Courses Found
                  </h3>
                  <p className="text-gray-600">
                    Try adjusting your filters or check back later for new
                    courses
                  </p>
                </CardContent>
              </Card>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCourses.map((course) => (
                  <Card
                    key={course.id}
                    className={`hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 ${
                      course.featured
                        ? "border-[#1164A3] bg-gradient-to-br from-[#1164A3]/5 to-[#68B9C4]/5"
                        : "border-[#82B4CC]/30 hover:border-[#1164A3]"
                    }`}
                    onClick={() => router.push(`/elearning/${course.slug}`)}
                  >
                    {course.featured && (
                      <div className="absolute top-0 right-0 bg-gradient-to-r from-[#1164A3] to-[#68B9C4] text-white px-3 py-1 rounded-bl-lg rounded-tr-lg text-xs font-semibold">
                        <Sparkles className="w-3 h-3 inline mr-1" />
                        Featured
                      </div>
                    )}

                    {/* Thumbnail or Icon */}
                    <div
                      className={`h-48 bg-gradient-to-r ${getCategoryColor(
                        course.category
                      )} flex items-center justify-center relative overflow-hidden`}
                    >
                      {course.thumbnailUrl ? (
                        <img
                          src={course.thumbnailUrl}
                          alt={course.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="text-white">
                          {getCategoryIcon(course.category)}
                        </div>
                      )}
                      {course.youtubeUrl && (
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                          <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                            <Play className="w-8 h-8 text-white ml-1" />
                          </div>
                        </div>
                      )}
                    </div>

                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge className="bg-[#82B4CC] text-white text-xs">
                          {formatCategory(course.category)}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {formatLevel(course.level)}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl mb-2 line-clamp-2">
                        {course.title}
                      </CardTitle>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Users className="w-4 h-4" />
                        <span>
                          {course.instructorTitle} {course.instructor}
                        </span>
                      </div>
                    </CardHeader>

                    <CardContent>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {course.overview}
                      </p>

                      <div className="space-y-3 mb-4">
                        {course.duration && (
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Clock className="w-4 h-4 text-[#1164A3]" />
                            <span>{course.duration}</span>
                          </div>
                        )}

                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Users className="w-4 h-4 text-[#1164A3]" />
                          <span>{course.enrollmentCount} enrolled</span>
                        </div>

                        {course.rating && course.rating > 0 && (
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Star className="w-4 h-4 text-[#68B9C4] fill-[#68B9C4]" />
                            <span>{course.rating.toFixed(1)}</span>
                          </div>
                        )}
                      </div>

                      {course.youtubeUrl && (
                        <div className="mb-4">
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full border-red-500 text-red-500 hover:bg-red-50"
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(course.youtubeUrl, "_blank");
                            }}
                          >
                            <Youtube className="w-4 h-4 mr-2" />
                            Watch on YouTube
                          </Button>
                        </div>
                      )}

                      <Button
                        className="w-full bg-gradient-to-r from-[#1164A3] to-[#68B9C4] text-white"
                        onClick={(e) => {
                          e.stopPropagation();
                          router.push(`/events/e-learning/${course.slug}`);
                        }}
                      >
                        {course.isFree ? "Enroll Free" : "View Course"}
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#1164A3] via-[#68B9C4] to-[#82B4CC] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Start Your Learning Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of students enhancing their skills through our
              expert-led online courses. Start learning today and unlock your
              potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => {
                  const coursesSection = document.querySelector(
                    'section:has([class*="Course Catalog"])'
                  );
                  coursesSection?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-white text-[#1164A3] hover:bg-gray-100 text-lg px-8 py-6"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Browse Courses
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
