"use client";

import { GraduationCap, MapPin, Mail, Phone, Facebook, Instagram, Linkedin, Youtube, Github } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Footer() {
  const path = usePathname();

  if (path.startsWith("/admin-portal")) {
    return null; 
  }

  return (
    <footer className="bg-gray-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Logo and Description Section */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-bold">NED Scholars</h4>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              NED Scholars is a non-profit corporation. It operates exclusively for educational and charitable purposes within the meaning of Section 501 (c)(3) of the Internal Revenue Code.
            </p>
            <Link href="/donation" className="bg-cyan-400 hover:bg-cyan-500 text-gray-900 font-semibold px-6 py-2 rounded-full transition-colors">
              DONATE NOW
            </Link>
          </div>


          {/* Useful Links Section */}
          <div>
            <h5 className="font-semibold mb-4 text-lg">USEFUL LINKS</h5>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-white transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/services/scholarships" className="hover:text-white transition-colors">
                  Scholarship Details
                </Link>
              </li>
              <li>
                <Link href="/donation" className="hover:text-white transition-colors">
                  Donation methods
                </Link>
              </li>
            </ul>
          </div>

          {/* Address Section */}
          <div>
            <h5 className="font-semibold mb-4 text-lg">ADDRESSS</h5>
            <div className="space-y-4 text-gray-400 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p>2224 Radcliffe Drive Troy</p>
                  <p>MI 48085</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a href="mailto:admin@nedscholars.org" className="hover:text-white transition-colors">
                  admin@nedscholars.org
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a href="tel:+12487033544" className="hover:text-cyan-400 transition-colors text-cyan-400">
                  +12487033544
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section with Social Icons and Copyright */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Social Media Icons */}
            <div className="flex space-x-4 mb-4 md:mb-0">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center bg-gray-700 hover:bg-gray-600 rounded transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center bg-gray-700 hover:bg-gray-600 rounded transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center bg-gray-700 hover:bg-gray-600 rounded transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center bg-gray-700 hover:bg-gray-600 rounded transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>

            {/* Bottom Links */}
            <div className="flex space-x-6 text-gray-400 text-sm mb-4 md:mb-0">
              <Link href="/about" className="hover:text-white transition-colors">
                About Ned Scholars
              </Link>
              <Link href="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </div>

            {/* Copyright */}
            <p className="text-gray-400 text-sm">
              Copyright © 2016 by Ned Scholars
            </p>
          </div>
        </div>

        <div className="flex w-full justify-center mt-3"><Link href="https://github.com/AbdulMoazzim" target="_blank"><Github className="cursor-pointer p-2 border-white border-[1px] rounded-full"/></Link></div>
      </div>
    </footer>
  );
}