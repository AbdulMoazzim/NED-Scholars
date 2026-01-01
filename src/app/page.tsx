"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import HomeBanner from "../../public/HomeBanner.webp";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {
  DollarSign,
  BookOpen,
  Laptop,
  Target,
} from "lucide-react";
import { banners, causes, paymentMethods, stats } from "@/data/HomePageData";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { GetAllSuccessStories } from "./actions/success-stories";
import SuccessStoriesComponent from "@/components/Success-stories-card";
import { SuccessStoriesData } from "@/lib/types";

gsap.registerPlugin(useGSAP);

const NedScholarsHomepage = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  const container = useRef(null);
  const router = useRouter();
  const [stories, setSuccessStories] = useState<SuccessStoriesData>({success: false, data: []});
  
  useGSAP(
    () => {
      gsap.to(".animate-strip", {
        x: "-50%",
        repeat: -1,
        ease: "none",
        duration: 50,
      });
    },
    { scope: container }
  );
  
  useEffect(() => {
    async function load() {
      const data = await GetAllSuccessStories();
      if (data.success) {  
        setSuccessStories(data);
      }
    }
    load();
    
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const nextBanner = () => {
    setCurrentBanner((prev) => (prev + 1) % banners.length);
  };

  const prevBanner = () => {
    setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <div>
      {/* Smart Spending Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Smart spending decisions, every time
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Pro-active local communities and associations in all corners of
              the country, helping them on the best way to address challenges
              and enhance policy performance policy and policy delivery
              excellence.
            </p>
           
          </div>

          <div className="relative max-w-2xl mx-auto">
            <Image
              src={HomeBanner}
              alt="Students working together"
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#B0A3B3]/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[#1164A3] text-white border-[#1164A3]">
              Events And Announcements
            </Badge>
            <h3 className="text-3xl font-bold text-gray-800">
              Our Impact in Numbers
            </h3>
          </div>

          <div
            className="flex overflow-hidden justify-start items-center w-full"
            ref={container}
          >
            <div className="flex gap-10 shrink-0 animate-strip translate-x-[-10%]">
              {/* First set of stats */}
              <div className="flex gap-10 shrink-0">
                {stats.map((stat, index) => (
                  <Card
                    key={index}
                    className="text-center bg-white border-[#68B9C4]/20 w-[300px] hover:border-[#1164A3] transition-all"
                  >
                    <CardHeader>
                      <div className="text-[56px] font-semibold text-[#1164A3]">
                        {stat.value}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="text-gray-600 text-2xl">{stat.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Second set of stats (duplicate for seamless loop) */}
              <div className="flex gap-10 shrink-0">
                {stats.map((stat, index) => (
                  <Card
                    key={`dup-${index}`}
                    className="text-center bg-white border-[#68B9C4]/20 w-[300px] hover:border-[#1164A3] transition-all"
                  >
                    <CardHeader>
                      <div className="text-[56px] font-semibold text-[#1164A3]">
                        {stat.value}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="text-gray-600 text-2xl">{stat.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
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
              <div className="absolute inset-0 bg-gradient-to-r from-[#68B9C4] to-[#82B4CC] rounded-3xl transform rotate-6"></div>
              <img
                src="/api/placeholder/500/600"
                alt="Students studying"
                className="relative w-full rounded-3xl shadow-2xl"
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            Your Support Makes a Difference
          </h3>
          <p className="text-gray-600 mb-12">
            Choose your preferred payment method to make a donation
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {paymentMethods.map((method, index) => (
              <Card
                key={index}
                className="hover:shadow-lg hover:border-[#1164A3] transition-all duration-300 cursor-pointer hover:-translate-y-1"
              >
                <CardContent className="p-6 text-center">
                  <method.icon className="w-12 h-12 mx-auto mb-4 text-[#1164A3]" />
                  <p className="text-sm font-medium text-gray-800">
                    {method.name}
                  </p>
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

      {/* Success Stories */}
      <section id="stories" className=" bg-white">
          <SuccessStoriesComponent  slice={3} data={stories}  path="/"/>
      </section>

    </div>
  );
};

export default NedScholarsHomepage;