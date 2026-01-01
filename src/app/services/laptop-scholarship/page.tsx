import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Laptop,
  Wifi,
  TrendingUp,
  CheckCircle2,
  Award,
  Users,
  DollarSign,
  Heart,
  Briefcase,
  BookOpen,
  Code,
  Globe,
  Mail,
  Share2,
  ArrowRight,
  Calendar,
  Target,
  Zap,
  FileText,
  Video,
} from "lucide-react";
import Link from "next/link";

export default function LaptopProgramPage() {
  const digitalDivideChallenges = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Academic Struggle",
      description:
        "Unable to complete coding assignments, research, or online coursework",
      color: "bg-[#82B4CC]/20 text-[#1164A3]",
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Freelancing Barriers",
      description:
        "Missing out on remote work opportunities that could fund their education",
      color: "bg-[#68B9C4]/20 text-[#1164A3]",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Job Search Hurdles",
      description:
        "Difficulty preparing resumes, applying online, or attending virtual interviews",
      color: "bg-[#B0A3B3]/30 text-[#1164A3]",
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Skill Gap",
      description:
        "Falling behind peers in mastering essential software and programming tools",
      color: "bg-[#82B4CC]/30 text-[#1164A3]",
    },
  ];

  const programFeatures = [
    {
      icon: <Laptop className="w-8 h-8" />,
      title: "Refurbished Laptops",
      description: "$250–$300 per device",
      detail: "Quality-tested and ready for academic use",
      color: "from-[#1164A3] to-[#68B9C4]",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Need-Cum-Merit Basis",
      description: "Fair and transparent selection",
      detail: "Financial constraints don't hinder potential",
      color: "from-[#68B9C4] to-[#82B4CC]",
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "Internet Support",
      description: "Connectivity stipends available",
      detail: "Ensuring complete digital access",
      color: "from-[#82B4CC] to-[#B0A3B3]",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Both Countries",
      description: "Pakistan & USA support",
      detail: "Serving NED students globally",
      color: "from-[#1164A3] to-[#82B4CC]",
    },
  ];

  const programTypes = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Loan Program",
      description: "Most laptops are loaned to students for academic use",
      details: [
        "For duration of studies",
        "Returned upon graduation",
        "Can be extended if needed",
      ],
      color: "from-[#1164A3] to-[#68B9C4]",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Donation Initiative",
      description:
        "Gifted to high-achieving scholars or their younger siblings",
      details: [
        "Permanent ownership",
        "Long-term family impact",
        "Extends to next generation",
      ],
      color: "from-[#68B9C4] to-[#82B4CC]",
    },
  ];

  const impactStats = [
    {
      icon: <Laptop className="w-8 h-8" />,
      number: "368",
      label: "Laptops Distributed",
      description: "Since 2012",
      color: "from-[#1164A3] to-[#68B9C4]",
    },
    {
      icon: <Users className="w-8 h-8" />,
      number: "Hundreds",
      label: "Students Empowered",
      description: "Across Pakistan & USA",
      color: "from-[#68B9C4] to-[#82B4CC]",
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      number: "Countless",
      label: "Careers Launched",
      description: "In tech and engineering",
      color: "from-[#82B4CC] to-[#B0A3B3]",
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      number: "13+",
      label: "Years Running",
      description: "Since 2012",
      color: "from-[#1164A3] to-[#82B4CC]",
    },
  ];

  const studentBenefits = [
    {
      icon: <Code className="w-6 h-6" />,
      benefit: "Complete coding assignments and projects",
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      benefit: "Access online courses and research materials",
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      benefit: "Pursue freelancing opportunities",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      benefit: "Prepare professional resumes and applications",
    },
    {
      icon: <Video className="w-6 h-6" />,
      benefit: "Attend virtual interviews and meetings",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      benefit: "Master essential software and programming tools",
    },
  ];

  const donationTiers = [
    {
      amount: "$250",
      description: "Sponsors a refurbished laptop",
      icon: <Laptop className="w-6 h-6" />,
      impact: "Enables one student to access digital education",
      color: "from-[#1164A3] to-[#68B9C4]",
    },
    {
      amount: "$300",
      description: "Laptop + internet stipend",
      icon: <Wifi className="w-6 h-6" />,
      impact: "Complete digital access for 6 months",
      color: "from-[#68B9C4] to-[#82B4CC]",
    },
    {
      amount: "Recurring",
      description: "Monthly donations",
      icon: <TrendingUp className="w-6 h-6" />,
      impact: "Help us scale this initiative sustainably",
      color: "from-[#82B4CC] to-[#B0A3B3]",
    },
  ];

  const waysToContribute = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Donate Now",
      description: "Make a one-time or recurring donation",
      action: "Visit www.nedscholars.org",
      
      color: "from-[#1164A3] to-[#68B9C4]",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Sponsor a Student",
      description: "Directly support a student's digital access",
      action: "Email us at admin@nedscholars.org",
      
      color: "from-[#68B9C4] to-[#82B4CC]",
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      title: "Spread the Word",
      description: "Share our mission with your network",
      action: "Help us reach more supporters",
      
      color: "from-[#82B4CC] to-[#B0A3B3]",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1164A3] via-[#68B9C4] to-[#82B4CC] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-4">
              <Laptop className="w-16 h-16 text-white" />
            </div>
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              Digital Access Initiative
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Bridging the Digital Divide
            </h1>
            <p className="text-xl text-white/90 mb-4">
              NED Scholars Laptop Distribution Program
            </p>
            <p className="text-lg text-white/80">
              Transforming Lives Through Technology
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Card className="shadow-xl mb-8 border-[#82B4CC]/20">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#1164A3] to-[#68B9C4] rounded-full flex items-center justify-center text-white flex-shrink-0">
                    <Laptop className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                      At NED Scholars, we believe that{" "}
                      <span className="font-semibold">
                        access to technology should never be a barrier to
                        education
                      </span>
                      . Since <span className="font-semibold">2012</span>, we
                      have been providing refurbished laptops and internet
                      support to talented yet financially constrained STEM
                      students at NED University in Karachi and in the USA.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Our mission is simple:{" "}
                      <span className="font-semibold">
                        empower students with the tools they need to excel
                      </span>{" "}
                      in academics, freelancing, and job opportunities.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Program Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {programFeatures.map((feature, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl hover:border-[#1164A3] transition-all duration-300"
                >
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center text-white mx-auto mb-4`}
                    >
                      {feature.icon}
                    </div>
                    <h4 className="font-bold text-gray-800 mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-gray-600 mb-1">
                      {feature.description}
                    </p>
                    <p className="text-xs text-gray-500">{feature.detail}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Digital Divide Challenge */}
      <section className="py-16 bg-gradient-to-r from-[#B0A3B3]/10 to-[#82B4CC]/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[#1164A3] text-white border-[#1164A3]">
                Critical Issue
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                The Digital Divide: A Growing Challenge
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                In an era where education and employment increasingly depend on
                digital access, students without laptops or reliable internet
                face severe disadvantages:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {digitalDivideChallenges.map((challenge, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl hover:border-[#1164A3] transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div
                        className={`${challenge.color} w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0`}
                      >
                        {challenge.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2 flex items-center">
                          <span className="mr-2">*</span>
                          {challenge.title}
                        </h4>
                        <p className="text-gray-600">{challenge.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quote */}
            <Card className="bg-gradient-to-r from-[#82B4CC]/20 to-[#B0A3B3]/20 border-l-4 border-[#1164A3] shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="text-[#1164A3] text-5xl">&quot;</div>
                  <div>
                    <p className="text-lg text-gray-700 italic leading-relaxed mb-4">
                      In a world that promises equal opportunities, reality
                      paints a different picture. Once, securing a seat in a
                      professional university was a testament to a student&apos;s
                      talent.
                    </p>
                    <p className="text-lg text-gray-700 italic leading-relaxed">
                      Today, success leans toward those with computers,
                      high-speed internet, and digital tools. NED Scholars
                      strives to bridge this divide.
                    </p>
                  </div>
                </div>
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
              <Badge className="mb-4 bg-[#68B9C4] text-white border-[#68B9C4]">Our Approach</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                How Our Laptop Program Works
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                We provide refurbished laptops ($250–$300 per device) on a{" "}
                <span className="font-semibold">need-cum-merit basis</span>,
                ensuring that financial constraints do not hinder potential.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {programTypes.map((type, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl hover:border-[#1164A3] transition-all duration-300"
                >
                  <CardContent className="p-8">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${type.color} rounded-2xl flex items-center justify-center text-white mb-6`}
                    >
                      {type.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">
                      {type.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{type.description}</p>
                    <div className="space-y-2">
                      {type.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle2 className="w-4 h-4 text-[#68B9C4] flex-shrink-0" />
                          <span className="text-sm text-gray-700">
                            {detail}
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

      {/* Impact Stats */}
      <section className="py-16 bg-gradient-to-r from-[#B0A3B3]/10 to-[#82B4CC]/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[#1164A3] text-white border-[#1164A3]">Our Impact</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                By the Numbers: Impact Since 2012
              </h2>
              <p className="text-gray-600 text-lg">
                Over a decade of transforming lives through technology
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {impactStats.map((stat, index) => (
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
                    <div className="flex items-center justify-center mb-2">
                      <CheckCircle2 className="w-5 h-5 text-[#68B9C4] mr-2" />
                      <div className="text-4xl font-bold text-[#1164A3]">
                        {stat.number}
                      </div>
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-1">
                      {stat.label}
                    </h4>
                    <p className="text-sm text-gray-600">{stat.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Student Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[#68B9C4] text-white border-[#68B9C4]">What Students Gain</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Unlocking Opportunities
              </h2>
              <p className="text-gray-600 text-lg">
                With laptop access, students can pursue their full potential
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {studentBenefits.map((item, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl hover:border-[#1164A3] transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#1164A3] to-[#68B9C4] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        {item.icon}
                      </div>
                      <p className="text-gray-700 font-medium flex-1">
                        {item.benefit}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="py-16 bg-gradient-to-r from-[#1164A3] via-[#68B9C4] to-[#82B4CC] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Join Us in Lighting the Way Forward
              </h2>
              <p className="text-xl text-white/90">
                You can help close the digital gap
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {donationTiers.map((tier, index) => (
                <Card
                  key={index}
                  className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-all duration-300"
                >
                  <CardContent className="p-8 text-center">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${tier.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                    >
                      {tier.icon}
                    </div>
                    <div className="text-3xl font-bold mb-2">{tier.amount}</div>
                    <h4 className="font-semibold mb-3">{tier.description}</h4>
                    <p className="text-sm text-white/90">{tier.impact}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">&quot;</div>
                  <p className="text-xl italic">
                    Join us in lighting the way forward. Support NED Scholars
                    and help us build a brighter future.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How to Get Involved */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[#1164A3] text-white border-[#1164A3]">Get Involved</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                How to Get Involved
              </h2>
              <p className="text-gray-600 text-lg">
                Multiple ways to support digital access for students
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {waysToContribute.map((way, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl hover:border-[#1164A3] transition-all duration-300"
                >
                  <CardContent className="p-8">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${way.color} rounded-2xl flex items-center justify-center text-white mx-auto mb-6`}
                    >
                      {way.icon}
                    </div>
                    <div className="text-center">
                      <h4 className="font-bold text-gray-800 text-xl mb-3">
                        {way.title}
                      </h4>
                      <p className="text-gray-600 mb-4">{way.description}</p>
                      <p className="text-sm text-gray-700 font-medium">
                        {way.action}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Contact Info */}
            <Card className="shadow-xl bg-white border-[#82B4CC]/20">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
                  Ready to Make an Impact?
                </h3>
                <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mb-6">
                  <div className="flex items-center space-x-3">
                    <Globe className="w-6 h-6 text-[#1164A3]" />
                    <div>
                      <p className="text-sm text-gray-600">Visit:</p>
                      <a
                        href="https://www.nedscholars.org"
                        className="text-[#1164A3] hover:underline font-semibold"
                      >
                        www.nedscholars.org
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-6 h-6 text-[#1164A3]" />
                    <div>
                      <p className="text-sm text-gray-600">Email:</p>
                      <a
                        href="mailto:admin@nedscholars.org"
                        className="text-[#1164A3] hover:underline font-semibold"
                      >
                        admin@nedscholars.org
                      </a>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <Link href="/donation" className="bg-gradient-to-r from-[#1164A3] to-[#68B9C4] text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center">
                    <Heart className="w-5 h-5 mr-2" />
                    Donate Now
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final Message */}
      <section className="py-16 bg-gradient-to-r from-[#B0A3B3]/10 to-[#82B4CC]/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-2xl bg-gradient-to-r from-[#82B4CC]/20 to-[#B0A3B3]/20 border-l-4 border-[#1164A3]">
              <CardContent className="p-8 md:p-12">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-[#1164A3] to-[#68B9C4] rounded-full flex items-center justify-center mx-auto mb-6">
                    <Laptop className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                    Together, we can ensure no talented mind is left behind
                  </h3>
                  <p className="text-lg text-gray-700 mb-8">
                    Every laptop donated is a door opened, a dream enabled, and
                    a future brightened. Your support transforms lives and
                    breaks down barriers to education.
                  </p>
                  <div className="flex justify-center space-x-6 text-sm text-gray-600">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#1164A3]">
                        368+
                      </div>
                      <div>Lives Changed</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#68B9C4]">13+</div>
                      <div>Years of Impact</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#82B4CC]">∞</div>
                      <div>Possibilities</div>
                    </div>
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