import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function notfound() {
  return (
    <div className="w-full">
      <div className="mx-auto py-20 w-1/2 text-center">
        <h1 className="font-bold text-5xl pb-5 text-[#1164A3]">Not Found</h1>
        <p className="text-gray-600 text-lg">The story you are accessing, is not found!</p>
        <Link href="/scholars/success-stories" className="cursor-pointer">
          <Button className="my-8 bg-gradient-to-r from-[#1164A3] to-[#68B9C4] hover:from-[#1164A3]/90 hover:to-[#68B9C4]/90 text-white">
            Back to Stories
          </Button>
        </Link>
      </div>
    </div>
  );
}