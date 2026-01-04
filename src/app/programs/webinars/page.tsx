"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Video,
  Globe,
  Award,
  Users,
  Laptop,
  BookOpen,
  CheckCircle2,
  Calendar,
  Clock,
  Play,
  ArrowRight,
  Star,
  Zap,
  TrendingUp,
  Code,
  Briefcase,
  GraduationCap,
  Target,
  Lightbulb,
  Mail,
  Bell,
  Loader2,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { GetUpcomingWebinars, GetAllWebinars } from "@/app/actions/webinar";
import { Webinar } from "@/lib/form-types";
import { toast } from "sonner";
import Image from "next/image";

export default function WebinarSeriesPage() {
  const router = useRouter();
  const [upcomingWebinars, setUpcomingWebinars] = useState<Webinar[]>([]);
  const [previousWebinars, setPreviousWebinars] = useState<Webinar[]>([]);
  const [loading, setLoading] = useState(true);
  const [viewMoreData, setviewMoreData] = useState(6);

  const handleViewButton = (()=> {
    setviewMoreData(previousWebinars.length);
  })

  useEffect(() => {
    fetchWebinars();
  }, []);

  const fetchWebinars = async () => {
    setLoading(true);
    try {
      const [upcomingRes, allRes] = await Promise.all([
        GetUpcomingWebinars(),
        GetAllWebinars(),
      ]);

      if (upcomingRes.success && upcomingRes.data) {
        setUpcomingWebinars(upcomingRes.data);
      }

      if (allRes.success && allRes.data) {
        // Filter for completed webinars only
        const completed = (allRes.data as Webinar[]).filter(
          (w) => w.status === "completed"
        );
        setPreviousWebinars(completed);
      }
    } catch (error) {
      toast.error("Failed to load webinars");
      console.error("Error fetching webinars:", error);
    } finally {
      setLoading(false);
    }
  };

  const trainingAreas = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Six Sigma & Lean Management",
      description: "Process optimization and quality management",
      color: "from-[#1164A3] to-[#68B9C4]",
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Project Management",
      description: "Advanced statistics and leadership skills",
      color: "from-[#68B9C4] to-[#82B4CC]",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "AI & Machine Learning",
      description: "Cutting-edge artificial intelligence applications",
      color: "from-[#82B4CC] to-[#B0A3B3]",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Embedded Systems",
      description: "Raspberry Pi, Arduino & IoT applications",
      color: "from-[#1164A3] to-[#82B4CC]",
    },
  ];

  const certificationBodies = [
    {
      name: "SME",
      fullName: "Society of Manufacturing Engineers",
      icon: <Award className="w-6 h-6" />,
    },
    {
      name: "ASEM",
      fullName: "American Society for Engineering Management",
      icon: <Award className="w-6 h-6" />,
    },
    {
      name: "ASME",
      fullName: "American Society of Mechanical Engineers",
      icon: <Award className="w-6 h-6" />,
    },
    {
      name: "IEOM Society",
      fullName: "Industrial Engineering & Operations Management",
      icon: <Award className="w-6 h-6" />,
    },
  ];

  const webinarFeatures = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert-Led Training",
      description: "Learn from industry professionals and experienced faculty",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Industry-Certified Programs",
      description: "Globally recognized certifications from reputable bodies",
    },
    {
      icon: <Laptop className="w-6 h-6" />,
      title: "Interactive Presentations",
      description: "Engaging sessions combining instruction and career guidance",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Accessible Worldwide",
      description: "Join from anywhere, anytime that suits you",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Career-Focused Content",
      description: "Real-world skills that employers value",
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Practical Application",
      description: "Hands-on learning with industry use cases",
    },
  ];

  const benefits = [
    "Learn at your own pace from anywhere in the world",
    "Gain internationally recognized certifications",
    "Network with professionals and peers globally",
    "Access recorded sessions for future reference",
    "Receive certificates of completion",
    "Build skills that employers actively seek",
  ];

  const getWebinarColor = (index: number) => {
    const colors = [
      "from-[#1164A3] to-[#68B9C4]",
      "from-[#68B9C4] to-[#82B4CC]",
      "from-[#82B4CC] to-[#B0A3B3]",
    ];
    return colors[index % colors.length];
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1164A3] via-[#68B9C4] to-[#82B4CC] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-4">
              <Video className="w-16 h-16 text-white" />
            </div>
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              🌐 Online Learning Platform
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              NED Scholars Webinar Series
            </h1>
            <p className="text-xl text-white/90 mb-4">
              Empowering Minds, Everywhere in the World
            </p>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Join us from the comfort of your home for dynamic online training
              designed to prepare students and young professionals for global
              opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[#68B9C4] text-white">Our Programs</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                What We Offer in Our Webinars
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                Whether you&apos;re looking to upskill, earn certifications, or
                simply stay informed, our webinars deliver real-world value,
                directly to your screen.
              </p>
            </div>

            {/* Training Areas */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Expert-Led Training
              </h3>
              <p className="text-center text-gray-600 mb-8">
                High-demand areas such as:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {trainingAreas.map((area, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-xl hover:border-[#1164A3] transition-all duration-300"
                  >
                    <CardContent className="p-6 text-center">
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${area.color} rounded-2xl flex items-center justify-center text-white mx-auto mb-4`}
                      >
                        {area.icon}
                      </div>
                      <div className="flex items-center justify-center mb-2">
                        <CheckCircle2 className="w-5 h-5 text-[#68B9C4] mr-2" />
                        <h4 className="font-bold text-gray-800">{area.title}</h4>
                      </div>
                      <p className="text-sm text-gray-600">{area.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Certification Bodies */}
            <Card className="shadow-xl mb-12 border-[#82B4CC]/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Award className="w-8 h-8 text-[#1164A3]" />
                  <span>Industry-Certified Programs</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-6">
                  All certifications are recognized by reputable international
                  bodies, ensuring your efforts stand out on a global stage:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {certificationBodies.map((body, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 p-4 bg-[#82B4CC]/10 rounded-lg"
                    >
                      <div className="text-[#1164A3] flex-shrink-0">
                        {body.icon}
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-800">{body.name}</h5>
                        <p className="text-sm text-gray-600">{body.fullName}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {webinarFeatures.map((feature, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl hover:border-[#1164A3] transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#1164A3] to-[#68B9C4] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">
                          {feature.title}
                        </h4>
                        <p className="text-sm text-gray-600">
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

      {/* Upcoming Webinars */}
      <section className="py-16 bg-gradient-to-r from-[#B0A3B3]/10 to-[#82B4CC]/10">
  <div className="container mx-auto px-4">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <Badge className="mb-4 bg-[#1164A3] text-white">Coming Soon</Badge>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Upcoming Webinars
        </h2>
        <p className="text-gray-600 text-lg">
          Register now to secure your spot in our next sessions
        </p>
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-12">
          <Loader2 className="w-12 h-12 animate-spin text-[#1164A3]" />
        </div>
      ) : upcomingWebinars.length === 0 ? (
        <Card className="border-[#82B4CC]/30">
          <CardContent className="p-12 text-center">
            <Video className="w-16 h-16 mx-auto mb-4 text-[#68B9C4] opacity-50" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              No Upcoming Webinars
            </h3>
            <p className="text-gray-600">
              Check back soon for new webinar announcements!
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-6">
          {upcomingWebinars.map((webinar, index) => (
            <Card
              key={webinar.id}
              className="hover:shadow-xl hover:border-[#1164A3] transition-all duration-300 cursor-pointer overflow-hidden group"
              onClick={() => router.push(`/webinars/${webinar.id}`)}
            >
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  {/* Image Section */}
                  {webinar.images && webinar.images.length > 0 ? (
                    <div className="relative w-full md:w-64 h-48 md:h-auto overflow-hidden bg-gradient-to-br from-[#1164A3]/20 to-[#68B9C4]/20 flex-shrink-0">
                      <Image
                        src={webinar.images[0].url}
                        alt={webinar.images[0].alt || webinar.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                        <Badge className="bg-black/70 text-white border-0">
                          <Video className="w-3 h-3 mr-1" />
                          {webinar.platform || "Webinar"}
                        </Badge>
                        <Badge className="bg-black/70 text-white border-0">
                          {webinar.status}
                        </Badge>
                      </div>
                    </div>
                  ) : (
                    <div className={`relative w-full md:w-64 h-48 md:h-auto bg-gradient-to-r ${getWebinarColor(index)} flex items-center justify-center flex-shrink-0`}>
                      <Video className="w-16 h-16 text-white opacity-30" />
                      <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                        <Badge className="bg-white/20 text-white border-white/30">
                          <Video className="w-3 h-3 mr-1" />
                          {webinar.platform || "Webinar"}
                        </Badge>
                        <Badge className="bg-white/20 text-white border-white/30">
                          {webinar.status}
                        </Badge>
                      </div>
                    </div>
                  )}

                  {/* Content Section */}
                  <div className="flex-1 p-8">
                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[#1164A3] transition-colors">
                      {webinar.title}
                    </h3>
                    <p className="text-gray-600 mb-3 line-clamp-2">
                      {webinar.description}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {formatDate(webinar.date)}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {formatTime(webinar.date)}
                      </span>
                      <span className="flex items-center">
                        <Video className="w-4 h-4 mr-1" />
                        {calculateDuration(webinar.date, webinar.endDate || undefined)}
                      </span>
                      {webinar.maxParticipants && (
                        <span className="flex items-center text-[#68B9C4] font-medium">
                          <Users className="w-4 h-4 mr-1" />
                          {webinar.maxParticipants - webinar.attendees.length} spots available
                        </span>
                      )}
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        router.push(`/register/webinar-attendee?webinarId=${webinar.id}`);
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

      {/* Previous Webinars */}
     <section className="py-16">
  <div className="container mx-auto px-4">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <Badge className="mb-4 bg-[#68B9C4] text-white">Watch & Learn</Badge>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Previous Webinar Recordings
        </h2>
        <p className="text-gray-600 text-lg">
          Access our library of past webinars and continue learning
        </p>
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-12">
          <Loader2 className="w-12 h-12 animate-spin text-[#1164A3]" />
        </div>
      ) : previousWebinars.length === 0 ? (
        <Card className="border-[#82B4CC]/30">
          <CardContent className="p-12 text-center">
            <Play className="w-16 h-16 mx-auto mb-4 text-[#68B9C4] opacity-50" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              No Previous Webinars
            </h3>
            <p className="text-gray-600">
              Past webinar recordings will appear here
            </p>
          </CardContent>
        </Card>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {previousWebinars.slice(0, viewMoreData).map((webinar) => (
              <Card
                key={webinar.id}
                className="hover:shadow-xl hover:border-[#1164A3] transition-all duration-300 cursor-pointer group overflow-hidden"
                onClick={() => router.push(`programs/webinars/${webinar.id}`)}
              >
                {/* Image or gradient background */}
                {webinar.images && webinar.images.length > 0 ? (
                  <div className="relative overflow-hidden h-48">
                    <Image
                      src={webinar.images[0].url}
                      alt={webinar.images[0].alt || webinar.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 bg-[#1164A3] rounded-full flex items-center justify-center">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                    </div>
                    <Badge className="absolute top-3 right-3 bg-black/70 text-white border-0">
                      <Users className="w-3 h-3 mr-1" />
                      {webinar.attendees.length}
                    </Badge>
                    <Badge className="absolute bottom-3 right-3 bg-black/70 text-white border-0">
                      {calculateDuration(webinar.date, webinar.endDate || undefined)}
                    </Badge>
                  </div>
                ) : (
                  <div className="relative overflow-hidden bg-gradient-to-br from-[#1164A3]/20 to-[#68B9C4]/20 h-48 flex items-center justify-center">
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-300" />
                    <Video className="w-16 h-16 text-[#1164A3] opacity-50" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 bg-[#1164A3] rounded-full flex items-center justify-center">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                    </div>
                    <Badge className="absolute top-3 right-3 bg-black/70 text-white border-0">
                      <Users className="w-3 h-3 mr-1" />
                      {webinar.attendees.length}
                    </Badge>
                    <Badge className="absolute bottom-3 right-3 bg-black/70 text-white border-0">
                      {calculateDuration(webinar.date, webinar.endDate || undefined)}
                    </Badge>
                  </div>
                )}

                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-[#82B4CC] text-white">
                      {webinar.platform || "Webinar"}
                    </Badge>
                    <span className="text-sm font-semibold text-gray-700">
                      {webinar.status}
                    </span>
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-[#1164A3] transition-colors">
                    {webinar.title}
                  </h4>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {webinar.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {formatDate(webinar.date)}
                    </span>
                    <span className="text-[#1164A3] hover:text-[#68B9C4] text-sm font-medium flex items-center">
                      Watch
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {previousWebinars.length > 6 && viewMoreData > 6 && (
            <div className="text-center mt-8">
              <button
                onClick={() => handleViewButton()}
                className="bg-gradient-to-r from-[#1164A3] to-[#68B9C4] text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center"
              >
                <Video className="w-5 h-5 mr-2" />
                View All Webinars
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          )}
        </>
      )}
    </div>
  </div>
</section>

      {/* Benefits */}
      <section className="py-16 bg-gradient-to-r from-[#B0A3B3]/10 to-[#82B4CC]/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[#1164A3] text-white">Why Join Us</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Benefits of Our Webinar Series
              </h2>
            </div>

            <Card className="shadow-xl border-[#82B4CC]/20">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle2 className="w-6 h-6 text-[#68B9C4] flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700">{benefit}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      

      {/* Final Message */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-2xl bg-gradient-to-r from-[#82B4CC]/20 to-[#B0A3B3]/20 border-l-4 border-[#1164A3]">
              <CardContent className="p-8 md:p-12 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-[#1164A3] to-[#68B9C4] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                  Learn From Anywhere, Grow Everywhere
                </h3>
                <p className="text-lg text-gray-700">
                  Join thousands of students and professionals who are advancing
                  their careers through NED Scholars Webinar Series. Your future
                  starts with the next webinar you attend.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}