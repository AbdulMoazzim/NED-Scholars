"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Loader2,
  Save,
  ArrowLeft,
  AlertCircle,
  Plus,
  Trash2,
} from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { getFormConfig } from "@/data/AdminPortal";
import {
  BlogData,
  FormField,
  imageData,
  NewsData,
  Remembrance,
  SuccessStoryData,
  TeamMemberData,
  urlData,
  videoData,
} from "@/lib/types";
import { GetMember, UpdateMember } from "@/app/actions/team-member";
import { GetRemembrance, UpdateRemembrance } from "@/app/actions/remembrance";
import {
  GetSuccessStory,
  UpdateSuccessStory,
} from "@/app/actions/success-stories";
import { GetNews, UpdateNews } from "@/app/actions/news";
import { GetBlog, UpdateBlog } from "@/app/actions/blogs";
import { TiptapEditor } from "@/components/TipTapEditor";
import {
  addImage,
  addVideo,
  addYoutubeUrl,
  deleteImage,
  deleteVideo,
  deleteYoutubeUrl,
} from "@/app/actions/resource";

interface dbImages extends imageData {
  id: string;
}
interface dbVideos extends videoData {
  id: string;
}
interface dbURLS extends urlData {
  id: string;
}
export default function DynamicEditPage() {
  const router = useRouter();
  const params = useParams();
  const modelType = params?.post as string;
  const id = params?.postId as string;

  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  // Media state
  const [images, setImages] = useState<dbImages[]>([]);
  const [videos, setVideos] = useState<dbVideos[]>([]);
  const [youtubeUrls, setYoutubeUrls] = useState<dbURLS[]>([]);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [uploadingVideo, setUploadingVideo] = useState(false);

  const config = getFormConfig(modelType);

  // Fetch existing data
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response;
        setLoading(true);
        setError(null);
        switch (modelType) {
          case "team-member":
            response = await GetMember(id);
            setVideos(response?.data?.videos || []);
            setYoutubeUrls(response?.data?.youtubeUrls || []);
            break;
          case "remembrance":
            response = await GetRemembrance(id);
            break;
          case "success-stories":
            response = await GetSuccessStory(id);
            setVideos(response?.data?.videos || []);
            setYoutubeUrls(response?.data?.youtubeUrls || []);
            break;
          case "news":
            response = await GetNews(id);
            setVideos(response?.data?.videos || []);
            setYoutubeUrls(response?.data?.youtubeUrls || []);
            break;
          default:
            response = await GetBlog(id);

            setVideos(response?.data?.videos || []);
            setYoutubeUrls(response?.data?.youtubeUrls || []);

            break;
        }

        if (!response?.success) {
          throw new Error("Failed to fetch data");
        }

        setFormData(response);
        // Set media data
        setImages(response?.data?.images || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    if (modelType && id) {
      fetchData();
    }
  }, [modelType, id]);

  const handleInputChange = (name: string, value: string | number) => {
    console.log(name, value);
    setFormData((prev) => {
      if (!prev) return prev; // Return null if prev is null

      if ("data" in prev && typeof prev.data === "object") {
        return {
          ...prev,
          data: {
            ...prev.data,
            [name]: value,
          },
        };
      }

      return prev; // Return prev unchanged if structure is unexpected
    });

    setSuccess(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setSaving(true);
      setError(null);
      if ("data" in formData) {
        const resultData = formData?.data;
        if (resultData && typeof resultData === "object") {
          const { videos, images, youtubeUrls, ...rest } = resultData as {
            videos: dbVideos[];
            images: dbImages[];
            youtubeUrls: dbURLS[];
          };
          switch (modelType) {
            case "team-member":
              const memberResult = await UpdateMember(
                id,
                rest as TeamMemberData
              );
              if (!memberResult?.success) {
                throw new Error("Error Occurred during updating");
              }
              break;
            case "remembrance":
              const { success: remembranceSuccess } = await UpdateRemembrance(
                id,
                rest as Remembrance
              );
              if (!remembranceSuccess) {
                throw new Error("Error Occurred during updating");
              }
              break;
            case "success-stories":
              const { success: storySuccess } = await UpdateSuccessStory(
                id,
                rest as SuccessStoryData
              );
              if (!storySuccess) {
                throw new Error("Error Occurred during updating");
              }
              break;
            case "news":
              const { success: newsSuccess } = await UpdateNews(
                id,
                rest as NewsData
              );
              if (!newsSuccess) {
                throw new Error("Error Occurred during updating");
              }
              break;
            default:
              const { success: blogsSuccess } = await UpdateBlog(
                id,
                rest as BlogData
              );
              if (!blogsSuccess) {
                throw new Error("Error Occurred during updating");
              }
              break;
          }
        }
      }

      setSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to save changes");
    } finally {
      setSaving(false);
    }
  };

  // ==================== IMAGE HANDLERS ====================
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const fileData = {
      id: (Date.now() + Math.random()).toString(),
      file,
      name: file.name,
    };
    try {
      setUploadingImage(true);
      if ("data" in formData && typeof formData.data === "object") {
        if (
          formData.data &&
          "id" in formData.data &&
          typeof formData.data.id === "string"
        ) {
          const newImage = await addImage(
            fileData,
            modelType,
            formData?.data?.id ?? "",
            modelType
          );
          if (newImage.data) {
            setImages([...images, newImage?.data]);
          }
        }
      }
    } catch {
      setError("Failed to add image");
    } finally {
      setUploadingImage(false);
    }
  };

  const handleImageDelete = async (imageId: string, public_id: string) => {
    try {
      await deleteImage(imageId, public_id);
      setImages(images?.filter((image) => image.id !== imageId));
    } catch {
      setError("Failed to delete images");
    }
  };

  // ==================== VIDEO HANDLERS ====================
  const handleVideoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const fileData = {
      id: (Date.now() + Math.random()).toString(),
      file,
      name: file.name,
    };
    try {
      if ("data" in formData && typeof formData.data === "object") {
        if (
          formData.data &&
          "id" in formData.data &&
          typeof formData.data.id === "string"
        ) {
          setUploadingVideo(true);
          const newVideo = await addVideo(
            fileData,
            modelType,
            formData?.data?.id ?? "",
            modelType
          );
          if (newVideo.data) {
            setVideos([...videos, newVideo?.data]);
          }
        }
      }
    } catch {
      setError("Failed to add video");
    } finally {
      setUploadingVideo(false);
    }
  };

  const handleVideoDelete = async (videoId: string, public_id: string) => {
    try {
      await deleteVideo(videoId, public_id);
      setVideos(videos?.filter((video) => video.id !== videoId));
    } catch {
      setError("Failed to delete videos");
    }
  };

  // ==================== YOUTUBE URL HANDLERS ====================
  const handleYoutubeAdd = async (id: string, url: string, title?: string) => {
    try {
      if ("data" in formData && typeof formData.data === "object") {
        if (
          formData.data &&
          "id" in formData.data &&
          typeof formData.data.id === "string"
        ) {
          const newUrl = await addYoutubeUrl(
            url,
            modelType,
            formData?.data?.id ?? "",
            title
          );
          if (newUrl.data && youtubeUrls) {
            setYoutubeUrls([...youtubeUrls, newUrl?.data]);
          }
        }
      }
    } catch {
      setError("Failed to add YouTube URL");
    }
  };

  const handleYoutubeDelete = async (urlId: string) => {
    try {
      await deleteYoutubeUrl(urlId);
      setYoutubeUrls(youtubeUrls?.filter((url) => url.id !== urlId));
    } catch {
      setError("Failed to delete YouTube URL");
    }
  };

  const renderField = (field: FormField) => {
    if ("data" in formData) {
      const value = formData?.data;
      if (value) {
        switch (field.type) {
          case "textarea":
            // Use Tiptap Editor for textarea fields
            return (
              <TiptapEditor
                value={value[field.name as keyof typeof value] as string}
                onChange={(newValue) => handleInputChange(field.name, newValue)}
                placeholder={`Enter ${field.label.toLowerCase()}...`}
              />
            );

          case "select":
            return (
              <Select
                value={value[field.name as keyof typeof value] as string}
                onValueChange={(val) => handleInputChange(field.name, val)}
                required={field.required}
              >
                <SelectTrigger>
                  <SelectValue
                    placeholder={`Select ${field.label.toLowerCase()}`}
                  />
                </SelectTrigger>
                <SelectContent>
                  {field.options?.map((option: string) => (
                    <SelectItem key={option} value={option}>
                      {option.replace(/_/g, " ")}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            );

          case "number":
            return (
              <Input
                id={field.name}
                type="number"
                value={value[field.name as keyof typeof value] as string}
                onChange={(e) =>
                  handleInputChange(field.name, parseInt(e.target.value))
                }
                required={field.required}
                placeholder={`Enter ${field.label.toLowerCase()}...`}
              />
            );

          case "datetime-local":
            return (
              <Input
                id={field.name}
                type="datetime-local"
                value={
                  value
                    ? new Date(
                        value[field.name as keyof typeof value] as string
                      )
                        .toISOString()
                        .slice(0, 16)
                    : ""
                }
                onChange={(e) => handleInputChange(field.name, e.target.value)}
                required={field.required}
              />
            );

          default:
            return (
              <Input
                id={field.name}
                type={field.type}
                value={value[field.name as keyof typeof value] as string}
                onChange={(e) => handleInputChange(field.name, e.target.value)}
                required={field.required}
                placeholder={`Enter ${field.label.toLowerCase()}...`}
              />
            );
        }
      }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-[#82B4CC]/10 to-slate-100 flex items-center justify-center">
        <div className="text-center space-y-4">
          <Loader2 className="w-12 h-12 animate-spin text-[#1164A3] mx-auto" />
          <p className="text-slate-600 font-['Instrument_Serif'] text-lg">
            Loading data...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-[#82B4CC]/10 to-slate-100">
      {/* Decorative Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#68B9C4]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#B0A3B3]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-12">
        {/* Header */}
        <div className="mb-8 space-y-6">
          <Button
            variant="ghost"
            onClick={() => router.back()}
            className="group -ml-3 text-slate-600 hover:text-slate-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            <span className=" font-medium">Back</span>
          </Button>

          <div className="space-y-2">
            <h1 className=" text-4xl sm:text-5xl font-medium text-slate-900 tracking-tight">
              Edit {config.title.replace("Create ", "")}
            </h1>
            <p className="text-slate-600 text-lg ">
              Update the information below to modify this entry
            </p>
          </div>
        </div>

        {/* Alerts */}
        {error && (
          <Alert
            variant="destructive"
            className="mb-6 border-red-200 bg-red-50"
          >
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {success && (
          <Alert className="mb-6 border-[#68B9C4] bg-[#68B9C4]/10 text-[#1164A3]">
            <AlertDescription className=" font-medium">
              Changes saved successfully!
            </AlertDescription>
          </Alert>
        )}

        {/* Form Card */}
        <Card className="border-[#82B4CC]/30 shadow-xl shadow-slate-900/5 backdrop-blur-sm bg-white/80">
          <CardHeader className="border-b border-slate-100 pb-6">
            <CardTitle className="text-2xl font-medium text-slate-900">
              Entry Details
            </CardTitle>
          </CardHeader>

          <CardContent className="pt-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {config.fields.map((field) => (
                <div key={field.name} className="space-y-2.5">
                  <Label
                    htmlFor={field.name}
                    className="text-slate-700  font-medium text-[15px] flex items-center gap-1.5"
                  >
                    {field.label}
                    {field.required && (
                      <span className="text-red-500 text-sm">*</span>
                    )}
                  </Label>
                  {"data" in formData && renderField(field)}
                </div>
              ))}

              {/* ==================== MEDIA MANAGEMENT SECTION ==================== */}
              <div className="pt-8 border-t border-slate-200 space-y-8">
                <h3 className="font-['Instrument_Serif'] text-xl font-medium text-slate-900">
                  Media Assets
                </h3>

                {/* Images Section */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label className="text-slate-700  font-medium text-[15px]">
                      Images
                    </Label>
                    <div className="relative">
                      <Input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        disabled={uploadingImage}
                        className="hidden"
                        id="image-upload"
                      />
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        disabled={uploadingImage}
                        onClick={() =>
                          document.getElementById("image-upload")?.click()
                        }
                        className="border-[#1164A3] text-[#1164A3] hover:bg-[#1164A3] hover:text-white"
                      >
                        {uploadingImage ? (
                          <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            Uploading...
                          </>
                        ) : (
                          <>
                            <Plus className="w-4 h-4 mr-2" />
                            Add Image
                          </>
                        )}
                      </Button>
                    </div>
                  </div>

                  {images && images.length > 0 ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {images.map((image) => (
                        <div
                          key={image.id}
                          className="relative group rounded-lg overflow-hidden border border-[#82B4CC]/30 bg-slate-50 aspect-video hover:border-[#1164A3] transition-colors"
                        >
                          <img
                            src={image.url}
                            alt={image.alt || "Image"}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <Button
                              type="button"
                              variant="destructive"
                              size="sm"
                              onClick={() =>
                                handleImageDelete(image.id, image.public_id)
                              }
                            >
                              <Trash2 className="w-4 h-4 mr-1.5" />
                              Delete
                            </Button>
                          </div>
                          {image.alt && (
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2">
                              <p className="text-white text-xs  truncate">
                                {image.alt}
                              </p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8 border-2 border-dashed border-[#82B4CC]/30 rounded-lg">
                      <p className="text-slate-500  text-sm">
                        No images added yet
                      </p>
                    </div>
                  )}
                </div>
                {/* Videos Section */}
                {modelType !== "remembrance" && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label className="text-slate-700  font-medium text-[15px]">
                        Videos
                      </Label>
                      <div className="relative">
                        <Input
                          type="file"
                          accept="video/*"
                          onChange={handleVideoUpload}
                          disabled={uploadingVideo}
                          className="hidden"
                          id="video-upload"
                        />
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          disabled={uploadingVideo}
                          onClick={() =>
                            document.getElementById("video-upload")?.click()
                          }
                          className="border-[#1164A3] text-[#1164A3] hover:bg-[#1164A3] hover:text-white"
                        >
                          {uploadingVideo ? (
                            <>
                              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                              Uploading...
                            </>
                          ) : (
                            <>
                              <Plus className="w-4 h-4 mr-2" />
                              Add Video
                            </>
                          )}
                        </Button>
                      </div>
                    </div>

                    {videos && videos.length > 0 ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {videos.map((video) => (
                          <div
                            key={video.id}
                            className="relative group rounded-lg overflow-hidden border border-[#82B4CC]/30 bg-slate-50 hover:border-[#1164A3] transition-colors"
                          >
                            <video
                              src={video.url}
                              className="w-full aspect-video object-cover"
                              controls
                            />
                            <div className="absolute top-2 right-2">
                              <Button
                                type="button"
                                variant="destructive"
                                size="sm"
                                onClick={() =>
                                  handleVideoDelete(video.id, video.public_id)
                                }
                                className=" opacity-0 group-hover:opacity-100 transition-opacity"
                              >
                                <Trash2 className="w-4 h-4 mr-1.5" />
                                Delete
                              </Button>
                            </div>
                            {video.title && (
                              <div className="p-3 border-t border-[#82B4CC]/30">
                                <p className="text-slate-700 text-sm  font-medium">
                                  {video.title}
                                </p>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-8 border-2 border-dashed border-[#82B4CC]/30 rounded-lg">
                        <p className="text-slate-500  text-sm">
                          No videos added yet
                        </p>
                      </div>
                    )}
                  </div>
                )}
                {/* YouTube URLs Section */}
                {modelType !== "remembrance" && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label className="text-slate-700  font-medium text-[15px]">
                        YouTube URLs
                      </Label>
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          const url = prompt("Enter YouTube URL:");
                          if (url) {
                            const title = prompt("Enter title (optional):");
                            handleYoutubeAdd(url, title || "Youtube video");
                          }
                        }}
                        className="border-[#1164A3] text-[#1164A3] hover:bg-[#1164A3] hover:text-white"
                      >
                        <Plus className="w-4 h-4 mr-2" />
                        Add YouTube URL
                      </Button>
                    </div>

                    {youtubeUrls && youtubeUrls.length > 0 ? (
                      <div className="space-y-3">
                        {youtubeUrls.map((youtubeUrl) => (
                          <div
                            key={youtubeUrl.id}
                            className="flex items-center justify-between p-4 rounded-lg border border-[#82B4CC]/30 bg-slate-50 hover:bg-[#82B4CC]/5 hover:border-[#1164A3] transition-colors group"
                          >
                            <div className="flex-1 min-w-0">
                              {youtubeUrl.title && (
                                <p className=" font-medium text-slate-900 mb-1">
                                  {youtubeUrl.title}
                                </p>
                              )}
                              <a
                                href={youtubeUrl.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#1164A3] hover:text-[#68B9C4]  text-sm truncate block"
                              >
                                {youtubeUrl.url}
                              </a>
                            </div>
                            <Button
                              type="button"
                              variant="destructive"
                              size="sm"
                              onClick={() => handleYoutubeDelete(youtubeUrl.id)}
                              className="ml-4  opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              <Trash2 className="w-4 h-4 mr-1.5" />
                              Delete
                            </Button>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-8 border-2 border-dashed border-[#82B4CC]/30 rounded-lg">
                        <p className="text-slate-500  text-sm">
                          No YouTube URLs added yet
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                <Button
                  type="submit"
                  disabled={saving}
                  className="bg-gradient-to-r from-[#1164A3] to-[#68B9C4] hover:from-[#68B9C4] hover:to-[#82B4CC] text-white shadow-lg shadow-[#1164A3]/20  font-medium px-8 transition-all duration-200"
                >
                  {saving ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Saving...
                    </>
                  ) : (
                    <>
                      <Save className="w-4 h-4 mr-2" />
                      Save Changes
                    </>
                  )}
                </Button>

                <Button
                  type="button"
                  variant="outline"
                  onClick={() => router.back()}
                  disabled={saving}
                  className=" font-medium border-[#82B4CC]/30 text-slate-700 hover:bg-slate-50"
                >
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
