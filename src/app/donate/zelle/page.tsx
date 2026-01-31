"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Smartphone, Mail, Copy, CheckCircle, AlertCircle, Shield, Zap } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function ZelleTransfer() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("admin@nedscholars.org");
    setCopiedEmail(true);
    toast.success("Email copied to clipboard");
    setTimeout(() => setCopiedEmail(false), 2000);
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
                <Smartphone className="w-8 h-8 text-white" />
                <p className="text-cyan-200 text-sm md:text-base uppercase tracking-wider font-semibold">
                  INSTANT TRANSFER
                </p>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Money Transfer Using Zelle
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-2xl">
                Send your donation instantly and securely using Zelle®
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* What is Zelle */}
            <Card className="border-2 border-[#82B4CC]/30 shadow-lg mb-8">
              <CardContent className="p-8 md:p-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#1164A3] to-[#68B9C4] rounded-lg flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                    Donate via Zelle
                  </h2>
                </div>

                <p className="text-gray-700 text-lg mb-6">
                  Zelle is a peer-to-peer money transfer service that allows individuals/companies 
                  to send and receive money from each other via connected bank accounts.
                </p>

                <div className="bg-gradient-to-br from-[#68B9C4]/10 to-[#82B4CC]/10 rounded-xl p-6 md:p-8 border border-[#82B4CC]/20">
                  <p className="text-gray-700 text-lg mb-4">
                    If you have a Zelle account with your Bank, you need our email address to send 
                    your donation electronically.
                  </p>

                    <div className="flex items-center justify-between bg-white rounded-lg p-4 my-4 shadow-sm">
                  
                      <div className="flex items-center gap-3">
                        <Mail className="w-6 h-6 text-[#1164A3]" />
                        <span className="text-2xl md:text-3xl font-bold text-[#1164A3]">
                          admin@nedscholars.org
                        </span>
                      </div>
                      <button
                        onClick={copyEmail}
                        className="ml-4 p-3 hover:bg-gray-50 rounded-lg transition-colors"
                      >
                        {copiedEmail ? (
                          <CheckCircle className="w-6 h-6 text-green-600" />
                        ) : (
                          <Copy className="w-6 h-6 text-gray-500" />
                        )}
                      </button>
                    </div>

                  <div className="flex items-start gap-3 text-sm">
                    <Shield className="w-5 h-5 text-[#68B9C4] flex-shrink-0 mt-0.5" />
                    <p className="text-gray-600 italic">
                      ✓ Fast - Secure - Direct to our account
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* How to Use Zelle */}
            <Card className="border-[#68B9C4]/30 mb-8">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  How to Send Money via Zelle
                </h3>
                <ol className="space-y-4 text-gray-700">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 bg-[#1164A3] text-white rounded-full flex items-center justify-center text-sm font-semibold">
                      1
                    </span>
                    <div>
                      <p className="font-semibold mb-1">Open Your Banking App</p>
                      <p className="text-gray-600">
                        Launch your bank&apos;s mobile app or online banking platform where Zelle is available
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 bg-[#1164A3] text-white rounded-full flex items-center justify-center text-sm font-semibold">
                      2
                    </span>
                    <div>
                      <p className="font-semibold mb-1">Find Zelle®</p>
                      <p className="text-gray-600">
                        Look for the Zelle® icon or option in your banking app menu
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 bg-[#1164A3] text-white rounded-full flex items-center justify-center text-sm font-semibold">
                      3
                    </span>
                    <div>
                      <p className="font-semibold mb-1">Select Send Money</p>
                      <p className="text-gray-600">
                        Choose the option to send money to someone
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 bg-[#1164A3] text-white rounded-full flex items-center justify-center text-sm font-semibold">
                      4
                    </span>
                    <div>
                      <p className="font-semibold mb-1">Enter Our Email</p>
                      <p className="text-gray-600">
                        Type or paste: <span className="font-semibold text-[#1164A3]">admin@nedscholars.org</span>
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 bg-[#1164A3] text-white rounded-full flex items-center justify-center text-sm font-semibold">
                      5
                    </span>
                    <div>
                      <p className="font-semibold mb-1">Enter Amount & Send</p>
                      <p className="text-gray-600">
                        Enter your donation amount, review the details, and confirm the transfer
                      </p>
                    </div>
                  </li>
                </ol>
              </CardContent>
            </Card>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="border-[#68B9C4]/30 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-[#68B9C4]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-7 h-7 text-[#1164A3]" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Instant Transfer
                  </h3>
                  <p className="text-sm text-gray-600">
                    Money arrives within minutes, typically
                  </p>
                </CardContent>
              </Card>

              <Card className="border-[#82B4CC]/30 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-[#82B4CC]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-7 h-7 text-[#1164A3]" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Secure & Safe
                  </h3>
                  <p className="text-sm text-gray-600">
                    Protected by your bank&apos;s security measures
                  </p>
                </CardContent>
              </Card>

              <Card className="border-[#B0A3B3]/30 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-[#B0A3B3]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Smartphone className="w-7 h-7 text-[#1164A3]" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Easy to Use
                  </h3>
                  <p className="text-sm text-gray-600">
                    Send money with just a few taps
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Important Notes */}
            <Card className="border-[#B0A3B3]/30 mb-8">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Important Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-[#82B4CC] flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">
                      Zelle® is available through most major U.S. banks and credit unions
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-[#82B4CC] flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">
                      Check with your bank to ensure Zelle® is available for your account
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-[#82B4CC] flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">
                      You&apos;ll receive a confirmation email once your donation is received
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-[#82B4CC] flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">
                      There are typically no fees for sending money through Zelle®
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tax Information */}
            <Card className="bg-gradient-to-br from-[#B0A3B3]/5 to-[#82B4CC]/5 border-[#B0A3B3]/20">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Tax Deductible Donation
                </h3>
                <p className="text-gray-700 mb-4">
                  NED Scholars is a non-profit corporation operating exclusively for educational 
                  and charitable purposes within the meaning of Section 501 (c)(3) of the Internal 
                  Revenue Code. Your donation is tax-deductible to the extent allowed by law.
                </p>
                <p className="text-gray-700">
                  A tax receipt will be emailed to you automatically after your donation is processed.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}