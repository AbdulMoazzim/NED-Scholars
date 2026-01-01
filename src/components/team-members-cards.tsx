"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Briefcase, Mail } from "lucide-react";
import { TeamMembersData } from "@/lib/types";


export default function TeamMembersComponent({
  data,
  path,
  slice,
}: {
  data: TeamMembersData;
  path: string;
  slice?: number;
}) {
  if (data.error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-600 text-lg">
          Error Occurred during Fetching Team Members
        </p>
      </div>
    );
  }

  if (data.data) {
    // Slice the data if slice prop is provided
    const displayData = slice ? data.data.slice(0, slice) : data.data;

    return (
      <div
        className={`min-h-screen px-4 ${
          path === "/about" ? "bg-transparent" : "bg-gradient-to-br from-[#B0A3B3]/10 via-white to-[#82B4CC]/10"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className={`text-center mb-16 ${path === "/about/team" ? "py-8" : ""}`}>
            <h1 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Meet Our Team
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[#1164A3] to-[#68B9C4] mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Dedicated professionals working together to make a difference
            </p>
          </div>

          {/* Team Members Grid */}
          {data && data.data.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
              {displayData.map((member, index) => {
                // Extract plain text from HTML bio for preview
                const plainBio = (member.bio || "")
                  .replace(/<[^>]*>/g, " ")
                  .replace(/\s+/g, " ")
                  .trim();

                return (
                  <Card
                    key={member.id || index}
                    className="group hover:shadow-2xl hover:border-[#1164A3] transition-all duration-500 cursor-pointer transform hover:-translate-y-3 overflow-hidden py-0" 
                  >
                    <CardContent className="p-0 h-full flex flex-col">
                      {/* Image Section */}
                      <div className="relative overflow-hidden bg-gradient-to-br from-[#1164A3] to-[#68B9C4] h-64">
                        {member.images && member.images.length > 0 ? (
                          <img
                            src={member.images[0].url}
                            alt={member.images[0].alt || member.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <span className="text-8xl font-bold text-white opacity-80">
                              {member.name.charAt(0)}
                            </span>
                          </div>
                        )}
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      </div>

                      {/* Content Section */}
                      <div className="p-6 flex-1 flex flex-col justify-between">
                        <div>
                          {/* Name */}
                          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#1164A3] transition-colors duration-300">
                            {member.name}
                          </h3>

                          {/* Position */}
                          {member.position && (
                            <div className="flex items-center gap-2 mb-2">
                              <Briefcase className="w-4 h-4 text-[#1164A3]" />
                              <p className="text-sm text-[#1164A3] font-medium">
                                {member.position}
                              </p>
                            </div>
                          )}


                          {/* Bio Preview */}
                          {plainBio && (
                            <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                              {plainBio.slice(0, 120)}
                              {plainBio.length > 120 ? "..." : ""}
                            </p>
                          )}
                        </div>

                        {/* Contact Links */}
                        <div className="flex flex-col items-start gap-3 mb-4">
                          {member.email && (
                            <div
                              className="p-2 flex justify-between rounded-full bg-[#82B4CC]/20 text-[#1164A3] hover:bg-[#82B4CC]/30 transition-colors duration-300"
                            >
                              <Mail />
                              <span className="text-sm pl-2">{member.email}</span>
                            </div>
                          )}
                          {member.phone && (
                            <div
                              className="p-2 flex justify-between rounded-full bg-[#82B4CC]/20 text-[#1164A3] hover:bg-[#82B4CC]/30 transition-colors duration-300"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                              </svg>
                              <span className="text-sm pl-2">{member.phone}</span>
                            </div>
                          )}
                        </div>

                        {/* View Profile Button */}
                        <Link href={`/about/team/${member.slug}`}>
                          <Button className="w-full bg-gradient-to-r from-[#1164A3] to-[#68B9C4] hover:from-[#68B9C4] hover:to-[#82B4CC] text-white">
                            View Profile
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
              <p className="text-gray-600 text-lg">
                No team members available yet.
              </p>
            </div>
          )}
        </div>

        {/* View More Button */}
        {path !== "/about/team" && data.data && data.data.length > (slice || 0) && (
          <div className="w-full text-center my-8">
            <Link href="/about/team">
              <Button className="bg-gradient-to-r from-[#1164A3] to-[#68B9C4] hover:from-[#68B9C4] hover:to-[#82B4CC] text-white px-8 py-3">
                View All Team Members
              </Button>
            </Link>
          </div>
        )}
      </div>
    );
  }

  return null;
}