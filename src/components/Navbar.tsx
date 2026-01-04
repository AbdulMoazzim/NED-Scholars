"use client";

import { menuItems } from "@/data/LinksData";
import { SubLinkItem } from "@/lib/types";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export default function Navbar({
  title,
  setSubHeader,
}: {
  title: string;
  setSubHeader: (item: SubLinkItem) => void;
}) {
  return (
        <ul className="hidden lg:flex items-center justify-center gap-6 h-full">
          {menuItems.slice(0, menuItems.length-1).map((item, index) => (
            <li
              key={index}
              onMouseEnter={() => {
                setSubHeader(item);
              }}
              onMouseLeave={() => {
                setSubHeader({ title: "", href: "", subItems: [] });
              }}
              className={`cursor-pointer flex items-center h-full text-black ${
                title !== item.title ? `text-gray-500` : `text-black`
              }`}
            >
              <p  className="text-[16px]">{item.title}</p>
              <ChevronDown className={`${title === item.title ? "rotate-[-180deg]": `rotate-0`} inline-block h-4 w-4 ml-1 duration-400 transition`} />
            </li>
          ))}
            <li
              className={`cursor-pointer flex items-center h-full text-black 
                text-gray-500 hover:text-black
              `}
            >
              <Link href="/donation"  className="text-[16px]">Donate Now</Link>
            </li>
        </ul>
  );
}
