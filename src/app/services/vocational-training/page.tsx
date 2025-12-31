"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Heart,
  TrendingUp,
  AlertTriangle,
  DollarSign,
  Award,
  CheckCircle2,
  Target,
  Zap,
  Briefcase,
  Home,
  Scissors,
  Wrench,
  Smartphone,
  MapPin,
  Calendar,
  Mail,
  Globe,
  ArrowRight,
  Star,
  ShoppingBag,
  GraduationCap,
  Building2,
  Rocket,
} from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function VocationalTrainingPage() {
  const router = useRouter();
  const crisisStatistics = [
    {
      icon: <Users className="w-8 h-8" />,
      number: "22%",
      label: "Women in Formal Workforce",
      description: "Only 22% of women participate in formal employment",
      source: "World Bank, 2023",
      color: "from-[#1164A3] to-[#68B9C4]",
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      number: "12M+",
      label: "Girls Drop Out",
      description: "Before completing secondary education",
      source: "UNICEF Pakistan, 2023",
      color: "from-[#68B9C4] to-[#82B4CC]",
    },
    {
      icon: <Home className="w-8 h-8" />,
      number: "81%",
      label: "Prefer Early Marriage",
      description: "Rural families prioritize marriage over education",
      source: "Pakistan Bureau of Statistics, 2022",
      color: "from-[#82B4CC] to-[#B0A3B3]",
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      number: "<5%",
      label: "Have Access to Training",
      description: "Low-income women lack vocational opportunities",
      source: "ILO Report, 2023",
      color: "from-[#1164A3] to-[#82B4CC]",
    },
  ];

  const discoveredTrends = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "High Female Dropout Rates",
      description: "Most girls left school after 7th or 8th grade",
      color: "bg-[#82B4CC]/20 text-[#1164A3]",
    },
    {
      icon: <Home className="w-6 h-6" />,
      title: "Early Marriage Pressures",
      description: "Families prioritized marriage over education",
      color: "bg-[#68B9C4]/20 text-[#1164A3]",
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Boys Forced into Labor",
      description: "Sons pushed into low-wage jobs to support households",
      color: "bg-[#B0A3B3]/30 text-[#1164A3]",
    },
  ];

  const trainingCenters = [
    {
      name: "AlMustafa Educational Center",
      location: "Allah Bukhs Goth, Karachi",
      status: "Active",
      since: "2020",
      focus: "Cloth stitching & sewing machine operation",
      trainees: "110 girls trained since launch",
      achievement: "Sewing machines awarded to top-performing students",
      nextStep: "Social media & app-based marketplace for their products",
      color: "from-[#1164A3] to-[#68B9C4]",
    },
    {
      name: "Khadija Qazi School",
      location: "Karachi",
      status: "Upcoming",
      since: "2025",
      focus: "Technical trades expansion",
      courses: ["Electrician training", "Plumbing & pipefitting", "AC repair & maintenance"],
      color: "from-[#68B9C4] to-[#82B4CC]",
    },
  ];

  const programStructure = [
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Training Structure",
      benefits: [
        {color: "bg-[#82B4CC]/20", text: "After-school sessions (3-4 hours daily)"},
        {color: "bg-[#68B9C4]/20", text: "Hands-on skill development (No theoretical overload)"},
        {color: "bg-[#B0A3B3]/20", text: "Certification upon completion (Recognized by local businesses)"},
      ],
      color: "from-[#1164A3] to-[#68B9C4]",
      step: 1,
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Economic Empowerment",
      benefits: [
        {color: "bg-[#82B4CC]/20", text: "Earning potential: $80–$150/month for trained girls"},
        {color: "bg-[#68B9C4]/20", text: '"Darzi" App (Under Development) – Connects girls with customers'},
        {color: "bg-[#B0A3B3]/20", text: "NEDUET Stalls – Showcase and sell handmade products"},
      ],
      color: "from-[#68B9C4] to-[#82B4CC]",
      step: 2,
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Long-Term Sustainability",
      benefits: [
        {color: "bg-[#82B4CC]/20", text: "Micro-entrepreneurship model – Girls support their families"},
        {color: "bg-[#68B9C4]/20", text: "Community impact – Reduced early marriages, increased independence"},
        {color: "bg-[#B0A3B3]/20", text: "Scalability – Replicable in other underserved areas"},
      ],
      color: "from-[#82B4CC] to-[#B0A3B3]",
      step: 3,
    },
  ];

  const successStories = [
    {
      name: "Ayesha, 17",
      image: "/api/placeholder/100/100",
      story: "Went from school dropout to earning $50/month stitching clothes",
      emoji: "📌",
      color: "from-[#1164A3] to-[#68B9C4]",
    },
    {
      name: "Fatima, 19",
      image: "/api/placeholder/100/100",
      story: "Received a sewing machine and now trains other girls",
      emoji: "📌",
      color: "from-[#68B9C4] to-[#82B4CC]",
    },
    {
      name: "Sana, 20",
      image: "/api/placeholder/100/100",
      story: "Supports her siblings' education with her stitching income",
      emoji: "📌",
      color: "from-[#82B4CC] to-[#B0A3B3]",
    },
  ];

  const fundingOptions = [
    {
      amount: "$80",
      description: "Sponsors one sewing machine for a trainee",
      icon: <Scissors className="w-6 h-6" />,
      color: "from-[#1164A3] to-[#68B9C4]",
    },
    {
      amount: "$1,200",
      description: "Covers a 6-month vocational course for 10 girls",
      icon: <Users className="w-6 h-6" />,
      color: "from-[#68B9C4] to-[#82B4CC]",
    },
    {
      amount: "$5,000",
      description: "Establishes a new training center (electrician/plumbing)",
      icon: <Building2 className="w-6 h-6" />,
      color: "from-[#82B4CC] to-[#B0A3B3]",
    },
  ];

  const contributionWays = [
    {
      icon: <Scissors className="w-6 h-6" />,
      title: "Donate a Sewing Machine",
      amount: "$80",
      emoji: "🌱",
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Sponsor a Trainee",
      amount: "$150 covers full training",
      emoji: "📚",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Partner with Us",
      amount: "Help expand to new locations",
      emoji: "🤝",
    },
  ];

  const keyTakeaways = [
    "Only 22% of Pakistani women are in the formal workforce",
    "NED Scholars' response: Vocational training for girls in stitching, electrician work, plumbing",
    "Since 2020: 110 girls trained in Allah Bukhs Goth",
    'Next Steps: "Darzi" app for business growth, expansion to new trades',
    "Cost to sponsor: $80 (sewing machine) | $1,200 (10 trainees)",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1164A3] via-[#68B9C4] to-[#82B4CC] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              Women&apos;s Empowerment Initiative
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Vocational Training Program
            </h1>
            <p className="text-xl text-white/90">
              Empowering Women Through Skills Development
            </p>
          </div>
        </div>
      </section>

      {/* Crisis Statistics */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[#1164A3] text-white border-[#1164A3]">
                National Crisis
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                The Crisis of Female Unemployment in Pakistan
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                Pakistan faces a severe gender gap in workforce participation,
                with women disproportionately affected by unemployment and
                limited economic opportunities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {crisisStatistics.map((stat, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl hover:border-[#1164A3] transition-all duration-300"
                >
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center text-white mx-auto mb-4`}
                    >
                      {stat.icon}
                    </div>
                    <div className="text-4xl font-bold text-[#1164A3] mb-2">
                      {stat.number}
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      {stat.label}
                    </h4>
                    <p className="text-sm text-gray-600 mb-2">
                      {stat.description}
                    </p>
                    <Badge variant="secondary" className="text-xs">
                      {stat.source}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quote */}
            <Card className="bg-gradient-to-r from-[#82B4CC]/20 to-[#68B9C4]/20 border-l-4 border-[#1164A3]">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="text-[#1164A3] text-4xl">&quot;</div>
                  <p className="text-lg text-gray-700 italic">
                    When girls are denied education and employment, entire
                    communities suffer. Vocational training is not just a
                    skill—it&apos;s a lifeline.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Program Origin */}
      <section className="py-16 bg-gradient-to-r from-[#B0A3B3]/10 to-[#82B4CC]/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[#68B9C4] text-white border-[#68B9C4]">Our Story</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                How NED Scholars&apos; Vocational Training Program Began
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                During the execution of our &quot;Save A Child&quot; initiative, we
                discovered alarming trends in Karachi&apos;s outskirts:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {discoveredTrends.map((trend, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl hover:border-[#1164A3] transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div
                      className={`${trend.color} w-14 h-14 rounded-full flex items-center justify-center mb-4`}
                    >
                      {trend.icon}
                    </div>
                    <h4 className="font-bold text-gray-800 mb-2 flex items-center">
                      <CheckCircle2 className="w-5 h-5 text-[#68B9C4] mr-2" />
                      {trend.title}
                    </h4>
                    <p className="text-gray-600">{trend.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="shadow-xl bg-gradient-to-r from-[#82B4CC]/20 to-[#B0A3B3]/20 border-[#1164A3]/20">
              <CardContent className="p-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Our Solution: Vocational Training as an Alternative Pathway
                  </h3>
                  <p className="text-gray-700 text-lg">
                    In <span className="font-semibold">2020</span>, NED
                    Scholars&apos; management and economics students proposed an
                    after-school vocational training program to provide girls
                    with employable skills.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Training Centers */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[#1164A3] text-white border-[#1164A3]">Our Centers</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Training Centers
              </h2>
              <p className="text-gray-600 text-lg">
                Expanding opportunities across Karachi
              </p>
            </div>

            <div className="space-y-6">
              {trainingCenters.map((center, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl hover:border-[#1164A3] transition-all duration-300"
                >
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6 mb-6">
                      <div
                        className={`w-20 h-20 bg-gradient-to-r ${center.color} rounded-2xl flex items-center justify-center text-white flex-shrink-0`}
                      >
                        <MapPin className="w-10 h-10" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-2xl font-bold text-gray-800">
                            {center.name}
                          </h3>
                          <Badge
                            className={center.status === "Active" ? "bg-[#68B9C4] text-white" : "bg-gray-200"}
                          >
                            {center.status}
                          </Badge>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                          <span className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {center.location}
                          </span>
                          <span className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            Since {center.since}
                          </span>
                        </div>
                        <p className="text-gray-700 mb-2">
                          <span className="font-semibold">Focus:</span>{" "}
                          {center.focus}
                        </p>
                      </div>
                    </div>

                    {center.status === "Active" ? (
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-[#82B4CC]/20 p-4 rounded-lg">
                          <div className="flex items-center space-x-2 mb-2">
                            <Users className="w-5 h-5 text-[#1164A3]" />
                            <h5 className="font-semibold text-gray-800">
                              Trainees
                            </h5>
                          </div>
                          <p className="text-sm text-gray-600">
                            {center.trainees}
                          </p>
                        </div>
                        <div className="bg-[#68B9C4]/20 p-4 rounded-lg">
                          <div className="flex items-center space-x-2 mb-2">
                            <Award className="w-5 h-5 text-[#1164A3]" />
                            <h5 className="font-semibold text-gray-800">
                              Achievement
                            </h5>
                          </div>
                          <p className="text-sm text-gray-600">
                            {center.achievement}
                          </p>
                        </div>
                        <div className="bg-[#B0A3B3]/20 p-4 rounded-lg">
                          <div className="flex items-center space-x-2 mb-2">
                            <Rocket className="w-5 h-5 text-[#1164A3]" />
                            <h5 className="font-semibold text-gray-800">
                              Next Step
                            </h5>
                          </div>
                          <p className="text-sm text-gray-600">
                            {center.nextStep}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="bg-[#B0A3B3]/20 p-6 rounded-lg">
                        <h5 className="font-semibold text-gray-800 mb-3 flex items-center">
                          <Star className="w-5 h-5 text-[#1164A3] mr-2" />
                          Planned Courses:
                        </h5>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                          {center.courses?.map((course, idx) => (
                            <div
                              key={idx}
                              className="flex items-start space-x-2 bg-white p-3 rounded"
                            >
                              <CheckCircle2 className="w-4 h-4 text-[#68B9C4] flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-gray-700">
                                {course}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gradient-to-r from-[#B0A3B3]/10 to-[#82B4CC]/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[#68B9C4] text-white border-[#68B9C4]">Our Approach</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                How the Program Works
              </h2>
              <p className="text-gray-600 text-lg">
                A comprehensive three-pillar approach to empowerment
              </p>
            </div>

            <div className="space-y-6">
              {programStructure.map((structure, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl hover:border-[#1164A3] transition-all duration-300"
                >
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6 mb-6">
                      <div
                        className={`w-20 h-20 bg-gradient-to-r ${structure.color} rounded-2xl flex items-center justify-center text-white flex-shrink-0`}
                      >
                        {structure.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <div className="w-8 h-8 bg-[#1164A3] rounded-full flex items-center justify-center text-white font-bold text-sm">
                            {structure.step}
                          </div>
                          <h3 className="text-2xl font-bold text-gray-800">
                            {structure.title}
                          </h3>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {structure.benefits.map((benefit, idx) => (
                        <div
                          key={idx}
                          className={`flex items-start space-x-2 p-3 rounded-lg `+benefit.color}
                        >
                          <CheckCircle2 className="w-5 h-5 text-[#1164A3] flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700">
                            {benefit.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[#1164A3] text-white border-[#1164A3]">Real Impact</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Success Stories
              </h2>
              <p className="text-gray-600 text-lg">
                Lives transformed through vocational training
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {successStories.map((story, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl hover:border-[#1164A3] transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${story.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                    >
                      <Image
                      width={56}
                      height={56}
                        src={story.image}
                        alt={story.name}
                        className="rounded-full object-cover"
                      />
                    </div>
                    <div className="text-center mb-4">
                      <span className="text-2xl mr-2">{story.emoji}</span>
                      <h4 className="font-bold text-gray-800 inline">
                        {story.name}
                      </h4>
                    </div>
                    <p className="text-gray-600 text-center">{story.story}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Testimonial Quote */}
            <Card className="bg-gradient-to-r from-[#82B4CC]/20 to-[#B0A3B3]/20 border-l-4 border-[#1164A3] shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="text-[#1164A3] text-5xl">&quot;</div>
                  <div>
                    <p className="text-xl text-gray-700 italic mb-2">
                      This program didn&apos;t just teach me stitching—it gave me
                      dignity.
                    </p>
                    <p className="text-gray-600">
                      – Ayesha, Program Graduate
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How You Can Help */}
      <section className="py-16 bg-gradient-to-r from-[#B0A3B3]/10 to-[#82B4CC]/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[#68B9C4] text-white border-[#68B9C4]">Get Involved</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                How You Can Help
              </h2>
              <p className="text-gray-600 text-lg">
                Multiple ways to support women&apos;s empowerment
              </p>
            </div>

            {/* Funding Options */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Funding Needs
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {fundingOptions.map((option, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-xl hover:border-[#1164A3] transition-all duration-300 cursor-pointer hover:-translate-y-1"
                  >
                    <CardContent className="p-6 text-center">
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${option.color} rounded-full flex items-center justify-center text-white mx-auto mb-4`}
                      >
                        {option.icon}
                      </div>
                      <div className="text-3xl font-bold text-[#1164A3] mb-2">
                        {option.amount}
                      </div>
                      <p className="text-gray-600">{option.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Contribution Ways */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Ways to Contribute
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {contributionWays.map((way, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-xl hover:border-[#1164A3] transition-all duration-300"
                  >
                    <CardContent className="p-6 text-center">
                      <div className="text-4xl mb-3">{way.emoji}</div>
                      <div className="w-12 h-12 bg-gradient-to-r from-[#1164A3] to-[#68B9C4] rounded-full flex items-center justify-center text-white mx-auto mb-3">
                        {way.icon}
                      </div>
                      <h4 className="font-bold text-gray-800 mb-2">
                        {way.title}
                      </h4>
                      <p className="text-sm text-gray-600">{way.amount}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <Card className="shadow-lg bg-white border-[#1164A3]/20">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center flex items-center justify-center">
                  <Mail className="w-6 h-6 mr-2 text-[#1164A3]" />
                  Contact Us
                </h3>
                <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-6 h-6 text-[#1164A3]" />
                    <a
                      href="mailto:vocational@nedscholars.org"
                      className="text-[#1164A3] hover:underline font-medium"
                    >
                      vocational@nedscholars.org
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="w-6 h-6 text-[#1164A3]" />
                    <a
                      href="https://www.nedscholars.org/vocational-training"
                      className="text-[#1164A3] hover:underline font-medium"
                    >
                      www.nedscholars.org/vocational-training
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="py-16 bg-gradient-to-r from-[#1164A3] via-[#68B9C4] to-[#82B4CC] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-white/20 text-white border-white/30">
                Quick Summary
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Key Takeaways
              </h2>
            </div>

            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-8">
                <ul className="space-y-4">
                  {keyTakeaways.map((takeaway, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                      <span className="text-lg">{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-2xl bg-gradient-to-r from-[#82B4CC]/20 to-[#B0A3B3]/20 border-l-4 border-[#1164A3]">
              <CardContent className="p-8 md:p-12">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-[#1164A3] to-[#68B9C4] rounded-full flex items-center justify-center mx-auto mb-6">
                    <Heart className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                    &quot;Skills transform lives. Help us empower more women in
                    Pakistan.&quot;
                  </h3>
                  <p className="text-lg text-gray-700 mb-8">
                    Every contribution, no matter the size, makes a lasting
                    impact on a girl&apos;s future and her community.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <button className="bg-gradient-to-r from-[#1164A3] to-[#68B9C4] text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center">
                      <Heart className="w-5 h-5 mr-2" />
                      Donate Now
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </button>
                    <button onClick={()=>{router.push("/register/partner")}} className="border-2 border-[#1164A3] text-[#1164A3] px-8 py-4 rounded-full font-semibold hover:bg-[#1164A3] hover:text-white transition-all duration-300 inline-flex items-center justify-center">
                      <Users className="w-5 h-5 mr-2" />
                      Become a Partner
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}