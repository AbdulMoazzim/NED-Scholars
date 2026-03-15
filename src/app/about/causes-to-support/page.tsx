"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { programs } from "@/data/CausesSupportData";
import { stats } from "@/data/CausesSupportData";
import StatCard from "@/components/Stats";
import CustomCard from "@/components/Card";
import { useRouter } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Heart, Shield, TrendingUp } from "lucide-react";
import image from "../../../data/images/About/aboutus/Our Scholars.jpeg"

gsap.registerPlugin(ScrollTrigger);

const SupportPage: React.FC = () => {
  const heroSectionRef = useRef(null);
  const programsTitleRef = useRef<HTMLHeadingElement>(null);
  const programsSectionRef = useRef(null);
  const impactTitleRef = useRef<HTMLHeadingElement>(null);
  const impactSubtitleRef = useRef<HTMLParagraphElement>(null);
  const router = useRouter();

  useEffect(() => {
    const tl = gsap.timeline();

    if (heroSectionRef.current && programsSectionRef.current) {
      gsap.set([heroSectionRef.current, programsSectionRef.current], { opacity: 0, y: 50 });
      tl.to(heroSectionRef.current, { opacity: 1, y: 0, duration: 1, ease: "power2.out" });
      tl.to(programsSectionRef.current, { opacity: 1, y: 0, duration: 1, ease: "power2.out" });
    }

    if (programsTitleRef.current) {
      gsap.fromTo(
        programsTitleRef.current.parentElement,
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: "power2.out",
          scrollTrigger: { trigger: programsTitleRef.current, start: "top 80%", toggleActions: "play none none reverse" },
        }
      );
    }

    if (impactTitleRef.current && impactSubtitleRef.current) {
      const impactTl = gsap.timeline({
        scrollTrigger: { trigger: impactTitleRef.current, start: "top 80%", toggleActions: "play none none reverse" },
      });
      gsap.set([impactTitleRef.current, impactSubtitleRef.current], { opacity: 0, y: 50 });
      impactTl
        .to(impactTitleRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" })
        .to(impactSubtitleRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "-=0.5");
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1164A3] via-[#68B9C4] to-[#82B4CC]">

      {/* ── Hero Section ────────────────────────────────────────────────── */}
      <section className="text-center py-20 px-5 text-white" ref={heroSectionRef}>
        <div className="mx-auto box max-w-5xl">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 text-sm px-4 py-2">
            Our Mission
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg leading-tight">
            Empower the Future Through Education
          </h1>
          <p className="text-xl md:text-2xl mb-6 opacity-90 max-w-4xl mx-auto leading-relaxed">
            Education doesn&apos;t just change a single life, it reshapes entire generations. Yet,
            transforming that potential into reality requires targeted action.
          </p>
          <p className="text-lg md:text-xl mb-12 opacity-80 max-w-4xl mx-auto leading-relaxed">
            When you support NED Scholars, you are not simply funding a university degree. You are
            directly investing in the engineers, innovators, and problem-solvers who will build our
            future. Because we are a registered 501(c)(3) organization, 100% of your tax-deductible
            contributions bypass administrative bloat and go straight to the students who need it most.
          </p>
          <button
            className="bg-white text-[#1164A3] px-12 py-5 text-xl font-bold rounded-full hover:shadow-xl hover:bg-[#82B4CC] hover:text-white transition-all duration-300 transform hover:-translate-y-1"
            onClick={() => { router.push("/donate"); }}
          >
            Donate Now & Make a Difference
          </button>
        </div>
      </section>

      {/* ── Programs Section ────────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[#68B9C4] text-white text-sm px-4 py-2">
              Choose a cause below and see exactly how your generosity drives change.
            </Badge>
            <h2
              ref={programsTitleRef}
              className="text-5xl font-bold mb-4 text-gray-800"
            >
              Our Impact Programs
            </h2>
            <div className="w-2/5 h-1 bg-gradient-to-r from-[#1164A3] to-[#68B9C4] mx-auto rounded-full mb-8" />
          </div>

          {/* Program cards grid */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-12 box"
            ref={programsSectionRef}
          >
            {programs.map((program, index) => (
              <CustomCard key={program.id} value={program} index={index} />
            ))}
          </div>

          {/* Transparency note */}
          <div className="max-w-6xl mx-auto px-5 mb-16">
            <p className="text-gray-600 leading-relaxed text-center text-lg">
              When you support NED Scholars, you are not simply funding a university degree. You are
              directly investing in the engineers, innovators, and problem-solvers who will build our
              future. Because we are a registered 501(c)(3) organization, 100% of your tax-deductible
              contributions bypass administrative bloat and go straight to the students who need it most.
            </p>
          </div>

          {/* ── Let's Make a Difference Together — image + text ──────── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center rounded-2xl overflow-hidden shadow-2xl border border-[#82B4CC]/20">
            {/* Image placeholder */}
            <div className="relative h-full bg-[#1164A3]/10">
              {/* Replace src with your actual image */}
              <img
                src={image.src}
                alt="Join our team and donate to empower aspiring scholars"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1164A3]/60 to-transparent flex flex-col justify-center px-10">
                <h3 className="text-white text-3xl font-bold mb-3 leading-snug">
                  Join our team and donate to empower aspiring scholars pursuing their dreams
                </h3>
                <p className="text-white/80 text-sm mb-6">
                  Let us work together to make a difference
                </p>
                <button
                  className="bg-white text-[#1164A3] px-6 py-3 rounded-full font-semibold w-fit hover:shadow-lg hover:bg-[#68B9C4] hover:text-white transition-all duration-300"
                  onClick={() => { router.push("/donate"); }}
                >
                  Donate Now
                </button>
              </div>
            </div>

            {/* Text content */}
            <div className="p-10">
              <Badge className="mb-4 bg-[#1164A3] text-white text-sm px-4 py-2">
                Let&apos;s Make a Difference Together
              </Badge>
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                NED Scholars operates with strict financial transparency and focused impact. Whether
                you contribute through a small monthly commitment or a generous one-time gift, your
                support directly enables educational access and breaks the cycle of poverty worldwide.
              </p>
              <div className="space-y-4">
                {[
                  { icon: <CheckCircle2 className="w-5 h-5 text-[#68B9C4]" />, text: "100% of donations reach scholars directly" },
                  { icon: <Shield className="w-5 h-5 text-[#68B9C4]" />, text: "Registered 501(c)(3) — fully tax-deductible" },
                  { icon: <Heart className="w-5 h-5 text-[#68B9C4]" />, text: "Monthly or one-time giving options available" },
                  { icon: <TrendingUp className="w-5 h-5 text-[#68B9C4]" />, text: "Proven impact — 87% scholar success rate" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    {item.icon}
                    <span className="text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>
              <button
                className="mt-8 bg-gradient-to-r from-[#1164A3] to-[#68B9C4] text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                onClick={() => { router.push("/donation"); }}
              >
                Support a Scholar Today
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Impact Stats Section ─────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-20 text-center">
        <div className="max-w-6xl mx-auto px-5">
          <h2
            ref={impactTitleRef}
            className="text-5xl font-bold mb-6 text-white"
          >
            Our Growing Impact
          </h2>
          <p
            ref={impactSubtitleRef}
            className="text-xl mb-4 max-w-3xl mx-auto opacity-80"
          >
            Together, we&apos;re transforming lives and building the future of STEM
          </p>

          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            {stats.map((stat, index) => (
              <StatCard key={stat.label} stat={stat} index={index} />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default SupportPage;