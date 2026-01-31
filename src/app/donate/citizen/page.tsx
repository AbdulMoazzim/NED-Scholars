"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Building2, Copy, CheckCircle, AlertCircle, Shield } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function CitizensTransfer() {
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
                <Building2 className="w-8 h-8 text-white" />
                <p className="text-cyan-200 text-sm md:text-base uppercase tracking-wider font-semibold">
                  BANK TRANSFER
                </p>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Money Transfer Using Citizens
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-2xl">
                You can send us your donation directly to our CITIZENS Bank account
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Direct Bank Transfer Card */}
            <Card className="border-2 border-[#82B4CC]/30 shadow-lg mb-8">
              <CardContent className="p-8 md:p-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#1164A3] to-[#68B9C4] rounded-lg flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                    Direct Bank Transfer
                  </h2>
                </div>

                <p className="text-gray-700 text-lg mb-6">
                  You can send us your donation directly to our CITIZENS Bank account.
                </p>

                <div className="bg-gradient-to-br from-[#68B9C4]/10 to-[#82B4CC]/10 rounded-xl p-6 md:p-8 border border-[#82B4CC]/20">
                  <div className="space-y-6">
                    {/* Routing Number */}
                    <div>
                      <p className="text-gray-600 font-medium mb-2">Routing Number:</p>
                      <div className="flex items-center justify-between bg-white rounded-lg p-4 border border-[#82B4CC]/30">
                        <span className="text-2xl md:text-3xl font-bold text-[#1164A3]">
                          241070417
                        </span>
                        <button
                          onClick={() => copyToClipboard("241070417", "Routing Number")}
                          className="ml-4 p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                          {copiedField === "Routing Number" ? (
                            <CheckCircle className="w-5 h-5 text-green-600" />
                          ) : (
                            <Copy className="w-5 h-5 text-gray-500" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Checking Account Number */}
                    <div>
                      <p className="text-gray-600 font-medium mb-2">
                        Checking Account Number:
                      </p>
                      <div className="flex items-center justify-between bg-white rounded-lg p-4 border border-[#82B4CC]/30">
                        <span className="text-2xl md:text-3xl font-bold text-[#1164A3]">
                          4539054529
                        </span>
                        <button
                          onClick={() => copyToClipboard("4539054529", "Account Number")}
                          className="ml-4 p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                          {copiedField === "Account Number" ? (
                            <CheckCircle className="w-5 h-5 text-green-600" />
                          ) : (
                            <Copy className="w-5 h-5 text-gray-500" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-start gap-3 text-sm text-gray-600">
                  <AlertCircle className="w-5 h-5 text-[#82B4CC] flex-shrink-0 mt-0.5" />
                  <p className="italic">
                    Please ensure all details are entered correctly when initiating your transfer
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Information Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Bank Information */}
              <Card className="border-[#68B9C4]/30 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[#68B9C4]/20 rounded-lg flex items-center justify-center">
                      <Building2 className="w-5 h-5 text-[#1164A3]" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      Bank Information
                    </h3>
                  </div>
                  <div className="text-gray-600 space-y-2">
                    <p><span className="font-semibold">Bank Name:</span> Citizens Bank</p>
                    <p><span className="font-semibold">Account Name:</span> NED Scholars</p>
                    <p><span className="font-semibold">Account Type:</span> Checking</p>
                  </div>
                </CardContent>
              </Card>

              {/* Security Note */}
              <Card className="border-[#82B4CC]/30 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[#82B4CC]/20 rounded-lg flex items-center justify-center">
                      <Shield className="w-5 h-5 text-[#1164A3]" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      Secure Transfer
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    Your donation is processed securely through Citizens Bank&apos;s encrypted 
                    banking system. All transfers are monitored for safety and compliance.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* How to Transfer */}
            <Card className="border-[#B0A3B3]/30 mb-8">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  How to Transfer
                </h3>
                <ol className="space-y-3 text-gray-700">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-[#1164A3] text-white rounded-full flex items-center justify-center text-sm font-semibold">
                      1
                    </span>
                    <span>Log in to your Citizens Bank online banking or mobile app</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-[#1164A3] text-white rounded-full flex items-center justify-center text-sm font-semibold">
                      2
                    </span>
                    <span>Select &quot;Transfer Money&quot; or &quot;Make a Payment&quot;</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-[#1164A3] text-white rounded-full flex items-center justify-center text-sm font-semibold">
                      3
                    </span>
                    <span>Enter the routing number and account number provided above</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-[#1164A3] text-white rounded-full flex items-center justify-center text-sm font-semibold">
                      4
                    </span>
                    <span>Enter your donation amount and complete the transfer</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-[#1164A3] text-white rounded-full flex items-center justify-center text-sm font-semibold">
                      5
                    </span>
                    <span>You will receive a confirmation email with your tax receipt</span>
                  </li>
                </ol>
              </CardContent>
            </Card>

            {/* Tax Information */}
            <Card className="bg-gradient-to-br from-[#B0A3B3]/5 to-[#82B4CC]/5 border-[#B0A3B3]/20">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Tax Deductible Donation
                </h3>
                <p className="text-gray-700">
                  NED Scholars is a non-profit corporation operating exclusively for educational 
                  and charitable purposes within the meaning of Section 501 (c)(3) of the Internal 
                  Revenue Code. Your donation is tax-deductible to the extent allowed by law.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}