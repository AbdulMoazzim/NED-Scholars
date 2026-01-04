"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  Users,
  MapPin,
  Calendar,
  Clock,
  Video as VideoIcon,
  ArrowLeft,
  FileText,
  AlertCircle,
  Loader2,
  Image as ImageIcon,
  User,
  Mail,
  Award,
  Monitor,
  Building2,
  Plus,
  Trash2,
  Upload,
} from "lucide-react";
import { GetSeminar } from "@/app/actions/seminar";
import { GetWebinar } from "@/app/actions/webinar";
import {
  addImage,
  addVideo,
  deleteImage,
  deleteVideo,
} from "@/app/actions/resource";
import { toast } from "sonner";
import Image from "next/image";
import type { Seminar, Webinar } from "@/lib/form-types";
import { useSession } from "@/lib/auth-client";

type EventType = "seminar" | "webinar";

interface DetailPageProps {
  id: string;
  type: EventType;
}

export default function EventDetailPage({ id, type }: DetailPageProps) {
  const router = useRouter();
  const session = useSession();
  const [event, setEvent] = useState<Seminar | Webinar | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const [activeMediaTab, setActiveMediaTab] = useState<"images" | "videos">(
    "images"
  );

  // Media management states
  const [showAddImageDialog, setShowAddImageDialog] = useState(false);
  const [showAddVideoDialog, setShowAddVideoDialog] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [uploadingVideo, setUploadingVideo] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [mediaToDelete, setMediaToDelete] = useState<{
    id: string;
    publicId: string;
    type: "image" | "video";
  } | null>(null);

  // Check if user is admin
  const isAdmin = session.data?.user?.role === "admin";

  useEffect(() => {
    fetchEvent();
  }, [id, type]);

  const fetchEvent = async () => {
    setLoading(true);
    try {
      const result =
        type === "seminar" ? await GetSeminar(id) : await GetWebinar(id);

      if (result.success && result.data) {
        setEvent(result.data as Seminar | Webinar);
      } else {
        toast.error(`${type === "seminar" ? "Seminar" : "Webinar"} not found`);
        router.push(`/${type}s`);
      }
    } catch (error) {
      toast.error("Failed to load event details");
      console.error("Error fetching event:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddImage = async () => {
    if (!imageFile || !event) return;

    setUploadingImage(true);
    try {
      const result = await addImage(
        {id: (Date.now() + Math.random()).toString(), file: imageFile, name: imageFile.name },
        type,
        event.id,
        `${type}s`
      );

      if (result.success) {
        toast.success("Image uploaded successfully!");
        setShowAddImageDialog(false);
        setImageFile(null);
        fetchEvent(); // Refresh event data
      } else {
        toast.error(result.error || "Failed to upload image");
      }
    } catch (error) {
      toast.error("An error occurred while uploading image");
      console.error("Upload error:", error);
    } finally {
      setUploadingImage(false);
    }
  };

  const handleAddVideo = async () => {
    if (!videoFile || !event) return;

    setUploadingVideo(true);
    try {
      const result = await addVideo(
        {id: (Date.now() + Math.random()).toString(), file: videoFile, name: videoFile.name },
        type,
        event.id,
        `${type}s`
      );

      if (result.success) {
        toast.success("Video uploaded successfully!");
        setShowAddVideoDialog(false);
        setVideoFile(null);
        fetchEvent(); // Refresh event data
      } else {
        toast.error(result.error || "Failed to upload video");
      }
    } catch (error) {
      toast.error("An error occurred while uploading video");
      console.error("Upload error:", error);
    } finally {
      setUploadingVideo(false);
    }
  };

  const handleDeleteMedia = async () => {
    if (!mediaToDelete) return;

    try {
      const result =
        mediaToDelete.type === "image"
          ? await deleteImage(mediaToDelete.id, mediaToDelete.publicId)
          : await deleteVideo(mediaToDelete.id, mediaToDelete.publicId);

      if (result.success) {
        toast.success(
          `${mediaToDelete.type === "image" ? "Image" : "Video"} deleted successfully!`
        );
        setDeleteDialogOpen(false);
        setMediaToDelete(null);
        fetchEvent(); // Refresh event data
        
        // Reset selected image if it was deleted
        if (mediaToDelete.type === "image" && selectedImage > 0) {
          setSelectedImage(0);
        }
      } else {
        toast.error(
          `Failed to delete ${mediaToDelete.type === "image" ? "image" : "video"}`
        );
      }
    } catch (error) {
      toast.error("An error occurred while deleting media");
      console.error("Delete error:", error);
    }
  };

  const confirmDelete = (
    id: string,
    publicId: string,
    type: "image" | "video"
  ) => {
    setMediaToDelete({ id, publicId, type });
    setDeleteDialogOpen(true);
  };

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      upcoming: "bg-[#1164A3] text-white",
      ongoing: "bg-[#68B9C4] text-white",
      completed: "bg-[#82B4CC] text-white",
      cancelled: "bg-gray-400 text-white",
      postponed: "bg-amber-500 text-white",
    };
    return colors[status] || "bg-gray-400 text-white";
  };

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatTime = (date: Date) => {
    return new Date(date).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const calculateDuration = () => {
    if (!event || !event.endDate) return "TBD";
    const diff =
      new Date(event.endDate).getTime() - new Date(event.date).getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    return `${hours}h ${minutes}m`;
  };

  const isRegistrationOpen = () => {
    if (!event) return false;
    return event.status === "upcoming" && new Date(event.date) > new Date();
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
        <div className="text-center">
          <Loader2 className="w-16 h-16 animate-spin text-[#1164A3] mx-auto mb-4" />
          <p className="text-gray-600 text-lg">Loading event details...</p>
        </div>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
        <Card className="max-w-md">
          <CardContent className="p-12 text-center">
            <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Event Not Found
            </h2>
            <p className="text-gray-600 mb-6">
              The event you&apos;re looking for doesn&apos;t exist.
            </p>
            <Button
              onClick={() => router.push(`/programs/${type}s`)}
              className="bg-gradient-to-r from-[#1164A3] to-[#68B9C4] text-white"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to {type === "seminar" ? "Seminars" : "Webinars"}
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const getAvailableSeats = () => {
    if (type === "webinar") {
      const webinar = event as Webinar;
      return (webinar.maxParticipants || 0) - webinar.attendees.length;
    } else {
      const seminar = event as Seminar;
      const physicalAttendees = seminar.attendees.filter(
        (a) => a.attendance_mode === "physical"
      ).length;
      return (seminar.physicalCapacity || 0) - physicalAttendees;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1164A3] via-[#68B9C4] to-[#82B4CC] text-white py-16">
        <div className="container mx-auto px-4">
          <Button
            variant="ghost"
            onClick={() => router.push(`/programs/${type}s`)}
            className="text-white hover:bg-white/20 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to {type === "seminar" ? "Seminars" : "Webinars"}
          </Button>

          <div className="max-w-5xl mx-auto">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Badge className={getStatusColor(event.status)}>
                {event.status.toUpperCase()}
              </Badge>
              <Badge className="bg-white/20 text-white border-white/30">
                {type === "seminar" ? (
                  <Building2 className="w-3 h-3 mr-1" />
                ) : (
                  <VideoIcon className="w-3 h-3 mr-1" />
                )}
                {type === "seminar" ? "In-Person" : "Online"}
              </Badge>
            </div>
            <h1 className="text-5xl font-bold mb-4">{event.title}</h1>
            <div className="flex flex-wrap items-center gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />{" "}
                <span className="text-xl">{(event as Seminar).location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{formatDate(event.date)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{formatTime(event.date)}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column - Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Media Section */}
                <Card className="border-[#82B4CC]/30 shadow-lg overflow-hidden">
                  <CardContent className="p-0">
                    <Tabs
                      value={activeMediaTab}
                      onValueChange={(val) =>
                        setActiveMediaTab(val as "images" | "videos")
                      }
                    >
                      <div className="bg-gray-50 px-6 py-4 border-b">
                        <div className="flex items-center justify-between">
                          <TabsList className="grid grid-cols-2 w-full max-w-md">
                            <TabsTrigger value="images">
                              <ImageIcon className="w-4 h-4 mr-2" />
                              Images ({event.images?.length || 0})
                            </TabsTrigger>
                            <TabsTrigger value="videos">
                              <VideoIcon className="w-4 h-4 mr-2" />
                              Videos ({event.videos?.length || 0})
                            </TabsTrigger>
                          </TabsList>

                          {/* Add Media Buttons (Admin Only) */}
                          {isAdmin && (
                            <div className="flex gap-2">
                              {activeMediaTab === "images" && (
                                <Dialog
                                  open={showAddImageDialog}
                                  onOpenChange={setShowAddImageDialog}
                                >
                                  <DialogTrigger asChild>
                                    <Button
                                      size="sm"
                                      className="bg-gradient-to-r from-[#1164A3] to-[#68B9C4]"
                                    >
                                      <Plus className="w-4 h-4 mr-2" />
                                      Add Image
                                    </Button>
                                  </DialogTrigger>
                                  <DialogContent>
                                    <DialogHeader>
                                      <DialogTitle>Upload Image</DialogTitle>
                                      <DialogDescription>
                                        Add a new image to this event
                                      </DialogDescription>
                                    </DialogHeader>
                                    <div className="space-y-4 py-4">
                                      <div>
                                        <Label htmlFor="image-upload">
                                          Select Image
                                        </Label>
                                        <Input
                                          id="image-upload"
                                          type="file"
                                          accept="image/*"
                                          onChange={(e) =>
                                            setImageFile(
                                              e.target.files?.[0] || null
                                            )
                                          }
                                          className="mt-2"
                                        />
                                      </div>
                                      {imageFile && (
                                        <div className="p-4 bg-gray-50 rounded border">
                                          <p className="text-sm text-gray-600">
                                            Selected: {imageFile.name}
                                          </p>
                                        </div>
                                      )}
                                    </div>
                                    <div className="flex gap-2">
                                      <Button
                                        onClick={handleAddImage}
                                        disabled={!imageFile || uploadingImage}
                                        className="flex-1 bg-gradient-to-r from-[#1164A3] to-[#68B9C4]"
                                      >
                                        {uploadingImage ? (
                                          <>
                                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                            Uploading...
                                          </>
                                        ) : (
                                          <>
                                            <Upload className="w-4 h-4 mr-2" />
                                            Upload
                                          </>
                                        )}
                                      </Button>
                                      <Button
                                        variant="outline"
                                        onClick={() => {
                                          setShowAddImageDialog(false);
                                          setImageFile(null);
                                        }}
                                        className="flex-1"
                                      >
                                        Cancel
                                      </Button>
                                    </div>
                                  </DialogContent>
                                </Dialog>
                              )}

                              {activeMediaTab === "videos" && (
                                <Dialog
                                  open={showAddVideoDialog}
                                  onOpenChange={setShowAddVideoDialog}
                                >
                                  <DialogTrigger asChild>
                                    <Button
                                      size="sm"
                                      className="bg-gradient-to-r from-[#1164A3] to-[#68B9C4]"
                                    >
                                      <Plus className="w-4 h-4 mr-2" />
                                      Add Video
                                    </Button>
                                  </DialogTrigger>
                                  <DialogContent>
                                    <DialogHeader>
                                      <DialogTitle>Upload Video</DialogTitle>
                                      <DialogDescription>
                                        Add a new video to this event
                                      </DialogDescription>
                                    </DialogHeader>
                                    <div className="space-y-4 py-4">
                                      <div>
                                        <Label htmlFor="video-upload">
                                          Select Video
                                        </Label>
                                        <Input
                                          id="video-upload"
                                          type="file"
                                          accept="video/*"
                                          onChange={(e) =>
                                            setVideoFile(
                                              e.target.files?.[0] || null
                                            )
                                          }
                                          className="mt-2"
                                        />
                                      </div>
                                      {videoFile && (
                                        <div className="p-4 bg-gray-50 rounded border">
                                          <p className="text-sm text-gray-600">
                                            Selected: {videoFile.name}
                                          </p>
                                        </div>
                                      )}
                                    </div>
                                    <div className="flex gap-2">
                                      <Button
                                        onClick={handleAddVideo}
                                        disabled={!videoFile || uploadingVideo}
                                        className="flex-1 bg-gradient-to-r from-[#1164A3] to-[#68B9C4]"
                                      >
                                        {uploadingVideo ? (
                                          <>
                                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                            Uploading...
                                          </>
                                        ) : (
                                          <>
                                            <Upload className="w-4 h-4 mr-2" />
                                            Upload
                                          </>
                                        )}
                                      </Button>
                                      <Button
                                        variant="outline"
                                        onClick={() => {
                                          setShowAddVideoDialog(false);
                                          setVideoFile(null);
                                        }}
                                        className="flex-1"
                                      >
                                        Cancel
                                      </Button>
                                    </div>
                                  </DialogContent>
                                </Dialog>
                              )}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Images Tab */}
                      <TabsContent value="images" className="p-0 m-0">
                        {event.images && event.images.length > 0 ? (
                          <div>
                            <div className="relative h-96 bg-gray-100 group">
                              <Image
                                src={event.images[selectedImage].url}
                                alt={
                                  event.images[selectedImage].alt || event.title
                                }
                                fill
                                className="object-cover"
                              />
                              {/* Delete Button (Admin Only) */}
                              {isAdmin && (
                                <Button
                                  size="sm"
                                  variant="destructive"
                                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                                  onClick={() =>
                                    confirmDelete(
                                      event.images![selectedImage].id,
                                      event.images![selectedImage].public_id,
                                      "image"
                                    )
                                  }
                                >
                                  <Trash2 className="w-4 h-4 mr-2" />
                                  Delete
                                </Button>
                              )}
                            </div>

                            {event.images.length > 1 && (
                              <div className="grid grid-cols-4 md:grid-cols-6 gap-2 p-4 bg-gray-50">
                                {event.images.map((image, index) => (
                                  <button
                                    key={index}
                                    onClick={() => setSelectedImage(index)}
                                    className={`relative aspect-square rounded overflow-hidden border-2 transition-all ${
                                      selectedImage === index
                                        ? "border-[#1164A3] scale-105"
                                        : "border-transparent hover:border-[#68B9C4]"
                                    }`}
                                  >
                                    <Image
                                      src={image.url}
                                      alt={image.alt || `Image ${index + 1}`}
                                      fill
                                      className="object-cover"
                                    />
                                  </button>
                                ))}
                              </div>
                            )}
                          </div>
                        ) : (
                          <div className="text-center py-20">
                            <ImageIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                            <p className="text-gray-600 mb-4">
                              No images available
                            </p>
                            {isAdmin && (
                              <Button
                                onClick={() => setShowAddImageDialog(true)}
                                className="bg-gradient-to-r from-[#1164A3] to-[#68B9C4]"
                              >
                                <Plus className="w-4 h-4 mr-2" />
                                Add First Image
                              </Button>
                            )}
                          </div>
                        )}
                      </TabsContent>

                      {/* Videos Tab */}
                      <TabsContent value="videos" className="p-4 m-0">
                        {event.videos && event.videos.length > 0 ? (
                          <div className="space-y-4">
                            {event.videos.map((video, index) => (
                              <Card
                                key={index}
                                className="border-[#82B4CC]/30 relative group"
                              >
                                <CardContent className="p-4">
                                  {/* Delete Button (Admin Only) */}
                                  {isAdmin && (
                                    <Button
                                      size="sm"
                                      variant="destructive"
                                      className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity"
                                      onClick={() =>
                                        confirmDelete(
                                          video.id,
                                          video.public_id,
                                          "video"
                                        )
                                      }
                                    >
                                      <Trash2 className="w-4 h-4 mr-2" />
                                      Delete
                                    </Button>
                                  )}
                                  <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden mb-3">
                                    <video controls className="w-full h-full">
                                      <source
                                        src={video.url}
                                        title={video.title || "video"}
                                        type="video/mp4"
                                      />
                                      Your browser does not support the video
                                      tag.
                                    </video>
                                  </div>
                                  {video.title && (
                                    <p className="text-sm font-medium text-gray-700">
                                      {video.title}
                                    </p>
                                  )}
                                </CardContent>
                              </Card>
                            ))}
                          </div>
                        ) : (
                          <div className="text-center py-20">
                            <VideoIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                            <p className="text-gray-600 mb-4">
                              No videos available
                            </p>
                            {isAdmin && (
                              <Button
                                onClick={() => setShowAddVideoDialog(true)}
                                className="bg-gradient-to-r from-[#1164A3] to-[#68B9C4]"
                              >
                                <Plus className="w-4 h-4 mr-2" />
                                Add First Video
                              </Button>
                            )}
                          </div>
                        )}
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>

                {/* Description */}
                <Card className="border-[#82B4CC]/30 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-2xl">
                      <FileText className="w-6 h-6 text-[#1164A3]" />
                      About This {type === "seminar" ? "Seminar" : "Webinar"}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {event.description}
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Right Column - Sidebar */}
              <div className="space-y-6">
                {/* Registration Card */}
                <Card className="border-[#1164A3] border-2 shadow-xl">
                  <CardHeader className="bg-gradient-to-r from-[#1164A3] to-[#68B9C4] text-white">
                    <CardTitle className="text-center text-xl">
                      Event Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 space-y-4">
                    {/* Date & Time */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-3 bg-[#1164A3]/5 rounded-lg">
                        <Calendar className="w-5 h-5 text-[#1164A3]" />
                        <div>
                          <p className="text-xs text-gray-600">Date</p>
                          <p className="font-semibold text-gray-800">
                            {formatDate(event.date)}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 p-3 bg-[#68B9C4]/5 rounded-lg">
                        <Clock className="w-5 h-5 text-[#68B9C4]" />
                        <div>
                          <p className="text-xs text-gray-600">Time</p>
                          <p className="font-semibold text-gray-800">
                            {formatTime(event.date)}
                            {event.endDate && ` - ${formatTime(event.endDate)}`}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 p-3 bg-[#82B4CC]/5 rounded-lg">
                        <Clock className="w-5 h-5 text-[#82B4CC]" />
                        <div>
                          <p className="text-xs text-gray-600">Duration</p>
                          <p className="font-semibold text-gray-800">
                            {calculateDuration()}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Capacity */}
                    <div className="p-4 bg-gradient-to-r from-[#1164A3]/5 to-[#68B9C4]/5 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-700 font-medium">
                          {type === "webinar" ? "Virtual" : "Physical"} Capacity
                        </span>
                        <Users className="w-5 h-5 text-[#1164A3]" />
                      </div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold text-[#1164A3]">
                          {event.attendees.length}
                        </span>
                        <span className="text-gray-600">
                          /{" "}
                          {type === "webinar"
                            ? (event as Webinar).maxParticipants
                            : (event as Seminar).physicalCapacity}
                        </span>
                      </div>
                      <div className="mt-2 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#1164A3] to-[#68B9C4]"
                          style={{
                            width: `${(event.attendees.length / (type === "webinar" ? (event as Webinar).maxParticipants || 100 : (event as Seminar).physicalCapacity || 100)) * 100}%`,
                          }}
                        />
                      </div>
                      <p className="text-sm text-gray-600 mt-2">
                        {getAvailableSeats()} seats available
                      </p>
                    </div>

                    {/* Platform (for webinars) */}
                    {type === "webinar" && (event as Webinar).platform && (
                      <div className="p-3 bg-[#68B9C4]/10 border border-[#68B9C4]/30 rounded-lg">
                        <div className="flex items-center gap-2 text-[#68B9C4]">
                          <Monitor className="w-5 h-5" />
                          <span className="font-semibold">
                            Platform: {(event as Webinar).platform}
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Registration Button */}
                    <Button
                      onClick={() =>
                        router.push(
                          `/register/${type}-attendee?${type}Id=${event.id}`
                        )
                      }
                      disabled={
                        !isRegistrationOpen() || getAvailableSeats() <= 0
                      }
                      className={`w-full py-6 text-lg font-semibold ${
                        isRegistrationOpen() && getAvailableSeats() > 0
                          ? "bg-gradient-to-r from-[#1164A3] to-[#68B9C4] hover:from-[#68B9C4] hover:to-[#82B4CC]"
                          : "bg-gray-400 cursor-not-allowed"
                      } text-white`}
                    >
                      {!isRegistrationOpen()
                        ? "Registration Closed"
                        : getAvailableSeats() <= 0
                          ? "Fully Booked"
                          : "Register Now"}
                    </Button>
                  </CardContent>
                </Card>

                {/* Speaker/Presenter Info */}
                {(event as Seminar).presenters.length > 0 &&
                  (event as Seminar).presenters.map((presenter, index) => (
                    <Card key={index} className="border-[#82B4CC]/30 shadow-lg">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <User className="w-5 h-5 text-[#1164A3]" />
                          {type === "seminar" ? "Presenter" : "Host"}{" "}
                          Information
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div>
                          <p className="text-xs text-gray-600 mb-1">Name</p>
                          <p className="font-semibold text-gray-800">
                            {presenter.full_name}
                          </p>
                        </div>
                        {presenter.areas_of_expertise && (
                          <div>
                            <p className="text-xs text-gray-600 mb-1">Bio</p>
                            <p className="text-sm text-gray-700">
                              {presenter.areas_of_expertise}
                            </p>
                          </div>
                        )}
                        {presenter.email && (
                          <div className="flex items-center gap-2 mt-1 text-sm text-gray-600">
                            <Mail className="w-3 h-3" />
                            <p className="text-[#1164A3] hover:underline">
                              {presenter.email}
                            </p>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}

                {/* Attendance Stats (for completed events) */}
                {event.status === "completed" && (
                  <Card className="border-green-200 bg-green-50/30 shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-green-900">
                        <Award className="w-5 h-5 text-green-600" />
                        Event Completed
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center">
                        <div className="text-4xl font-bold text-green-700 mb-2">
                          {
                            event.attendees.filter(
                              (a) => a.registration_status === "attended"
                            ).length
                          }
                        </div>
                        <p className="text-sm text-green-800">Attendees</p>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete this{" "}
              {mediaToDelete?.type === "image" ? "image" : "video"}. This action
              cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setMediaToDelete(null)}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDeleteMedia}
              className="bg-red-600 hover:bg-red-700"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}