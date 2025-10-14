"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { successStories } from "@/data/SuccessStories";
import Link from "next/link";
import { useState } from "react";

export default function SuccessStories() {
  const [showAll, setShowAll] = useState(false);

  const displayedStories = showAll
    ? successStories
    : successStories.slice(0, 6);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Success Stories
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Inspiring journeys of our scholars who transformed their dreams into
            reality through dedication, perseverance, and the power of
            education.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedStories.map((story, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-3 hover:scale-105 overflow-hidden"
            >
              <CardContent className="p-8">
                {/* Avatar Section */}
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {story.image}
                  </div>
                </div>

                {/* Name and Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center group-hover:text-gray-600 transition-colors duration-300">
                  {story.name}
                </h3>

                {/* Preview Content */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-4">
                  {story.content.slice(0, 150)}...
                </p>

                {/* Read More Button */}
                <div className="flex justify-center">
                  <Link href={`/scholars/success-stories/${story.slug}`}>
                    <Button className="hover:bg-gray-600">
                      Read Story
                      <svg
                        className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Show More/Less Button */}
        {successStories.length > 6 && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full hover:from-blue-600 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {showAll
                ? "Show Less"
                : `View All ${successStories.length} Stories`}
              <svg
                className={`ml-2 w-5 h-5 transition-transform duration-300 ${
                  showAll ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
        )}

        
      </div>
    </div>
  );
}
