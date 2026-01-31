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
  Zap
} from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import bannerImg from "../../data/images/donate now.png"

export default function DonationMethods() {
  const router = useRouter();

  const donationMethods = [
    {
      id: "paypal-onetime",
      title: "Onetime donation using PayPal",
      description: "Make a one-time donation using PayPal. An direct link will take you to our donation page where you can contribute easily.",
      icon: CreditCard,
      color: "from-blue-400 to-blue-500",
      bgColor: "bg-gradient-to-r from-[#68B9C4] to-[#82B4CC]",
      iconColor: "text-blue-600",
      link: "/donate/paypal-onetime",
    },
    {
      id: "paypal-monthly",
      title: "Monthly donation using PayPal",
      description: "You can enroll a monthly payment of any amount you choose. The donation amount will automatically get deducted on a monthly basis.",
      icon: CreditCard,
      color: "from-blue-400 to-blue-500",
      bgColor: "bg-gradient-to-r from-[#68B9C4] to-[#82B4CC]",
      iconColor: "text-blue-600",
      link: "/donate/paypal-monthly",
    },
    {
      id: "zelle",
      title: "Money transfer using Zelle",
      description: "Zelle is a peer-to-peer money transfer service that allows individuals/companies to send and receive money.",
      icon: Smartphone,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-gradient-to-r from-[#68B9C4] to-[#82B4CC]",
      iconColor: "text-purple-600",
      link: "/donate/zelle",
    },
    {
      id: "zeffy",
      title: "Money transfer using Zeffy",
      description: "NED SCHOLARS also uses Zeffy, a 100% free fundraising platform. Another advantage of using Zeffy is quick tax receipt.",
      icon: Zap,
      color: "from-purple-300 to-purple-400",
      bgColor: "bg-gradient-to-r from-[#68B9C4] to-[#82B4CC]",
      iconColor: "text-purple-500",
      link: "/donate/zeffy",
    },
    {
      id: "citizens",
      title: "Money transfer using Citizens",
      description: "You can send us your donation directly to our CITIZENS Bank account. Routing: 241070417 Checking: 4539054529 Checking...",
      icon: Building2,
      color: "from-green-300 to-green-400",
      bgColor: "bg-gradient-to-r from-[#68B9C4] to-[#82B4CC]",
      iconColor: "text-green-600",
      link: "/donate/citizens",
    },
    {
      id: "mail",
      title: "Donate by mail",
      description: "You can always mail your cheques made to 'NED SCHOLARS' to 2224 Radcliffe Drive Troy, MI 48085 U.S.A.",
      icon: Mail,
      color: "from-gray-400 to-gray-500",
      bgColor: "bg-gradient-to-r from-[#68B9C4] to-[#82B4CC]",
      iconColor: "text-gray-600",
      link: "/donate/mail",
    },
    {
      id: "pakistan",
      title: "Donation in Pakistan",
      description: "Donations in Pakistan can be made directly to NEDUET (NED University of Science & Technology). Email us at: admin@nedscholars.org",
      icon: Globe,
      color: "from-green-700 to-green-800",
      bgColor: "bg-gradient-to-r from-[#68B9C4] to-[#82B4CC]",
      iconColor: "text-green-700",
      link: "/donate/pakistan",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section with Image Overlay */}
      <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
         <Image
          src={bannerImg}
          alt="Donation Methods"
          fill
          priority
          quality={90}
          className="object-cover object-top"
        />
        {/* Overlay */}
        <div className="absolute opacity-40 inset-0 bg-gradient-to-r from-[#1164A3]/90 via-[#68B9C4]/75 to-[#82B4CC]/60" />
        
        {/* Content */}
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
            {/* Introduction */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Multiple Ways to Give
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We offer various donation methods to make it easy and convenient for you to support 
                our mission of empowering students through education.
              </p>
            </div>

            {/* Methods Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {donationMethods.map((method) => (
                <Card
                  key={method.id}
                  className="hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 hover:border-[#1164A3] group"
                  onClick={() => router.push(method.link)}
                >
                  <CardContent className="p-6">
                    {/* Icon */}
                    <div
                      className={`w-20 h-20 ${method.bgColor} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <method.icon className="w-10 h-10 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#1164A3] transition-colors">
                      {method.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {method.description}
                    </p>

                    {/* CTA */}
                    <div className="flex items-center text-[#1164A3] font-semibold group-hover:gap-3 gap-2 transition-all">
                      <span>Learn More</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Benefits Section */}
            <div className="bg-gradient-to-br from-[#B0A3B3]/10 to-[#82B4CC]/10 rounded-2xl p-8 md:p-12 border border-[#82B4CC]/20">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
                Why Your Donation Matters
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#1164A3] to-[#68B9C4] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    Direct Impact
                  </h4>
                  <p className="text-gray-600">
                    95% of donations go directly to scholarships and student support
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#68B9C4] to-[#82B4CC] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    Tax Deductible
                  </h4>
                  <p className="text-gray-600">
                    All donations are tax-deductible under 501(c)(3) status
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#82B4CC] to-[#B0A3B3] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    Instant Receipt
                  </h4>
                  <p className="text-gray-600">
                    Receive your tax receipt immediately via email
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#1164A3] via-[#68B9C4] to-[#82B4CC]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Our Team and Donate to Empower Aspiring Scholars
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Care and support for every student pursuing STEM education
            </p>
            <Button
              onClick={() => router.push("/donate")}
              className="bg-white text-[#1164A3] hover:bg-gray-100 text-lg px-8 py-6 rounded-full"
            >
              <Heart className="w-5 h-5 mr-2" />
              Make a Donation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}