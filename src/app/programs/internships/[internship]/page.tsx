import InternshipDetailPage from "@/components/internship-details-page";

export default async function InternshipDetailPageWrapper({
  params,
}: {
  params: Promise<{ internship: string }>;
}) {
  const resolvedParams = await params;
  const slug = resolvedParams.internship;

  return <InternshipDetailPage slug={slug} />;
}
