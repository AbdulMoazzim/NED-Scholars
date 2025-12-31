"use client"

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Home, Search, BookOpen, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Decorative Header */}
          <div className="bg-gradient-to-r from-[#1164A3] to-[#68B9C4] px-8 py-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="relative z-10 text-center text-white">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                <Search className="w-12 h-12" />
              </div>
              <h1 className="text-6xl md:text-7xl font-bold mb-4">404</h1>
              <p className="text-xl md:text-2xl font-medium">Page Not Found</p>
            </div>
          </div>

          {/* Content */}
          <div className="px-8 py-12 md:px-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Oops! This Page Doesn&apos;t Exist
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                The page you&apos;re looking for might have been moved, deleted, or doesn&apos;t exist. 
                Let&apos;s get you back on track to explore the inspiring stories and opportunities at NED Scholars.
              </p>
            </div>

            {/* Quick Links Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Link href="/" className="group">
                <div className="p-6 rounded-2xl border-2 border-gray-200 hover:border-[#1164A3] transition-all duration-300 hover:shadow-lg">
                  <div className="w-12 h-12 bg-[#1164A3]/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#1164A3] transition-colors">
                    <Home className="w-6 h-6 text-[#1164A3] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Home</h3>
                  <p className="text-gray-600 text-sm">Return to our homepage</p>
                </div>
              </Link>

              <Link href="/scholars/success-stories" className="group">
                <div className="p-6 rounded-2xl border-2 border-gray-200 hover:border-[#68B9C4] transition-all duration-300 hover:shadow-lg">
                  <div className="w-12 h-12 bg-[#68B9C4]/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#68B9C4] transition-colors">
                    <BookOpen className="w-6 h-6 text-[#68B9C4] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Success Stories</h3>
                  <p className="text-gray-600 text-sm">Read inspiring journeys</p>
                </div>
              </Link>

              <Link href="/about" className="group">
                <div className="p-6 rounded-2xl border-2 border-gray-200 hover:border-[#82B4CC] transition-all duration-300 hover:shadow-lg">
                  <div className="w-12 h-12 bg-[#82B4CC]/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#82B4CC] transition-colors">
                    <Search className="w-6 h-6 text-[#82B4CC] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">About Us</h3>
                  <p className="text-gray-600 text-sm">Learn about our mission</p>
                </div>
              </Link>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/">
                <Button className="bg-gradient-to-r from-[#1164A3] to-[#68B9C4] hover:from-[#1164A3]/90 hover:to-[#68B9C4]/90 text-white px-8 py-6 text-lg">
                  <Home className="w-5 h-5 mr-2" />
                  Go to Homepage
                </Button>
              </Link>
              
              <Button 
                variant="outline" 
                className="border-2 border-[#1164A3] text-[#1164A3] hover:bg-[#1164A3] hover:text-white px-8 py-6 text-lg"
                onClick={() => window.history.back()}
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Go Back
              </Button>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
}