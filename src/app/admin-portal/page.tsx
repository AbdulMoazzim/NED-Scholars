import AdminPortal from '@/components/admin-portal-component'
import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function page() {
  const requestHeaders = new Headers(await headers())
  
    const session = await auth.api.getSession({
      headers: requestHeaders
    })
  
    if (session?.user.role !== "admin") {
      redirect("/")
    }
  
  return (
    <AdminPortal />
  )
}
