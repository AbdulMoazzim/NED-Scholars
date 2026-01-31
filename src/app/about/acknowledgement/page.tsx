import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Award, Users, Sparkles } from "lucide-react";
import Image from "next/image";
import bannerImage from "../../../data/images/About/acknowledgement.png";

export default function AcknowledgementPage() {
  const donors = [
    "Dr. Muhammad Sohail Ahmed",
    "Ms. Naheed Akhter",
    "Mr. Safdar Ali Khan",
    "Mr. Shan Ul Haq",
    "Mr. Ahmad Safi",
    "Mr. Aftab Khwaja",
    "Mr. Iftikhar Ahmed",
    "Mr. Shahid Ahmed",
    "Mr. Shahid Bashir",
    "Mr. Ubaid Ur Rehman",
    "Mr. Aftab Ashraf",
    "Mr. Masood Akhter",
    "Mr. Farrukh Shahab",
    "Ms. Lubna Masroor",
    "Mr. Syed Abid Raza",
    "Mr. Amjad Naqvi",
    "Mr. Syed Anwar Zaidi",
    "Mr. Imran Farooqi",
    "Mr. Shams Sheikh",
    "Mr. Arif Khan",
    "Mr. Ameer Ali Chatoor",
    "Mr. Amin Jibrail",
    "Mr. Rafiq Shiwani",
    "Mr. Tariq Masood",
    "Mr. Anonymous",
    "Dr. A Ghaffar Imtiaz",
    "Mr. Shahid Shams",
    "Mr. Javaid Akhter",
    "Mr. Khausar Chisti",
    "Mr. Omar Yzdani",
    "Mr. Arif Sattar",
    "Mr. Khurram Fayyaz",
    "Mr Kashif Zia",
    "Mr Ehsan Aziz",
    "Mr Khusro Azmat",
    "Ms Erum",
    "Mr Sarwat Iqbal",
    "Mr Misbah Ul Islam",
    "Dr. Naseer Ahmed",
    "Dr. Jakaku Tayab",
    "Dr. Umar Hasan",
    "Dr. Iqbal Akhtar",
    "Dr. Adil Akhtar",
    "Dr. Abid Mahmood",
    "Mr. Shams Wadood",
    "Mr. Shahid Khan",
    "Mr. Niaz Ali Khan",
    "Mr Vajid Mohammad",
    "Mr. Saeed Noor",
    "Mr. Wasif Malik",
    "Mr Syed Farrukh Hamza",
    "Mr. M. Wajahat",
    "Mr. Kamran Rafi",
    "Qazi Foundation",
    "Dr. Majid Khan",
    "Mr. Hasan Masood",
    "Mr. Syed Mashadi",
    "Mr. Rafiq Siwani"
  ];

  const stats = [
    { icon: Heart, value: "58+", label: "Generous Donors" },
    { icon: Award, value: "Since 2007", label: "Years of Support" },
    { icon: Users, value: "100+", label: "Scholars Helped" },
    { icon: Sparkles, value: "Countless", label: "Lives Changed" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      

      <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
                    <Image
                      src={bannerImage.src}
                      alt="banner"
                      fill
                      priority
                      quality={90}
                      className="object-cover object-top"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 opacity-40 bg-gradient-to-r from-[#1164A3]/90 via-[#68B9C4]/75 to-[#82B4CC]/60" />
                    
                    {/* Content */}
                    <div className="relative z-10 h-full flex items-center">
                      <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 px-4 py-2 text-sm">
              ACKNOWLEDGEMENT
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Acknowledging a Legacy of Generosity
            </h1>
            <p className="text-lg md:text-xl opacity-90 leading-relaxed text-white">
              Since 2007, the success of the NED Scholarship has relied on the selfless contributions of our scholars and supporters. We extend our sincere thanks to all who made this possible.
            </p>
          </div>
        </div>
                    </div>
                  </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-[#82B4CC]/30 shadow-lg hover:shadow-xl hover:border-[#1164A3] transition-all">
                <CardContent className="p-6">
                  <stat.icon className="w-10 h-10 mx-auto mb-3 text-[#1164A3]" />
                  <div className="text-3xl font-bold text-gray-800 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Donors List Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-[#82B4CC]/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[#68B9C4] text-white">OUR SUPPORTERS</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Thank You to Our Donors
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                These individuals and organizations have made a lasting impact through their generous contributions to the NED Scholars program.
              </p>
            </div>

            

            <div className="mt-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {donors.map((donor, index) => (
                  <Card key={index} className="hover:shadow-md hover:border-[#1164A3] transition-all border-[#82B4CC]/30">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-[#1164A3] text-white rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">
                          {index + 1}
                        </div>
                        <div className="text-gray-800 font-medium">
                          {donor}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Thank You Message */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-xl bg-gradient-to-r from-[#1164A3] to-[#68B9C4] text-white ">
              <CardContent className="p-12 text-center">
                <Heart className="w-16 h-16 mx-auto mb-6 opacity-90" />
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Your Generosity Creates Opportunities
                </h2>
                <p className="text-lg md:text-xl opacity-90 leading-relaxed mb-8">
                  Every contribution, no matter the size, helps us empower deserving students to pursue their dreams in STEM education. Your support doesn&apos;t just provide financial aid—it opens doors, builds confidence, and creates future leaders.
                </p>
                <p className="text-xl font-semibold">
                  From the bottom of our hearts, thank you.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

  
    </div>
  );
}