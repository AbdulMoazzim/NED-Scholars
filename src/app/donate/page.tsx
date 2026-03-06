"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  CreditCard,
  Building2,
  Mail,
  Globe,
  Smartphone,
  ArrowRight,
  Heart,
  Shield,
  Zap,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function DonationMethods() {
  const router = useRouter();

  const donationMethods = [
    { id: "paypal-onetime", title: "Onetime donation using PayPal", description: "Make a one-time donation using PayPal. An direct link will take you to our donation page where you can contribute easily.", icon: CreditCard, bgColor: "bg-gradient-to-r from-[#68B9C4] to-[#82B4CC]", link: "https://www.paypal.com/donate/?hosted_button_id=4K8YRVRTRUTGC" },
    { id: "paypal-monthly", title: "Monthly donation using PayPal", description: "You can enroll a monthly payment of any amount you choose. The donation amount will automatically get deducted on a monthly basis.", icon: CreditCard, bgColor: "bg-gradient-to-r from-[#68B9C4] to-[#82B4CC]", link: "https://www.paypal.com/donate/?hosted_button_id=4K8YRVRTRUTGC" },
    { id: "zelle", title: "Money transfer using Zelle", description: "Zelle is a peer-to-peer money transfer service that allows individuals/companies to send and receive money.", icon: Smartphone, bgColor: "bg-gradient-to-r from-[#68B9C4] to-[#82B4CC]", link: "/donate/zelle" },
    { id: "zeffy", title: "Money transfer using Zeffy", description: "NED SCHOLARS also uses Zeffy, a 100% free fundraising platform. Another advantage of using Zeffy is quick tax receipt.", icon: Zap, bgColor: "bg-gradient-to-r from-[#68B9C4] to-[#82B4CC]", link: "https://www.zeffy.com/en-US/donation-form/3a802600-124d-4a9d-aef3-95b57e19f7ef" },
    { id: "citizens", title: "Money transfer using Citizens", description: "You can send us your donation directly to our CITIZENS Bank account. Routing: 241070417 Checking: 4539054529 Checking...", icon: Building2, bgColor: "bg-gradient-to-r from-[#68B9C4] to-[#82B4CC]", link: "/donate/citizens" },
    { id: "mail", title: "Donate by mail", description: "You can always mail your cheques made to 'NED SCHOLARS' to 2224 Radcliffe Drive Troy, MI 48085 U.S.A.", icon: Mail, bgColor: "bg-gradient-to-r from-[#68B9C4] to-[#82B4CC]", link: "/donate/mail" },
    { id: "pakistan", title: "Donation in Pakistan", description: "Donations in Pakistan can be made directly to NEDUET (NED University of Science & Technology). Email us at: admin@nedscholars.org", icon: Globe, bgColor: "bg-gradient-to-r from-[#68B9C4] to-[#82B4CC]", link: "/donate/pakistan" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">

      {/* Hero Section — existing image overlay */}
      <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1164A3]/85 via-[#68B9C4]/60 to-transparent" />
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-8 h-8 text-white" />
                <p className="text-cyan-200 text-sm md:text-base uppercase tracking-wider font-semibold">
                  SUPPORT OUR MISSION
                </p>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Donation Methods
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-2xl">
                Choose your preferred method to support aspiring scholars pursuing their dreams
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Methods Grid */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">

            {/* Intro — text left, image right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  Multiple Ways to Give
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We offer various donation methods to make it easy and convenient for you to support
                  our mission of empowering students through education. Every dollar goes toward
                  transforming a life.
                </p>
              </div>

              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[280px]">
                <img
                  src="/images/donation-intro.jpg"
                  alt="NED Scholars students supported by donors"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1164A3]/40 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-white text-sm font-medium bg-black/30 rounded-xl px-4 py-2 backdrop-blur-sm">
                    Your generosity keeps deserving students in school
                  </p>
                </div>
                <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border-4 border-[#68B9C4]/30 -z-10" />
              </div>
            </div>

            {/* Methods Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {donationMethods.map((method) => (
                <Card
                  key={method.id}
                  className="hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 hover:border-[#1164A3] group"
                  onClick={() => router.push(method.link)}
                >
                  <CardContent className="p-6">
                    <div className={`w-20 h-20 ${method.bgColor} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <method.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#1164A3] transition-colors">
                      {method.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{method.description}</p>
                    <div className="flex items-center text-[#1164A3] font-semibold group-hover:gap-3 gap-2 transition-all">
                      <span>Learn More</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Why Your Donation Matters — image + benefits side by side */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px]">
                <img
                  src="/images/donation-impact.jpg"
                  alt="NED Scholar celebrating success after receiving scholarship support"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1164A3]/50 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-white text-sm font-medium bg-black/30 rounded-xl px-4 py-2 backdrop-blur-sm">
                    95% of donations go directly to scholars — your impact is real and immediate
                  </p>
                </div>
                <div className="absolute -bottom-3 -left-3 w-full h-full rounded-2xl border-4 border-[#82B4CC]/30 -z-10" />
              </div>

              {/* Benefits */}
              <div className="bg-gradient-to-br from-[#B0A3B3]/10 to-[#82B4CC]/10 rounded-2xl p-8 border border-[#82B4CC]/20">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
                  Why Your Donation Matters
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#1164A3] to-[#68B9C4] rounded-full flex items-center justify-center flex-shrink-0">
                      <Heart className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-1">Direct Impact</h4>
                      <p className="text-gray-600 text-sm">95% of donations go directly to scholarships and student support</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#68B9C4] to-[#82B4CC] rounded-full flex items-center justify-center flex-shrink-0">
                      <Shield className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-1">Tax Deductible</h4>
                      <p className="text-gray-600 text-sm">All donations are tax-deductible under 501(c)(3) status</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#82B4CC] to-[#B0A3B3] rounded-full flex items-center justify-center flex-shrink-0">
                      <Zap className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-1">Instant Receipt</h4>
                      <p className="text-gray-600 text-sm">Receive your tax receipt immediately via email</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}