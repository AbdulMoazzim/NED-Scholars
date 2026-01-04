"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
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
  Factory,
  MapPin,
  Calendar,
  Clock,
  Users,
  Building2,
  Shield,
  Truck,
  ArrowLeft,
  FileText,
  Target,
  Lightbulb,
  AlertCircle,
  Loader2,
  Image as ImageIcon,
  Video as VideoIcon,
  Star,
  Phone,
  Mail,
  User,
  Award,
  MessageSquare,
  Send,
  Plus,
  Trash2,
  Upload,
} from "lucide-react";
import { GetVisitBySlug, SubmitVisitFeedback } from "@/app/actions/industrial-visit";
import {
  addImage,
  addVideo,
  deleteImage,
  deleteVideo,
} from "@/app/actions/resource";
import { toast } from "sonner";
import Image from "next/image";
import { Registration, VisitDetails } from "@/lib/form-types";
import { useSession } from "@/lib/auth-client";

export default function IndustrialVisitDetailPage({ slug }: { slug: string }) {
  const router = useRouter();
  const session = useSession();
  const [visit, setVisit] = useState<VisitDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const [activeMediaTab, setActiveMediaTab] = useState<"images" | "videos">("images");
  
  // Feedback state
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  const [feedbackRating, setFeedbackRating] = useState(0);
  const [feedbackText, setFeedbackText] = useState("");
  const [submittingFeedback, setSubmittingFeedback] = useState(false);
  const [userRegistration, setUserRegistration] = useState<Registration>();

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
    fetchVisit();
  }, [slug]);

  const fetchVisit = async () => {
    setLoading(true);
    try {
      const result = await GetVisitBySlug(slug);
      if (result.success && result.data) {
        setVisit(result.data as VisitDetails);
        checkUserRegistration(result.data as VisitDetails);
      } else {
        toast.error("Visit not found");
        router.push("/events/industrial-visits");
      }
    } catch (error) {
      toast.error("Failed to load visit details");
      console.error("Error fetching visit:", error);
    } finally {
      setLoading(false);
    }
  };

  const checkUserRegistration = (visitData: VisitDetails) => {
    // Check if user has attended this visit and hasn't submitted feedback
    const attended = visitData.registrations?.find(
      (reg) => reg.registrationStatus === "attended" && !reg.feedback
    );
    if (attended) {
      setUserRegistration(attended);
    }
  };

  const handleAddImage = async () => {
    if (!imageFile || !visit) return;

    setUploadingImage(true);
    try {
      const result = await addImage(
        {id: (Date.now() + Math.random()).toString(), file: imageFile, name: imageFile.name },
        "industrial-visit",
        visit.id,
        "industrial-visits"
      );

      if (result.success) {
        toast.success("Image uploaded successfully!");
        setShowAddImageDialog(false);
        setImageFile(null);
        fetchVisit(); // Refresh visit data
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
    if (!videoFile || !visit) return;

    setUploadingVideo(true);
    try {
      const result = await addVideo(
        {id: (Date.now() + Math.random()).toString(), file: videoFile, name: videoFile.name },
        "industrial-visit",
        visit.id,
        "industrial-visits"
      );

      if (result.success) {
        toast.success("Video uploaded successfully!");
        setShowAddVideoDialog(false);
        setVideoFile(null);
        fetchVisit(); // Refresh visit data
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
        fetchVisit(); // Refresh visit data
        
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

  const handleSubmitFeedback = async () => {
    if (feedbackRating === 0) {
      toast.error("Please select a rating");
      return;
    }

    if (!userRegistration?.id) {
      toast.error("Registration not found");
      return;
    }

    setSubmittingFeedback(true);
    try {
      const result = await SubmitVisitFeedback(
        userRegistration.id,
        feedbackRating,
        feedbackText
      );

      if (result.success) {
        toast.success("Thank you for your feedback!");
        setShowFeedbackForm(false);
        setFeedbackRating(0);
        setFeedbackText("");
        fetchVisit(); // Refresh to show submitted feedback
      } else {
        toast.error(result.error || "Failed to submit feedback");
      }
    } catch (error) {
      toast.error("Failed to submit feedback");
      console.error("Error submitting feedback:", error);
    } finally {
      setSubmittingFeedback(false);
    }
  };

  const getIndustryColor = (industry: string) => {
    const colors: Record<string, string> = {
      manufacturing: "from-[#1164A3] to-[#68B9C4]",
      textile: "from-[#68B9C4] to-[#82B4CC]",
      software_it: "from-[#82B4CC] to-[#B0A3B3]",
      power_energy: "from-[#1164A3] to-[#82B4CC]",
      telecommunication: "from-[#68B9C4] to-[#B0A3B3]",
      engineering: "from-[#82B4CC] to-[#1164A3]",
      research_development: "from-[#1164A3] to-[#68B9C4]",
    };
    return colors[industry] || "from-[#1164A3] to-[#68B9C4]";
  };

  const formatIndustry = (industry: string) => {
    return industry
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
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

  const getAvailableSeats = () => {
    if (!visit) return 0;
    return visit.maxParticipants - visit.currentParticipants;
  };

  const isRegistrationOpen = () => {
    if (!visit) return false;
    return visit.status === "upcoming" && new Date(visit.visitDate) > new Date();
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
        <div className="text-center">
          <Loader2 className="w-16 h-16 animate-spin text-[#1164A3] mx-auto mb-4" />
          <p className="text-gray-600 text-lg">Loading visit details...</p>
        </div>
      </div>
    );
  }

  if (!visit) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
        <Card className="max-w-md">
          <CardContent className="p-12 text-center">
            <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Visit Not Found</h2>
            <p className="text-gray-600 mb-6">The industrial visit you&apos;re looking for doesn&apos;t exist.</p>
            <Button onClick={() => router.push("/events/industrial-visits")} className="bg-gradient-to-r from-[#1164A3] to-[#68B9C4] text-white">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Visits
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className={`bg-gradient-to-r ${getIndustryColor(visit.industry)} text-white py-16`}>
        <div className="container mx-auto px-4">
          <Button
            variant="ghost"
            onClick={() => router.push("/events/industrial-visits")}
            className="text-white hover:bg-white/20 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Industrial Visits
          </Button>

          <div className="max-w-5xl mx-auto">
            <Badge className={`mb-4 ${getStatusColor(visit.status)}`}>
              {visit.status.toUpperCase()}
            </Badge>
            <h1 className="text-5xl font-bold mb-4">{visit.title}</h1>
            <div className="flex flex-wrap items-center gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5" />
                <span className="text-xl font-semibold">{visit.company}</span>
              </div>
              <div className="flex items-center gap-2">
                <Factory className="w-5 h-5" />
                <span>{formatIndustry(visit.industry)}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>{visit.location}</span>
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
                {/* Feedback Form - Show for completed visits where user attended */}
                {visit.status === "completed" && userRegistration && !userRegistration.feedback && (
                  <Card className="border-[#1164A3] border-2 shadow-xl bg-gradient-to-r from-[#1164A3]/5 to-[#68B9C4]/5">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-2xl">
                        <MessageSquare className="w-6 h-6 text-[#1164A3]" />
                        Share Your Experience
                      </CardTitle>
                      <p className="text-gray-600">Help us improve by sharing your feedback about this visit</p>
                    </CardHeader>
                    <CardContent>
                      {!showFeedbackForm ? (
                        <Button
                          onClick={() => setShowFeedbackForm(true)}
                          className="w-full bg-gradient-to-r from-[#1164A3] to-[#68B9C4] hover:from-[#68B9C4] hover:to-[#82B4CC] text-white py-6 text-lg"
                        >
                          <Star className="w-5 h-5 mr-2" />
                          Submit Feedback
                        </Button>
                      ) : (
                        <div className="space-y-6">
                          {/* Rating */}
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-3">
                              Rate Your Experience
                            </label>
                            <div className="flex items-center gap-2">
                              {[1, 2, 3, 4, 5].map((rating) => (
                                <button
                                  key={rating}
                                  type="button"
                                  onClick={() => setFeedbackRating(rating)}
                                  className="transition-transform hover:scale-110"
                                >
                                  <Star
                                    className={`w-10 h-10 ${
                                      rating <= feedbackRating
                                        ? "fill-[#1164A3] text-[#1164A3]"
                                        : "text-gray-300"
                                    }`}
                                  />
                                </button>
                              ))}
                              {feedbackRating > 0 && (
                                <span className="ml-3 text-lg font-semibold text-[#1164A3]">
                                  {feedbackRating}/5
                                </span>
                              )}
                            </div>
                          </div>

                          {/* Feedback Text */}
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                              Your Feedback (Optional)
                            </label>
                            <Textarea
                              value={feedbackText}
                              onChange={(e) => setFeedbackText(e.target.value)}
                              placeholder="Share your thoughts about the visit, what you learned, and suggestions for improvement..."
                              rows={6}
                              className="border-[#82B4CC]/50 focus:ring-[#1164A3] focus:border-[#1164A3]"
                            />
                          </div>

                          {/* Action Buttons */}
                          <div className="flex gap-3">
                            <Button
                              onClick={handleSubmitFeedback}
                              disabled={submittingFeedback || feedbackRating === 0}
                              className="flex-1 bg-gradient-to-r from-[#1164A3] to-[#68B9C4] hover:from-[#68B9C4] hover:to-[#82B4CC] text-white"
                            >
                              {submittingFeedback ? (
                                <>
                                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                  Submitting...
                                </>
                              ) : (
                                <>
                                  <Send className="w-4 h-4 mr-2" />
                                  Submit Feedback
                                </>
                              )}
                            </Button>
                            <Button
                              onClick={() => {
                                setShowFeedbackForm(false);
                                setFeedbackRating(0);
                                setFeedbackText("");
                              }}
                              variant="outline"
                              className="border-[#82B4CC] text-[#82B4CC] hover:bg-[#82B4CC]/10"
                            >
                              Cancel
                            </Button>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )}

                {/* Media Section - Images & Videos */}
                <Card className="border-[#82B4CC]/30 shadow-lg overflow-hidden">
                  <CardContent className="p-0">
                    <Tabs value={activeMediaTab} onValueChange={(val) => setActiveMediaTab(val as "images" | "videos")}>
                      <div className="bg-gray-50 px-6 py-4 border-b">
                        <div className="flex items-center justify-between">
                          <TabsList className="grid grid-cols-2 w-full max-w-md">
                            <TabsTrigger value="images">
                              <ImageIcon className="w-4 h-4 mr-2" />
                              Images ({visit.images?.length || 0})
                            </TabsTrigger>
                            <TabsTrigger value="videos">
                              <VideoIcon className="w-4 h-4 mr-2" />
                              Videos ({visit.videos?.length || 0})
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
                                        Add a new image to this visit
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
                                        Add a new video to this visit
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
                        {visit.images && visit.images.length > 0 ? (
                          <div>
                            {/* Main Image */}
                            <div className="relative h-96 bg-gray-100 group">
                              <Image
                                src={visit.images[selectedImage].url}
                                alt={visit.images[selectedImage].alt || visit.title}
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
                                      visit.images![selectedImage].id,
                                      visit.images![selectedImage].public_id,
                                      "image"
                                    )
                                  }
                                >
                                  <Trash2 className="w-4 h-4 mr-2" />
                                  Delete
                                </Button>
                              )}
                            </div>

                            {/* Thumbnail Gallery */}
                            {visit.images.length > 1 && (
                              <div className="grid grid-cols-4 md:grid-cols-6 gap-2 p-4 bg-gray-50">
                                {visit.images.map((image, index) => (
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
                        {visit.videos && visit.videos.length > 0 ? (
                          <div className="space-y-4">
                            {visit.videos.map((video, index) => (
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
                                      <source src={video.url} title={video.title || "video"} type="video/mp4" />
                                      Your browser does not support the video tag.
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
                      About This Visit
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed text-lg">{visit.description}</p>
                  </CardContent>
                </Card>

                {/* Objectives */}
                <Card className="border-[#82B4CC]/30 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-2xl">
                      <Target className="w-6 h-6 text-[#68B9C4]" />
                      Visit Objectives
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">{visit.objectives}</p>
                  </CardContent>
                </Card>

                {/* Agenda */}
                {visit.agenda && (
                  <Card className="border-[#82B4CC]/30 shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-2xl">
                        <Lightbulb className="w-6 h-6 text-[#82B4CC]" />
                        Visit Agenda
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 leading-relaxed whitespace-pre-line">{visit.agenda}</p>
                    </CardContent>
                  </Card>
                )}

                {/* Safety Guidelines */}
                {visit.safetyGuidelines && (
                  <Card className="border-amber-200 bg-amber-50/30 shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-2xl text-amber-900">
                        <Shield className="w-6 h-6 text-amber-600" />
                        Safety Guidelines
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-amber-900 leading-relaxed whitespace-pre-line">{visit.safetyGuidelines}</p>
                    </CardContent>
                  </Card>
                )}
              </div>

              {/* Right Column - Sidebar */}
              <div className="space-y-6">
                {/* Registration Card */}
                <Card className="border-[#1164A3] border-2 shadow-xl">
                  <CardHeader className={`bg-gradient-to-r ${getIndustryColor(visit.industry)} text-white`}>
                    <CardTitle className="text-center text-xl">Visit Information</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 space-y-4">
                    {/* Date & Time */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-3 bg-[#1164A3]/5 rounded-lg">
                        <Calendar className="w-5 h-5 text-[#1164A3]" />
                        <div>
                          <p className="text-xs text-gray-600">Date</p>
                          <p className="font-semibold text-gray-800">
                            {new Date(visit.visitDate).toLocaleDateString("en-US", {
                              weekday: "long",
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 p-3 bg-[#68B9C4]/5 rounded-lg">
                        <Clock className="w-5 h-5 text-[#68B9C4]" />
                        <div>
                          <p className="text-xs text-gray-600">Time</p>
                          <p className="font-semibold text-gray-800">
                            {new Date(visit.startTime).toLocaleTimeString([], {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                            {visit.endTime &&
                              ` - ${new Date(visit.endTime).toLocaleTimeString([], {
                                hour: "2-digit",
                                minute: "2-digit",
                              })}`}
                          </p>
                        </div>
                      </div>

                      {visit.duration && (
                        <div className="flex items-center gap-3 p-3 bg-[#82B4CC]/5 rounded-lg">
                          <Clock className="w-5 h-5 text-[#82B4CC]" />
                          <div>
                            <p className="text-xs text-gray-600">Duration</p>
                            <p className="font-semibold text-gray-800">{visit.duration}</p>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Capacity */}
                    <div className="p-4 bg-gradient-to-r from-[#1164A3]/5 to-[#68B9C4]/5 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-700 font-medium">Capacity</span>
                        <Users className="w-5 h-5 text-[#1164A3]" />
                      </div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold text-[#1164A3]">
                          {visit.currentParticipants}
                        </span>
                        <span className="text-gray-600">/ {visit.maxParticipants}</span>
                      </div>
                      <div className="mt-2 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#1164A3] to-[#68B9C4]"
                          style={{
                            width: `${(visit.currentParticipants / visit.maxParticipants) * 100}%`,
                          }}
                        />
                      </div>
                      <p className="text-sm text-gray-600 mt-2">
                        {getAvailableSeats()} seats available
                      </p>
                    </div>

                    {/* Transport */}
                    {visit.transportProvided && (
                      <div className="p-3 bg-[#68B9C4]/10 border border-[#68B9C4]/30 rounded-lg">
                        <div className="flex items-center gap-2 text-[#68B9C4]">
                          <Truck className="w-5 h-5" />
                          <span className="font-semibold">Transport Provided</span>
                        </div>
                        {visit.meetingPoint && (
                          <p className="text-sm text-gray-700 mt-2">
                            <strong>Meeting Point:</strong> {visit.meetingPoint}
                          </p>
                        )}
                      </div>
                    )}

                    {/* Registration Button */}
                    <Button
                      onClick={() => router.push(`/register/industrial-visits?visitId=${visit.id}`)}
                      disabled={!isRegistrationOpen() || getAvailableSeats() <= 0}
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

                {/* Contact Information */}
                {(visit.organizerName || visit.companyContact) && (
                  <Card className="border-[#82B4CC]/30 shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <User className="w-5 h-5 text-[#1164A3]" />
                        Contact Information
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {visit.organizerName && (
                        <div>
                          <p className="text-xs text-gray-600 mb-1">Organizer</p>
                          <p className="font-semibold text-gray-800">{visit.organizerName}</p>
                          {visit.organizerContact && (
                            <div className="flex items-center gap-2 mt-1 text-sm text-gray-600">
                              <Phone className="w-3 h-3" />
                              {visit.organizerContact}
                            </div>
                          )}
                        </div>
                      )}

                      {visit.companyContact && (
                        <div className="pt-3 border-t">
                          <p className="text-xs text-gray-600 mb-1">Company Contact</p>
                          <p className="font-semibold text-gray-800">{visit.companyContact}</p>
                          {visit.companyEmail && (
                            <div className="flex items-center gap-2 mt-1 text-sm text-gray-600">
                              <Mail className="w-3 h-3" />
                              {visit.companyEmail}
                            </div>
                          )}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )}

                {/* Attendance Stats (for completed visits) */}
                {visit.status === "completed" && visit.registrations && (
                  <Card className="border-green-200 bg-green-50/30 shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-green-900">
                        <Award className="w-5 h-5 text-green-600" />
                        Visit Completed
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center">
                        <div className="text-4xl font-bold text-green-700 mb-2">
                          {visit.registrations.filter((r) => r.registrationStatus === "attended").length}
                        </div>
                        <p className="text-sm text-green-800">Students Attended</p>
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