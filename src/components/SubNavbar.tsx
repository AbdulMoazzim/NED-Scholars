import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { SubLinkItem } from "@/lib/types";
import { ScholarshipData, NavDescriptions } from "@/data/LinksData";

export default function SubNavbar({
  setSubHeader,
  subLinks,
  title,
}: {
  subLinks: SubLinkItem[];
  title: string;
  setSubHeader: (item: SubLinkItem) => void;
}) {
  const subTitle = subLinks.length > 0 ? subLinks[0].title : "";
  const description = NavDescriptions[title] || "Explore our offerings and discover how we can support your educational journey.";
  
  return (
    <>
      {title && (
        <div
          className={`w-screen hidden lg:flex justify-between items-center text-sm text-gray-600 py-9 absolute z-50 mt-[460] h-[400px] bg-white shadow-lg`}
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
                  <Link key={index} href={link.href} className="text-[16px]">
                    <div
                      className="w-[300px] py-2 px-3 hover:bg-[#F5F5F5] rounded transition-colors"
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
                      className="w-[300px] py-2 px-3 hover:bg-[#F5F5F5] rounded transition-colors"
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
            <Card className="w-4/5 bg-[#FEF6CD] border-[#E5D9A0]">
              <CardHeader>
                <CardTitle className="text-[#333333] text-3xl">{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#555555] leading-relaxed">{description}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </>
  );
}