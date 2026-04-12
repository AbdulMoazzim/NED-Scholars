import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  Users,
  DollarSign,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  MapPin,
  GraduationCap,
  Award,
  Building2,
  Briefcase,
  Heart,
  Rocket,
  Lightbulb,
  Calendar,
  Mail,
  Globe,
  School,
  Laptop,
  UserCheck,
  TrendingDown,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CoachingCenterPage() {
  const systemChallenges = [
    {
      icon: <TrendingDown className="w-6 h-6" />,
      title: "Declining College Attendance",
      description:
        "Thousands of Intermediate students skip regular classes for coaching",
      color: "bg-[#82B4CC]/20 text-[#1164A3]",
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Exploitation of Teachers",
      description:
        "Qualified educators work for minimal wages (often <$100/month)",
      color: "bg-[#68B9C4]/20 text-[#1164A3]",
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Financial Burden on Families",
      description: "Quality coaching costs 5,000-15,000 PKR/month ($18-$54)",
      color: "bg-[#B0A3B3]/30 text-[#1164A3]",
    },
  ];

  const examTypes = [
    {
      icon: <BookOpen className="w-5 h-5" />,
      name: "Board Examinations",
      details: "Matric, Intermediate",
    },
    {
      icon: <GraduationCap className="w-5 h-5" />,
      name: "Cambridge O/A Levels",
      details: "International curriculum",
    },
    {
      icon: <School className="w-5 h-5" />,
      name: "University Entrance Tests",
      details: "ECAT, MDCAT etc.",
    },
  ];

  const studentBenefits = [
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Quality Subsidized Tuition",
      description: "Affordable education for Grades 1-12",
    },
    {
      icon: <Laptop className="w-6 h-6" />,
      title: "STEM-Focused Curriculum",
      description:
        "Enhanced learning in Science, Technology, Engineering, Mathematics",
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Career Counseling Sessions",
      description: "Guidance for future educational and career paths",
    },
  ];

  const teacherBenefits = [
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Fair Wages + Profit-Sharing",
      description: "Competitive compensation with growth potential",
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Ownership Transition Opportunities",
      description: "Path to becoming center owners",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Professional Development Training",
      description: "Continuous skill enhancement and career growth",
    },
  ];

  const currentCenters = [
    {
      name: "Samanabad Center",
      icon: <MapPin className="w-8 h-8" />,
      students: 120,
      teachers: 6,
      focus: "Mathematics/Science",
      color: "from-[#1164A3] to-[#68B9C4]",
    },
    {
      name: "Kemari Center",
      icon: <MapPin className="w-8 h-8" />,
      students: 90,
      teachers: 4,
      focus: "Cambridge O/A Level",
      color: "from-[#68B9C4] to-[#82B4CC]",
    },
  ];

  const differentiators = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Scholar-to-Teacher Pipeline",
      description: "Current NED students gain teaching experience",
      detail: "Clear path to center ownership",
      color: "from-[#1164A3] to-[#68B9C4]",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Enhanced Curriculum",
      description: "Regular STEM workshops",
      detail: "Digital literacy integration",
      color: "from-[#68B9C4] to-[#82B4CC]",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Community-Based Approach",
      description: "Centers located in underserved neighborhoods",
      detail: "Parent education seminars",
      color: "from-[#82B4CC] to-[#B0A3B3]",
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Sustainable Model",
      description: "Revenue reinvested in facility upgrades",
      detail: "Scaling through franchise model",
      color: "from-[#1164A3] to-[#82B4CC]",
    },
  ];

  const achievements2024 = [
    {
      icon: <Users className="w-6 h-6" />,
      number: "210",
      label: "Students Enrolled",
      description: "Currently active across both centers",
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      number: "10",
      label: "NED Scholars Employed",
      description: "As qualified teachers",
    },
    {
      icon: <Award className="w-6 h-6" />,
      number: "85%",
      label: "Pass Rate",
      description: "In mock board examinations",
    },
  ];

  const expansionPlans2025 = [
    { name: "Orangi Town", icon: <MapPin className="w-5 h-5" /> },
    { name: "Landhi", icon: <MapPin className="w-5 h-5" /> },
    { name: "Korangi", icon: <MapPin className="w-5 h-5" /> },
  ];

  const fundingOptions = [
    {
      amount: "$5,000",
      description: "Establishes one new center",
      icon: <Building2 className="w-6 h-6" />,
      color: "from-[#68B9C4] to-[#82B4CC]",
    },
    {
      amount: "$50",
      description: "Sponsors a student for one year",
      icon: <Users className="w-6 h-6" />,
      color: "from-[#1164A3] to-[#68B9C4]",
    },
    {
      amount: "$300",
      description: "Covers teacher training for one scholar",
      icon: <GraduationCap className="w-6 h-6" />,
      color: "from-[#82B4CC] to-[#B0A3B3]",
    },
  ];

  const participationOptions = [
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: "Volunteer as a Guest Lecturer",
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Donate Educational Materials",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Partner as a Local Sponsor",
    },
  ];

  const keyHighlights = [
    "Addresses systemic issues in Pakistan's coaching industry",
    "Scholar-owned model creates sustainable careers",
    "$50/year subsidized tuition makes quality education accessible",
    "STEM-enhanced curriculum beyond test preparation",
    "Proven results with 85% pass rate in mock exams",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section — no image */}
      <section className="bg-gradient-to-r from-[#1164A3] via-[#68B9C4] to-[#82B4CC] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 px-4 py-2 text-sm">
              Coaching Center
            </Badge>
            <h1 className="text-3xl md:text-6xl font-bold mb-6">
              NED Scholars Coaching Center Initiative
            </h1>
            <p className="text-lg md:text-2xl text-white/90">
              Revolutionizing Affordable Education in Pakistan
            </p>
          </div>
        </div>
      </section>

      {/* Current Landscape — image beside challenges */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[#68B9C4] text-white border-[#68B9C4]">
                Industry Analysis
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                The Coaching Center Landscape in Pakistan
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-8">
                Pakistan&apos;s education system has seen a dramatic shift
                toward private coaching centers, particularly in major cities
                like Karachi. These centers have become essential for students
                preparing for:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {examTypes.map((exam, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-lg hover:border-[#1164A3] transition-all duration-300"
                  >
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#1164A3] to-[#68B9C4] rounded-full flex items-center justify-center text-white mx-auto mb-3">
                        {exam.icon}
                      </div>
                      <h4 className="font-semibold text-gray-800 mb-1">
                        {exam.name}
                      </h4>
                      <p className="text-sm text-gray-600">{exam.details}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Challenges + Image side by side */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-10">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Key Challenges in the Current System
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {systemChallenges.map((challenge, index) => (
                    <Card
                      key={index}
                      className="hover:shadow-xl hover:border-[#1164A3] transition-all duration-300"
                    >
                      <CardContent className="p-5">
                        <div className="flex items-start space-x-4">
                          <div
                            className={`${challenge.color} p-3 rounded-lg flex-shrink-0`}
                          >
                            {challenge.icon}
                          </div>
                          <div>
                            <div className="flex items-center mb-1">
                              <h4 className="font-semibold text-gray-800">
                                {challenge.title}
                              </h4>
                            </div>
                            <p className="text-gray-600">
                              {challenge.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[480px]">
                <Image
                  width={800}
                  height={600}
                  src="/images/Services/CoachingCenter/coaching center 2.jpeg"
                  alt="Students in a coaching center"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1164A3]/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white text-sm font-medium bg-black/30 rounded-xl px-4 py-2 backdrop-blur-sm">
                    Thousands of students rely on coaching centers across
                    Karachi
                  </p>
                </div>
                {/* Decorative border */}
                <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border-4 border-[#68B9C4]/30 -z-10" />
              </div>
            </div>

            {/* Quote */}
            <Card className="bg-gradient-to-r from-[#82B4CC]/20 to-[#B0A3B3]/20 border-l-4 border-[#1164A3]">
              <CardContent className="p-6">
                <div className="flex items-center justify-center space-x-4">
                  <div className="text-[#1164A3] text-4xl">&quot;</div>
                  <p className="text-lg text-gray-700 italic font-bold">
                    When education becomes a business rather than a right,
                    students and teachers both lose.
                  </p>
                  <div className="text-[#1164A3] text-4xl">&quot;</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Model — image above pricing */}
      <section className="py-16 bg-gradient-to-r from-[#B0A3B3]/10 to-[#82B4CC]/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[#1164A3] text-white border-[#1164A3]">
                Our Solution
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                NED Scholars&apos; Innovative Coaching Center Model
              </h2>
              <p className="text-gray-600 text-lg">
                Launched in 2024, our coaching centers represent a social
                enterprise approach to education
              </p>
            </div>

            {/* Full-width image banner */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl mb-10 h-96">
              <Image
                width={800}
                height={600}
                src="/images/Services/CoachingCenter/coaching center 1.jpg"
                alt="NED Scholars coaching center classroom"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1164A3]/60 to-transparent flex items-center">
                <div className="px-10 max-w-lg">
                  <h3 className="text-white text-2xl font-bold mb-2">
                    A Model Built for Impact
                  </h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    Empowering scholars as teachers while making quality STEM
                    education accessible to all.
                  </p>
                </div>
              </div>
            </div>

            {/* Dual Mission */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <Card className="shadow-lg border-[#82B4CC]/20">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-[#1164A3] to-[#68B9C4] rounded-full flex items-center justify-center text-white font-bold">
                      1
                    </div>
                    <span>For Students</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {studentBenefits.map((benefit, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-3 p-3 bg-[#82B4CC]/20 rounded-lg"
                      >
                        <div className="text-[#1164A3] flex-shrink-0">
                          {benefit.icon}
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-800 mb-1 flex items-center">
                            {benefit.title}
                          </h5>
                          <p className="text-sm text-gray-600">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-[#82B4CC]/20">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-[#68B9C4] to-[#82B4CC] rounded-full flex items-center justify-center text-white font-bold">
                      2
                    </div>
                    <span>For NED Scholars (Teachers)</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {teacherBenefits.map((benefit, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-3 p-3 bg-[#B0A3B3]/20 rounded-lg"
                      >
                        <div className="text-[#1164A3] flex-shrink-0">
                          {benefit.icon}
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-800 mb-1 flex items-center">
                            {benefit.title}
                          </h5>
                          <p className="text-sm text-gray-600">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Current Operations + Image */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-8">
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[85%] flex flex-col item-center justify-center">
                <Image
                  width={800}
                  height={600}
                  src="/images/Services/CoachingCenter/coaching center 4.jpg"
                  alt="NED Scholars coaching center location"
                  className="w-full h-full object-cover "
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1164A3]/50 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-white text-sm font-medium bg-black/30 rounded-xl px-4 py-2 backdrop-blur-sm">
                    Our centers are embedded in the communities they serve
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Current Operations
                </h3>
                <div className="space-y-4">
                  {currentCenters.map((center, index) => (
                    <Card
                      key={index}
                      className="hover:shadow-xl hover:border-[#1164A3] transition-all duration-300"
                    >
                      <CardContent className="p-6">
                        <div
                          className={`w-12 h-12 bg-gradient-to-r ${center.color} rounded-xl flex items-center justify-center text-white mb-3`}
                        >
                          {center.icon}
                        </div>
                        <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                          {center.name}
                        </h4>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-gray-600">Students:</span>
                            <Badge className="bg-[#82B4CC] text-white">
                              {center.students}
                            </Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-600">Teachers:</span>
                            <Badge className="bg-[#68B9C4] text-white">
                              {center.teachers} NED Scholars
                            </Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-600">Focus:</span>
                            <Badge className="bg-[#1164A3] text-white">
                              {center.focus}
                            </Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Pricing */}
            <Card className="shadow-lg bg-gradient-to-r from-[#68B9C4]/20 to-[#82B4CC]/20 border-l-4 border-[#1164A3]">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <DollarSign className="w-6 h-6 text-[#1164A3] mr-2" />
                  Pricing Model
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-[#68B9C4] flex-shrink-0" />
                    <p className="text-gray-700">
                      <span className="font-semibold">
                        $50/year per student
                      </span>{" "}
                      (75% subsidized by NED Scholars)
                    </p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-[#68B9C4] flex-shrink-0" />
                    <p className="text-gray-700">
                      Sliding scale available for extreme need cases
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Differentiators — image on right */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-6">
              <Badge className="mb-4 bg-[#68B9C4] text-white border-[#68B9C4]">
                What Sets Us Apart
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Program Differentiators
              </h2>
              <p className="text-gray-600 text-lg">
                What Makes Our Centers Unique?
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {differentiators.map((diff, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-xl hover:border-[#1164A3] transition-all duration-300"
                  >
                    <CardContent className="p-6">
                      <div
                        className={`w-14 h-14 bg-gradient-to-r ${diff.color} rounded-2xl flex items-center justify-center text-white mb-4`}
                      >
                        {diff.icon}
                      </div>
                      <h4 className="font-bold text-gray-800 text-base mb-2">
                        {diff.title}
                      </h4>
                      <p className="text-gray-700 text-sm mb-1">
                        {diff.description}
                      </p>
                      <p className="text-gray-500 text-xs">{diff.detail}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[80%]">
                <Image
                  width={800}
                  height={600}
                  src="/images/Services/CoachingCenter/coaching center 5.jpg"
                  alt="NED Scholars teachers in the classroom"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1164A3]/50 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-white text-sm font-medium bg-black/30 rounded-xl px-4 py-2 backdrop-blur-sm">
                    NED Scholars teaching the next generation of STEM leaders
                  </p>
                </div>
                <div className="absolute -bottom-3 -left-3 w-full h-full rounded-2xl border-4 border-[#68B9C4]/30 -z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact & Expansion — image beside roadmap */}
      <section className="py-16 bg-gradient-to-r from-[#B0A3B3]/10 to-[#82B4CC]/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[#1164A3] text-white border-[#1164A3]">
                Growth & Results
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Impact & Expansion Plans
              </h2>
            </div>

            {/* Achievements */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                2024 Achievements
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {achievements2024.map((achievement, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-xl hover:border-[#1164A3] transition-all duration-300"
                  >
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-[#68B9C4] to-[#82B4CC] rounded-full flex items-center justify-center text-white mx-auto mb-4">
                        {achievement.icon}
                      </div>
                      <div className="flex items-center justify-center mb-2">
                        <div className="text-4xl font-bold text-[#1164A3]">
                          {achievement.number}
                        </div>
                      </div>
                      <h4 className="font-semibold text-gray-800 mb-1">
                        {achievement.label}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {achievement.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Roadmap */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <Card className="shadow-lg border-[#82B4CC]/20">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <Calendar className="w-6 h-6 text-[#1164A3]" />
                    <span>2025 Expansion</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Opened 3 additional centers in:
                  </p>
                  <div className="space-y-3">
                    {expansionPlans2025.map((location, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-3 p-3 bg-[#82B4CC]/20 rounded-lg"
                      >
                        <div className="text-[#1164A3]">{location.icon}</div>
                        <span className="font-medium text-gray-800">
                          {location.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-[#82B4CC]/20 h-full">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <Calendar className="w-6 h-6 text-[#68B9C4]" />
                    <span>2026 Goals</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-[#68B9C4] flex-shrink-0 mt-1" />
                      <p className="text-gray-700">
                        Develop standardized teacher training program
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-[#68B9C4] flex-shrink-0 mt-1" />
                      <p className="text-gray-700">
                        Launch virtual coaching platform
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[#1164A3] text-white border-[#1164A3]">
                Get Involved
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                How You Can Support
              </h2>
              <p className="text-gray-600 text-lg">
                Multiple ways to contribute to our mission
              </p>
            </div>

            {/* Funding + Image */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Funding Needs
                </h3>
                <div className="space-y-4">
                  {fundingOptions.map((option, index) => (
                    <Card
                      key={index}
                      className="hover:shadow-xl hover:border-[#1164A3] transition-all duration-300 cursor-pointer hover:-translate-y-1"
                    >
                      <CardContent className="p-5 flex items-center gap-5">
                        <div
                          className={`w-14 h-14 bg-gradient-to-r ${option.color} rounded-full flex items-center justify-center text-white flex-shrink-0`}
                        >
                          {option.icon}
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-[#1164A3]">
                            {option.amount}
                          </div>
                          <p className="text-gray-600 text-sm">
                            {option.description}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[70%]">
                <Image
                  width={800}
                  height={600}
                  src="/images/Services/CoachingCenter/coaching center 6.jpeg"
                  alt="Donors and community supporters"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1164A3]/40 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-white text-sm font-medium bg-black/30 rounded-xl px-4 py-2 backdrop-blur-sm">
                    Your contribution directly transforms a student&apos;s
                    future
                  </p>
                </div>
              </div>
            </div>

            {/* Participation */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Participation Opportunities
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {participationOptions.map((option, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-xl hover:border-[#1164A3] transition-all duration-300"
                  >
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#1164A3] to-[#68B9C4] rounded-full flex items-center justify-center text-white mx-auto mb-3">
                        {option.icon}
                      </div>
                      <h4 className="font-semibold text-gray-800">
                        {option.title}
                      </h4>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Contact */}
            <Card className="shadow-lg bg-white border-[#82B4CC]/20">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center flex items-center justify-center">
                  <Mail className="w-6 h-6 mr-2 text-[#1164A3]" />
                  Contact Us
                </h3>
                <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-6 h-6 text-[#1164A3]" />
                    <Link
                      href="mailto:admin@nedscholars.org"
                      className="text-[#1164A3] hover:underline font-medium"
                    >
                      admin@nedscholars.org
                    </Link>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="w-6 h-6 text-[#1164A3]" />
                    <Link
                      href="https://www.nedscholars.org/coaching-centers"
                      className="text-[#1164A3] hover:underline font-medium"
                    >
                      www.nedscholars.org
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-[250px] relative text-white overflow-hidden">
        <Image
          width={800}
          height={600}
          src="/images/Services/CoachingCenter/coaching center 1.jpeg"
          alt="students holding certificates"
          className="absolute inset-0 w-full h-full object-cover object-center"
          aria-hidden="true"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1164A3]/85 to-[#68B9C4]/85 opacity-80" />

      </section>
    </div>
  );
}
