"use client";

import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
  MessageCircle,
  Users,
  Calendar,
  Clock,
  Mic,
  Globe,
  Heart,
  Coffee,
  Lightbulb,
  TrendingUp,
  BookOpen,
  Briefcase,
  GraduationCap,
  Video,
  Play,
  ArrowRight,
  CheckCircle2,
  Star,
  Target,
  Loader2,
  User,
  Search,
  Filter,
  FileCheck,
  Sparkles,
} from "lucide-react";
import {
  GetUpcomingGupShupSessions,
  GetCompletedGupShupSessions,
  GetAllGupShupRegistrationsByUser,
} from "@/app/actions/gupshup";
import { toast } from "sonner";
import Image from "next/image";
import { useSession } from "@/lib/auth-client";
import { GupShupRegistration, GupShupSession } from "@/lib/form-types";



export default function GupShupPage() {
  const router = useRouter();
  const session = useSession();
  const [upcomingSessions, setUpcomingSessions] = useState<GupShupSession[]>([]);
  const [completedSessions, setCompletedSessions] = useState<GupShupSession[]>([]);
  const [filteredUpcoming, setFilteredUpcoming] = useState<GupShupSession[]>([]);
  const [userRegistrations, setUserRegistrations] = useState<GupShupRegistration[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [activeRegistrationTab, setActiveRegistrationTab] = useState<"upcoming" | "completed">("upcoming");

    useEffect(() => {
    fetchSessions();
  }, []);

  useEffect(() => {
    filterSessions();
  }, [searchQuery, categoryFilter, upcomingSessions]);


  const fetchSessions = async () => {
    setLoading(true);
    try {
      const [upcomingRes, completedRes, registrationsRes] = await Promise.all([
        GetUpcomingGupShupSessions(),
        GetCompletedGupShupSessions(),
        GetAllGupShupRegistrationsByUser(session?.data?.user.id || ""),
      ]);
      

      if (upcomingRes.success) {
        setUpcomingSessions(upcomingRes.data as GupShupSession[]);
        setFilteredUpcoming(upcomingRes.data as GupShupSession[]);
      }
      if (completedRes.success) {
        setCompletedSessions(completedRes.data as GupShupSession[]);
      }
      if (registrationsRes.success) {
        setUserRegistrations(registrationsRes.data as GupShupRegistration[]);
      }
    } catch (error) {
      console.error("Error fetching sessions:", error);
      toast.error("Failed to load sessions");
    } finally {
      setLoading(false);
    }
  };


  const filterSessions = () => {
    let filtered = [...upcomingSessions];

    if (searchQuery) {
      filtered = filtered.filter(
        (session) =>
          session.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          session.speakerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          session.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (categoryFilter !== "all") {
      filtered = filtered.filter((session) => session.category === categoryFilter);
    }

    setFilteredUpcoming(filtered);
  };

  const formatCategory = (category: string) => {
    return category
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
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

  const getCategoryIcon = (category: string) => {
    const icons: Record<string, ReactNode> = {
      politics: <Users className="w-5 h-5" />,
      entertainment: <Star className="w-5 h-5" />,
      social_activism: <Heart className="w-5 h-5" />,
      academia: <GraduationCap className="w-5 h-5" />,
      religion: <BookOpen className="w-5 h-5" />,
      business: <Briefcase className="w-5 h-5" />,
      technology: <Coffee className="w-5 h-5" />,
      arts_culture: <Star className="w-5 h-5" />,
      health_wellness: <Heart className="w-5 h-5" />,
      other: <Coffee className="w-5 h-5" />,
    };
    return icons[category] || <Coffee className="w-5 h-5" />;
  };

  const getAvailableSeats = (session: GupShupSession) => {
    if (!session.maxAttendees) return null;
    return session.maxAttendees - (session._count?.registrations || 0);
  };

  const isRegistrationOpen = (session: GupShupSession) => {
    return session.status === "upcoming" && new Date(session.date) > new Date();
  };

  const getUpcomingRegistrations = () => {
    return userRegistrations.filter((reg) => {
      const sess = upcomingSessions.find((s) => s.id === reg.session.id);
      return sess && sess.status === "upcoming";
    });
  };

  const getCompletedRegistrations = () => {
    return userRegistrations.filter((reg) => {
      const sess = completedSessions.find((s) => s.id === reg.session.id);
      return sess && sess.status === "completed";
    });
  };

  const getRegistrationStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      confirmed: "bg-[#68B9C4] text-white",
      waitlist: "bg-amber-500 text-white",
      cancelled: "bg-red-500 text-white",
      attended: "bg-green-500 text-white",
    };
    return colors[status] || "bg-gray-400 text-white";
  };

  const guestCategories = [
    {
      icon: <Users className="w-6 h-6" />,
      category: "Politics",
      description: "Policy makers, activists, community leaders",
      color: "from-[#1164A3] to-[#68B9C4]",
    },
    {
      icon: <Star className="w-6 h-6" />,
      category: "Entertainment",
      description: "Artists, musicians, content creators",
      color: "from-[#82B4CC] to-[#B0A3B3]",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      category: "Social Activism",
      description: "Change makers, NGO leaders, volunteers",
      color: "from-[#68B9C4] to-[#82B4CC]",
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      category: "Academia",
      description: "Professors, researchers, thought leaders",
      color: "from-[#1164A3] to-[#82B4CC]",
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      category: "Religion",
      description: "Scholars, spiritual guides, philosophers",
      color: "from-[#68B9C4] to-[#82B4CC]",
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      category: "Business",
      description: "Entrepreneurs, executives, innovators",
      color: "from-[#82B4CC] to-[#B0A3B3]",
    },
  ];

  const eventFormat = [
    {
      icon: <Mic className="w-8 h-8" />,
      title: "Guest Speaker Session",
      duration: "10-15 minutes",
      description: "Featured guest delivers a talk on a topic of personal or public interest",
      step: 1,
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Open Discussion",
      duration: "30-40 minutes",
      description: "Live discussion with audience participation and diverse perspectives",
      step: 2,
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Open Mic Q&A",
      duration: "15-20 minutes",
      description: "Audience questions and spirited exchange of ideas in an informal setting",
      step: 3,
    },
  ];

  const benefitsOfAttending = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      benefit: "Engage in authentic conversations beyond formalities",
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      benefit: "Gain diverse perspectives from thought leaders",
    },
    {
      icon: <Users className="w-6 h-6" />,
      benefit: "Network with like-minded individuals",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      benefit: "Expand your worldview through open dialogue",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      benefit: "Connect with the community in a casual setting",
    },
    {
      icon: <Target className="w-6 h-6" />,
      benefit: "Discover new ideas and opportunities",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1164A3] via-[#68B9C4] to-[#82B4CC] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-4">
              <Coffee className="w-16 h-16 text-white" />
            </div>
            <Badge className="mb-4 bg-white/20 text-white border-white/30 text-base px-4 py-2">
              Special Monthly Feature
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              &quot;Gup Shup&quot;
            </h1>
            <p className="text-2xl text-white/90 mb-4">
              Casual Conversations. Meaningful Insights.
            </p>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              In the spirit of open dialogue and diverse perspectives, NED
              Scholars hosts &quot;Gup Shup&quot;—a monthly virtual gathering inspired by
              the Urdu term for friendly conversation.
            </p>
          </div>
        </div>
      </section>

      

      {/* What is Gup Shup */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[#68B9C4] text-white">About the Event</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                What is Gup Shup?
              </h2>
            </div>

            <Card className="shadow-xl mb-8 border-[#82B4CC]/20">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#1164A3] to-[#68B9C4] rounded-full flex items-center justify-center text-white flex-shrink-0">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                      Each Gup Shup features a guest speaker from any walk of
                      life—politics, entertainment, social activism, academia,
                      or religion—who delivers a 10–15 minute talk on a topic
                      of personal or public interest.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed flex items-start">
                      The floor is then opened for live discussion, open mic
                      questions, and spirited exchange of ideas—allowing
                      everyone to connect beyond formalities and learn from one
                      another in an informal, inclusive environment.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Guest Categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {guestCategories.map((category, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl hover:border-[#1164A3] transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div
                      className={`w-14 h-14 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center text-white mb-4`}
                    >
                      {category.icon}
                    </div>
                    <h4 className="font-bold text-gray-800 mb-2 text-lg">
                      {category.category}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {category.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Event Format */}
      <section className="py-16 bg-gradient-to-r from-[#B0A3B3]/10 to-[#82B4CC]/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[#1164A3] text-white">How It Works</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Event Format
              </h2>
              <p className="text-gray-600 text-lg">
                A structured yet informal three-part experience
              </p>
            </div>

            <div className="space-y-6">
              {eventFormat.map((format, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl hover:border-[#1164A3] transition-all duration-300"
                >
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
                      <div className="w-20 h-20 bg-gradient-to-r from-[#1164A3] to-[#68B9C4] rounded-2xl flex items-center justify-center text-white flex-shrink-0">
                        {format.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <div className="w-8 h-8 bg-gradient-to-r from-[#68B9C4] to-[#82B4CC] rounded-full flex items-center justify-center text-white font-bold text-sm">
                            {format.step}
                          </div>
                          <h3 className="text-xl font-bold text-gray-800">
                            {format.title}
                          </h3>
                        </div>
                        <div className="flex items-center space-x-4 mb-3">
                          <Badge className="flex items-center bg-[#82B4CC] text-white">
                            <Clock className="w-3 h-3 mr-1" />
                            {format.duration}
                          </Badge>
                        </div>
                        <p className="text-gray-600">{format.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[#1164A3] text-white">Why Attend</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Benefits of Attending
              </h2>
              <p className="text-gray-600 text-lg">
                What you&apos;ll gain from participating in Gup Shup
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefitsOfAttending.map((item, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl hover:border-[#1164A3] transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#1164A3] to-[#68B9C4] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-700 font-medium flex items-center">
                          <CheckCircle2 className="w-5 h-5 text-[#68B9C4] mr-2 flex-shrink-0" />
                          {item.benefit}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
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
                  My Gup Shup Sessions
                </h2>
                <p className="text-gray-600">
                  Track your registered and attended sessions
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
                        <CheckCircle2 className="w-4 h-4 mr-2" />
                        Completed ({getCompletedRegistrations().length})
                      </TabsTrigger>
                    </TabsList>

                    {/* Upcoming Registrations */}
                    <TabsContent value="upcoming">
                      {getUpcomingRegistrations().length === 0 ? (
                        <div className="text-center py-12">
                          <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                          <p className="text-gray-600">No upcoming sessions registered</p>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          {getUpcomingRegistrations().map((registration) => {
                            const sess = upcomingSessions.find((s) => s.id === registration.session.id);
                            if (!sess) return null;

                            return (
                              <Card
                                key={registration.id}
                                className="border-[#82B4CC]/30 hover:border-[#1164A3] hover:shadow-md transition-all cursor-pointer"
                                onClick={() => router.push(`/events/gupshup/${sess.slug}`)}
                              >
                                <CardContent className="p-6">
                                  <div className="flex items-start justify-between gap-4">
                                    <div className="flex-1">
                                      <div className="flex items-start gap-4">
                                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${getCategoryColor(sess.category)} flex items-center justify-center text-white flex-shrink-0`}>
                                          {getCategoryIcon(sess.category)}
                                        </div>
                                        <div className="flex-1">
                                          <h3 className="text-lg font-bold text-gray-800 mb-1">
                                            {sess.title}
                                          </h3>
                                          <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                                            <User className="w-4 h-4" />
                                            <span className="font-medium">{sess.speakerName}</span>
                                          </div>

                                          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
                                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                              <Calendar className="w-4 h-4 text-[#1164A3]" />
                                              {new Date(sess.date).toLocaleDateString()}
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                              <Clock className="w-4 h-4 text-[#1164A3]" />
                                              {sess.startTime}
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                              <Clock className="w-4 h-4 text-[#1164A3]" />
                                              {sess.duration}
                                            </div>
                                          </div>

                                          <div className="flex flex-wrap gap-2">
                                            <Badge className={getRegistrationStatusColor(registration.registrationStatus)}>
                                              {registration.registrationStatus}
                                            </Badge>
                                            <Badge className="bg-[#82B4CC] text-white">
                                              {formatCategory(sess.category)}
                                            </Badge>
                                            {sess.featured && (
                                              <Badge className="bg-amber-500 text-white">
                                                <Star className="w-3 h-3 mr-1" />
                                                Featured
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
                                        router.push(`/events/gupshup/${sess.slug}`);
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
                          <CheckCircle2 className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                          <p className="text-gray-600">No completed sessions yet</p>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          {getCompletedRegistrations().map((registration) => {
                            const sess = completedSessions.find((s) => s.id === registration.session.id);
                            if (!sess) return null;

                            return (
                              <Card
                                key={registration.id}
                                className="border-[#82B4CC]/30 hover:border-[#68B9C4] hover:shadow-md transition-all cursor-pointer"
                                onClick={() => router.push(`/events/gupshup/${sess.slug}`)}
                              >
                                <CardContent className="p-6">
                                  <div className="flex items-start justify-between gap-4">
                                    <div className="flex-1">
                                      <div className="flex items-start gap-4">
                                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${getCategoryColor(sess.category)} flex items-center justify-center text-white flex-shrink-0`}>
                                          {getCategoryIcon(sess.category)}
                                        </div>
                                        <div className="flex-1">
                                          <h3 className="text-lg font-bold text-gray-800 mb-1">
                                            {sess.title}
                                          </h3>
                                          <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                                            <User className="w-4 h-4" />
                                            <span className="font-medium">{sess.speakerName}</span>
                                          </div>

                                          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
                                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                              <Calendar className="w-4 h-4 text-[#68B9C4]" />
                                              {new Date(sess.date).toLocaleDateString()}
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
                                              {formatCategory(sess.category)}
                                            </Badge>
                                            <Badge variant="outline" className="border-green-500 text-green-600">
                                              <CheckCircle2 className="w-3 h-3 mr-1" />
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
                                        router.push(`/events/gupshup/${sess.slug}`);
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

      {/* Upcoming Sessions */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-[#82B4CC]/10">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 text-base bg-[#1164A3] text-white">
                <Sparkles className="w-4 h-4 mr-1 inline" />
                Join Us
              </Badge>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Upcoming Gup Shup Sessions
              </h2>
              <p className="text-xl text-gray-600">
                Register now for upcoming conversations with diverse voices
              </p>
            </div>

            {/* Filters */}
            <Card className="mb-8 border-[#82B4CC]/30">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <Input
                      placeholder="Search by title or speaker..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 border-[#82B4CC]/50 focus:ring-[#1164A3]"
                    />
                  </div>
                  <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                    <SelectTrigger className="border-[#82B4CC]/50">
                      <Filter className="w-4 h-4 mr-2" />
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="politics">Politics</SelectItem>
                      <SelectItem value="entertainment">Entertainment</SelectItem>
                      <SelectItem value="social_activism">Social Activism</SelectItem>
                      <SelectItem value="academia">Academia</SelectItem>
                      <SelectItem value="religion">Religion</SelectItem>
                      <SelectItem value="business">Business</SelectItem>
                      <SelectItem value="technology">Technology</SelectItem>
                      <SelectItem value="arts_culture">Arts & Culture</SelectItem>
                      <SelectItem value="health_wellness">Health & Wellness</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Session Cards */}
            {loading ? (
              <div className="flex justify-center items-center py-20">
                <Loader2 className="w-12 h-12 animate-spin text-[#1164A3]" />
              </div>
            ) : filteredUpcoming.length === 0 ? (
              <Card className="border-[#82B4CC]/30">
                <CardContent className="p-20 text-center">
                  <Coffee className="w-16 h-16 text-[#68B9C4] mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    No Upcoming Sessions
                  </h3>
                  <p className="text-gray-600">
                    Check back soon for new Gup Shup opportunities
                  </p>
                </CardContent>
              </Card>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredUpcoming.map((session) => {
                  const availableSeats = getAvailableSeats(session);
                  const isFull = availableSeats !== null && availableSeats <= 0;
                  const registrationOpen = isRegistrationOpen(session);

                  return (
                    <Card
                      key={session.id}
                      className="hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 border-[#82B4CC]/30 hover:border-[#1164A3]"
                      onClick={() => router.push(`/events/gupshup/${session.slug}`)}
                    >
                      <CardHeader>
                        <div
                          className={`w-12 h-12 rounded-lg bg-gradient-to-r ${getCategoryColor(
                            session.category
                          )} flex items-center justify-center text-white mb-4`}
                        >
                          {getCategoryIcon(session.category)}
                        </div>
                        <CardTitle className="text-xl mb-2 line-clamp-2">
                          {session.title}
                        </CardTitle>
                        <div className="flex items-center gap-2 text-gray-600 mb-2">
                          <User className="w-4 h-4" />
                          <span className="font-semibold">{session.speakerName}</span>
                        </div>
                      </CardHeader>

                      <CardContent>
                        <p className="text-gray-600 mb-4 line-clamp-2">
                          {session.description}
                        </p>

                        <div className="space-y-3 mb-4">
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Calendar className="w-4 h-4 text-[#1164A3]" />
                            <span>
                              {new Date(session.date).toLocaleDateString()}
                            </span>
                          </div>

                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Clock className="w-4 h-4 text-[#1164A3]" />
                            <span>{session.startTime} • {session.duration}</span>
                          </div>

                          {availableSeats !== null && (
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
                          )}
                        </div>

                        <div className="flex flex-wrap gap-2 mb-4">
                          <Badge className="bg-[#82B4CC] text-white text-xs">
                            {formatCategory(session.category)}
                          </Badge>
                          {session.featured && (
                            <Badge className="bg-amber-500 text-white text-xs">
                              <Star className="w-3 h-3 mr-1" />
                              Featured
                            </Badge>
                          )}
                        </div>

                        <Button
                          className={`w-full ${
                            isFull || !registrationOpen
                              ? "bg-gray-400 cursor-not-allowed"
                              : "bg-gradient-to-r from-[#1164A3] to-[#68B9C4]"
                          } text-white`}
                          onClick={(e) => {
                            e.stopPropagation();
                            if (!isFull && registrationOpen) {
                              router.push(`/events/gupshup/${session.slug}`);
                            }
                          }}
                          disabled={isFull || !registrationOpen}
                        >
                          {isFull
                            ? "Fully Booked"
                            : !registrationOpen
                            ? "Registration Closed"
                            : "View Details & Register"}
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

      {/* Previous Sessions */}
      {completedSessions.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <Badge className="mb-4 bg-[#68B9C4] text-white">Watch & Learn</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  Previous Gup Shup Sessions
                </h2>
                <p className="text-gray-600 text-lg">
                  Catch up on conversations you might have missed
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {completedSessions.slice(0, 6).map((session) => (
                  <Card
                    key={session.id}
                    className="hover:shadow-xl hover:border-[#1164A3] transition-all duration-300 cursor-pointer group"
                    onClick={() => router.push(`/events/gupshup/${session.slug}`)}
                  >
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden h-48">
                        {session.thumbnailImage ? (
                          <Image
                            src={session.thumbnailImage[0].url}
                            alt={session.thumbnailImage[0].alt || session.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        ) : (
                          <div className={`w-full h-full bg-gradient-to-r ${getCategoryColor(session.category)} flex items-center justify-center`}>
                            <Coffee className="w-16 h-16 text-white opacity-50" />
                          </div>
                        )}
                        
                      </div>
                      <div className="p-6">
                        <Badge className="mb-3 bg-[#82B4CC] text-white">
                          {formatCategory(session.category)}
                        </Badge>
                        <h4 className="font-bold text-gray-800 mb-2 text-lg group-hover:text-[#1164A3] transition-colors line-clamp-2">
                          {session.title}
                        </h4>
                        <p className="text-gray-600 text-sm mb-2 flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          Speaker: {session.speakerName}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500 flex items-center">
                            <Calendar className="w-3 h-3 mr-1" />
                            {new Date(session.date).toLocaleDateString("en-US", {
                              month: "long",
                              year: "numeric",
                            })}
                          </span>
                          <span className="text-[#1164A3] hover:text-[#68B9C4] text-sm font-medium flex items-center">
                            Watch Now
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {completedSessions.length > 6 && (
                <div className="text-center mt-8">
                  <Button className="bg-gradient-to-r from-[#1164A3] to-[#68B9C4] text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center">
                    <Video className="w-5 h-5 mr-2" />
                    View All Sessions
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-[#1164A3] via-[#68B9C4] to-[#82B4CC] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Coffee className="w-20 h-20 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Our Next Gup Shup!
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Be part of the conversation. Connect, learn, and grow with diverse
              voices from our community.
            </p>

            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
              <Button
                onClick={() => {
                  if (filteredUpcoming.length > 0) {
                    router.push(`/events/gupshup/${filteredUpcoming[0].slug}`);
                  } else {
                    toast.info("No upcoming sessions at the moment. Check back soon!");
                  }
                }}
                className="bg-white text-[#1164A3] px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <Calendar className="w-5 h-5 mr-2" />
                {filteredUpcoming.length > 0 ? "Register for Next Session" : "Coming Soon"}
              </Button>
            </div>

            <div className="flex justify-center space-x-6 text-sm text-white/90">
              <span className="flex items-center">
                <Globe className="w-4 h-4 mr-2" />
                100% Free
              </span>
              <span className="flex items-center">
                <Users className="w-4 h-4 mr-2" />
                Open to All
              </span>
              <span className="flex items-center">
                <Lightbulb className="w-4 h-4 mr-2" />
                Inspire & Learn
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-2xl bg-gradient-to-r from-[#82B4CC]/20 to-[#B0A3B3]/20 border-l-4 border-[#1164A3]">
              <CardContent className="p-8 md:p-12 text-center">
                <blockquote className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
                  &quot;The best conversations happen over chai—casual, genuine, and
                  full of unexpected insights.&quot;
                </blockquote>
                <p className="text-lg text-gray-600">
                  Join us for your monthly dose of Gup Shup
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}