"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Users,
  Video,
  MapPin,
  Plus,
  Edit,
  Trash2,
  CheckCircle,
  XCircle,
  Clock,
  Mail,
  Phone,
  Award,
  TrendingUp,
  Loader2,
  Upload,
  Image as ImageIcon,
  Film,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GetPresenterApplicationsWithoutSeminar, RejectPresenterApplication } from "@/app/actions/presenter-seminar-application";
import { CreateSeminar, CreateSeminarForPresenter, DeleteSeminar, GetAllSeminars, UpdateSeminar } from "@/app/actions/seminar";
import { CreateWebinar, DeleteWebinar, GetAllWebinars, UpdateWebinar } from "@/app/actions/webinar";
import { UpdateWebinarAttendeeStatus } from "@/app/actions/webinar-attendee";
import { toast } from "sonner";
import { UpdateSeminarAttendeeStatus } from "@/app/actions/seminar-attendee";
import {  PresenterSeminar, Seminar, Webinar } from "@/lib/form-types";
import { Resource } from "@/lib/types";

type EditMode = {
  id: string;
  type: "webinar" | "seminar";
};

export default function EventManagementDashboard() {
  const [activeTab, setActiveTab] = useState("webinars");
  const [webinars, setWebinars] = useState<Webinar[]>([]);
  const [seminars, setSeminars] = useState<Seminar[]>([]);
  const [pendingPresenters, setPendingPresenters] = useState<PresenterSeminar[]>([]);
  const [showDialog, setShowDialog] = useState(false);
  const [showPresenterDialog, setShowPresenterDialog] = useState(false);
  const [selectedPresenter, setSelectedPresenter] = useState<PresenterSeminar | null>(null);
  const [eventType, setEventType] = useState<"webinar" | "seminar">("webinar");
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [editMode, setEditMode] = useState<EditMode | null>(null);
  const [images, setImages] = useState<Resource[]>([]);
  const [videos, setVideos] = useState<Resource[]>([]);

  // Form states
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    endDate: "",
    location: "",
    meetingLink: "",
    meetingPassword: "",
    platform: "",
    maxParticipants: "",
    maxCapacity: "",
    virtualCapacity: "",
    physicalCapacity: "",
    status: "upcoming",
  });

  // Fetch data on mount
  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    setLoading(true);
    try {
      const [webinarsRes, seminarsRes, presentersRes] = await Promise.all([
        GetAllWebinars(),
        GetAllSeminars(),
        GetPresenterApplicationsWithoutSeminar(),
      ]);

      if (webinarsRes.success && webinarsRes.data) {
        setWebinars(webinarsRes.data as Webinar[]);
      }
      if (seminarsRes.success && seminarsRes.data) {
        setSeminars(seminarsRes.data as Seminar[]);
      }
      if (presentersRes.success && presentersRes.data) {
        setPendingPresenters(presentersRes.data as PresenterSeminar[]);
      }
    } catch {
      toast.error("Failed to fetch events data");
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      date: "",
      endDate: "",
      location: "",
      meetingLink: "",
      meetingPassword: "",
      platform: "",
      maxParticipants: "",
      maxCapacity: "",
      virtualCapacity: "",
      physicalCapacity: "",
      status: "upcoming",
    });
    setEditMode(null);
    setImages([]);
    setVideos([]);
  };

  const validateForm = (): boolean => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const startDate = new Date(formData.date);
    
    // Validate start date is in the future
    if (startDate < today && !editMode) {
      toast.error("Start date must be in the future");
      return false;
    }

    // Validate end date is after start date
    if (formData.endDate) {
      const endDate = new Date(formData.endDate);
      if (endDate <= startDate) {
        toast.error("End date must be after start date");
        return false;
      }
    }

    // Validate seminar capacities
    if (eventType === "seminar") {
      const maxCap = parseInt(formData.maxCapacity) || 0;
      const virtualCap = parseInt(formData.virtualCapacity) || 0;
      const physicalCap = parseInt(formData.physicalCapacity) || 0;

      if (maxCap > 0 && (virtualCap + physicalCap) !== maxCap) {
        toast.error("Max capacity must equal the sum of virtual and physical capacities");
        return false;
      }

      if (maxCap === 0 && (virtualCap > 0 || physicalCap > 0)) {
        toast.error("Please set max capacity when using virtual/physical capacities");
        return false;
      }
    }

    // Validate media uploads for completed status
    if (formData.status === "completed") {
      if (images.length === 0 && videos.length === 0) {
        toast.error("Please add at least one image or video for completed events");
        return false;
      }
    }

    return true;
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const files = Array.from(e.target.files);
    files.forEach((file) => {
      setImages((prev) => [
        ...prev,
        {
          id: (Date.now() + Math.random()).toString(),
          file,
          name: file.name,
        },
      ]);
    });
  };

  const handleVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const files = Array.from(e.target.files);
    files.forEach((file) => {
      if (file.size < 10 * 1024 * 1024) { // 10MB limit
        setVideos((prev) => [
          ...prev,
          {
            id: (Date.now() + Math.random()).toString(),
            file,
            name: file.name,
            size: (file.size / 1024 / 1024).toFixed(2) + " MB",
          },
        ]);
      } else {
        toast.error("Video must be less than 10MB");
      }
    });
  };

  const removeImage = (id: string) => {
    setImages((prev) => prev.filter((img) => img.id !== id));
  };

  const removeVideo = (id: string) => {
    setVideos((prev) => prev.filter((video) => video.id !== id));
  };

  const handleOpenDialog = (type: "webinar" | "seminar", event?: Webinar | Seminar) => {
    setEventType(type);
    
    if (event) {
      // Edit mode
      setEditMode({ id: event.id, type });
      setFormData({
        title: event.title,
        description: event.description,
        date: new Date(event.date).toISOString().slice(0, 16),
        endDate: event.endDate ? new Date(event.endDate).toISOString().slice(0, 16) : "",
        location: "location" in event ? event.location : "",
        meetingLink: "meetingLink" in event ? event.meetingLink || "" : "",
        meetingPassword: "meetingPassword" in event ? event.meetingPassword || "" : "",
        platform: "platform" in event ? event.platform || "" : "",
        maxParticipants: "maxParticipants" in event ? event.maxParticipants?.toString() || "" : "",
        maxCapacity: "maxCapacity" in event ? event.maxCapacity?.toString() || "" : "",
        virtualCapacity: "virtualCapacity" in event ? event.virtualCapacity?.toString() || "" : "",
        physicalCapacity: "physicalCapacity" in event ? event.physicalCapacity?.toString() || "" : "",
        status: event.status,
      });
    } else {
      // Create mode
      resetForm();
    }
    
    setShowDialog(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setSaving(true);

    try {
      if (eventType === "webinar") {
        const webinarData = {
          title: formData.title,
          description: formData.description,
          date: new Date(formData.date),
          endDate: formData.endDate ? new Date(formData.endDate) : null,
          meetingLink: formData.meetingLink || null,
          meetingPassword: formData.meetingPassword || null,
          platform: formData.platform || null,
          maxParticipants: formData.maxParticipants ? parseInt(formData.maxParticipants) : null,
          status: formData.status,
        };

        const result = editMode
          ? await UpdateWebinar(editMode.id, webinarData, images, videos)
          : await CreateWebinar(webinarData);

        if (result.success) {
          toast.success(`Webinar ${editMode ? "updated" : "created"} successfully`);
          fetchAllData();
        } else {
          throw new Error(result.error);
        }
      } else {
        const seminarData = {
          title: formData.title,
          description: formData.description,
          date: new Date(formData.date),
          endDate: formData.endDate ? new Date(formData.endDate) : null,
          location: formData.location,
          maxCapacity: formData.maxCapacity ? parseInt(formData.maxCapacity) : null,
          virtualCapacity: formData.virtualCapacity ? parseInt(formData.virtualCapacity) : null,
          physicalCapacity: formData.physicalCapacity ? parseInt(formData.physicalCapacity) : null,
          status: formData.status,
        };

        const result = editMode
          ? await UpdateSeminar(editMode.id, seminarData, images, videos)
          : await CreateSeminar(seminarData);

        if (result.success) {
          toast.success(`Seminar ${editMode ? "updated" : "created"} successfully`);
          fetchAllData();
        } else {
          throw new Error(result.error);
        }
      }

      setShowDialog(false);
      resetForm();
    } catch {
      toast.error(`Failed to ${editMode ? "update" : "create"} event`);
    } finally {
      setSaving(false);
    }
  };

  const handleOpenPresenterDialog = (presenter: PresenterSeminar) => {
    setSelectedPresenter(presenter);
    // Pre-fill form with presenter data
    setFormData({
      title: presenter.presentation_title,
      description: presenter.presentation_topic,
      date: "",
      endDate: "",
      location: "",
      meetingLink: "",
      meetingPassword: "",
      platform: "",
      maxParticipants: "",
      maxCapacity: "100", // Default capacity
      virtualCapacity: "50",
      physicalCapacity: "50",
      status: "upcoming",
    });
    setShowPresenterDialog(true);
  };

  const handleApprovePresenter = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedPresenter) return;
    
    if (!validateForm()) {
      return;
    }

    setSaving(true);

    try {
      const seminarData = {
        title: formData.title,
        description: formData.description,
        date: new Date(formData.date),
        endDate: formData.endDate ? new Date(formData.endDate) : null,
        location: formData.location,
        maxCapacity: formData.maxCapacity ? parseInt(formData.maxCapacity) : null,
        virtualCapacity: formData.virtualCapacity ? parseInt(formData.virtualCapacity) : null,
        physicalCapacity: formData.physicalCapacity ? parseInt(formData.physicalCapacity) : null,
        status: formData.status,
      };

      // Use the CreateSeminarForPresenter action that handles both in a transaction
      const result = await CreateSeminarForPresenter(selectedPresenter.id, seminarData);

      if (result.success) {
        toast.success("Presenter approved and seminar created successfully!");
        fetchAllData();
        setShowPresenterDialog(false);
        setSelectedPresenter(null);
        resetForm();
        // Switch to seminars tab to show the new seminar
        setActiveTab("seminars");
      } else {
        throw new Error(result.error);
      }
    } catch {
      toast.error("Failed to approve presenter and create seminar");
    } finally {
      setSaving(false);
    }
  };

  const handleRejectPresenter = async (presenterId: string) => {
    if (!confirm("Are you sure you want to reject this presenter application?")) {
      return;
    }

    try {
      const result = await RejectPresenterApplication(presenterId);
      
      if (result.success) {
        toast.success("Presenter application rejected");
        fetchAllData();
      } else {
        throw new Error(result.error);
      }
    } catch {
      toast.error("Failed to reject presenter");
    }
  };

  const handleUpdateAttendeeStatus = async (
    attendeeId: string,
    status: string,
    type: "webinar" | "seminar"
  ) => {
    try {
      if (type === "webinar") {
        const result = await UpdateWebinarAttendeeStatus(attendeeId, status);
        
        if (result.success) {
          toast.success(result.promoted 
            ? `Attendee ${status}. Next waitlisted attendee promoted!`
            : `Attendee status updated to ${status}`);
          fetchAllData();
        } else {
          throw new Error(result.error);
        }
      } else {
        const result = await UpdateSeminarAttendeeStatus(attendeeId, status);
        
        if (result.success) {
          toast.success(result.promoted 
            ? `Attendee ${status}. Next waitlisted attendee promoted!`
            : `Attendee status updated to ${status}`);
          fetchAllData();
        } else {
          throw new Error(result.error);
        }
      }
    } catch {
      toast.error("Failed to update attendee status");
    }
  };

  const handleDeleteEvent = async (eventId: string, type: "webinar" | "seminar") => {
    if (!confirm("Are you sure you want to delete this event? This will also remove all attendees and presenters.")) {
      return;
    }

    try {
      if (type === "webinar") {
        const result = await DeleteWebinar(eventId);
        if (result.success) {
          toast.success("Webinar deleted successfully");
          fetchAllData();
        } else {
          throw new Error(result.error);
        }
      } else {
        const result = await DeleteSeminar(eventId);
        if (result.success) {
          toast.success("Seminar deleted successfully");
          fetchAllData();
        } else {
          throw new Error(result.error);
        }
      }
    } catch {
      toast.error("Failed to delete event");
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "upcoming":
        return "bg-[#1164A3] text-white";
      case "ongoing":
        return "bg-[#68B9C4] text-white";
      case "completed":
        return "bg-[#82B4CC] text-white";
      case "cancelled":
        return "bg-gray-400 text-white";
      default:
        return "bg-[#B0A3B3] text-white";
    }
  };

  const getRegistrationStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-[#68B9C4] text-white";
      case "waitlist":
        return "bg-[#B0A3B3] text-white";
      case "cancelled":
        return "bg-gray-400 text-white";
      default:
        return "bg-[#82B4CC] text-white";
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#B0A3B3]/10 to-[#82B4CC]/10 p-6 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-16 h-16 animate-spin text-[#1164A3] mx-auto mb-4" />
          <p className="text-gray-600 text-lg">Loading events...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#B0A3B3]/10 to-[#82B4CC]/10 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Event Management Dashboard
          </h1>
          <p className="text-gray-600">
            Manage webinars, seminars, attendees, and presenters
          </p>
        </div>

        {/* Main Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <div className="flex items-center justify-between mb-6">
            <TabsList className="bg-white border border-[#82B4CC]/30">
              <TabsTrigger value="webinars" className="data-[state=active]:bg-[#1164A3] data-[state=active]:text-white">
                <Video className="w-4 h-4 mr-2" />
                Webinars
              </TabsTrigger>
              <TabsTrigger value="seminars" className="data-[state=active]:bg-[#1164A3] data-[state=active]:text-white">
                <Users className="w-4 h-4 mr-2" />
                Seminars
              </TabsTrigger>
              <TabsTrigger value="presenters" className="data-[state=active]:bg-[#1164A3] data-[state=active]:text-white">
                <Award className="w-4 h-4 mr-2" />
                Presenter Applications
              </TabsTrigger>
            </TabsList>

            {/* Regular Create Event Dialog */}
            <Dialog open={showDialog} onOpenChange={(open) => {
              setShowDialog(open);
              if (!open) resetForm();
            }}>
              <DialogTrigger asChild>
                <Button 
                  onClick={() => handleOpenDialog(eventType)}
                  className="bg-gradient-to-r from-[#1164A3] to-[#68B9C4] text-white"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Create Event
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>
                    {editMode ? "Update" : "Create New"} Event
                  </DialogTitle>
                  <DialogDescription>
                    Fill in the details to {editMode ? "update" : "create"} a {eventType}
                  </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Event Type Selection - Only show in create mode */}
                  {!editMode && (
                    <div>
                      <Label className="pb-2">Event Type</Label>
                      <Select value={eventType} onValueChange={(value: "webinar" | "seminar") => setEventType(value)}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="webinar">Webinar</SelectItem>
                          <SelectItem value="seminar">Seminar</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  )}

                  {/* Common Fields */}
                  <div>
                    <Label className="pb-2">Title *</Label>
                    <Input
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      placeholder="Event title"
                      required
                    />
                  </div>

                  <div>
                    <Label className="pb-2">Description *</Label>
                    <Textarea
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Event description"
                      rows={4}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="pb-2">Start Date & Time *</Label>
                      <Input
                        type="datetime-local"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        required
                      />
                      <p className="text-xs text-gray-500 mt-1">Must be in the future</p>
                    </div>
                    <div>
                      <Label className="pb-2">End Date & Time</Label>
                      <Input
                        type="datetime-local"
                        value={formData.endDate}
                        onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                      />
                      <p className="text-xs text-gray-500 mt-1">Must be after start date</p>
                    </div>
                  </div>

                  <div>
                    <Label className="pb-2">Status</Label>
                    <Select value={formData.status} onValueChange={(value: string) => setFormData({ ...formData, status: value })}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="upcoming">Upcoming</SelectItem>
                        <SelectItem value="ongoing">Ongoing</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                        <SelectItem value="cancelled">Cancelled</SelectItem>
                      </SelectContent>
                    </Select>
                    {formData.status === "completed" && (
                      <p className="text-xs text-amber-600 mt-1">⚠️ Requires at least 1 image or video</p>
                    )}
                  </div>

                  {/* Webinar-specific fields */}
                  {eventType === "webinar" && (
                    <>
                      <div>
                        <Label className="pb-2">Platform</Label>
                        <Select value={formData.platform} onValueChange={(value) => setFormData({ ...formData, platform: value })}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select platform" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="zoom">Zoom</SelectItem>
                            <SelectItem value="google_meet">Google Meet</SelectItem>
                            <SelectItem value="teams">Microsoft Teams</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label className="pb-2">Meeting Link</Label>
                        <Input
                          value={formData.meetingLink}
                          onChange={(e) => setFormData({ ...formData, meetingLink: e.target.value })}
                          placeholder="https://..."
                        />
                      </div>

                      <div>
                        <Label className="pb-2">Meeting Password</Label>
                        <Input
                          value={formData.meetingPassword}
                          onChange={(e) => setFormData({ ...formData, meetingPassword: e.target.value })}
                          placeholder="Optional"
                        />
                      </div>

                      <div>
                        <Label className="pb-2">Max Participants</Label>
                        <Input
                          type="number"
                          value={formData.maxParticipants}
                          onChange={(e) => setFormData({ ...formData, maxParticipants: e.target.value })}
                          placeholder="100"
                          min="1"
                        />
                      </div>
                    </>
                  )}

                  {/* Seminar-specific fields */}
                  {eventType === "seminar" && (
                    <>
                      <div>
                        <Label className="pb-2">Location *</Label>
                        <Input
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          placeholder="Physical address"
                          required
                        />
                      </div>

                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <Label className="pb-2">Max Capacity *</Label>
                          <Input
                            type="number"
                            value={formData.maxCapacity}
                            onChange={(e) => setFormData({ ...formData, maxCapacity: e.target.value })}
                            placeholder="Total"
                            min="1"
                          />
                          <p className="text-xs text-gray-500 mt-1">Total capacity</p>
                        </div>
                        <div>
                          <Label className="pb-2">Virtual Capacity</Label>
                          <Input
                            type="number"
                            value={formData.virtualCapacity}
                            onChange={(e) => setFormData({ ...formData, virtualCapacity: e.target.value })}
                            placeholder="Virtual"
                            min="0"
                          />
                        </div>
                        <div>
                          <Label className="pb-2">Physical Capacity</Label>
                          <Input
                            type="number"
                            value={formData.physicalCapacity}
                            onChange={(e) => setFormData({ ...formData, physicalCapacity: e.target.value })}
                            placeholder="Physical"
                            min="0"
                          />
                        </div>
                      </div>
                      <p className="text-xs text-amber-600">⚠️ Virtual + Physical must equal Max Capacity</p>
                    </>
                  )}

                  {/* Media Upload for Completed Events */}
                  {formData.status === "completed" && (
                    <div className="space-y-4 border-t pt-4">
                      <h4 className="font-semibold text-gray-800">Event Media (Required for Completed Events)</h4>
                      
                      {/* Images */}
                      <div>
                        <Label className="pb-2 flex items-center gap-2">
                          <ImageIcon className="w-4 h-4" />
                          Images
                        </Label>
                        <Input
                          type="file"
                          accept="image/*"
                          multiple
                          onChange={handleImageUpload}
                          className="cursor-pointer"
                        />
                        {images.length > 0 && (
                          <div className="mt-2 space-y-2">
                            {images.map((img) => (
                              <div key={img.id} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                                <span className="text-sm truncate">{img.name}</span>
                                <Button
                                  type="button"
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => removeImage(img.id)}
                                >
                                  <Trash2 className="w-4 h-4 text-red-500" />
                                </Button>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Videos */}
                      <div>
                        <Label className="pb-2 flex items-center gap-2">
                          <Film className="w-4 h-4" />
                          Videos (Max 10MB each)
                        </Label>
                        <Input
                          type="file"
                          accept="video/*"
                          multiple
                          onChange={handleVideoUpload}
                          className="cursor-pointer"
                        />
                        {videos.length > 0 && (
                          <div className="mt-2 space-y-2">
                            {videos.map((vid) => (
                              <div key={vid.id} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                                <div className="flex-1">
                                  <span className="text-sm truncate block">{vid.name}</span>
                                  <span className="text-xs text-gray-500">{vid.size}</span>
                                </div>
                                <Button
                                  type="button"
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => removeVideo(vid.id)}
                                >
                                  <Trash2 className="w-4 h-4 text-red-500" />
                                </Button>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  <div className="flex justify-end gap-3 pt-4">
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={() => {
                        setShowDialog(false);
                        resetForm();
                      }} 
                      disabled={saving}
                    >
                      Cancel
                    </Button>
                    <Button 
                      type="submit" 
                      className="bg-gradient-to-r from-[#1164A3] to-[#68B9C4] text-white" 
                      disabled={saving}
                    >
                      {saving ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          {editMode ? "Updating..." : "Creating..."}
                        </>
                      ) : (
                        editMode ? "Update Event" : "Create Event"
                      )}
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          {/* Presenter Approval Dialog */}
          <Dialog open={showPresenterDialog} onOpenChange={(open) => {
            setShowPresenterDialog(open);
            if (!open) {
              setSelectedPresenter(null);
              resetForm();
            }
          }}>
            <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Create Seminar for {selectedPresenter?.full_name}</DialogTitle>
                <DialogDescription>
                  Set up the seminar details. The presenter will be automatically assigned and approved.
                </DialogDescription>
              </DialogHeader>

              {selectedPresenter && (
                <div className="mb-4 p-4 bg-[#82B4CC]/10 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Presenter Information</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div><span className="font-medium">Name:</span> {selectedPresenter.full_name}</div>
                    <div><span className="font-medium">Email:</span> {selectedPresenter.email}</div>
                    <div className="col-span-2"><span className="font-medium">Organization:</span> {selectedPresenter.organization_name}</div>
                    <div className="col-span-2"><span className="font-medium">Presentation:</span> {selectedPresenter.presentation_title}</div>
                  </div>
                </div>
              )}

              <form onSubmit={handleApprovePresenter} className="space-y-4">
                <div>
                  <Label className="pb-2">Seminar Title *</Label>
                  <Input
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="Seminar title"
                    required
                  />
                </div>

                <div>
                  <Label className="pb-2">Description *</Label>
                  <Textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Seminar description"
                    rows={4}
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="pb-2">Start Date & Time *</Label>
                    <Input
                      type="datetime-local"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      required
                    />
                    <p className="text-xs text-gray-500 mt-1">Must be in the future</p>
                  </div>
                  <div>
                    <Label className="pb-2">End Date & Time</Label>
                    <Input
                      type="datetime-local"
                      value={formData.endDate}
                      onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <Label className="pb-2">Location *</Label>
                  <Input
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="Physical address"
                    required
                  />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <Label className="pb-2">Max Capacity *</Label>
                    <Input
                      type="number"
                      value={formData.maxCapacity}
                      onChange={(e) => setFormData({ ...formData, maxCapacity: e.target.value })}
                      placeholder="Total"
                      min="1"
                      required
                    />
                  </div>
                  <div>
                    <Label className="pb-2">Virtual Capacity</Label>
                    <Input
                      type="number"
                      value={formData.virtualCapacity}
                      onChange={(e) => setFormData({ ...formData, virtualCapacity: e.target.value })}
                      placeholder="Virtual"
                      min="0"
                    />
                  </div>
                  <div>
                    <Label className="pb-2">Physical Capacity</Label>
                    <Input
                      type="number"
                      value={formData.physicalCapacity}
                      onChange={(e) => setFormData({ ...formData, physicalCapacity: e.target.value })}
                      placeholder="Physical"
                      min="0"
                    />
                  </div>
                </div>
                <p className="text-xs text-amber-600">⚠️ Virtual + Physical must equal Max Capacity</p>

                <div className="flex justify-end gap-3 pt-4">
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => {
                      setShowPresenterDialog(false);
                      setSelectedPresenter(null);
                      resetForm();
                    }} 
                    disabled={saving}
                  >
                    Cancel
                  </Button>
                  <Button 
                    type="submit" 
                    className="bg-gradient-to-r from-[#68B9C4] to-[#82B4CC] text-white" 
                    disabled={saving}
                  >
                    {saving ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Creating & Approving...
                      </>
                    ) : (
                      <>
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Create Seminar & Approve Presenter
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>

          {/* Webinars Tab */}
          <TabsContent value="webinars">
            <div className="grid grid-cols-1 gap-6">
              {webinars.length === 0 ? (
                <Card className="border-[#82B4CC]/30">
                  <CardContent className="p-12 text-center">
                    <Video className="w-16 h-16 mx-auto mb-4 text-[#68B9C4]" />
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      No Webinars Yet
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Create your first webinar to get started
                    </p>
                    <Button
                      onClick={() => handleOpenDialog("webinar")}
                      className="bg-gradient-to-r from-[#1164A3] to-[#68B9C4] text-white"
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Create Webinar
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                webinars.map((webinar) => (
                  <Card key={webinar.id} className="border-[#82B4CC]/30 hover:border-[#1164A3] transition-colors">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-2xl mb-2">{webinar.title}</CardTitle>
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {new Date(webinar.date).toLocaleDateString()}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {new Date(webinar.date).toLocaleTimeString()}
                            </div>
                            {webinar.platform && (
                              <div className="flex items-center gap-1">
                                <Video className="w-4 h-4" />
                                {webinar.platform}
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge className={getStatusColor(webinar.status)}>
                            {webinar.status}
                          </Badge>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="border-[#1164A3] text-[#1164A3] hover:bg-[#1164A3] hover:text-white"
                            onClick={() => handleOpenDialog("webinar", webinar)}
                          >
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                            onClick={() => handleDeleteEvent(webinar.id, "webinar")}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{webinar.description}</p>

                      {/* Attendees Section */}
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold text-gray-800 flex items-center gap-2">
                            <Users className="w-5 h-5 text-[#1164A3]" />
                            Registered Attendees ({webinar.attendees.length}
                            {webinar.maxParticipants && `/${webinar.maxParticipants}`})
                          </h4>
                          {webinar.maxParticipants && (
                            <div className="text-sm text-gray-600">
                              <TrendingUp className="w-4 h-4 inline mr-1" />
                              {Math.round((webinar.attendees.length / webinar.maxParticipants) * 100)}% Full
                            </div>
                          )}
                        </div>

                        {webinar.attendees.length > 0 ? (
                          <div className="space-y-2 max-h-64 overflow-y-auto">
                            {webinar.attendees.map((attendee) => (
                              <div
                                key={attendee.id}
                                className="flex items-center justify-between p-3 bg-[#82B4CC]/5 rounded-lg border border-[#82B4CC]/20"
                              >
                                <div className="flex-1">
                                  <div className="font-medium text-gray-800">{attendee.full_name}</div>
                                  <div className="flex items-center gap-4 text-sm text-gray-600">
                                    <span className="flex items-center gap-1">
                                      <Mail className="w-3 h-3" />
                                      {attendee.email}
                                    </span>
                                    <span className="flex items-center gap-1">
                                      <Phone className="w-3 h-3" />
                                      {attendee.phone}
                                    </span>
                                  </div>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Badge className={getRegistrationStatusColor(attendee.registration_status)}>
                                    {attendee.registration_status}
                                  </Badge>
                                  {attendee.registration_status === "waitlist" && (
                                    <Button
                                      size="sm"
                                      onClick={() => handleUpdateAttendeeStatus(attendee.id, "confirmed", "webinar")}
                                      className="bg-[#68B9C4] text-white hover:bg-[#1164A3]"
                                    >
                                      <CheckCircle className="w-4 h-4" />
                                    </Button>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <p className="text-center text-gray-500 py-4">No registrations yet</p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </TabsContent>

          {/* Seminars Tab */}
          <TabsContent value="seminars">
            <div className="grid grid-cols-1 gap-6">
              {seminars.length === 0 ? (
                <Card className="border-[#82B4CC]/30">
                  <CardContent className="p-12 text-center">
                    <Users className="w-16 h-16 mx-auto mb-4 text-[#68B9C4]" />
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      No Seminars Yet
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Create your first seminar to get started
                    </p>
                    <Button
                      onClick={() => handleOpenDialog("seminar")}
                      className="bg-gradient-to-r from-[#1164A3] to-[#68B9C4] text-white"
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Create Seminar
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                seminars.map((seminar) => (
                  <Card key={seminar.id} className="border-[#82B4CC]/30 hover:border-[#1164A3] transition-colors">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-2xl mb-2">{seminar.title}</CardTitle>
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {new Date(seminar.date).toLocaleDateString()}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {new Date(seminar.date).toLocaleTimeString()}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {seminar.location}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge className={getStatusColor(seminar.status)}>
                            {seminar.status}
                          </Badge>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="border-[#1164A3] text-[#1164A3] hover:bg-[#1164A3] hover:text-white"
                            onClick={() => handleOpenDialog("seminar", seminar)}
                          >
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                            onClick={() => handleDeleteEvent(seminar.id, "seminar")}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{seminar.description}</p>

                      {/* Capacity Info */}
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="bg-[#1164A3]/5 p-3 rounded-lg border border-[#1164A3]/20">
                          <div className="text-sm text-gray-600 mb-1">Total Capacity</div>
                          <div className="text-2xl font-bold text-[#1164A3]">
                            {seminar.maxCapacity || "∞"}
                          </div>
                        </div>
                        <div className="bg-[#68B9C4]/5 p-3 rounded-lg border border-[#68B9C4]/20">
                          <div className="text-sm text-gray-600 mb-1">Virtual Capacity</div>
                          <div className="text-2xl font-bold text-[#68B9C4]">
                            {seminar.virtualCapacity || "∞"}
                          </div>
                        </div>
                        <div className="bg-[#82B4CC]/5 p-3 rounded-lg border border-[#82B4CC]/20">
                          <div className="text-sm text-gray-600 mb-1">Physical Capacity</div>
                          <div className="text-2xl font-bold text-[#82B4CC]">
                            {seminar.physicalCapacity || "∞"}
                          </div>
                        </div>
                      </div>

                      {/* Attendees & Presenters Tabs */}
                      <Tabs defaultValue="attendees">
                        <TabsList className="bg-[#82B4CC]/10">
                          <TabsTrigger value="attendees" className="data-[state=active]:bg-[#1164A3] data-[state=active]:text-white">
                            Attendees ({seminar.attendees.length})
                          </TabsTrigger>
                          <TabsTrigger value="presenters" className="data-[state=active]:bg-[#1164A3] data-[state=active]:text-white">
                            Presenters ({seminar.presenters.length})
                          </TabsTrigger>
                        </TabsList>

                        <TabsContent value="attendees" className="mt-4">
                          {seminar.attendees.length > 0 ? (
                            <div className="space-y-2 max-h-64 overflow-y-auto">
                              {seminar.attendees.map((attendee) => (
                                <div
                                  key={attendee.id}
                                  className="flex items-center justify-between p-3 bg-[#82B4CC]/5 rounded-lg border border-[#82B4CC]/20"
                                >
                                  <div className="flex-1">
                                    <div className="font-medium text-gray-800">{attendee.full_name}</div>
                                    <div className="flex items-center gap-4 text-sm text-gray-600">
                                      <span className="flex items-center gap-1">
                                        <Mail className="w-3 h-3" />
                                        {attendee.email}
                                      </span>
                                      <span className="flex items-center gap-1">
                                        <Phone className="w-3 h-3" />
                                        {attendee.phone}
                                      </span>
                                      <Badge variant="outline" className="text-xs">
                                        {attendee.attendance_mode}
                                      </Badge>
                                    </div>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <Badge className={getRegistrationStatusColor(attendee.registration_status)}>
                                      {attendee.registration_status}
                                    </Badge>
                                    {attendee.registration_status === "waitlist" && (
                                      <Button
                                        size="sm"
                                        onClick={() => handleUpdateAttendeeStatus(attendee.id, "confirmed", "seminar")}
                                        className="bg-[#68B9C4] text-white hover:bg-[#1164A3]"
                                      >
                                        <CheckCircle className="w-4 h-4" />
                                      </Button>
                                    )}
                                  </div>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <p className="text-center text-gray-500 py-4">No registrations yet</p>
                          )}
                        </TabsContent>

                        <TabsContent value="presenters" className="mt-4">
                          {seminar.presenters.length > 0 ? (
                            <div className="space-y-3 max-h-64 overflow-y-auto">
                              {seminar.presenters.map((presenter) => (
                                <div
                                  key={presenter.id}
                                  className="p-4 bg-[#82B4CC]/5 rounded-lg border border-[#82B4CC]/20"
                                >
                                  <div className="flex items-start justify-between mb-3">
                                    <div>
                                      <div className="font-semibold text-gray-800 text-lg">
                                        {presenter.full_name}
                                      </div>
                                      <div className="text-sm text-gray-600">
                                        {presenter.current_designation} at {presenter.organization_name}
                                      </div>
                                    </div>
                                    <Badge className={
                                      presenter.application_status === "pending"
                                        ? "bg-[#B0A3B3] text-white"
                                        : presenter.application_status === "approved"
                                        ? "bg-[#68B9C4] text-white"
                                        : "bg-gray-400 text-white"
                                    }>
                                      {presenter.application_status}
                                    </Badge>
                                  </div>
                                  <div className="space-y-2 text-sm">
                                    <div>
                                      <span className="font-medium">Presentation: </span>
                                      {presenter.presentation_title}
                                    </div>
                                    <div>
                                      <span className="font-medium">Topic: </span>
                                      {presenter.presentation_topic}
                                    </div>
                                    <div className="flex items-center gap-4 text-gray-600">
                                      <span className="flex items-center gap-1">
                                        <Mail className="w-3 h-3" />
                                        {presenter.email}
                                      </span>
                                      <span className="flex items-center gap-1">
                                        <Phone className="w-3 h-3" />
                                        {presenter.phone}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <p className="text-center text-gray-500 py-4">No presenter applications yet</p>
                          )}
                        </TabsContent>
                      </Tabs>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </TabsContent>

          {/* Presenter Applications Tab */}
          <TabsContent value="presenters">
            <Card className="border-[#82B4CC]/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-6 h-6 text-[#1164A3]" />
                  Pending Presenter Applications ({pendingPresenters.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Review presenter applications without assigned seminars. Create a seminar to approve them.
                </p>
                
                {pendingPresenters.length === 0 ? (
                  <div className="text-center text-gray-500 py-12">
                    <Award className="w-16 h-16 mx-auto mb-4 text-[#68B9C4]" />
                    <p>No pending presenter applications</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {pendingPresenters.map((presenter) => (
                      <div
                        key={presenter.id}
                        className="p-6 bg-[#82B4CC]/5 rounded-lg border border-[#82B4CC]/20 hover:border-[#1164A3] transition-colors"
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <div className="font-semibold text-gray-800 text-xl mb-1">
                              {presenter.full_name}
                            </div>
                            <div className="text-sm text-gray-600">
                              {presenter.current_designation} at {presenter.organization_name}
                            </div>
                            <div className="text-sm text-gray-500 mt-1">
                              {presenter.country}
                            </div>
                          </div>
                          <Badge className="bg-[#B0A3B3] text-white">
                            {presenter.application_status}
                          </Badge>
                        </div>

                        <div className="space-y-3 mb-4">
                          <div>
                            <span className="font-medium text-gray-700">Presentation Title: </span>
                            <span className="text-gray-600">{presenter.presentation_title}</span>
                          </div>
                          <div>
                            <span className="font-medium text-gray-700">Topic: </span>
                            <span className="text-gray-600">{presenter.presentation_topic}</span>
                          </div>
                          <div>
                            <span className="font-medium text-gray-700">Areas of Expertise: </span>
                            <span className="text-gray-600">{presenter.areas_of_expertise}</span>
                          </div>
                          <div>
                            <span className="font-medium text-gray-700">Why Present: </span>
                            <span className="text-gray-600">{presenter.why_present}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                          <span className="flex items-center gap-1">
                            <Mail className="w-4 h-4" />
                            {presenter.email}
                          </span>
                          <span className="flex items-center gap-1">
                            <Phone className="w-4 h-4" />
                            {presenter.phone}
                          </span>
                          {presenter.linkedin_profile && (
                            <a 
                              href={presenter.linkedin_profile} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-[#1164A3] hover:underline"
                            >
                              LinkedIn Profile
                            </a>
                          )}
                        </div>

                        <div className="flex gap-3">
                          <Button
                            onClick={() => handleOpenPresenterDialog(presenter)}
                            className="bg-[#68B9C4] text-white hover:bg-[#1164A3] flex-1"
                          >
                            <CheckCircle className="w-4 h-4 mr-2" />
                            Create Seminar & Approve
                          </Button>
                          <Button
                            variant="outline"
                            onClick={() => handleRejectPresenter(presenter.id)}
                            className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white flex-1"
                          >
                            <XCircle className="w-4 h-4 mr-2" />
                            Reject
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}