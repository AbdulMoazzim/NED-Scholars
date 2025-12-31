"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Stats } from "@/lib/types";
const StatCard: React.FC<{ stat: Stats; index: number }> = ({ stat, index }) => {
  const statRef = useRef<HTMLDivElement>(null);
  const numberRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const statElement = statRef.current;
    const numberElement = numberRef.current;

    if (statElement && numberElement) {
      gsap.set(statElement, { opacity: 0, y: 50 });

      gsap.to(statElement, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: index * 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: statElement,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });

      // Number counting animation
      if (stat.number.includes('%') || stat.number.includes('+')) {
        const numValue = parseInt(stat.number.replace(/[^0-9]/g, ''));
        const suffix = stat.number.replace(/[0-9]/g, '');
        
        const counter = { value: 0 };
        gsap.to(counter, {
          value: numValue,
          duration: 2,
          delay: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: statElement,
            start: "top 80%",
            toggleActions: "play none none reverse"
          },
          onUpdate: () => {
            numberElement.textContent = Math.round(counter.value) + suffix;
          }
        });
      }
    }
  }, [stat, index]);

  return (
    <div ref={statRef} className="text-center p-6">
      <span ref={numberRef} className={`text-4xl font-bold text-white block mb-2`}>
        {stat.number}
      </span>
      <span className="font-medium">{stat.label}</span>
    </div>
  );
};

export default StatCard;