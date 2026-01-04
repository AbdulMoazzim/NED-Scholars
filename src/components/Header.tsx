"use client";

import { useState } from "react";
import Navbar from "./Navbar";
import SubNavbar from "./SubNavbar";
import { SubLinkItem } from "@/lib/types";
import MobileHeader from "./MobileHeader";
import {  Menu, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { useSession } from "@/lib/auth-client";
import MyUser from "./MyUser";
import Link from "next/link";
import Image from "next/image";
import Icon from "../../public/logo.png";

export default function Header() {
  const [subHeader, setSubHeader] = useState<SubLinkItem>({
    title: "",
    href: "",
    subItems: [],
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState<string>("");
  const [expandedSubItem, setExpandedSubItem] = useState<string>("");
  const path = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      setExpandedItem("");
      setExpandedSubItem("");
    }
  };
  const router = useRouter();
  
  const session = useSession();

  return (
    <>
    <div className="h-[100px] flex justify-between px-6 lg:justify-around w-full items-center fixed top-0 z-50 bg-white">
      <div
            className="flex items-center space-x-3"
            onClick={() => {
              router.push("/");
            }}
          >
            <Image src={Icon} width={50} height={50} alt="icon"/>
          </div>


            <Navbar title={subHeader.title} setSubHeader={setSubHeader} />
            <SubNavbar
              setSubHeader={setSubHeader}
              subLinks={subHeader.subItems || []}
              title={subHeader.title}
            />

          {/* Mobile Header - visible only on mobile */}
          <div className="block lg:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
            <MobileHeader
              expandedItem={expandedItem}
              expandedSubItem={expandedSubItem}
              isMenuOpen={isMenuOpen}
              setExpandedItem={setExpandedItem}
              setExpandedSubItem={setExpandedSubItem}
              toggleMenu={toggleMenu}
            />
          </div>

          {session.data?.user.role === "admin" ? (
            <Link className="hover:text-black text-gray-500" href="/admin-portal">Admin Portal</Link>
          ) : null
          }
          {session.data ? ((path !== "/auth") &&<MyUser />) :
          ((path !== "/auth") &&

            <div>
              <Button className="px-6 rounded-3xl bg-[#1164A3] hover:bg-[#0d4d82]" onClick={() => router.push("/auth")}>Log In</Button>
            </div>
          )
          }
          
    </div>

      <div
        className={`hidden lg:block ${
          subHeader.title &&
          "w-full h-screen fixed bg-[#CCCCCC] opacity-[0.7] z-49"
        }`}
      ></div>
    </>
  );
}
