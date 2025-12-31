
import { GetAllRemembrances } from "@/app/actions/remembrance";
import RemembranceCardsComponent from "@/components/remembrance-cards";


export default async function RemembrancePage() {
  const remembranceData = await GetAllRemembrances();
  
  if (remembranceData) {
    return (
      <RemembranceCardsComponent
        data={remembranceData}
        slice={remembranceData.data?.length ?? 0}
        path="/about/remembrance"
      />
    );
  }
}