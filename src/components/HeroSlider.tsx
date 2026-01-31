"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export interface SlideData {
  id: string | number;
  image: string;
  subtitle?: string;
  title: string;
  description: string;
  ctaText?: string;
  ctaAction?: () => void;
}

interface HeroSliderProps {
  slides: SlideData[];
  autoPlayInterval?: number;
  enableAutoPlay?: boolean;
  showDots?: boolean;
  className?: string;
}

export default function HeroSlider({
  slides,
  autoPlayInterval = 3000,
  enableAutoPlay = true,
  showDots = true,
  className = "",
}: HeroSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showContent, setShowContent] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning || index === currentIndex) return;
    
    setIsTransitioning(true);
    setShowContent(false);

    setTimeout(() => {
      setCurrentIndex(index);
      setTimeout(() => {
        setShowContent(true);
        setIsTransitioning(false);
      }, 100);
    }, 500);
  }, [isTransitioning, currentIndex]);

  // Auto play with proper cleanup
  useEffect(() => {
    if (!enableAutoPlay || slides.length <= 1) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }

    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    // Set new interval
    intervalRef.current = setInterval(() => {
      setIsTransitioning(true);
      setShowContent(false);

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
        setTimeout(() => {
          setShowContent(true);
          setIsTransitioning(false);
        }, 100);
      }, 500);
    }, autoPlayInterval);

    // Cleanup function
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [enableAutoPlay, autoPlayInterval, slides.length]);

  const currentSlide = slides[currentIndex];

  return (
    <div className={`relative w-full h-screen overflow-hidden ${className}`}>
      {/* Background Images with 3D Transform */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className="absolute inset-0 transition-all duration-1000 ease-in-out"
            style={{
              opacity: index === currentIndex ? 1 : 0,
              transform: index === currentIndex 
                ? "translate3d(0, 0, 0) scale(1)" 
                : "translate3d(-100px, 0, 0) scale(1.1)",
            }}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              quality={90}
              className="object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/75 via-blue-800/60 to-blue-900/40" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="space-y-4 md:space-y-6">
              {/* Subtitle */}
              {currentSlide.subtitle && (
                <div
                  className={`transition-all duration-700 ${
                    showContent
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-[100px]"
                  }`}
                  style={{ transitionDelay: "100ms" }}
                >
                  <p className="text-cyan-400 text-xs md:text-sm lg:text-base uppercase tracking-wider font-semibold">
                    {currentSlide.subtitle}
                  </p>
                </div>
              )}

              {/* Title */}
              <div
                className={`transition-all duration-700 ${
                  showContent
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-[80px]"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                  {currentSlide.title}
                </h1>
              </div>

              {/* Description */}
              <div
                className={`transition-all duration-700 ${
                  showContent
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-[90px]"
                }`}
                style={{ transitionDelay: "300ms" }}
              >
                <p className="text-sm md:text-base lg:text-lg xl:text-xl text-white/90 max-w-2xl leading-relaxed">
                  {currentSlide.description}
                </p>
              </div>

               {/* CTA Button */}
              {currentSlide.ctaText && (
                <div
                  className={`transition-all duration-700 ${
                    showContent
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-[100px]"
                  }`}
                  style={{ transitionDelay: "400ms" }}
                >
                  <Button
                    onClick={currentSlide.ctaAction}
                    size="lg"
                    className="bg-[#1164A3] hover:bg-[#82B4CC] text-white px-6 md:px-8 py-4 md:py-6 text-base md:text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 uppercase tracking-wide font-semibold"
                  >
                    {currentSlide.ctaText}
                  </Button>
                </div>
              )}
            </div> 
          </div>
        </div>
      </div>


      {/* Dot Indicators */}
      {showDots && slides.length > 1 && (
        <div className="absolute bottom-6 md:bottom-8 lg:bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-2 md:gap-3">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => goToSlide(index)}
              disabled={isTransitioning}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? "w-10 md:w-12 h-2.5 md:h-3 bg-[#1164A3]"
                  : "w-2.5 md:w-3 h-2.5 md:h-3 bg-white/50 hover:bg-white/80"
              } disabled:cursor-not-allowed`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}