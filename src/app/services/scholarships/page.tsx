"use client";

import { useState, useEffect, useRef } from "react";
import { GraduationCap, Gift, MapPin, CheckCircle } from "lucide-react";
import StatCard from "@/components/Stats";
import { cardItems } from "@/lib/types";
import {
  benefits,
  cards,
  expectations,
  scholarGroups,
  statsData,
  universities,
} from "@/data/Scholarships";
import DialogCard from "@/components/DialogCard";
import Footer from "@/components/Footer";

const ExpectationCard = ({
  items,
  index,
}: {
  items: cardItems;
  index: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (card) {
      setTimeout(() => {
        card.style.opacity = "1";
        card.style.transform = "scale(1)";
      }, index * 150);
    }
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 relative overflow-hidden transition-all duration-300 before:absolute before:top-0 before:left-0 before:w-full before:h-1 before:bg-gradient-to-r before:from-indigo-500 before:to-purple-600 opacity-0 transform scale-75 hover:shadow-xl hover:-translate-y-1 text-center"
    >
      <div className="w-16 h-16 mb-6 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white mx-auto">
        {items.icon}
      </div>
      <h3 className="text-xl font-semibold mb-4 text-gray-800">
        {items.title}
      </h3>
      <p className="text-gray-600 leading-relaxed">{items.description}</p>
    </div>
  );
};

export default function ScholarshipPage() {
  const [currentGroupIndex, setCurrentGroupIndex] = useState(0);
  const programsTitleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGroupIndex((prev) => (prev + 1) % scholarGroups.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleMainApply = () => {
    const applySection = document.getElementById("apply");
    if (applySection) {
      applySection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-600 to-indigo-700">
      {/* Hero Section */}
      <section className="text-center py-20 px-5 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
            <GraduationCap className="w-6 h-6 text-white" />
            <span className="text-white font-semibold">
              Available Scholarships
            </span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 drop-shadow-lg">
            NED Scholars
          </h1>
          <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-3xl mx-auto">
            Empowering Tomorrow's Leaders Through Education Excellence
          </p>
          <button
            className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-12 py-5 text-xl font-bold rounded-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            onClick={handleMainApply}
          >
            Apply Now & Make a Difference
          </button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-20 text-center">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {statsData.map((stat, index)=> (
              <StatCard index={index} stat={stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Partner Universities Section */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-16">
            <h2
              ref={programsTitleRef}
              className="text-5xl font-bold text-gray-800 relative"
            >
              Partner Universities
            </h2>
            <div className="w-1/2 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full mt-12"></div>
            <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
              Currently, scholarships are being granted to students from these
              prestigious institutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-8">
            {universities.map((university, index) => (
              <DialogCard
                key={index}
                text={university}
                index={index}
                iconColor="text-indigo-500"
                color="before:from-indigo-500 before:to-purple-600"
                Icon={MapPin}
              />
            ))}
          </div>
          <div
            className="bg-gradient-to-r from-indigo-500 to-purple-600 p-8 rounded-xl text-white text-center shadow-lg flex items-center justify-center"
            style={{
              opacity: 1,
              transform: "translateY(0)",
              transitionDelay: `${universities.length * 100}ms`,
            }}
          >
            <div>
              <div className="text-2xl font-bold mb-2">
                ...and more to come!
              </div>
              <div className="opacity-90">
                We're constantly expanding our network
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expectations Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-gray-800 relative">
              What We Expect From Our Scholars
            </h2>
            <div className="w-1/2 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
              Being part of our scholarship family is not just about receiving
              support—it's also about giving back.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {expectations.map((expectation, index) => (
              <ExpectationCard key={index} items={expectation} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Scholar Groups Section */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-gray-800 relative">
              Explore Our Groups
            </h2>
            <div className="w-1/2 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-600 mt-6">
              Our scholars are grouped into various teams and initiatives
            </p>
          </div>
          <div className="relative h-80 mb-8">
            {scholarGroups.map((group, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-500 ${
                  index === currentGroupIndex
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95"
                }`}
              >
                <div
                  className={`bg-gradient-to-r ${group.color} rounded-xl p-12 text-white h-full flex items-center justify-between shadow-lg`}
                >
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="bg-white/20 rounded-full p-3">
                        {group.icon}
                      </div>
                      <h3 className="text-3xl font-bold">{group.title}</h3>
                    </div>
                    <p className="text-lg leading-relaxed opacity-90">
                      {group.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center space-x-2">
            {scholarGroups.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentGroupIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentGroupIndex ? "bg-indigo-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500 to-teal-600 rounded-full px-6 py-3 mb-6">
              <Gift className="w-6 h-6 text-white" />
              <span className="text-white font-semibold">
                Support Beyond Scholarships
              </span>
            </div>
            <h2 className="text-5xl font-bold mb-6 text-gray-800 relative">
              Comprehensive Support Package
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
              After receiving the scholarship, students gain access to a range
              of opportunities for personal and professional growth
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <DialogCard
                index={index}
                key={index}
                color="before:from-green-500 before:to-teal-600"
                iconColor="text-green-500"
                Icon={CheckCircle}
                text={benefit}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Apply Section */}
      <section
        id="apply"
        className="bg-gradient-to-br from-indigo-500 via-purple-600 to-indigo-700 py-20"
      >
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-white relative">
              Ready to Apply?
            </h2>
            <p className="text-xl text-white/90 mb-8 mx-auto">
              Learn more about our application process and selection procedure,
              eligibility criteria
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {cards.map((card, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 relative overflow-hidden transition-all duration-300 before:absolute before:top-0 before:left-0 before:w-full before:h-1 before:bg-gradient-to-r before:from-indigo-500 before:to-purple-600 text-center hover:shadow-xl hover:-translate-y-1"
              >
                <div className="w-16 h-16 mb-6 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white mx-auto">
                  <card.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600">{card.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-12 py-5 text-xl font-bold rounded-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 mr-4">
              Start Application
            </button>
            <button className="bg-white text-indigo-600 px-12 py-5 text-xl font-bold rounded-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              Learn More
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
