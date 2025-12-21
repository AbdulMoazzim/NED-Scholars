"use client";

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
} from "lucide-react";

export default function WebinarSeriesPage() {
  const trainingAreas = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Six Sigma & Lean Management",
      description: "Process optimization and quality management",
      color: "from-blue-600 to-cyan-600",
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Project Management",
      description: "Advanced statistics and leadership skills",
      color: "from-green-600 to-emerald-600",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "AI & Machine Learning",
      description: "Cutting-edge artificial intelligence applications",
      color: "from-purple-600 to-pink-600",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Embedded Systems",
      description: "Raspberry Pi, Arduino & IoT applications",
      color: "from-orange-600 to-red-600",
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

  const upcomingWebinars = [
    {
      title: "Introduction to Six Sigma: Green Belt Fundamentals",
      instructor: "Dr. Ahmed Malik",
      company: "Quality Management Expert",
      date: "January 15, 2025",
      time: "6:00 PM PKT / 8:00 AM EST",
      duration: "2 hours",
      category: "Six Sigma",
      seats: "50 spots available",
      level: "Beginner",
      color: "from-blue-600 to-cyan-600",
    },
    {
      title: "AI in Manufacturing: Practical Applications",
      instructor: "Eng. Sara Khan",
      company: "Machine Learning Specialist",
      date: "January 22, 2025",
      time: "7:00 PM PKT / 9:00 AM EST",
      duration: "1.5 hours",
      category: "AI & ML",
      seats: "40 spots available",
      level: "Intermediate",
      color: "from-purple-600 to-pink-600",
    },
    {
      title: "Arduino Projects: From Basics to Advanced",
      instructor: "Dr. Kamran Shah",
      company: "Embedded Systems Engineer",
      date: "January 29, 2025",
      time: "5:00 PM PKT / 7:00 AM EST",
      duration: "2.5 hours",
      category: "Embedded Systems",
      seats: "35 spots available",
      level: "All Levels",
      color: "from-orange-600 to-red-600",
    },
  ];

  // Previous Webinars (placeholder - replace with actual data)
  const previousWebinars = [
    {
      id: 1,
      title: "Lean Manufacturing: Eliminating Waste in Production",
      instructor: "Dr. Fatima Ahmed",
      company: "Operations Excellence Consultant",
      date: "December 2024",
      category: "Lean Management",
      thumbnail: "/api/placeholder/400/225",
      youtubeUrl: "https://youtube.com/watch?v=example1",
      views: "3.2K",
      duration: "2:15:30",
      rating: 4.8,
    },
    {
      id: 2,
      title: "Project Management Professional (PMP) Exam Prep",
      instructor: "Eng. Ali Hassan",
      company: "Senior Project Manager",
      date: "December 2024",
      category: "Project Management",
      thumbnail: "/api/placeholder/400/225",
      youtubeUrl: "https://youtube.com/watch?v=example2",
      views: "2.8K",
      duration: "3:00:00",
      rating: 4.9,
    },
    {
      id: 3,
      title: "Deep Learning Fundamentals with TensorFlow",
      instructor: "Dr. Maria Siddiqui",
      company: "AI Research Scientist",
      date: "November 2024",
      category: "AI & ML",
      thumbnail: "/api/placeholder/400/225",
      youtubeUrl: "https://youtube.com/watch?v=example3",
      views: "4.1K",
      duration: "2:30:45",
      rating: 4.7,
    },
    {
      id: 4,
      title: "IoT with Raspberry Pi: Smart Home Projects",
      instructor: "Eng. Bilal Raza",
      company: "IoT Solutions Architect",
      date: "November 2024",
      category: "Embedded Systems",
      thumbnail: "/api/placeholder/400/225",
      youtubeUrl: "https://youtube.com/watch?v=example4",
      views: "2.5K",
      duration: "2:00:20",
      rating: 4.6,
    },
    {
      id: 5,
      title: "Statistical Process Control for Quality Engineers",
      instructor: "Dr. Zainab Khan",
      company: "Quality Assurance Director",
      date: "October 2024",
      category: "Statistics",
      thumbnail: "/api/placeholder/400/225",
      youtubeUrl: "https://youtube.com/watch?v=example5",
      views: "1.9K",
      duration: "1:45:15",
      rating: 4.8,
    },
    {
      id: 6,
      title: "Agile Project Management: Scrum Master Essentials",
      instructor: "Eng. Hassan Ahmed",
      company: "Certified Scrum Trainer",
      date: "October 2024",
      category: "Project Management",
      thumbnail: "/api/placeholder/400/225",
      youtubeUrl: "https://youtube.com/watch?v=example6",
      views: "3.5K",
      duration: "2:20:00",
      rating: 4.9,
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 text-white py-16">
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
            <p className="text-xl text-blue-100 mb-4">
              Empowering Minds, Everywhere in the World
            </p>
            <p className="text-lg text-white/90 max-w-3xl mx-auto">
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
              <Badge className="mb-4">🎓 Our Programs</Badge>
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
                    className="hover:shadow-xl transition-all duration-300"
                  >
                    <CardContent className="p-6 text-center">
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${area.color} rounded-2xl flex items-center justify-center text-white mx-auto mb-4`}
                      >
                        {area.icon}
                      </div>
                      <div className="flex items-center justify-center mb-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 mr-2" />
                        <h4 className="font-bold text-gray-800">{area.title}</h4>
                      </div>
                      <p className="text-sm text-gray-600">{area.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Certification Bodies */}
            <Card className="shadow-xl mb-12">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Award className="w-8 h-8 text-indigo-600" />
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
                      className="flex items-start space-x-3 p-4 bg-indigo-50 rounded-lg"
                    >
                      <div className="text-indigo-600 flex-shrink-0">
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
                  className="hover:shadow-xl transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
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
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4">Coming Soon</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Upcoming Webinars
              </h2>
              <p className="text-gray-600 text-lg">
                Register now to secure your spot in our next sessions
              </p>
            </div>

            <div className="space-y-6">
              {upcomingWebinars.map((webinar, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300"
                >
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
                      <div
                        className={`w-20 h-20 bg-gradient-to-r ${webinar.color} rounded-2xl flex items-center justify-center text-white flex-shrink-0`}
                      >
                        <Video className="w-10 h-10" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <Badge variant="secondary">{webinar.category}</Badge>
                          <Badge>{webinar.level}</Badge>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">
                          {webinar.title}
                        </h3>
                        <p className="text-gray-600 mb-3">
                          <span className="font-semibold">Instructor:</span>{" "}
                          {webinar.instructor} - {webinar.company}
                        </p>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                          <span className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {webinar.date}
                          </span>
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {webinar.time}
                          </span>
                          <span className="flex items-center">
                            <Video className="w-4 h-4 mr-1" />
                            {webinar.duration}
                          </span>
                          <span className="flex items-center text-green-600 font-medium">
                            <Users className="w-4 h-4 mr-1" />
                            {webinar.seats}
                          </span>
                        </div>
                      </div>
                      <button className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center whitespace-nowrap">
                        Register Now
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Previous Webinars */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4">Watch & Learn</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Previous Webinar Recordings
              </h2>
              <p className="text-gray-600 text-lg">
                Access our library of past webinars and continue learning
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {previousWebinars.map((webinar) => (
                <Card
                  key={webinar.id}
                  className="hover:shadow-xl transition-all duration-300 cursor-pointer group"
                >
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <img
                        src={webinar.thumbnail}
                        alt={webinar.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                          <Play className="w-8 h-8 text-white ml-1" />
                        </div>
                      </div>
                      <Badge className="absolute top-3 right-3 bg-black/70 text-white border-0">
                        <Video className="w-3 h-3 mr-1" />
                        {webinar.views}
                      </Badge>
                      <Badge className="absolute bottom-3 right-3 bg-black/70 text-white border-0">
                        {webinar.duration}
                      </Badge>
                    </div>
                    <div className="p-5">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary">{webinar.category}</Badge>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                          <span className="text-sm font-semibold text-gray-700">
                            {webinar.rating}
                          </span>
                        </div>
                      </div>
                      <h4 className="font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-indigo-600 transition-colors">
                        {webinar.title}
                      </h4>
                      <p className="text-sm text-gray-600 mb-1">
                        {webinar.instructor}
                      </p>
                      <p className="text-xs text-gray-500 mb-3">
                        {webinar.company}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500 flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {webinar.date}
                        </span>
                        <a
                          href={webinar.youtubeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-indigo-600 hover:text-indigo-700 text-sm font-medium flex items-center"
                        >
                          Watch
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <button className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center">
                <Video className="w-5 h-5 mr-2" />
                View All Webinars
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gradient-to-r from-indigo-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4">Why Join Us</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Benefits of Our Webinar Series
              </h2>
            </div>

            <Card className="shadow-xl">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700">{benefit}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Bell className="w-16 h-16 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Stay Updated on Upcoming Webinars
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Subscribe to our newsletter and never miss a learning opportunity
            </p>

            <Card className="bg-white/10 border-white/20 text-white max-w-2xl mx-auto">
              <CardContent className="p-8">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                  />
                  <button className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                    Subscribe
                    <Mail className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </CardContent>
            </Card>

            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 inline-flex items-center justify-center">
                <GraduationCap className="w-5 h-5 mr-2" />
                Browse All Programs
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 inline-flex items-center justify-center">
                <Users className="w-5 h-5 mr-2" />
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Final Message */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-2xl bg-gradient-to-r from-indigo-50 to-blue-50 border-l-4 border-indigo-600">
              <CardContent className="p-8 md:p-12 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
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