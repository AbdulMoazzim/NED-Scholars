import { Card, CardContent, } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Lightbulb,
  Users,
  Award,
  Globe,
  Target,
  Rocket,
  Brain,
  Trophy,
  Calendar,
  MapPin,
  DollarSign,
  BookOpen,
  Zap,
  Star,
  TrendingUp,
  CheckCircle2,
  GraduationCap,
  Briefcase,
  Heart,
  Laptop,
} from "lucide-react";
import Link from "next/link";

export default function Dare2DesignPage() {
  const programPillars = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Creativity & Innovation",
      description:
        "Nurturing creative thinking and innovative problem-solving approaches",
      color: "from-[#82B4CC] to-[#B0A3B3]",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Problem-Solving",
      description:
        "Developing real-world solutions to address community challenges",
      color: "from-[#1164A3] to-[#68B9C4]",
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "STEM Education",
      description:
        "Building strong technical foundations in Science, Technology, Engineering, and Mathematics",
      color: "from-[#68B9C4] to-[#82B4CC]",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Recognition",
      description:
        "Providing platforms to showcase innovations on international stages",
      color: "from-[#1164A3] to-[#82B4CC]",
    },
  ];

  const programBenefits = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Mentorship",
      description:
        "Guidance from industry professionals and experienced innovators",
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Hands-on Experience",
      description:
        "Practical training in design thinking and prototype development",
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Technical Skills",
      description: "Advanced training in cutting-edge technologies and tools",
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Confidence Building",
      description:
        "Public speaking and presentation skills for global competitions",
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Financial Support",
      description: "Fully funded training programs and competition participation",
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Recognition & Awards",
      description: "Certificates, prizes, and international exposure",
    },
  ];

  const emuinvent2024Highlights = [
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "5 March 2024",
      description: "2nd EMUiNVENT International Competition at NED University",
      color: "bg-[#82B4CC]/20 text-[#1164A3]",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "25 Teams from Pakistan",
      description: "Competed in school and university categories",
      color: "bg-[#68B9C4]/20 text-[#1164A3]",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Michigan, USA Pathway",
      description: "Qualified for Invention Convention in Michigan",
      color: "bg-[#B0A3B3]/30 text-[#1164A3]",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Awards & Recognition",
      description: "Certificates, gifts, and cash prizes for participants",
      color: "bg-[#82B4CC]/30 text-[#1164A3]",
    },
  ];

  const trainingPrograms = [
    {
      title: "8-Week Mentorship Program",
      description:
        "Intensive guidance for EMUiNVENT competition preparation",
      duration: "8 Weeks",
      participants: "Selected Teams",
      icon: <Users className="w-8 h-8" />,
      color: "from-[#1164A3] to-[#68B9C4]",
    },
    {
      title: "One-Month Tech Course (Pre-Competition)",
      description:
        "Technical training for students from non-profit institutions and scholars' relatives",
      duration: "1 Month",
      participants: "Multiple Batches",
      icon: <Laptop  className="w-8 h-8" />,
      color: "from-[#68B9C4] to-[#82B4CC]",
    },
    {
      title: "June 2024 Tech Course",
      description:
        "Advanced technical training for nonprofit schools and scholars' families",
      duration: "1 Month",
      participants: "48 Students",
      budget: "Rs 600,000",
      icon: <Rocket className="w-8 h-8" />,
      color: "from-[#82B4CC] to-[#B0A3B3]",
    },
  ];

  const impactMetrics = [
    {
      number: "25+",
      label: "Teams Competed",
      description: "In EMUiNVENT Michigan 2024",
      icon: <Trophy className="w-6 h-6" />,
    },
    {
      number: "48",
      label: "Students Trained",
      description: "June 2024 Tech Course",
      icon: <GraduationCap className="w-6 h-6" />,
    },
    {
      number: "Rs 600K",
      label: "Investment",
      description: "Dedicated training budget",
      icon: <DollarSign className="w-6 h-6" />,
    },
    {
      number: "100%",
      label: "Funded",
      description: "All training & competition costs",
      icon: <CheckCircle2 className="w-6 h-6" />,
    },
  ];

  const successFactors = [
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Structured Approach",
      description:
        "Step-by-step methodology from ideation to final presentation",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Mentorship",
      description:
        "Continuous guidance from experienced professionals and educators",
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Financial Support",
      description:
        "Complete funding for training, materials, and competition participation",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Exposure",
      description:
        "Opportunities to compete and network on international platforms",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1164A3] via-[#68B9C4] to-[#82B4CC] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              Innovation & Creativity
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Creativity & Problem Solving Through Invention Learning
            </h1>
            <p className="text-xl text-white/90 mb-4">
              Dare2Design by NED Scholars
            </p>
            <p className="text-lg text-white/80">
              Empowering Young Innovators to Shape the Future
            </p>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[#68B9C4] text-white border-[#68B9C4]">About the Program</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Empowering Young Innovators
              </h2>
              <p className="text-gray-600 text-lg max-w-4xl mx-auto">
                The Dare2Design initiative by NED Scholars is a dynamic program
                fostering STEM education, creativity, and problem-solving among
                young minds. Designed to nurture innovation through a structured
                approach, it encourages students to develop real-world
                solutions.
              </p>
            </div>

            <Card className="mb-8 shadow-lg border-[#82B4CC]/20">
              <CardContent className="p-8">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  By providing mentorship, resources, and hands-on experience,
                  Dare2Design ensures that participants not only refine their
                  technical skills but also gain the confidence to present their
                  ideas on global platforms.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {programPillars.map((pillar, index) => (
                    <div
                      key={index}
                      className="text-center hover:transform hover:scale-105 transition-all duration-300"
                    >
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${pillar.color} rounded-full flex items-center justify-center text-white mx-auto mb-4`}
                      >
                        {pillar.icon}
                      </div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        {pillar.title}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {pillar.description}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Program Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {programBenefits.map((benefit, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl hover:border-[#1164A3] transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#1164A3] to-[#68B9C4] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        {benefit.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">
                          {benefit.title}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {benefit.description}
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

      {/* EMUiNVENT 2024 */}
      <section className="py-16 bg-gradient-to-r from-[#B0A3B3]/10 to-[#82B4CC]/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[#1164A3] text-white border-[#1164A3]">International Competition</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                A Pathway to International Recognition
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                On 5 March 2024, NED Scholars successfully organized the 2nd
                EMUiNVENT International Competition at NED University, providing
                young inventors with a stage to showcase their projects.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {emuinvent2024Highlights.map((highlight, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl hover:border-[#1164A3] transition-all duration-300"
                >
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-14 h-14 ${highlight.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                    >
                      {highlight.icon}
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      {highlight.title}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="shadow-lg bg-white border-[#82B4CC]/20">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-[#1164A3] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3 text-lg">
                      Competition Journey
                    </h4>
                    <p className="text-gray-700 mb-4">
                      The event paved the way for participants to qualify for
                      the Invention Convention in Michigan, USA. To further
                      support aspiring innovators, NED Scholars sponsored a
                      one-month Tech course and an 8-week mentorship program,
                      benefiting students from non-profit institutions and
                      scholars&apos; relatives.
                    </p>
                    <p className="text-gray-700">
                      With 25 teams from Pakistan competing in both school and
                      university categories at EMUiNVENT Michigan 2024,
                      participants were awarded certificates, gifts, and cash
                      prizes for their outstanding contributions.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[#68B9C4] text-white border-[#68B9C4]">Comprehensive Training</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Sustaining Innovation Through Training and Funding
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                NED Scholars provides structured training programs to equip
                students with the technical expertise and innovative thinking
                needed for international competitions.
              </p>
            </div>

            <div className="space-y-6">
              {trainingPrograms.map((program, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl hover:border-[#1164A3] transition-all duration-300"
                >
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
                      <div
                        className={`w-20 h-20 bg-gradient-to-r ${program.color} rounded-2xl flex items-center justify-center text-white flex-shrink-0`}
                      >
                        {program.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">
                          {program.title}
                        </h3>
                        <p className="text-gray-600 mb-3">
                          {program.description}
                        </p>
                        <div className="flex flex-wrap gap-3">
                          <Badge className="bg-[#82B4CC] text-white">
                            <Calendar className="w-3 h-3 mr-1" />
                            {program.duration}
                          </Badge>
                          <Badge className="bg-[#68B9C4] text-white">
                            <Users className="w-3 h-3 mr-1" />
                            {program.participants}
                          </Badge>
                          {program.budget && (
                            <Badge className="bg-[#1164A3] text-white">
                              <DollarSign className="w-3 h-3 mr-1" />
                              {program.budget}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* June 2024 Highlight */}
            <Card className="mt-8 bg-gradient-to-r from-[#82B4CC]/20 to-[#B0A3B3]/20 border-l-4 border-[#1164A3] shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Zap className="w-8 h-8 text-[#1164A3] flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2 text-lg">
                      June 2024 Success Story
                    </h4>
                    <p className="text-gray-700">
                      Building on its success, NED Scholars funded another
                      one-month Tech course in June 2024, training{" "}
                      <span className="font-semibold">48 students</span> from
                      nonprofit schools and scholars&apos; families, with a dedicated
                      budget of{" "}
                      <span className="font-semibold">Rs 600,000</span>. This
                      initiative continues to prepare students for international
                      competitions by equipping them with technical expertise
                      and innovative thinking.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-16 bg-gradient-to-r from-[#1164A3] to-[#68B9C4] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-white/20 text-white border-white/30">
                Our Impact
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                By the Numbers
              </h2>
              <p className="text-lg text-white/90">
                Measuring success through tangible outcomes
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {impactMetrics.map((metric, index) => (
                <Card
                  key={index}
                  className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-all duration-300"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      {metric.icon}
                    </div>
                    <div className="text-4xl font-bold mb-2">
                      {metric.number}
                    </div>
                    <h4 className="font-semibold mb-1">{metric.label}</h4>
                    <p className="text-sm text-white/90">{metric.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Factors */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[#1164A3] text-white border-[#1164A3]">What Makes Us Different</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Keys to Success
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                Our comprehensive approach ensures students receive everything
                they need to succeed on the global stage
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {successFactors.map((factor, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl hover:border-[#1164A3] transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#1164A3] to-[#68B9C4] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        {factor.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                          <CheckCircle2 className="w-5 h-5 text-[#68B9C4] mr-2" />
                          {factor.title}
                        </h4>
                        <p className="text-gray-600">{factor.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Statement */}
      <section className="py-16 bg-gradient-to-r from-[#B0A3B3]/10 to-[#82B4CC]/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-2xl border-[#82B4CC]/20">
              <CardContent className="p-8 md:p-12 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-[#1164A3] to-[#68B9C4] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Rocket className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Our Commitment to Innovation
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Dare2Design remains committed to empowering young innovators,
                  ensuring that Pakistani students make their mark globally.
                  Through structured training, financial support, and expert
                  mentorship, NED Scholars is shaping the next generation of
                  problem solvers and leaders in STEM.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Badge className="px-4 py-2 text-base bg-[#1164A3] text-white">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    Structured Training
                  </Badge>
                  <Badge className="px-4 py-2 text-base bg-[#68B9C4] text-white">
                    <DollarSign className="w-4 h-4 mr-2" />
                    Financial Support
                  </Badge>
                  <Badge className="px-4 py-2 text-base bg-[#82B4CC] text-white">
                    <Users className="w-4 h-4 mr-2" />
                    Expert Mentorship
                  </Badge>
                  <Badge className="px-4 py-2 text-base bg-[#1164A3] text-white">
                    <Globe className="w-4 h-4 mr-2" />
                    Global Recognition
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Ready to Join the Innovation Movement?
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Whether you&apos;re a student ready to innovate or a supporter wanting
              to empower young minds, there&apos;s a place for you in Dare2Design.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/register/student" className="bg-gradient-to-r from-[#1164A3] to-[#68B9C4] text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                <Lightbulb className="w-5 h-5 mr-2" />
                Apply as a Student
              </Link>
              <Link href="/donation" className="bg-gradient-to-r from-[#68B9C4] to-[#82B4CC] text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                <Heart className="w-5 h-5 mr-2" />
                Support Innovation
              </Link>
             
            </div>
          </div>
        </div>
      </section>

      {/* Final Quote */}
      <section className="py-16 bg-gradient-to-r from-[#1164A3] via-[#68B9C4] to-[#82B4CC] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-2xl md:text-3xl font-semibold mb-6">
              &quot;Innovation distinguishes between a leader and a follower.&quot;
            </blockquote>
            <p className="text-lg text-white/90">
              Join us in nurturing the next generation of innovators and leaders
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}