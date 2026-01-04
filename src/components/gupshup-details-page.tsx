"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import {
  Coffee,
  Calendar,
  Clock,
  Users,
  Video,
  ArrowLeft,
  FileText,
  MessageCircle,
  Target,
  Lightbulb,
  AlertCircle,
  Loader2,
  User,
  Mail,
  CheckCircle,
  Star,
  Play,
  MessageSquare,
  Send,
} from "lucide-react";
import { GetGupShupSessionBySlug, SubmitGupShupFeedback } from "@/app/actions/gupshup";
import { toast } from "sonner";
import Image from "next/image";
import { GupShupSession, GupShupRegistration } from "@/lib/form-types";

interface session extends GupShupSession {
  registrations: Omit<GupShupRegistration, "session">[]
}

export default function GupShupDetailPage({ slug }: { slug: string }) {
  const router = useRouter();
  const [session, setSession] = useState<session | null>(null);
  const [loading, setLoading] = useState(true);
  
  // Feedback state
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  const [feedbackRating, setFeedbackRating] = useState(0);
  const [feedbackText, setFeedbackText] = useState("");
  const [submittingFeedback, setSubmittingFeedback] = useState(false);
  const [userRegistration, setUserRegistration] = useState<Omit<GupShupRegistration, "session">>();
console.log(userRegistration)
  useEffect(() => {
    fetchSession();
  }, [slug]);

  const fetchSession = async () => {
    setLoading(true);
    try {
      const result = await GetGupShupSessionBySlug(slug);
      if (result.success && result.data) {
        setSession(result.data);
        checkUserRegistration(result.data);
      } else {
        toast.error("Session not found");
      }
    } catch (error) {
      toast.error("Failed to load session details");
      console.error("Error fetching session:", error);
    } finally {
      setLoading(false);
    }
  };

  const checkUserRegistration = (sessionData: session) => {
    // Check if user has attended this session and hasn't submitted feedback
    const attended = sessionData.registrations?.find(
      (reg) => reg.attended === true && !reg.feedback
    );
    if (attended) {
      setUserRegistration(attended);
    }
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
      const result = await SubmitGupShupFeedback(
        userRegistration.id,
        feedbackRating,
        feedbackText
      );

      if (result.success) {
        toast.success("Thank you for your feedback!");
        setShowFeedbackForm(false);
        setFeedbackRating(0);
        setFeedbackText("");
        fetchSession(); // Refresh to show submitted feedback
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

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      politics: "from-[#1164A3] to-[#68B9C4]",
      entertainment: "from-[#82B4CC] to-[#B0A3B3]",
      social_activism: "from-[#68B9C4] to-[#82B4CC]",
      academia: "from-[#1164A3] to-[#82B4CC]",
      religion: "from-[#68B9C4] to-[#82B4CC]",
      business: "from-[#82B4CC] to-[#B0A3B3]",
      technology: "from-[#1164A3] to-[#68B9C4]",
      arts_culture: "from-[#68B9C4] to-[#B0A3B3]",
      health_wellness: "from-[#82B4CC] to-[#1164A3]",
      other: "from-[#B0A3B3] to-[#82B4CC]",
    };
    return colors[category] || "from-[#1164A3] to-[#68B9C4]";
  };

  const formatCategory = (category: string) => {
    return category.split("_").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  };

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const isRegistrationOpen = () => {
    if (!session) return false;
    if (session.status !== "upcoming") return false;
    if (session.registrationDeadline && new Date(session.registrationDeadline) < new Date()) {
      return false;
    }
    if (session.maxAttendees && session._count && session._count.registrations >= session.maxAttendees) {
      return false;
    }
    return true;
  };

  const handleRegister = () => {
    if (session) {
      router.push(`/register/gupshup-registration?sessionId=${session.id}`);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
        <div className="text-center">
          <Loader2 className="w-16 h-16 animate-spin text-[#1164A3] mx-auto mb-4" />
          <p className="text-gray-600 text-lg">Loading session details...</p>
        </div>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
        <Card className="max-w-md">
          <CardContent className="p-12 text-center">
            <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Session Not Found</h2>
            <p className="text-gray-600 mb-6">The session you&apos;re looking for doesn&apos;t exist.</p>
            <Button
              onClick={() => router.push("/events/gupshup")}
              className="bg-gradient-to-r from-[#1164A3] to-[#68B9C4] text-white"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Gup Shup
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className={`bg-gradient-to-r ${getCategoryColor(session.category)} text-white py-16`}>
        <div className="container mx-auto px-4">
          <Button
            variant="ghost"
            onClick={() => router.push("/events/gupshup")}
            className="text-white hover:bg-white/20 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Gup Shup
          </Button>

          <div className="max-w-5xl mx-auto">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Badge className="bg-white/20 text-white border-white/30">
                <Coffee className="w-3 h-3 mr-1" />
                {formatCategory(session.category)}
              </Badge>
              {session.featured && (
                <Badge className="bg-white/20 text-white border-white/30">
                  <Star className="w-3 h-3 mr-1" />
                  Featured
                </Badge>
              )}
              <Badge className="bg-white/20 text-white border-white/30">
                {session.status.toUpperCase()}
              </Badge>
            </div>
            
            <h1 className="text-5xl font-bold mb-4">{session.title}</h1>
            
            <div className="flex flex-wrap items-center gap-6 text-white/90 mb-6">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span className="text-xl font-semibold">{session.speakerName}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span className="text-lg">{formatDate(session.date)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{session.startTime} • {session.duration}</span>
              </div>
            </div>

            {session.platform && (
              <div className="flex items-center gap-2 text-white/90 text-lg">
                <Video className="w-5 h-5" />
                <span>Platform: {session.platform}</span>
              </div>
            )}
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
                {/* Feedback Form - Show for completed sessions where user attended */}
                {session.status === "completed" && userRegistration && !userRegistration.feedback && (
                  <Card className="border-[#1164A3] border-2 shadow-xl bg-gradient-to-r from-[#1164A3]/5 to-[#68B9C4]/5">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-2xl">
                        <MessageSquare className="w-6 h-6 text-[#1164A3]" />
                        Share Your Experience
                      </CardTitle>
                      <p className="text-gray-600">Help us improve by sharing your feedback about this session</p>
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
                              placeholder="Share your thoughts about the session, what you learned, and suggestions for improvement..."
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

                {/* Thumbnail Image */}
                {session.thumbnailImage && session.thumbnailImage.length === 1 &&(
                  <Card className="border-[#82B4CC]/30 shadow-lg overflow-hidden">
                    <CardContent className="p-0">
                      <div className="relative h-96">
                        <Image
                          src={session.thumbnailImage[0].url}
                          alt={session.thumbnailImage[0].alt || "Thumbnail Image"}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* YouTube Recording (for completed sessions) */}
                {session.status === "completed" && session.youtubeUrl && (
                  <Card className="border-[#82B4CC]/30 shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-2xl">
                        <Play className="w-6 h-6 text-[#1164A3]" />
                        Watch Recording
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                        <iframe
                          src={session.youtubeUrl}
                          className="w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                      
                    </CardContent>
                  </Card>
                )}

                {/* Description */}
                <Card className="border-[#82B4CC]/30 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-2xl">
                      <FileText className="w-6 h-6 text-[#1164A3]" />
                      About This Session
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">
                      {session.description}
                    </p>
                  </CardContent>
                </Card>

                {/* Main Topic */}
                <Card className="border-[#82B4CC]/30 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-2xl">
                      <Target className="w-6 h-6 text-[#68B9C4]" />
                      Main Topic
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                      {session.mainTopic}
                    </p>
                  </CardContent>
                </Card>

                {/* Discussion Points */}
                {session.discussionPoints && (
                  <Card className="border-[#82B4CC]/30 shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-2xl">
                        <MessageCircle className="w-6 h-6 text-[#82B4CC]" />
                        Discussion Points
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {session.discussionPoints.split("\n").map((point, index) => {
                          const cleaned = point.trim();
                          if (!cleaned) return null;
                          const text = cleaned.replace(/^[-•]\s*/, "");
                          return (
                            <div key={index} className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-[#68B9C4] flex-shrink-0 mt-0.5" />
                              <p className="text-gray-700">{text}</p>
                            </div>
                          );
                        })}
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Expected Outcome */}
                {session.expectedOutcome && (
                  <Card className="border-[#82B4CC]/30 shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-2xl">
                        <Lightbulb className="w-6 h-6 text-[#B0A3B3]" />
                        Expected Outcome
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                        {session.expectedOutcome}
                      </p>
                    </CardContent>
                  </Card>
                )}
              </div>

              {/* Right Column - Sidebar */}
              <div className="space-y-6">
                {/* Registration Card */}
                <Card className="border-[#1164A3] border-2 shadow-xl">
                  <CardHeader className="bg-gradient-to-r from-[#1164A3] to-[#68B9C4] text-white">
                    <CardTitle className="text-center text-xl">Session Details</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 space-y-4">
                    {/* Date & Time */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-3 bg-[#1164A3]/5 rounded-lg">
                        <Calendar className="w-5 h-5 text-[#1164A3]" />
                        <div>
                          <p className="text-xs text-gray-600">Date</p>
                          <p className="font-semibold text-gray-800">{formatDate(session.date)}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 p-3 bg-[#68B9C4]/5 rounded-lg">
                        <Clock className="w-5 h-5 text-[#68B9C4]" />
                        <div>
                          <p className="text-xs text-gray-600">Time</p>
                          <p className="font-semibold text-gray-800">{session.startTime}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 p-3 bg-[#82B4CC]/5 rounded-lg">
                        <Clock className="w-5 h-5 text-[#82B4CC]" />
                        <div>
                          <p className="text-xs text-gray-600">Duration</p>
                          <p className="font-semibold text-gray-800">{session.duration}</p>
                        </div>
                      </div>
                    </div>

                    {/* Capacity */}
                    {session.maxAttendees && (
                      <div className="p-4 bg-gradient-to-r from-[#1164A3]/5 to-[#68B9C4]/5 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-gray-700 font-medium">Capacity</span>
                          <Users className="w-5 h-5 text-[#1164A3]" />
                        </div>
                        <div className="flex items-baseline gap-2">
                          <span className="text-3xl font-bold text-[#1164A3]">
                            {session._count?.registrations || 0}
                          </span>
                          <span className="text-gray-600">/ {session.maxAttendees}</span>
                        </div>
                        <div className="mt-2 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-[#1164A3] to-[#68B9C4]"
                            style={{
                              width: `${((session._count?.registrations || 0) / session.maxAttendees) * 100}%`,
                            }}
                          />
                        </div>
                        <p className="text-sm text-gray-600 mt-2">
                          {session.maxAttendees - (session._count?.registrations || 0)} seats available
                        </p>
                      </div>
                    )}

                    {/* Deadline Warning */}
                    {session.registrationDeadline && (
                      <div className={`p-3 rounded-lg border-2 ${
                        new Date(session.registrationDeadline) < new Date()
                          ? "bg-red-50 border-red-200"
                          : "bg-amber-50 border-amber-200"
                      }`}>
                        <div className="flex items-center gap-2 mb-1">
                          <AlertCircle className={`w-5 h-5 ${
                            new Date(session.registrationDeadline) < new Date()
                              ? "text-red-600"
                              : "text-amber-600"
                          }`} />
                          <p className="text-xs text-gray-600">Registration Deadline</p>
                        </div>
                        <p className={`font-semibold ${
                          new Date(session.registrationDeadline) < new Date()
                            ? "text-red-800"
                            : "text-amber-800"
                        }`}>
                          {formatDate(session.registrationDeadline)}
                        </p>
                      </div>
                    )}

                    {/* Register Button */}
                    <Button
                      onClick={handleRegister}
                      disabled={!isRegistrationOpen()}
                      className={`w-full py-6 text-lg font-semibold ${
                        isRegistrationOpen()
                          ? "bg-gradient-to-r from-[#1164A3] to-[#68B9C4] hover:from-[#68B9C4] hover:to-[#82B4CC]"
                          : "bg-gray-400 cursor-not-allowed"
                      } text-white`}
                    >
                      {!isRegistrationOpen()
                        ? session.status === "completed"
                          ? "Session Completed"
                          : "Registration Closed"
                        : "Register Now"}
                    </Button>
                  </CardContent>
                </Card>

                {/* Speaker Info */}
                <Card className="border-[#82B4CC]/30 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <User className="w-5 h-5 text-[#1164A3]" />
                      Speaker Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Name</p>
                      <p className="font-semibold text-gray-800">{session.speakerName}</p>
                    </div>
                    {session.speakerBio && (
                      <div>
                        <p className="text-xs text-gray-600 mb-1">Bio</p>
                        <p className="text-sm text-gray-700">{session.speakerBio}</p>
                      </div>
                    )}
                    {session.speakerEmail && (
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Mail className="w-4 h-4" />
                        <a href={`mailto:${session.speakerEmail}`} className="text-[#1164A3] hover:underline">
                          {session.speakerEmail}
                        </a>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}