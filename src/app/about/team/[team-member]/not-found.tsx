import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function notfound() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-[#B0A3B3]/10 via-white to-[#82B4CC]/10 flex items-center justify-center">
      <div className="mx-auto py-20 w-full max-w-2xl px-4 text-center">
        <div className="bg-white rounded-2xl shadow-xl p-12 border border-[#82B4CC]/30">
          <div className="w-24 h-24 bg-gradient-to-r from-[#1164A3] to-[#68B9C4] rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h1 className="font-bold text-5xl pb-5 text-gray-900">Not Found</h1>
          <p className="text-lg text-gray-600 mb-8">The team member you are accessing could not be found!</p>
          <Link href="/about/team" className="cursor-pointer">
            <Button className="my-4 bg-gradient-to-r from-[#1164A3] to-[#68B9C4] hover:from-[#68B9C4] hover:to-[#82B4CC] text-white px-8 py-3">
              Back to Team Members
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}