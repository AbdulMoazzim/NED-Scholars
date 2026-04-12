"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
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
  Loader2,
  Play,
  Sparkles,
  Laptop,
  Youtube,
  ExternalLink,
} from "lucide-react";
import {
  GetAllCourses,
} from "@/app/actions/e-learning";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Course } from "@/lib/form-types";

export default function ELearningPage() {
  const router = useRouter();
  const [courses, setCourses] = useState<Course[]>([]);
  const [filteredCourses, setFilteredCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => { fetchCourses(); }, []);
  useEffect(() => { filterCourses(); }, [searchQuery, courses]);

  const fetchCourses = async () => {
    setLoading(true);
    try {
      const result = await GetAllCourses();
      if (result.success && result.data) {
        setCourses(result.data as Course[]);
        setFilteredCourses(result.data as Course[]);
      }
    } catch {
      toast.error("Failed to load courses");
    } finally {
      setLoading(false);
    }
  };

  const filterCourses = () => {
    if (!searchQuery) {
      setFilteredCourses(courses);
      return;
    }
    setFilteredCourses(
      courses.filter(
        (c: Course) =>
          c?.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          c?.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  };

  const platformFeatures = [
    { icon: <BookOpen className="w-8 h-8" />, title: "Expert-Led Courses", description: "Learn from industry professionals and experienced instructors", color: "from-[#1164A3] to-[#68B9C4]" },
    { icon: <Laptop className="w-8 h-8" />, title: "Flexible Learning", description: "Study at your own pace with on-demand video content", color: "from-[#68B9C4] to-[#82B4CC]" },
    { icon: <Award className="w-8 h-8" />, title: "Practical Skills", description: "Gain hands-on experience with real-world projects", color: "from-[#82B4CC] to-[#B0A3B3]" },
    { icon: <Users className="w-8 h-8" />, title: "Community Support", description: "Connect with fellow learners and instructors", color: "from-[#1164A3] to-[#82B4CC]" },
  ];

  const benefits = [
    { icon: <GraduationCap className="w-6 h-6" />, text: "Learn from industry experts" },
    { icon: <Clock className="w-6 h-6" />, text: "Study at your own pace" },
    { icon: <CheckCircle className="w-6 h-6" />, text: "Earn certificates of completion" },
    { icon: <Target className="w-6 h-6" />, text: "Build practical skills" },
    { icon: <TrendingUp className="w-6 h-6" />, text: "Advance your career" },
    { icon: <Users className="w-6 h-6" />, text: "Join a learning community" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1164A3] to-[#68B9C4] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30 text-base px-4 py-2">
              <BookOpen className="w-4 h-4 mr-2 inline" />E-Learning Platform
            </Badge>
            <h1 className="text-3xl md:text-6xl font-bold mb-6">Learn, Grow, Excel</h1>
            <p className="text-lg md:text-2xl text-white/90 mb-4">Master New Skills with Expert-Led Online Courses</p>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 text-base bg-[#68B9C4] text-white">Why Choose NED Scholars E-Learning</Badge>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Learn from the Best</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our platform provides comprehensive learning experiences designed to help you succeed in
                today&apos;s competitive landscape
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {platformFeatures.map((feature, index) => (
                  <Card key={index} className="hover:shadow-2xl hover:border-[#1164A3] transition-all duration-300">
                    <CardContent className="p-6">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center text-white mb-4`}>
                        {feature.icon}
                      </div>
                      <h3 className="text-lg font-bold text-gray-800 mb-2">{feature.title}</h3>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[460px]">
                <img src="/images/elearning-features.jpg" alt="Students learning online with NED Scholars" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1164A3]/50 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-white text-sm font-medium bg-black/30 rounded-xl px-4 py-2 backdrop-blur-sm">
                    Expert-led, flexible, and designed for real-world impact
                  </p>
                </div>
                <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border-4 border-[#68B9C4]/30 -z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Benefits */}
      <section className="py-20 bg-gradient-to-r from-[#B0A3B3]/10 to-[#82B4CC]/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 text-base bg-[#1164A3] text-white">Student Benefits</Badge>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">What You&apos;ll Gain</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px]">
                <img src="/images/elearning-benefits.jpg" alt="Students gaining certificates and career skills" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1164A3]/50 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-white text-sm font-medium bg-black/30 rounded-xl px-4 py-2 backdrop-blur-sm">
                    From certificates to career advancement — every course adds real value
                  </p>
                </div>
                <div className="absolute -bottom-3 -left-3 w-full h-full rounded-2xl border-4 border-[#82B4CC]/30 -z-10" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <Card key={index} className="border-[#82B4CC]/30 hover:shadow-lg transition-all">
                    <CardContent className="p-6 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-[#1164A3]/10 flex items-center justify-center text-[#1164A3] flex-shrink-0">
                        {benefit.icon}
                      </div>
                      <p className="text-gray-700 font-medium">{benefit.text}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Available Courses */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 text-base bg-[#1164A3] text-white">
                <Sparkles className="w-4 h-4 mr-1 inline" />Course Catalog
              </Badge>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Available Courses</h2>
              <p className="text-xl text-gray-600">Explore our curated selection of courses across various disciplines</p>
            </div>

            {/* Wide banner image */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl mb-10 h-52 md:h-64">
              <img src="/images/elearning-catalog.jpg" alt="NED Scholars e-learning course catalog" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1164A3]/65 to-transparent flex items-center">
                <div className="px-10 max-w-lg">
                  <h3 className="text-white text-2xl font-bold mb-2">Engineering, Tech & Data Science</h3>
                  <p className="text-white/85 text-sm leading-relaxed">
                    Courses built for STEM students — from beginner fundamentals to expert-level specialisations.
                  </p>
                </div>
              </div>
            </div>

            {/* Search filter (simplified — no category/level since those fields are removed) */}
            <div className="mb-8 max-w-md relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <Input
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 border-[#82B4CC]/50 focus:ring-[#1164A3]"
              />
            </div>

            {/* ── Course Cards ── */}
            {loading ? (
              <div className="flex justify-center items-center py-20">
                <Loader2 className="w-12 h-12 animate-spin text-[#1164A3]" />
              </div>
            ) : filteredCourses.length === 0 ? (
              <Card className="border-[#82B4CC]/30">
                <CardContent className="p-20 text-center">
                  <BookOpen className="w-16 h-16 text-[#68B9C4] mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">No Courses Found</h3>
                  <p className="text-gray-600">Try adjusting your search or check back later</p>
                </CardContent>
              </Card>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCourses && filteredCourses.map((course, index) => {
                  const thumbnail = course?.images?.[0]?.url ?? null;
                  const youtubeUrl = course?.youtubeUrls?.[0]?.url ?? null;
                  const videoUrl = course?.videos?.[0]?.url ?? null;

                  return (
                    <Card
                      key={course?.id || index}
                      className="group hover:shadow-2xl hover:border-[#1164A3] transition-all duration-500 cursor-pointer transform hover:-translate-y-2 overflow-hidden py-0 border border-[#82B4CC]/30"
                      onClick={() => router.push(`/events/e-learning/${course?.slug}`)}
                    >
                      <CardContent className="p-0 h-full flex flex-col">
                        {/* Thumbnail */}
                        <div className="relative overflow-hidden bg-gradient-to-br from-[#1164A3] to-[#68B9C4] h-52">
                          {thumbnail ? (
                            <img
                              src={thumbnail}
                              alt={course?.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <BookOpen className="w-16 h-16 text-white/70" />
                            </div>
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                          {youtubeUrl && (
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                              <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                                <Play className="w-7 h-7 text-white ml-1" />
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Content */}
                        <div className="p-6 flex-1 flex flex-col justify-between">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#1164A3] transition-colors duration-300 line-clamp-2">
                              {course?.title}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                              {course?.description.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim()}
                            </p>
                          </div>

                          {/* Buttons */}
                          <div className="mt-5 flex flex-col gap-2">
                            {youtubeUrl && (
                              <Button
                                variant="outline"
                                size="sm"
                                className="w-full border-red-500 text-red-500 hover:bg-red-50"
                                onClick={(e) => { e.stopPropagation(); window.open(youtubeUrl, "_blank"); }}
                              >
                                <Youtube className="w-4 h-4 mr-2" />
                                Watch on YouTube
                              </Button>
                            )}
                            {videoUrl && !youtubeUrl && (
                              <Button
                                variant="outline"
                                size="sm"
                                className="w-full border-[#68B9C4] text-[#1164A3] hover:bg-[#82B4CC]/10"
                                onClick={(e) => { e.stopPropagation(); window.open(videoUrl, "_blank"); }}
                              >
                                <Play className="w-4 h-4 mr-2" />
                                Watch Video
                              </Button>
                            )}
                            <Button
                              className="w-full bg-gradient-to-r from-[#1164A3] to-[#68B9C4] hover:from-[#68B9C4] hover:to-[#82B4CC] text-white"
                              onClick={(e) => { e.stopPropagation(); router.push(`/events/e-learning/${course?.slug}`); }}
                            >
                              View Course
                              <ExternalLink className="w-4 h-4 ml-2" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-gradient-to-r from-[#B0A3B3]/10 to-[#82B4CC]/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px]">
                <img src="/images/elearning-cta.jpg" alt="NED Scholar completing an online course" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1164A3]/50 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-white text-sm font-medium bg-black/30 rounded-xl px-4 py-2 backdrop-blur-sm">
                    Every course completed is a step closer to your career goals
                  </p>
                </div>
                <div className="absolute -bottom-3 -left-3 w-full h-full rounded-2xl border-4 border-[#68B9C4]/30 -z-10" />
              </div>
              <div className="text-center lg:text-left">
                <Badge className="mb-4 bg-[#1164A3] text-white text-base px-4 py-2">Start Learning Today</Badge>
                <h2 className="text-4xl font-bold text-gray-800 mb-6">
                  Your Next Career Milestone Starts Here
                </h2>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  Join hundreds of NED Scholars who are already leveling up their skills, earning
                  certificates, and advancing their careers — all on their own schedule.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-[#1164A3] to-[#68B9C4] text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                    onClick={() => router.push("/register/student")}
                  >
                    <GraduationCap className="w-5 h-5 mr-2" />Get Started Free
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-[#1164A3] text-[#1164A3] px-8 py-4 rounded-full font-semibold hover:bg-[#1164A3] hover:text-white transition-all duration-300"
                    onClick={() => router.push("/donate")}
                  >
                    <Award className="w-5 h-5 mr-2" />Support a Learner
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}