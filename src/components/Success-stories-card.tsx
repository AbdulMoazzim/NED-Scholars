import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SuccessStoriesData } from "@/lib/types";
import { ArrowRight, Star } from "lucide-react";
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
      <div className={`${
            path === "/scholars/success-stories"
            ? "bg-gradient-to-br from-[#B0A3B3]/10 via-white to-[#82B4CC]/10 min-h-screen"
              : "bg-transparent"
          }`}>
        {/* Hero Banner — only on the full success stories page */}
        {path === "/scholars/success-stories" && (
          <section className="relative bg-gradient-to-r from-[#1164A3] to-[#68B9C4] text-white py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <Badge className="mb-6 bg-white/20 text-white border-white/30 px-4 py-2 text-sm">
                  SUCCESS STORIES
                </Badge>
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  Stories of Impact
                </h1>
                <p className="text-xl md:text-2xl text-white/90 mb-4">
                  Meet some of our amazing scholars who are making a difference in the world
                </p>
                <div className="flex items-center justify-center gap-4 text-lg">
                  <Star className="w-6 h-6" />
                  <span>Scholar Achievements</span>
                  <span className="opacity-50">•</span>
                  <span>Inspiring Journeys</span>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Main Content */}
        <div
          className={`py-[50px] px-4`}
        >
          <div className="max-w-7xl mx-auto">
            {/* Header — only shown when NOT on the full stories page */}
            {path !== "/scholars/success-stories" && (
              <div
                className={`text-center mb-16 ${
                  path === "/scholars/scholarships" ? "py-8" : ""
                }`}
              >
                <h1 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                  Success Stories
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-[#1164A3] to-[#68B9C4] mx-auto mb-6 rounded-full"></div>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Meet some of our amazing scholars who are making a difference in the world
                </p>
              </div>
            )}

            {/* Stories Grid */}
            {data && data.data.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {data.data.slice(0, slice).map((story, index) => {
                  const plainText = (story.story || "")
                    .replace(/<[^>]*>/g, " ")
                    .replace(/\s+/g, " ")
                    .trim();

                  return (
                    <Card
  key={index}
  className="bg-[#82B4CC]/20 border-[#82B4CC]/30 overflow-hidden hover:shadow-xl transition-all group"
>
  {story.images && story.images.length > 0 ? (
    <div className="relative h-[350px]">
      <img
        src={story.images[0].url}
        alt={story.images[0].alt || story.studentName}
        className="h-full w-full object-cover"
      />
    </div>
  ) : (
    <div className="h-[350px] flex items-center justify-center bg-gradient-to-b from-[#1164A3]/10 to-[#68B9C4]/10">
      <div className="w-16 h-16 bg-gradient-to-r from-[#1164A3] to-[#68B9C4] rounded-full flex items-center justify-center text-2xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
        {story.studentName.charAt(0)}
      </div>
    </div>
  )}

  <CardContent className="p-4">
    <h3 className="text-base font-bold text-gray-900 mb-0.5 text-center group-hover:text-[#1164A3] transition-colors duration-300">
      {story.studentName}
    </h3>

    {story.year && (
      <p className="text-xs text-gray-500 mb-2 text-center">
        Batch {story.year}
      </p>
    )}

    <div className="flex items-center gap-3">
      <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 flex-1">
        {plainText.slice(0, 150)}...
      </p>
      <Link
        href={`/scholars/success-stories/${story.slug}`}
        className="rounded-full bg-gray-800 hover:bg-gray-700 text-white w-[36px] h-[36px] shrink-0 flex justify-center items-center cursor-pointer"
      >
        <ArrowRight className="w-4 h-4" />
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

          {path !== "/scholars/scholarships" && path !== "/scholars/success-stories" && (
            <div className="w-full text-center mt-8">
              <Button className="bg-gradient-to-r from-[#1164A3] to-[#68B9C4] hover:from-[#68B9C4] hover:to-[#82B4CC] text-white">
                <Link href="/scholars/success-stories">
                  View More Success Stories
                </Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    );
  }
}