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
import { paymentMethods, stats } from "@/data/HomePageData";
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
          <div className="flex flex-wrap gap-6 justify-center">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="text-center bg-white border border-[#68B9C4]/30 w-[45%] md:w-[200px] shadow-sm hover:shadow-lg hover:border-[#1164A3]/40 transition-all duration-300 hover:-translate-y-1"
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

      {/* ── About Section ── */}
      <section id="about" className="py-24 bg-white">
        <div className="w-full px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mx-auto w-full md:w-[85%] lg:w-[75%]">
            {/* Left — image */}
            <div className="relative">
              <div className="relative z-20">
                <Image
                  width={800}
                  height={600}
                  src="/images/HomePage/Home Page About Us Section.png"
                  alt="NED Scholars graduates"
                  className="w-full rounded-2xl"
                />
                {/* floating badge */}
                <div className="absolute bottom-6 right-6 bg-[#1164A3] text-white rounded-2xl px-5 py-4 shadow-xl flex items-center gap-3">
                  <Heart className="w-6 h-6 fill-white flex-shrink-0" />
                  <div>
                    <div className="text-2xl font-bold leading-none">614k</div>
                    <div className="text-xs text-white/80 mt-0.5">
                      Total Donations
                    </div>
                  </div>
                </div>
              </div>
              {/* decorative ring */}
              <div className="absolute -bottom-6 -left-6 w-48 h-48 rounded-full border-2 border-dashed border-[#68B9C4]/40 z-0" />
            </div>

            {/* Right — content */}
            <div>
              <p className="text-[#1164A3] font-semibold tracking-widest text-sm mb-3 uppercase">
                About NED Scholars
              </p>
              <h3 className="text-4xl font-bold text-gray-900 mb-5 leading-tight">
                Empowering Minds,
                <br />
                <span className="text-[#68B9C4]">Shaping Futures</span>
              </h3>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                NED Scholars is a nonprofit organization that empowers students
                from underprivileged backgrounds to pursue their STEM dreams
                through scholarships, mentorship, and essential resources.
              </p>

              <div className="space-y-5 mb-8">
                {[
                  {
                    icon: <DollarSign className="w-5 h-5 text-orange-500" />,
                    bg: "bg-orange-100",
                    text: "Financial assistance paired with dedicated career counseling",
                  },
                  {
                    icon: <Laptop className="w-5 h-5 text-blue-500" />,
                    bg: "bg-blue-100",
                    text: "Laptop scholarships with lodging and food provision",
                  },
                  {
                    icon: <BookOpen className="w-5 h-5 text-purple-500" />,
                    bg: "bg-purple-100",
                    text: "Free certified courses and hands-on educational events",
                  },
                  {
                    icon: <Heart className="w-5 h-5 text-red-500" />,
                    bg: "bg-red-100",
                    text: "Donate now and open doors for a deserving student",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div
                      className={`w-10 h-10 ${item.bg} rounded-lg flex items-center justify-center flex-shrink-0`}
                    >
                      {item.icon}
                    </div>
                    <p className="text-gray-700 pt-1.5">{item.text}</p>
                  </div>
                ))}
              </div>

              <Button
                className="bg-[#1164A3] hover:bg-[#0d4d82] text-white px-8 rounded-full"
                onClick={() => router.push("/about")}
              >
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-20 bg-gradient-to-br from-[#1164A3] to-[#68B9C4] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 80%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-14">
            <Badge className="mb-3 bg-white/20 text-white border-white/30 px-4 py-1.5">
              WHY NED SCHOLARS
            </Badge>
            <h2 className="text-4xl font-bold text-white mb-3">
              What Sets Us Apart
            </h2>
            <p className="text-white/80 max-w-xl mx-auto">
              We don&apos;t just fund education — we build futures with
              intention, integrity, and impact.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUsItems.map((item, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-4 shadow-md">
                  {item.icon}
                </div>
                <h4 className="text-white font-bold text-lg mb-2">
                  {item.title}
                </h4>
                <p className="text-white/75 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mission Section ── */}
      <section className="py-24 bg-gradient-to-br from-[#B0A3B3]/10 via-white to-[#82B4CC]/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left */}
            <div>
              <Badge className="mb-4 bg-[#1164A3] text-white border-[#1164A3] px-4 py-1.5">
                OUR MISSION
              </Badge>
              <h3 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Every student should have the{" "}
                <span className="text-[#1164A3]">chance to learn</span> and grow
              </h3>
              <p className="text-gray-600 text-lg mb-5 leading-relaxed">
                At NED Scholars, we believe in the power of education to
                transform lives. Our mission is to help talented students from
                low-income backgrounds achieve their dreams in STEM.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                We provide scholarships, mentorship, training, and career
                counseling to ensure these students have the resources they need
                to succeed — building a better future for everyone.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "We believe in a world where everyone has an equal chance to learn and grow.",
                  "We're passionate about promoting STEM and inspiring the next generation of innovators.",
                  "We invest in the future by empowering students to become leaders in their fields.",
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#1164A3] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-white" />
                    </div>
                    <p className="text-gray-700">{text}</p>
                  </div>
                ))}
              </div>

              <Button
                className="bg-[#1164A3] hover:bg-[#0d4d82] text-white px-8 rounded-full"
                onClick={() => router.push("/about")}
              >
                ABOUT US <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>

            {/* Right */}
            <div className="flex flex-col gap-6">
              {/* Allocation cards */}
              <div className="grid grid-cols-2 gap-6">
                <Card className="bg-gradient-to-br from-[#1164A3] to-[#1a7ac7] border-0 text-white p-6 rounded-2xl shadow-lg">
                  <CardContent className="p-0">
                    <div className="text-5xl font-bold mb-1">95%</div>
                    <div className="text-white/80 font-medium text-sm">
                      Scholarship Allocation
                    </div>
                    <div className="mt-3 text-xs text-white/60">
                      Direct student support
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-[#68B9C4] to-[#82cad4] border-0 text-white p-6 rounded-2xl shadow-lg">
                  <CardContent className="p-0">
                    <div className="text-5xl font-bold mb-1">5%</div>
                    <div className="text-white/80 font-medium text-sm">
                      STEM Programs
                    </div>
                    <div className="mt-3 text-xs text-white/60">
                      Events & workshops
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Progress bars */}
              <Card className="border border-[#82B4CC]/30 rounded-2xl p-6 bg-white shadow-sm">
                <CardContent className="p-0 space-y-5">
                  {[
                    {
                      label: "Scholarship Support",
                      value: 67,
                      color: "bg-[#1164A3]",
                    },
                    {
                      label: "Financial Assistance",
                      value: 42,
                      color: "bg-[#68B9C4]",
                    },
                    {
                      label: "STEM-focused Events",
                      value: 34,
                      color: "bg-[#B0A3B3]",
                    },
                    {
                      label: "Medical & Others",
                      value: 24,
                      color: "bg-[#82B4CC]",
                    },
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-1.5">
                        <span className="text-gray-700 text-sm font-medium">
                          {item.label}
                        </span>
                        <span className="text-[#1164A3] font-bold text-sm">
                          {item.value}%
                        </span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${item.color} rounded-full`}
                          style={{ width: `${item.value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* CTA card */}
              <Card className="bg-[#FDF5F1] border border-orange-100 rounded-2xl p-6">
                <CardContent className="p-0 flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-orange-500 fill-orange-200" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900 mb-0.5">
                      Ready to make a difference?
                    </p>
                    <p className="text-sm text-gray-500">
                      Every dollar changes a life.
                    </p>
                  </div>
                  <Button
                    size="sm"
                    className="bg-[#1164A3] hover:bg-[#0d4d82] text-white rounded-full flex-shrink-0"
                    onClick={() => router.push("/donate")}
                  >
                    Donate
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ── Causes Section ── */}
      <section id="causes" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative flex justify-center">
              <Image
                width={800}
                height={600}
                src="/images/HomePage/Home Banner Front Image.png"
                alt="Students and community"
                className="relative z-10 w-2/3 rounded-3xl shadow-2xl"
              />
              {/* floating stat */}
              <div className="absolute bottom-6 left-6 bg-white border border-[#82B4CC]/30 rounded-2xl px-5 py-3 shadow-lg z-20 flex items-center gap-3">
                <GraduationCap className="w-8 h-8 text-[#1164A3]" />
                <div>
                  <div className="text-lg font-bold text-gray-900 leading-none">
                    500+
                  </div>
                  <div className="text-xs text-gray-500 mt-0.5">
                    Scholars Funded
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Badge className="mb-4 bg-[#68B9C4]/20 text-[#1164A3] border-[#68B9C4]/30 px-4 py-1.5">
                CAUSES TO SUPPORT
              </Badge>
              <h3 className="text-4xl font-bold text-gray-900 mb-5 leading-tight">
                Your Support Fuels Their Dreams
              </h3>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Your support enables scholarships covering tuition, laptops,
                food, and lodging. Our mentors offer guidance, while free
                courses, workshops, and competitions nurture STEM skills and
                career readiness.
              </p>

              <div className="space-y-5 mb-8">
                {[
                  {
                    label: "Scholarship Support",
                    value: 67,
                    color: "[#1164A3]",
                  },
                  {
                    label: "Financial Assistance",
                    value: 42,
                    color: "[#68B9C4]",
                  },
                  {
                    label: "STEM-focused Events",
                    value: 34,
                    color: "[#B0A3B3]",
                  },
                  { label: "Medical & Others", value: 24, color: "[#82B4CC]" },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-gray-700 font-medium">
                        {item.label}
                      </span>
                      <span className={`text-${item.color} font-bold`}>
                        {item.value}%
                      </span>
                    </div>
                    <Progress
                      value={item.value}
                      className="h-2 [&>div]:bg-[#1164A3]"
                    />
                  </div>
                ))}
              </div>

              <div className="flex gap-3">
                <Button
                  className="bg-[#1164A3] hover:bg-[#0d4d82] text-white rounded-full px-8"
                  onClick={() => router.push("/about/causes-to-support")}
                >
                  View Details <ChevronRight className="ml-1 w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  className="border-[#1164A3] text-[#1164A3] hover:bg-[#1164A3]/5 rounded-full px-8"
                  onClick={() => router.push("/donate")}
                >
                  Donate Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="py-20 bg-gradient-to-br from-[#B0A3B3]/10 via-white to-[#82B4CC]/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <Badge className="mb-3 bg-[#1164A3]/10 text-[#1164A3] border-[#1164A3]/20 px-4 py-1.5">
              HOW IT WORKS
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-3">
              Your Donation in Action
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              A simple, transparent process — from your contribution to a
              student&apos;s transformed life.
            </p>
          </div>
          <div className="relative">
            {/* connector line */}
            <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-[#1164A3] via-[#68B9C4] to-[#1164A3]" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  icon: <Heart className="w-6 h-6 text-white" />,
                  title: "You Donate",
                  desc: "Contribute any amount securely through your preferred payment method.",
                },
                {
                  step: "02",
                  icon: <Users className="w-6 h-6 text-white" />,
                  title: "We Review",
                  desc: "Our team carefully reviews and selects the most deserving scholars.",
                },
                {
                  step: "03",
                  icon: <GraduationCap className="w-6 h-6 text-white" />,
                  title: "Scholar Funded",
                  desc: "Scholarships are awarded covering tuition, laptop, lodging, and more.",
                },
                {
                  step: "04",
                  icon: <Globe className="w-6 h-6 text-white" />,
                  title: "Impact Created",
                  desc: "Scholars graduate, give back, and inspire the next generation.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center text-center relative"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-[#1164A3] to-[#68B9C4] rounded-full flex items-center justify-center shadow-lg mb-4 relative z-10">
                    {item.icon}
                    <span className="absolute -top-1 -right-1 bg-white text-[#1164A3] text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center border border-[#1164A3]/20">
                      {item.step}
                    </span>
                  </div>
                  <h4 className="font-bold text-gray-900 text-lg mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-[200px]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Payment Methods ── */}
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

          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 w-[70%] mx-auto mb-10">
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

      {/* Success Stories  */}
      <section className="bg-gradient-to-br from-[#B0A3B3]/10 via-white to-[#82B4CC]/10">
        <SuccessStoriesComponent data={stories} path="/" slice={3} />
      </section>
    </div>
  );
};

export default NedScholarsHomepage;
