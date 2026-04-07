// components/ProgramCard.tsx
"use client"

import { programCardItems } from "@/lib/types";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

const ProgramCard: React.FC<{ value: programCardItems; index: number }> = ({ value, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (card) {
      gsap.set(card, { opacity: 0, y: 50 });
      gsap.to(card, {
        opacity: 1, y: 0, duration: 0.8, delay: index * 0.2, ease: "power2.out",
        scrollTrigger: { trigger: card, start: "top 80%", toggleActions: "play none none reverse" }
      });

      const onEnter = () => gsap.to(card, { y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.15)", duration: 0.3, ease: "power2.out" });
      const onLeave = () => gsap.to(card, { y: 0, boxShadow: "0 10px 30px rgba(0,0,0,0.1)", duration: 0.3, ease: "power2.out" });

      card.addEventListener("mouseenter", onEnter);
      card.addEventListener("mouseleave", onLeave);
      return () => { card.removeEventListener("mouseenter", onEnter); card.removeEventListener("mouseleave", onLeave); };
    }
  }, [index]);

  return (
    <div ref={cardRef} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden flex flex-col">
      <div className="relative h-72 w-full overflow-hidden">
        <img
          src={value.image}
          alt={value.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
        <p className="text-gray-600 leading-relaxed text-sm">{value.description}</p>
      </div>
    </div>
  );
};

export default ProgramCard;