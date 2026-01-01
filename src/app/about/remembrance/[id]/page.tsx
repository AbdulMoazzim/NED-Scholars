import { Button } from "@/components/ui/button";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Heart, Trash2, Edit, Image as ImageIcon } from "lucide-react";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { DeleteRemembrance, GetRemembrance } from "@/app/actions/remembrance";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { imageData } from "@/lib/types";


export default async function RemembranceDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const {data, success, error} = await GetRemembrance(id);
  const requestHeaders = new Headers(await headers())
  
    const session = await auth.api.getSession({
      headers: requestHeaders
    })

  if (error && !success) {
    notFound();
  }

  // Server Action for Delete
  async function deleteRemembrance() {
    "use server";
    if (data) {
      try {
        await DeleteRemembrance(data.id);
      } catch (error) {
        console.error("Error deleting remembrance:", error);
        return;
      }
      revalidatePath("/about/remembrance");
      redirect("/about/remembrance");
    }
  }
  if (data) {

    return (
      <div className="min-h-screen bg-gradient-to-br from-[#B0A3B3]/10 via-white to-[#82B4CC]/10">
        {/* Hero Section */}
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Header with Gradient Background */}
            <div className="bg-gradient-to-r from-[#1164A3] to-[#68B9C4] px-8 py-16 md:px-16 relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
  
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                {/* Profile Image/Heart Icon */}
                <div className="flex-shrink-0">
                  {data.images && data.images.length > 0 ? (
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-2xl ring-4 ring-white/50">
                      <img
                        src={data.images[0].url}
                        alt={
                          data.images[0].alt || "Remembrance photo"
                        }
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-32 h-32 md:w-40 md:h-40 bg-white rounded-full flex items-center justify-center shadow-2xl ring-4 ring-white/50">
                      <Heart className="w-16 h-16 text-[#1164A3] fill-[#1164A3]" />
                    </div>
                  )}
                </div>
  
                {/* Title */}
                <div className="text-center md:text-left text-white flex-1">
                  <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                    In Loving Memory
                  </h1>
                  <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                      <Heart className="w-4 h-4 fill-white" />
                      <span className="font-medium">Forever Remembered</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Admin Action Buttons */}
           {session?.user.role === "admin" ? (
            <div className="px-8 py-4 md:px-16 bg-gray-100 border-b border-gray-200">
              <div className="flex items-center justify-end gap-3">
                <Link href={`/edit/remembrance/${data.id}`}>
                  <Button
                    variant="outline"
                    className="flex items-center gap-2 border-[#1164A3] text-[#1164A3] hover:bg-[#1164A3] hover:text-white"
                  >
                    <Edit className="w-4 h-4" />
                    Update Remembrance
                  </Button>
                </Link>
                <form action={deleteRemembrance}>
                  <Button
                    type="submit"
                    variant="destructive"
                    className="flex items-center gap-2 bg-red-600 hover:bg-red-700"
                  >
                    <Trash2 className="w-4 h-4" />
                    Delete Remembrance
                  </Button>
                </form>
              </div>
            </div>
          ) : null}
  
            {/* Description Content */}
            <div className="px-8 py-12 md:px-16">
              {/* Description HTML Content */}
              {data.description && (
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
                    prose-a:text-[#1164A3] prose-a:no-underline hover:prose-a:underline
                    prose-blockquote:border-l-4 prose-blockquote:border-[#1164A3] prose-blockquote:pl-4 prose-blockquote:italic"
                  dangerouslySetInnerHTML={{ __html: data.description }}
                />
              )}
  
              {/* Photo Gallery (if multiple images) */}
              {data.images && data.images.length > 1 && (
                <div className="mt-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <ImageIcon className="w-6 h-6 text-[#1164A3]" />
                    Photo Memories
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {data.images.slice(1).map((image: imageData, index: number) => (
                      <div
                        key={index}
                        className="aspect-square rounded-xl overflow-hidden shadow-lg border-2 border-[#82B4CC]/30 hover:border-[#1164A3] hover:scale-105 transition-all duration-300"
                      >
                        <img
                          src={image.url}
                          alt={image.alt || "Memory photo"}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
  
              {/* All Images Gallery (show all if only one image exists) */}
              {data.images && data.images.length > 0 && data.images.slice(1).map((image: imageData, index: number) => (
                <div className="mt-12" key={index}>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <ImageIcon className="w-6 h-6 text-[#1164A3]" />
                    Photo Memory
                  </h3>
                  <div className="max-w-2xl mx-auto">
                    <div className="aspect-video rounded-xl overflow-hidden shadow-lg border-2 border-[#82B4CC]/30">
                      <img
                        src={image.url}
                        alt={image.alt || "Memory photo"}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
  
            {/* Footer Section */}
            <div className="px-8 py-8 md:px-16 bg-gradient-to-r from-[#82B4CC]/10 to-[#B0A3B3]/10 border-t border-[#82B4CC]/30">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#82B4CC]/20 text-[#1164A3] font-medium">
                    <Heart className="w-4 h-4 fill-[#1164A3]" />
                    In Memoriam
                  </span>
                  <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#68B9C4]/20 text-[#1164A3] font-medium">
                    Forever in Our Hearts
                  </span>
                </div>
                <Link href="/remembrance">
                  <Button className="bg-gradient-to-r from-[#1164A3] to-[#68B9C4] hover:from-[#68B9C4] hover:to-[#82B4CC] text-white px-6">
                    View More Tributes
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
}