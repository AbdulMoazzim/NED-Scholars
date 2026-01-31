"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Globe, Building2, Copy, CheckCircle, AlertCircle, Mail } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function DonationInPakistan() {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    toast.success(`${field} copied to clipboard`);
    setTimeout(() => setCopiedField(null), 2000);
  };

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
                <Globe className="w-8 h-8 text-white" />
                <p className="text-cyan-200 text-sm md:text-base uppercase tracking-wider font-semibold">
                  INTERNATIONAL DONATION
                </p>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Donation In Pakistan
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-2xl">
                Support NED Scholars directly from Pakistan through our local banking partner
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <Card className="border-2 border-[#82B4CC]/30 shadow-lg mb-8">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                  Support From Pakistan
                </h2>
                <p className="text-gray-700 text-lg mb-6">
                  Donations in Pakistan can be made directly to NEDUET (NED University of Science & Technology). 
                  Your contribution helps us support deserving students and advance STEM education.
                </p>
                <div className="bg-gradient-to-br from-[#68B9C4]/10 to-[#82B4CC]/10 rounded-xl p-6 border border-[#82B4CC]/20">
                  <p className="text-gray-700 mb-4">
                    <span className="font-semibold">Contact us at:</span>
                  </p>
                  <div className="flex items-center gap-3 mb-4">
                    <Mail className="w-5 h-5 text-[#1164A3]" />
                    <a 
                      href="mailto:admin@nedscholars.org" 
                      className="text-[#1164A3] hover:text-[#68B9C4] font-semibold text-lg transition-colors"
                    >
                      admin@nedscholars.org
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Bank Details Card */}
            <Card className="border-2 border-[#82B4CC]/30 shadow-lg mb-8">
              <CardContent className="p-8 md:p-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#1164A3] to-[#68B9C4] rounded-lg flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                    Banking Details
                  </h2>
                </div>

                <div className="space-y-6">
                  {/* Account Title */}
                  <div>
                    <p className="text-gray-600 font-medium mb-2">Title of account:</p>
                    <div className="bg-gradient-to-br from-[#68B9C4]/10 to-[#82B4CC]/10 rounded-lg p-4 border border-[#82B4CC]/20">
                      <span className="text-xl md:text-2xl font-bold text-[#1164A3]">
                        NED UET Scholarship
                      </span>
                    </div>
                  </div>

                  {/* Bank Name */}
                  <div>
                    <p className="text-gray-600 font-medium mb-2">Bank name:</p>
                    <div className="bg-gradient-to-br from-[#68B9C4]/10 to-[#82B4CC]/10 rounded-lg p-4 border border-[#82B4CC]/20">
                      <span className="text-xl md:text-2xl font-bold text-[#1164A3]">
                        Habib Metropolitan Bank Limited
                      </span>
                    </div>
                  </div>

                  {/* Bank Code */}
                  <div>
                    <p className="text-gray-600 font-medium mb-2">Bank code:</p>
                    <div className="flex items-center justify-between bg-gradient-to-br from-[#68B9C4]/10 to-[#82B4CC]/10 rounded-lg p-4 border border-[#82B4CC]/20">
                      <span className="text-xl md:text-2xl font-bold text-[#1164A3]">
                        50
                      </span>
                      <button
                        onClick={() => copyToClipboard("50", "Bank Code")}
                        className="ml-4 p-2 hover:bg-white rounded-lg transition-colors"
                      >
                        {copiedField === "Bank Code" ? (
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        ) : (
                          <Copy className="w-5 h-5 text-gray-500" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Account Number */}
                  <div>
                    <p className="text-gray-600 font-medium mb-2">Account No:</p>
                    <div className="flex items-center justify-between bg-gradient-to-br from-[#68B9C4]/10 to-[#82B4CC]/10 rounded-lg p-4 border border-[#82B4CC]/20">
                      <span className="text-xl md:text-2xl font-bold text-[#1164A3]">
                        6-1-50-20614-714-112418
                      </span>
                      <button
                        onClick={() => copyToClipboard("6-1-50-20614-714-112418", "Account Number")}
                        className="ml-4 p-2 hover:bg-white rounded-lg transition-colors"
                      >
                        {copiedField === "Account Number" ? (
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        ) : (
                          <Copy className="w-5 h-5 text-gray-500" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* IBAN */}
                  <div>
                    <p className="text-gray-600 font-medium mb-2">IBAN:</p>
                    <div className="flex items-center justify-between bg-gradient-to-br from-[#68B9C4]/10 to-[#82B4CC]/10 rounded-lg p-4 border border-[#82B4CC]/20">
                      <span className="text-lg md:text-xl font-bold text-[#1164A3]">
                        PK97MPBL0150217140112418
                      </span>
                      <button
                        onClick={() => copyToClipboard("PK97MPBL0150217140112418", "IBAN")}
                        className="ml-4 p-2 hover:bg-white rounded-lg transition-colors"
                      >
                        {copiedField === "IBAN" ? (
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        ) : (
                          <Copy className="w-5 h-5 text-gray-500" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-start gap-3 text-sm text-gray-600">
                  <AlertCircle className="w-5 h-5 text-[#82B4CC] flex-shrink-0 mt-0.5" />
                  <p className="italic">
                    Please ensure all details are entered correctly when making your transfer
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* How to Donate */}
            <Card className="border-[#68B9C4]/30 mb-8">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  How to Donate
                </h3>
                <ol className="space-y-3 text-gray-700">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-[#1164A3] text-white rounded-full flex items-center justify-center text-sm font-semibold">
                      1
                    </span>
                    <span>Visit your bank or use online/mobile banking</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-[#1164A3] text-white rounded-full flex items-center justify-center text-sm font-semibold">
                      2
                    </span>
                    <span>Select fund transfer or interbank transfer option</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-[#1164A3] text-white rounded-full flex items-center justify-center text-sm font-semibold">
                      3
                    </span>
                    <span>Enter the account details provided above</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-[#1164A3] text-white rounded-full flex items-center justify-center text-sm font-semibold">
                      4
                    </span>
                    <span>Enter your donation amount and complete the transaction</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-[#1164A3] text-white rounded-full flex items-center justify-center text-sm font-semibold">
                      5
                    </span>
                    <span>Email your transaction receipt to admin@nedscholars.org</span>
                  </li>
                </ol>
              </CardContent>
            </Card>

            {/* Important Notes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card className="border-[#82B4CC]/30 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[#82B4CC]/20 rounded-lg flex items-center justify-center">
                      <Building2 className="w-5 h-5 text-[#1164A3]" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      Bank Location
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    All donations are received directly at NEDUET (NED University of Science & Technology), Karachi, Pakistan.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-[#68B9C4]/30 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[#68B9C4]/20 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-[#1164A3]" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      Receipt Confirmation
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    After making your donation, please email your receipt to admin@nedscholars.org 
                    for our records and acknowledgment.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <Card className="bg-gradient-to-br from-[#B0A3B3]/5 to-[#82B4CC]/5 border-[#B0A3B3]/20">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Need Assistance?
                </h3>
                <p className="text-gray-700 mb-4">
                  If you have any questions about donating from Pakistan or need assistance 
                  with the transfer process, please don&apos;t hesitate to contact us.
                </p>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#1164A3]" />
                  <a 
                    href="mailto:admin@nedscholars.org" 
                    className="text-[#1164A3] hover:text-[#68B9C4] font-semibold transition-colors"
                  >
                    admin@nedscholars.org
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}