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
  ArrowRight,
  ChevronRight,
  Award,
  Target,
  Lightbulb,
  HandHeart,
  Calendar,
  MapPin,
  Clock,
  Factory,
  Mic,
  Video,
  Monitor,
} from "lucide-react";
import { causes, paymentMethods, stats } from "@/data/HomePageData";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { GetAllSuccessStories } from "./actions/success-stories";
import SuccessStoriesComponent from "@/components/Success-stories-card";
import { SuccessStoriesData } from "@/lib/types";
import HeroSlider, { SlideData } from "@/components/HeroSlider";
import {
  GupShupSession,
  IndustrialVisit,
  Seminar,
  Webinar,
} from "@/lib/form-types";
import { GetUpcomingGupShupSessions, GetCompletedGupShupSessions } from "./actions/gupshup";
import { GetPastVisits, GetUpcomingVisits } from "./actions/industrial-visit";
import { GetUpcomingSeminars } from "./actions/seminar";
import { GetUpcomingWebinars } from "./actions/webinar";

gsap.registerPlugin(useGSAP);

// ─── Helpers ──────────────────────────────────────────────────────────────────

function formatDate(date: Date | string) {
  return new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

// ─── Normalised card shape ────────────────────────────────────────────────────
// Each raw Prisma type has different field names (visitDate vs date, images vs
// thumbnailImage, location vs platform…).  We map each to this flat shape once
// so ActivityCard never has to touch a union-type property directly.

interface NormalisedActivity {
  id: string;
  title: string;
  date: Date | string;
  location?: string | null;
  description?: string | null;
  slug?: string | null;
  thumbnailUrl?: string | null;
  speakerName?: string | null;
}

function normaliseVisit(v: IndustrialVisit): NormalisedActivity {
  return {
    id: v.id,
    title: v.title,
    date: v.visitDate,
    location: v.location ?? null,
    description: v.description ?? null,
    slug: v.slug ?? null,
    thumbnailUrl: v.images?.[0]?.url ?? null,
    speakerName: null,
  };
}

function normaliseGupShup(g: GupShupSession): NormalisedActivity {
  return {
    id: g.id,
    title: g.title,
    date: g.date,
    location: g.platform ?? null,
    description: g.description ?? null,
    slug: g.slug ?? null,
    thumbnailUrl: g.thumbnailImage?.[0]?.url ?? null,
    speakerName: g.speakerName ?? null,
  };
}

function normaliseSeminar(s: Seminar): NormalisedActivity {
  return {
    id: s.id,
    title: s.title,
    date: s.date,
    location: s.location ?? null,
    description: s.description ?? null,
    slug: null,
    thumbnailUrl: s.images?.[0]?.url ?? null,
    speakerName: null,
  };
}

function normaliseWebinar(w: Webinar): NormalisedActivity {
  return {
    id: w.id,
    title: w.title,
    date: w.date,
    location: w.platform ?? null,
    description: w.description ?? null,
    slug: null,
    thumbnailUrl: w.images?.[0]?.url ?? null,
    speakerName: null,
  };
}

// ─── Activity type config ──────────────────────────────────────────────────────

type ActivityKind = "visit" | "gupshup" | "seminar" | "webinar";

const activityMeta: Record<
  ActivityKind,
  { label: string; color: string; barColor: string; icon: React.ReactNode; route: string }
> = {
  visit: {
    label: "Industrial Visit",
    color: "bg-[#1164A3]/10 text-[#1164A3]",
    barColor: "bg-[#1164A3]",
    icon: <Factory className="w-4 h-4" />,
    route: "/events/industrial-visits",
  },
  gupshup: {
    label: "Gup Shup",
    color: "bg-[#68B9C4]/10 text-[#68B9C4]",
    barColor: "bg-[#68B9C4]",
    icon: <Mic className="w-4 h-4" />,
    route: "/events/gupshup",
  },
  seminar: {
    label: "Seminar",
    color: "bg-[#B0A3B3]/20 text-[#7c6f80]",
    barColor: "bg-[#B0A3B3]",
    icon: <Monitor className="w-4 h-4" />,
    route: "/programs/seminars",
  },
  webinar: {
    label: "Webinar",
    color: "bg-[#82B4CC]/20 text-[#4a86a0]",
    barColor: "bg-[#82B4CC]",
    icon: <Video className="w-4 h-4" />,
    route: "/programs/webinars",
  },
};
interface ActivityCardProps extends NormalisedActivity {
  kind: ActivityKind;
}

function ActivityCard({
  kind,
  title,
  date,
  location,
  description,
  slug,
  id,
  thumbnailUrl,
  speakerName,
}: ActivityCardProps) {
  const router = useRouter();
  const meta = activityMeta[kind];
  const detailRoute = slug ? `${meta.route}/${slug}` : `${meta.route}/${id}`;

  return (
    <Card className="group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col">
      <div className={`h-1 w-full ${meta.barColor}`} />

      {thumbnailUrl && (
        <div className="h-40 overflow-hidden">
          <img
            src={thumbnailUrl}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}

      <CardContent className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-3">
          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${meta.color}`}>
            {meta.icon}
            {meta.label}
          </span>
        </div>

        <h4 className="font-semibold text-gray-800 text-base leading-snug mb-2 line-clamp-2 group-hover:text-[#1164A3] transition-colors">
          {title}
        </h4>

        {speakerName && (
          <p className="text-sm text-gray-500 mb-2 flex items-center gap-1">
            <Mic className="w-3.5 h-3.5 flex-shrink-0" />
            {speakerName}
          </p>
        )}

        {description && (
          <p className="text-sm text-gray-500 line-clamp-2 mb-3">{description}</p>
        )}

        <div className="mt-auto space-y-1.5 pt-3 border-t border-gray-50">
          <div className="flex items-center gap-1.5 text-xs text-gray-500">
            <Calendar className="w-3.5 h-3.5 flex-shrink-0 text-[#68B9C4]" />
            <span>{formatDate(date)}</span>
          </div>
          {location && (
            <div className="flex items-center gap-1.5 text-xs text-gray-500">
              <MapPin className="w-3.5 h-3.5 flex-shrink-0 text-[#1164A3]" />
              <span className="line-clamp-1">{location}</span>
            </div>
          )}
        </div>

        <Button
          size="sm"
          variant="ghost"
          className="mt-4 w-full text-[#1164A3] hover:bg-[#1164A3]/5 hover:text-[#1164A3] justify-between group/btn"
          onClick={() => router.push(detailRoute)}
        >
          Read More
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </Button>
      </CardContent>
    </Card>
  );
}
interface TabPillProps<T extends string> {
  value: T;
  active: T;
  onClick: (v: T) => void;
  icon: React.ReactNode;
  label: string;
  count: number;
}

function TabPill<T extends string>({ value, active, onClick, icon, label, count }: TabPillProps<T>) {
  const isActive = value === active;
  return (
    <button
      onClick={() => onClick(value)}
      className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
        isActive
          ? "bg-[#1164A3] text-white shadow-md shadow-[#1164A3]/20"
          : "bg-white text-gray-500 border border-gray-200 hover:border-[#1164A3]/30 hover:text-[#1164A3]"
      }`}
    >
      {icon}
      {label}
      {count > 0 && (
        <span className={`ml-1 px-1.5 py-0.5 rounded-full text-xs ${isActive ? "bg-white/20 text-white" : "bg-gray-100 text-gray-500"}`}>
          {count}
        </span>
      )}
    </button>
  );
}

function SkeletonCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3].map((i) => (
        <Card key={i} className="h-64 animate-pulse bg-gray-100 border-0" />
      ))}
    </div>
  );
}

