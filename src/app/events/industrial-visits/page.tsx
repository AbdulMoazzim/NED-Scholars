"use client";

import { ReactNode, useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Factory,
  Users,
  TrendingUp,
  CheckCircle,
  Target,
  Lightbulb,
  Award,
  Clock,
  MapPin,
  Calendar,
  Search,
  Filter,
  Loader2,
  Sparkles,
  Shield,
  Building2,
  Zap,
  Brain,
  Microscope,
  Radio,
  Laptop,
  ArrowRight,
  UserCheck,
  AlertCircle,
  Star,
  Eye,
  FileCheck,
} from "lucide-react";
import { GetUpcomingVisits, GetPastVisits,  GetAllRegistrationsByUser } from "@/app/actions/industrial-visit";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Image from "next/image";
import type { IndustrialVisit, Registration } from "@/lib/form-types";
import { useSession } from "@/lib/auth-client";

export default function IndustrialVisitsPage() {
  const router = useRouter();
  const [upcomingVisits, setUpcomingVisits] = useState<IndustrialVisit[]>([]);
  const [pastVisits, setPastVisits] = useState<IndustrialVisit[]>([]);
  const [filteredVisits, setFilteredVisits] = useState<IndustrialVisit[]>([]);
  const [userRegistrations, setUserRegistrations] = useState<Registration[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [industryFilter, setIndustryFilter] = useState("all");
  const [activeRegistrationTab, setActiveRegistrationTab] = useState<"upcoming" | "completed">("upcoming");
  const session = useSession();
  useEffect(() => {
    fetchVisits();
  }, []);

  useEffect(() => {
    filterVisits();
  }, [searchQuery, industryFilter, upcomingVisits]);

  const fetchVisits = async () => {
    setLoading(true);
    try {
      const [upcomingRes, pastRes, registrationsRes] = await Promise.all([
        GetUpcomingVisits(),
        GetPastVisits(),
        GetAllRegistrationsByUser(session.data?.user.id || ""),
      ]);

      if (upcomingRes.success && upcomingRes.data) {
        setUpcomingVisits(upcomingRes.data as IndustrialVisit[]);
        setFilteredVisits(upcomingRes.data as IndustrialVisit[]);
      }
      if (pastRes.success && pastRes.data) {
        setPastVisits(pastRes.data as IndustrialVisit[]);
      }
      if (registrationsRes.success && registrationsRes.data) {
        setUserRegistrations(registrationsRes.data as Registration[]);
      }
    } catch (error) {
      toast.error("Failed to load visits");
      console.error("Error fetching visits:", error);
    } finally {
      setLoading(false);
    }
  };

  const filterVisits = () => {
    let filtered = [...upcomingVisits];

    if (searchQuery) {
      filtered = filtered.filter(
        (visit) =>
          visit.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          visit.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
          visit.location.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (industryFilter !== "all") {
      filtered = filtered.filter((visit) => visit.industry === industryFilter);
    }

    setFilteredVisits(filtered);
  };

  const getIndustryIcon = (industry: string) => {
    const icons: Record<string, ReactNode> = {
      manufacturing: <Factory className="w-5 h-5" />,
      textile: <Factory className="w-5 h-5" />,
      software_it: <Laptop className="w-5 h-5" />,
      power_energy: <Zap className="w-5 h-5" />,
      telecommunication: <Radio className="w-5 h-5" />,
      engineering: <Building2 className="w-5 h-5" />,
      research_development: <Microscope className="w-5 h-5" />,
    };
    return icons[industry] || <Factory className="w-5 h-5" />;
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

  const getAvailableSeats = (visit: IndustrialVisit) => {
    return visit.maxParticipants - visit.currentParticipants;
  };

  const isRegistrationOpen = (visit: IndustrialVisit) => {
    if (visit.registrationDeadline) {
      return new Date(visit.registrationDeadline) > new Date();
    }
    return new Date(visit.visitDate) > new Date();
  };

  const getUpcomingRegistrations = () => {
    return userRegistrations.filter((reg) => {
      const visit = upcomingVisits.find((v) => v.id === reg.visitId);
      return visit && visit.status === "upcoming";
    });
  };

  const getCompletedRegistrations = () => {
    return userRegistrations.filter((reg) => {
      const visit = pastVisits.find((v) => v.id === reg.visitId);
      return visit && visit.status === "completed";
    });
  };

  const getRegistrationStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      registered: "bg-blue-500 text-white",
      confirmed: "bg-[#68B9C4] text-white",
      waitlist: "bg-amber-500 text-white",
      cancelled: "bg-red-500 text-white",
      attended: "bg-green-500 text-white",
      no_show: "bg-gray-400 text-white",
    };
    return colors[status] || "bg-gray-400 text-white";
  };

  const objectives = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Practical Exposure",
      description: "Provide practical exposure aligned with academic learning",
      color: "from-[#1164A3] to-[#68B9C4]",
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Real-World Operations",
      description: "Help students understand real-world industrial operations",
      color: "from-[#68B9C4] to-[#82B4CC]",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Modern Technology",
      description: "Familiarize with modern tools, machinery, and technologies",
      color: "from-[#82B4CC] to-[#B0A3B3]",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Professional Ethics",
      description: "Develop professional ethics, discipline, and workplace awareness",
      color: "from-[#1164A3] to-[#82B4CC]",
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Practical Applications",
      description: "Connect classroom concepts with practical applications",
      color: "from-[#68B9C4] to-[#B0A3B3]",
    },
  ];

  const learningOutcomes = [
    {
      icon: <Lightbulb className="w-6 h-6" />,
      text: "Understand real-world applications of academic concepts",
    },
    {
      icon: <Users className="w-6 h-6" />,
      text: "Interact with industry professionals and experts",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      text: "Learn about current industry trends and innovations",
    },
    {
      icon: <Brain className="w-6 h-6" />,
      text: "Improve communication, observation, and analytical skills",
    },
    {
      icon: <Target className="w-6 h-6" />,
      text: "Gain clarity about career paths and professional expectations",
    },
  ];

  const industries = [
    {
      icon: <Factory className="w-8 h-8" />,
      name: "Manufacturing Industries",
      color: "from-[#1164A3] to-[#68B9C4]",
    },
    {
      icon: <Laptop className="w-8 h-8" />,
      name: "Software Houses and IT Firms",
      color: "from-[#68B9C4] to-[#82B4CC]",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      name: "Power Plants and Energy Sectors",
      color: "from-[#82B4CC] to-[#B0A3B3]",
    },
    {
      icon: <Radio className="w-8 h-8" />,
      name: "Telecommunication Companies",
      color: "from-[#1164A3] to-[#82B4CC]",
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      name: "Engineering and Industrial Units",
      color: "from-[#68B9C4] to-[#B0A3B3]",
    },
    {
      icon: <Microscope className="w-8 h-8" />,
      name: "Research and Development Centers",
      color: "from-[#82B4CC] to-[#1164A3]",
    },
  ];

  const benefits = [
    {
      icon: <Eye className="w-6 h-6" />,
      text: "Hands-on exposure to industrial environments",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      text: "Enhanced professional confidence and awareness",
    },
    {
      icon: <Brain className="w-6 h-6" />,
      text: "Improved academic and practical understanding",
    },
    {
      icon: <Target className="w-6 h-6" />,
      text: "Better preparation for internships and future careers",
    },
    {
      icon: <Award className="w-6 h-6" />,
      text: "Industry-oriented learning experience",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1164A3] via-[#68B9C4] to-[#82B4CC] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30 text-base px-4 py-2">
              <Factory className="w-4 h-4 mr-2 inline" />
              Experiential Learning
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Industrial Visits
            </h1>
            <p className="text-2xl text-white/90 mb-4">
              Bridging Theory with Practice
            </p>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Experience real-world industrial environments and connect classroom
              concepts with practical applications through guided industrial visits
            </p>
          </div>
        </div>
      </section>

      {/* My Registrations Section */}
      {session && userRegistrations.length > 0 && (
        <section className="py-12 bg-gradient-to-r from-[#B0A3B3]/5 to-[#82B4CC]/5">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-8">
                <Badge className="mb-3 text-base bg-[#1164A3] text-white">
                  <FileCheck className="w-4 h-4 mr-2 inline" />
                  Your Registrations
                </Badge>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                  My Industrial Visits
                </h2>
                <p className="text-gray-600">
                  Track your registered and completed industrial visits
                </p>
              </div>

              <Card className="border-[#82B4CC]/30 shadow-lg">
                <CardContent className="p-6">
                  <Tabs value={activeRegistrationTab} onValueChange={(val) => setActiveRegistrationTab(val as "upcoming" | "completed")}>
                    <TabsList className="mb-6 w-full grid grid-cols-2">
                      <TabsTrigger value="upcoming" className="data-[state=active]:bg-[#1164A3] data-[state=active]:text-white">
                        <Calendar className="w-4 h-4 mr-2" />
                        Upcoming ({getUpcomingRegistrations().length})
                      </TabsTrigger>
                      <TabsTrigger value="completed" className="data-[state=active]:bg-[#68B9C4] data-[state=active]:text-white">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Completed ({getCompletedRegistrations().length})
                      </TabsTrigger>
                    </TabsList>

                    {/* Upcoming Registrations */}
                    <TabsContent value="upcoming">
                      {getUpcomingRegistrations().length === 0 ? (
                        <div className="text-center py-12">
                          <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                          <p className="text-gray-600">No upcoming visits registered</p>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          {getUpcomingRegistrations().map((registration) => {
                            const visit = upcomingVisits.find((v) => v.id === registration.visitId);
                            if (!visit) return null;

                            return (
                              <Card
                                key={registration.id}
                                className="border-[#82B4CC]/30 hover:border-[#1164A3] hover:shadow-md transition-all cursor-pointer"
                                onClick={() => router.push(`/events/industrial-visits/${visit.slug}`)}
                              >
                                <CardContent className="p-6">
                                  <div className="flex items-start justify-between gap-4">
                                    <div className="flex-1">
                                      <div className="flex items-start gap-4">
                                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${getIndustryColor(visit.industry)} flex items-center justify-center text-white flex-shrink-0`}>
                                          {getIndustryIcon(visit.industry)}
                                        </div>
                                        <div className="flex-1">
                                          <h3 className="text-lg font-bold text-gray-800 mb-1">
                                            {visit.title}
                                          </h3>
                                          <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                                            <Building2 className="w-4 h-4" />
                                            <span className="font-medium">{visit.company}</span>
                                          </div>

                                          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
                                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                              <MapPin className="w-4 h-4 text-[#1164A3]" />
                                              {visit.location}
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                              <Calendar className="w-4 h-4 text-[#1164A3]" />
                                              {new Date(visit.visitDate).toLocaleDateString()}
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                              <Clock className="w-4 h-4 text-[#1164A3]" />
                                              {new Date(visit.startTime).toLocaleTimeString([], {
                                                hour: "2-digit",
                                                minute: "2-digit",
                                              })}
                                            </div>
                                          </div>

                                          <div className="flex flex-wrap gap-2">
                                            <Badge className={getRegistrationStatusColor(registration.registrationStatus)}>
                                              {registration.registrationStatus}
                                            </Badge>
                                            <Badge className="bg-[#82B4CC] text-white">
                                              {formatIndustry(visit.industry)}
                                            </Badge>
                                            {visit.transportProvided && (
                                              <Badge variant="outline" className="border-[#68B9C4] text-[#68B9C4]">
                                                <CheckCircle className="w-3 h-3 mr-1" />
                                                Transport Provided
                                              </Badge>
                                            )}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <Button
                                      variant="outline"
                                      size="sm"
                                      className="border-[#1164A3] text-[#1164A3] hover:bg-[#1164A3] hover:text-white"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        router.push(`/events/industrial-visits/${visit.slug}`);
                                      }}
                                    >
                                      View Details
                                      <ArrowRight className="w-4 h-4 ml-1" />
                                    </Button>
                                  </div>
                                </CardContent>
                              </Card>
                            );
                          })}
                        </div>
                      )}
                    </TabsContent>

                    {/* Completed Registrations */}
                    <TabsContent value="completed">
                      {getCompletedRegistrations().length === 0 ? (
                        <div className="text-center py-12">
                          <CheckCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                          <p className="text-gray-600">No completed visits yet</p>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          {getCompletedRegistrations().map((registration) => {
                            const visit = pastVisits.find((v) => v.id === registration.visitId);
                            if (!visit) return null;

                            return (
                              <Card
                                key={registration.id}
                                className="border-[#82B4CC]/30 hover:border-[#68B9C4] hover:shadow-md transition-all cursor-pointer"
                                onClick={() => router.push(`/events/industrial-visits/${visit.slug}`)}
                              >
                                <CardContent className="p-6">
                                  <div className="flex items-start justify-between gap-4">
                                    <div className="flex-1">
                                      <div className="flex items-start gap-4">
                                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${getIndustryColor(visit.industry)} flex items-center justify-center text-white flex-shrink-0`}>
                                          {getIndustryIcon(visit.industry)}
                                        </div>
                                        <div className="flex-1">
                                          <h3 className="text-lg font-bold text-gray-800 mb-1">
                                            {visit.title}
                                          </h3>
                                          <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                                            <Building2 className="w-4 h-4" />
                                            <span className="font-medium">{visit.company}</span>
                                          </div>

                                          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
                                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                              <MapPin className="w-4 h-4 text-[#68B9C4]" />
                                              {visit.location}
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                              <Calendar className="w-4 h-4 text-[#68B9C4]" />
                                              {new Date(visit.visitDate).toLocaleDateString()}
                                            </div>
                                            {registration.rating && (
                                              <div className="flex items-center gap-1 text-sm">
                                                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                                                <span className="font-semibold text-gray-700">
                                                  {registration.rating}/5
                                                </span>
                                              </div>
                                            )}
                                          </div>

                                          <div className="flex flex-wrap gap-2 mb-3">
                                            <Badge className={getRegistrationStatusColor(registration.registrationStatus)}>
                                              {registration.registrationStatus}
                                            </Badge>
                                            <Badge className="bg-[#82B4CC] text-white">
                                              {formatIndustry(visit.industry)}
                                            </Badge>
                                            <Badge variant="outline" className="border-green-500 text-green-600">
                                              <CheckCircle className="w-3 h-3 mr-1" />
                                              Completed
                                            </Badge>
                                          </div>

                                          {registration.feedback && (
                                            <div className="mt-3 p-3 bg-gray-50 rounded-lg">
                                              <p className="text-sm text-gray-700 italic">
                                                &quot;{registration.feedback}&quot;
                                              </p>
                                              {registration.feedbackDate && (
                                                <p className="text-xs text-gray-500 mt-1">
                                                  {new Date(registration.feedbackDate).toLocaleDateString()}
                                                </p>
                                              )}
                                            </div>
                                          )}
                                        </div>
                                      </div>
                                    </div>
                                    <Button
                                      variant="outline"
                                      size="sm"
                                      className="border-[#68B9C4] text-[#68B9C4] hover:bg-[#68B9C4] hover:text-white"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        router.push(`/events/industrial-visits/${visit.slug}`);
                                      }}
                                    >
                                      View Details
                                      <ArrowRight className="w-4 h-4 ml-1" />
                                    </Button>
                                  </div>
                                </CardContent>
                              </Card>
                            );
                          })}
                        </div>
                      )}
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Card className="shadow-2xl mb-12 border-[#82B4CC]/20">
              <CardContent className="p-10">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#1164A3] to-[#68B9C4] rounded-2xl flex items-center justify-center text-white flex-shrink-0">
                    <Factory className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">
                      Overview
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      Industrial Visits are an integral part of experiential learning
                      by NED Scholars. These visits are designed to bridge the gap
                      between theoretical education and real-world industrial
                      practices by exposing students to professional environments,
                      modern technologies, and industry workflows.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      By witnessing production processes, quality control systems, and
                      organizational structures, students gain a clearer understanding
                      of how theoretical knowledge is applied in professional
                      settings.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-20 bg-gradient-to-r from-[#B0A3B3]/10 to-[#82B4CC]/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 text-base bg-[#68B9C4] text-white">
                Our Mission
              </Badge>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Objectives of Industrial Visits
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {objectives.map((objective, index) => (
                <Card
                  key={index}
                  className="hover:shadow-2xl hover:border-[#1164A3] transition-all duration-300"
                >
                  <CardContent className="p-8 text-center">
                    <div
                      className={`w-20 h-20 rounded-full bg-gradient-to-r ${objective.color} flex items-center justify-center text-white mx-auto mb-6`}
                    >
                      {objective.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      {objective.title}
                    </h3>
                    <p className="text-gray-600">{objective.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 text-base bg-[#1164A3] text-white">
                What You&apos;ll Gain
              </Badge>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Learning Outcomes
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Through Industrial Visits, students are able to develop practical
                skills and gain real-world insights
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {learningOutcomes.map((outcome, index) => (
                <Card
                  key={index}
                  className="border-[#82B4CC]/30 hover:border-[#1164A3] transition-all"
                >
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[#1164A3]/10 flex items-center justify-center text-[#1164A3] flex-shrink-0">
                      {outcome.icon}
                    </div>
                    <p className="text-gray-700 font-medium pt-2">{outcome.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries Covered */}
      <section className="py-20 bg-gradient-to-r from-[#B0A3B3]/10 to-[#82B4CC]/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 text-base bg-[#68B9C4] text-white">
                Diverse Opportunities
              </Badge>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Industries Covered
              </h2>
              <p className="text-xl text-gray-600">
                Our Industrial Visit program includes visits to various sectors
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl hover:border-[#1164A3] transition-all"
                >
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-16 h-16 rounded-xl bg-gradient-to-r ${industry.color} flex items-center justify-center text-white mx-auto mb-4`}
                    >
                      {industry.icon}
                    </div>
                    <h4 className="font-semibold text-gray-800">{industry.name}</h4>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Student Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 text-base bg-[#1164A3] text-white">
                Your Advantage
              </Badge>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Student Benefits
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <Card
                  key={index}
                  className="border-[#82B4CC]/30 hover:shadow-lg transition-all"
                >
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[#68B9C4]/10 flex items-center justify-center text-[#68B9C4]">
                      {benefit.icon}
                    </div>
                    <p className="text-gray-700 font-medium">{benefit.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Visits */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-[#82B4CC]/10">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 text-base bg-[#1164A3] text-white">
                <Sparkles className="w-4 h-4 mr-1 inline" />
                Join Us
              </Badge>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Upcoming Industrial Visits
              </h2>
              <p className="text-xl text-gray-600">
                Register now for upcoming visits to leading industries
              </p>
            </div>

            {/* Filters */}
            <Card className="mb-8 border-[#82B4CC]/30">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <Input
                      placeholder="Search by company or location..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 border-[#82B4CC]/50 focus:ring-[#1164A3]"
                    />
                  </div>
                  <Select value={industryFilter} onValueChange={setIndustryFilter}>
                    <SelectTrigger className="border-[#82B4CC]/50">
                      <Filter className="w-4 h-4 mr-2" />
                      <SelectValue placeholder="Industry Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Industries</SelectItem>
                      <SelectItem value="manufacturing">Manufacturing</SelectItem>
                      <SelectItem value="textile">Textile</SelectItem>
                      <SelectItem value="software_it">Software & IT</SelectItem>
                      <SelectItem value="power_energy">Power & Energy</SelectItem>
                      <SelectItem value="telecommunication">
                        Telecommunication
                      </SelectItem>
                      <SelectItem value="engineering">Engineering</SelectItem>
                      <SelectItem value="research_development">
                        Research & Development
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Visit Cards */}
            {loading ? (
              <div className="flex justify-center items-center py-20">
                <Loader2 className="w-12 h-12 animate-spin text-[#1164A3]" />
              </div>
            ) : filteredVisits.length === 0 ? (
              <Card className="border-[#82B4CC]/30">
                <CardContent className="p-20 text-center">
                  <Factory className="w-16 h-16 text-[#68B9C4] mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    No Upcoming Visits
                  </h3>
                  <p className="text-gray-600">
                    Check back soon for new industrial visit opportunities
                  </p>
                </CardContent>
              </Card>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredVisits.map((visit) => {
                  const availableSeats = getAvailableSeats(visit);
                  const isFull = availableSeats <= 0;
                  const registrationOpen = isRegistrationOpen(visit);

                  return (
                    <Card
                      key={visit.id}
                      className={`hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 "border-[#82B4CC]/30 hover:border-[#1164A3]`}
                      onClick={() => router.push(`/register/industrial-visit-attendee?visitId=${visit.id}`)}
                    >

                      <CardHeader>
                        <div
                          className={`w-12 h-12 rounded-lg bg-gradient-to-r ${getIndustryColor(
                            visit.industry
                          )} flex items-center justify-center text-white mb-4`}
                        >
                          {getIndustryIcon(visit.industry)}
                        </div>
                        <CardTitle className="text-xl mb-2 line-clamp-2">
                          {visit.title}
                        </CardTitle>
                        <div className="flex items-center gap-2 text-gray-600 mb-2">
                          <Building2 className="w-4 h-4" />
                          <span className="font-semibold">{visit.company}</span>
                        </div>
                      </CardHeader>

                      <CardContent>
                        <p className="text-gray-600 mb-4 line-clamp-2">
                          {visit.description}
                        </p>

                        <div className="space-y-3 mb-4">
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <MapPin className="w-4 h-4 text-[#1164A3]" />
                            <span>{visit.location}</span>
                          </div>

                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Calendar className="w-4 h-4 text-[#1164A3]" />
                            <span>
                              {new Date(visit.visitDate).toLocaleDateString()}
                            </span>
                          </div>

                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Clock className="w-4 h-4 text-[#1164A3]" />
                            <span>
                              {new Date(visit.startTime).toLocaleTimeString([], {
                                hour: "2-digit",
                                minute: "2-digit",
                              })}
                            </span>
                          </div>

                          <div className="flex items-center gap-2 text-sm">
                            <Users className="w-4 h-4 text-[#68B9C4]" />
                            <span
                              className={
                                isFull
                                  ? "text-red-600 font-semibold"
                                  : "text-[#68B9C4] font-semibold"
                              }
                            >
                              {isFull
                                ? "Fully Booked"
                                : `${availableSeats} seats available`}
                            </span>
                          </div>

                          {visit.transportProvided && (
                            <div className="flex items-center gap-2 text-sm text-[#68B9C4]">
                              <CheckCircle className="w-4 h-4" />
                              <span className="font-medium">
                                Transport Provided
                              </span>
                            </div>
                          )}
                        </div>

                        <div className="flex flex-wrap gap-2 mb-4">
                          <Badge className="bg-[#82B4CC] text-white text-xs">
                            {formatIndustry(visit.industry)}
                          </Badge>
                          {visit.duration && (
                            <Badge variant="outline" className="text-xs">
                              {visit.duration}
                            </Badge>
                          )}
                        </div>

                        {visit.registrationDeadline && registrationOpen && (
                          <div className="mb-4 p-2 bg-amber-50 border border-amber-200 rounded text-xs text-amber-800 flex items-center gap-2">
                            <AlertCircle className="w-3 h-3" />
                            Register by:{" "}
                            {new Date(
                              visit.registrationDeadline
                            ).toLocaleDateString()}
                          </div>
                        )}

                        <Button
                          className={`w-full ${
                            isFull || !registrationOpen
                              ? "bg-gray-400 cursor-not-allowed"
                              : "bg-gradient-to-r from-[#1164A3] to-[#68B9C4]"
                          } text-white`}
                          onClick={(e) => {
                            e.stopPropagation();
                            if (!isFull && registrationOpen) {
                              router.push(
                                `/register/industrial-visit-attendee?visitId=${visit.id}`
                              );
                            }
                          }}
                          disabled={isFull || !registrationOpen}
                        >
                          {isFull
                            ? "Fully Booked"
                            : !registrationOpen
                            ? "Registration Closed"
                            : "Register Now"}
                          {!isFull && registrationOpen && (
                            <ArrowRight className="w-4 h-4 ml-2" />
                          )}
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Past Visits */}
      {pastVisits.length > 0 && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <Badge className="mb-4 text-base bg-[#68B9C4] text-white">
                  Success Stories
                </Badge>
                <h2 className="text-4xl font-bold text-gray-800 mb-4">
                  Past Industrial Visits
                </h2>
                <p className="text-xl text-gray-600">
                  Explore our successful visits to leading industries
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {pastVisits.map((visit) => (
                  <Card
                    key={visit.id}
                    className="hover:shadow-xl transition-all duration-300 cursor-pointer border-[#82B4CC]/30 hover:border-[#1164A3]"
                    onClick={() => router.push(`/events/industrial-visits/${visit.slug}`)}
                  >
                    {visit.images && visit.images.length > 0 && (
                      <div className="relative h-64 overflow-hidden">
                        <Image
                        fill
                          src={visit.images[0].url}
                          alt={visit.images[0].alt || visit.title}
                          className="object-cover"
                        />
                      </div>
                    )}
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className="bg-[#82B4CC] text-white">
                          {formatIndustry(visit.industry)}
                        </Badge>
                        <Badge variant="outline">Completed</Badge>
                      </div>
                      <CardTitle className="text-2xl">{visit.title}</CardTitle>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Building2 className="w-4 h-4" />
                        <span className="font-semibold">{visit.company}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {visit.description}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(visit.visitDate).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <UserCheck className="w-4 h-4" />
                          {visit.currentParticipants} attended
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        className="w-full border-[#1164A3] text-[#1164A3] hover:bg-[#1164A3] hover:text-white"
                      >
                        View Details
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Safety & Supervision */}
      <section className="py-20 bg-gradient-to-r from-[#B0A3B3]/10 to-[#82B4CC]/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Card className="border-2 border-[#82B4CC]/30 shadow-xl">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#1164A3] to-[#68B9C4] rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  <Shield className="w-8 h-8" />
                </div>
                <CardTitle className="text-3xl">
                  Safety and Supervision
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
                  All Industrial Visits are conducted under proper supervision and
                  strict safety guidelines. Faculty members and industry
                  professionals guide students throughout the visit to ensure a
                  secure, informative, and productive learning experience.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div className="p-4 bg-[#1164A3]/5 rounded-lg">
                    <Shield className="w-8 h-8 text-[#1164A3] mx-auto mb-2" />
                    <h4 className="font-semibold text-gray-800 mb-1">
                      Safety First
                    </h4>
                    <p className="text-sm text-gray-600">
                      Strict safety protocols followed
                    </p>
                  </div>
                  <div className="p-4 bg-[#68B9C4]/5 rounded-lg">
                    <Users className="w-8 h-8 text-[#68B9C4] mx-auto mb-2" />
                    <h4 className="font-semibold text-gray-800 mb-1">
                      Expert Supervision
                    </h4>
                    <p className="text-sm text-gray-600">
                      Guided by faculty and professionals
                    </p>
                  </div>
                  <div className="p-4 bg-[#82B4CC]/5 rounded-lg">
                    <CheckCircle className="w-8 h-8 text-[#82B4CC] mx-auto mb-2" />
                    <h4 className="font-semibold text-gray-800 mb-1">
                      Secure Experience
                    </h4>
                    <p className="text-sm text-gray-600">
                      Informative and productive visits
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Conclusion CTA */}
      <section className="py-20 bg-gradient-to-r from-[#1164A3] via-[#68B9C4] to-[#82B4CC] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Experience Industry Firsthand?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              NED Scholars is a dedicated student-led organization that creates
              meaningful learning and growth opportunities. Through industrial
              visits, we connect students with real-world industry exposure,
              professional environments, and practical learning experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => {
                  const visitsSection = document.querySelector(
                    'section:has([class*="Upcoming Industrial Visits"])'
                  );
                  visitsSection?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-white text-[#1164A3] hover:bg-gray-100 text-lg px-8 py-6"
              >
                <Factory className="w-5 h-5 mr-2" />
                View Upcoming Visits
              </Button>
             
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}