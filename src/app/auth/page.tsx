import { LoginForm } from "@/components/login-form"
import { auth } from "@/lib/auth"
import { headers } from "next/headers"
import { redirect } from "next/navigation"

export default async function LoginPage() {
  const requestHeaders = new Headers(await headers())

  const session = await auth.api.getSession({
    headers: requestHeaders
  })

  if (session) {
    redirect("/")
  }

  return (
    <div className="bg-muted flex h-[70vh] flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <LoginForm />
      </div>
    </div>
  )
}
