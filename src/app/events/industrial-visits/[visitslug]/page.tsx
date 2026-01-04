import IndustrialVisitDetailPage from "@/components/industrial-visit-detail-page";


export default async function Page({ params }: { params: Promise<{ "visitslug": string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams["visitslug"];

  return <IndustrialVisitDetailPage slug={slug} />;
}