const NedScholarsHomepage = () => {
  const router = useRouter();

  const [stories, setSuccessStories] = useState<SuccessStoriesData>({ success: false, data: [] });

  // All state uses NormalisedActivity[] — no raw union types in state
  const [upcomingVisits,   setUpcomingVisits]   = useState<NormalisedActivity[]>([]);
  const [upcomingGupShup,  setUpcomingGupShup]  = useState<NormalisedActivity[]>([]);
  const [upcomingSeminars, setUpcomingSeminars] = useState<NormalisedActivity[]>([]);
  const [upcomingWebinars, setUpcomingWebinars] = useState<NormalisedActivity[]>([]);
  const [upcomingLoading,  setUpcomingLoading]  = useState(true);

  const [recentVisits,   setRecentVisits]   = useState<NormalisedActivity[]>([]);
  const [recentGupShup,  setRecentGupShup]  = useState<NormalisedActivity[]>([]);
  const [recentLoading,  setRecentLoading]  = useState(true);

  const [upcomingTab, setUpcomingTab] = useState<ActivityKind>("visit");
  const [recentTab,   setRecentTab]   = useState<"visit" | "gupshup">("visit");

  useEffect(() => {
    GetAllSuccessStories().then((data) => { if (data.success) setSuccessStories(data); });
  }, []);

  useEffect(() => {
    setUpcomingLoading(true);
    Promise.all([
      GetUpcomingVisits(),
      GetUpcomingGupShupSessions(),
      GetUpcomingSeminars(),
      GetUpcomingWebinars(),
    ]).then(([visits, gupshup, seminars, webinars]) => {
      if (visits.success)   setUpcomingVisits((visits.data   ?? []).map(normaliseVisit));
      if (gupshup.success)  setUpcomingGupShup((gupshup.data  ?? []).map(normaliseGupShup));
      if (seminars.success) setUpcomingSeminars((seminars.data ?? []).map(normaliseSeminar));
      if (webinars.success) setUpcomingWebinars((webinars.data ?? []).map(normaliseWebinar));
      setUpcomingLoading(false);
    });
  }, []);

  useEffect(() => {
    setRecentLoading(true);
    Promise.all([GetPastVisits(), GetCompletedGupShupSessions()]).then(([visits, gupshup]) => {
      if (visits.success)  setRecentVisits((visits.data  ?? []).map(normaliseVisit));
      if (gupshup.success) setRecentGupShup((gupshup.data ?? []).map(normaliseGupShup));
      setRecentLoading(false);
    });
  }, []);

  // Typed lookup maps — values are already NormalisedActivity[], safe to spread
  const upcomingData: Record<ActivityKind, NormalisedActivity[]> = {
    visit:   upcomingVisits,
    gupshup: upcomingGupShup,
    seminar: upcomingSeminars,
    webinar: upcomingWebinars,
  };

  const recentData: Record<"visit" | "gupshup", NormalisedActivity[]> = {
    visit:   recentVisits,
    gupshup: recentGupShup,
  };

  const slides: SlideData[] = [
    {
      id: 1,
      image: "/images/HomePage/Home Page Banner Background 1.png",
      subtitle: "BUILDING A BETTER FUTURE",
      title: "Education Today, Impact Forever",
      description: "Empower communities through education and help create lasting change. Your contribution today fuels generations of progress and innovation!",
      ctaText: "CONTRIBUTE NOW",
      ctaAction: () => router.push("/donate"),
    },
    {
      id: 2,
      image: "/images/HomePage/Home Page Banner Background 2.png",
      subtitle: "EMPOWERING STUDENTS",
      title: "Transform Lives Through Learning",
      description: "Join us in providing quality education and opportunities to deserving students. Together, we can make a difference in countless lives.",
      ctaText: "LEARN MORE",
      ctaAction: () => router.push("/about"),
    },
    {
      id: 3,
      image: "/images/HomePage/Home Page Banner Background 3.png",
      subtitle: "SCHOLARSHIPS & SUPPORT",
      title: "Breaking Barriers to Education",
      description: "Access scholarships, mentorship programs, and resources designed to help students achieve their dreams and reach their full potential.",
      ctaText: "APPLY NOW",
      ctaAction: () => router.push("/services/scholarships"),
    },
    {
      id: 4,
      image: "/images/HomePage/Home Page Banner Background 4.png",
      subtitle: "JOIN OUR COMMUNITY",
      title: "Be Part of the Change",
      description: "Connect with mentors, volunteers, and fellow students. Build a network that supports your academic and professional journey.",
      ctaText: "GET STARTED",
      ctaAction: () => router.push("/scholars"),
    },
  ];

  return (
    <div>
      <HeroSlider slides={slides} autoPlayInterval={3000} enableAutoPlay={true} showDots={true} />

      {/* Stats */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#68B9C420,_transparent_60%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <Badge className="mb-3 bg-[#1164A3]/10 text-[#1164A3] border-[#1164A3]/20 px-4 py-1.5">OUR IMPACT</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-3">Numbers That Tell Our Story</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Every figure represents a life changed, a dream funded, a future unlocked.</p>
          </div>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center w-full bg-white border border-[#68B9C4]/30 md:w-[200px] shadow-sm hover:shadow-lg hover:border-[#1164A3]/40 transition-all duration-300 hover:-translate-y-1">
                <div className="flex justify-center flex-col items-center w-full relative pt-6">
                  <div className="absolute top-4 w-[56px] rounded-full bg-[#FDF5F1] h-[56px] z-0" />
                  <Image className="z-10 relative" src={stat.icon} alt="icon" width={56} height={56} />
                </div>
                <CardContent className="pt-3 pb-6">
                  <div className="font-bold text-2xl text-gray-900 mb-1">{stat.label}</div>
                  <div className="text-sm text-gray-500 font-medium">{stat.value}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-gradient-to-r from-[#B0A3B3]/10 to-[#82B4CC]/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-4 bg-[#68B9C4] text-white border-[#68B9C4]">ABOUT NED Scholars</Badge>
              <h3 className="text-4xl font-bold text-gray-800 mb-6">Empowering Minds, Shaping Futures</h3>
              <p className="text-gray-600 text-lg mb-8">
                NED Scholars is a nonprofit organization that empowers students from underprivileged backgrounds to pursue their STEM dreams through scholarships and resources.
              </p>
              <div className="space-y-6">
                {[
                  { bg: "bg-[#82B4CC]/20", icon: <DollarSign className="w-4 h-4 text-[#1164A3]" />, title: "Financial assistance with career counseling", desc: "Comprehensive support including tuition fees and professional guidance." },
                  { bg: "bg-[#68B9C4]/20", icon: <Laptop className="w-4 h-4 text-[#1164A3]" />, title: "Laptop scholarships with lodging and food provision", desc: "Essential technology and living support for focused learning." },
                  { bg: "bg-[#B0A3B3]/30", icon: <BookOpen className="w-4 h-4 text-[#1164A3]" />, title: "Free certified courses and educational events", desc: "Skill development through workshops, competitions, and training programs." },
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <div className={`w-8 h-8 ${item.bg} rounded-full flex items-center justify-center flex-shrink-0 mt-1`}>{item.icon}</div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">{item.title}</h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button className="mt-6 bg-[#1164A3] hover:bg-[#0d4d82] text-white" onClick={() => router.push("/about")}>About Us</Button>
            </div>
            <div className="relative">
              <div className="absolute w-[80%] inset-0 bg-gradient-to-r from-[#68B9C4] to-[#82B4CC] rounded-3xl transform rotate-6" />
              <Image height={800} width={600} src="/images/HomePage/Home Page About Us Section.png" alt="Students studying" className="relative h-[60%] rounded-3xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-r from-[#68B9C4] to-[#82B4CC] rounded-3xl opacity-20" />
              <Card className="relative bg-white p-8 rounded-3xl shadow-xl border-[#68B9C4]/20">
                <CardContent className="text-center">
                  <Target className="w-16 h-16 mx-auto text-[#1164A3] mb-6" />
                  <h4 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h4>
                  <p className="text-gray-600 mb-6">Every student should have the chance to learn and grow</p>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Scholarship Allocation</span>
                      <span className="font-bold text-[#1164A3]">95%</span>
                    </div>
                    <Progress value={95} className="h-2 [&>div]:bg-[#1164A3]" />
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">STEM Allocation</span>
                      <span className="font-bold text-[#68B9C4]">5%</span>
                    </div>
                    <Progress value={5} className="h-2 [&>div]:bg-[#68B9C4]" />
                  </div>
                </CardContent>
              </Card>
            </div>
            <div>
              <Badge className="mb-4 bg-[#1164A3] text-white border-[#1164A3]">OUR MISSIONS</Badge>
              <h3 className="text-4xl font-bold text-gray-800 mb-6">Every student should have the chance to learn and grow</h3>
              <p className="text-gray-600 text-lg mb-8">
                At NED Scholars, we believe in the power of education to transform lives. Our mission is to help talented students from low-income backgrounds achieve their dreams in STEM.
              </p>
              <p className="text-gray-600 text-lg mb-8">
                We provide scholarships, mentorship, training and career counseling to ensure these students have the resources they need to succeed. By breaking down barriers and fostering a love of learning, we&apos;re working towards a better future for everyone.
              </p>
              <div className="space-y-4">
                {[
                  { color: "bg-[#1164A3]", text: "We believe in creating a world where everyone has an equal chance to learn and grow, regardless of their background." },
                  { color: "bg-[#68B9C4]", text: "We are passionate about promoting STEM education and inspiring the next generation of innovators." },
                  { color: "bg-[#82B4CC]", text: "We are investing in the future by empowering students to become leaders in their fields." },
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <div className={`w-6 h-6 ${item.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <p className="text-gray-700">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      
      
      {/* ── Upcoming Activities ── */}
      <section className="py-20 bg-gradient-to-br from-[#f8fafc] to-[#edf4f8]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <Badge className="mb-3 bg-[#1164A3] text-white border-[#1164A3] px-4 py-1.5">WHAT&apos;S COMING</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-3">Upcoming Activities</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Register for our next events and be part of transformative learning experiences.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {(["visit", "gupshup", "seminar", "webinar"] as ActivityKind[]).map((kind) => (
              <TabPill
                key={kind}
                value={kind}
                active={upcomingTab}
                onClick={setUpcomingTab}
                icon={activityMeta[kind].icon}
                label={activityMeta[kind].label + "s"}
                count={upcomingData[kind].length}
              />
            ))}
          </div>

          {upcomingLoading ? (
            <SkeletonCards />
          ) : upcomingData[upcomingTab].length === 0 ? (
            <div className="text-center py-16 text-gray-400">
              <Calendar className="w-12 h-12 mx-auto mb-3 opacity-40" />
              <p className="text-lg font-medium">No upcoming {activityMeta[upcomingTab].label}s</p>
              <p className="text-sm mt-1">Check back soon for new events!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingData[upcomingTab].slice(0, 3).map((item) => (
                <ActivityCard key={item.id} kind={upcomingTab} {...item} />
              ))}
            </div>
          )}

          {upcomingData[upcomingTab].length > 0 && (
            <div className="text-center mt-10">
              <Button size="lg" className="bg-[#1164A3] hover:bg-[#0d4d82] text-white gap-2" onClick={() => router.push(activityMeta[upcomingTab].route)}>
                View All {activityMeta[upcomingTab].label}s
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <Badge className="mb-3 bg-[#1164A3]/10 text-[#1164A3] border-[#1164A3]/20 px-4 py-1.5">GIVE TODAY</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-3">Your Support Makes a Difference</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Choose the payment method that works best for you. Every contribution — big or small — creates real impact.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:w-[70%] mx-auto mb-10">
            {paymentMethods.map((method, i) => (
              <Card key={i} className="hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-2 bg-gradient-to-r from-[#438ac0] to-[#68B9C4] border-0 group" onClick={() => router.push("/donate")}>
                <CardContent className="p-7 text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-white text-3xl font-bold mb-1">{method.name}</div>
                  <div className="text-white/70 text-[16px]">{method.description}</div>
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

      {/* Causes */}
      <section id="causes" className="py-20 bg-gradient-to-r from-[#B0A3B3]/10 to-[#82B4CC]/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#68B9C4] text-white border-[#68B9C4]">CAUSES TO SUPPORT</Badge>
            <h3 className="text-4xl font-bold text-gray-800 mb-6">Your Support Fuels Their Dreams</h3>
            <p className="text-gray-600 text-lg max-w-4xl mx-auto">
              Your support enables us to provide students with scholarships including tuition fees, laptop, food and lodging. Our mentors offer guidance and support, while free courses, workshops, and competitions nurture STEM skills.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {causes.map((cause, index) => (
              <Card key={index} className="hover:shadow-xl hover:border-[#1164A3] transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="font-semibold text-gray-800">{cause.name}</h4>
                    <Badge className="bg-[#82B4CC] text-white">{cause.percentage}%</Badge>
                  </div>
                  <Progress value={cause.percentage} className="h-3 [&>div]:bg-[#1164A3]" />
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Button size="lg" variant="outline" className="border-2 border-[#1164A3] text-[#1164A3] hover:bg-[#1164A3] hover:text-white" onClick={() => router.push("/about/causes-to-support")}>
              View Details
            </Button>
          </div>
        </div>
      </section>

      {/* ── Recent Activities ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <Badge className="mb-3 bg-[#68B9C4] text-white border-[#68B9C4] px-4 py-1.5">WHAT WE&apos;VE DONE</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-3">Recent Activities</h2>
            <p className="text-gray-500 max-w-xl mx-auto">A glimpse at our latest completed events and the experiences we&apos;ve built together.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {(["visit", "gupshup"] as const).map((kind) => (
              <TabPill
                key={kind}
                value={kind}
                active={recentTab}
                onClick={setRecentTab}
                icon={activityMeta[kind].icon}
                label={activityMeta[kind].label + "s"}
                count={recentData[kind].length}
              />
            ))}
          </div>

          {recentLoading ? (
            <SkeletonCards />
          ) : recentData[recentTab].length === 0 ? (
            <div className="text-center py-16 text-gray-400">
              <Clock className="w-12 h-12 mx-auto mb-3 opacity-40" />
              <p className="text-lg font-medium">No recent {activityMeta[recentTab].label}s yet</p>
              <p className="text-sm mt-1">Past events will appear here once completed.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentData[recentTab].slice(0, 3).map((item) => (
                <ActivityCard key={item.id} kind={recentTab} {...item} />
              ))}
            </div>
          )}

          {recentData[recentTab].length > 0 && (
            <div className="text-center mt-10">
              <Button size="lg" variant="outline" className="border-2 border-[#68B9C4] text-[#68B9C4] hover:bg-[#68B9C4] hover:text-white gap-2" onClick={() => router.push(activityMeta[recentTab].route)}>
                View All Past {activityMeta[recentTab].label}s
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Success Stories */}
      <section className="bg-gradient-to-br from-[#B0A3B3]/10 via-white to-[#82B4CC]/10">
        <SuccessStoriesComponent data={stories} path="/" slice={3} />
      </section>
    </div>
  );
};

export default NedScholarsHomepage;