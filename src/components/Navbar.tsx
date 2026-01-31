

import {  menuItems, ScholarshipData } from "@/data/LinksData";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export default function Navbar({
  setTransition,
  menuIndex,
  transition
}: {
  menuIndex: {current: number};
  setTransition: (str: string) => void;
  transition: string;
}) {
  return (

        <ul className="hidden lg:flex items-center justify-center gap-6 h-[100px]">
          {menuItems.slice(0, menuItems.length).map((item, index) => (
            <li
              key={index}
              onMouseEnter={() => {
                setTransition("scale-y-100 perspective-[300px] origin-top translate-z-[30px]")
                menuIndex.current = index;
              }}
              onMouseLeave={()=> {
                setTransition("scale-y-0 translate-z-0")
              }}

              className={`cursor-pointer flex items-center h-full text-black hover:text-gray-500`}
            >
              <p  className="text-[16px]">{item.title}</p>
              <ChevronDown className={`${menuIndex.current === index ? "rotate-[-180deg]": `rotate-0`} inline-block h-4 w-4 ml-1 duration-400 transition`} />
            <div
          className={`hidden ${transition} lg:flex top-[100px] text-sm text-white absolute z-50 bg-[#0062A1] shadow-lg origin-top transition-transform duration-300 ease-in-out`}
          onMouseLeave={() => {
            setTransition("scale-y-0 translate-z-0")
          }}
        >
            <div className="flex flex-col">
              {index === menuIndex.current && menuItems[menuIndex.current].subItems!.map((link, index) => {
                return (
                  <Link key={index} href={link.href} className="text-[16px]">
                    <div
                      className="w-full py-2 px-3 hover:bg-[#F5F5F5] hover:text-black transition-colors"
                    >
                      {link.title}
                    </div>
                  </Link>
                );
              })}
            </div>
            {index === menuIndex.current && menuItems[menuIndex.current].subItems![0].title=== "Scholarship" && (
              <div>
                {ScholarshipData.map((link, index) => {
                  return (
                    <div
                      className="py-2 px-3 hover:bg-[#F5F5F5] hover:text-black transition-colors"
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
         
            </li>
          ))}
            
        </ul>
  );
}