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
} from "lucide-react";
import students from "../data/images/HomePage/Home Page About Us Section.png";
import dreamImage from "../data/images/HomePage/Home Front Image.png";
import { stats } from "@/data/HomePageData";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { GetAllSuccessStories } from "./actions/success-stories";
import SuccessStoriesComponent from "@/components/Success-stories-card";
import { SuccessStoriesData } from "@/lib/types";
import HeroSlider, { SlideData } from "@/components/HeroSlider";
import banner1 from "../data/images/HomePage/Home Page Banner Background 1.png";
import banner2 from "../data/images/HomePage/Home Page Banner Background 2.png";
import banner3 from "../data/images/HomePage/Home Page Banner Background 3.png";
import banner4 from "../data/images/HomePage/Home Page Banner Background 4.png";

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
      image: banner1.src,
      subtitle: "BUILDING A BETTER FUTURE",
      title: "Education Today, Impact Forever",
      description:
        "Empower communities through education and help create lasting change. Your contribution today fuels generations of progress and innovation!",
      ctaText: "CONTRIBUTE NOW",
      ctaAction: () => router.push("/donate"),
    },
    {
      id: 2,
      image: banner2.src,
      subtitle: "EMPOWERING STUDENTS",
      title: "Transform Lives Through Learning",
      description:
        "Join us in providing quality education and opportunities to deserving students. Together, we can make a difference in countless lives.",
      ctaText: "LEARN MORE",
      ctaAction: () => router.push("/about"),
    },
    {
      id: 3,
      image: banner3.src,
      subtitle: "SCHOLARSHIPS & SUPPORT",
      title: "Breaking Barriers to Education",
      description:
        "Access scholarships, mentorship programs, and resources designed to help students achieve their dreams and reach their full potential.",
      ctaText: "APPLY NOW",
      ctaAction: () => router.push("/services/scholarships"),
    },
    {
      id: 4,
      image: banner4.src,
      subtitle: "JOIN OUR COMMUNITY",
      title: "Be Part of the Change",
      description:
        "Connect with mentors, volunteers, and fellow students. Build a network that supports your academic and professional journey.",
      ctaText: "GET STARTED",
      ctaAction: () => router.push("/scholars"),
    },
  ];

  return (
    <div>
      {/* Smart Spending Section */}
      <HeroSlider
        slides={slides}
        autoPlayInterval={3000}
        enableAutoPlay={true}
        showDots={true}
      />

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center w-full">
              {/* First set of stats */}
              <div className="flex flex-wrap gap-10 justify-center ">
                {stats.map((stat, index) => (
                  <Card
                    key={index}
                    className="text-center bg-white border-[#68B9C4]/20 w-[60%] md:w-[200px] shadow-md"
                  >
                    <div className="flex justify-center flex-col items-center w-full relative">
                      <div className="absolute w-[60px] rounded-full bg-[#FDF5F1] h-[60px] z-0"></div>
                      <Image
                      className="z-1 relative"
                        src={stat.icon.src}
                        alt="icon"
                        width={60}
                        height={60}
                      />
                    </div>
                    <CardContent>
                      <div className="font-semibold text-2xl flex flex-col justify-start mb-4">{stat.label}</div>
                      <div className="font-light">
                        {stat.value}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="w-full px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[100px] justify-center mx-auto items-center w-full md:w-[70%] lg:w-[45%]">
            {/* Left side - Image with decorative elements */}
            <div className="relative grid grid-cols-1">

              {/* Main image */}
              <div className="relative z-20 m-[30px] md:m-0">
                <Image
                height={500}
                width={200}
                  src={students.src}
                  alt="NED Scholars graduates"
                  className="w-full"
                />

                {/* Donation badge */}
                <div className="absolute bottom-15 right-8 bg-[#1164A3] text-white rounded-full w-32 h-32 flex flex-col items-center justify-center shadow-xl">
                  <div className="text-3xl font-bold">614k</div>
                  <div className="flex items-center gap-1 text-sm">
                    <Heart className="w-4 h-4 fill-white" />
                    <span>Donation</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Content */}
            <div>
              <p className="mb-4  text-[#106CA7]">
                ABOUT NED Scholars
              </p>
              <h3 className="text-4xl font-bold text-gray-800 mb-6">
                Empowering Minds,
                <br />
                Shaping Futures
              </h3>
              <p className="text-gray-600 text-lg mb-8">
                NED Scholars is a nonprofit organization that empowers students
                from underprivileged backgrounds to pursue their STEM dreams
                through scholarships and resources.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">
                      Financial assistance with career counseling
                    </h4>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Laptop className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">
                      Laptop scholarships with lodging and food provision
                    </h4>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-6 h-6 text-purple-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">
                      Free certified courses and educational events
                    </h4>
                  </div>
                </div>

                <div className="flex items-start space-x-4 pt-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">
                      Donate now and open doors to education for a deserving
                      student
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-r from-[#B0A3B3]/10 to-[#82B4CC]/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <Badge className="mb-4 bg-[#1164A3] text-white border-[#1164A3]">
                OUR MISSIONS
              </Badge>
              <h3 className="text-4xl font-bold text-gray-800 mb-6">
                Every student should have the chance to learn and grow
              </h3>
              <p className="text-gray-600 text-lg mb-6">
                At NED Scholars, we believe in the power of education to
                transform lives. Our mission is to help talented students from
                low-income backgrounds achieve their dreams in STEM (Science,
                Technology, Engineering, and Mathematics).
              </p>
              <p className="text-gray-600 text-lg mb-8">
                We provide scholarships, mentorship, training and career
                counseling to ensure these students have the resources they need
                to succeed. By breaking down barriers and fostering a love of
                learning, we&apos;re working towards a better future for
                everyone.
              </p>

              
            </div>

                  <div className="flex flex-col">

            <div className="grid grid-cols-2 gap-8">
              {/* 95% Card */}
              <Card className="bg-[#68B9C4]/20 border-[#68B9C4]/30 p-8">
                <CardContent className="p-0">
                  <div className="text-5xl font-bold text-gray-800 mb-2">
                    95%
                  </div>
                  <div className="text-gray-700 font-medium">
                    Scholarship Allocation
                  </div>
                </CardContent>
              </Card>

              {/* 5% Card */}
              <Card className="bg-[#B0A3B3]/20 border-[#B0A3B3]/30 p-8">
                <CardContent className="p-0">
                  <div className="text-5xl font-bold text-gray-800 mb-2">
                    5%
                  </div>
                  <div className="text-gray-700 font-medium">
                    STEM Allocation
                  </div>
                </CardContent>
              </Card>
                  </div>
                
              <div className="mt-4">
                <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#1164A3] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-700">
                    We believe in creating a world where everyone has an equal
                    chance to learn and grow, regardless of their background.
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#1164A3] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-700">
                    We are passionate about promoting STEM education and
                    inspiring the next generation of innovators.
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#1164A3] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-700">
                    We are investing in the future by empowering students to
                    become leaders in their fields.
                  </p>
                </div>
              </div>

              <Button
                className="bg-[#1164A3] hover:bg-[#0d4d82] text-white border-2 border-[#1164A3] px-8"
                onClick={() => {
                  router.push("/about");
                }}
              >
                ABOUT US
              </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Your Support Makes a Difference
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
            {/* Zelle */}
            <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer hover:-translate-y-1 bg-gradient-to-br from-purple-500 to-purple-600 border-0">
              <CardContent className="p-8 text-center">
                <div className="text-white text-4xl font-bold">Zelle</div>
              </CardContent>
            </Card>

            {/* Zeffy */}
            <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer hover:-translate-y-1 bg-gradient-to-br from-purple-300 to-purple-400 border-0">
              <CardContent className="p-8 text-center">
                <div className="text-white text-4xl font-bold">zeffy</div>
              </CardContent>
            </Card>

            {/* PayPal */}
            <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer hover:-translate-y-1 bg-gradient-to-br from-blue-400 to-blue-500 border-0">
              <CardContent className="p-8 text-center flex items-center justify-center">
                <div className="text-white text-3xl font-bold">PayPal</div>
              </CardContent>
            </Card>

            {/* Citizens */}
            <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer hover:-translate-y-1 bg-gradient-to-br from-green-300 to-green-400 border-0">
              <CardContent className="p-8 text-center">
                <div className="text-white text-2xl font-bold">Citizens</div>
                <div className="text-white text-xs mt-1">
                  Trust me to keep up
                  <br />
                  with your finances
                </div>
              </CardContent>
            </Card>

            {/* Donation by Mail */}
            <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer hover:-translate-y-1 bg-gradient-to-br from-gray-400 to-gray-500 border-0">
              <CardContent className="p-8 text-center">
                <div className="text-white text-xl font-bold">
                  Donation By Mail
                </div>
              </CardContent>
            </Card>

            {/* Donation in Pakistan */}
            <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer hover:-translate-y-1 bg-gradient-to-br from-green-700 to-green-800 border-0">
              <CardContent className="p-8 text-center">
                <div className="text-white text-xl font-bold">
                  Donation In Pakistan
                </div>
              </CardContent>
            </Card>
          </div>

        </div>
      </section>

      {/* Causes Section  */}
      <section
        id="causes"
        className="py-20 bg-gradient-to-r from-[#B0A3B3]/10 to-[#82B4CC]/10"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Image */}
            <div className="relative">
              {/* Decorative dots pattern */}
              <div className="absolute top-10 right-10 w-20 h-20 grid grid-cols-6 gap-1 opacity-30">
                {[...Array(36)].map((_, i) => (
                  <div key={i} className="w-1 h-1 bg-gray-400 rounded-full" />
                ))}
              </div>

              <Image
               height={500}
                width={200}
                src={dreamImage.src}
                alt="Students and community"
                className="w-full rounded-3xl shadow-2xl relative z-10"
              />
            </div>

            {/* Right side - Content */}
            <div>
              <Badge className="mb-4 bg-[#68B9C4] text-white border-[#68B9C4]">
                CAUSES TO SUPPORT
              </Badge>
              <h3 className="text-4xl font-bold text-gray-800 mb-6">
                Your Support Fuels Their Dreams
              </h3>
              <p className="text-gray-600 text-lg mb-8">
                Your support enables us to provide students with scholarships
                including tuition fees, laptop, food and lodging. Our mentors
                offer guidance and support, while free courses, workshops, and
                competitions nurture STEM skills. We also provide career
                counseling, internships, and educational events to equip
                students for success.
              </p>

              <div className="space-y-6 mb-8">
                {/* STEM-focused Events */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 font-medium">
                      STEM-focused Events
                    </span>
                    <span className="text-[#1164A3] font-bold">34%</span>
                  </div>
                  <Progress value={34} className="h-2 [&>div]:bg-black" />
                </div>

                {/* Financial Support */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 font-medium">
                      Financial Support
                    </span>
                    <span className="text-[#1164A3] font-bold">42%</span>
                  </div>
                  <Progress value={42} className="h-2 [&>div]:bg-black" />
                </div>

                {/* Scholarship */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 font-medium">
                      Scholarship
                    </span>
                    <span className="text-[#1164A3] font-bold">67%</span>
                  </div>
                  <Progress value={67} className="h-2 [&>div]:bg-black" />
                </div>

                {/* Medical And Others */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 font-medium">
                      Medical And Others
                    </span>
                    <span className="text-[#1164A3] font-bold">24%</span>
                  </div>
                  <Progress value={24} className="h-2 [&>div]:bg-black" />
                </div>
              </div>

              <Button
                className="bg-white text-black border-[#1164A3] hover:bg-gray-50 border-1 rounded-3xl px-8"
                onClick={() => {
                  router.push("/about/causes-to-support");
                }}
              >
                VIEW DETAILS
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories - Image 3 Design */}
      <SuccessStoriesComponent data={stories} path="/" slice={3} />
    </div>
  );
};

export default NedScholarsHomepage;
