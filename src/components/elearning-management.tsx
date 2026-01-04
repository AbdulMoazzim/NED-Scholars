"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import {
  BookOpen,
  Plus,
  Edit,
  Trash2,
  MoreVertical,
  Users,
  Star,
  Eye,
  Loader2,
  Search,
  Filter,
  Award,
  CheckCircle,
  Sparkles,
  Calendar,
  Mail,
  Phone,
  Building,
  User,
  GraduationCap,
} from "lucide-react";
import {
  GetAllCourses,
  CreateCourse,
  UpdateCourse,
  DeleteCourse,
  GetCourseStats,
  GetAllEnrollments,
  CourseData,
} from "@/app/actions/e-learning";
import { toast } from "sonner";
import { Course, CourseFormData, CourseEnrollment } from "@/lib/form-types";
import { useRouter } from "next/navigation";

const emptyFormData: CourseFormData = {
  thumbnailUrl: null,
  youtubeUrl: null,
  videoUrl: null,
  title: "",
  instructor: "",
  instructorTitle: "",
  instructorBio: "",
  overview: "",
  description: "",
  learningOutcomes: "",
  category: "engineering",
  level: "beginner",
  duration: "",
  targetAudience: "",
  prerequisites: "",
  syllabus: "",
  modules: "",
  lessons: "",
  isFree: true,
  price: "",
  currency: "USD",
  status: "active",
  featured: false,
  slug: "",
  tags: "",
};

