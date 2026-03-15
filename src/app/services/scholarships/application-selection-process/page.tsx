"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Users,
  FileText,
  Video,
  CheckCircle2,
  MessageSquare,
  DollarSign,
  Home,
  Shield,
  Award,
  AlertCircle,
  ArrowRight,
  UserCheck,
  ClipboardList,
  Phone,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import image1 from "../../../../data/images/Services/Application and Selection proccess/image1.jpeg";
import image2 from "../../../../data/images/Services/Application and Selection proccess/image2.jpeg";
import image3 from "../../../../data/images/Services/Application and Selection proccess/image3.jpeg";
import image4 from "../../../../data/images/Services/Application and Selection proccess/image4.jpeg";

export default function GuidelinesAndPrioritiesPage() {
  const router = useRouter();

  const timeline = [
    { month: "October - November", title: "Application Period", description: "Applications are accepted and reviewed during this period.", icon: Calendar, color: "blue" },
    { month: "December - January", title: "Interview Process", description: "Online interviews are conducted with applicants and their parents.", icon: Video, color: "purple" },
    { month: "After Selection", title: "Verification & Distribution", description: "Home visits and scholarship distribution", icon: Home, color: "green" },
  ];

  const selectionCommittee = [
    { name: "Mr. Abid Raza", role: "Entrepreneur and Industrialist" },
    { name: "Mr. Arif Khan", role: "Energy Consultant" },
    { name: "Mr. Farrukh Jamal", role: "Training Consultant" },
    { name: "Mr. Anjum Shareef", role: "Auto Executive" },
    { name: "Mr. Syed Mushir", role: "Quality Expert" },
    { name: "Mr. Muhammad Usman", role: "Energy Expert" },
    { name: "Dr. M. Sohail Ahmed", role: "Academician" },
  ];

  const selectionSteps = [
    { step: 1, title: "Online Application", description: "Submit your application through our online portal", icon: FileText, details: ["Fill in all required fields before submitting.", "Upload necessary documents", "Submit by the deadline."] },
    { step: 2, title: "Application Compilation", description: "NED CSA compiles and submits applications to Selection Committee", icon: ClipboardList, details: ["Applications reviewed by NED CSA", "Submitted to Selection Committee", "Initial screening process"] },
    { step: 3, title: "Need-Based Screening", description: "Committee evaluates financial need (total earnings / family members)", icon: DollarSign, details: ["Financial assessment conducted", "Family income evaluated", "Eligible candidates shortlisted"] },
    { step: 4, title: "Interview Invitation", description: "Shortlisted applicants invited for online interview", icon: MessageSquare, details: ["Online interview scheduled", "Parents/guardians must attend", "Interview date communicated"] },
    { step: 5, title: "Virtual Interview", description: "Comprehensive interview with applicant and family", icon: Video, details: ["Questions about financial situation", "Discussion of family circumstances", "All interviews are recorded"] },
    { step: 6, title: "Evaluation & Scoring", description: "Committee members evaluate using standardized form", icon: ClipboardList, details: ["Evaluation form completed", "Cumulative scores calculated", "Final selection decisions made"] },
    { step: 7, title: "Verification Process", description: "Random home visits to 20% of selected scholars", icon: Home, details: ["Home visits conducted randomly", "Verification of information", "Ensures application truthfulness"] },
    { step: 8, title: "Notification & Welcome", description: "Selection list sent and welcome letters distributed", icon: UserCheck, details: ["List sent to NED CSA", "Welcome letters dispatched", "Official notification sent"] },
    { step: 9, title: "Personal Contact", description: "Phone call to scholars and parents", icon: Phone, details: ["Admin calls scholars and parents", "Decision communicated", "Communication channel established"] },
    { step: 10, title: "Fund Transfer", description: "NED Scholars transfers scholarship amount to NED University", icon: DollarSign, details: ["Check issued to NED University", "Total scholarship amount transferred", "Financial process completed"] },
    { step: 11, title: "Distribution", description: "NED University CSA distributes funds to scholars", icon: Award, details: ["CSA handles distribution", "Scholars receive funds", "Distribution process monitored"] },
    { step: 12, title: "Receipt Confirmation", description: "Scholars confirm receipt of scholarship", icon: CheckCircle2, details: ["Receipt sent to Admin", "Confirmation documented", "Process completion verified"] },
    { step: 13, title: "Social Media Engagement", description: "Connect with NED Scholars community", icon: Users, details: ["Subscribe to YouTube Channel", "Like on Facebook", "Follow on LinkedIn & Instagram"] },
  ];

  const interviewQuestions = [
    "Electric bills and utility expenses",
    "Rent payments and home ownership status",
    "Number of employed family members",
    "Total family income and sources",
    "Family size and dependents",
    "Education expenses for siblings",
    "Medical or emergency expenses",
    "Other financial obligations",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-50 to-[#82B4CC]/10">

      {/* Hero Section — no image */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#1164A3] to-[#68B9C4] text-white py-20">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30 text-sm">SCHOLARSHIP PROGRAM</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">Guidelines & Priorities</h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
              Understand our comprehensive selection process and what to expect when applying for NED Scholars scholarship program
            </p>
            <Button
              size="lg"
              className="bg-white text-[#1164A3] hover:bg-gray-100 text-lg px-8 py-6 rounded-full shadow-xl transform hover:scale-105 transition-all duration-300"
              onClick={() => router.push("/register/scholarship")}
            >
              Apply Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#68B9C4]/20 rounded-full blur-3xl"></div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 -mt-10 relative z-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[#68B9C4] text-white border-[#68B9C4]">APPLICATION TIMELINE</Badge>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Key Dates & Milestones</h2>
              <p className="text-gray-600 text-lg">Important dates throughout the scholarship application process</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {timeline.map((item, index) => (
                <Card key={index} className="hover:shadow-xl hover:border-[#1164A3] transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className={cn("w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center", item.color === "blue" && "bg-[#82B4CC]/20", item.color === "purple" && "bg-[#B0A3B3]/30", item.color === "green" && "bg-[#68B9C4]/20")}>
                      <item.icon className={cn("w-8 h-8", item.color === "blue" && "text-[#1164A3]", item.color === "purple" && "text-[#1164A3]", item.color === "green" && "text-[#68B9C4]")} />
                    </div>
                    <Badge className="mb-3 bg-[#82B4CC] text-white">{item.month}</Badge>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Principles — cards + image */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[#1164A3] text-white border-[#1164A3]">CORE PRINCIPLES</Badge>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Approach</h2>
              <p className="text-gray-600 text-lg">Understanding the foundation of our scholarship program</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="space-y-6">
                <Card className="border-0 shadow-xl">
                  <CardHeader className="bg-gradient-to-r from-[#1164A3] to-[#68B9C4] text-white py-4">
                    <CardTitle className="flex items-center gap-2"><Shield className="w-5 h-5" />Need-Cum-Merit Basis</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">
                      Scholarships are awarded based on both financial need and academic merit, ensuring support reaches those who need it most while maintaining high academic standards.
                    </p>
                    <div className="space-y-2">
                      {["Financial need assessment", "Academic performance review", "Holistic evaluation process"].map((item, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-[#68B9C4] mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-xl">
                  <CardHeader className="bg-gradient-to-r from-[#68B9C4] to-[#82B4CC] text-white py-4">
                    <CardTitle className="flex items-center gap-2"><Users className="w-5 h-5" />Administration</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">
                      The NED Controller of Student Affairs (CSA) administers the entire scholarship application process with support from NED Scholars alumni.
                    </p>
                    <div className="space-y-2">
                      {["NED CSA manages applications", "Alumni representatives conduct interviews", "Transparent selection process"].map((item, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-[#68B9C4] mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[90%]">
                <img
                  src={image4.src}
                  alt="NED Scholars selection committee reviewing applications"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1164A3]/50 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-white text-sm font-medium bg-black/30 rounded-xl px-4 py-2 backdrop-blur-sm">
                    A fair, transparent process — built on merit and genuine need
                  </p>
                </div>
                <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border-4 border-[#68B9C4]/30 -z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* Selection Committee */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-6">
              <Badge className="mb-4 bg-[#1164A3] text-white border-[#1164A3]">OUR TEAM</Badge>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Selection Committee
              </h2>
              <p className="text-gray-600 text-lg">
                Experienced professionals and senior NEDians who evaluate
                applications
              </p>
            </div>

            <Card className="border-0 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-[#1164A3] to-[#68B9C4] text-white">
                <CardTitle className="flex items-center gap-2 py-4">
                  <Users className="w-5 h-5" />
                  Committee Members
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectionCommittee.map((member, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg hover:bg-[#82B4CC]/10 transition-colors"
                    >
                      <div className="w-10 h-10 bg-[#82B4CC]/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <UserCheck className="w-5 h-5 text-[#1164A3]" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">
                          {member.name}
                        </p>
                        <p className="text-sm text-gray-600">{member.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Selection Process Steps — banner image + steps */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-[#82B4CC]/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[#68B9C4] text-white border-[#68B9C4]">STEP-BY-STEP</Badge>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Complete Selection Process</h2>
              <p className="text-gray-600 text-lg">From application to scholarship distribution - understand every step</p>
            </div>

            {/* Wide image banner */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl mb-10 h-56 md:h-[500px]">
              <img
                src={image3.src}
                alt="Scholarship selection process overview"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1164A3]/65 to-transparent flex items-center">
                <div className="px-10 max-w-lg">
                  <h3 className="text-white text-2xl font-bold mb-2">13 Steps to Your Scholarship</h3>
                  <p className="text-white/85 text-sm leading-relaxed">
                    A transparent, end-to-end process — from your first application click to the scholarship reaching your hands.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {selectionSteps.map((step, index) => (
                <Card key={index} className="border-[#82B4CC]/20 shadow-lg hover:shadow-xl hover:border-[#1164A3] transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-3">
                      <div className="w-10 h-10 bg-[#82B4CC]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <step.icon className="w-5 h-5 text-[#1164A3]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-1">{step.title}</h3>
                        <p className="text-gray-600 mb-3">{step.description}</p>
                      </div>
                    </div>
                    <div className="ml-14 space-y-2">
                      {step.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#68B9C4] mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interview Details — image beside interview cards */}
      <section className="py-16 bg-white">
  <div className="container mx-auto px-4">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <Badge className="mb-4 bg-[#1164A3] text-white border-[#1164A3]">INTERVIEW PROCESS</Badge>
        <h2 className="text-4xl font-bold text-gray-800 mb-4">What to Expect in Interviews</h2>
        <p className="text-gray-600 text-lg">Be prepared for these topics during your online interview</p>
      </div>

      <div className="flex flex-col gap-8">
        {/* Image on top — full width */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[600px]">
          <img
            src={image1.src}
            alt="Student attending a virtual scholarship interview"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1164A3]/50 to-transparent" />
          <div className="absolute bottom-5 left-5 right-5">
            <p className="text-white text-sm font-medium bg-black/30 rounded-xl px-4 py-2 backdrop-blur-sm">
              Interviews are conducted online — parents must be present
            </p>
          </div>
          <div className="absolute -bottom-3 -left-3 w-full h-full rounded-2xl border-4 border-[#68B9C4]/30 -z-10" />
        </div>

        {/* Cards below — side by side on large screens */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="border-0 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-[#82B4CC] to-[#B0A3B3] text-white py-4">
              <CardTitle className="flex items-center gap-2">
                <Video className="w-5 h-5" />Interview Requirements
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                {[
                  { title: "Online Platform", desc: "Interviews are conducted virtually" },
                  { title: "Parents Must Attend", desc: "Parents/guardians required to be present" },
                  { title: "Recording", desc: "All interviews are recorded for evaluation" },
                  { title: "Evaluation Form", desc: "Standardized scoring by committee members" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-[#1164A3] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-800 mb-1">{item.title}</p>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-[#68B9C4] to-[#82B4CC] text-white py-4">
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5" />Topics Discussed
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {interviewQuestions.map((question, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="w-5 h-5 bg-[#68B9C4]/20 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs text-[#1164A3] font-bold">{index + 1}</span>
                    </div>
                    <p className="text-gray-700 text-sm">{question}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Verification Process — image beside card */}
      <section className="py-16 bg-gradient-to-r from-[#B0A3B3]/10 to-[#82B4CC]/10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <Card className="border-0 shadow-xl">
                <CardHeader className="py-4 bg-gradient-to-r from-[#68B9C4] to-[#82B4CC] text-white">
                  <CardTitle className="flex items-center gap-2"><Shield className="w-5 h-5" />Verification & Transparency</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-6">
                    To ensure the integrity of our selection process and verify the accuracy of applications:
                  </p>
                  <div className="bg-[#82B4CC]/10 border-l-4 border-[#68B9C4] p-4 mb-6">
                    <div className="flex items-start gap-3">
                      <Home className="w-6 h-6 text-[#1164A3] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-gray-800 mb-2">Random Home Visits</p>
                        <p className="text-gray-700 text-sm">
                          20% of selected scholars&apos; homes are randomly visited by selection committee members or NED CSA representatives to ensure the truthfulness of applications.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {["Verification of financial information", "Confirmation of family circumstances", "Ensures fairness in selection"].map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#68B9C4] mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[380px]">
                <img
                  src={image2.src}
                  alt="Committee member conducting a home visit"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1164A3]/50 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-white text-sm font-medium bg-black/30 rounded-xl px-4 py-2 backdrop-blur-sm">
                    Home visits ensure every scholarship reaches a truly deserving student
                  </p>
                </div>
                <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border-4 border-[#82B4CC]/30 -z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section — no image */}
      <section className="py-20 bg-gradient-to-r from-[#1164A3] to-[#68B9C4] text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Begin Your Journey?</h2>
            <p className="text-xl mb-8 opacity-90">
              Now that you understand our process, take the first step towards securing your scholarship
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-[#1164A3] hover:bg-gray-100 text-lg px-10 py-6 rounded-full shadow-xl transform hover:scale-105 transition-all duration-300"
                onClick={() => router.push("/register/scholarship")}
              >
                Start Your Application
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-[#1164A3] text-lg px-10 py-6 rounded-full"
                onClick={() => router.push("/services/scholarships/eligible-criteria")}
              >
                Check Eligibility
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}