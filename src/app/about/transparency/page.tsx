import { GetAllTransparencyFiles } from "@/app/actions/transparency";
import TransparencyPage from "@/components/TransparencyPage";

export default async function Page() {
  const result = await GetAllTransparencyFiles();
  if (!result.success || !result.data) return null;
  return <TransparencyPage initialData={result.data} />;
}