export default function CourseManagement() {
  // Courses state
  const router = useRouter();
  const [courses, setCourses] = useState<Course[]>([]);
  const [filteredCourses, setFilteredCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [showDialog, setShowDialog] = useState(false);
  const [editingCourse, setEditingCourse] = useState<Course | null>(null);
  const [formData, setFormData] = useState<CourseFormData>(emptyFormData);

  // Enrollments state
  const [enrollments, setEnrollments] = useState<CourseEnrollment[]>([]);
  const [filteredEnrollments, setFilteredEnrollments] = useState<CourseEnrollment[]>([]);
  const [enrollmentSearchQuery, setEnrollmentSearchQuery] = useState("");
  const [enrollmentCourseFilter, setEnrollmentCourseFilter] = useState("all");
  const [enrollmentStatusFilter, setEnrollmentStatusFilter] = useState("all");
  const [selectedEnrollment, setSelectedEnrollment] = useState<CourseEnrollment | null>(null);
  const [showEnrollmentDialog, setShowEnrollmentDialog] = useState(false);

  // Tab state
  const [activeTab, setActiveTab] = useState<"courses" | "enrollments">("courses");

  // Stats
  const [stats, setStats] = useState({
    totalCourses: 0,
    activeCourses: 0,
    totalEnrollments: 0,
    completedEnrollments: 0,
    completionRate: "0",
  });

  useEffect(() => {
    fetchCourses();
    fetchEnrollments();
    fetchStats();
  }, []);

  useEffect(() => {
    filterCourses();
  }, [searchQuery, categoryFilter, statusFilter, courses]);

  useEffect(() => {
    filterEnrollments();
  }, [enrollmentSearchQuery, enrollmentCourseFilter, enrollmentStatusFilter, enrollments]);

  const fetchCourses = async () => {
    setLoading(true);
    try {
      const result = await GetAllCourses();
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

  const fetchEnrollments = async () => {
    try {
      const result = await GetAllEnrollments();
      if (result.success && result.data) {
        setEnrollments(result.data as CourseEnrollment[]);
        setFilteredEnrollments(result.data as CourseEnrollment[]);
      }
    } catch (error) {
      toast.error("Failed to load enrollments");
      console.error("Error fetching enrollments:", error);
    }
  };

  const fetchStats = async () => {
    try {
      const result = await GetCourseStats();
      if (result.success && result.data) {
        setStats(result.data);
      }
    } catch (error) {
      console.error("Error fetching stats:", error);
    }
  };

  const filterCourses = () => {
    let filtered = [...courses];

    if (searchQuery) {
      filtered = filtered.filter(
        (course) =>
          course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          course.instructor.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (categoryFilter !== "all") {
      filtered = filtered.filter((course) => course.category === categoryFilter);
    }

    if (statusFilter !== "all") {
      filtered = filtered.filter((course) => course.status === statusFilter);
    }

    setFilteredCourses(filtered);
  };

  const filterEnrollments = () => {
    let filtered = [...enrollments];

    if (enrollmentSearchQuery) {
      filtered = filtered.filter(
        (enrollment) =>
          enrollment.fullName.toLowerCase().includes(enrollmentSearchQuery.toLowerCase()) ||
          enrollment.email.toLowerCase().includes(enrollmentSearchQuery.toLowerCase()) ||
          enrollment.course.title.toLowerCase().includes(enrollmentSearchQuery.toLowerCase())
      );
    }

    if (enrollmentCourseFilter !== "all") {
      filtered = filtered.filter((enrollment) => enrollment.courseId === enrollmentCourseFilter);
    }

    if (enrollmentStatusFilter !== "all") {
      filtered = filtered.filter((enrollment) => enrollment.status === enrollmentStatusFilter);
    }

    setFilteredEnrollments(filtered);
  };

  const handleCreateOrUpdate = async () => {
    if (!formData.title || !formData.instructor || !formData.slug) {
      toast.error("Please fill in all required fields");
      return;
    }

    setSubmitting(true);
    try {
      const courseData = {
        title: formData.title,
        instructor: formData.instructor,
        instructorTitle: formData.instructorTitle || null,
        instructorBio: formData.instructorBio || null,
        overview: formData.overview,
        description: formData.description,
        learningOutcomes: formData.learningOutcomes,
        category: formData.category,
        level: formData.level,
        thumbnailUrl: formData.thumbnailUrl || null,
        youtubeUrl: formData.youtubeUrl || null,
        videoUrl: formData.videoUrl || null,
        duration: formData.duration || null,
        targetAudience: formData.targetAudience,
        prerequisites: formData.prerequisites || null,
        syllabus: formData.syllabus || null,
        modules: formData.modules ? parseInt(formData.modules) : null,
        lessons: formData.lessons ? parseInt(formData.lessons) : null,
        isFree: formData.isFree,
        price: formData.price ? parseFloat(formData.price) : 0,
        currency: formData.currency,
        status: formData.status,
        featured: formData.featured,
        slug: formData.slug,
        tags: formData.tags
          .split(",")
          .map((tag) => tag.trim())
          .filter(Boolean),
      };

      let result;
      if (editingCourse) {
        result = await UpdateCourse(editingCourse.id, courseData as CourseData);
      } else {
        result = await CreateCourse(courseData as CourseData);
      }

      if (result.success) {
        toast.success(
          `Course ${editingCourse ? "updated" : "created"} successfully`
        );
        setShowDialog(false);
        setEditingCourse(null);
        setFormData(emptyFormData);
        fetchCourses();
        fetchStats();
      } else {
        toast.error(result.error || "Operation failed");
      }
    } catch (error) {
      toast.error("An error occurred");
      console.error("Error:", error);
    } finally {
      setSubmitting(false);
    }
  };

  const handleEdit = (course: Course) => {
    setEditingCourse(course);
    setFormData({
      thumbnailUrl: course.thumbnailUrl || null,
      youtubeUrl: course.youtubeUrl || null,
      videoUrl: course.videoUrl || null,
      title: course.title,
      instructor: course.instructor,
      instructorTitle: course.instructorTitle || "",
      instructorBio: course.instructorBio || "",
      overview: course.overview,
      description: course.description,
      learningOutcomes: course.learningOutcomes,
      category: course.category,
      level: course.level,
      duration: course.duration || "",
      targetAudience: course.targetAudience,
      prerequisites: course.prerequisites || "",
      syllabus: course.syllabus || "",
      modules: course.modules?.toString() || "",
      lessons: course.lessons?.toString() || "",
      isFree: course.isFree,
      price: course.price?.toString() || "",
      currency: course.currency || "USD",
      status: course.status,
      featured: course.featured,
      slug: course.slug,
      tags: course.tags.join(", "),
    });
    setShowDialog(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this course?")) return;

    try {
      const result = await DeleteCourse(id);
      if (result.success) {
        toast.success("Course deleted successfully");
        fetchCourses();
        fetchStats();
      } else {
        toast.error(result.error || "Failed to delete course");
      }
    } catch (error) {
      toast.error("An error occurred");
      console.error("Error:", error);
    }
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
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

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      active: "bg-green-500 text-white",
      draft: "bg-yellow-500 text-white",
      archived: "bg-gray-500 text-white",
      coming_soon: "bg-blue-500 text-white",
    };
    return colors[status] || "bg-gray-500 text-white";
  };

  const getEnrollmentStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      enrolled: "bg-blue-500 text-white",
      in_progress: "bg-amber-500 text-white",
      completed: "bg-green-500 text-white",
      dropped: "bg-red-500 text-white",
    };
    return colors[status] || "bg-gray-500 text-white";
  };

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="space-y-6 m-4 mt-0">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-[60px]">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Courses</p>
                <p className="text-3xl font-bold text-[#1164A3]">
                  {stats.totalCourses}
                </p>
              </div>
              <BookOpen className="w-12 h-12 text-[#1164A3] opacity-20" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Active Courses</p>
                <p className="text-3xl font-bold text-[#68B9C4]">
                  {stats.activeCourses}
                </p>
              </div>
              <CheckCircle className="w-12 h-12 text-[#68B9C4] opacity-20" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Enrollments</p>
                <p className="text-3xl font-bold text-[#82B4CC]">
                  {stats.totalEnrollments}
                </p>
              </div>
              <Users className="w-12 h-12 text-[#82B4CC] opacity-20" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Completion Rate</p>
                <p className="text-3xl font-bold text-[#B0A3B3]">
                  {stats.completionRate}%
                </p>
              </div>
              <Award className="w-12 h-12 text-[#B0A3B3] opacity-20" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={(val) => setActiveTab(val as "courses" | "enrollments")}>
        <TabsList className="mb-6">
          <TabsTrigger value="courses">
            <BookOpen className="w-4 h-4 mr-2" />
            Courses ({courses.length})
          </TabsTrigger>
          <TabsTrigger value="enrollments">
            <Users className="w-4 h-4 mr-2" />
            Enrollments ({enrollments.length})
          </TabsTrigger>
        </TabsList>

        {/* COURSES TAB */}
        <TabsContent value="courses" className="space-y-6">
          {/* Filters and Actions */}
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
                  <div className="relative w-full md:w-64">
                    <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                    <Input
                      placeholder="Search courses..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                    <SelectTrigger className="w-full md:w-48">
                      <Filter className="w-4 h-4 mr-2" />
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="engineering">Engineering</SelectItem>
                      <SelectItem value="data_science">Data Science</SelectItem>
                      <SelectItem value="programming">Programming</SelectItem>
                      <SelectItem value="artificial_intelligence">AI</SelectItem>
                      <SelectItem value="statistics">Statistics</SelectItem>
                      <SelectItem value="six_sigma">Six Sigma</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger className="w-full md:w-48">
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="draft">Draft</SelectItem>
                      <SelectItem value="archived">Archived</SelectItem>
                      <SelectItem value="coming_soon">Coming Soon</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Dialog open={showDialog} onOpenChange={setShowDialog}>
                  <DialogTrigger asChild>
                    <Button
                      onClick={() => {
                        setEditingCourse(null);
                        setFormData(emptyFormData);
                      }}
                      className="bg-gradient-to-r from-[#1164A3] to-[#68B9C4] w-full md:w-auto"
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Add New Course
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>
                        {editingCourse ? "Edit Course" : "Create New Course"}
                      </DialogTitle>
                      <DialogDescription>
                        Fill in the course details below
                      </DialogDescription>
                    </DialogHeader>

                    <div className="space-y-6 mt-4">
                      {/* Basic Information */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Basic Information</h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label className="pb-2" htmlFor="title">
                              Course Title <span className="text-red-500">*</span>
                            </Label>
                            <Input
                              id="title"
                              value={formData.title}
                              onChange={(e) => {
                                const newTitle = e.target.value;
                                setFormData({
                                  ...formData,
                                  title: newTitle,
                                  slug: !editingCourse ? generateSlug(newTitle) : formData.slug,
                                });
                              }}
                            />
                          </div>

                          <div>
                            <Label className="pb-2" htmlFor="slug">
                              Slug <span className="text-red-500">*</span>
                            </Label>
                            <Input
                              id="slug"
                              value={formData.slug}
                              onChange={(e) =>
                                setFormData({ ...formData, slug: e.target.value })
                              }
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label className="pb-2" htmlFor="instructor">
                              Instructor Name <span className="text-red-500">*</span>
                            </Label>
                            <Input
                              id="instructor"
                              value={formData.instructor}
                              onChange={(e) =>
                                setFormData({ ...formData, instructor: e.target.value })
                              }
                            />
                          </div>

                          <div>
                            <Label className="pb-2" htmlFor="instructorTitle">Instructor Title</Label>
                            <Input
                              id="instructorTitle"
                              placeholder="e.g., Prof., Dr., Eng."
                              value={formData.instructorTitle}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  instructorTitle: e.target.value,
                                })
                              }
                            />
                          </div>
                        </div>

                        <div>
                          <Label className="pb-2" htmlFor="instructorBio">Instructor Bio</Label>
                          <Textarea
                            id="instructorBio"
                            rows={3}
                            value={formData.instructorBio}
                            onChange={(e) =>
                              setFormData({ ...formData, instructorBio: e.target.value })
                            }
                          />
                        </div>

                        <div>
                          <Label className="pb-2" htmlFor="overview">
                            Course Overview <span className="text-red-500">*</span>
                          </Label>
                          <Textarea
                            id="overview"
                            rows={3}
                            placeholder="Brief overview (1-2 sentences)"
                            value={formData.overview}
                            onChange={(e) =>
                              setFormData({ ...formData, overview: e.target.value })
                            }
                          />
                        </div>

                        <div>
                          <Label className="pb-2" htmlFor="description">
                            Course Description <span className="text-red-500">*</span>
                          </Label>
                          <Textarea
                            id="description"
                            rows={5}
                            placeholder="Detailed course description"
                            value={formData.description}
                            onChange={(e) =>
                              setFormData({ ...formData, description: e.target.value })
                            }
                          />
                        </div>
                      </div>

                      {/* Course Details */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Course Details</h3>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <Label className="pb-2" htmlFor="category">Category</Label>
                            <Select
                              value={formData.category}
                              onValueChange={(value) =>
                                setFormData({ ...formData, category: value })
                              }
                            >
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="engineering">Engineering</SelectItem>
                                <SelectItem value="data_science">Data Science</SelectItem>
                                <SelectItem value="programming">Programming</SelectItem>
                                <SelectItem value="artificial_intelligence">AI</SelectItem>
                                <SelectItem value="statistics">Statistics</SelectItem>
                                <SelectItem value="six_sigma">Six Sigma</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div>
                            <Label className="pb-2" htmlFor="level">Level</Label>
                            <Select
                              value={formData.level}
                              onValueChange={(value) =>
                                setFormData({ ...formData, level: value })
                              }
                            >
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="beginner">Beginner</SelectItem>
                                <SelectItem value="intermediate">Intermediate</SelectItem>
                                <SelectItem value="advanced">Advanced</SelectItem>
                                <SelectItem value="expert">Expert</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div>
                            <Label className="pb-2" htmlFor="status">Status</Label>
                            <Select
                              value={formData.status}
                              onValueChange={(value) =>
                                setFormData({ ...formData, status: value })
                              }
                            >
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="active">Active</SelectItem>
                                <SelectItem value="draft">Draft</SelectItem>
                                <SelectItem value="archived">Archived</SelectItem>
                                <SelectItem value="coming_soon">Coming Soon</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <Label className="pb-2" htmlFor="duration">Duration</Label>
                            <Input
                              id="duration"
                              placeholder="e.g., 4 weeks, 20 hours"
                              value={formData.duration}
                              onChange={(e) =>
                                setFormData({ ...formData, duration: e.target.value })
                              }
                            />
                          </div>

                          <div>
                            <Label className="pb-2" htmlFor="modules">Modules</Label>
                            <Input
                              id="modules"
                              type="number"
                              value={formData.modules}
                              onChange={(e) =>
                                setFormData({ ...formData, modules: e.target.value })
                              }
                            />
                          </div>

                          <div>
                            <Label className="pb-2" htmlFor="lessons">Lessons</Label>
                            <Input
                              id="lessons"
                              type="number"
                              value={formData.lessons}
                              onChange={(e) =>
                                setFormData({ ...formData, lessons: e.target.value })
                              }
                            />
                          </div>
                        </div>

                        <div>
                          <Label className="pb-2" htmlFor="youtubeUrl">YouTube URL</Label>
                          <Input
                            id="youtubeUrl"
                            placeholder="https://youtube.com/watch?v=..."
                            value={formData.youtubeUrl || ""}
                            onChange={(e) =>
                              setFormData({ ...formData, youtubeUrl: e.target.value })
                            }
                          />
                        </div>

                        <div>
                          <Label className="pb-2" htmlFor="thumbnailUrl">Thumbnail URL</Label>
                          <Input
                            id="thumbnailUrl"
                            placeholder="https://example.com/image.jpg"
                            value={formData.thumbnailUrl || ""}
                            onChange={(e) =>
                              setFormData({ ...formData, thumbnailUrl: e.target.value })
                            }
                          />
                        </div>

                        <div>
                          <Label className="pb-2" htmlFor="videoUrl">Video URL</Label>
                          <Input
                            id="videoUrl"
                            placeholder="https://drive.google.com/..."
                            value={formData.videoUrl || ""}
                            onChange={(e) =>
                              setFormData({ ...formData, videoUrl: e.target.value })
                            }
                          />
                        </div>

                        <div>
                          <Label className="pb-2" htmlFor="tags">Tags (comma separated)</Label>
                          <Input
                            id="tags"
                            placeholder="python, machine learning, data analysis"
                            value={formData.tags}
                            onChange={(e) =>
                              setFormData({ ...formData, tags: e.target.value })
                            }
                          />
                        </div>
                      </div>

                      {/* Learning Content */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Learning Content</h3>

                        <div>
                          <Label className="pb-2" htmlFor="learningOutcomes">
                            Learning Outcomes (one per line)
                          </Label>
                          <Textarea
                            id="learningOutcomes"
                            rows={5}
                            placeholder="Master Python basics&#10;Build real projects&#10;Understand algorithms"
                            value={formData.learningOutcomes}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                learningOutcomes: e.target.value,
                              })
                            }
                          />
                        </div>

                        <div>
                          <Label className="pb-2" htmlFor="targetAudience">Target Audience</Label>
                          <Textarea
                            id="targetAudience"
                            rows={3}
                            value={formData.targetAudience}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                targetAudience: e.target.value,
                              })
                            }
                          />
                        </div>

                        <div>
                          <Label className="pb-2" htmlFor="prerequisites">Prerequisites</Label>
                          <Textarea
                            id="prerequisites"
                            rows={3}
                            value={formData.prerequisites}
                            onChange={(e) =>
                              setFormData({ ...formData, prerequisites: e.target.value })
                            }
                          />
                        </div>

                        <div>
                          <Label className="pb-2" htmlFor="syllabus">Syllabus</Label>
                          <Textarea
                            id="syllabus"
                            rows={5}
                            value={formData.syllabus}
                            onChange={(e) =>
                              setFormData({ ...formData, syllabus: e.target.value })
                            }
                          />
                        </div>
                      </div>

                      {/* Pricing */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Pricing</h3>

                        <div className="flex items-center space-x-2">
                          <Switch
                            checked={formData.isFree}
                            onCheckedChange={(checked) =>
                              setFormData({ ...formData, isFree: checked })
                            }
                          />
                          <Label className="pb-2">Free Course</Label>
                        </div>

                        {!formData.isFree && (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <Label className="pb-2" htmlFor="price">Price</Label>
                              <Input
                                id="price"
                                type="number"
                                step="0.01"
                                value={formData.price}
                                onChange={(e) =>
                                  setFormData({ ...formData, price: e.target.value })
                                }
                              />
                            </div>

                            <div>
                              <Label className="pb-2" htmlFor="currency">Currency</Label>
                              <Input
                                id="currency"
                                value={formData.currency}
                                onChange={(e) =>
                                  setFormData({ ...formData, currency: e.target.value })
                                }
                              />
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Settings */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Settings</h3>

                        <div className="flex items-center space-x-2">
                          <Switch
                            checked={formData.featured}
                            onCheckedChange={(checked) =>
                              setFormData({ ...formData, featured: checked })
                            }
                          />
                          <Label className="pb-2">Featured Course</Label>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-4">
                        <Button
                          onClick={handleCreateOrUpdate}
                          disabled={submitting}
                          className="flex-1 bg-gradient-to-r from-[#1164A3] to-[#68B9C4]"
                        >
                          {submitting ? (
                            <>
                              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                              {editingCourse ? "Updating..." : "Creating..."}
                            </>
                          ) : (
                            <>
                              {editingCourse ? "Update Course" : "Create Course"}
                            </>
                          )}
                        </Button>
                        <Button
                          variant="outline"
                          onClick={() => {
                            setShowDialog(false);
                            setEditingCourse(null);
                            setFormData(emptyFormData);
                          }}
                          className="flex-1"
                        >
                          Cancel
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>

          {/* Courses Table */}
          <Card>
            <CardHeader>
              <CardTitle>Courses</CardTitle>
            </CardHeader>
            <CardContent>
              {loading ? (
                <div className="flex justify-center items-center py-20">
                  <Loader2 className="w-8 h-8 animate-spin text-[#1164A3]" />
                </div>
              ) : filteredCourses.length === 0 ? (
                <div className="text-center py-20">
                  <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-600">No courses found</p>
                </div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Course</TableHead>
                      <TableHead>Instructor</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Level</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Enrollments</TableHead>
                      <TableHead>Rating</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredCourses.map((course) => (
                      <TableRow key={course.id}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            {course.featured && (
                              <Sparkles className="w-4 h-4 text-yellow-500" />
                            )}
                            <div>
                              <p className="font-medium">{course.title}</p>
                              <p className="text-sm text-gray-500">{course.slug}</p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          {course.instructorTitle} {course.instructor}
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">
                            {formatCategory(course.category)}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">{formatLevel(course.level)}</Badge>
                        </TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(course.status)}>
                            {course.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4 text-gray-400" />
                            <span>{course.enrollmentCount}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          {course.rating && course.rating > 0 ? (
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              <span>{course.rating.toFixed(1)}</span>
                            </div>
                          ) : (
                            <span className="text-gray-400">-</span>
                          )}
                        </TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm">
                                <MoreVertical className="w-4 h-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem onClick={() => handleEdit(course)}>
                                <Edit className="w-4 h-4 mr-2" />
                                Edit
                              </DropdownMenuItem>
                              <DropdownMenuItem
                                onClick={() =>
                                  router.push(`/events/e-learning/${course.slug}`)
                                }
                              >
                                <Eye className="w-4 h-4 mr-2" />
                                View
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem
                                onClick={() => handleDelete(course.id)}
                                className="text-red-600"
                              >
                                <Trash2 className="w-4 h-4 mr-2" />
                                Delete
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* ENROLLMENTS TAB */}
        <TabsContent value="enrollments" className="space-y-6">
          {/* Filters */}
          <Card>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                  <Input
                    placeholder="Search by name, email, or course..."
                    value={enrollmentSearchQuery}
                    onChange={(e) => setEnrollmentSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select value={enrollmentCourseFilter} onValueChange={setEnrollmentCourseFilter}>
                  <SelectTrigger>
                    <Filter className="w-4 h-4 mr-2" />
                    <SelectValue placeholder="All Courses" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Courses</SelectItem>
                    {courses.map((course) => (
                      <SelectItem key={course.id} value={course.id}>
                        {course.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={enrollmentStatusFilter} onValueChange={setEnrollmentStatusFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="enrolled">Enrolled</SelectItem>
                    <SelectItem value="in_progress">In Progress</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                    <SelectItem value="dropped">Dropped</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Enrollments Table */}
          <Card>
            <CardHeader>
              <CardTitle>Course Enrollments</CardTitle>
            </CardHeader>
            <CardContent>
              {loading ? (
                <div className="flex justify-center items-center py-20">
                  <Loader2 className="w-8 h-8 animate-spin text-[#1164A3]" />
                </div>
              ) : filteredEnrollments.length === 0 ? (
                <div className="text-center py-20">
                  <GraduationCap className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-600">No enrollments found</p>
                </div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Student</TableHead>
                      <TableHead>Course</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Enrolled Date</TableHead>
                      <TableHead>Rating</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredEnrollments.map((enrollment) => (
                      <TableRow key={enrollment.id}>
                        <TableCell>
                          <div>
                            <p className="font-medium">{enrollment.fullName}</p>
                            <p className="text-sm text-gray-500">{enrollment.email}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div>
                            <p className="font-medium">{enrollment.course.title}</p>
                            <p className="text-sm text-gray-500">{enrollment.course.instructor}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge className={getEnrollmentStatusColor(enrollment.status)}>
                            {enrollment.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          {formatDate(enrollment.enrollmentDate)}
                        </TableCell>
                        <TableCell>
                          {enrollment.rating ? (
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              <span>{enrollment.rating}/5</span>
                            </div>
                          ) : (
                            <span className="text-gray-400">-</span>
                          )}
                        </TableCell>
                        <TableCell className="text-right">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => {
                              setSelectedEnrollment(enrollment);
                              setShowEnrollmentDialog(true);
                            }}
                          >
                            <Eye className="w-4 h-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>

          {/* Enrollment Detail Dialog */}
          <Dialog open={showEnrollmentDialog} onOpenChange={setShowEnrollmentDialog}>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Enrollment Details</DialogTitle>
              </DialogHeader>
              {selectedEnrollment && (
                <div className="space-y-6">
                  {/* Student Information */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <User className="w-5 h-5 text-[#1164A3]" />
                      Student Information
                    </h3>
                    <div className="space-y-2 bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-gray-400" />
                        <span className="font-medium">Name:</span>
                        <span>{selectedEnrollment.fullName}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-gray-400" />
                        <span className="font-medium">Email:</span>
                        <span>{selectedEnrollment.email}</span>
                      </div>
                      {selectedEnrollment.phone && (
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-gray-400" />
                          <span className="font-medium">Phone:</span>
                          <span>{selectedEnrollment.phone}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-2">
                        <GraduationCap className="w-4 h-4 text-gray-400" />
                        <span className="font-medium">Status:</span>
                        <span>{selectedEnrollment.currentStatus}</span>
                      </div>
                      {selectedEnrollment.organization && (
                        <div className="flex items-center gap-2">
                          <Building className="w-4 h-4 text-gray-400" />
                          <span className="font-medium">Organization:</span>
                          <span>{selectedEnrollment.organization}</span>
                        </div>
                      )}
                      {selectedEnrollment.department && (
                        <div className="flex items-center gap-2">
                          <BookOpen className="w-4 h-4 text-gray-400" />
                          <span className="font-medium">Department:</span>
                          <span>{selectedEnrollment.department}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Course Information */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-[#1164A3]" />
                      Course Information
                    </h3>
                    <div className="space-y-2 bg-gray-50 p-4 rounded-lg">
                      <div>
                        <span className="font-medium">Course:</span>
                        <span className="ml-2">{selectedEnrollment.course.title}</span>
                      </div>
                      <div>
                        <span className="font-medium">Instructor:</span>
                        <span className="ml-2">{selectedEnrollment.course.instructor}</span>
                      </div>
                      <div>
                        <span className="font-medium">Category:</span>
                        <span className="ml-2">{formatCategory(selectedEnrollment.course.category)}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        <span className="font-medium">Enrolled:</span>
                        <span>{formatDate(selectedEnrollment.enrollmentDate)}</span>
                      </div>
                      <div>
                        <span className="font-medium">Status:</span>
                        <Badge className={`ml-2 ${getEnrollmentStatusColor(selectedEnrollment.status)}`}>
                          {selectedEnrollment.status}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  {/* Review */}
                  {selectedEnrollment.rating && (
                    <div>
                      <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                        <Star className="w-5 h-5 text-[#1164A3]" />
                        Review
                      </h3>
                      <div className="space-y-3 bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-center gap-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`w-5 h-5 ${
                                star <= (selectedEnrollment.rating || 0)
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                          <span className="ml-2 font-medium">{selectedEnrollment.rating}/5</span>
                        </div>
                        {selectedEnrollment.review && (
                          <div className="bg-white p-3 rounded border border-gray-200">
                            <p className="text-gray-700 italic">&quot;{selectedEnrollment.review}&quot;</p>
                          </div>
                        )}
                        {selectedEnrollment.reviewDate && (
                          <p className="text-xs text-gray-500">
                            Reviewed on {formatDate(selectedEnrollment.reviewDate)}
                          </p>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </DialogContent>
          </Dialog>
        </TabsContent>
      </Tabs>
    </div>
  );
}