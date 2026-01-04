import ELearningPage from "@/components/elearning"
import { auth } from "@/lib/auth"
import { headers } from "next/headers"
import { redirect } from "next/navigation"

export default async function page() {
  const requestHeaders = new Headers(await headers())
  
    const session = await auth.api.getSession({
      headers: requestHeaders
    })
  
    if (!session) {
      redirect("/auth")
    }
  return (
    <ELearningPage />
  )
}
