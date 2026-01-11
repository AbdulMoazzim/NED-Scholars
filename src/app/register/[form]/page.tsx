import FormPage from "@/components/Form";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const dynamic = 'force-dynamic';

export default async function Page({ params }:  {params: Promise<{ form: string }> }) {

  const requestHeaders = new Headers(await headers())
  
    const session = await auth.api.getSession({
      headers: requestHeaders
    })
  
    const slug = await params;
    if (!session && (slug.form === "industrial-visit-attendee" || slug.form === "gupshup-registration" || slug.form === "course-registration")) {
      redirect("/auth")
    }
  return <FormPage form={slug.form} />;
}

// Generate static params for all form types
export async function generateStaticParams() {
  return [
    { slug: "scholarship" },
    { slug: "partner" },
    { slug: "student" },
    { slug: "mentor" },
    { slug: "volunteer" },
    { slug: "seminar-attendee" },
    { slug: "webinar-attendee" },
    { slug: "seminar-presenter" },
    { slug: "industrial-visit-attendee" },
    { slug: "internship-application" },
    { slug: "gupshup-registration" },
    { slug: "course-registration" },
  ];
}

// Metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ form: string }> }) {
  
  
  const {form} = await params;
  const titles: Record<string, string> = {
    scholarship: "Scholarship Application | NED Scholars",
    partner: "Partner Application | NED Scholars",
    student: "Student Registration | NED Scholars",
    mentor: "Mentor Application | NED Scholars",
    volunteer: "Volunteer Registration | NED Scholars",
    "seminar-attendee": "Seminar Registration | NED Scholars",
    "webinar-attendee": "Webinar Registration | NED Scholars",
    "seminar-presenter": "Seminar Presenter Application | NED Scholars",
    "industrial-visit-attendee": "Seminar Presenter Application | NED Scholars",
    "internship-application": "Internship Application | NED Scholars",
    "gupshup-registration": "GupShup Registration | NED Scholars",
    "course-registration": "Course Registration | NED Scholars",
  };

  return {
    title: titles[form] || "Form | NED Scholars",
    description: "Join NED Scholars community and make a difference",
  };
}