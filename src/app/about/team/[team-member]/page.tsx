import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Briefcase, Mail, Award, Trash2, Edit } from "lucide-react";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { DeleteMember, GetMember } from "@/app/actions/team-member";
import { headers } from "next/headers";


export default async function Page({ params }: { params: { "team-member": string } }) {
  const webParams = await params;
  const slug = webParams["team-member"];
  console.log(slug)
  const { data: member} = await GetMember(slug);
  const requestHeaders = new Headers(await headers())
  
    const session = await auth.api.getSession({
      headers: requestHeaders
    })

  if (!member) {
    notFound();
  }
  // Server Action for Delete
  async function deleteTeamMember() {
    "use server";
    if (member) {
        try {
          await DeleteMember(member.id);
        } catch (error) {
          console.error("Error deleting team member:", error);
          return;
        }
        revalidatePath("");
        redirect("/about/team");
    }
  }

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
              {/* Profile Image/Avatar */}
              <div className="flex-shrink-0">
                {member.images && member.images.length > 0 ? (
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-2xl ring-4 ring-white/50">
                    <img
                      src={member.images[0].url}
                      alt={member.images[0].alt || member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-32 h-32 md:w-40 md:h-40 bg-white rounded-full flex items-center justify-center shadow-2xl ring-4 ring-white/50">
                    <span className="text-6xl font-bold text-[#1164A3]">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                )}
              </div>

              {/* Name and Info */}
              <div className="text-center md:text-left text-white flex-1">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                  {member.name}
                </h1>

                {/* Info Pills */}
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  {member.position && (
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                      <Briefcase className="w-4 h-4" />
                      <span className="font-medium">{member.position}</span>
                    </div>
                  )}
                  {member.expertise && (
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-md"  dangerouslySetInnerHTML={{ __html: member.expertise }}>
                    </div>
                  )}
                </div>

                {/* Contact Links */}
                <div className="flex gap-3 justify-center md:justify-start mt-4">
                  {member.email && (
                    <div
                      className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/30 transition-colors duration-300"
                    >
                      <Mail className="w-4 h-4" />
                      <span className="font-medium">{member.email}</span>
                    </div>
                  )}
                  {member.phone && (
                    <div
                      className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/30 transition-colors duration-300"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="font-medium">{member.phone}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Admin Action Buttons */}
          {session?.user.role === "admin" ? (
            <div className="px-8 py-4 md:px-16 bg-gray-100 border-b border-gray-200">
              <div className="flex items-center justify-end gap-3">
                <Link href={`/edit/team-member/${member.slug}`}>
                  <Button
                    variant="outline"
                    className="flex items-center gap-2 border-[#1164A3] text-[#1164A3] hover:bg-[#1164A3] hover:text-white"
                  >
                    <Edit className="w-4 h-4" />
                    Update Team Member
                  </Button>
                </Link>
                <form action={deleteTeamMember}>
                  <Button
                    type="submit"
                    variant="destructive"
                    className="flex items-center gap-2 bg-red-600 hover:bg-red-700"
                  >
                    <Trash2 className="w-4 h-4" />
                    Delete Team Member
                  </Button>
                </form>
              </div>
            </div>
          ) : null}

          {/* Bio Content */}
          <div className="px-8 py-12 md:px-16">
            {/* Bio HTML Content */}
            {member.bio && (
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
                  prose-a:text-[#1164A3] prose-a:no-underline hover:prose-a:underline"
                dangerouslySetInnerHTML={{ __html: member.bio }}
              />
            )}

            {/* Achievements Section (if available) */}
            {member.achievements && (
              <div className="mt-12 p-8 bg-gradient-to-r from-[#68B9C4]/20 to-[#82B4CC]/20 rounded-2xl border-l-4 border-[#68B9C4]">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Award className="w-6 h-6 text-[#68B9C4]" />
                  Achievements & Recognition
                </h3>
                <div
                  className="prose prose-lg max-w-none prose-p:text-gray-700 prose-p:leading-relaxed
                    prose-ul:my-4 prose-ul:list-disc prose-ul:pl-6
                    prose-ol:my-4 prose-ol:list-decimal prose-ol:pl-6
                    prose-li:text-gray-700 prose-li:mb-2
                    prose-strong:text-gray-900 prose-strong:font-semibold"
                  dangerouslySetInnerHTML={{ __html: member.achievements }}
                />
              </div>
            )}

            {/* Videos Section (if available) */}
            {member.videos && member.videos.length > 0 && (
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Featured Videos
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {member.videos.map((video) => (
                    <div
                      key={video.id}
                      className="aspect-video rounded-xl overflow-hidden shadow-lg border-2 border-[#82B4CC]/30 hover:border-[#1164A3] transition-colors"
                    >
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
            {member.youtubeUrls && member.youtubeUrls.length > 0 && (
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Watch on YouTube
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {member.youtubeUrls.map((url, index) => {
                    console.log(url.url)
                    return (
                      <div
                        key={index}
                        className="aspect-video rounded-xl overflow-hidden shadow-lg border-2 border-[#82B4CC]/30 hover:border-[#1164A3] transition-colors"
                      >
                        <iframe
                          width="100%"
                          height="100%"
                          src={url.url}
                          title={`YouTube video ${index + 1}`}
                        ></iframe>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Additional Images Gallery (if more than one) */}
            {member.images && member.images.length > 1 && (
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Photo Gallery
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {member.images.slice(1).map((image) => (
                    <div
                      key={image.id}
                      className="aspect-square rounded-xl overflow-hidden shadow-lg border-2 border-[#82B4CC]/30 hover:border-[#1164A3] hover:scale-105 transition-all duration-300"
                    >
                      <img
                        src={image.url}
                        alt={image.alt || "Gallery image"}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer Section */}
          <div className="px-8 py-8 md:px-16 bg-gradient-to-r from-[#82B4CC]/10 to-[#B0A3B3]/10 border-t border-[#82B4CC]/30">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#82B4CC]/20 text-[#1164A3] font-medium">
                  Team Member
                </span>
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#68B9C4]/20 text-[#1164A3] font-medium">
                  NED Scholars
                </span>
              </div>
              <Link href="/about/team">
                <Button className="bg-gradient-to-r from-[#1164A3] to-[#68B9C4] hover:from-[#68B9C4] hover:to-[#82B4CC] text-white px-6">
                  View More Team Members
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