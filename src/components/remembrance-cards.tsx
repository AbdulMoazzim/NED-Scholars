"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Heart, Image as ImageIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { RemembranceData } from "@/lib/types";

export default function RemembranceCardsComponent({
  data,
  path,
  slice,
}: {
  data: RemembranceData;
  path: string;
  slice?: number;
}) {
  if (data.error && !data.success) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-600 text-lg">
          Error Occurred during Fetching Remembrances
        </p>
      </div>
    );
  }

  if (data.data) {
    const displayData = slice ? data.data.slice(0, slice) : data.data;

    return (
      <div className="min-h-screen">
        {/* Hero Banner Section — only on the full remembrance page */}
          <section className="relative bg-gradient-to-r from-[#1164A3] to-[#68B9C4] text-white py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <Badge className="mb-6 bg-white/20 text-white border-white/30 px-4 py-2 text-sm">
                  REMEMBRANCE
                </Badge>
                <h1 className="text-3xl md:text-6xl font-bold mb-6">
                  In Loving Memory
                </h1>
                <p className="text-lg md:text-2xl text-white/90 mb-4">
                  Honoring the lives and legacies of those who have touched our hearts
                </p>
                <div className="flex items-center justify-center gap-4 text-sm md:text-lg">
                  <Heart className="w-6 h-6" />
                  <span>Tributes & Memories</span>
                  <span className="opacity-50">•</span>
                  <span>A Place to Remember</span>
                </div>
              </div>
            </div>
          </section>

        {/* Main Content */}
        <div
          className={`px-4 ${
            path === "/remembrance"
              ? "bg-gradient-to-br from-[#B0A3B3]/10 via-white to-[#82B4CC]/10 py-12"
              : "bg-transparent"
          }`}
        >
          <div className="max-w-7xl mx-auto">

            {/* Remembrance Cards Grid */}
            {data && data.data.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-12">
                {displayData.map((remembrance, index) => {
                  const plainDescription = (remembrance.description || "")
                    .replace(/<[^>]*>/g, " ")
                    .replace(/\s+/g, " ")
                    .trim();

                  return (
                    <Card
                      key={remembrance.id || index}
                      className="group hover:shadow-2xl hover:border-[#1164A3] transition-all duration-500 transform hover:-translate-y-3 overflow-hidden py-0"
                    >
                      <CardContent className="p-0 h-full flex flex-col">
                        <div className="relative overflow-hidden bg-gradient-to-br from-[#1164A3] to-[#68B9C4] h-72">
                          {remembrance.images && remembrance.images.length > 0 ? (
                            <img
                              src={remembrance.images[0].url}
                              alt={remembrance.images[0].alt || "Remembrance photo"}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <Heart className="w-24 h-24 text-white opacity-60" />
                            </div>
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                          {remembrance.images && remembrance.images.length > 1 && (
                            <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-2">
                              <ImageIcon className="w-4 h-4 text-white" />
                              <span className="text-white text-sm font-medium">
                                {remembrance.images.length}
                              </span>
                            </div>
                          )}
                        </div>

                        <div className="p-6 flex-1 flex flex-col justify-between">
                          <div>
                            {plainDescription && (
                              <div className="mb-4">
                                <p className="text-gray-700 text-sm leading-relaxed line-clamp-4">
                                  {plainDescription.slice(0, 180)}
                                  {plainDescription.length > 180 ? "..." : ""}
                                </p>
                              </div>
                            )}
                          </div>
                          <Link href={`/about/remembrance/${remembrance.id}`}>
                            <Button className="w-full bg-gradient-to-r from-[#1164A3] to-[#68B9C4] hover:from-[#68B9C4] hover:to-[#82B4CC] text-white">
                              View Full Tribute
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
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-12">
                <Heart className="w-16 h-16 text-[#68B9C4] mx-auto mb-4" />
                <p className="text-gray-600 text-lg">No remembrances available yet.</p>
              </div>
            )}
          </div>

          {/* View More Button */}
          {path !== "/about/remembrance" &&
            data.data &&
            data.data.length > (slice || 0) && (
              <div className="w-full text-center my-8">
                <Link href="/remembrance">
                  <Button className="bg-gradient-to-r from-[#1164A3] to-[#68B9C4] hover:from-[#68B9C4] hover:to-[#82B4CC] text-white px-8 py-3">
                    View All Remembrances
                  </Button>
                </Link>
              </div>
            )}
        </div>
      </div>
    );
  }

  return null;
}