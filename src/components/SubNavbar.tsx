import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { SubLinkItem } from "@/lib/types";
import { ScholarshipData } from "@/data/LinksData";

export default function SubNavbar({
  setSubHeader,
  subLinks,
  title,
  description,
}: {
  subLinks: SubLinkItem[];
  title: string;
  description: string;
  setSubHeader: (item: SubLinkItem) => void;
}) {
  const subTitle = subLinks.length > 0 ? subLinks[0].title : "";
  
  return (
    <>
      {title && (
        <div
          className={`w-screen hidden lg:flex justify-between items-center text-sm text-gray-600 py-9 absolute z-50 mt-[460] h-[400px] bg-white `}
          onMouseEnter={() => {
            setSubHeader({ title: title, href: "", subItems: subLinks });
          }}
          onMouseLeave={() => {
            setSubHeader({ title: "", href: "", subItems: [] });
          }}
        >
          <div className="flex justify-around w-1/2 ">
            <div className="flex flex-col">
              <h1 className="text-3xl text-[#333333] mb-4 px-3">{title}</h1>
              {subLinks.map((link, index) => {
                return (
                  <Link href={link.href} className="text-[16px]">
                  <div
                    className="w-[300px] py-2 px-3 hover:bg-[#F5F5F5] rounded"
                    key={index}
                  >
                      {link.title}
                  </div>
                    </Link>
                );
              })}
            </div>
            {subTitle === "Scholarship" && (
              <div>
                <h1 className="text-3xl text-[#333333] mb-4 px-3">
                  Scholarship
                </h1>
                {ScholarshipData.map((link, index) => {
                  return (
                    <div
                      className="w-[300px] py-2 px-3 hover:bg-[#F5F5F5] rounded"
                      key={index}
                    >
                      <Link href={link.href} className="text-[16px]">
                        {link.title}
                      </Link>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          <div className="w-1/2 flex justify-center items-center">
            <Card className="w-4/5 bg-[#FEF6CD]">
              <CardHeader>
                <CardTitle>{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{description}</p>
              </CardContent>
              <CardFooter className="flex-col gap-2">
                <Button variant="default" className="w-full">
                  Learn More!
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      )}
    </>
  );
}
