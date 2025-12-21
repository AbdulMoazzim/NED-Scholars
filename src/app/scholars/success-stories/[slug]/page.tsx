import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/auth";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Briefcase, Calendar, Award } from "lucide-react";

// Fetch function
const fetchStoryData = async (slug: string) => {
  try {
    const story = await prisma.successStory.findFirst({
      where: {
        slug,
      },
      include: {
        images: true,
        videos: true,
        youtubeUrls: true
      },
    });

    if (!story) {
      return null;
    }

    return story;
  } catch (err) {
    console.error("Error fetching story:", err);
    return null;
  }
};

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const story = await fetchStoryData(slug);

  if (!story) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Header with Gradient Background */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 px-8 py-16 md:px-16 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              {/* Profile Image/Avatar */}
              <div className="flex-shrink-0">
                {story.images && story.images.length > 0 ? (
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-2xl ring-4 ring-white/50">
                    <img
                      src={story.images[0].url}
                      alt={story.images[0].alt || story.studentName}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-32 h-32 md:w-40 md:h-40 bg-white rounded-full flex items-center justify-center shadow-2xl ring-4 ring-white/50">
                    <span className="text-6xl font-bold text-blue-600">
                      {story.studentName.charAt(0)}
                    </span>
                  </div>
                )}
              </div>

              {/* Name and Info */}
              <div className="text-center md:text-left text-white flex-1">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                  {story.studentName}
                </h1>

                {/* Info Pills */}
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  {story.currentPosition && (
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                      <Briefcase className="w-4 h-4" />
                      <span className="font-medium">{story.currentPosition}</span>
                    </div>
                  )}
                  {story.company && (
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                      <Award className="w-4 h-4" />
                      <span className="font-medium">{story.company}</span>
                    </div>
                  )}
                  {story.year && (
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                      <Calendar className="w-4 h-4" />
                      <span className="font-medium">Batch {story.year}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Story Content */}
          <div className="px-8 py-12 md:px-16">
            {/* Story HTML Content */}
            <div 
              className="prose prose-lg max-w-none
                prose-headings:text-gray-900 prose-headings:font-bold
                prose-h1:text-4xl prose-h1:mb-6 prose-h1:leading-tight
                prose-h2:text-3xl prose-h2:mb-5 prose-h2:mt-10
                prose-h3:text-2xl prose-h3:mb-4 prose-h3:mt-8
                prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-lg
                prose-strong:text-gray-900 prose-strong:font-semibold
                prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6
                prose-ol:my-6 prose-ol:list-decimal prose-ol:pl-6
                prose-li:text-gray-700 prose-li:mb-2 prose-li:text-lg
                prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline"
              dangerouslySetInnerHTML={{ __html: story.story }}
            />

            {/* Advice Section (if available) */}
            {story.advice && (
              <div className="mt-12 p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border-l-4 border-blue-600">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Award className="w-6 h-6 text-blue-600" />
                  Advice for Future Scholars
                </h3>
                <div 
                  className="prose prose-lg max-w-none prose-p:text-gray-700"
                  dangerouslySetInnerHTML={{ __html: story.advice }}
                />
              </div>
            )}

            {/* Impact Section (if available) */}
            {story.impact && (
              <div className="mt-8 p-8 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border-l-4 border-green-600">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Impact & Achievements
                </h3>
                <div 
                  className="prose prose-lg max-w-none prose-p:text-gray-700"
                  dangerouslySetInnerHTML={{ __html: story.impact }}
                />
              </div>
            )}

            {/* Videos Section (if available) */}
            {story.videos && story.videos.length > 0 && (
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Featured Videos
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {story.videos.map((video) => (
                    <div key={video.id} className="aspect-video rounded-xl overflow-hidden shadow-lg">
                      <video 
                        src={video.url} 
                        controls 
                        className="w-full h-full object-cover"
                      >
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* YouTube Videos (if available) */}
            {story.youtubeUrls && story.youtubeUrls.length > 0 && (
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Watch on YouTube
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {story.youtubeUrls.map((url, index) => {
                    
                    return (
                      <div key={index} className="aspect-video rounded-xl overflow-hidden shadow-lg">
                        <iframe
                          width="100%"
                          height="100%"
                          src={url.url}
                          title={`YouTube video ${index + 1}`}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full"
                        ></iframe>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Additional Images Gallery (if more than one) */}
            {story.images && story.images.length > 1 && (
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Photo Gallery
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {story.images.slice(1).map((image) => (
                    <div key={image.id} className="aspect-square rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
                      <img
                        src={image.url}
                        alt={image.alt || 'Gallery image'}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer Section */}
          <div className="px-8 py-8 md:px-16 bg-gray-50 border-t border-gray-200">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 font-medium">
                  Success Story
                </span>
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 font-medium">
                  NED Scholars
                </span>
              </div>
              <Link href="/scholars/success-stories">
                <Button className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white px-6">
                  View More Stories
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Spacing */}
      <div className="h-16"></div>
    </div>
  );
}