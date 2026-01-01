"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { programs } from "@/data/CausesSupportData";
import { stats } from "@/data/CausesSupportData";
import causesToSupport from "../../../../public/causes_to_support.png"
import Image from "next/image";
import StatCard from "@/components/Stats";
import CustomCard from "@/components/Card";
import { useRouter } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);



const SupportPage: React.FC = () => {
  const heroSectionRef = useRef(null);
  const programsTitleRef = useRef<HTMLHeadingElement>(null);
  const programsSectionRef = useRef(null);
  const impactTitleRef = useRef<HTMLHeadingElement>(null);
  const impactSubtitleRef = useRef<HTMLParagraphElement>(null);
  const router = useRouter();

  useEffect(() => {
    // Hero animations
    const tl = gsap.timeline();

    if (heroSectionRef.current && programsSectionRef.current) {
      gsap.set([heroSectionRef.current, programsSectionRef.current], {
        opacity: 0,
        y: 50,
      });

      tl.to(heroSectionRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
      });
      tl.to(programsSectionRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
      });
    }

    // Section titles animations
    if (programsTitleRef.current) {
      gsap.fromTo(
        programsTitleRef.current.parentElement,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: programsTitleRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    if (impactTitleRef.current && impactSubtitleRef.current) {
      const impactTl = gsap.timeline({
        scrollTrigger: {
          trigger: impactTitleRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.set([impactTitleRef.current, impactSubtitleRef.current], {
        opacity: 0,
        y: 50,
      });

      impactTl
        .to(impactTitleRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        })
        .to(
          impactSubtitleRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.5"
        );
    }
  }, []);


  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1164A3] via-[#68B9C4] to-[#82B4CC]">
      {/* Hero Section */}
      <section
        className="text-center py-20 px-5 text-white"
        ref={heroSectionRef}
      >
        <div className="max-w-6xl mx-auto box">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 drop-shadow-lg">
            NED Scholars
          </h1>
          <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-3xl mx-auto">
            Empowering aspiring scholars pursuing their dreams in STEM
          </p>
          <button
            className="bg-white text-[#1164A3] px-12 py-5 text-xl font-bold rounded-full hover:shadow-xl hover:bg-[#82B4CC] hover:text-white transition-all duration-300 transform hover:-translate-y-1"
            onClick={()=> {router.push("/donation")}}
          >
            Donate Now & Make a Difference
          </button>
        </div>
      </section>

      {/* Programs Section */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-16">
            <h2
              ref={programsTitleRef}
              className="text-5xl font-bold mb-6 text-gray-800 relative"
            >
              Our Impact Programs
            </h2>
            <div className="w-2/5 h-1 bg-gradient-to-r from-[#1164A3] to-[#68B9C4] mx-auto rounded-full"></div>
            <div className="flex w-full justify-center">
            <Image src={causesToSupport} alt="Causes-to-Support banner"/>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16 box" ref={programsSectionRef}>
            {programs.map((program, index) => (
              <CustomCard key={program.id} value={program} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-20 text-center">
        <div className="max-w-6xl mx-auto px-5">
          <h2
            ref={impactTitleRef}
            className="text-5xl font-bold mb-6 text-white relative"
          >
            Our Growing Impact
          </h2>
          <p
            ref={impactSubtitleRef}
            className="text-xl mb-12 max-w-3xl mx-auto"
          >
            Together, we&apos;re transforming lives and building the future of STEM
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
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