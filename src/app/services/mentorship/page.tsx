"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Heart,
  Briefcase,
  TrendingUp,
  Target,
  Clock,
  Globe,
  Mail,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Award,
  Star,
  ArrowRight,
  UserCheck,
  Building2,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function MentorshipProgramPage() {
  const router = useRouter();

  const scholarChallenges = [
    { icon: <Clock className="w-6 h-6" />, title: "Balancing Work & Studies", description: "Many students take on part-time jobs not just for themselves, but to support their families financially", color: "bg-[#82B4CC]/20 text-[#1164A3]" },
    { icon: <Building2 className="w-6 h-6" />, title: "Lack of Professional Exposure", description: "Without industry connections, they struggle to secure internships, research opportunities, or career mentorship", color: "bg-[#68B9C4]/20 text-[#1164A3]" },
    { icon: <AlertTriangle className="w-6 h-6" />, title: "Time Management & Stress", description: "Juggling academics, work, and skill development requires structured planning—something a mentor can help with", color: "bg-[#B0A3B3]/30 text-[#1164A3]" },
  ];

  const programComponents = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Personalized Guidance",
      description: "Mentors work one-on-one with scholars to:",
      benefits: [
        { color: "bg-[#82B4CC]/20", text: "Develop a work-study-life balance plan" },
        { color: "bg-[#68B9C4]/20", text: "Identify skill-building opportunities (certifications, workshops)" },
        { color: "bg-[#B0A3B3]/20", text: "Navigate career pathways (industry vs. academia, freelancing, global opportunities)" },
      ],
      color: "from-[#1164A3] to-[#68B9C4]",
      step: 1,
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Professional Development",
      description: "Mentors provide:",
      benefits: [
        { color: "bg-[#82B4CC]/20", text: "Resume & interview coaching" },
        { color: "bg-[#68B9C4]/20", text: "Networking opportunities" },
        { color: "bg-[#B0A3B3]/20", text: "Insights into industry trends (especially in STEM fields)" },
      ],
      color: "from-[#68B9C4] to-[#82B4CC]",
      step: 2,
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Emotional & Motivational Support",
      description: "Many scholars face self-doubt, imposter syndrome, or family pressures. Mentors act as trusted advisors, helping them stay focused and confident.",
      benefits: [
        { color: "bg-[#82B4CC]/20", text: "Build confidence and self-belief" },
        { color: "bg-[#68B9C4]/20", text: "Navigate imposter syndrome" },
        { color: "bg-[#B0A3B3]/20", text: "Handle family and academic pressures" },
      ],
      color: "from-[#82B4CC] to-[#B0A3B3]",
      step: 3,
    },
  ];

  const mentorBenefits = [
    { icon: <Heart className="w-6 h-6" />, benefit: "Make a meaningful difference in a student's life" },
    { icon: <Users className="w-6 h-6" />, benefit: "Give back to the community and shape future leaders" },
    { icon: <Lightbulb className="w-6 h-6" />, benefit: "Gain fresh perspectives from talented young minds" },
    { icon: <Award className="w-6 h-6" />, benefit: "Enhance your leadership and coaching skills" },
    { icon: <Globe className="w-6 h-6" />, benefit: "Connect with a global network of professionals" },
    { icon: <TrendingUp className="w-6 h-6" />, benefit: "Stay engaged with emerging trends in STEM education" },
  ];

  const commitmentDetails = [
    { icon: <Clock className="w-6 h-6" />, title: "Just 1-2 hours per month", description: "Flexible scheduling to fit your busy lifestyle" },
    { icon: <Target className="w-6 h-6" />, title: "Help shape a scholar's journey", description: "Guide academic and professional development" },
    { icon: <Globe className="w-6 h-6" />, title: "Virtual or in-person", description: "Mentor students in Pakistan or the USA" },
  ];

  const studentTestimonials = [
    { name: "Ahmed Hassan", year: "3rd Year Mechanical Engineering", quote: "My mentor helped me balance my part-time job with my studies and even connected me with an internship opportunity. I couldn't have done it without their guidance.", mentorName: "Eng. Sarah Khan" },
    { name: "Fatima Malik", year: "Final Year Computer Science", quote: "Coming from a family with no engineers, I felt lost navigating career options. My mentor became the role model I needed and helped me secure a position at a tech startup.", mentorName: "Dr. Ali Ahmed" },
    { name: "Bilal Raza", year: "2nd Year Electrical Engineering", quote: "The emotional support from my mentor was invaluable. They helped me overcome imposter syndrome and believe in my abilities during the toughest semester.", mentorName: "Eng. Maria Siddiqui" },
  ];

  const mentorSpotlights = [
    { name: "Dr. Zainab Ahmed", title: "Senior Data Scientist", company: "Tech Innovation Labs", location: "San Francisco, USA", yearsAsMentor: 3, studentsGuided: 8, specialty: "AI/ML Career Guidance", quote: "Mentoring NED Scholars reminds me of my own journey. Helping these brilliant students navigate challenges gives me immense satisfaction." },
    { name: "Eng. Kamran Shah", title: "Principal Engineer", company: "Siemens Pakistan", location: "Karachi, Pakistan", yearsAsMentor: 5, studentsGuided: 15, specialty: "Engineering & Project Management", quote: "These students have incredible potential. A little guidance goes a long way in helping them achieve their dreams." },
    { name: "Maria Siddiqui", title: "Product Manager", company: "Microsoft", location: "Seattle, USA", yearsAsMentor: 2, studentsGuided: 6, specialty: "Tech Product Management", quote: "Being a first-generation professional myself, I understand the challenges. I'm honored to guide the next generation." },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">

      {/* Hero Section — no image */}
      <section className="bg-gradient-to-r from-[#1164A3] via-[#68B9C4] to-[#82B4CC] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">Mentorship Program</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Guiding the Next Generation of Leaders</h1>
            <p className="text-xl text-white/90">
              Connecting talented students with experienced professionals for meaningful growth
            </p>
          </div>
        </div>
      </section>

      {/* Why Mentorship Matters — intro card left, image right */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[#68B9C4] text-white border-[#68B9C4]">Our Mission</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Mentorship Matters</h2>
            </div>

            {/* Two-column: card left, image right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
              <Card className="shadow-xl border-[#82B4CC]/20">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#1164A3] to-[#68B9C4] rounded-full flex items-center justify-center text-white flex-shrink-0">
                      <Users className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        At NED Scholars, mentorship is a cornerstone of our program. We connect talented
                        students with experienced professionals who provide guidance, inspiration, and
                        practical support—helping them navigate academic challenges, career decisions, and
                        personal growth.
                      </p>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        For many of our scholars, pursuing an undergraduate degree is a{" "}
                        <span className="font-semibold">first-in-family achievement</span>. Unlike their
                        peers who may have relatives in engineering or professional fields, most of our
                        students lack immediate role models to guide them.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[380px]">
                <img
                  src="/images/mentorship-mission.jpg"
                  alt="Mentor and student in a one-on-one session"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1164A3]/40 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-white text-sm font-medium bg-black/30 rounded-xl px-4 py-2 backdrop-blur-sm">
                    One conversation can rewrite a student&apos;s entire trajectory
                  </p>
                </div>
                <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border-4 border-[#68B9C4]/30 -z-10" />
              </div>
            </div>

            {/* Challenges — cards left, image right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">The Challenges Our Scholars Face</h3>
                <div className="space-y-4">
                  {scholarChallenges.map((challenge, index) => (
                    <Card key={index} className="hover:shadow-xl hover:border-[#1164A3] transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className={`${challenge.color} w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0`}>
                            {challenge.icon}
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-800 mb-2 text-lg flex items-center gap-2">
                              <CheckCircle2 className="w-4 h-4 text-[#68B9C4]" />
                              {challenge.title}
                            </h4>
                            <p className="text-gray-600">{challenge.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px]">
                <img
                  src="/images/mentorship-challenges.jpg"
                  alt="Student studying while managing responsibilities"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1164A3]/50 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-white text-sm font-medium bg-black/30 rounded-xl px-4 py-2 backdrop-blur-sm">
                    Many scholars juggle jobs, family duties, and coursework simultaneously
                  </p>
                </div>
                <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border-4 border-[#82B4CC]/30 -z-10" />
              </div>
            </div>

            {/* Quote */}
            <Card className="bg-gradient-to-r from-[#82B4CC]/20 to-[#B0A3B3]/20 border-l-4 border-[#1164A3]">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="text-[#1164A3] text-4xl">&quot;</div>
                  <p className="text-lg text-gray-700 italic">
                    A mentor does more than give advice—they help turn struggles into strategies and dreams into reality.
                  </p>
                  <div className="text-[#1164A3] text-4xl">&quot;</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works — banner image + program cards */}
      <section className="py-16 bg-gradient-to-r from-[#B0A3B3]/10 to-[#82B4CC]/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[#1164A3] text-white border-[#1164A3]">Our Approach</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">How Our Mentorship Program Works</h2>
              <p className="text-gray-600 text-lg">A comprehensive three-pillar approach to student success</p>
            </div>

            {/* Wide image banner */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl mb-10 h-60 md:h-72">
              <img
                src="/images/mentorship-program.jpg"
                alt="Mentor workshop and group session"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1164A3]/65 to-transparent flex items-center">
                <div className="px-10 max-w-lg">
                  <h3 className="text-white text-2xl font-bold mb-2">Three Pillars of Support</h3>
                  <p className="text-white/85 text-sm leading-relaxed">
                    Personalized guidance, professional development, and emotional support — every scholar gets what they need to thrive.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {programComponents.map((component, index) => (
                <Card key={index} className="hover:shadow-xl hover:border-[#1164A3] transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6 mb-6">
                      <div className={`w-20 h-20 bg-gradient-to-r ${component.color} rounded-2xl flex items-center justify-center text-white flex-shrink-0`}>
                        {component.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <div className="w-8 h-8 bg-[#1164A3] rounded-full flex items-center justify-center text-white font-bold text-sm">
                            {component.step}
                          </div>
                          <h3 className="text-2xl font-bold text-gray-800">{component.title}</h3>
                        </div>
                        <p className="text-gray-600 mb-4">{component.description}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {component.benefits.map((benefit, idx) => (
                        <div key={idx} className={`flex items-start space-x-2 p-3 rounded-lg ${benefit.color}`}>
                          <CheckCircle2 className="w-5 h-5 text-[#68B9C4] flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700">{benefit.text}</span>
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

      {/* Student Testimonials — image beside testimonial cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[#68B9C4] text-white border-[#68B9C4]">Success Stories</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Student Testimonials</h2>
              <p className="text-gray-600 text-lg">Hear from scholars whose lives were transformed through mentorship</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[480px]">
                <img
                  src="/images/mentorship-students.jpg"
                  alt="NED Scholars students celebrating achievements"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1164A3]/50 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-white text-sm font-medium bg-black/30 rounded-xl px-4 py-2 backdrop-blur-sm">
                    Scholars who once doubted themselves are now leading in their fields
                  </p>
                </div>
                <div className="absolute -bottom-3 -left-3 w-full h-full rounded-2xl border-4 border-[#68B9C4]/30 -z-10" />
              </div>

              <div className="space-y-5">
                {studentTestimonials.map((testimonial, index) => (
                  <Card key={index} className="hover:shadow-xl hover:border-[#1164A3] transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <div>
                          <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                          <p className="text-sm text-gray-600">{testimonial.year}</p>
                        </div>
                      </div>
                      <div className="mb-4">
                        <div className="flex space-x-1 mb-3">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-[#82B4CC] text-[#82B4CC]" />
                          ))}
                        </div>
                        <p className="text-gray-700 italic text-sm">&quot;{testimonial.quote}&quot;</p>
                      </div>
                      <div className="pt-3 border-t border-gray-200">
                        <p className="text-sm text-gray-600">
                          <span className="font-semibold">Mentor:</span> {testimonial.mentorName}
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

      {/* Mentor Spotlights — image beside cards */}
      <section className="py-16 bg-gradient-to-r from-[#B0A3B3]/10 to-[#82B4CC]/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[#1164A3] text-white border-[#1164A3]">Meet Our Mentors</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Mentor Spotlights</h2>
              <p className="text-gray-600 text-lg">Dedicated professionals making a difference in students&apos; lives</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="space-y-5">
                {mentorSpotlights.map((mentor, index) => (
                  <Card key={index} className="hover:shadow-xl hover:border-[#1164A3] transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-5">
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-800 text-lg">{mentor.name}</h4>
                          <p className="text-sm text-gray-600">{mentor.title}</p>
                          <p className="text-sm text-[#1164A3] font-medium">{mentor.company}</p>
                          <div className="flex items-center text-xs text-gray-500 mt-1 mb-3">
                            <Globe className="w-3 h-3 mr-1" />{mentor.location}
                          </div>
                          <div className="flex gap-3 mb-3">
                            <div className="bg-[#82B4CC]/20 px-3 py-1 rounded text-center">
                              <div className="font-bold text-[#1164A3] text-sm">{mentor.yearsAsMentor} yrs</div>
                              <div className="text-xs text-gray-600">mentoring</div>
                            </div>
                            <div className="bg-[#68B9C4]/20 px-3 py-1 rounded text-center">
                              <div className="font-bold text-[#1164A3] text-sm">{mentor.studentsGuided}</div>
                              <div className="text-xs text-gray-600">students</div>
                            </div>
                          </div>
                          <p className="text-sm text-gray-700 italic border-t border-gray-100 pt-3">&quot;{mentor.quote}&quot;</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px]">
                <img
                  src="/images/mentorship-mentors.jpg"
                  alt="Professional mentors from NED Scholars network"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1164A3]/50 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-white text-sm font-medium bg-black/30 rounded-xl px-4 py-2 backdrop-blur-sm">
                    Industry professionals from Pakistan and the USA giving back to the next generation
                  </p>
                </div>
                <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border-4 border-[#82B4CC]/30 -z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mentor Benefits — image left, benefit cards right */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[#68B9C4] text-white border-[#68B9C4]">Why Become a Mentor</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What You&apos;ll Gain as a Mentor</h2>
              <p className="text-gray-600 text-lg">Mentoring is rewarding in ways you might not expect</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[420px]">
                <img
                  src="/images/mentorship-benefits.jpg"
                  alt="Mentor and scholar sharing knowledge"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1164A3]/40 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-white text-sm font-medium bg-black/30 rounded-xl px-4 py-2 backdrop-blur-sm">
                    The relationship grows both ways — mentors gain as much as they give
                  </p>
                </div>
                <div className="absolute -bottom-3 -left-3 w-full h-full rounded-2xl border-4 border-[#68B9C4]/30 -z-10" />
              </div>

              <div className="grid grid-cols-1 gap-4">
                {mentorBenefits.map((item, index) => (
                  <Card key={index} className="hover:shadow-xl hover:border-[#1164A3] transition-all duration-300">
                    <CardContent className="p-5">
                      <div className="flex items-center space-x-4">
                        <div className="w-11 h-11 bg-gradient-to-r from-[#1164A3] to-[#68B9C4] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                          {item.icon}
                        </div>
                        <p className="text-gray-700 font-medium">{item.benefit}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join as a Mentor — gradient section, no image */}
      <section className="py-16 bg-gradient-to-r from-[#1164A3] to-[#68B9C4] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Us as a Mentor</h2>
              <p className="text-xl text-white/90 mb-8">
                Are you a professional in engineering, tech, business, or academia? Your experience can change a student&apos;s life.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {commitmentDetails.map((detail, index) => (
                <Card key={index} className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      {detail.icon}
                    </div>
                    <h4 className="font-bold mb-2 text-lg">{detail.title}</h4>
                    <p className="text-sm text-white/90">{detail.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Card className="bg-white text-gray-800">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-center mb-6">Become a Mentor Today!</h3>
                <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-6 h-6 text-[#1164A3]" />
                    <div>
                      <p className="text-sm text-gray-600">Email us at:</p>
                      <a href="mailto:mentorship@nedscholars.org" className="text-[#1164A3] hover:underline font-semibold">mentorship@nedscholars.org</a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="w-6 h-6 text-[#1164A3]" />
                    <div>
                      <p className="text-sm text-gray-600">Learn more:</p>
                      <a href="https://www.nedscholars.org/mentorship" className="text-[#1164A3] hover:underline font-semibold">www.nedscholars.org/mentorship</a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="text-center mt-8">
              <button onClick={() => { router.push("/register/mentor"); }} className="bg-white text-[#1164A3] px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center">
                <UserCheck className="w-5 h-5 mr-2" />
                Apply to Become a Mentor
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Final Impact Statement — card left, image right */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

              <Card className="shadow-2xl bg-gradient-to-r from-[#82B4CC]/20 to-[#B0A3B3]/20 border-l-4 border-[#1164A3]">
                <CardContent className="p-8 md:p-10 text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-[#1164A3] to-[#68B9C4] rounded-full flex items-center justify-center mx-auto mb-6">
                    <Heart className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                    Your Guidance Can Change Everything
                  </h3>
                  <p className="text-lg text-gray-700 mb-8">
                    Every successful professional once needed guidance. Now it&apos;s your turn to be that
                    guiding light for someone else.
                  </p>
                  <div className="flex justify-center space-x-8 text-sm">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#1164A3]">1-2</div>
                      <div className="text-gray-600">hours/month</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#68B9C4]">∞</div>
                      <div className="text-gray-600">impact</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[420px]">
                <img
                  src="/images/mentorship-impact.jpg"
                  alt="Mentor and scholar handshake symbolizing guidance"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1164A3]/40 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-white text-sm font-medium bg-black/30 rounded-xl px-4 py-2 backdrop-blur-sm">
                    One hour a month. A lifetime of impact.
                  </p>
                </div>
                <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border-4 border-[#82B4CC]/30 -z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}