import {
  BlogData,
  ContentData,
  ContentFormProps,
  NewsData,
  Remembrance,
  Resource,
  SuccessStoryData,
  TeamMemberData,
  YouTubeUrl,
} from "@/lib/types";
import {
  ImageIcon,
  Save,
  Trash2,
  Video,
  Youtube,
  AlertCircle,
  File,
} from "lucide-react";
import { useRef, useState } from "react";
import { TiptapEditor } from "./TipTapEditor";
import { CreateTeamMember } from "@/app/actions/team-member";
import { toast } from "sonner";
import { CreateSuccessStory } from "@/app/actions/success-stories";
import { CreateBlog } from "@/app/actions/blogs";
import { CreateNews } from "@/app/actions/news";
import { CreateRemembrance } from "@/app/actions/remembrance";
import { Transparency } from "@/lib/form-types";
import { CreateTransparency } from "@/app/actions/transparency";
import FormResponsesViewer from "./form-data-component";
import EventManagementDashboard from "./seminar-webinar-management-component";
import IndustrialVisitsManagement from "./industrial-visit-management";
import InternshipManagement from "./internship-management";
import GupShupManagement from "./gupshup-management";
import CourseManagement from "./elearning-management";

export const ContentForm = ({
  config,
  activeTab,
  setFormData,
  formData,
  errors,
  setErrors,
}: ContentFormProps) => {
  const [images, setImages] = useState<Resource[]>([]);
  const [videos, setVideos] = useState<Resource[]>([]);
  const [youtubeUrls, setYoutubeUrls] = useState<YouTubeUrl[]>([
    { url: "", title: "" },
  ]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (name: string, value: string) => {
    setFormData(
      (prev) =>
        ({
          ...prev,
          [name]: value,
        }) as Partial<ContentData>
    );

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    // Check required fields
    config.fields.forEach((field) => {
      if (field.required) {
        const value = formData[field.name as keyof typeof formData];
        if (!value || value === "<p></p>") {
          newErrors[field.name] = `${field.label} is required`;
        }
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const files = Array.from(e.target.files);
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        setImages((prev) => [
          ...prev,
          {
            id: (Date.now() + Math.random()).toString(),
            file,
            name: file.name,
          },
        ]);
      };
      reader.readAsDataURL(file);
    });
  };

  const handleVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const files = Array.from(e.target.files);
    files.forEach((file) => {
      console.log(file);
      if (file.size < 4 * 1024 * 1024) {
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
        toast("Video must be less than 4 mb");
      }
    });
  };

  const addYoutubeUrl = () => {
    setYoutubeUrls((prev) => [...prev, { url: "", title: "" }]);
  };

  const updateYoutubeUrl = (
    index: number,
    field: keyof YouTubeUrl,
    value: string
  ) => {
    setYoutubeUrls((prev) =>
      prev.map((item, i) => (i === index ? { ...item, [field]: value } : item))
    );
  };

  const removeYoutubeUrl = (index: number) => {
    setYoutubeUrls((prev) => prev.filter((_, i) => i !== index));
  };

  const removeImage = (id: string) => {
    setImages((prev) => prev.filter((img) => img.id !== id));
  };

  const removeVideo = (id: string) => {
    setVideos((prev) => prev.filter((video) => video.id !== id));
  };

  const resetForm = () => {
    setFormData({});
    setImages([]);
    setVideos([]);
    setYoutubeUrls([{ url: "", title: "" }]);
    setErrors({});
  };

  const handleSubmit = async () => {
    // Validate form first
    if (!validateForm()) {
      toast("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);

    try {
      let typedData: ContentData;

      switch (activeTab) {
        case "team-members":
          typedData = formData as TeamMemberData;
          const memberResult = await CreateTeamMember({
            formData: typedData,
            images,
            videos,
            youtubeUrls,
          });

          if (memberResult.success) {
            toast("Team member created successfully");
            resetForm();
          } else {
            toast(memberResult.error);
          }
          break;

        case "success-stories":
          typedData = formData as SuccessStoryData;
          const storyResult = await CreateSuccessStory({
            formData: { ...typedData, year: Number(typedData.year) },
            images,
            videos,
            youtubeUrls,
          });

          if (storyResult.success) {
            toast("Success story created successfully");
            resetForm();
          } else {
            toast(storyResult.error);
          }
          break;

        case "blogs":
          typedData = formData as BlogData;
          const blogResult = await CreateBlog({
            formData: typedData,
            images,
            videos,
            youtubeUrls,
          });

          if (blogResult.success) {
            toast("Blog created successfully");
            resetForm();
          } else {
            toast(blogResult.error);
          }
          break;

        case "news":
          typedData = formData as NewsData;
          const newsResult = await CreateNews({
            formData: typedData,
            images,
            videos,
            youtubeUrls,
          });

          if (newsResult.success) {
            toast("News created successfully");
            resetForm();
          } else {
            toast(newsResult.error);
          }
          break;
        case "remembrance":
          typedData = formData as Remembrance;

          const remembranceResult = await CreateRemembrance({
            formData: typedData,
            images,
          });

          if (remembranceResult.success) {
            toast("Remembrance created successfully");
            resetForm();
          } else {
            toast(remembranceResult.error);
          }
          break;
        case "transparency":
          typedData = formData as Transparency;

          const transparencyResult = await CreateTransparency({
            formData: typedData,
            files: images,
          });

          if (transparencyResult.success) {
            toast("Transparency files created successfully");
            resetForm();
          } else {
            toast(transparencyResult.error);
          }
          break;
      }
    } catch (error) {
      console.error("Submit error:", error);
      toast("An unexpected error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {activeTab === "form-responses" ? (
        <FormResponsesViewer />
      ) : activeTab === "sessions" ? <EventManagementDashboard /> : 
       activeTab === "internships" ? <InternshipManagement /> : 
       activeTab === "gupshup" ? <GupShupManagement /> : 
       activeTab === "elearning" ? <CourseManagement /> : 
        activeTab === "industrial-visits" ? <IndustrialVisitsManagement /> : (
        <div className="p-4 lg:p-8 pt-[60px]">
          {/* Header */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-[#82B4CC]/20">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                  {config.title}
                </h2>
                <p className="text-gray-600">
                  Create and manage your content with ease
                </p>
              </div>
              <div className="flex space-x-3">
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-[#68B9C4] to-[#82B4CC] text-white rounded-xl hover:from-[#1164A3] hover:to-[#68B9C4] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Save className="w-5 h-5" />
                  <span>{isSubmitting ? "Saving..." : "Save Content"}</span>
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            {/* Form Section */}
            <div className="xl:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-[#82B4CC]/20">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Content Details
                </h3>

                {/* Error Summary */}
                {Object.keys(errors).length > 0 && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-semibold text-red-800 mb-2">
                        Please fix the following errors:
                      </h4>
                      <ul className="text-sm text-red-700 space-y-1">
                        {Object.values(errors).map((error, idx) => (
                          <li key={idx}>• {error}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                  {config.fields.map((field) => (
                    <div
                      key={field.name}
                      className={
                        field.type === "textarea" ? "lg:col-span-2" : ""
                      }
                    >
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        {field.label}
                        {field.required && (
                          <span className="text-red-500 ml-1">*</span>
                        )}
                      </label>

                      {field.type === "textarea" ? (
                        <div className="relative">
                          <TiptapEditor
                            value={
                              formData[field.name as keyof typeof formData] ||
                              ""
                            }
                            onChange={(value) =>
                              handleInputChange(field.name, value)
                            }
                            placeholder={`Enter ${field.label.toLowerCase()}`}
                            required={field.required}
                          />
                          {errors[field.name] && (
                            <p className="text-sm text-red-600 mt-2 flex items-center gap-1">
                              <AlertCircle className="w-4 h-4" />
                              {errors[field.name]}
                            </p>
                          )}
                        </div>
                      ) : field.type === "select" ? (
                        <div>
                          <select
                            className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:border-transparent transition-all duration-300 ${
                              errors[field.name]
                                ? "border-red-500 focus:ring-red-500"
                                : "border-[#82B4CC]/50 focus:ring-[#1164A3]"
                            }`}
                            value={
                              formData[field.name as keyof typeof formData] ||
                              ""
                            }
                            onChange={(e) =>
                              handleInputChange(field.name, e.target.value)
                            }
                            required={field.required}
                          >
                            <option value="">Select {field.label}</option>
                            {field.options?.map((option: string) => (
                              <option key={option} value={option}>
                                {option}
                              </option>
                            ))}
                          </select>
                          {errors[field.name] && (
                            <p className="text-sm text-red-600 mt-2 flex items-center gap-1">
                              <AlertCircle className="w-4 h-4" />
                              {errors[field.name]}
                            </p>
                          )}
                        </div>
                      ) : (
                        <div>
                          <input
                            type={field.type}
                            className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:border-transparent transition-all duration-300 ${
                              errors[field.name]
                                ? "border-red-500 focus:ring-red-500"
                                : "border-[#82B4CC]/50 focus:ring-[#1164A3]"
                            }`}
                            placeholder={`Enter ${field.label.toLowerCase()}`}
                            value={
                              formData[field.name as keyof typeof formData] ||
                              ""
                            }
                            onChange={(e) =>
                              handleInputChange(field.name, e.target.value)
                            }
                            required={field.required}
                          />
                          {errors[field.name] && (
                            <p className="text-sm text-red-600 mt-2 flex items-center gap-1">
                              <AlertCircle className="w-4 h-4" />
                              {errors[field.name]}
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* YouTube URLs Section */}
                {activeTab === "remembrance" ||
                activeTab === "transparency" ? null : (
                  <div className="mb-8">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="text-lg font-semibold text-gray-800">
                        YouTube Videos
                      </h4>
                      <button
                        type="button"
                        onClick={addYoutubeUrl}
                        className="flex items-center space-x-2 px-4 py-2 bg-[#82B4CC]/20 text-[#1164A3] rounded-lg hover:bg-[#82B4CC]/30 transition-all duration-300 border border-[#82B4CC]/50"
                      >
                        <Youtube className="w-4 h-4" />
                        <span>Add YouTube URL</span>
                      </button>
                    </div>

                    {youtubeUrls.map((youtube, index) => (
                      <div key={index} className="flex flex-wrap gap-4 mb-4">
                        <input
                          type="url"
                          placeholder="YouTube URL"
                          className="flex-1 px-4 py-3 border border-[#82B4CC]/50 rounded-xl focus:ring-2 focus:ring-[#1164A3] focus:border-transparent transition-all duration-300"
                          value={youtube.url}
                          onChange={(e) =>
                            updateYoutubeUrl(index, "url", e.target.value)
                          }
                        />
                        <input
                          type="text"
                          placeholder="Video Title"
                          className="flex-1 px-4 py-3 border border-[#82B4CC]/50 rounded-xl focus:ring-2 focus:ring-[#1164A3] focus:border-transparent transition-all duration-300"
                          value={youtube.title}
                          onChange={(e) =>
                            updateYoutubeUrl(index, "title", e.target.value)
                          }
                        />
                        {youtubeUrls.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeYoutubeUrl(index)}
                            className="px-3 py-3 text-red-500 hover:bg-red-100 rounded-xl transition-all duration-300"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Media Upload Section */}
            <div className="space-y-6">
              {activeTab !== "transparency" ? (
                <div className="bg-white rounded-2xl shadow-lg p-6 border border-[#82B4CC]/20">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-lg font-semibold text-gray-800">
                      Images
                    </h4>
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="flex items-center space-x-2 px-4 py-2 bg-[#1164A3]/10 text-[#1164A3] rounded-lg hover:bg-[#1164A3]/20 transition-all duration-300 border border-[#1164A3]/30"
                    >
                      <ImageIcon className="w-4 h-4" />
                      <span>Upload</span>
                    </button>
                  </div>

                  <input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />

                  <div className="space-y-3 max-h-60 overflow-y-auto">
                    {images.map((image) => (
                      <div
                        key={image.id}
                        className="flex items-center space-x-3 p-3 border border-[#82B4CC]/30 rounded-lg hover:border-[#1164A3]/50 transition-colors"
                      >
                        <div className="w-12 h-12 bg-[#1164A3]/10 rounded-lg flex items-center justify-center">
                          <ImageIcon className="w-6 h-6 text-[#1164A3]" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-800 truncate">
                            {image.name}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeImage(image.id)}
                          className="text-red-500 hover:bg-red-100 p-1 rounded transition-all duration-300"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                    {images.length === 0 && (
                      <div className="text-center py-8 text-gray-500">
                        <ImageIcon className="w-12 h-12 mx-auto mb-2 text-[#68B9C4] opacity-50" />
                        <p>No images uploaded</p>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-2xl shadow-lg p-6 border border-[#82B4CC]/20">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-lg font-semibold text-gray-800">
                      Transparency Files
                    </h4>
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="flex items-center space-x-2 px-4 py-2 bg-[#1164A3]/10 text-[#1164A3] rounded-lg hover:bg-[#1164A3]/20 transition-all duration-300 border border-[#1164A3]/30"
                    >
                      <File className="w-4 h-4" />
                      <span>Upload</span>
                    </button>
                  </div>

                  <input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    accept="raw/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />

                  <div className="space-y-3 max-h-60 overflow-y-auto">
                    {images.map((image) => (
                      <div
                        key={image.id}
                        className="flex items-center space-x-3 p-3 border border-[#82B4CC]/30 rounded-lg hover:border-[#1164A3]/50 transition-colors"
                      >
                        <div className="w-12 h-12 bg-[#1164A3]/10 rounded-lg flex items-center justify-center">
                          <File className="w-6 h-6 text-[#1164A3]" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-800 truncate">
                            {image.name}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeImage(image.id)}
                          className="text-red-500 hover:bg-red-100 p-1 rounded transition-all duration-300"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                    {images.length === 0 && (
                      <div className="text-center py-8 text-gray-500">
                        <File className="w-12 h-12 mx-auto mb-2 text-[#68B9C4] opacity-50" />
                        <p>No files uploaded</p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Video Upload */}
              {activeTab === "remembrance" ||
              activeTab === "transparency" ? null : (
                <div className="bg-white rounded-2xl shadow-lg p-6 border border-[#82B4CC]/20">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-lg font-semibold text-gray-800">
                      Videos
                    </h4>
                    <p className="text-sm text-gray-500">Max file size: 4 MB</p>
                    <button
                      type="button"
                      onClick={() => videoInputRef.current?.click()}
                      className="flex items-center space-x-2 px-4 py-2 bg-[#68B9C4]/20 text-[#1164A3] rounded-lg hover:bg-[#68B9C4]/30 transition-all duration-300 border border-[#68B9C4]/50"
                    >
                      <Video className="w-4 h-4" />
                      <span>Upload</span>
                    </button>
                  </div>

                  <input
                    ref={videoInputRef}
                    type="file"
                    multiple
                    accept="video/*"
                    onChange={handleVideoUpload}
                    className="hidden"
                  />

                  <div className="space-y-3 max-h-60 overflow-y-auto">
                    {videos.map((video) => (
                      <div
                        key={video.id}
                        className="flex items-center space-x-3 p-3 border border-[#82B4CC]/30 rounded-lg hover:border-[#68B9C4]/50 transition-colors"
                      >
                        <div className="w-12 h-12 bg-[#68B9C4]/20 rounded-lg flex items-center justify-center">
                          <Video className="w-6 h-6 text-[#68B9C4]" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-800 truncate">
                            {video.name}
                          </p>
                          <p className="text-xs text-gray-500">{video.size}</p>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeVideo(video.id)}
                          className="text-red-500 hover:bg-red-100 p-1 rounded transition-all duration-300"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                    {videos.length === 0 && (
                      <div className="text-center py-8 text-gray-500">
                        <Video className="w-12 h-12 mx-auto mb-2 text-[#68B9C4] opacity-50" />
                        <p>No videos uploaded</p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};