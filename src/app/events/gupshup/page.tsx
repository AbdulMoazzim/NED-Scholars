"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
} from "lucide-react";

export default function GupShupPage() {
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
      description:
        "Featured guest delivers a talk on a topic of personal or public interest",
      step: 1,
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Open Discussion",
      duration: "30-40 minutes",
      description:
        "Live discussion with audience participation and diverse perspectives",
      step: 2,
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Open Mic Q&A",
      duration: "15-20 minutes",
      description:
        "Audience questions and spirited exchange of ideas in an informal setting",
      step: 3,
    },
  ];

  const attendeeCategories = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "University Students",
      description: "Especially in engineering, sciences, and management",
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Professionals",
      description: "Seeking certifications or career insights",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Alumni & Mentors",
      description: "Community supporters and experienced guides",
    },
  ];

  const eventHighlights = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Free to Join",
      description: "No registration fees or barriers to entry",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Open to All",
      description: "Welcoming diverse backgrounds and perspectives",
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Designed to Inspire",
      description: "Fostering meaningful dialogue and personal growth",
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

  // Placeholder for previous Gup Shup sessions
  const previousSessions = [
    {
      id: 1,
      title: "Innovation in Education Technology",
      speaker: "Dr. Sarah Ahmed",
      category: "Academia",
      date: "January 2024",
      thumbnail: "/api/placeholder/400/225",
      youtubeUrl: "https://youtube.com/watch?v=example1",
      views: "1.2K",
    },
    {
      id: 2,
      title: "Social Media and Youth Activism",
      speaker: "Ali Hassan",
      category: "Social Activism",
      date: "December 2023",
      thumbnail: "/api/placeholder/400/225",
      youtubeUrl: "https://youtube.com/watch?v=example2",
      views: "890",
    },
    {
      id: 3,
      title: "Entrepreneurship in Pakistan",
      speaker: "Fatima Khan",
      category: "Business",
      date: "November 2023",
      thumbnail: "/api/placeholder/400/225",
      youtubeUrl: "https://youtube.com/watch?v=example3",
      views: "1.5K",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1164A3] via-[#68B9C4] to-[#82B4CC] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-4">
              <Coffee className="w-16 h-16 text-white" />
            </div>
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              ☕ Special Monthly Feature
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              &quot;Gup Shup&quot;
            </h1>
            <p className="text-2xl text-white/90 mb-4">
              Casual Conversations. Meaningful Insights.
            </p>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
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
                      <span className="mr-2">🗣️</span>
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

      {/* Who Should Attend */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[#68B9C4] text-white">Join Us</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Who Should Attend
              </h2>
              <p className="text-gray-600 text-lg">
                Everyone is welcome to join our monthly conversations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {attendeeCategories.map((category, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl hover:border-[#1164A3] transition-all duration-300"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#1164A3] to-[#68B9C4] rounded-full flex items-center justify-center text-white mx-auto mb-4">
                      {category.icon}
                    </div>
                    <h4 className="font-bold text-gray-800 mb-2 text-lg">
                      {category.title}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {category.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Event Highlights */}
            <Card className="shadow-xl bg-gradient-to-r from-[#82B4CC]/20 to-[#B0A3B3]/20 border-[#82B4CC]/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center flex items-center justify-center">
                  <Star className="w-8 h-8 text-[#82B4CC] mr-3" />
                  Event Highlights
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {eventHighlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center text-center"
                    >
                      <div className="w-16 h-16 bg-gradient-to-r from-[#68B9C4] to-[#82B4CC] rounded-full flex items-center justify-center text-white mb-4">
                        {highlight.icon}
                      </div>
                      <h5 className="font-bold text-gray-800 mb-2 text-lg flex items-center">
                        <span className="mr-2">🌍</span>
                        {highlight.title}
                      </h5>
                      <p className="text-gray-600">{highlight.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gradient-to-r from-[#B0A3B3]/10 to-[#82B4CC]/10">
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

      {/* Previous Sessions */}
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
              {previousSessions.map((session) => (
                <Card
                  key={session.id}
                  className="hover:shadow-xl hover:border-[#1164A3] transition-all duration-300 cursor-pointer group"
                >
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <img
                        src={session.thumbnail}
                        alt={session.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-16 h-16 bg-[#1164A3] rounded-full flex items-center justify-center">
                          <Play className="w-8 h-8 text-white ml-1" />
                        </div>
                      </div>
                      <Badge className="absolute top-3 right-3 bg-black/70 text-white border-0">
                        <Video className="w-3 h-3 mr-1" />
                        {session.views} views
                      </Badge>
                    </div>
                    <div className="p-6">
                      <Badge className="mb-3 bg-[#82B4CC] text-white">
                        {session.category}
                      </Badge>
                      <h4 className="font-bold text-gray-800 mb-2 text-lg group-hover:text-[#1164A3] transition-colors">
                        {session.title}
                      </h4>
                      <p className="text-gray-600 text-sm mb-2">
                        Speaker: {session.speaker}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500 flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {session.date}
                        </span>
                        <a
                          href={session.youtubeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#1164A3] hover:text-[#68B9C4] text-sm font-medium flex items-center"
                        >
                          Watch Now
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <button className="bg-gradient-to-r from-[#1164A3] to-[#68B9C4] text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center">
                <Video className="w-5 h-5 mr-2" />
                View All Sessions
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>

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
              <button className="bg-white text-[#1164A3] px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center">
                <Calendar className="w-5 h-5 mr-2" />
                Register for Next Session
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 inline-flex items-center justify-center">
                <MessageCircle className="w-5 h-5 mr-2" />
                Suggest a Speaker
              </button>
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