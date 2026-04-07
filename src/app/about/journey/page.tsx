import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Calendar,
  Users,
  GraduationCap,
  Heart,
  Globe,
  Award,
  TrendingUp,
  BookOpen,
  Target,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

export default function JourneyPage() {
  const timeline = [
    {
      year: "2007",
      title: "The Beginning",
      description: "The NED Scholars program started as the MECH 80-81 Alumni Scholarship, founded by alumni from NED's 1980-81 Mechanical Engineering batch in memory of their dear friends Abu Ather, Haroon, Shabir, and Waqar.",
      details: "Initially focused on need-cum-merit support for deserving Mechanical Engineering students — helping those with financial need and academic potential realize their full potential.",
      icon: Heart,
      color: "bg-[#1164A3]",
      image: "/images/journey-2007.jpg",
      imageAlt: "Founding alumni of NED Scholars program in 2007",
    },
    {
      year: "2012",
      title: "Expansion Across Departments",
      description: "The scholarship expanded to include students from all departments of NED University, broadening its reach and reinforcing its commitment to supporting students from diverse academic fields.",
      details: "This pivotal decision transformed the program from a department-specific initiative into a university-wide force for change.",
      icon: GraduationCap,
      color: "bg-[#68B9C4]",
      image: "/images/journey-2012.jpg",
      imageAlt: "NED University students from diverse departments",
    },
    {
      year: "2013",
      title: "Open Donor-ship Policy",
      description: "During the donors' conference, it was decided to open the donor-ship policy beyond MECH 80-81 alumni.",
      details: "The name was changed from MECH 80-81 Alumni Scholarship to NED Scholarship to reflect the broader community of supporters rallying behind a shared mission.",
      icon: Users,
      color: "bg-[#82B4CC]",
      image: "/images/journey-2013.jpg",
      imageAlt: "Donors and alumni at the 2013 conference",
    },
    {
      year: "2015",
      title: "International Reach",
      description: "The scholarship opened to students from various countries in STEM education, with a focus on Pakistan and USA.",
      details: "Currently entertaining applicants from Pakistan and USA on need-cum-merit basis, with plans to expand to other countries as the program grows.",
      icon: Globe,
      color: "bg-[#B0A3B3]",
      image: "/images/journey-2015.jpg",
      imageAlt: "NED Scholars students from Pakistan and USA",
    },
    {
      year: "Present",
      title: "Comprehensive Support",
      description: "Today, NED Scholars provides not just financial aid, but mentorship, career counseling, laptops, and resources to help students succeed in a competitive world.",
      details: "Scholars receive direct alumni mentorship throughout their academic journey — building professionalism, confidence, and the tools to bridge the digital divide.",
      icon: Award,
      color: "bg-[#1164A3]",
      image: "/images/journey-present.jpg",
      imageAlt: "NED Scholar receiving laptop and mentorship support today",
    },
  ];

  const memorialScholarships = [
    { name: "Abu Ather Memorial Scholarship", icon: GraduationCap },
    { name: "Haroon Memorial Scholarship", icon: BookOpen },
    { name: "Shabir Memorial Scholarship", icon: Sparkles },
    { name: "Waqar Memorial Scholarship", icon: Award },
  ];

  const impactStats = [
    { value: "95%", label: "Donor Satisfaction", icon: Heart },
    { value: "80%", label: "STEM Support", icon: BookOpen },
    { value: "100+", label: "Scholars Supported", icon: Users },
    { value: "15+", label: "Years of Impact", icon: Calendar },
  ];

  const scholarBenefits = [
    { color: "bg-[#1164A3]", title: "Direct Alumni Connection", desc: "Scholars communicate directly with the NED Alumni group throughout their academic year." },
    { color: "bg-[#68B9C4]", title: "Personal Mentorship", desc: "At least one alumnus contacts each scholar regularly, providing guidance and support." },
    { color: "bg-[#82B4CC]", title: "Holistic Development", desc: "Scholars receive support beyond academics — building professionalism, self-esteem, and motivation." },
    { color: "bg-[#B0A3B3]", title: "Career Guidance", desc: "Alumni help scholars navigate their career paths, providing industry insights and professional connections." },
  ];

  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#1164A3] to-[#68B9C4] text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 px-4 py-2 text-sm">OUR JOURNEY</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Where It All Began</h1>
            <p className="text-2xl text-white/90 mb-4">
              A story of friendship, memory, and commitment to empowering the next generation of STEM leaders
            </p>
            <div className="flex items-center justify-center gap-4 text-lg">
              <Calendar className="w-6 h-6" />
              <span>Since 2007</span>
              <span className="opacity-50">•</span>
              <span>Building Futures Together</span>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <Card key={index} className="text-center border-[#82B4CC]/30 shadow-lg hover:shadow-xl hover:border-[#1164A3] transition-all">
                <CardContent className="p-8">
                  <stat.icon className="w-12 h-12 mx-auto mb-4 text-[#1164A3]" />
                  <div className="text-4xl font-bold text-gray-800 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-[#82B4CC]/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[#68B9C4] text-white">THE FOUNDATION</Badge>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">In Memory of Dear Friends</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  The NED Scholars program was born from a powerful bond of friendship and a desire to honor the memory of four remarkable individuals. Alumni from the Mechanical Engineering Batch 80-81 came together to create something lasting — a scholarship that would carry forward the dreams and aspirations of Abu Ather, Haroon, Shabir, and Waqar.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {memorialScholarships.map((scholarship, index) => (
                    <Card key={index} className="hover:shadow-lg hover:border-[#1164A3] transition-all border-[#82B4CC]/30">
                      <CardContent className="p-5">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-[#1164A3] to-[#68B9C4] rounded-full flex items-center justify-center flex-shrink-0">
                            <scholarship.icon className="w-5 h-5 text-white" />
                          </div>
                          <h3 className="font-semibold text-gray-800 text-sm">{scholarship.name}</h3>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[420px]">
                <img
                  src="/images/journey-origin.jpg"
                  alt="Founding alumni of NED Scholars commemorating friends"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1164A3]/50 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-white text-sm font-medium bg-black/30 rounded-xl px-4 py-2 backdrop-blur-sm">
                    Founded in 2007 by the MECH 80-81 Batch — in memory of four cherished friends
                  </p>
                </div>
                <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border-4 border-[#68B9C4]/30 -z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#1164A3] text-white">TIMELINE</Badge>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Evolution Over the Years</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From a small alumni initiative to an international scholarship program, see how we have grown while staying true to our mission
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="relative">
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#1164A3]/30 to-[#68B9C4]/30"></div>

              <div className="space-y-14">
                {timeline.map((item, index) => (
                  <div
                    key={index}
                    className={"relative flex items-center " + (index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse") + " gap-8"}
                  >
                    <div className="flex-1">
                      <Card className="hover:shadow-xl hover:border-[#1164A3] transition-all duration-300 border-[#82B4CC]/30 overflow-hidden">
                        {/* Image banner inside card */}
                        <div className="relative h-44 overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.imageAlt}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#1164A3]/60 to-transparent" />
                          <div className="absolute bottom-3 left-4">
                            <Badge className="text-base font-bold bg-white text-[#1164A3]">{item.year}</Badge>
                          </div>
                        </div>
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className={item.color + " p-3 rounded-lg flex-shrink-0"}>
                              <item.icon className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-2xl font-bold text-gray-800 mb-3">{item.title}</h3>
                              <p className="text-gray-700 mb-3 leading-relaxed">{item.description}</p>
                              <p className="text-gray-600 text-sm leading-relaxed">{item.details}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                      <div className={item.color + " w-6 h-6 rounded-full border-4 border-white shadow-lg"}></div>
                    </div>

                    <div className="hidden md:block flex-1"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Beliefs */}
      <section className="py-20 bg-gradient-to-r from-[#1164A3] to-[#68B9C4] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-white/20 text-white border-white/30">OUR BELIEFS</Badge>
              <h2 className="text-4xl font-bold mb-4">Our Mission & Beliefs</h2>
              <p className="text-xl text-white/85 max-w-3xl mx-auto">
                At NED Scholars, three core beliefs guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white hover:bg-white/20 transition-all">
                <CardContent className="p-8 text-center">
                  <Target className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-4">Equal Opportunity</h3>
                  <p className="opacity-90 text-sm leading-relaxed">
                    Everyone should have an equal chance to learn and grow, regardless of their background or financial circumstances.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white hover:bg-white/20 transition-all">
                <CardContent className="p-8 text-center">
                  <Sparkles className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-4">STEM Excellence</h3>
                  <p className="opacity-90 text-sm leading-relaxed">
                    Promoting STEM education inspires the next generation of innovators and problem-solvers who will shape tomorrow&apos;s world.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white hover:bg-white/20 transition-all">
                <CardContent className="p-8 text-center">
                  <TrendingUp className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-4">Future Leaders</h3>
                  <p className="opacity-90 text-sm leading-relaxed">
                    Investing in students today empowers them to become leaders in their fields and role models for the next generation.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge  */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[#68B9C4] text-white">THE CHALLENGE</Badge>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Leveling the Playing Field</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[420px]">
                <img
                  src="/images/journey-challenge.jpg"
                  alt="Student facing the digital divide in Pakistan"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1164A3]/50 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-white text-sm font-medium bg-black/30 rounded-xl px-4 py-2 backdrop-blur-sm">
                    The competition field is no longer flat — NED Scholars exists to tilt it back
                  </p>
                </div>
                <div className="absolute -bottom-3 -left-3 w-full h-full rounded-2xl border-4 border-[#82B4CC]/30 -z-10" />
              </div>

              <Card className="border-[#82B4CC]/30 shadow-xl">
                <CardContent className="p-8">
                  <div className="text-gray-700 space-y-4">
                    <p className="leading-relaxed">
                      We are living in a world that is supposed to be &quot;flat&quot;, providing equal opportunities to all. But in reality, this model fails in academics — especially in a society with class segregation like Pakistan.
                    </p>
                    <p className="leading-relaxed">
                      In the early 70s and 80s, opportunities for everyone entering professional college were equal. Obtaining a seat in a professional university was the first sign that a student was talented.
                    </p>
                    <p className="leading-relaxed">
                      With the advent of computers and the Internet, the &quot;competition field for success&quot; is no longer flat — it tilts toward students who can afford a personal computer, high-speed Internet, or a laptop at home.
                    </p>
                    <div className="bg-[#82B4CC]/10 p-5 rounded-lg border-l-4 border-[#1164A3]">
                      <p className="font-semibold text-gray-800 mb-2">Our Response:</p>
                      <p className="text-sm leading-relaxed">
                        NED Scholars provides support on a &quot;need-cum-merit&quot; basis — not just financial aid, but the tools, resources, and mentorship needed to bridge the digital divide and level the playing field.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different  */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-[#82B4CC]/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[#1164A3] text-white">OUR APPROACH</Badge>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Beyond Financial Support</h2>
              <p className="text-xl text-gray-600">
                What makes NED Scholars different is the comprehensive mentorship and support system provided to every scholar.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <Card className="border-[#82B4CC]/30 shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Scholars receive:</h3>
                  <div className="space-y-5">
                    {scholarBenefits.map((item, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className={item.color + " w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"}>
                          <CheckCircle2 className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-1">{item.title}</h4>
                          <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[460px]">
                <img
                  src="/images/journey-support.jpg"
                  alt="NED Scholar receiving mentorship and laptop from alumni"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1164A3]/50 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-white text-sm font-medium bg-black/30 rounded-xl px-4 py-2 backdrop-blur-sm">
                    Alumni mentors walk alongside every scholar — from first year to career launch
                  </p>
                </div>
                <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border-4 border-[#68B9C4]/30 -z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-[#1164A3] to-[#68B9C4] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Be Part of Our Journey</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Together, we can continue to empower talented students and create opportunities for the next generation of STEM leaders.
          </p>
          <Link
            href="/donate"
            className="bg-white text-[#1164A3] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Support a Scholar
          </Link>
        </div>
      </section>
    </div>
  );
}