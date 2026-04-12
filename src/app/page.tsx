"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {
  DollarSign,
  BookOpen,
  Laptop,
  Heart,
  Check,
  Users,
  GraduationCap,
  Globe,
  ArrowRight,
  ChevronRight,
  Award,
  Target,
  Lightbulb,
  HandHeart,
} from "lucide-react";
import { causes, paymentMethods, stats } from "@/data/HomePageData";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { GetAllSuccessStories } from "./actions/success-stories";
import SuccessStoriesComponent from "@/components/Success-stories-card";
import { SuccessStoriesData } from "@/lib/types";
import HeroSlider, { SlideData } from "@/components/HeroSlider";

gsap.registerPlugin(useGSAP);

const NedScholarsHomepage = () => {
  const router = useRouter();
  const [stories, setSuccessStories] = useState<SuccessStoriesData>({
    success: false,
    data: [],
  });

  useEffect(() => {
    async function load() {
      const data = await GetAllSuccessStories();
      if (data.success) {
        setSuccessStories(data);
      }
    }
    load();
  }, []);

  const slides: SlideData[] = [
    {
      id: 1,
      image: "/images/HomePage/Home Page Banner Background 1.png",
      subtitle: "BUILDING A BETTER FUTURE",
      title: "Education Today, Impact Forever",
      description:
        "Empower communities through education and help create lasting change. Your contribution today fuels generations of progress and innovation!",
      ctaText: "CONTRIBUTE NOW",
      ctaAction: () => router.push("/donate"),
    },
    {
      id: 2,
      image: "/images/HomePage/Home Page Banner Background 2.png",
      subtitle: "EMPOWERING STUDENTS",
      title: "Transform Lives Through Learning",
      description:
        "Join us in providing quality education and opportunities to deserving students. Together, we can make a difference in countless lives.",
      ctaText: "LEARN MORE",
      ctaAction: () => router.push("/about"),
    },
    {
      id: 3,
      image: "/images/HomePage/Home Page Banner Background 3.png",
      subtitle: "SCHOLARSHIPS & SUPPORT",
      title: "Breaking Barriers to Education",
      description:
        "Access scholarships, mentorship programs, and resources designed to help students achieve their dreams and reach their full potential.",
      ctaText: "APPLY NOW",
      ctaAction: () => router.push("/services/scholarships"),
    },
    {
      id: 4,
      image: "/images/HomePage/Home Page Banner Background 4.png",
      subtitle: "JOIN OUR COMMUNITY",
      title: "Be Part of the Change",
      description:
        "Connect with mentors, volunteers, and fellow students. Build a network that supports your academic and professional journey.",
      ctaText: "GET STARTED",
      ctaAction: () => router.push("/scholars"),
    },
  ];

  const whyUsItems = [
    {
      icon: <Award className="w-7 h-7 text-[#1164A3]" />,
      title: "Proven Track Record",
      desc: "Over a decade of transforming student lives through targeted scholarships and mentorship.",
    },
    {
      icon: <Target className="w-7 h-7 text-[#68B9C4]" />,
      title: "100% Transparent",
      desc: "Every dollar is accounted for. 95% of all funds go directly to scholar support.",
    },
    {
      icon: <Lightbulb className="w-7 h-7 text-[#1164A3]" />,
      title: "STEM Focused",
      desc: "Specialized programs in Science, Technology, Engineering, and Mathematics.",
    },
    {
      icon: <HandHeart className="w-7 h-7 text-[#68B9C4]" />,
      title: "Community Driven",
      desc: "Built by alumni, run by volunteers — we reinvest success back into the community.",
    },
  ];

  return (
    <div>
      {/* Hero Slider */}
      <HeroSlider
        slides={slides}
        autoPlayInterval={3000}
        enableAutoPlay={true}
        showDots={true}
      />

      {/* ── Stats Section ── */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* subtle bg accent */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#68B9C420,_transparent_60%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <Badge className="mb-3 bg-[#1164A3]/10 text-[#1164A3] border-[#1164A3]/20 px-4 py-1.5">
              OUR IMPACT
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-3">
              Numbers That Tell Our Story
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Every figure represents a life changed, a dream funded, a future
              unlocked.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="text-center w-full bg-white border border-[#68B9C4]/30 md:w-[200px] shadow-sm hover:shadow-lg hover:border-[#1164A3]/40 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex justify-center flex-col items-center w-full relative pt-6">
                  <div className="absolute top-4 w-[56px] rounded-full bg-[#FDF5F1] h-[56px] z-0" />
                  <Image
                    className="z-10 relative"
                    src={stat.icon}
                    alt="icon"
                    width={56}
                    height={56}
                  />
                </div>
                <CardContent className="pt-3 pb-6">
                  <div className="font-bold text-2xl text-gray-900 mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-gray-500 font-medium">
                    {stat.value}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

     <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-4 bg-[#68B9C4] text-white border-[#68B9C4]">
                ABOUT NED Scholars
              </Badge>
              <h3 className="text-4xl font-bold text-gray-800 mb-6">
                Empowering Minds, Shaping Futures
              </h3>
              <p className="text-gray-600 text-lg mb-8">
                NED Scholars is a nonprofit organization that empowers students
                from underprivileged backgrounds to pursue their STEM dreams
                through scholarships and resources.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#82B4CC]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <DollarSign className="w-4 h-4 text-[#1164A3]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Financial assistance with career counseling
                    </h4>
                    <p className="text-gray-600">
                      Comprehensive support including tuition fees and
                      professional guidance.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#68B9C4]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Laptop className="w-4 h-4 text-[#1164A3]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Laptop scholarships with lodging and food provision
                    </h4>
                    <p className="text-gray-600">
                      Essential technology and living support for focused
                      learning.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#B0A3B3]/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <BookOpen className="w-4 h-4 text-[#1164A3]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Free certified courses and educational events
                    </h4>
                    <p className="text-gray-600">
                      Skill development through workshops, competitions, and
                      training programs.
                    </p>
                  </div>
                </div>
              </div>

              <Button 
                className="mt-4 bg-[#1164A3] hover:bg-[#0d4d82] text-white" 
                onClick={()=>{router.push("/about")}}
              >
                About Us
              </Button>
            </div>

            <div className="relative">
              <div className="absolute w-[80%] inset-0 bg-gradient-to-r from-[#68B9C4] to-[#82B4CC] rounded-3xl transform rotate-6"></div>
              <Image
              height={800}
              width={600}
                src="/images/HomePage/Home Page About Us Section.png"
                alt="Students studying"
                className="relative h-[60%] rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-r from-[#B0A3B3]/10 to-[#82B4CC]/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-r from-[#68B9C4] to-[#82B4CC] rounded-3xl opacity-20"></div>
              <Card className="relative bg-white p-8 rounded-3xl shadow-xl border-[#68B9C4]/20">
                <CardContent className="text-center">
                  <Target className="w-16 h-16 mx-auto text-[#1164A3] mb-6" />
                  <h4 className="text-2xl font-bold text-gray-800 mb-4">
                    Our Mission
                  </h4>
                  <p className="text-gray-600 mb-6">
                    Every student should have the chance to learn and grow
                  </p>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">
                        Scholarship Allocation
                      </span>
                      <span className="font-bold text-[#1164A3]">95%</span>
                    </div>
                    <Progress 
                      value={95} 
                      className="h-2 [&>div]:bg-[#1164A3]" 
                    />

                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">STEM Allocation</span>
                      <span className="font-bold text-[#68B9C4]">5%</span>
                    </div>
                    <Progress 
                      value={5} 
                      className="h-2 [&>div]:bg-[#68B9C4]" 
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Badge className="mb-4 bg-[#1164A3] text-white border-[#1164A3]">
                OUR MISSIONS
              </Badge>
              <h3 className="text-4xl font-bold text-gray-800 mb-6">
                Every student should have the chance to learn and grow
              </h3>
              <p className="text-gray-600 text-lg mb-8">
                At NED Scholars, we believe in the power of education to
                transform lives. Our mission is to help talented students from
                low-income backgrounds achieve their dreams in STEM (Science,
                Technology, Engineering, and Mathematics).
              </p>
              <p className="text-gray-600 text-lg mb-8">
                We provide scholarships, mentorship, training and career
                counseling to ensure these students have the resources they need
                to succeed. By breaking down barriers and fostering a love of
                learning, we&apos;re working towards a better future for everyone.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-[#1164A3] rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-gray-700">
                    We believe in creating a world where everyone has an equal
                    chance to learn and grow, regardless of their background.
                  </p>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-[#68B9C4] rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-gray-700">
                    We are passionate about promoting STEM education and
                    inspiring the next generation of innovators.
                  </p>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-[#82B4CC] rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-gray-700">
                    We are investing in the future by empowering students to
                    become leaders in their fields.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
       <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <Badge className="mb-3 bg-[#1164A3]/10 text-[#1164A3] border-[#1164A3]/20 px-4 py-1.5">
              GIVE TODAY
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-3">
              Your Support Makes a Difference
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Choose the payment method that works best for you. Every
              contribution — big or small — creates real impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:w-[70%] mx-auto mb-10">
            {paymentMethods.map((method, i) => (
              <Card
                key={i}
                className="hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-2 bg-gradient-to-r from-[#438ac0] to-[#68B9C4] border-0 group"
                onClick={() => router.push("/donate")}
              >
                <CardContent className="p-7 text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-white text-3xl font-bold mb-1">
                    {method.name}
                  </div>
                  <div className="text-white/70 text-[16px]">
                    {method.description}
                  </div>
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white/90 text-[16px] flex items-center justify-center gap-1">
                      Donate now <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Causes Section */}
      <section
        id="causes"
        className="py-20 bg-gradient-to-r from-[#B0A3B3]/10 to-[#82B4CC]/10"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#68B9C4] text-white border-[#68B9C4]">
              CAUSES TO SUPPORT
            </Badge>
            <h3 className="text-4xl font-bold text-gray-800 mb-6">
              Your Support Fuels Their Dreams
            </h3>
            <p className="text-gray-600 text-lg max-w-4xl mx-auto">
              Your support enables us to provide students with scholarships
              including tuition fees, laptop, food and lodging. Our mentors
              offer guidance and support, while free courses, workshops, and
              competitions nurture STEM skills. We also provide career
              counseling, internships, and educational events to equip students
              for success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {causes.map((cause, index) => (
              <Card
                key={index}
                className="hover:shadow-xl hover:border-[#1164A3] transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="font-semibold text-gray-800">
                      {cause.name}
                    </h4>
                    <Badge className="bg-[#82B4CC] text-white">
                      {cause.percentage}%
                    </Badge>
                  </div>
                  <Progress 
                    value={cause.percentage} 
                    className="h-3 [&>div]:bg-[#1164A3]" 
                  />
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-[#1164A3] text-[#1164A3] hover:bg-[#1164A3] hover:text-white"
              onClick={()=> {router.push("/about/causes-to-support")}}
            >
              View Details
            </Button>
          </div>
        </div>
      </section>

      {/* Success Stories  */}
      <section className="bg-gradient-to-br from-[#B0A3B3]/10 via-white to-[#82B4CC]/10">
        <SuccessStoriesComponent data={stories} path="/" slice={3} />
      </section>
    </div>
  );
};

export default NedScholarsHomepage;
