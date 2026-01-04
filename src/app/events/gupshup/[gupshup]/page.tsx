import GupShupDetailPage from "@/components/gupshup-details-page";

export default async function GupShupDetailPageWrapper({
  params,
}: {
  params: Promise<{ gupshup: string }>;
}) {
  const resolvedParams = await params;
  const slug = resolvedParams.gupshup;

  return <GupShupDetailPage slug={slug} />;
}