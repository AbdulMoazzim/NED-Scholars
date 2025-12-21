"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SuccessStoriesData } from "@/lib/types";
import Link from "next/link";


export default function SuccessStoriesComponent({
  data,
  slice,
  path,
}: {
  data: SuccessStoriesData;
  slice: number;
  path: string;
}) {
  if (data.error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-600 text-lg">
          Error Occurred during Fetching Stories
        </p>
      </div>
    );
  }
  if (data.data) {

    return (
      <div className={`min-h-screen px-4 ${path === "/save-a-child" ? "bg-transparent": "bg-gradient-to-br from-blue-50 via-white to-indigo-50"}`}>
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Success Stories
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Meet some of our amazing scholars who are making a difference in the
              world
            </p>
          </div>
      
          {/* Stories Grid */}
          {data && data.data.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {data.data.slice(0, slice).map((story, index) => {
                // Extract plain text from HTML for preview (server-safe)
                const plainText = (story.story || "")
                  .replace(/<[^>]*>/g, " ") // Remove HTML tags
                  .replace(/\s+/g, " ") // Replace multiple spaces with single space
                  .trim();
  
                return (
                  <Card
                    key={index}
                    className="group hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-3 hover:scale-105 overflow-hidden"
                  >
                    <CardContent className="p-8 h-full flex flex-col justify-between">
                      {/* Avatar/Image Section */}
                      <div className="flex justify-center mb-6">
                        {story.images && story.images.length > 0 ? (
                          <div className="w-20 h-20 rounded-full overflow-hidden shadow-lg group-hover:scale-110 transition-transform duration-300">
                            <img
                              src={story.images[0].url}
                              alt={story.images[0].alt || story.studentName}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ) : (
                          <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-3xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                            {story.studentName.charAt(0)}
                          </div>
                        )}
                      </div>
                      <div>
                        {/* Name and Position */}
                        <h3 className="text-xl font-bold text-gray-900 mb-2 text-center group-hover:text-indigo-600 transition-colors duration-300">
                          {story.studentName}
                        </h3>
  
                        {story.currentPosition && (
                          <p className="text-sm text-indigo-600 font-medium mb-3 text-center">
                            {story.currentPosition}
                          </p>
                        )}
  
                        {story.year && (
                          <p className="text-xs text-gray-500 mb-4 text-center">
                            Batch {story.year}
                          </p>
                        )}
  
                        {/* Preview Content */}
                        <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-4">
                          {plainText.slice(0, 150)}...
                        </p>
  
                      </div>
  
  
                      {/* Read More Button */}
                      <div className="flex justify-center">
                        <Link href={`/scholars/success-stories/${story.slug}`}>
                          <Button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white">
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
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                No success stories available yet.
              </p>
            </div>
          )}
        </div>
        {path !== "/scholars/scholarships" ? (
          <div className="w-full text-center my-8">
            <Button>
              <Link href="/scholars/success-stories">
                View More Success Stories
              </Link>
            </Button>
          </div>
        ) : null}
      </div>
    );
  }
}
