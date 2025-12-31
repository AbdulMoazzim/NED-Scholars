"use client"

import { cardItems } from "@/lib/types";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

const CustomCard: React.FC<{ value: cardItems; index: number }> = ({ value, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (card) {
      gsap.set(card, { opacity: 0, y: 50 });

      gsap.to(card, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: index * 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });

      const handleMouseEnter = () => {
        gsap.to(card, {
          y: -10,
          boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
          duration: 0.3,
          ease: "power2.out"
        });
      };

      const handleMouseLeave = () => {
        gsap.to(card, {
          y: 0,
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
          duration: 0.3,
          ease: "power2.out"
        });
      };

      card.addEventListener('mouseenter', handleMouseEnter);
      card.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        card.removeEventListener('mouseenter', handleMouseEnter);
        card.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [index]);

  return (
    <div ref={cardRef} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">{value.title}</h3>
      <p className="text-gray-600 leading-relaxed">{value.description}</p>
    </div>
  );
};

export default CustomCard;