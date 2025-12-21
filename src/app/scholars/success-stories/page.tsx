import { GetAllSuccessStories } from "@/app/actions/success-stories";
import SuccessStoriesComponent from "@/components/Success-stories-card";

export default async function SuccessStories() {
  const storiesData = await GetAllSuccessStories();
  if (storiesData) {
    return (
      <SuccessStoriesComponent
        data={storiesData}
        slice={storiesData.data?.length ?? 0}
        path="/scholars/scholarships"
      />
    );
  }
}
