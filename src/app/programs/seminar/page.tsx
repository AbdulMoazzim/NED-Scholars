"use client";

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
  Mail,
  CheckCircle2,
  Star,
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
  Phone,
  Plane,
} from "lucide-react";
import Image from "next/image";

export default function SeminarSeriesNewPage() {
  const seminarFeatures = [
    {
      icon: <Laptop className="w-6 h-6" />,
      title: "Live Technology Demonstrations",
      description: "Hands-on showcases of emerging technologies in action",
      emoji: "✔",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Career Success Stories",
      description: "Learn from professionals who've achieved global success",
      emoji: "✔",
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: "Networking Opportunities",
      description: "Connect with industry professionals and ambitious peers",
      emoji: "✔",
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Interactive Q&A Sessions",
      description: "Get personalized answers to your career questions",
      emoji: "✔",
    },
  ];

  const certificationAreas = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Six Sigma & Lean Methodologies",
      subtitle: "Advanced Statistics",
      description: "Process optimization and quality management expertise",
      color: "from-blue-600 to-cyan-600",
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Project Management",
      subtitle: "Professional Leadership",
      description: "Master project execution and team management",
      color: "from-green-600 to-emerald-600",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "AI & Machine Learning",
      subtitle: "Future Technologies",
      description: "Cutting-edge artificial intelligence applications",
      color: "from-purple-600 to-pink-600",
    },
    {
      icon: <Laptop className="w-8 h-8" />,
      title: "Embedded Systems",
      subtitle: "Hardware Programming",
      description: "Raspberry Pi, Arduino, and IoT applications",
      color: "from-orange-600 to-red-600",
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
      color: "from-blue-600 to-cyan-600",
      
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Discover Emerging Tech",
      description: "AI, renewable energy, advanced manufacturing, and more",
      color: "from-green-600 to-emerald-600",
      
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Get Career Roadmaps",
      description: "Understand skills and steps to reach top companies",
      color: "from-purple-600 to-pink-600",
      
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Network with Decision-Makers",
      description: "Connect directly with hiring managers and innovators",
      color: "from-orange-600 to-red-600",
      
    },
  ];

  const presenterBenefits = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Give Back to Your Alma Mater",
      description: "Inspire the next generation of engineers",
      color: "from-pink-600 to-red-600",
      
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Understand Pakistan's Talent Pool",
      description: "See firsthand the potential of NED's scholars",
      color: "from-blue-600 to-purple-600",
      
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Expand Your Professional Network",
      description: "Connect with future hires and collaborators",
      color: "from-green-600 to-teal-600",
      
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Strengthen Your Personal Brand",
      description: "Share your expertise with a passionate audience",
      color: "from-yellow-600 to-orange-600",
      
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
      color: "from-blue-600 to-cyan-600",
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Clean-Tech Startup Launch",
      story: "A solar energy workshop led to a scholar launching a clean-tech startup",
      color: "from-green-600 to-emerald-600",
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "International Research Collaboration",
      story: "An AI seminar inspired a research collaboration between NED and a U.S. university",
      color: "from-purple-600 to-pink-600",
    },
  ];

  // Previous Seminars with YouTube links
  const previousSeminars = [
    {
      id: 1,
      title: "Artificial Intelligence in Modern Manufacturing",
      speaker: "Dr. Ahmed Malik",
      company: "Tesla Inc., USA",
      date: "December 2024",
      category: "AI & Technology",
      thumbnail: "/api/placeholder/400/225",
      youtubeUrl: "https://youtube.com/watch?v=example1",
      views: "2.8K",
      duration: "1:45:20",
    },
    {
      id: 2,
      title: "Renewable Energy Solutions for Developing Nations",
      speaker: "Eng. Sara Khan",
      company: "Siemens Energy, Germany",
      date: "November 2024",
      category: "Renewable Energy",
      thumbnail: "/api/placeholder/400/225",
      youtubeUrl: "https://youtube.com/watch?v=example2",
      views: "2.1K",
      duration: "1:30:45",
    },
    {
      id: 3,
      title: "Career Journey: From NED to Silicon Valley",
      speaker: "Ali Hassan",
      company: "Google, USA",
      date: "November 2024",
      category: "Career Development",
      thumbnail: "/api/placeholder/400/225",
      youtubeUrl: "https://youtube.com/watch?v=example3",
      views: "3.5K",
      duration: "2:00:15",
    },
    {
      id: 4,
      title: "IoT and Smart Cities: Future of Urban Living",
      speaker: "Dr. Fatima Ahmed",
      company: "Bosch Pakistan",
      date: "October 2024",
      category: "IoT & Smart Systems",
      thumbnail: "/api/placeholder/400/225",
      youtubeUrl: "https://youtube.com/watch?v=example4",
      views: "1.9K",
      duration: "1:40:30",
    },
    {
      id: 5,
      title: "Building Tech Startups in Pakistan",
      speaker: "Kamran Shah",
      company: "TechHub Founder",
      date: "September 2024",
      category: "Entrepreneurship",
      thumbnail: "/api/placeholder/400/225",
      youtubeUrl: "https://youtube.com/watch?v=example5",
      views: "3.2K",
      duration: "1:55:00",
    },
    {
      id: 6,
      title: "Lean Six Sigma: Transforming Operations",
      speaker: "Eng. Maria Siddiqui",
      company: "McKinsey & Company",
      date: "September 2024",
      category: "Process Excellence",
      thumbnail: "/api/placeholder/400/225",
      youtubeUrl: "https://youtube.com/watch?v=example6",
      views: "2.4K",
      duration: "2:10:25",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#4568DC] to-[#558FF2] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30 text-base px-4 py-2">
              Knowledge Exchange Platform
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              NED Scholars Seminar Series
            </h1>
            <p className="text-2xl text-blue-100 mb-4">
              Igniting Innovation Through Knowledge Exchange
            </p>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Bridging Global Expertise with Local Talent
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Card className="shadow-2xl mb-12">
              <CardContent className="p-10">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center text-white flex-shrink-0">
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
                      className="flex items-start space-x-4 p-4 bg-indigo-50 rounded-xl"
                    >
                      <div className="text-indigo-600 flex-shrink-0 mt-1">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1 flex items-center">
                          <span className="text-green-600 mr-2">
                            {feature.emoji}
                          </span>
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
            <Card className="bg-gradient-to-r from-indigo-50 to-blue-50 border-l-4 border-indigo-600 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="text-indigo-600 text-6xl leading-none">&quot;</div>
                  <p className="text-xl text-gray-700 italic pt-2">
                    Seeing is believing. When our scholars witness NED alumni
                    thriving globally, they realize their own potential is
                    limitless.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certification Training */}
      <section className="py-20 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 text-base">🎓 Career Enhancement</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Specialized Certification Training Opportunities
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                As part of this ongoing academic collaboration, students will
                learn about exclusive certification training programs conducted
                in partnership with global accreditation bodies. These
                certifications enhance your technical and leadership profile.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {certificationAreas.map((area, index) => (
                <Card
                  key={index}
                  className="hover:shadow-2xl transition-all duration-300 border-2 hover:border-indigo-200"
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
                    <p className="text-indigo-600 font-medium mb-3">
                      {area.subtitle}
                    </p>
                    <p className="text-gray-600">{area.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Accreditation Bodies */}
            <Card className="shadow-xl bg-white">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-2xl">
                  <Award className="w-8 h-8 text-indigo-600" />
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
                      className="p-6 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0">
                          {body.acronym.substring(0, 1)}
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-1">
                            {body.acronym}
                          </h4>
                          <p className="text-sm font-medium text-indigo-600 mb-1">
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

            <Card className="mt-8 bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-600">
              <CardContent className="p-6">
                <p className="text-lg text-gray-700 font-medium">
                  <CheckCircle2 className="w-6 h-6 text-green-600 inline mr-2" />
                  These programs are designed to give you a{" "}
                  <span className="font-bold text-green-700">
                    competitive edge
                  </span>{" "}
                  in both graduate school applications and the professional
                  world.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Seminars Matter */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 text-base">Impact & Value</Badge>
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
                    className="hover:shadow-2xl transition-all duration-300"
                  >
                    <CardContent className="p-8">
                      <div className="flex items-start space-x-6">
                        <div
                          className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center text-white flex-shrink-0`}
                        >
                          {benefit.icon}
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-gray-800 mb-2 flex items-center">
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
                    className="hover:shadow-2xl transition-all duration-300"
                  >
                    <CardContent className="p-8">
                      <div className="flex items-start space-x-6">
                        <div
                          className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center text-white flex-shrink-0`}
                        >
                          {benefit.icon}
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-gray-800 mb-2 flex items-center">
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

            {/* Presenter Quote */}
            <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-600 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="text-purple-600 text-6xl leading-none">&quot;</div>
                  <p className="text-xl text-gray-700 italic pt-2">
                    Presenters don&apos;t just teach—they gain fresh perspectives,
                    reconnect with their roots, and often find their next
                    breakthrough idea through these interactions.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What Makes Us Unique */}
      <section className="py-20 bg-gradient-to-r from-indigo-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 text-base">Our Distinction</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                What Makes Our Seminars Unique?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {uniqueFeatures.map((feature, index) => (
                <Card
                  key={index}
                  className="hover:shadow-2xl transition-all duration-300 bg-white"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center text-white">
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
              <Badge className="mb-4 text-base">Real Impact</Badge>
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
                  className="hover:shadow-2xl transition-all duration-300"
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

      {/* Previous Seminars */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 text-base">Watch & Learn</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Previous Seminar Recordings
              </h2>
              <p className="text-xl text-gray-600">
                Access our library of past seminars and continue learning
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {previousSeminars.map((seminar) => (
                <Card
                  key={seminar.id}
                  className="hover:shadow-2xl transition-all duration-300 cursor-pointer group overflow-hidden"
                >
                  <div className="relative overflow-hidden">
                    <Image
                          width={196}
                          height={100}
                      src={seminar.thumbnail}
                      alt={seminar.title}
                      className="w-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center">
                        <Play className="w-10 h-10 text-white ml-1" />
                      </div>
                    </div>
                    <Badge className="absolute top-4 right-4 bg-black/80 text-white border-0 text-sm">
                      <Video className="w-3 h-3 mr-1" />
                      {seminar.views}
                    </Badge>
                    <Badge className="absolute bottom-4 right-4 bg-black/80 text-white border-0">
                      {seminar.duration}
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <Badge variant="secondary" className="mb-3">
                      {seminar.category}
                    </Badge>
                    <h4 className="font-bold text-lg text-gray-800 mb-3 line-clamp-2 group-hover:text-indigo-600 transition-colors">
                      {seminar.title}
                    </h4>
                    <p className="text-sm text-gray-700 font-medium mb-1">
                      {seminar.speaker}
                    </p>
                    <p className="text-xs text-gray-500 mb-4">
                      {seminar.company}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <span className="text-xs text-gray-500 flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {seminar.date}
                      </span>
                      <a
                        href={seminar.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 hover:text-indigo-700 font-semibold flex items-center text-sm"
                      >
                        Watch Now
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 inline-flex items-center">
                <Video className="w-6 h-6 mr-3" />
                View All Seminars
                <ArrowRight className="w-6 h-6 ml-3" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 text-base">Get Involved</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Call to Action: Join the Movement
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Attend as Scholar */}
              <Card className="shadow-2xl border-2 border-blue-100">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
                  <CardTitle className="flex items-center space-x-3 text-2xl">
                    <GraduationCap className="w-10 h-10 text-blue-600" />
                    <span>Attend as a Scholar</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-bold text-gray-800 mb-1">
                          📍 Where:
                        </p>
                        <p className="text-gray-600">
                          NED University Campus & Virtual Sessions
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Calendar className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-bold text-gray-800 mb-1">
                          📅 When:
                        </p>
                        <p className="text-gray-600">
                          Quarterly events (Check our website for updates)
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Globe className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-bold text-gray-800 mb-1">
                          🎟️ Registration:
                        </p>
                        <a
                          href="https://www.nedscholars.org/seminars"
                          className="text-blue-600 hover:underline font-medium"
                        >
                          www.nedscholars.org/seminars
                        </a>
                      </div>
                    </div>
                  </div>
                  <button className="w-full mt-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300">
                    Register for Next Seminar
                  </button>
                </CardContent>
              </Card>

              {/* Present as Expert */}
              <Card className="shadow-2xl border-2 border-purple-100">
                <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
                  <CardTitle className="flex items-center space-x-3 text-2xl">
                    <Users className="w-10 h-10 text-purple-600" />
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
                        className="flex items-start space-x-4 p-4 bg-purple-50 rounded-xl"
                      >
                        <div className="text-purple-600 flex-shrink-0">
                          {type.icon}
                        </div>
                        <div>
                          <h5 className="font-bold text-gray-800 flex items-center mb-1">
                            <CheckCircle2 className="w-4 h-4 text-green-600 mr-2" />
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
                      <Mail className="w-6 h-6 text-purple-600" />
                      <div>
                        <a
                          href="mailto:seminars@nedscholars.org"
                          className="text-purple-600 hover:underline font-bold"
                        >
                          seminars@nedscholars.org
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Plane className="w-6 h-6 text-purple-600" />
                      <p className="text-sm text-gray-700 font-medium">
                        Travel Support Available for overseas presenters
                      </p>
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300">
                    Propose a Seminar Topic
                  </button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final Message */}
      <section className="py-20 bg-gradient-to-r from-[#4568DC] to-[#558FF2] text-white">
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
                </div>
                <p className="text-xl text-blue-100 font-bold">
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