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
  Sparkles
} from "lucide-react";

export default function JourneyPage() {
  const timeline = [
    {
      year: "2007",
      title: "The Beginning",
      description: "The NED Scholars program began as the MECH 80-81 Alumni Scholarship, created by alumni from NED's 1980-81 Mechanical Engineering batch in memory of their friends Abu Ather, Haroon, Shabir, and Waqar.",
      details: "Initially focused on providing need-cum-merit support to deserving Mechanical Engineering students to aid those with financial need and academic potential.",
      icon: Heart,
      color: "bg-[#1164A3]"
    },
    {
      year: "2012",
      title: "Expansion Across Departments",
      description: "Based on recommendations from the selection committee, the scholarship expanded to include students from all departments of NED University.",
      details: "This broadened its impact, reinforcing the scholarship's commitment to supporting students from diverse academic fields.",
      icon: GraduationCap,
      color: "bg-[#68B9C4]"
    },
    {
      year: "2013",
      title: "Open Donor-ship Policy",
      description: "During the donors' conference, it was decided to open the donor-ship policy beyond MECH 80-81 alumni.",
      details: "The name was changed from MECH 80-81 Alumni Scholarship to NED Scholarship to reflect the broader community support.",
      icon: Users,
      color: "bg-[#82B4CC]"
    },
    {
      year: "2015",
      title: "International Reach",
      description: "The scholarship opened to students from various countries in STEM education.",
      details: "Currently entertaining applicants from Pakistan and USA on need-cum-merit basis, with plans to expand to other countries.",
      icon: Globe,
      color: "bg-[#B0A3B3]"
    },
    {
      year: "Present",
      title: "Comprehensive Support",
      description: "Today, NED Scholars provides not just financial aid, but mentorship, career counseling, and resources to help students succeed.",
      details: "Scholars receive laptops, books, and guidance from alumni mentors throughout their academic journey.",
      icon: Award,
      color: "bg-[#1164A3]"
    }
  ];

  const memorialScholarships = [
    { name: "Abu Ather Memorial Scholarship", icon: "🎓" },
    { name: "Haroon Memorial Scholarship", icon: "📚" },
    { name: "Shabir Memorial Scholarship", icon: "💡" },
    { name: "Waqar Memorial Scholarship", icon: "⭐" }
  ];

  const impactStats = [
    { value: "95%", label: "Donor Satisfaction", icon: Heart },
    { value: "80%", label: "STEM Support", icon: BookOpen },
    { value: "100+", label: "Scholars Supported", icon: Users },
    { value: "15+", label: "Years of Impact", icon: Calendar }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#1164A3] to-[#68B9C4] text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 px-4 py-2 text-sm">
              OUR JOURNEY
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Where It All Began
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
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
                  <div className="text-4xl font-bold text-gray-800 mb-2">
                    {stat.value}
                  </div>
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
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[#68B9C4] text-white">THE FOUNDATION</Badge>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                In Memory of Dear Friends
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                The NED Scholars program was born from a powerful bond of friendship and a desire to honor the memory of four remarkable individuals. Alumni from the Mechanical Engineering Batch 80-81 came together to create something lasting—a scholarship that would carry forward the dreams and aspirations of Abu Ather, Haroon, Shabir, and Waqar.
              </p>
            </div>

            {/* Memorial Scholarships */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {memorialScholarships.map((scholarship, index) => (
                <Card key={index} className="hover:shadow-lg hover:border-[#1164A3] transition-all border-[#82B4CC]/30">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="text-4xl">{scholarship.icon}</div>
                      <div>
                        <h3 className="font-semibold text-gray-800">
                          {scholarship.name}
                        </h3>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#1164A3] text-white">TIMELINE</Badge>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Our Evolution Over the Years
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From a small alumni initiative to an international scholarship program, see how we&apos;ve grown while staying true to our mission
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#1164A3]/30 to-[#68B9C4]/30"></div>

              {/* Timeline Items */}
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div
                    key={index}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    } gap-8`}
                  >
                    {/* Content Card */}
                    <div className="flex-1">
                      <Card className="hover:shadow-xl hover:border-[#1164A3] transition-all duration-300 border-[#82B4CC]/30">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className={`${item.color} p-3 rounded-lg`}>
                              <item.icon className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-3">
                                <Badge className="text-lg font-bold bg-[#82B4CC] text-white">
                                  {item.year}
                                </Badge>
                              </div>
                              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                                {item.title}
                              </h3>
                              <p className="text-gray-700 mb-3 leading-relaxed">
                                {item.description}
                              </p>
                              <p className="text-gray-600 text-sm leading-relaxed">
                                {item.details}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Timeline Dot */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                      <div className={`w-6 h-6 ${item.color} rounded-full border-4 border-white shadow-lg`}></div>
                    </div>

                    {/* Spacer for alternating layout */}
                    <div className="hidden md:block flex-1"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-r from-[#1164A3] to-[#68B9C4] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-white/20 text-white border-white/30">
                OUR BELIEFS
              </Badge>
              <h2 className="text-4xl font-bold mb-6">
                What Drives Us Forward
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white hover:bg-white/20 transition-all">
                <CardContent className="p-8 text-center">
                  <Target className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-4">Equal Opportunity</h3>
                  <p className="opacity-90">
                    We believe in creating a world where everyone has an equal chance to learn and grow, regardless of their background.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white hover:bg-white/20 transition-all">
                <CardContent className="p-8 text-center">
                  <Sparkles className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-4">STEM Excellence</h3>
                  <p className="opacity-90">
                    We are passionate about promoting STEM education and inspiring the next generation of innovators.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white hover:bg-white/20 transition-all">
                <CardContent className="p-8 text-center">
                  <TrendingUp className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-4">Future Leaders</h3>
                  <p className="opacity-90">
                    We are investing in the future by empowering students to become leaders in their fields.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[#68B9C4] text-white">THE CHALLENGE</Badge>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Leveling the Playing Field
              </h2>
            </div>

            <Card className="border-[#82B4CC]/30 shadow-xl">
              <CardContent className="p-8">
                <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                  <p className="leading-relaxed">
                    We are living in a world that is supposed to be &quot;flat&quot;, providing equal opportunities to all. But in reality, the model fails in academics, especially when we talk about a society with &quot;class segregation&quot; as in Pakistan.
                  </p>
                  <p className="leading-relaxed">
                    Looking back, in the early 70s and 80s, the opportunities for success for everyone entering professional college were equal. Obtaining a seat in a professional university was the first sign that a particular student was talented.
                  </p>
                  <p className="leading-relaxed">
                    With the advent and introduction of computers and the Internet, things have changed. The &quot;competition field for success&quot; is not flat anymore, but rather tilted. It is tilted towards all such students who have the ability to get a personal computer at home, high-speed Internet, data plans with tablets, iPads, or laptops.
                  </p>
                  <div className="bg-[#82B4CC]/10 p-6 rounded-lg mt-6 border-l-4 border-[#1164A3]">
                    <p className="font-semibold text-gray-800 mb-2">
                      Our Response:
                    </p>
                    <p className="leading-relaxed">
                      NED Scholars is an effort to support NED students on a &quot;need-cum-merit&quot; basis, in an effort to create a level field for them to compete. We provide not just financial aid, but the tools, resources, and mentorship needed to bridge the digital divide.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-[#82B4CC]/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-[#1164A3] text-white">OUR APPROACH</Badge>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Beyond Financial Support
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              What makes scholarships by NED Scholars different is the comprehensive mentorship and support system provided to our scholars.
            </p>

            <Card className="text-left border-[#82B4CC]/30 shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Scholars receive:
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#1164A3] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Direct Alumni Connection</h4>
                      <p className="text-gray-600">Scholars are encouraged to communicate directly with the NED Alumni group throughout their academic year.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#68B9C4] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Personal Mentorship</h4>
                      <p className="text-gray-600">At least one alumnus contacts each scholar regularly, providing guidance and support.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#82B4CC] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Holistic Development</h4>
                      <p className="text-gray-600">Coming from lower-middle class and poor families, scholars receive support beyond academics—building professionalism, self-esteem, and motivation.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#B0A3B3] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Career Guidance</h4>
                      <p className="text-gray-600">Alumni help scholars navigate their career paths, providing industry insights and professional connections.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-[#1164A3] to-[#68B9C4] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Be Part of Our Journey
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Together, we can continue to empower talented students and create opportunities for the next generation of STEM leaders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#1164A3] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Support a Scholar
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}