"use client";

import { footerLinks } from "@/data/Footer";
import { GraduationCap } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Footer() {
  const path = usePathname();

  if (path.startsWith("/admin-portal")) {
    return null; 
  }
  return (
      <footer className="bg-gray-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold">NED Scholars</h4>
                  <p className="text-sm text-gray-400">
                    Empowering Minds, Shaping Futures
                  </p>
                </div>
              </div>
              <p className="text-gray-400">
                Transforming lives through education and creating opportunities
                for underprivileged students to excel in STEM fields.
              </p>
            </div>

            {footerLinks.map((section, idx) => (
            <div key={idx}>
                <h5 className="font-semibold mb-4">{section.title}</h5>
                <ul className="space-y-2 text-gray-400">
                {section.links.map((link, i) => (
                    <li key={i}>
                    <a href={link.href} className="hover:text-white transition-colors">
                        {link.text}
                    </a>
                    </li>
                ))}
                </ul>
            </div>
            ))}
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 NED Scholars. All rights reserved. Building futures through
              education.
            </p>
          </div>
        </div>
      </footer>
  )
}
