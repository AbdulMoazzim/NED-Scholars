"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Coffee,
  Plus,
  Edit,
  Trash2,
  Eye,
  Star,
  Calendar,
  Users,
  Video,
  Loader2,
  Search,
  Filter,
  MessageCircle,
  CheckCircle,
  Clock,
  Mail,
  Play,
  User,
  AlertCircle,
  X,
  Upload,
} from "lucide-react";
import {
  GetAllGupShupSessions,
  CreateGupShupSession,
  UpdateGupShupSession,
  DeleteGupShupSession,
  GetAllGupShupRegistrations,
  UpdateGupShupRegistrationStatus,
  MarkGupShupAttendance,
  GetGupShupOverallStats,
} from "@/app/actions/gupshup";
import { toast } from "sonner";
import {
  CreateGupShupSessionData,
  GupShupRegistration,
  GupShupSession,
} from "@/lib/form-types";
import { Resource } from "@/lib/types";

interface Stats {
  totalSessions: number;
  upcomingSessions: number;
  completedSessions: number;
  totalRegistrations: number;
}

export default function GupShupManagement() {
  const [sessions, setSessions] = useState<GupShupSession[]>([]);
  const [registrations, setRegistrations] = useState<GupShupRegistration[]>([]);
  const [stats, setStats] = useState<Stats>();
  const [loading, setLoading] = useState(true);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingSession, setEditingSession] = useState<GupShupSession | null>(
    null
  );
  const [saving, setSaving] = useState(false);
  const [viewingRegistration, setViewingRegistration] =
    useState<GupShupRegistration | null>(null);
  const [activeTab, setActiveTab] = useState("sessions");

  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [image, setImage] = useState<Resource | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    description: "",
    speakerName: "",
    speakerBio: "",
    speakerEmail: "",
    category: "academia",
    date: "",
    startTime: "",
    duration: "",
    platform: "",
    meetingLink: "",
    meetingPassword: "",
    mainTopic: "",
    discussionPoints: "",
    expectedOutcome: "",
    youtubeUrl: "",
    maxAttendees: "100",
    requiresRegistration: true,
    registrationDeadline: "",
    status: "upcoming",
    featured: false,
    isPublic: true,
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [sessionsRes, registrationsRes, statsRes] = await Promise.all([
        GetAllGupShupSessions(),
        GetAllGupShupRegistrations(),
        GetGupShupOverallStats(),
      ]);

      if (sessionsRes.success)
        setSessions(sessionsRes.data as GupShupSession[]);
      if (registrationsRes.success)
        setRegistrations(registrationsRes.data as GupShupRegistration[]);
      if (statsRes.success) setStats(statsRes.data);
    } catch (error) {
      toast.error("Failed to load data");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith("image/")) {
      toast.error("Please select a valid image file");
      return;
    }

    // Validate file size (e.g., max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast.error("Image size should be less than 5MB");
      return;
    }

    // Create resource object
    const resource: Resource = {
      id: (Date.now() + Math.random()).toString(),
      file: file,
      name: file.name,
    };

    setImage(resource);

    // Create preview URL
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const clearImage = () => {
    setImage(null);
    setImagePreview(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      const sessionData = {
        ...formData,
        date: new Date(formData.date),
        maxAttendees: parseInt(formData.maxAttendees),
        registrationDeadline: formData.registrationDeadline
          ? new Date(formData.registrationDeadline)
          : undefined,
        slug:
          formData.slug ||
          formData.title
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^a-z0-9-]/g, ""),
      };

      let result;
      if (editingSession) {
        result = await UpdateGupShupSession(
          editingSession.id,
          sessionData,
          image
        );
      } else {
        result = await CreateGupShupSession(
          sessionData as CreateGupShupSessionData,
          image
        );
      }

      if (result.success) {
        toast.success(
          `Session ${editingSession ? "updated" : "created"} successfully`
        );
        setIsFormOpen(false);
        resetForm();
        fetchData();
      } else {
        toast.error(result.error || "Failed to save session");
      }
    } catch (error) {
      toast.error("An error occurred");
      console.error(error);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this session?")) return;

    try {
      const result = await DeleteGupShupSession(id);
      if (result.success) {
        toast.success("Session deleted successfully");
        fetchData();
      } else {
        toast.error(result.error || "Failed to delete session");
      }
    } catch (error) {
      toast.error("An error occurred");
      console.error(error);
    }
  };

  const handleEdit = (session: GupShupSession) => {
    setEditingSession(session);
    setFormData({
      title: session.title,
      slug: session.slug,
      description: session.description,
      speakerName: session.speakerName,
      speakerBio: session.speakerBio || "",
      speakerEmail: session.speakerEmail || "",
      category: session.category,
      date: new Date(session.date).toISOString().split("T")[0],
      startTime: session.startTime,
      duration: session.duration,
      platform: session.platform || "",
      meetingLink: session.meetingLink || "",
      meetingPassword: "",
      mainTopic: session.mainTopic,
      discussionPoints: session.discussionPoints || "",
      expectedOutcome: session.expectedOutcome || "",
      youtubeUrl: session.youtubeUrl || "",
      maxAttendees: session.maxAttendees?.toString() || "100",
      requiresRegistration: session.requiresRegistration,
      registrationDeadline: session.registrationDeadline
        ? new Date(session.registrationDeadline).toISOString().split("T")[0]
        : "",
      status: session.status,
      featured: session.featured,
      isPublic: true,
    });

    // Set existing image preview if available
    if (session.thumbnailImage) {
      setImagePreview(session.thumbnailImage.url);
    }

    setIsFormOpen(true);
  };

  const resetForm = () => {
    setEditingSession(null);
    setImage(null);
    setImagePreview(null);
    setFormData({
      title: "",
      slug: "",
      description: "",
      speakerName: "",
      speakerBio: "",
      speakerEmail: "",
      category: "academia",
      date: "",
      startTime: "",
      duration: "",
      platform: "",
      meetingLink: "",
      meetingPassword: "",
      mainTopic: "",
      discussionPoints: "",
      expectedOutcome: "",
      youtubeUrl: "",
      maxAttendees: "100",
      requiresRegistration: true,
      registrationDeadline: "",
      status: "upcoming",
      featured: false,
      isPublic: true,
    });
  };

  const handleUpdateRegistrationStatus = async (
    registrationId: string,
    status: string
  ) => {
    try {
      const result = await UpdateGupShupRegistrationStatus(
        registrationId,
        status
      );
      if (result.success) {
        toast.success("Status updated");
        fetchData();
        setViewingRegistration(null);
      } else {
        toast.error(result.error || "Failed to update status");
      }
    } catch (error) {
      toast.error("An error occurred");
      console.error(error);
    }
  };

  const handleMarkAttendance = async (
    registrationId: string,
    attended: boolean
  ) => {
    try {
      const result = await MarkGupShupAttendance(registrationId, attended);
      if (result.success) {
        toast.success(`Marked as ${attended ? "attended" : "not attended"}`);
        fetchData();
      } else {
        toast.error(result.error || "Failed to mark attendance");
      }
    } catch (error) {
      toast.error("An error occurred");
      console.error(error);
    }
  };

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      upcoming: "bg-blue-100 text-blue-800",
      live: "bg-green-100 text-green-800",
      completed: "bg-gray-100 text-gray-800",
      cancelled: "bg-red-100 text-red-800",
      postponed: "bg-amber-100 text-amber-800",
    };
    return colors[status] || "bg-gray-100 text-gray-800";
  };

  const getRegistrationStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      confirmed: "bg-green-100 text-green-800",
      waitlist: "bg-amber-100 text-amber-800",
      cancelled: "bg-red-100 text-red-800",
      attended: "bg-blue-100 text-blue-800",
    };
    return colors[status] || "bg-gray-100 text-gray-800";
  };

  const formatCategory = (category: string) => {
    return category
      .split("_")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");
  };

  const filteredSessions = sessions.filter((session) => {
    const matchesSearch =
      session.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      session.speakerName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || session.status === statusFilter;
    const matchesCategory =
      categoryFilter === "all" || session.category === categoryFilter;
    return matchesSearch && matchesStatus && matchesCategory;
  });

  const filteredRegistrations = registrations.filter((reg) => {
    const matchesSearch =
      reg.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      reg.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      reg.session.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="w-12 h-12 animate-spin text-[#1164A3]" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 flex items-center gap-4">
          <Coffee className="w-12 h-12 text-[#1164A3]" />
          <div>
            <h1 className="text-4xl font-bold text-gray-800">
              Gup Shup Management
            </h1>
            <p className="text-gray-600">Manage sessions and registrations</p>
          </div>
        </div>

        {/* Stats Cards */}
        {stats && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="border-[#1164A3]">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Total Sessions</p>
                    <p className="text-3xl font-bold text-[#1164A3]">
                      {stats.totalSessions}
                    </p>
                  </div>
                  <Coffee className="w-12 h-12 text-[#1164A3] opacity-20" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-[#68B9C4]">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Upcoming</p>
                    <p className="text-3xl font-bold text-[#68B9C4]">
                      {stats.upcomingSessions}
                    </p>
                  </div>
                  <Calendar className="w-12 h-12 text-[#68B9C4] opacity-20" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-[#82B4CC]">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Completed</p>
                    <p className="text-3xl font-bold text-[#82B4CC]">
                      {stats.completedSessions}
                    </p>
                  </div>
                  <CheckCircle className="w-12 h-12 text-[#82B4CC] opacity-20" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-[#B0A3B3]">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Total Registrations</p>
                    <p className="text-3xl font-bold text-[#B0A3B3]">
                      {stats.totalRegistrations}
                    </p>
                  </div>
                  <Users className="w-12 h-12 text-[#B0A3B3] opacity-20" />
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Main Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-6">
            <TabsTrigger value="sessions">
              <Coffee className="w-4 h-4 mr-2" />
              Sessions
            </TabsTrigger>
            <TabsTrigger value="registrations">
              <Users className="w-4 h-4 mr-2" />
              Registrations
            </TabsTrigger>
          </TabsList>

          {/* Sessions Tab */}
          <TabsContent value="sessions">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Gup Shup Sessions</CardTitle>
                  <Dialog
                    open={isFormOpen}
                    onOpenChange={(open) => {
                      setIsFormOpen(open);
                      if (!open) resetForm();
                    }}
                  >
                    <DialogTrigger asChild>
                      <Button
                        onClick={() => resetForm()}
                        className="bg-gradient-to-r from-[#1164A3] to-[#68B9C4] text-white"
                      >
                        <Plus className="w-4 h-4 mr-2" />
                        Add Session
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle>
                          {editingSession
                            ? "Edit Session"
                            : "Create New Session"}
                        </DialogTitle>
                      </DialogHeader>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Basic Information */}
                        <div className="space-y-4">
                          <h3 className="font-semibold text-lg">
                            Basic Information
                          </h3>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-2">
                              <Label className="pb-2">Title *</Label>
                              <Input
                                required
                                value={formData.title}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    title: e.target.value,
                                  })
                                }
                              />
                            </div>
                            <div className="col-span-2">
                              <Label className="pb-2">Slug</Label>
                              <Input
                                placeholder="Auto-generated if empty"
                                value={formData.slug}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    slug: e.target.value,
                                  })
                                }
                              />
                            </div>
                            <div className="col-span-2">
                              <Label className="pb-2">Description *</Label>
                              <Textarea
                                required
                                rows={4}
                                value={formData.description}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    description: e.target.value,
                                  })
                                }
                              />
                            </div>
                          </div>
                        </div>

                        {/* Speaker Information */}
                        <div className="space-y-4">
                          <h3 className="font-semibold text-lg">
                            Speaker Information
                          </h3>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label className="pb-2">Speaker Name *</Label>
                              <Input
                                required
                                value={formData.speakerName}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    speakerName: e.target.value,
                                  })
                                }
                              />
                            </div>
                            <div>
                              <Label className="pb-2">Speaker Email</Label>
                              <Input
                                type="email"
                                value={formData.speakerEmail}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    speakerEmail: e.target.value,
                                  })
                                }
                              />
                            </div>
                            <div className="col-span-2">
                              <Label className="pb-2">Speaker Bio</Label>
                              <Textarea
                                rows={3}
                                value={formData.speakerBio}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    speakerBio: e.target.value,
                                  })
                                }
                              />
                            </div>
                          </div>
                        </div>

                        {/* Session Details */}
                        <div className="space-y-4">
                          <h3 className="font-semibold text-lg">
                            Session Details
                          </h3>
                          <div className="grid grid-cols-3 gap-4">
                            <div>
                              <Label className="pb-2">Category *</Label>
                              <Select
                                value={formData.category}
                                onValueChange={(val) =>
                                  setFormData({ ...formData, category: val })
                                }
                              >
                                <SelectTrigger>
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="politics">
                                    Politics
                                  </SelectItem>
                                  <SelectItem value="entertainment">
                                    Entertainment
                                  </SelectItem>
                                  <SelectItem value="social_activism">
                                    Social Activism
                                  </SelectItem>
                                  <SelectItem value="academia">
                                    Academia
                                  </SelectItem>
                                  <SelectItem value="religion">
                                    Religion
                                  </SelectItem>
                                  <SelectItem value="business">
                                    Business
                                  </SelectItem>
                                  <SelectItem value="technology">
                                    Technology
                                  </SelectItem>
                                  <SelectItem value="arts_culture">
                                    Arts & Culture
                                  </SelectItem>
                                  <SelectItem value="health_wellness">
                                    Health & Wellness
                                  </SelectItem>
                                  <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div>
                              <Label className="pb-2">Date *</Label>
                              <Input
                                required
                                type="date"
                                value={formData.date}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    date: e.target.value,
                                  })
                                }
                              />
                            </div>
                            <div>
                              <Label className="pb-2">Start Time *</Label>
                              <Input
                                required
                                placeholder="e.g., 7:00 PM PST"
                                value={formData.startTime}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    startTime: e.target.value,
                                  })
                                }
                              />
                            </div>
                            <div>
                              <Label className="pb-2">Duration *</Label>
                              <Input
                                required
                                placeholder="e.g., 60 minutes"
                                value={formData.duration}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    duration: e.target.value,
                                  })
                                }
                              />
                            </div>
                            <div>
                              <Label className="pb-2">Platform</Label>
                              <Input
                                placeholder="e.g., Zoom, Google Meet"
                                value={formData.platform}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    platform: e.target.value,
                                  })
                                }
                              />
                            </div>
                            <div>
                              <Label className="pb-2">Meeting Link</Label>
                              <Input
                                type="url"
                                placeholder="https://..."
                                value={formData.meetingLink}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    meetingLink: e.target.value,
                                  })
                                }
                              />
                            </div>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="space-y-4">
                          <h3 className="font-semibold text-lg">Content</h3>
                          <div>
                            <Label className="pb-2">Main Topic *</Label>
                            <Textarea
                              required
                              rows={3}
                              value={formData.mainTopic}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  mainTopic: e.target.value,
                                })
                              }
                            />
                          </div>
                          <div>
                            <Label className="pb-2">Discussion Points</Label>
                            <Textarea
                              rows={4}
                              placeholder="Use bullet points (- Item)"
                              value={formData.discussionPoints}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  discussionPoints: e.target.value,
                                })
                              }
                            />
                          </div>
                          <div>
                            <Label className="pb-2">Expected Outcome</Label>
                            <Textarea
                              rows={3}
                              value={formData.expectedOutcome}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  expectedOutcome: e.target.value,
                                })
                              }
                            />
                          </div>
                        </div>

                        {/* Media */}
                        <div className="space-y-4">
                          <h3 className="font-semibold text-lg">Media</h3>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label className="pb-2">Thumbnail Image</Label>
                              <div className="space-y-2">
                                <Input
                                  type="file"
                                  accept="image/*"
                                  onChange={handleImageSelect}
                                  className="cursor-pointer"
                                />
                                {imagePreview && (
                                  <div className="relative w-full h-40 border rounded-lg overflow-hidden">
                                    <img
                                      src={imagePreview}
                                      alt="Preview"
                                      className="w-full h-full object-cover"
                                    />
                                    <Button
                                      type="button"
                                      size="sm"
                                      variant="destructive"
                                      className="absolute top-2 right-2"
                                      onClick={clearImage}
                                    >
                                      <X className="w-4 h-4" />
                                    </Button>
                                  </div>
                                )}
                              </div>
                            </div>
                            <div>
                              <Label className="pb-2">
                                YouTube URL (for recordings)
                              </Label>
                              <Input
                                type="url"
                                placeholder="https://youtube.com/..."
                                value={formData.youtubeUrl}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    youtubeUrl: e.target.value,
                                  })
                                }
                              />
                            </div>
                          </div>
                        </div>

                        {/* Registration */}
                        <div className="space-y-4">
                          <h3 className="font-semibold text-lg">
                            Registration
                          </h3>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label className="pb-2">Max Attendees</Label>
                              <Input
                                type="number"
                                min="1"
                                value={formData.maxAttendees}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    maxAttendees: e.target.value,
                                  })
                                }
                              />
                            </div>
                            <div>
                              <Label className="pb-2">
                                Registration Deadline
                              </Label>
                              <Input
                                type="date"
                                value={formData.registrationDeadline}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    registrationDeadline: e.target.value,
                                  })
                                }
                              />
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              checked={formData.requiresRegistration}
                              onCheckedChange={(checked) =>
                                setFormData({
                                  ...formData,
                                  requiresRegistration: checked as boolean,
                                })
                              }
                            />
                            <Label className="pb-2">
                              Requires registration
                            </Label>
                          </div>
                        </div>

                        {/* Status */}
                        <div className="space-y-4">
                          <h3 className="font-semibold text-lg">
                            Status & Visibility
                          </h3>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label className="pb-2">Status *</Label>
                              <Select
                                value={formData.status}
                                onValueChange={(val) =>
                                  setFormData({ ...formData, status: val })
                                }
                              >
                                <SelectTrigger>
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="upcoming">
                                    Upcoming
                                  </SelectItem>
                                  <SelectItem value="live">Live</SelectItem>
                                  <SelectItem value="completed">
                                    Completed
                                  </SelectItem>
                                  <SelectItem value="cancelled">
                                    Cancelled
                                  </SelectItem>
                                  <SelectItem value="postponed">
                                    Postponed
                                  </SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              checked={formData.featured}
                              onCheckedChange={(checked) =>
                                setFormData({
                                  ...formData,
                                  featured: checked as boolean,
                                })
                              }
                            />
                            <Label className="pb-2">Feature this session</Label>
                          </div>
                        </div>

                        <div className="flex justify-end gap-4 pt-4">
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => {
                              setIsFormOpen(false);
                              resetForm();
                            }}
                          >
                            Cancel
                          </Button>
                          <Button
                            disabled={saving}
                            type="submit"
                            className="bg-gradient-to-r from-[#1164A3] to-[#68B9C4] text-white"
                          >
                            {saving ? (
                              <>
                                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                {editingSession ? "Updating..." : "Creating..."}
                              </>
                            ) : editingSession ? (
                              "Update Session"
                            ) : (
                              "Create Session"
                            )}
                          </Button>
                        </div>
                      </form>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardHeader>
              <CardContent>
                {/* Filters */}
                <div className="flex gap-4 mb-6">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                    <Input
                      placeholder="Search sessions..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger className="w-48">
                      <Filter className="w-4 h-4 mr-2" />
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="upcoming">Upcoming</SelectItem>
                      <SelectItem value="live">Live</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                      <SelectItem value="cancelled">Cancelled</SelectItem>
                      <SelectItem value="postponed">Postponed</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select
                    value={categoryFilter}
                    onValueChange={setCategoryFilter}
                  >
                    <SelectTrigger className="w-48">
                      <Filter className="w-4 h-4 mr-2" />
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="politics">Politics</SelectItem>
                      <SelectItem value="entertainment">
                        Entertainment
                      </SelectItem>
                      <SelectItem value="social_activism">
                        Social Activism
                      </SelectItem>
                      <SelectItem value="academia">Academia</SelectItem>
                      <SelectItem value="religion">Religion</SelectItem>
                      <SelectItem value="business">Business</SelectItem>
                      <SelectItem value="technology">Technology</SelectItem>
                      <SelectItem value="arts_culture">
                        Arts & Culture
                      </SelectItem>
                      <SelectItem value="health_wellness">
                        Health & Wellness
                      </SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Table */}
                <div className="border rounded-lg">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Title</TableHead>
                        <TableHead>Speaker</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Featured</TableHead>
                        <TableHead>Registrations</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredSessions.map((session) => (
                        <TableRow key={session.id}>
                          <TableCell className="font-medium">
                            {session.title}
                          </TableCell>
                          <TableCell>{session.speakerName}</TableCell>
                          <TableCell>
                            {formatCategory(session.category)}
                          </TableCell>
                          <TableCell>
                            {new Date(session.date).toLocaleDateString()}
                          </TableCell>
                          <TableCell>
                            <Badge className={getStatusColor(session.status)}>
                              {session.status}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            {session.featured && (
                              <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                            )}
                          </TableCell>
                          <TableCell>
                            <Badge variant="outline">
                              {session._count?.registrations || 0}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() =>
                                  window.open(
                                    `/events/gupshup/${session.slug}`,
                                    "_blank"
                                  )
                                }
                              >
                                <Eye className="w-4 h-4" />
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => handleEdit(session)}
                              >
                                <Edit className="w-4 h-4" />
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => handleDelete(session.id)}
                              >
                                <Trash2 className="w-4 h-4 text-red-500" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Registrations Tab */}
          <TabsContent value="registrations">
            <Card>
              <CardHeader>
                <CardTitle>Session Registrations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative mb-6">
                  <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                  <Input
                    placeholder="Search registrations..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>

                <div className="border rounded-lg">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Attendee</TableHead>
                        <TableHead>Session</TableHead>
                        <TableHead>Organization</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Attended</TableHead>
                        <TableHead>Registered</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredRegistrations.map((registration) => (
                        <TableRow key={registration.id}>
                          <TableCell>
                            <div>
                              <div className="font-medium">
                                {registration.fullName}
                              </div>
                              <div className="text-sm text-gray-500">
                                {registration.email}
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div>
                              <div className="font-medium">
                                {registration.session.title}
                              </div>
                              <div className="text-sm text-gray-500">
                                {new Date(
                                  registration.session.date
                                ).toLocaleDateString()}
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>
                            {registration.organization || "-"}
                          </TableCell>
                          <TableCell>
                            <Badge
                              className={getRegistrationStatusColor(
                                registration.registrationStatus
                              )}
                            >
                              {registration.registrationStatus}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            {registration.attended ? (
                              <CheckCircle className="w-5 h-5 text-green-600" />
                            ) : (
                              <AlertCircle className="w-5 h-5 text-gray-400" />
                            )}
                          </TableCell>
                          <TableCell>
                            {new Date(
                              registration.createdAt
                            ).toLocaleDateString()}
                          </TableCell>
                          <TableCell>
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() =>
                                    setViewingRegistration(registration)
                                  }
                                >
                                  <Eye className="w-4 h-4 mr-2" />
                                  View
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="max-w-2xl">
                                <DialogHeader>
                                  <DialogTitle>
                                    Registration Details
                                  </DialogTitle>
                                </DialogHeader>
                                {viewingRegistration && (
                                  <div className="space-y-6">
                                    <div>
                                      <h3 className="font-semibold text-lg mb-3">
                                        Attendee Information
                                      </h3>
                                      <div className="grid grid-cols-2 gap-4">
                                        <div>
                                          <Label className="text-gray-600">
                                            Full Name
                                          </Label>
                                          <p className="font-medium">
                                            {viewingRegistration.fullName}
                                          </p>
                                        </div>
                                        <div>
                                          <Label className="text-gray-600">
                                            Email
                                          </Label>
                                          <p className="font-medium">
                                            {viewingRegistration.email}
                                          </p>
                                        </div>
                                        <div>
                                          <Label className="text-gray-600">
                                            Phone
                                          </Label>
                                          <p className="font-medium">
                                            {viewingRegistration.phone || "N/A"}
                                          </p>
                                        </div>
                                        <div>
                                          <Label className="text-gray-600">
                                            Status
                                          </Label>
                                          <Badge
                                            className={getRegistrationStatusColor(
                                              viewingRegistration.registrationStatus
                                            )}
                                          >
                                            {
                                              viewingRegistration.registrationStatus
                                            }
                                          </Badge>
                                        </div>
                                      </div>
                                    </div>

                                    {(viewingRegistration.organization ||
                                      viewingRegistration.designation) && (
                                      <div>
                                        <h3 className="font-semibold text-lg mb-3">
                                          Additional Details
                                        </h3>
                                        <div className="grid grid-cols-2 gap-4">
                                          {viewingRegistration.organization && (
                                            <div>
                                              <Label className="text-gray-600">
                                                Organization
                                              </Label>
                                              <p className="font-medium">
                                                {
                                                  viewingRegistration.organization
                                                }
                                              </p>
                                            </div>
                                          )}
                                          {viewingRegistration.designation && (
                                            <div>
                                              <Label className="text-gray-600">
                                                Designation
                                              </Label>
                                              <p className="font-medium">
                                                {
                                                  viewingRegistration.designation
                                                }
                                              </p>
                                            </div>
                                          )}
                                        </div>
                                      </div>
                                    )}

                                    {viewingRegistration.whyAttending && (
                                      <div>
                                        <h3 className="font-semibold text-lg mb-3">
                                          Why Attending
                                        </h3>
                                        <div className="p-4 bg-gray-50 rounded-lg">
                                          {viewingRegistration.whyAttending}
                                        </div>
                                      </div>
                                    )}

                                    {viewingRegistration.questionsForSpeaker && (
                                      <div>
                                        <h3 className="font-semibold text-lg mb-3">
                                          Questions for Speaker
                                        </h3>
                                        <div className="p-4 bg-gray-50 rounded-lg">
                                          {
                                            viewingRegistration.questionsForSpeaker
                                          }
                                        </div>
                                      </div>
                                    )}

                                    {(viewingRegistration.rating ||
                                      viewingRegistration.feedback) && (
                                      <div>
                                        <h3 className="font-semibold text-lg mb-3">
                                          Feedback
                                        </h3>
                                        {viewingRegistration.rating && (
                                          <div className="mb-2">
                                            <Label className="text-gray-600">
                                              Rating
                                            </Label>
                                            <div className="flex items-center gap-1">
                                              {Array.from({ length: 5 }).map(
                                                (_, i) => (
                                                  <Star
                                                    key={i}
                                                    className={`w-5 h-5 ${
                                                      i <
                                                      viewingRegistration.rating!
                                                        ? "text-amber-500 fill-amber-500"
                                                        : "text-gray-300"
                                                    }`}
                                                  />
                                                )
                                              )}
                                            </div>
                                          </div>
                                        )}
                                        {viewingRegistration.feedback && (
                                          <div className="p-4 bg-gray-50 rounded-lg">
                                            {viewingRegistration.feedback}
                                          </div>
                                        )}
                                      </div>
                                    )}

                                    <div>
                                      <h3 className="font-semibold text-lg mb-3">
                                        Actions
                                      </h3>
                                      <div className="flex gap-2">
                                        <Button
                                          size="sm"
                                          variant="outline"
                                          onClick={() =>
                                            handleMarkAttendance(
                                              viewingRegistration.id,
                                              !viewingRegistration.attended
                                            )
                                          }
                                          className="border-green-500 text-green-700"
                                        >
                                          {viewingRegistration.attended
                                            ? "Mark as Not Attended"
                                            : "Mark as Attended"}
                                        </Button>
                                        {viewingRegistration.registrationStatus !==
                                          "cancelled" && (
                                          <Button
                                            size="sm"
                                            variant="outline"
                                            onClick={() =>
                                              handleUpdateRegistrationStatus(
                                                viewingRegistration.id,
                                                "cancelled"
                                              )
                                            }
                                            className="border-red-500 text-red-700"
                                          >
                                            Cancel Registration
                                          </Button>
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </DialogContent>
                            </Dialog>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
