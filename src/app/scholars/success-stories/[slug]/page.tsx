import { Button } from "@/components/ui/button";
import { successStories } from "@/data/SuccessStories";
import { SuccessStory } from "@/lib/types";
import { notFound } from "next/navigation";

// Mock fetch function - replace with your actual API call
const fetchStoryData = async (slug: string): Promise<SuccessStory | null> => {
  try {
    // Find story by slug
    const foundStory = successStories.find((story) => story.slug === slug);

    if (!foundStory) {
      return null; // Return null instead of throwing error
    }

    return foundStory;
  } catch (err) {
    console.error("Error fetching story:", err);
    return null;
  }
};

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const story = await fetchStoryData(slug);

  // Use Next.js notFound() for proper 404 handling
  if (!story) {
    notFound();
  }

  return (
    <div className="w-4/5 m-auto mt-20">
      {/* Hero Section */}
      <div className="flex items-center space-x-6 mb-6 w-full px-8 py-10">
        <div className="w-2/5 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-4xl backdrop-blur-sm">
          {story.image}
        </div>
        <div className="flex justify-between w-3/5 items-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{story.name}</h1>
          <div className="space-x-2">
            <Button>Edit</Button>
            <Button variant={"destructive"}>Delete</Button>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="px-8 py-10">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 leading-relaxed">
          {story.heading}
        </h2>

        <div className="prose prose-lg max-w-none">
          <div className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">
            {story.content}
          </div>
        </div>

        {/* Tags or Metadata */}
        <div className="mt-10 pt-8 border-t border-gray-200">
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center space-x-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800">
                Success Story
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-800">
                NED Scholars
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
