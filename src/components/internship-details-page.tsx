"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Briefcase,
  MapPin,
  Calendar,
  Clock,
  DollarSign,
  Building2,
  ArrowLeft,
  FileText,
  Target,
  CheckCircle,
  AlertCircle,
  Loader2,
  Mail,
  Phone,
  ExternalLink,
  Users,
  Star,
  Award,
  Sparkles,
} from "lucide-react";
import { GetInternshipBySlug } from "@/app/actions/internships";
import { toast } from "sonner";

interface Internship {
  id: string;
  title: string;
  company: string;
  location: string;
  locationType: string;
  description: string;
  responsibilities: string;
  requirements: string;
  category: string;
  duration: string;
  startDate?: Date;
  endDate?: Date;
  applicationDeadline?: Date;
  applicationUrl?: string;
  contactEmail?: string;
  contactPhone?: string;
  isPaid: boolean;
  stipend?: string;
  skills: string[];
  benefits?: string;
  numberOfPositions?: number;
  status: string;
  featured: boolean;
  slug: string;
  _count?: {
    applications: number;
  };
}

interface InternshipDetailPageProps {
  slug: string;
}

export default function InternshipDetailPage({ slug }: InternshipDetailPageProps) {
  const router = useRouter();
  const [internship, setInternship] = useState<Internship | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchInternship();
  }, [slug]);

  const fetchInternship = async () => {
    setLoading(true);
    try {
      const result = await GetInternshipBySlug(slug);
      if (result.success && result.data) {
        setInternship(result.data as Internship);
      } else {
        toast.error("Internship not found");
        router.push("/programs/internships");
      }
    } catch (error) {
      toast.error("Failed to load internship details");
      console.error("Error fetching internship:", error);
    } finally {
      setLoading(false);
    }
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      engineering: "from-[#1164A3] to-[#68B9C4]",
      information_technology: "from-[#68B9C4] to-[#82B4CC]",
      software_development: "from-[#82B4CC] to-[#B0A3B3]",
      research_development: "from-[#1164A3] to-[#82B4CC]",
      corporate_administrative: "from-[#68B9C4] to-[#B0A3B3]",
      education_training: "from-[#82B4CC] to-[#1164A3]",
    };
    return colors[category] || "from-[#1164A3] to-[#68B9C4]";
  };

  const formatCategory = (category: string) => {
    return category
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const formatLocationType = (type: string) => {
    return type.charAt(0).toUpperCase() + type.slice(1);
  };

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const isApplicationOpen = () => {
    if (!internship) return false;
    if (internship.status !== "active") return false;
    if (internship.applicationDeadline && new Date(internship.applicationDeadline) < new Date()) {
      return false;
    }
    return true;
  };

  const handleApply = () => {
    if (internship?.applicationUrl) {
      window.open(internship.applicationUrl, "_blank");
    } else {
      router.push(`/register/internship-application?internshipId=${internship?.id}`);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
        <div className="text-center">
          <Loader2 className="w-16 h-16 animate-spin text-[#1164A3] mx-auto mb-4" />
          <p className="text-gray-600 text-lg">Loading internship details...</p>
        </div>
      </div>
    );
  }

  if (!internship) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
        <Card className="max-w-md">
          <CardContent className="p-12 text-center">
            <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Internship Not Found</h2>
            <p className="text-gray-600 mb-6">The internship you&apos;re looking for doesn&apos;t exist.</p>
            <Button
              onClick={() => router.push("/internships")}
              className="bg-gradient-to-r from-[#1164A3] to-[#68B9C4] text-white"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Internships
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className={`bg-gradient-to-r ${getCategoryColor(internship.category)} text-white py-16`}>
        <div className="container mx-auto px-4">
          <Button
            variant="ghost"
            onClick={() => router.push("/internships")}
            className="text-white hover:bg-white/20 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Internships
          </Button>

          <div className="max-w-5xl mx-auto">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Badge className="bg-white/20 text-white border-white/30">
                <Briefcase className="w-3 h-3 mr-1" />
                {formatCategory(internship.category)}
              </Badge>
              <Badge className="bg-white/20 text-white border-white/30">
                {formatLocationType(internship.locationType)}
              </Badge>
              {internship.featured && (
                <Badge className="bg-white/20 text-white border-white/30">
                  <Sparkles className="w-3 h-3 mr-1" />
                  Featured
                </Badge>
              )}
            </div>
            
            <h1 className="text-5xl font-bold mb-4">{internship.title}</h1>
            
            <div className="flex flex-wrap items-center gap-6 text-white/90 mb-6">
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5" />
                <span className="text-xl font-semibold">{internship.company}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span className="text-lg">{internship.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{internship.duration}</span>
              </div>
            </div>

            {internship.isPaid && internship.stipend && (
              <div className="flex items-center gap-2 text-white/90 text-lg">
                <DollarSign className="w-5 h-5" />
                <span className="font-semibold">{internship.stipend}</span>
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
                {/* Description */}
                <Card className="border-[#82B4CC]/30 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-2xl">
                      <FileText className="w-6 h-6 text-[#1164A3]" />
                      About This Internship
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">
                      {internship.description}
                    </p>
                  </CardContent>
                </Card>

                {/* Responsibilities */}
                <Card className="border-[#82B4CC]/30 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-2xl">
                      <Target className="w-6 h-6 text-[#68B9C4]" />
                      Responsibilities
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {internship.responsibilities.split("\n").map((responsibility, index) => {
                        const cleaned = responsibility.trim();
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

                {/* Requirements */}
                <Card className="border-[#82B4CC]/30 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-2xl">
                      <CheckCircle className="w-6 h-6 text-[#82B4CC]" />
                      Requirements
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {internship.requirements.split("\n").map((requirement, index) => {
                        const cleaned = requirement.trim();
                        if (!cleaned) return null;
                        const text = cleaned.replace(/^[-•]\s*/, "");
                        return (
                          <div key={index} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-[#82B4CC] flex-shrink-0 mt-0.5" />
                            <p className="text-gray-700">{text}</p>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>

                {/* Skills */}
                <Card className="border-[#82B4CC]/30 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-2xl">
                      <Award className="w-6 h-6 text-[#1164A3]" />
                      Required Skills
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-3">
                      {internship.skills.map((skill, index) => (
                        <Badge
                          key={index}
                          className="bg-[#1164A3]/10 text-[#1164A3] border-[#1164A3]/30 text-sm py-2 px-4"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Benefits */}
                {internship.benefits && (
                  <Card className="border-[#82B4CC]/30 shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-2xl">
                        <Star className="w-6 h-6 text-[#68B9C4]" />
                        Benefits
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                        {internship.benefits}
                      </p>
                    </CardContent>
                  </Card>
                )}
              </div>

              {/* Right Column - Sidebar */}
              <div className="space-y-6">
                {/* Application Card */}
                <Card className="border-[#1164A3] border-2 shadow-xl">
                  <CardHeader className="bg-gradient-to-r from-[#1164A3] to-[#68B9C4] text-white">
                    <CardTitle className="text-center text-xl">Application Details</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 space-y-4">
                    {/* Duration */}
                    <div className="flex items-center gap-3 p-3 bg-[#1164A3]/5 rounded-lg">
                      <Clock className="w-5 h-5 text-[#1164A3]" />
                      <div>
                        <p className="text-xs text-gray-600">Duration</p>
                        <p className="font-semibold text-gray-800">{internship.duration}</p>
                      </div>
                    </div>

                    {/* Dates */}
                    {internship.startDate && (
                      <div className="flex items-center gap-3 p-3 bg-[#68B9C4]/5 rounded-lg">
                        <Calendar className="w-5 h-5 text-[#68B9C4]" />
                        <div>
                          <p className="text-xs text-gray-600">Start Date</p>
                          <p className="font-semibold text-gray-800">{formatDate(internship.startDate)}</p>
                        </div>
                      </div>
                    )}

                    {/* Deadline */}
                    {internship.applicationDeadline && (
                      <div className={`p-3 rounded-lg border-2 ${
                        new Date(internship.applicationDeadline) < new Date()
                          ? "bg-red-50 border-red-200"
                          : "bg-amber-50 border-amber-200"
                      }`}>
                        <div className="flex items-center gap-2 mb-1">
                          <AlertCircle className={`w-5 h-5 ${
                            new Date(internship.applicationDeadline) < new Date()
                              ? "text-red-600"
                              : "text-amber-600"
                          }`} />
                          <p className="text-xs text-gray-600">Application Deadline</p>
                        </div>
                        <p className={`font-semibold ${
                          new Date(internship.applicationDeadline) < new Date()
                            ? "text-red-800"
                            : "text-amber-800"
                        }`}>
                          {formatDate(internship.applicationDeadline)}
                        </p>
                      </div>
                    )}

                    {/* Positions */}
                    {internship.numberOfPositions && internship.numberOfPositions > 1 && (
                      <div className="p-4 bg-gradient-to-r from-[#1164A3]/5 to-[#68B9C4]/5 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-gray-700 font-medium">Available Positions</span>
                          <Users className="w-5 h-5 text-[#1164A3]" />
                        </div>
                        <div className="text-3xl font-bold text-[#1164A3]">
                          {internship.numberOfPositions}
                        </div>
                      </div>
                    )}

                    {/* Applications Count */}
                    {internship._count && (
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Users className="w-4 h-4" />
                          <span>{internship._count.applications} applications received</span>
                        </div>
                      </div>
                    )}

                    {/* Apply Button */}
                    <Button
                      onClick={handleApply}
                      disabled={!isApplicationOpen()}
                      className={`w-full py-6 text-lg font-semibold ${
                        isApplicationOpen()
                          ? "bg-gradient-to-r from-[#1164A3] to-[#68B9C4] hover:from-[#68B9C4] hover:to-[#82B4CC]"
                          : "bg-gray-400 cursor-not-allowed"
                      } text-white`}
                    >
                      {!isApplicationOpen()
                        ? "Applications Closed"
                        : internship.applicationUrl
                        ? "Apply on External Site"
                        : "Apply Now"}
                      {isApplicationOpen() && <ExternalLink className="w-5 h-5 ml-2" />}
                    </Button>

                    {internship.applicationUrl && (
                      <p className="text-xs text-gray-500 text-center">
                        You&apos;ll be redirected to the application page
                      </p>
                    )}
                  </CardContent>
                </Card>

                {/* Contact Information */}
                {(internship.contactEmail || internship.contactPhone) && (
                  <Card className="border-[#82B4CC]/30 shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Mail className="w-5 h-5 text-[#1164A3]" />
                        Contact Information
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {internship.contactEmail && (
                        <div>
                          <p className="text-xs text-gray-600 mb-1">Email</p>
                          <a
                            href={`mailto:${internship.contactEmail}`}
                            className="text-[#1164A3] hover:underline font-medium flex items-center gap-2"
                          >
                            <Mail className="w-4 h-4" />
                            {internship.contactEmail}
                          </a>
                        </div>
                      )}
                      {internship.contactPhone && (
                        <div>
                          <p className="text-xs text-gray-600 mb-1">Phone</p>
                          <a
                            href={`tel:${internship.contactPhone}`}
                            className="text-[#1164A3] hover:underline font-medium flex items-center gap-2"
                          >
                            <Phone className="w-4 h-4" />
                            {internship.contactPhone}
                          </a>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )}

                {/* Company Info */}
                <Card className="border-[#82B4CC]/30 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Building2 className="w-5 h-5 text-[#1164A3]" />
                      Company Details
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Company</p>
                      <p className="font-semibold text-gray-800">{internship.company}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Location</p>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-[#1164A3]" />
                        <p className="font-medium text-gray-800">{internship.location}</p>
                      </div>
                      <Badge variant="outline" className="mt-2">
                        {formatLocationType(internship.locationType)}
                      </Badge>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Industry</p>
                      <Badge className="bg-[#82B4CC] text-white">
                        {formatCategory(internship.category)}
                      </Badge>
                    </div>
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