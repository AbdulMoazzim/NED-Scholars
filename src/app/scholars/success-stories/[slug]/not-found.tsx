import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function notfound() {
  return (
    <div className="w-full">
      <div className="mx-auto py-20 w-1/2 text-center">
        <h1 className="font-bold text-5xl pb-5">Not Found</h1>
        <p>The story you are accessing, is not found!</p>
        <Link href="/scholars/success-stories" className="cursor-pointer">
          <Button className="my-8">Back to Stories</Button>
        </Link>
      </div>
    </div>
  );
}
