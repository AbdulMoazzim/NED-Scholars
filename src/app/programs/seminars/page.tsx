"use client"

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Lightbulb,
  Users,
  Award,
  Globe,
  Briefcase,
  Rocket,
  TrendingUp,
  Target,
  Video,
  MapPin,
  Calendar,
  Play,
  ArrowRight,
  GraduationCap,
  Building2,
  Zap,
  Heart,
  MessageCircle,
  BookOpen,
  Laptop,
  Network,
  Plane,
  Loader2,
  Clock,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { GetUpcomingSeminars, GetAllSeminars } from "@/app/actions/seminar";
import { Seminar } from "@/lib/form-types";
import { toast } from "sonner";
import Image from "next/image";
import bannerImage from "../../../data/images/Programs/seminar.png";

export default function SeminarSeriesNewPage() {
  const router = useRouter();
  const [upcomingSeminars, setUpcomingSeminars] = useState<Seminar[]>([]);
  const [previousSeminars, setPreviousSeminars] = useState<Seminar[]>([]);
  const [loading, setLoading] = useState(true);
  const [viewMoreData, setviewMoreData] = useState(6);

  const handleViewButton = (()=> {
    setviewMoreData(previousSeminars.length);
  })

  useEffect(() => {
    fetchSeminars();
  }, []);

  const fetchSeminars = async () => {
    setLoading(true);
    try {
      const [upcomingRes, allRes] = await Promise.all([
        GetUpcomingSeminars(),
        GetAllSeminars(),
      ]);

      if (upcomingRes.success && upcomingRes.data) {
        setUpcomingSeminars(upcomingRes.data as Seminar[]);
      }

      if (allRes.success && allRes.data) {
        const completed = (allRes.data as Seminar[]).filter(
          (s) => s.status === "completed"
        );
        setPreviousSeminars(completed);
      }
    } catch (error) {
      toast.error("Failed to load seminars");
      console.error("Error fetching seminars:", error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatTime = (date: Date) => {
    return new Date(date).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  const calculateDuration = (startDate: Date, endDate?: Date) => {
    if (!endDate) return "TBD";
    const diff = new Date(endDate).getTime() - new Date(startDate).getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    return `${hours}h ${minutes}m`;
  };

  const getSeminarColor = (index: number) => {
    const colors = [
      "from-[#1164A3] to-[#68B9C4]",
      "from-[#68B9C4] to-[#82B4CC]",
      "from-[#82B4CC] to-[#B0A3B3]",
    ];
    return colors[index % colors.length];
  };

  const seminarFeatures = [
    {
      icon: <Laptop className="w-6 h-6" />,
      title: "Live Technology Demonstrations",
      description: "Hands-on showcases of emerging technologies in action",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Career Success Stories",
      description: "Learn from professionals who've achieved global success",
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: "Networking Opportunities",
      description: "Connect with industry professionals and ambitious peers",
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Interactive Q&A Sessions",
      description: "Get personalized answers to your career questions",
    },
  ];

  const certificationAreas = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Six Sigma & Lean Methodologies",
      subtitle: "Advanced Statistics",
      description: "Process optimization and quality management expertise",
      color: "from-[#1164A3] to-[#68B9C4]",
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Project Management",
      subtitle: "Professional Leadership",
      description: "Master project execution and team management",
      color: "from-[#68B9C4] to-[#82B4CC]",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "AI & Machine Learning",
      subtitle: "Future Technologies",
      description: "Cutting-edge artificial intelligence applications",
      color: "from-[#82B4CC] to-[#B0A3B3]",
    },
    {
      icon: <Laptop className="w-8 h-8" />,
      title: "Embedded Systems",
      subtitle: "Hardware Programming",
      description: "Raspberry Pi, Arduino, and IoT applications",
      color: "from-[#1164A3] to-[#82B4CC]",
    },
  ];

  const accreditationBodies = [
    {
      acronym: "SME",
      fullName: "Society of Manufacturing Engineers",
      description: "Global leader in manufacturing education",
    },
    {
      acronym: "ASEM",
      fullName: "American Society for Engineering Management",
      description: "Premier professional organization for engineering management",
    },
    {
      acronym: "ASME",
      fullName: "American Society of Mechanical Engineers",
      description: "World's largest mechanical engineering society",
    },
    {
      acronym: "IEOM Society",
      fullName: "Industrial Engineering & Operations Management",
      description: "International society promoting industrial engineering excellence",
    },
  ];

  const scholarBenefits = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Break the 'Local Limits' Mentality",
      description: "Learn how NED graduates conquered global challenges",
      color: "from-[#1164A3] to-[#68B9C4]",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Discover Emerging Tech",
      description: "AI, renewable energy, advanced manufacturing, and more",
      color: "from-[#68B9C4] to-[#82B4CC]",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Get Career Roadmaps",
      description: "Understand skills and steps to reach top companies",
      color: "from-[#82B4CC] to-[#B0A3B3]",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Network with Decision-Makers",
      description: "Connect directly with hiring managers and innovators",
      color: "from-[#1164A3] to-[#82B4CC]",
    },
  ];

  const presenterBenefits = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Give Back to Your Alma Mater",
      description: "Inspire the next generation of engineers",
      color: "from-[#82B4CC] to-[#B0A3B3]",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Understand Pakistan's Talent Pool",
      description: "See firsthand the potential of NED's scholars",
      color: "from-[#1164A3] to-[#68B9C4]",
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Expand Your Professional Network",
      description: "Connect with future hires and collaborators",
      color: "from-[#68B9C4] to-[#82B4CC]",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Strengthen Your Personal Brand",
      description: "Share your expertise with a passionate audience",
      color: "from-[#82B4CC] to-[#B0A3B3]",
    },
  ];

  const uniqueFeatures = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Real-World Case Studies",
      description: "Not just theory, but proven applications",
    },
    {
      icon: <Laptop className="w-8 h-8" />,
      title: "Interactive Workshops",
      description: "Hands-on sessions with tools and software",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global-Local Fusion",
      description: "International best practices adapted for Pakistan's market",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Mentorship Opportunities",
      description: "Many seminars lead to long-term mentor relationships",
    },
  ];

  const presenterTypes = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Expat NEDians",
      description: "Willing to share international experiences",
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Pakistan-based Professionals",
      description: "Innovating in tech and engineering sectors",
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Entrepreneurs",
      description: "Who've built successful startups",
    },
  ];

  const successStories = [
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Career Opportunity in Germany",
      story: "A 2023 attendee landed a job at a presenter's company in Germany",
      color: "from-[#1164A3] to-[#68B9C4]",
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Clean-Tech Startup Launch",
      story: "A solar energy workshop led to a scholar launching a clean-tech startup",
      color: "from-[#68B9C4] to-[#82B4CC]",
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "International Research Collaboration",
      story: "An AI seminar inspired a research collaboration between NED and a U.S. university",
      color: "from-[#82B4CC] to-[#B0A3B3]",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}

      <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
                          <Image
                            src={bannerImage.src}
                            alt="banner"
                            fill
                            priority
                            quality={90}
                            className="object-cover"
                          />
                          {/* Overlay */}
                          <div className="absolute inset-0 opacity-40 bg-gradient-to-r from-[#1164A3]/90 via-[#68B9C4]/75 to-[#82B4CC]/60" />
                          
                          {/* Content */}
                          <div className="relative z-10 h-full flex items-center">
                          <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30 text-base px-4 py-2">
              Knowledge Exchange Platform
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              NED Scholars Seminar Series
            </h1>
            <p className="text-2xl text-white/90 mb-4">
              Igniting Innovation Through Knowledge Exchange
            </p>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Bridging Global Expertise with Local Talent
            </p>
          </div>
        </div>
                          </div>
                        </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Card className="shadow-2xl mb-12 border-[#82B4CC]/20">
              <CardContent className="p-10">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#1164A3] to-[#68B9C4] rounded-2xl flex items-center justify-center text-white flex-shrink-0">
                    <Lightbulb className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">
                      Exposure Inspires Excellence
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      At NED Scholars, we believe that exposure inspires
                      excellence. Our Seminar Series brings together NED&apos;s
                      brightest minds and accomplished global professionals for
                      an electrifying exchange of ideas, cutting-edge
                      technologies, and career-defining insights.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      Featuring NEDians returning from abroad and industry
                      leaders, these seminars provide:
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  {seminarFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-4 p-4 bg-[#82B4CC]/10 rounded-xl"
                    >
                      <div className="text-[#1164A3] flex-shrink-0 mt-1">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1 flex items-center">
                          {feature.title}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quote */}
            <Card className="bg-gradient-to-r from-[#82B4CC]/20 to-[#B0A3B3]/20 border-l-4 border-[#1164A3] shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="text-[#1164A3] text-6xl leading-none">&quot;</div>
                  <p className="text-xl text-gray-700 italic pt-2">
                    Seeing is believing. When our scholars witness NED alumni
                    thriving globally, they realize their own potential is
                    limitless.
                  </p>
                  <div className="text-[#1164A3] text-6xl leading-none">&quot;</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Upcoming Seminars */}
       <section className="py-20 bg-gradient-to-r from-[#B0A3B3]/10 to-[#82B4CC]/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[#1164A3] text-white">Coming Soon</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Upcoming Seminars
              </h2>
              <p className="text-gray-600 text-lg">
                Register now to secure your spot in our next sessions
              </p>
            </div>

            {loading ? (
              <div className="flex justify-center items-center py-12">
                <Loader2 className="w-12 h-12 animate-spin text-[#1164A3]" />
              </div>
            ) : upcomingSeminars.length === 0 ? (
              <Card className="border-[#82B4CC]/30">
                <CardContent className="p-12 text-center">
                  <Users className="w-16 h-16 mx-auto mb-4 text-[#68B9C4] opacity-50" />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    No Upcoming Seminars
                  </h3>
                  <p className="text-gray-600">
                    Check back soon for new seminar announcements!
                  </p>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-6">
                {upcomingSeminars.map((seminar, index) => (
                  <Card
                    key={seminar.id}
                    className="hover:shadow-xl hover:border-[#1164A3] transition-all duration-300 cursor-pointer overflow-hidden group"
                    onClick={() => router.push(`/seminars/${seminar.id}`)}
                  >
                    <CardContent className="p-0">
                      <div className="flex flex-col md:flex-row">
                        {/* Image Section */}
                        {seminar.images && seminar.images.length > 0 ? (
                          <div className="relative w-full md:w-64 h-48 md:h-auto overflow-hidden bg-gradient-to-br from-[#1164A3]/20 to-[#68B9C4]/20 flex-shrink-0">
                            <img
                              src={seminar.images[0].url}
                              alt={seminar.images[0].alt || seminar.title}
                              className="object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                            <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                              <Badge className="bg-black/70 text-white border-0">
                                {seminar.location}
                              </Badge>
                              <Badge className="bg-black/70 text-white border-0">
                                {seminar.status}
                              </Badge>
                            </div>
                          </div>
                        ) : (
                          <div className={`relative w-full md:w-64 h-48 md:h-auto bg-gradient-to-r ${getSeminarColor(index)} flex items-center justify-center flex-shrink-0`}>
                            <Users className="w-16 h-16 text-white opacity-30" />
                            <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                              <Badge className="bg-white/20 text-white border-white/30">
                                {seminar.location}
                              </Badge>
                              <Badge className="bg-white/20 text-white border-white/30">
                                {seminar.status}
                              </Badge>
                            </div>
                          </div>
                        )}

                        {/* Content Section */}
                        <div className="flex-1 p-8">
                          <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[#1164A3] transition-colors">
                            {seminar.title}
                          </h3>
                          <p className="text-gray-600 mb-3 line-clamp-2">
                            {seminar.description}
                          </p>
                          <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                            <span className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              {formatDate(seminar.date)}
                            </span>
                            <span className="flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              {formatTime(seminar.date)}
                            </span>
                            <span className="flex items-center">
                              <MapPin className="w-4 h-4 mr-1" />
                              In-Person Event
                            </span>
                            {(seminar.maxCapacity || seminar.physicalCapacity) && (
                              <span className="flex items-center text-[#68B9C4] font-medium">
                                <Users className="w-4 h-4 mr-1" />
                                {(seminar.maxCapacity || seminar.physicalCapacity || 0) - 
                                 seminar.attendees.filter(a => a.attendance_mode === "physical").length} spots available
                              </span>
                            )}
                          </div>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              router.push(`/register/seminar-attendee?seminarId=${seminar.id}`);
                            }}
                            className="bg-gradient-to-r from-[#1164A3] to-[#68B9C4] text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center"
                          >
                            Register Now
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Certification Training - keeping original static content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 text-base bg-[#68B9C4] text-white">Career Enhancement</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Specialized Certification Training Opportunities
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                As part of this ongoing academic collaboration, students will
                learn about exclusive certification training programs conducted
                in partnership with global accreditation bodies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {certificationAreas.map((area, index) => (
                <Card
                  key={index}
                  className="hover:shadow-2xl hover:border-[#1164A3] transition-all duration-300 border-2"
                >
                  <CardContent className="p-8">
                    <div
                      className={`w-20 h-20 bg-gradient-to-r ${area.color} rounded-2xl flex items-center justify-center text-white mb-6`}
                    >
                      {area.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {area.title}
                    </h3>
                    <p className="text-[#1164A3] font-medium mb-3">
                      {area.subtitle}
                    </p>
                    <p className="text-gray-600">{area.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Accreditation Bodies */}
            <Card className="shadow-xl bg-white border-[#82B4CC]/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-2xl">
                  <Award className="w-8 h-8 text-[#1164A3]" />
                  <span>Recognized by Respected Accreditation Bodies</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-6 text-lg">
                  All certifications are recognized and backed by respected
                  third-party accreditation organizations:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {accreditationBodies.map((body, index) => (
                    <div
                      key={index}
                      className="p-6 bg-gradient-to-r from-[#82B4CC]/10 to-[#B0A3B3]/10 rounded-xl"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-[#1164A3] rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0">
                          {body.acronym.substring(0, 1)}
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-1">
                            {body.acronym}
                          </h4>
                          <p className="text-sm font-medium text-[#1164A3] mb-1">
                            {body.fullName}
                          </p>
                          <p className="text-xs text-gray-600">
                            {body.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Previous Seminars - Dynamic */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-[#82B4CC]/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 text-base bg-[#68B9C4] text-white">Watch & Learn</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Previous Seminar Recordings
              </h2>
              <p className="text-xl text-gray-600">
                Access our library of past seminars and continue learning
              </p>
            </div>

            {loading ? (
              <div className="flex justify-center items-center py-12">
                <Loader2 className="w-12 h-12 animate-spin text-[#1164A3]" />
              </div>
            ) : previousSeminars.length === 0 ? (
              <Card className="border-[#82B4CC]/30">
                <CardContent className="p-12 text-center">
                  <Play className="w-16 h-16 mx-auto mb-4 text-[#68B9C4] opacity-50" />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    No Previous Seminars
                  </h3>
                  <p className="text-gray-600">
                    Past seminar recordings will appear here
                  </p>
                </CardContent>
              </Card>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {previousSeminars.slice(0, viewMoreData).map((seminar) => (
                    <Card
                      key={seminar.id}
                      className="hover:shadow-2xl hover:border-[#1164A3] transition-all duration-300 cursor-pointer group overflow-hidden"
                      onClick={() => router.push(`/programs/seminars/${seminar.id}`)}
                    >
                      {/* Image or gradient background */}
                      {seminar.images && seminar.images.length > 0 ? (
                        <div className="relative overflow-hidden h-48">
                          <img
                            src={seminar.images[0].url}
                            alt={seminar.images[0].alt || seminar.title}
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-300" />
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          </div>
                          <Badge className="absolute top-3 right-3 bg-black/70 text-white border-0">
                            <Users className="w-3 h-3 mr-1" />
                            {seminar.attendees.length}
                          </Badge>
                          <Badge className="absolute bottom-3 right-3 bg-black/70 text-white border-0">
                            {calculateDuration(seminar.date, seminar.endDate || undefined)}
                          </Badge>
                        </div>
                      ) : (
                        <div className="relative overflow-hidden bg-gradient-to-br from-[#1164A3]/20 to-[#68B9C4]/20 h-48 flex items-center justify-center">
                          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-300" />
                          <Users className="w-16 h-16 text-[#1164A3] opacity-50" />
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          </div>
                        </div>
                      )}

                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-2">
                          <Badge className="bg-[#82B4CC] text-white">
                            {seminar.location}
                          </Badge>
                          <span className="text-sm font-semibold text-gray-700">
                            {seminar.status}
                          </span>
                        </div>
                        <h4 className="font-bold text-lg text-gray-800 mb-2 line-clamp-2 group-hover:text-[#1164A3] transition-colors">
                          {seminar.title}
                        </h4>
                        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                          {seminar.description}
                        </p>
                        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                          <span className="text-xs text-gray-500 flex items-center">
                            <Calendar className="w-3 h-3 mr-1" />
                            {formatDate(seminar.date)}
                          </span>
                          <span className="text-[#1164A3] hover:text-[#68B9C4] font-semibold flex items-center text-sm">
                            View
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {previousSeminars.length > 6 && viewMoreData > 6 && (
                  <div className="text-center mt-12">
                    <button
                      onClick={() => handleViewButton()}
                      className="bg-gradient-to-r from-[#1164A3] to-[#68B9C4] text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 inline-flex items-center"
                    >
                      <Video className="w-6 h-6 mr-3" />
                      View All Seminars
                      <ArrowRight className="w-6 h-6 ml-3" />
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </section>

      {/* Why Seminars Matter - keeping original content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 text-base bg-[#1164A3] text-white">Impact & Value</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Why These Seminars Matter
              </h2>
              <p className="text-xl text-gray-600">
                Benefits for scholars, presenters, and the entire community
              </p>
            </div>

            {/* For Scholars */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                For Scholars
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {scholarBenefits.map((benefit, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-2xl hover:border-[#1164A3] transition-all duration-300"
                  >
                    <CardContent className="p-8">
                      <div className="flex items-start space-x-6">
                        <div
                          className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center text-white flex-shrink-0`}
                        >
                          {benefit.icon}
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-gray-800 mb-2">
                            {benefit.title}
                          </h4>
                          <p className="text-gray-600">{benefit.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* For Presenters */}
            <div className="mb-12">
              <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                For Presenters (NED Alumni & Experts)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {presenterBenefits.map((benefit, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-2xl hover:border-[#1164A3] transition-all duration-300"
                  >
                    <CardContent className="p-8">
                      <div className="flex items-start space-x-6">
                        <div
                          className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center text-white flex-shrink-0`}
                        >
                          {benefit.icon}
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-gray-800 mb-2">
                            {benefit.title}
                          </h4>
                          <p className="text-gray-600">{benefit.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Unique */}
      <section className="py-20 bg-gradient-to-r from-[#B0A3B3]/10 to-[#82B4CC]/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 text-base bg-[#68B9C4] text-white">Our Distinction</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                What Makes Our Seminars Unique?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {uniqueFeatures.map((feature, index) => (
                <Card
                  key={index}
                  className="hover:shadow-2xl hover:border-[#1164A3] transition-all duration-300 bg-white"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-[#1164A3] to-[#68B9C4] rounded-xl flex items-center justify-center text-white">
                            {feature.icon}
                          </div>
                          <h3 className="text-2xl font-bold text-gray-800">
                            {feature.title}
                          </h3>
                        </div>
                        <p className="text-gray-600 text-lg">
                          {feature.description}
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

      {/* Success Stories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 text-base bg-[#1164A3] text-white">Real Impact</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Success Stories: From Seminar Attendees to Industry Leaders
              </h2>
              <p className="text-xl text-gray-600">
                How our seminars transform careers and create opportunities
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {successStories.map((story, index) => (
                <Card
                  key={index}
                  className="hover:shadow-2xl hover:border-[#1164A3] transition-all duration-300"
                >
                  <CardContent className="p-8 text-center">
                    <div
                      className={`w-20 h-20 bg-gradient-to-r ${story.color} rounded-full flex items-center justify-center text-white mx-auto mb-6`}
                    >
                      {story.icon}
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 mb-4">
                      {story.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {story.story}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action - PRESENTER ONLY */}
      <section className="py-20 bg-gradient-to-r from-[#B0A3B3]/10 to-[#82B4CC]/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 text-base bg-[#1164A3] text-white">Get Involved</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Present as an Expert
              </h2>
              <p className="text-xl text-gray-600">Share your knowledge and inspire the next generation</p>
            </div>

            {/* Present as Expert */}
            <Card className="shadow-2xl border-2 border-[#82B4CC]/20">
              <CardHeader className="bg-gradient-to-r from-[#B0A3B3]/10 to-[#82B4CC]/10 py-4">
                <CardTitle className="flex items-center space-x-3 text-2xl">
                  <Users className="w-10 h-10 text-[#1164A3]" />
                  <span>Present as an Expert</span>
                </CardTitle>
                <p className="text-sm text-gray-600 mt-2">(We Need You!)</p>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-gray-700 mb-6 font-medium">We seek:</p>
                <div className="space-y-4 mb-8">
                  {presenterTypes.map((type, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-4 p-4 bg-[#82B4CC]/10 rounded-xl"
                    >
                      <div className="text-[#1164A3] flex-shrink-0">
                        {type.icon}
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-800 flex items-center mb-1">
                          {type.title}
                        </h5>
                        <p className="text-sm text-gray-600">
                          {type.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <Plane className="w-6 h-6 text-[#1164A3]" />
                    <p className="text-sm text-gray-700 font-medium">
                      Travel Support Available for overseas presenters
                    </p>
                  </div>
                </div>

                <button 
                  onClick={() => router.push("/register/seminar-presenter")} 
                  className="w-full bg-gradient-to-r from-[#68B9C4] to-[#82B4CC] text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300"
                >
                  Propose a Seminar Topic
                </button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final Message */}
      <section className="py-20 bg-gradient-to-r from-[#1164A3] via-[#68B9C4] to-[#82B4CC] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Together, We&apos;re Redefining Engineering Excellence
            </h2>
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-10">
                <div className="flex items-start justify-center space-x-6 mb-8">
                  <div className="text-7xl text-white leading-none">&quot;</div>
                  <p className="text-2xl italic text-white pt-4">
                    Knowledge shared is impact multiplied. Whether you&apos;re a
                    scholar seeking direction or an alum ready to guide, these
                    seminars are where futures take shape.
                  </p>
                  <div className="text-7xl text-white leading-none">&quot;</div>
                </div>
                <p className="text-xl text-white/90 font-bold">
                  NED Scholars: Lighting the Spark of Innovation Since 2010
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}