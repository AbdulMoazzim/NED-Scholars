import EventDetailPage from "@/components/seminar-webinar-details-page";

export default async function WebinarDetailPage({
  params,
}: {
  params: Promise<{ webinarId: string }>;
}) {
  const resolvedParams = await params;
  const id = resolvedParams.webinarId;

  return <EventDetailPage id={id} type="webinar" />;
}