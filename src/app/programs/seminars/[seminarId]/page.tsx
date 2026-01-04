import EventDetailPage from "@/components/seminar-webinar-details-page";

export default async function SeminarDetailPage({
  params,
}: {
  params: Promise<{ seminarId: string }>;
}) {
  const resolvedParams = await params;
  const id = resolvedParams.seminarId;

  return <EventDetailPage id={id} type="seminar" />;
}