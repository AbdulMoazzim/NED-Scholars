import FormPage from "@/components/Form";


export default async function Page({ params }: { params: { form: string } }) {
  const slug = await params;
  return <FormPage params={slug} />;
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
  ];
}

// Metadata for SEO
export async function generateMetadata({ params }: { params: { form: string } }) {
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
  };

  return {
    title: titles[form] || "Form | NED Scholars",
    description: "Join NED Scholars community and make a difference",
  };
}