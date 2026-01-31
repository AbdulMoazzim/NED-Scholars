"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Clock, AlertCircle } from "lucide-react";

export default function DonateByMail() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section with Image Overlay */}
      <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1164A3]/90 via-[#68B9C4]/75 to-[#82B4CC]/60" />
        
        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-8 h-8 text-white" />
                <p className="text-cyan-200 text-sm md:text-base uppercase tracking-wider font-semibold">
                  DONATION METHOD
                </p>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Donate by Mail
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-2xl">
                You can always mail your cheques to our address
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Mail Your Donation Card */}
            <Card className="border-2 border-[#82B4CC]/30 shadow-lg mb-8">
              <CardContent className="p-8 md:p-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#1164A3] to-[#68B9C4] rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                    Mail Your Donation
                  </h2>
                </div>

                <div className="bg-gradient-to-br from-[#68B9C4]/10 to-[#82B4CC]/10 rounded-xl p-6 md:p-8 border border-[#82B4CC]/20">
                  <p className="text-gray-700 text-lg mb-6">
                    Make Cheque/Payable To:
                  </p>
                  <div className="space-y-3">
                    <div className="text-2xl md:text-3xl font-bold text-[#1164A3]">
                      NED SCHOLARS
                    </div>
                    <div className="text-gray-700 space-y-1">
                      <p className="font-semibold">Mail to:</p>
                      <p className="text-lg">2224 Radcliffe Drive</p>
                      <p className="text-lg">Troy, MI 48085</p>
                      <p className="text-lg font-semibold">U.S.A</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-start gap-3 text-sm text-gray-600">
                  <AlertCircle className="w-5 h-5 text-[#82B4CC] flex-shrink-0 mt-0.5" />
                  <p className="italic">
                    Please allow 5-7 business days for mail delivery and processing
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Additional Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Mailing Address */}
              <Card className="border-[#68B9C4]/30 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[#68B9C4]/20 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-[#1164A3]" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      Our Address
                    </h3>
                  </div>
                  <div className="text-gray-600 space-y-1">
                    <p>NED Scholars</p>
                    <p>2224 Radcliffe Drive</p>
                    <p>Troy, MI 48085</p>
                    <p>United States</p>
                  </div>
                </CardContent>
              </Card>

              {/* Processing Time */}
              <Card className="border-[#82B4CC]/30 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[#82B4CC]/20 rounded-lg flex items-center justify-center">
                      <Clock className="w-5 h-5 text-[#1164A3]" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      Processing Time
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    Your donation will be processed within 5-7 business days upon receipt. 
                    You will receive a confirmation and tax receipt via email.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Tax Information */}
            <Card className="mt-6 bg-gradient-to-br from-[#B0A3B3]/5 to-[#82B4CC]/5 border-[#B0A3B3]/20">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Tax Deductible Donation
                </h3>
                <p className="text-gray-700">
                  NED Scholars is a non-profit corporation operating exclusively for educational 
                  and charitable purposes within the meaning of Section 501 (c)(3) of the Internal 
                  Revenue Code. Your donation is tax-deductible to the extent allowed by law. 
                  A receipt will be mailed to you for your records.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}