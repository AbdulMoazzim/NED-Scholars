import { GetAllMembers } from "@/app/actions/team-member";
import TeamMembersComponent from "@/components/team-members-cards";

export default async function SuccessStories() {
  const storiesData = await GetAllMembers();
  if (storiesData) {
    return (
      <TeamMembersComponent
        data={storiesData}
        slice={storiesData.data?.length ?? 0}
        path="/about/team"
      />
    );
  }
}
