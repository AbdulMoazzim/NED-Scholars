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

gsap.registerPlugin(useGSAP); // register the hook to avoid React version discrepancies

const NedScholarsHomepage = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  const container = useRef(null);
  const router = useRouter();
  const [stories, setSuccessStories] = useState<SuccessStoriesData>({success: false, data: []});
  
  useGSAP(
    () => {
      gsap.to(".animate-strip", {
        x: "-50%", // Move exactly half the width since we have 2 identical sets
        repeat: -1,
        ease: "none",
        duration: 50, // Adjust speed as needed (higher = slower)
      });
    },
    { scope: container }
  );
  
  useEffect(() => {
    async function load() {
      const data = await GetAllSuccessStories(); // server call
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
      {/* Hero Banner
      <section className="relative overflow-hidden">
        <div className={`bg-gradient-to-r ${banners[currentBanner].gradient} text-white py-20 transition-all duration-1000`}>
          <div className="container mx-auto px-4 text-center relative">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              {banners[currentBanner].title}
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              {banners[currentBanner].subtitle}
            </h2>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-90">
              {banners[currentBanner].description}
            </p>
            <Button size="lg" className="bg-white text-gray-800 hover:bg-gray-100 text-lg px-8 py-4 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300">
              {banners[currentBanner].buttonText}
            </Button> */}

      {/* Banner Navigation */}
      {/* <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
              <Button variant="ghost" size="sm" onClick={prevBanner} className="text-white hover:bg-white/20">
                <ChevronLeft className="w-6 h-6" />
              </Button>
            </div>
            <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
              <Button variant="ghost" size="sm" onClick={nextBanner} className="text-white hover:bg-white/20">
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>
            
            {/* Banner Indicators */}
      {/* <div className="flex justify-center space-x-2 mt-8">
              {banners.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentBanner(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentBanner ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section> */}

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
            <div className="flex justify-center space-x-4 mt-6">
              <Button variant="default">Get Started</Button>
              <Button variant="outline">Learn More</Button>
            </div>
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
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Events And Announcements</Badge>
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
                    className="text-center bg-[#F5F5F5] border-0 w-[300px]"
                  >
                    <CardHeader>
                      <div className="text-[56px] font-semibold text-gray-800">
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
                    className="text-center bg-[#F5F5F5] border-0 w-[300px]"
                  >
                    <CardHeader>
                      <div className="text-[56px] font-semibold text-gray-800">
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
              <Badge className="mb-4">ABOUT NED Scholars</Badge>
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
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <DollarSign className="w-4 h-4 text-blue-600" />
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
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Laptop className="w-4 h-4 text-green-600" />
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
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <BookOpen className="w-4 h-4 text-purple-600" />
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

              <Button className="mt-4" onClick={()=>{router.push("/about")}}>About Us</Button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl transform rotate-6"></div>
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
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-r from-green-400 to-blue-500 rounded-3xl opacity-20"></div>
              <Card className="relative bg-white p-8 rounded-3xl shadow-xl">
                <CardContent className="text-center">
                  <Target className="w-16 h-16 mx-auto text-blue-600 mb-6" />
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
                      <span className="font-bold text-blue-600">95%</span>
                    </div>
                    <Progress value={95} className="h-2" />

                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">STEM Allocation</span>
                      <span className="font-bold text-green-600">5%</span>
                    </div>
                    <Progress value={5} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Badge className="mb-4">OUR MISSIONS</Badge>
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
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-gray-700">
                    We believe in creating a world where everyone has an equal
                    chance to learn and grow, regardless of their background.
                  </p>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-gray-700">
                    We are passionate about promoting STEM education and
                    inspiring the next generation of innovators.
                  </p>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
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
                className="hover:shadow-lg transition-all duration-300 cursor-pointer hover:-translate-y-1"
              >
                <CardContent className="p-6 text-center">
                  <method.icon className="w-12 h-12 mx-auto mb-4 text-gray-600" />
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
        className="py-20 bg-gradient-to-r from-gray-50 to-blue-50"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">CAUSES TO SUPPORT</Badge>
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
                className="hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="font-semibold text-gray-800">
                      {cause.name}
                    </h4>
                    <Badge variant="secondary">{cause.percentage}%</Badge>
                  </div>
                  <Progress value={cause.percentage} className="h-3" />
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-black  hover:bg-black hover:text-white"
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