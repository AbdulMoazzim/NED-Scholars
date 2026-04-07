import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Heart,
  TrendingUp,
  AlertTriangle,
  DollarSign,
  Award,
  CheckCircle2,
  Briefcase,
  Home,
  Scissors,
  MapPin,
  Calendar,
  ArrowRight,
  Star,
  GraduationCap,
  Building2,
  Rocket,
  User,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function VocationalTrainingPage() {
  const crisisStatistics = [
    {
      icon: <Users className="w-8 h-8" />,
      number: "22%",
      label: "Women in Formal Workforce",
      source: "World Bank, 2023",
      color: "from-[#1164A3] to-[#68B9C4]",
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      number: "12M+",
      label: "Girls Drop Out",
      source: "UNICEF Pakistan, 2023",
      color: "from-[#68B9C4] to-[#82B4CC]",
    },
    {
      icon: <Home className="w-8 h-8" />,
      number: "81%",
      label: "Prefer Early Marriage",
      source: "Pakistan Bureau of Statistics, 2022",
      color: "from-[#82B4CC] to-[#B0A3B3]",
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      number: "<5%",
      label: "Have Access to Training",
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
      courses: [
        "Electrician training",
        "Plumbing & pipefitting",
        "AC repair & maintenance",
      ],
      color: "from-[#68B9C4] to-[#82B4CC]",
    },
  ];

  const programStructure = [
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Training Structure",
      benefits: [
        {
          color: "bg-[#82B4CC]/20",
          text: "After-school sessions (3-4 hours daily)",
        },
        {
          color: "bg-[#68B9C4]/20",
          text: "Hands-on skill development (No theoretical overload)",
        },
        {
          color: "bg-[#B0A3B3]/20",
          text: "Certification upon completion (Recognized by local businesses)",
        },
      ],
      color: "from-[#1164A3] to-[#68B9C4]",
      step: 1,
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Economic Empowerment",
      benefits: [
        {
          color: "bg-[#82B4CC]/20",
          text: "Earning potential: $80–$150/month for trained girls",
        },
        {
          color: "bg-[#68B9C4]/20",
          text: '"Darzi" App (Under Development) – Connects girls with customers',
        },
        {
          color: "bg-[#B0A3B3]/20",
          text: "NEDUET Stalls – Showcase and sell handmade products",
        },
      ],
      color: "from-[#68B9C4] to-[#82B4CC]",
      step: 2,
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Long-Term Sustainability",
      benefits: [
        {
          color: "bg-[#82B4CC]/20",
          text: "Micro-entrepreneurship model – Girls support their families",
        },
        {
          color: "bg-[#68B9C4]/20",
          text: "Community impact – Reduced early marriages, increased independence",
        },
        {
          color: "bg-[#B0A3B3]/20",
          text: "Scalability – Replicable in other underserved areas",
        },
      ],
      color: "from-[#82B4CC] to-[#B0A3B3]",
      step: 3,
    },
  ];

  const successStories = [
    {
      name: "Ayesha, 17",
      image: <User className="text-white" />,
      story: "Went from school dropout to earning $50/month stitching clothes",
      color: "from-[#1164A3] to-[#68B9C4]",
    },
    {
      name: "Fatima, 19",
      image: <User className="text-white" />,
      story: "Received a sewing machine and now trains other girls",
      color: "from-[#68B9C4] to-[#82B4CC]",
    },
    {
      name: "Sana, 20",
      image: <User className="text-white" />,
      story: "Supports her siblings' education with her stitching income",
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
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Sponsor a Trainee",
      amount: "$150 covers full training",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Partner with Us",
      amount: "Help expand to new locations",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#1164A3] to-[#68B9C4] text-white py-20">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 px-4 py-2 text-sm">
              Women&apos;s Empowerment Initiative
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Vocational Training Program
            </h1>
            <p className="text-2xl text-white/90 mb-4">
              Empowering Women Through Skills Development
            </p>
            <Link
              href="/donate"
              className="inline-flex items-center gap-2 bg-white text-[#1164A3] hover:bg-gray-100 text-lg px-8 py-4 rounded-full shadow-xl font-semibold transform hover:scale-105 transition-all duration-300"
            >
              <Heart className="w-5 h-5" />
              Support the Program
            </Link>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#68B9C4]/20 rounded-full blur-3xl"></div>
      </section>

      {/* Crisis Statistics  */}
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

            {/* Wide banner image */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl mb-10 h-52 md:h-64">
              <Image
                width={800}
                height={600}
                src="/images/vocational-crisis.jpg"
                alt="The reality of female unemployment and limited opportunities in Pakistan"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1164A3]/65 to-transparent flex items-center">
                <div className="px-10 max-w-lg">
                  <h3 className="text-white text-2xl font-bold mb-2">
                    A Crisis That Demands Action
                  </h3>
                  <p className="text-white/85 text-sm leading-relaxed">
                    Millions of women and girls in Pakistan are locked out of
                    education and economic opportunity. Vocational training is
                    their pathway in.
                  </p>
                </div>
              </div>
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
                <div className="flex items-start justify-center space-x-4">
                  <div className="text-[#1164A3] text-4xl">&quot;</div>
                  <p className="text-lg text-gray-700 italic">
                    When girls are denied education and employment, entire
                    communities suffer. Vocational training is not just a
                    skill—it&apos;s a lifeline.
                  </p>
                  <div className="text-[#1164A3] text-4xl">&quot;</div>
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
              <Badge className="mb-4 bg-[#68B9C4] text-white border-[#68B9C4]">
                Our Story
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                How NED Scholars&apos; Vocational Training Program Began
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                During the execution of our &quot;Save A Child&quot; initiative,
                we discovered alarming trends in Karachi&apos;s outskirts:
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-8">
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[380px]">
                <Image
                  width={800}
                  height={600}
                  src="/images/vocational-origin.jpg"
                  alt="NED Scholars discovering alarming trends in Karachi outskirts communities"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1164A3]/50 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-white text-sm font-medium bg-black/30 rounded-xl px-4 py-2 backdrop-blur-sm">
                    What began as a field survey became a movement — students
                    turned insight into action
                  </p>
                </div>
                <div className="absolute -bottom-3 -left-3 w-full h-full rounded-2xl border-4 border-[#82B4CC]/30 -z-10" />
              </div>

              <div className="space-y-5">
                {discoveredTrends.map((trend, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-xl hover:border-[#1164A3] transition-all duration-300 p-3"
                  >
                    <CardContent className="p-5">
                      <div className="flex items-start gap-4">
                        <div
                          className={`${trend.color} w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0`}
                        >
                          {trend.icon}
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-1">
                            {trend.title}
                          </h4>
                          <p className="text-gray-600 text-sm">
                            {trend.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            <Card className="shadow-xl bg-gradient-to-r from-[#82B4CC]/20 to-[#B0A3B3]/20 border-[#1164A3]/20 w-full">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Our Solution
                </h3>
                <p className="text-gray-700">
                  In <span className="font-semibold">2020</span>, NED
                  Scholars&apos; management and economics students proposed an
                  after-school vocational training program to provide girls with
                  employable skills.
                </p>
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
              <Badge className="mb-4 bg-[#1164A3] text-white border-[#1164A3]">
                Our Centers
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Training Centers
              </h2>
              <p className="text-gray-600 text-lg">
                Expanding opportunities across Karachi
              </p>
            </div>

            {/* Center 1 — image on right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-10">
              <Card className="hover:shadow-xl hover:border-[#1164A3] transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6 mb-6">
                    <div
                      className={`w-20 h-20 bg-gradient-to-r ${trainingCenters[0].color} rounded-2xl flex items-center justify-center text-white flex-shrink-0`}
                    >
                      <MapPin className="w-10 h-10" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-2xl font-bold text-gray-800">
                          {trainingCenters[0].name}
                        </h3>
                        <Badge className="bg-[#68B9C4] text-white">
                          {trainingCenters[0].status}
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                        <span className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {trainingCenters[0].location}
                        </span>
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          Since {trainingCenters[0].since}
                        </span>
                      </div>
                      <p className="text-gray-700 mb-2">
                        <span className="font-semibold">Focus:</span>{" "}
                        {trainingCenters[0].focus}
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-[#82B4CC]/20 p-4 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Users className="w-5 h-5 text-[#1164A3]" />
                        <h5 className="font-semibold text-gray-800">
                          Trainees
                        </h5>
                      </div>
                      <p className="text-sm text-gray-600">
                        {trainingCenters[0].trainees}
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
                        {trainingCenters[0].achievement}
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
                        {trainingCenters[0].nextStep}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px]">
                <Image
                  width={800}
                  height={600}
                  src="/images/vocational-center-1.jpg"
                  alt="AlMustafa Educational Center - girls learning stitching and sewing"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1164A3]/50 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-white text-sm font-medium bg-black/30 rounded-xl px-4 py-2 backdrop-blur-sm">
                    110 girls trained since 2020 — each one a step toward
                    economic independence
                  </p>
                </div>
                <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border-4 border-[#68B9C4]/30 -z-10" />
              </div>
            </div>

            {/* Center 2 — image on left */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[360px]">
                <img
                  src="/images/vocational-center-2.jpg"
                  alt="Khadija Qazi School - upcoming technical trades training center"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1164A3]/50 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-white text-sm font-medium bg-black/30 rounded-xl px-4 py-2 backdrop-blur-sm">
                    Expanding to electrician, plumbing & AC repair — skills that
                    command real market wages
                  </p>
                </div>
                <div className="absolute -bottom-3 -left-3 w-full h-full rounded-2xl border-4 border-[#82B4CC]/30 -z-10" />
              </div>

              <Card className="hover:shadow-xl hover:border-[#1164A3] transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6 mb-6">
                    <div
                      className={`w-20 h-20 bg-gradient-to-r ${trainingCenters[1].color} rounded-2xl flex items-center justify-center text-white flex-shrink-0`}
                    >
                      <MapPin className="w-10 h-10" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-2xl font-bold text-gray-800">
                          {trainingCenters[1].name}
                        </h3>
                        <Badge className="bg-gray-200">
                          {trainingCenters[1].status}
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                        <span className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {trainingCenters[1].location}
                        </span>
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          Since {trainingCenters[1].since}
                        </span>
                      </div>
                      <p className="text-gray-700 mb-4">
                        <span className="font-semibold">Focus:</span>{" "}
                        {trainingCenters[1].focus}
                      </p>
                    </div>
                  </div>
                  <div className="bg-[#B0A3B3]/20 p-6 rounded-lg">
                    <h5 className="font-semibold text-gray-800 mb-3 flex items-center">
                      <Star className="w-5 h-5 text-[#1164A3] mr-2" />
                      Planned Courses:
                    </h5>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {trainingCenters[1].courses?.map((course, idx) => (
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
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Program Structure  */}
      <section className="py-16 bg-gradient-to-r from-[#B0A3B3]/10 to-[#82B4CC]/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[#68B9C4] text-white border-[#68B9C4]">
                How It Works
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Program Structure
              </h2>
              <p className="text-gray-600 text-lg">
                A three-phase model built for real, lasting impact
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px] mb-4">
              <img
                src="/images/vocational-program.jpg"
                alt="Vocational training program structure — from skills to economic empowerment"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1164A3]/50 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-white text-sm font-medium bg-black/30 rounded-xl px-4 py-2 backdrop-blur-sm">
                  From training to certification to income — a complete pathway
                  to independence
                </p>
              </div>
              <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border-4 border-[#68B9C4]/30 -z-10" />
            </div>
              <div className="space-y-6 flex flex-wrap justify-center gap-5">
                {programStructure.map((item, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-xl hover:border-[#1164A3] transition-all duration-300 w-[48%]"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-5">
                        <div
                          className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center text-white flex-shrink-0`}
                        >
                          {item.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <h3 className="text-lg font-bold text-gray-800">
                              {item.title}
                            </h3>
                          </div>
                          <div className="space-y-2">
                            {item.benefits.map((benefit, i) => (
                              <div
                                key={i}
                                className={`${benefit.color} p-2 rounded-lg text-sm text-gray-700`}
                              >
                                {benefit.text}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
          </div>
        </div>
      </section>

      {/* Success Stories  */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[#1164A3] text-white border-[#1164A3]">
                Real Impact
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Success Stories
              </h2>
              <p className="text-gray-600 text-lg">
                Lives transformed through vocational training
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-8">
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px]">
                <img
                  src="/images/vocational-success.jpg"
                  alt="Graduates of the vocational training program who have transformed their lives"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1164A3]/50 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-white text-sm font-medium bg-black/30 rounded-xl px-4 py-2 backdrop-blur-sm">
                    Every graduate is proof that a single skill can rewrite an
                    entire life story
                  </p>
                </div>
                <div className="absolute -bottom-3 -left-3 w-full h-full rounded-2xl border-4 border-[#82B4CC]/30 -z-10" />
              </div>

              <div className="space-y-5">
                {successStories.map((story, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-xl hover:border-[#1164A3] transition-all duration-300 p-3"
                  >
                    <CardContent className="p-5">
                      <div className="flex items-start gap-4">
                        <div
                          className={`w-14 h-14 bg-gradient-to-r ${story.color} rounded-full flex items-center justify-center flex-shrink-0`}
                        >
                          {story.image}
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-1">
                            {story.name}
                          </h4>
                          <p className="text-gray-600 text-sm">{story.story}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Testimonial Quote */}
            <Card className="bg-gradient-to-r from-[#82B4CC]/20 to-[#B0A3B3]/20 border-l-4 border-[#1164A3] shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="text-[#1164A3] text-5xl">&quot;</div>
                  <div>
                    <p className="text-xl text-gray-700 italic mb-2">
                      This program didn&apos;t just teach me stitching—it gave
                      me dignity.
                    </p>
                    <p className="text-gray-600">– Ayesha, Program Graduate</p>
                  </div>
                  <div className="text-[#1164A3] text-5xl">&quot;</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How You Can Help */}
      <section
        id="help"
        className="py-16 bg-gradient-to-r from-[#B0A3B3]/10 to-[#82B4CC]/10"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[#68B9C4] text-white border-[#68B9C4]">
                Get Involved
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                How You Can Help
              </h2>
              <p className="text-gray-600 text-lg">
                Multiple ways to support women&apos;s empowerment
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                  Funding Needs
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
                  {fundingOptions.map((option, index) => (
                    <Card
                      key={index}
                      className="hover:shadow-xl hover:border-[#1164A3] transition-all duration-300 cursor-pointer hover:-translate-y-1"
                    >
                      <CardContent className="p-5 text-center">
                        <div
                          className={`w-14 h-14 bg-gradient-to-r ${option.color} rounded-full flex items-center justify-center text-white mx-auto mb-3`}
                        >
                          {option.icon}
                        </div>
                        <div className="text-2xl font-bold text-[#1164A3] mb-2">
                          {option.amount}
                        </div>
                        <p className="text-gray-600 text-xs">
                          {option.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-5 text-center">
                  Ways to Contribute
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  {contributionWays.map((way, index) => (
                    <Card
                      key={index}
                      className="hover:shadow-xl hover:border-[#1164A3] transition-all duration-300"
                    >
                      <CardContent className="p-5 text-center">
                        <div className="w-11 h-11 bg-gradient-to-r from-[#1164A3] to-[#68B9C4] rounded-full flex items-center justify-center text-white mx-auto mb-3">
                          {way.icon}
                        </div>
                        <h4 className="font-bold text-gray-800 mb-1 text-sm">
                          {way.title}
                        </h4>
                        <p className="text-xs text-gray-600">{way.amount}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[480px]">
                <img
                  src="/images/vocational-support.jpg"
                  alt="Supporting women's empowerment through vocational training donations"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1164A3]/50 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-white text-sm font-medium bg-black/30 rounded-xl px-4 py-2 backdrop-blur-sm">
                    $80 buys a sewing machine. $1,200 trains 10 girls. Your
                    contribution changes lives permanently.
                  </p>
                </div>
                <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border-4 border-[#68B9C4]/30 -z-10" />
              </div>
            </div>
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
                    Skills transform lives. Help us empower more women in
                    Pakistan.
                  </h3>
                  <p className="text-lg text-gray-700 mb-8">
                    Every contribution, no matter the size, makes a lasting
                    impact on a girl&apos;s future and her community.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <Link
                      href="/donate"
                      className="bg-gradient-to-r from-[#1164A3] to-[#68B9C4] text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
                    >
                      <Heart className="w-5 h-5 mr-2" />
                      Donate Now
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                    <Link
                      href="/register/partner"
                      className="border-2 border-[#1164A3] text-[#1164A3] px-8 py-4 rounded-full font-semibold hover:bg-[#1164A3] hover:text-white transition-all duration-300 inline-flex items-center justify-center"
                    >
                      <Users className="w-5 h-5 mr-2" />
                      Become a Partner
                    </Link>
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
