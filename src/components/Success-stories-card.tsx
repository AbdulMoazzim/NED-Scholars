
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SuccessStoriesData } from "@/lib/types";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
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
      <div
        className={`py-[50px] px-4 ${path === "/save-a-child" ? "bg-transparent" : "bg-gradient-to-br from-[#B0A3B3]/10 via-white to-[#82B4CC]/10"}`}
      >
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div
            className={`text-center mb-16 ${path === "/scholars/scholarships" ? "py-8" : ""}`}
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Success Stories
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[#1164A3] to-[#68B9C4] mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Meet some of our amazing scholars who are making a difference in
              the world
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
                    className="bg-[#82B4CC]/20 border-[#82B4CC]/30 overflow-hidden hover:shadow-xl transition-all group"
                  >
                    {story.images && story.images.length > 0 ? (
                      <div className="relative">
                        <Image
                          width={200}
                          height={200}
                          src={story.images[0].url}
                          alt={story.images[0].alt || story.studentName}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="m-auto w-20 h-20 bg-gradient-to-r from-[#1164A3] to-[#68B9C4] rounded-full flex items-center justify-center text-3xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                        {story.studentName.charAt(0)}
                      </div>
                    )}
                    <CardContent className="p-6">
                      <div>
                        {/* Name and Position */}
                        <h3 className="text-xl font-bold text-gray-900 mb-2 text-center group-hover:text-[#1164A3] transition-colors duration-300">
                          {story.studentName}
                        </h3>

                        {story.currentPosition && (
                          <p className="text-sm text-[#1164A3] font-medium mb-3 text-center">
                            {story.currentPosition}
                          </p>
                        )}

                        {story.year && (
                          <p className="text-xs text-gray-500 mb-4 text-center">
                            Batch {story.year}
                          </p>
                        )}

                        <div className="flex justify-between gap-3.5">
                          {/* Preview Content */}
                          <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-4 w-[85%]">
                            {plainText.slice(0, 150)}...
                          </p>
                          <div className="w-[10%]">
                          <Link href={`/scholars/success-stories/${story.slug}`}
                            className="rounded-full bg-gray-800 hover:bg-gray-700 text-white w-[40px] h-[40px] flex justify-center items-center cursor-pointer"
                            
                          >
                            <ArrowRight className="w-5 h-5" />
                          </Link>
                          </div>
                        </div>
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
          <div className="w-full text-center mt-8">
            <Button className="bg-gradient-to-r from-[#1164A3] to-[#68B9C4] hover:from-[#68B9C4] hover:to-[#82B4CC] text-white">
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
