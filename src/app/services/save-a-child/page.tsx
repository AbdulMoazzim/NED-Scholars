"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  TrendingUp,
  Users,
  BookOpen,
  Laptop,
  Heart,
  Briefcase,
  GraduationCap,
  Lightbulb,
  DollarSign,
  Mail,
  Globe,
  AlertTriangle,
  Zap,
  Trophy,
  Sprout,
  School,
} from "lucide-react";
import { GetAllSuccessStories } from "@/app/actions/success-stories";
import { useEffect, useState } from "react";
import SuccessStoriesComponent from "@/components/Success-stories-card";
import { SuccessStoriesData } from "@/lib/types";
import Link from "next/link";
import Image from "next/image";

export default function EducationSupportPakistan() {
  const [stories, setSuccessStories] = useState<SuccessStoriesData>({
    success: false,
    data: [],
  });

  useEffect(() => {
    async function load() {
      const data = await GetAllSuccessStories();
      if (data.success) setSuccessStories(data);
    }
    load();
  }, []);

  const crisisStats = [
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      number: "22.8M",
      label: "Out-of-school children (ages 5-16)",
      description: "Second-highest globally",
      color: "from-[#1164A3] to-[#68B9C4]",
      source: "UNICEF 2023",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      number: "44%",
      label: "Complete secondary education",
      description: "More than half drop out",
      color: "from-[#68B9C4] to-[#82B4CC]",
      source: "World Bank 2024",
    },
    {
      icon: <Users className="w-8 h-8" />,
      number: "31.4%",
      label: "Youth unemployment (ages 18-25)",
      description: "Nearly 1 in 3 young people",
      color: "from-[#82B4CC] to-[#B0A3B3]",
      source: "Pakistan Bureau of Statistics 2023",
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      number: "60%",
      label: "Work in informal jobs",
      description: "Low-paying without social security",
      color: "from-[#1164A3] to-[#82B4CC]",
      source: "Employment Statistics",
    },
  ];

  const whyItMatters = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Highest Economic Returns",
      description:
        "Early investment in education yields the highest long-term economic returns",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Reduces Unemployment",
      description:
        "Quality secondary education reduces youth unemployment by 50%",
    },
    {
      icon: <Laptop className="w-6 h-6" />,
      title: "STEM Employment",
      description:
        "STEM-skilled youth are 3x more likely to secure formal employment",
    },
  ];

  const supportPackage = [
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Partial Tuition Coverage",
      description: "40-50% of school fees covered",
      color: "bg-[#68B9C4]/20 text-[#1164A3]",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Mentorship from Professionals",
      description: "Career guidance & role models",
      color: "bg-[#82B4CC]/20 text-[#1164A3]",
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "After-School Coaching",
      description: "STEM tutoring & skill development",
      color: "bg-[#B0A3B3]/30 text-[#1164A3]",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Parental Engagement Programs",
      description: "Financial literacy & education advocacy",
      color: "bg-[#82B4CC]/30 text-[#1164A3]",
    },
  ];

  const flagshipPrograms = [
    {
      icon: <Laptop className="w-8 h-8" />,
      title: "TechAThon",
      description: "Hands-on technology bootcamps",
      color: "from-[#68B9C4] to-[#82B4CC]",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Dare2Design",
      description: "Innovation & entrepreneurship training",
      color: "from-[#82B4CC] to-[#B0A3B3]",
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "EMUiNVENT",
      description: "National & global invention competitions",
      color: "from-[#1164A3] to-[#68B9C4]",
    },
  ];

  const selectionCriteria = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Academic Potential",
      description: "Strong performance despite financial constraints",
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Financial Need",
      description: "Families struggling to afford education",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Resilience & Determination",
      description: "Students committed to long-term growth",
    },
  ];

  const impactPoints = [
    {
      icon: <Users className="w-6 h-6" />,
      text: "Provide mentorship & career guidance",
    },
    {
      icon: <Laptop className="w-6 h-6" />,
      text: "Equip them with STEM skills for future employment",
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      text: "Help them compete in national & global innovation challenges",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1164A3] to-[#68B9C4] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 px-4 py-2 text-sm">
              Education Crisis Response
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Investing in Human Capital Through Targeted Education Support
            </h1>
            <p className="text-2xl text-white/90 mb-4">
              NED Scholars Pakistan: Transforming Lives Through Education
            </p>
          </div>
        </div>
      </section>

      {/* Crisis Statistics  */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[#1164A3] text-white border-[#1164A3]">
                National Emergency
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Pakistan&apos;s Education Crisis
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                Pakistan faces one of the world&apos;s most severe education
                crises, with millions of children deprived of quality schooling
                and youth facing staggering unemployment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {crisisStats.map((stat, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl hover:border-[#1164A3] transition-all duration-300 overflow-hidden"
                >
                  <CardContent className="p-6 flex flex-col items-center">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center text-white mb-4`}
                    >
                      {stat.icon}
                    </div>
                    <div className="text-4xl font-bold text-[#1164A3] mb-2">
                      {stat.number}
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2 text-center">
                      {stat.label}
                    </h4>
                    <p className="text-sm text-gray-600 mb-2 text-center">
                      {stat.description}
                    </p>
                    <Badge variant="secondary" className="text-xs">
                      {stat.source}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quote  */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <Card className="bg-gradient-to-r from-[#82B4CC]/20 to-[#B0A3B3]/20 border-l-4 border-[#1164A3] h-fit">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-[#1164A3] text-4xl">&quot;</div>
                    <p className="text-lg text-gray-700 italic font-bold mb-2 text-center">
                      Education is not a privilege — it is a fundamental right.
                      When the state fails to provide it, society must step in
                      to bridge the gap.
                    </p>
                    <div className="text-[#1164A3] text-4xl">&quot;</div>
                  </div>
                </CardContent>
              </Card>

              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-fit">
                <Image
                  width={800}
                  height={600}
                  src="/images/Services/save a child/save a child 4.jpeg"
                  alt="Children in Pakistan facing education barriers"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1164A3]/50 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-white text-sm font-medium bg-black/30 rounded-xl px-4 py-2 backdrop-blur-sm">
                    22.8 million children are out of school in Pakistan
                  </p>
                </div>
                <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border-4 border-[#68B9C4]/30 -z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-16 bg-gradient-to-r from-[#B0A3B3]/10 to-[#82B4CC]/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[#68B9C4] text-white border-[#68B9C4]">
                Critical Insights
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Why Early Education Intervention Matters
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                The lack of accessible education creates a cycle of poverty,
                unemployment, and social instability. Research shows that:
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[380px]">
                <Image
                  width={800}
                  height={600}
                  src="/images/Services/save a child/save a child 2.jpeg"
                  alt="Students studying STEM in a classroom"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1164A3]/50 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-white text-sm font-medium bg-black/30 rounded-xl px-4 py-2 backdrop-blur-sm">
                    Early STEM education triples the chance of formal employment
                  </p>
                </div>
                <div className="absolute -bottom-3 -left-3 w-full h-full rounded-2xl border-4 border-[#82B4CC]/30 -z-10" />
              </div>

              <div>
                <div className="grid grid-cols-1 gap-5 mb-6">
                  {whyItMatters.map((item, index) => (
                    <Card
                      key={index}
                      className="bg-white hover:shadow-xl hover:border-[#1164A3] transition-all duration-300"
                    >
                      <CardContent>
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-[#68B9C4] to-[#82B4CC] rounded-full flex items-center justify-center text-white flex-shrink-0">
                            {item.icon}
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-1 flex items-center gap-2">
                              {item.title}
                            </h4>
                            <p className="text-gray-600 text-sm">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
            <Card className="bg-gradient-to-r from-[#68B9C4] to-[#82B4CC] text-white w-full my-4">
              <CardContent className="p-4">
                <p className="font-semibold text-sm">
                  The Solution? A targeted, cost-effective approach that
                  identifies high-potential students and provides them with the
                  support they need to succeed.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[#1164A3] text-white border-[#1164A3]">
                Our Approach
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                NED Scholars&apos; Partial Support Program
              </h2>
              <p className="text-gray-600 text-lg">
                A comprehensive three-step approach to student success
              </p>
            </div>

            {/* Wide image banner */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl mb-10 h-60 md:h-[500px]">
              <Image
                width={800}
                height={600}
                src="/images/Services/save a child/save a child 3.jpeg"
                alt="NED Scholars support program in action"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1164A3]/65 to-transparent flex items-center">
                <div className="px-10 max-w-lg">
                  <h3 className="text-white text-2xl font-bold mb-2">
                    Three Steps to Change a Life
                  </h3>
                  <p className="text-white/85 text-sm leading-relaxed">
                    Identify talent, provide comprehensive support, then create
                    a pathway to financial independence — all for just $100–$150
                    per year.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 1 */}
            <Card className="mb-8 shadow-lg border-[#82B4CC]/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#1164A3] to-[#68B9C4] rounded-full flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <span>Talent Identification</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  We partner with schools to select students who demonstrate:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {selectionCriteria.map((criteria, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 bg-[#82B4CC]/10 p-4 rounded-lg"
                    >
                      <div className="text-[#1164A3] flex-shrink-0">
                        {criteria.icon}
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-1 flex items-center">
                          {criteria.title}
                        </h5>
                        <p className="text-sm text-gray-600">
                          {criteria.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Step 2 */}
            <Card className="mb-8 shadow-lg border-[#82B4CC]/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#68B9C4] to-[#82B4CC] rounded-full flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <div>
                    <span>Comprehensive Support Package</span>
                    <Badge className="ml-3 bg-[#82B4CC] text-white">
                      $100–$150 per year per student
                    </Badge>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Our model ensures students receive more than just financial
                  aid:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {supportPackage.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg"
                    >
                      <div className={`${item.color} p-3 rounded-lg`}>
                        {item.icon}
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-1">
                          {item.title}
                        </h5>
                        <p className="text-sm text-gray-600">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Step 3 */}
            <Card className="shadow-lg border-[#82B4CC]/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#82B4CC] to-[#B0A3B3] rounded-full flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <span>Pathway to Financial Independence</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Supported students gain access to NED Scholars&apos; flagship
                  programs:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  {flagshipPrograms.map((program, index) => (
                    <Card
                      key={index}
                      className="hover:shadow-xl hover:border-[#1164A3] transition-all duration-300"
                    >
                      <CardContent className="p-6 text-center">
                        <div
                          className={`w-16 h-16 bg-gradient-to-r ${program.color} rounded-full flex items-center justify-center text-white mx-auto mb-4`}
                        >
                          {program.icon}
                        </div>
                        <h5 className="font-semibold text-gray-800 mb-2">
                          {program.title}
                        </h5>
                        <p className="text-sm text-gray-600">
                          {program.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <Card className="bg-gradient-to-r from-[#82B4CC]/20 to-[#B0A3B3]/20 border-l-4 border-[#1164A3]">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-center space-x-4">
                      <div className="text-[#1164A3] text-3xl">&quot;</div>
                      <p className="text-gray-700 italic font-bold text-center">
                        We don&apos;t just keep students in school—we prepare
                        them for high-value careers that break the cycle of
                        poverty.
                      </p>
                      <div className="text-[#1164A3] text-3xl">&quot;</div>
                    </div>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section
        id="stories"
        className="py-16 bg-gradient-to-r from-[#B0A3B3]/10 to-[#82B4CC]/10"
      >
        <SuccessStoriesComponent
          slice={3}
          data={stories}
          path="/save-a-child"
        />
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[#68B9C4] text-white border-[#68B9C4]">
                Your Impact
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                The Impact of Your Support
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px]">
                <Image
                  width={800}
                  height={600}
                  src="/images/Services/save a child/save a child 1.jpeg"
                  alt="Student thriving after receiving NED Scholars support"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1164A3]/50 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-white text-sm font-medium bg-black/30 rounded-xl px-4 py-2 backdrop-blur-sm">
                    $150 a year keeps a talented student in school and on the
                    path to success
                  </p>
                </div>
                <div className="absolute -bottom-3 -left-3 w-full h-full rounded-2xl border-4 border-[#68B9C4]/30 -z-10" />
              </div>

              <div className="grid grid-cols-1 gap-4">
                {impactPoints.map((point, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-lg hover:border-[#1164A3] transition-all duration-300"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-[#1164A3] to-[#68B9C4] rounded-full flex items-center justify-center text-white flex-shrink-0">
                          {point.icon}
                        </div>
                        <p className="text-gray-700 font-medium">
                          {point.text}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-[#1164A3] to-[#68B9C4] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Join Us in Transforming Lives
              </h2>
              <p className="text-xl text-white/90 mb-8">How You Can Help</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Sprout className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold mb-2">Sponsor a Student</h4>
                  <p className="text-white/90">
                    $150 covers a full year of support
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold mb-2">Volunteer as a Mentor</h4>
                  <p className="text-white/90">
                    Guide students in STEM/career skills
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <School className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold mb-2">Partner Your School</h4>
                  <p className="text-white/90">Nominate deserving students</p>
                </CardContent>
              </Card>
            </div><Card className="shadow-lg bg-white border-[#82B4CC]/20">
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
    </div>
  );
}
