"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle2,
  TrendingUp,
  Users,
  Award,
  BookOpen,
  Laptop,
  Target,
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
} from "lucide-react";
import { GetAllSuccessStories } from "@/app/actions/success-stories";
import { useEffect, useState } from "react";
import SuccessStoriesComponent from "@/components/Success-stories-card";
import { SuccessStoriesData } from "@/lib/types";
import { useRouter } from "next/navigation";

export default function EducationSupportPakistan() {
    const router = useRouter();
  const [stories, setSuccessStories] = useState<SuccessStoriesData>({success: false, data: [] });
    useEffect(() => {
        async function load() {
          const data = await GetAllSuccessStories(); // server call
          if (data.success) {  // Changed from stories?.success to data?.success
            setSuccessStories(data);
          }
        }
        load();
      }, []);
  const crisisStats = [
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      number: "22.8M",
      label: "Out-of-school children (ages 5-16)",
      description: "Second-highest globally",
      color: "from-red-600 to-orange-600",
      source: "UNICEF 2023",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      number: "44%",
      label: "Complete secondary education",
      description: "More than half drop out",
      color: "from-orange-600 to-yellow-600",
      source: "World Bank 2024",
    },
    {
      icon: <Users className="w-8 h-8" />,
      number: "31.4%",
      label: "Youth unemployment (ages 18-25)",
      description: "Nearly 1 in 3 young people",
      color: "from-purple-600 to-pink-600",
      source: "Pakistan Bureau of Statistics 2023",
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      number: "60%",
      label: "Work in informal jobs",
      description: "Low-paying without social security",
      color: "from-blue-600 to-cyan-600",
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
      color: "bg-green-100 text-green-600",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Mentorship from Professionals",
      description: "Career guidance & role models",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "After-School Coaching",
      description: "STEM tutoring & skill development",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Parental Engagement Programs",
      description: "Financial literacy & education advocacy",
      color: "bg-pink-100 text-pink-600",
    },
  ];

  const flagshipPrograms = [
    {
      icon: <Laptop className="w-8 h-8" />,
      title: "TechAThon",
      description: "Hands-on technology bootcamps",
      color: "from-cyan-600 to-blue-600",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Dare2Design",
      description: "Innovation & entrepreneurship training",
      color: "from-yellow-600 to-orange-600",
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "EMUiNVENT",
      description: "National & global invention competitions",
      color: "from-purple-600 to-pink-600",
    },
  ];

  const successStories = [
    {
      name: "Amina, 16",
      story: "From struggling with school fees to winning EMUiNVENT Pakistan 2023",
      icon: <Trophy className="w-6 h-6" />,
      color: "from-yellow-600 to-orange-600",
    },
    {
      name: "Rizwan, 18",
      story: "Now interning at a tech startup after Dare2Design training",
      icon: <Briefcase className="w-6 h-6" />,
      color: "from-blue-600 to-cyan-600",
    },
    {
      name: "Sana, 17",
      story: "Developed a low-cost water filter in TechAThon",
      icon: <Lightbulb className="w-6 h-6" />,
      color: "from-purple-600 to-pink-600",
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
      icon: <BookOpen className="w-6 h-6" />,
      text: "Keep a talented student in school",
    },
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
      <section className="bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              Education Crisis Response
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Investing in Human Capital Through Targeted Education Support
            </h1>
            <p className="text-xl text-orange-100">
              NED Scholars Pakistan: Transforming Lives Through Education
            </p>
          </div>
        </div>
      </section>

      {/* Crisis Statistics */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-red-100 text-red-600">
                National Emergency
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Pakistan&apos;s Education Crisis
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                Pakistan faces one of the world&apos;s most severe education crises,
                with millions of children deprived of quality schooling and
                youth facing staggering unemployment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {crisisStats.map((stat, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <CardContent className="p-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center text-white mb-4`}
                    >
                      {stat.icon}
                    </div>
                    <div className="text-4xl font-bold text-gray-800 mb-2">
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
            <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-600">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="text-blue-600 text-4xl">&quot;</div>
                  <div>
                    <p className="text-lg text-gray-700 italic mb-2">
                      Education is not a privilege—it is a fundamental right.
                      When the state fails to provide it, society must step in
                      to bridge the gap.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4">Critical Insights</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Why Early Education Intervention Matters
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                The lack of accessible education creates a cycle of poverty,
                unemployment, and social instability. Research shows that:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {whyItMatters.map((item, index) => (
                <Card
                  key={index}
                  className="bg-white hover:shadow-xl transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center text-white mb-4">
                      {item.icon}
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mr-2" />
                      {item.title}
                    </h4>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Card className="bg-gradient-to-r from-green-600 to-blue-600 text-white inline-block">
                <CardContent className="p-4">
                  <p className="font-semibold">
                    The Solution? A targeted, cost-effective approach that
                    identifies high-potential students and provides them with
                    the support they need to succeed.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4">Our Approach</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                NED Scholars&apos; Partial Support Program
              </h2>
              <p className="text-gray-600 text-lg">
                A comprehensive three-step approach to student success
              </p>
            </div>

            {/* Step 1: Talent Identification */}
            <Card className="mb-8 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
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
                      className="flex items-start space-x-3 bg-gray-50 p-4 rounded-lg"
                    >
                      <div className="text-blue-600 flex-shrink-0">
                        {criteria.icon}
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-1 flex items-center">
                          <CheckCircle2 className="w-4 h-4 text-green-600 mr-2" />
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

            {/* Step 2: Support Package */}
            <Card className="mb-8 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <div>
                    <span>Comprehensive Support Package</span>
                    <Badge className="ml-3" variant="secondary">
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

            {/* Step 3: Pathway to Independence */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold">
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
                      className="hover:shadow-xl transition-all duration-300"
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

                <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-600">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-4">
                      <div className="text-blue-600 text-3xl">&quot;</div>
                      <p className="text-gray-700 italic font-medium">
                        We don&apos;t just keep students in school—we prepare them
                        for high-value careers that break the cycle of poverty.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories */}
        <section id="stories" className="py-16 bg-gradient-to-r from-yellow-50 to-orange-50">
                  <SuccessStoriesComponent  slice={3} data={stories} path="/save-a-child"/>
              </section>


      {/* Impact of Support */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4">Your Impact</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                The Impact of Your Support
              </h2>
              <Card className="inline-block bg-gradient-to-r from-green-600 to-blue-600 text-white">
                <CardContent className="p-6">
                  <p className="text-xl font-semibold">
                    For just $100–$150 per year, you can:
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {impactPoints.map((point, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
                        {point.icon}
                      </div>
                      <p className="text-gray-700 font-medium flex items-center">
                        {point.text}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Join Us in Transforming Lives
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                How You Can Help
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">🌱</div>
                  <h4 className="font-semibold mb-2">Sponsor a Student</h4>
                  <p className="text-blue-100">
                    $150 covers a full year of support
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">📚</div>
                  <h4 className="font-semibold mb-2">Volunteer as a Mentor</h4>
                  <p className="text-blue-100">
                    Guide students in STEM/career skills
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">🏫</div>
                  <h4 className="font-semibold mb-2">Partner Your School</h4>
                  <p className="text-blue-100">Nominate deserving students</p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-white text-gray-800">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4 text-center">
                  Contact Us
                </h3>
                <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-6 h-6 text-blue-600" />
                    <a
                      href="mailto:support@nedscholars.org"
                      className="text-blue-600 hover:underline font-medium"
                    >
                      support@nedscholars.org
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="w-6 h-6 text-blue-600" />
                    <a
                      href="https://www.nedscholars.org/education-support"
                      className="text-blue-600 hover:underline font-medium"
                    >
                      www.nedscholars.org/education-support
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mt-8 text-center">
              <Card className="bg-white/10 border-white/20 text-white inline-block">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">&quot;</div>
                    <p className="text-lg italic">
                      Education is the most powerful weapon to change the world.
                      Help us arm Pakistan&apos;s youth.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <Badge className="mb-4">Quick Summary</Badge>
              <h2 className="text-3xl font-bold text-gray-800">
                Key Takeaways
              </h2>
            </div>

            <Card className="shadow-lg">
              <CardContent className="p-8">
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">
                      Pakistan&apos;s education crisis leaves{" "}
                      <span className="font-semibold">
                        22.8M children out of school
                      </span>
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">
                      Youth unemployment at{" "}
                      <span className="font-semibold">31.4%</span> due to
                      skills gap
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">
                      NED Scholars&apos; solution: Partial scholarships + mentorship{" "}
                      <span className="font-semibold">
                        ($100–$150/year)
                      </span>
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">
                      Program includes:{" "}
                      <span className="font-semibold">
                        Tuition aid, STEM training, innovation competitions
                      </span>
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">
                      Proven impact: Students achieve{" "}
                      <span className="font-semibold">
                        academic & career success
                      </span>
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Buttons */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-8">
              Ready to Make a Difference?
            </h3>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                <Heart className="w-5 h-5 mr-2" />
                Sponsor a Student Today
              </button>
              <button onClick={()=> {router.push("/register/mentor")}}  className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-gray-400 transition-all duration-300 flex items-center justify-center">
                <Users className="w-5 h-5 mr-2" />
                Become a Mentor
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}