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
  Loader2,
  Search,
  Filter,
  CheckCircle,
  AlertCircle,
  X,
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
import { deleteImage, addImage } from "@/app/actions/resource";
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

// ─── Form validation ──────────────────────────────────────────────────────────

type FormData = {
  title: string;
  slug: string;
  description: string;
  speakerName: string;
  speakerBio: string;
  speakerEmail: string;
  category: string;
  date: string;
  startTime: string;
  duration: string;
  platform: string;
  meetingLink: string;
  meetingPassword: string;
  mainTopic: string;
  discussionPoints: string;
  expectedOutcome: string;
  youtubeUrl: string;
  maxAttendees: string;
  requiresRegistration: boolean;
  registrationDeadline: string;
  status: string;
  featured: boolean;
  isPublic: boolean;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const URL_RE   = /^https?:\/\/.+/;

function validateForm(data: FormData): FormErrors {
  const errors: FormErrors = {};
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (!data.title.trim()) errors.title = "Title is required";
  else if (data.title.trim().length < 3) errors.title = "Title must be at least 3 characters";

  if (!data.description.trim()) errors.description = "Description is required";
  else if (data.description.trim().length < 10) errors.description = "Description must be at least 10 characters";

  if (!data.speakerName.trim()) errors.speakerName = "Speaker name is required";

  if (data.speakerEmail && !EMAIL_RE.test(data.speakerEmail))
    errors.speakerEmail = "Please enter a valid email address";

  if (!data.category) errors.category = "Category is required";

  if (!data.date) {
    errors.date = "Date is required";
  } else {
    const sessionDate = new Date(data.date);
    sessionDate.setHours(0, 0, 0, 0);
    // Allow same-day sessions but not past dates
    if (sessionDate < today && data.status === "upcoming")
      errors.date = "Upcoming sessions cannot have a past date";
  }

  if (!data.startTime.trim()) errors.startTime = "Start time is required";

  if (!data.duration.trim()) errors.duration = "Duration is required";

  if (data.meetingLink && !URL_RE.test(data.meetingLink))
    errors.meetingLink = "Meeting link must be a valid URL (http:// or https://)";

  if (!data.mainTopic.trim()) errors.mainTopic = "Main topic is required";

  if (data.youtubeUrl && !URL_RE.test(data.youtubeUrl))
    errors.youtubeUrl = "YouTube URL must start with http:// or https://";

  const maxAtt = parseInt(data.maxAttendees);
  if (data.maxAttendees && (isNaN(maxAtt) || maxAtt < 1))
    errors.maxAttendees = "Max attendees must be a positive number";

  if (data.registrationDeadline && data.date) {
    const deadline = new Date(data.registrationDeadline);
    const sessionDate = new Date(data.date);
    if (deadline > sessionDate)
      errors.registrationDeadline = "Registration deadline must be on or before the session date";
  }

  if (!data.status) errors.status = "Status is required";

  return errors;
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function GupShupManagement() {
  const [sessions, setSessions] = useState<GupShupSession[]>([]);
  const [registrations, setRegistrations] = useState<GupShupRegistration[]>([]);
  const [stats, setStats] = useState<Stats>();
  const [loading, setLoading] = useState(true);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingSession, setEditingSession] = useState<GupShupSession | null>(null);
  const [saving, setSaving] = useState(false);
  const [updatingAttendance, setUpdatingAttendance] = useState(false);
  const [viewingRegistration, setViewingRegistration] = useState<GupShupRegistration | null>(null);
  const [activeTab, setActiveTab] = useState("sessions");
  const [formErrors, setFormErrors] = useState<FormErrors>({});

  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");

  const [deletingImage, setDeletingImage] = useState(false);
  const [image, setImage] = useState<Resource | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const [formData, setFormData] = useState<FormData>({
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

  const registrationStatusOptions = [
    { value: "confirmed", label: "Confirmed" },
    { value: "waitlist", label: "Waitlist" },
    { value: "attended", label: "Attended" },
    { value: "cancelled", label: "Cancelled" },
  ];

  // Which statuses are disabled given the current registration state
  const getDisabledStatuses = (reg: GupShupRegistration): string[] => {
    const current = reg.registrationStatus;
    const disabled: string[] = [current]; // always disable the current (no-op)
    if (current === "cancelled") disabled.push("attended"); // can't attend if cancelled
    if (current === "attended") disabled.push("waitlist");  // attended -> waitlist nonsensical
    if (current === "waitlist") disabled.push("attended");  // must confirm before attended
    return disabled;
  };

  useEffect(() => { fetchData(); }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [sessionsRes, registrationsRes, statsRes] = await Promise.all([
        GetAllGupShupSessions(),
        GetAllGupShupRegistrations(),
        GetGupShupOverallStats(),
      ]);
      if (sessionsRes.success) setSessions(sessionsRes.data as GupShupSession[]);
      if (registrationsRes.success) setRegistrations(registrationsRes.data as GupShupRegistration[]);
      if (statsRes.success) setStats(statsRes.data);
    } catch (error) {
      toast.error("Failed to load data");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // ── Image handling ────────────────────────────────────────────────

  const handleImageSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      toast.error("Please select a valid image file");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      toast.error("Image size should be less than 5MB");
      return;
    }

    const resource: Resource = {
      id: (Date.now() + Math.random()).toString(),
      file,
      name: file.name,
    };

    // If editing and there's an existing image, delete it first then upload new one
    if (editingSession?.thumbnailImage?.length) {
      setDeletingImage(true);
      try {
        const existing = editingSession.thumbnailImage[0];
        await deleteImage(existing.id, existing.public_id);
        const uploadResult = await addImage(resource, "gupshup", editingSession.id, "gupshup");
        if (!uploadResult.success) {
          toast.error("Failed to upload new image");
          setDeletingImage(false);
          return;
        }
        // Refresh data so editingSession reflects new image
        await fetchData();
        toast.success("Image replaced successfully");
      } catch {
        toast.error("Failed to replace image");
      } finally {
        setDeletingImage(false);
      }
    }

    setImage(resource);
    const reader = new FileReader();
    reader.onloadend = () => setImagePreview(reader.result as string);
    reader.readAsDataURL(file);
  };

  const clearImage = () => {
    setImage(null);
    setImagePreview(null);
  };

  // Directly delete the existing image from Cloudinary + DB
  const handleDeleteExistingImage = async () => {
    if (!editingSession?.thumbnailImage?.length) return;
    if (!confirm("Are you sure you want to remove this image?")) return;

    setDeletingImage(true);
    try {
      const existing = editingSession.thumbnailImage[0];
      const result = await deleteImage(existing.id, existing.public_id);
      if (result.success) {
        toast.success("Image deleted");
        setImagePreview(null);
        setImage(null);
        await fetchData();
      } else {
        toast.error("Failed to delete image");
      }
    } catch {
      toast.error("An error occurred");
    } finally {
      setDeletingImage(false);
    }
  };

  // ── Form submit ───────────────────────────────────────────────────

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const errors = validateForm(formData);
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      // Scroll to first error
      const firstKey = Object.keys(errors)[0];
      document.getElementById(firstKey)?.scrollIntoView({ behavior: "smooth", block: "center" });
      toast.error("Please fix the errors before submitting");
      return;
    }
    setFormErrors({});

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
          image  // null = keep existing (unless deleteExistingImage is true)
        );
      } else {
        result = await CreateGupShupSession(
          sessionData as CreateGupShupSessionData,
          image
        );
      }

      if (result.success) {
        toast.success(`Session ${editingSession ? "updated" : "created"} successfully`);
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

  // ── Delete session ────────────────────────────────────────────────

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

  // ── Edit session ──────────────────────────────────────────────────

  const handleEdit = (session: GupShupSession) => {
    setEditingSession(session);
    setFormErrors({});
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

    if (session.thumbnailImage?.length) {
      setImagePreview(session.thumbnailImage[0].url);
    } else {
      setImagePreview(null);
    }
    setImage(null);
    setIsFormOpen(true);
  };

  const resetForm = () => {
    setEditingSession(null);
    setImage(null);
    setImagePreview(null);
    setFormErrors({});
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

  // ── Registration actions ──────────────────────────────────────────

  const handleUpdateRegistrationStatus = async (registrationId: string, status: string) => {
    try {
      const result = await UpdateGupShupRegistrationStatus(registrationId, status);
      if (result.success) {
        toast.success("Status updated");
        fetchData();
        // Update the viewing registration in place so the dialog reflects changes
        setViewingRegistration((prev) =>
          prev ? { ...prev, registrationStatus: status } : prev
        );
      } else {
        toast.error(result.error || "Failed to update status");
      }
    } catch (error) {
      toast.error("An error occurred");
      console.error(error);
    }
  };

  const handleMarkAttendance = async (registrationId: string, attended: boolean) => {
    setUpdatingAttendance(true);
    try {
      const result = await MarkGupShupAttendance(registrationId, attended);
      if (result.success) {
        toast.success(`Marked as ${attended ? "attended" : "not attended"}`);
        fetchData();
        setViewingRegistration((prev) =>
          prev
            ? { ...prev, attended, registrationStatus: attended ? "attended" : "confirmed" }
            : prev
        );
      } else {
        toast.error(result.error || "Failed to mark attendance");
      }
    } catch (error) {
      toast.error("An error occurred");
      console.error(error);
    } finally {
      setUpdatingAttendance(false);
    }
  };

  // ── Helpers ───────────────────────────────────────────────────────

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

  const formatCategory = (category: string) =>
    category.split("_").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

  // ── Field helper: renders error message ───────────────────────────

  const fieldError = (key: keyof FormErrors) =>
    formErrors[key] ? (
      <p className="text-sm text-red-500 mt-1 flex items-center gap-1">
        <span className="text-xs">⚠</span> {formErrors[key]}
      </p>
    ) : null;

  const inputClass = (key: keyof FormErrors) =>
    formErrors[key] ? "border-red-500 focus-visible:ring-red-400" : "";

  // ── Filtered lists ────────────────────────────────────────────────

  const filteredSessions = sessions.filter((session) => {
    const matchesSearch =
      session.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      session.speakerName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "all" || session.status === statusFilter;
    const matchesCategory = categoryFilter === "all" || session.category === categoryFilter;
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

  // ── Render ────────────────────────────────────────────────────────

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 flex items-center gap-4">
          <Coffee className="w-12 h-12 text-[#1164A3]" />
          <div>
            <h1 className="text-4xl font-bold text-gray-800">Gup Shup Management</h1>
            <p className="text-gray-600">Manage sessions and registrations</p>
          </div>
        </div>

        {/* Stats */}
        {stats && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {[
              { label: "Total Sessions", value: stats.totalSessions, icon: Coffee, color: "#1164A3" },
              { label: "Upcoming", value: stats.upcomingSessions, icon: Calendar, color: "#68B9C4" },
              { label: "Completed", value: stats.completedSessions, icon: CheckCircle, color: "#82B4CC" },
              { label: "Total Registrations", value: stats.totalRegistrations, icon: Users, color: "#B0A3B3" },
            ].map(({ label, value, icon: Icon, color }) => (
              <Card key={label} style={{ borderColor: color }}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">{label}</p>
                      <p className="text-3xl font-bold" style={{ color }}>{value}</p>
                    </div>
                    <Icon className="w-12 h-12 opacity-20" style={{ color }} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-6">
            <TabsTrigger value="sessions"><Coffee className="w-4 h-4 mr-2" />Sessions</TabsTrigger>
            <TabsTrigger value="registrations"><Users className="w-4 h-4 mr-2" />Registrations</TabsTrigger>
          </TabsList>

          {/* ── Sessions tab ── */}
          <TabsContent value="sessions">
            <Card>
              <CardHeader>
                <div className="flex items-center flex-wrap justify-between">
                  <CardTitle className="py-2">Gup Shup Sessions</CardTitle>
                  <Dialog open={isFormOpen} onOpenChange={(open) => { setIsFormOpen(open); if (!open) resetForm(); }}>
                    <DialogTrigger asChild>
                      <Button onClick={() => resetForm()} className="bg-gradient-to-r from-[#1164A3] to-[#68B9C4] text-white">
                        <Plus className="w-4 h-4 mr-2" />Add Session
                      </Button>
                    </DialogTrigger>

                    <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle>{editingSession ? "Edit Session" : "Create New Session"}</DialogTitle>
                      </DialogHeader>

                      <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Basic Info */}
                        <div className="space-y-4">
                          <h3 className="font-semibold text-lg">Basic Information</h3>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-2">
                              <Label htmlFor="title" className="pb-2">Title *</Label>
                              <Input
                                id="title"
                                value={formData.title}
                                className={inputClass("title")}
                                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                              />
                              {fieldError("title")}
                            </div>
                            <div className="col-span-2">
                              <Label htmlFor="slug" className="pb-2">Slug</Label>
                              <Input
                                id="slug"
                                placeholder="Auto-generated if empty"
                                value={formData.slug}
                                onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                              />
                            </div>
                            <div className="col-span-2">
                              <Label htmlFor="description" className="pb-2">Description *</Label>
                              <Textarea
                                id="description"
                                rows={4}
                                value={formData.description}
                                className={inputClass("description")}
                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                              />
                              {fieldError("description")}
                            </div>
                          </div>
                        </div>

                        {/* Speaker */}
                        <div className="space-y-4">
                          <h3 className="font-semibold text-lg">Speaker Information</h3>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="speakerName" className="pb-2">Speaker Name *</Label>
                              <Input
                                id="speakerName"
                                value={formData.speakerName}
                                className={inputClass("speakerName")}
                                onChange={(e) => setFormData({ ...formData, speakerName: e.target.value })}
                              />
                              {fieldError("speakerName")}
                            </div>
                            <div>
                              <Label htmlFor="speakerEmail" className="pb-2">Speaker Email</Label>
                              <Input
                                id="speakerEmail"
                                type="email"
                                value={formData.speakerEmail}
                                className={inputClass("speakerEmail")}
                                onChange={(e) => setFormData({ ...formData, speakerEmail: e.target.value })}
                              />
                              {fieldError("speakerEmail")}
                            </div>
                            <div className="col-span-2">
                              <Label className="pb-2">Speaker Bio</Label>
                              <Textarea
                                rows={3}
                                value={formData.speakerBio}
                                onChange={(e) => setFormData({ ...formData, speakerBio: e.target.value })}
                              />
                            </div>
                          </div>
                        </div>

                        {/* Session Details */}
                        <div className="space-y-4">
                          <h3 className="font-semibold text-lg">Session Details</h3>
                          <div className="grid grid-cols-3 gap-4">
                            <div>
                              <Label htmlFor="category" className="pb-2">Category *</Label>
                              <Select value={formData.category} onValueChange={(val) => setFormData({ ...formData, category: val })}>
                                <SelectTrigger id="category" className={inputClass("category")}>
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  {["politics","entertainment","social_activism","academia","religion","business","technology","arts_culture","health_wellness","other"].map((c) => (
                                    <SelectItem key={c} value={c}>{formatCategory(c)}</SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              {fieldError("category")}
                            </div>
                            <div>
                              <Label htmlFor="date" className="pb-2">Date *</Label>
                              <Input
                                id="date"
                                type="date"
                                value={formData.date}
                                className={inputClass("date")}
                                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                              />
                              {fieldError("date")}
                            </div>
                            <div>
                              <Label htmlFor="startTime" className="pb-2">Start Time *</Label>
                              <Input
                                id="startTime"
                                placeholder="e.g., 7:00 PM PST"
                                value={formData.startTime}
                                className={inputClass("startTime")}
                                onChange={(e) => setFormData({ ...formData, startTime: e.target.value })}
                              />
                              {fieldError("startTime")}
                            </div>
                            <div>
                              <Label htmlFor="duration" className="pb-2">Duration *</Label>
                              <Input
                                id="duration"
                                placeholder="e.g., 60 minutes"
                                value={formData.duration}
                                className={inputClass("duration")}
                                onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                              />
                              {fieldError("duration")}
                            </div>
                            <div>
                              <Label className="pb-2">Platform</Label>
                              <Input
                                placeholder="e.g., Zoom, Google Meet"
                                value={formData.platform}
                                onChange={(e) => setFormData({ ...formData, platform: e.target.value })}
                              />
                            </div>
                            <div>
                              <Label htmlFor="meetingLink" className="pb-2">Meeting Link</Label>
                              <Input
                                id="meetingLink"
                                type="url"
                                placeholder="https://..."
                                value={formData.meetingLink}
                                className={inputClass("meetingLink")}
                                onChange={(e) => setFormData({ ...formData, meetingLink: e.target.value })}
                              />
                              {fieldError("meetingLink")}
                            </div>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="space-y-4">
                          <h3 className="font-semibold text-lg">Content</h3>
                          <div>
                            <Label htmlFor="mainTopic" className="pb-2">Main Topic *</Label>
                            <Textarea
                              id="mainTopic"
                              rows={3}
                              value={formData.mainTopic}
                              className={inputClass("mainTopic")}
                              onChange={(e) => setFormData({ ...formData, mainTopic: e.target.value })}
                            />
                            {fieldError("mainTopic")}
                          </div>
                          <div>
                            <Label className="pb-2">Discussion Points</Label>
                            <Textarea
                              rows={4}
                              placeholder="Use bullet points (- Item)"
                              value={formData.discussionPoints}
                              onChange={(e) => setFormData({ ...formData, discussionPoints: e.target.value })}
                            />
                          </div>
                          <div>
                            <Label className="pb-2">Expected Outcome</Label>
                            <Textarea
                              rows={3}
                              value={formData.expectedOutcome}
                              onChange={(e) => setFormData({ ...formData, expectedOutcome: e.target.value })}
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
                                    <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                                    <div className="absolute top-2 right-2 flex gap-1">
                                      {/* Clear newly selected file (before submit) */}
                                      {image && (
                                        <Button type="button" size="sm" variant="destructive" onClick={clearImage}>
                                          <X className="w-4 h-4" />
                                        </Button>
                                      )}
                                      {/* Delete existing image directly from DB + Cloudinary */}
                                      {!image && editingSession?.thumbnailImage?.length && (
                                        <Button
                                          type="button"
                                          size="sm"
                                          variant="destructive"
                                          disabled={deletingImage}
                                          onClick={handleDeleteExistingImage}
                                        >
                                          {deletingImage
                                            ? <Loader2 className="w-4 h-4 animate-spin" />
                                            : <Trash2 className="w-4 h-4" />}
                                        </Button>
                                      )}
                                    </div>
                                  </div>
                                )}
                                {deletingImage && (
                                  <p className="text-sm text-gray-500 flex items-center gap-1">
                                    <Loader2 className="w-3 h-3 animate-spin" /> Processing image...
                                  </p>
                                )}
                              </div>
                            </div>
                            <div>
                              <Label htmlFor="youtubeUrl" className="pb-2">YouTube URL (for recordings)</Label>
                              <Input
                                id="youtubeUrl"
                                type="url"
                                placeholder="https://youtube.com/..."
                                value={formData.youtubeUrl}
                                className={inputClass("youtubeUrl")}
                                onChange={(e) => setFormData({ ...formData, youtubeUrl: e.target.value })}
                              />
                              {fieldError("youtubeUrl")}
                            </div>
                          </div>
                        </div>

                        {/* Registration */}
                        <div className="space-y-4">
                          <h3 className="font-semibold text-lg">Registration</h3>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="maxAttendees" className="pb-2">Max Attendees</Label>
                              <Input
                                id="maxAttendees"
                                type="number"
                                min="1"
                                value={formData.maxAttendees}
                                className={inputClass("maxAttendees")}
                                onChange={(e) => setFormData({ ...formData, maxAttendees: e.target.value })}
                              />
                              {fieldError("maxAttendees")}
                            </div>
                            <div>
                              <Label htmlFor="registrationDeadline" className="pb-2">Registration Deadline</Label>
                              <Input
                                id="registrationDeadline"
                                type="date"
                                max={formData.date || undefined}
                                value={formData.registrationDeadline}
                                className={inputClass("registrationDeadline")}
                                onChange={(e) => setFormData({ ...formData, registrationDeadline: e.target.value })}
                              />
                              {fieldError("registrationDeadline")}
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              checked={formData.requiresRegistration}
                              onCheckedChange={(checked) =>
                                setFormData({ ...formData, requiresRegistration: checked as boolean })
                              }
                            />
                            <Label className="pb-2">Requires registration</Label>
                          </div>
                        </div>

                        {/* Status */}
                        <div className="space-y-4">
                          <h3 className="font-semibold text-lg">Status & Visibility</h3>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="status" className="pb-2">Status *</Label>
                              <Select value={formData.status} onValueChange={(val) => setFormData({ ...formData, status: val })}>
                                <SelectTrigger id="status" className={inputClass("status")}>
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  {["upcoming","live","completed","cancelled","postponed"].map((s) => (
                                    <SelectItem key={s} value={s}>{s.charAt(0).toUpperCase() + s.slice(1)}</SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              {fieldError("status")}
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              checked={formData.featured}
                              onCheckedChange={(checked) => setFormData({ ...formData, featured: checked as boolean })}
                            />
                            <Label className="pb-2">Feature this session</Label>
                          </div>
                        </div>

                        <div className="flex justify-end gap-4 pt-4">
                          <Button type="button" variant="outline" onClick={() => { setIsFormOpen(false); resetForm(); }}>
                            Cancel
                          </Button>
                          <Button disabled={saving} type="submit" className="bg-gradient-to-r from-[#1164A3] to-[#68B9C4] text-white">
                            {saving ? (
                              <><Loader2 className="w-4 h-4 mr-2 animate-spin" />{editingSession ? "Updating..." : "Creating..."}</>
                            ) : editingSession ? "Update Session" : "Create Session"}
                          </Button>
                        </div>
                      </form>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardHeader>

              <CardContent>
                {/* Filters */}
                <div className="flex flex-wrap gap-4 mb-6">
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
                      <Filter className="w-4 h-4 mr-2" /><SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      {["upcoming","live","completed","cancelled","postponed"].map((s) => (
                        <SelectItem key={s} value={s}>{s.charAt(0).toUpperCase() + s.slice(1)}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                    <SelectTrigger className="w-48">
                      <Filter className="w-4 h-4 mr-2" /><SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      {["politics","entertainment","social_activism","academia","religion","business","technology","arts_culture","health_wellness","other"].map((c) => (
                        <SelectItem key={c} value={c}>{formatCategory(c)}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

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
                          <TableCell className="font-medium">{session.title}</TableCell>
                          <TableCell>{session.speakerName}</TableCell>
                          <TableCell>{formatCategory(session.category)}</TableCell>
                          <TableCell>{new Date(session.date).toLocaleDateString()}</TableCell>
                          <TableCell>
                            <Badge className={getStatusColor(session.status)}>{session.status}</Badge>
                          </TableCell>
                          <TableCell>
                            {session.featured && <Star className="w-4 h-4 text-amber-500 fill-amber-500" />}
                          </TableCell>
                          <TableCell>
                            <Badge variant="outline">{session._count?.registrations || 0}</Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              <Button size="sm" variant="outline" onClick={() => window.open(`/events/gupshup/${session.slug}`, "_blank")}>
                                <Eye className="w-4 h-4" />
                              </Button>
                              <Button size="sm" variant="outline" onClick={() => handleEdit(session)}>
                                <Edit className="w-4 h-4" />
                              </Button>
                              <Button size="sm" variant="outline" onClick={() => handleDelete(session.id)}>
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

          {/* ── Registrations tab ── */}
          <TabsContent value="registrations">
            <Card>
              <CardHeader><CardTitle>Session Registrations</CardTitle></CardHeader>
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
                              <div className="font-medium">{registration.fullName}</div>
                              <div className="text-sm text-gray-500">{registration.email}</div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div>
                              <div className="font-medium">{registration.session.title}</div>
                              <div className="text-sm text-gray-500">
                                {new Date(registration.session.date).toLocaleDateString()}
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>{registration.organization || "-"}</TableCell>
                          <TableCell>
                            <Badge className={getRegistrationStatusColor(registration.registrationStatus)}>
                              {registration.registrationStatus}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            {registration.attended
                              ? <CheckCircle className="w-5 h-5 text-green-600" />
                              : <AlertCircle className="w-5 h-5 text-gray-400" />}
                          </TableCell>
                          <TableCell>{new Date(registration.createdAt).toLocaleDateString()}</TableCell>
                          <TableCell>
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button size="sm" variant="outline" onClick={() => setViewingRegistration(registration)}>
                                  <Eye className="w-4 h-4 mr-2" />View
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="max-w-2xl">
                                <DialogHeader><DialogTitle>Registration Details</DialogTitle></DialogHeader>
                                {viewingRegistration && (
                                  <div className="space-y-6">
                                    {/* Attendee info */}
                                    <div>
                                      <h3 className="font-semibold text-lg mb-3">Attendee Information</h3>
                                      <div className="grid grid-cols-2 gap-4">
                                        <div><Label className="text-gray-600">Full Name</Label><p className="font-medium">{viewingRegistration.fullName}</p></div>
                                        <div><Label className="text-gray-600">Email</Label><p className="font-medium">{viewingRegistration.email}</p></div>
                                        <div><Label className="text-gray-600">Phone</Label><p className="font-medium">{viewingRegistration.phone || "N/A"}</p></div>
                                        <div>
                                          <Label className="text-gray-600">Status</Label>
                                          <Badge className={getRegistrationStatusColor(viewingRegistration.registrationStatus)}>
                                            {viewingRegistration.registrationStatus}
                                          </Badge>
                                        </div>
                                      </div>
                                    </div>

                                    {(viewingRegistration.organization || viewingRegistration.designation) && (
                                      <div>
                                        <h3 className="font-semibold text-lg mb-3">Additional Details</h3>
                                        <div className="grid grid-cols-2 gap-4">
                                          {viewingRegistration.organization && (
                                            <div><Label className="text-gray-600">Organization</Label><p className="font-medium">{viewingRegistration.organization}</p></div>
                                          )}
                                          {viewingRegistration.designation && (
                                            <div><Label className="text-gray-600">Designation</Label><p className="font-medium">{viewingRegistration.designation}</p></div>
                                          )}
                                        </div>
                                      </div>
                                    )}

                                    {viewingRegistration.whyAttending && (
                                      <div>
                                        <h3 className="font-semibold text-lg mb-3">Why Attending</h3>
                                        <div className="p-4 bg-gray-50 rounded-lg">{viewingRegistration.whyAttending}</div>
                                      </div>
                                    )}

                                    {viewingRegistration.questionsForSpeaker && (
                                      <div>
                                        <h3 className="font-semibold text-lg mb-3">Questions for Speaker</h3>
                                        <div className="p-4 bg-gray-50 rounded-lg">{viewingRegistration.questionsForSpeaker}</div>
                                      </div>
                                    )}

                                    {(viewingRegistration.rating || viewingRegistration.feedback) && (
                                      <div>
                                        <h3 className="font-semibold text-lg mb-3">Feedback</h3>
                                        {viewingRegistration.rating && (
                                          <div className="mb-2">
                                            <Label className="text-gray-600">Rating</Label>
                                            <div className="flex items-center gap-1">
                                              {Array.from({ length: 5 }).map((_, i) => (
                                                <Star key={i} className={`w-5 h-5 ${i < viewingRegistration.rating! ? "text-amber-500 fill-amber-500" : "text-gray-300"}`} />
                                              ))}
                                            </div>
                                          </div>
                                        )}
                                        {viewingRegistration.feedback && (
                                          <div className="p-4 bg-gray-50 rounded-lg">{viewingRegistration.feedback}</div>
                                        )}
                                      </div>
                                    )}

                                    {/* Actions */}
                                    <div>
                                      <h3 className="font-semibold text-lg mb-3">Actions</h3>
                                      <div className="flex flex-wrap gap-2">

                                        {/* ── Attendance toggle — hidden for cancelled registrations ── */}
                                        {viewingRegistration.registrationStatus !== "cancelled" && (
                                          <Button
                                            size="sm"
                                            variant="outline"
                                            disabled={updatingAttendance}
                                            className="border-green-500 text-green-700 disabled:opacity-50"
                                            onClick={() =>
                                              handleMarkAttendance(
                                                viewingRegistration.id,
                                                !viewingRegistration.attended
                                              )
                                            }
                                          >
                                            {updatingAttendance
                                              ? <><Loader2 className="w-3 h-3 mr-1 animate-spin" />Updating...</>
                                              : viewingRegistration.attended
                                              ? "Mark as Not Attended"
                                              : "Mark as Attended"}
                                          </Button>
                                        )}

                                        {/* ── Status change dropdown — disabled options based on current state ── */}
                                        {(() => {
                                          const disabledStatuses = getDisabledStatuses(viewingRegistration);
                                          return (
                                            <Select
                                              value={viewingRegistration.registrationStatus}
                                              onValueChange={(val) =>
                                                handleUpdateRegistrationStatus(viewingRegistration.id, val)
                                              }
                                            >
                                              <SelectTrigger className="w-44 border-[#1164A3] text-[#1164A3]">
                                                <SelectValue placeholder="Change status" />
                                              </SelectTrigger>
                                              <SelectContent>
                                                {registrationStatusOptions.map((opt) => (
                                                  <SelectItem
                                                    key={opt.value}
                                                    value={opt.value}
                                                    disabled={disabledStatuses.includes(opt.value)}
                                                    className={disabledStatuses.includes(opt.value) ? "opacity-40 cursor-not-allowed" : ""}
                                                  >
                                                    {opt.label}
                                                    {opt.value === viewingRegistration.registrationStatus && " (current)"}
                                                  </SelectItem>
                                                ))}
                                              </SelectContent>
                                            </Select>
                                          );
                                        })()}
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