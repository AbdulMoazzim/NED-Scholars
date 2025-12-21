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
  Youtube,
  Facebook,
  Linkedin,
  Instagram,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

export default function GuidelinesAndPrioritiesPage() {
  const router = useRouter();

  const timeline = [
    {
      month: "October - November",
      title: "Application Period",
      description: "Applications are accepted and reviewed",
      icon: Calendar,
      color: "blue",
    },
    {
      month: "December - January",
      title: "Interview Process",
      description: "Online interviews conducted with applicants and parents",
      icon: Video,
      color: "purple",
    },
    {
      month: "After Selection",
      title: "Verification & Distribution",
      description: "Home visits and scholarship distribution",
      icon: Home,
      color: "green",
    },
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
    {
      step: 1,
      title: "Online Application",
      description: "Submit your application through our online portal",
      icon: FileText,
      details: [
        "Complete all required fields",
        "Upload necessary documents",
        "Submit before deadline",
      ],
    },
    {
      step: 2,
      title: "Application Compilation",
      description: "NED CSA compiles and submits applications to Selection Committee",
      icon: ClipboardList,
      details: [
        "Applications reviewed by NED CSA",
        "Submitted to Selection Committee",
        "Initial screening process",
      ],
    },
    {
      step: 3,
      title: "Need-Based Screening",
      description: "Committee evaluates financial need (total earnings / family members)",
      icon: DollarSign,
      details: [
        "Financial assessment conducted",
        "Family income evaluated",
        "Eligible candidates shortlisted",
      ],
    },
    {
      step: 4,
      title: "Interview Invitation",
      description: "Shortlisted applicants invited for online interview",
      icon: MessageSquare,
      details: [
        "Online interview scheduled",
        "Parents/guardians must attend",
        "Interview date communicated",
      ],
    },
    {
      step: 5,
      title: "Virtual Interview",
      description: "Comprehensive interview with applicant and family",
      icon: Video,
      details: [
        "Questions about financial situation",
        "Discussion of family circumstances",
        "All interviews are recorded",
      ],
    },
    {
      step: 6,
      title: "Evaluation & Scoring",
      description: "Committee members evaluate using standardized form",
      icon: ClipboardList,
      details: [
        "Evaluation form completed",
        "Cumulative scores calculated",
        "Final selection decisions made",
      ],
    },
    {
      step: 7,
      title: "Verification Process",
      description: "Random home visits to 20% of selected scholars",
      icon: Home,
      details: [
        "Home visits conducted randomly",
        "Verification of information",
        "Ensures application truthfulness",
      ],
    },
    {
      step: 8,
      title: "Notification & Welcome",
      description: "Selection list sent and welcome letters distributed",
      icon: UserCheck,
      details: [
        "List sent to NED CSA",
        "Welcome letters dispatched",
        "Official notification sent",
      ],
    },
    {
      step: 9,
      title: "Personal Contact",
      description: "Phone call to scholars and parents",
      icon: Phone,
      details: [
        "Admin calls scholars and parents",
        "Decision communicated",
        "Communication channel established",
      ],
    },
    {
      step: 10,
      title: "Fund Transfer",
      description: "NED Scholars transfers scholarship amount to NED University",
      icon: DollarSign,
      details: [
        "Check issued to NED University",
        "Total scholarship amount transferred",
        "Financial process completed",
      ],
    },
    {
      step: 11,
      title: "Distribution",
      description: "NED University CSA distributes funds to scholars",
      icon: Award,
      details: [
        "CSA handles distribution",
        "Scholars receive funds",
        "Distribution process monitored",
      ],
    },
    {
      step: 12,
      title: "Receipt Confirmation",
      description: "Scholars confirm receipt of scholarship",
      icon: CheckCircle2,
      details: [
        "Receipt sent to Admin",
        "Confirmation documented",
        "Process completion verified",
      ],
    },
    {
      step: 13,
      title: "Social Media Engagement",
      description: "Connect with NED Scholars community",
      icon: Users,
      details: [
        "Subscribe to YouTube Channel",
        "Like on Facebook",
        "Follow on LinkedIn & Instagram",
      ],
    },
  ];

  const eligibilityPriorities = [
    {
      priority: "First Priority",
      title: "Bachelor of Engineering - First Year",
      description: "All first-year engineering students at NED University are eligible",
      icon: Award,
      color: "from-blue-600 to-purple-600",
    },
    {
      priority: "Second Priority",
      title: "Engineering Students - Years 2-4",
      description: "Limited scholarships for second, third, and fourth year engineering students",
      icon: Users,
      color: "from-purple-600 to-pink-600",
    },
    {
      priority: "Third Priority",
      title: "Non-Engineering NEDians",
      description: "Few scholarships available for non-engineering students",
      icon: Users,
      color: "from-green-600 to-blue-600",
    },
    {
      priority: "Limited Availability",
      title: "Non-NEDian Students",
      description: "Small number of scholarships for students from other institutions",
      icon: AlertCircle,
      color: "from-orange-600 to-red-600",
    },
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
    <div className="min-h-screen bg-gradient-to-r from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30 text-sm">
              SCHOLARSHIP PROGRAM
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Guidelines & Priorities
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
              Understand our comprehensive selection process and what to expect
              when applying for NED Scholars scholarship program
            </p>
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6 rounded-full shadow-xl transform hover:scale-105 transition-all duration-300"
              onClick={() => router.push("/forms/scholarship")}
            >
              Apply Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 -mt-10 relative z-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4">APPLICATION TIMELINE</Badge>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Key Dates & Milestones
              </h2>
              <p className="text-gray-600 text-lg">
                Important dates throughout the scholarship application process
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {timeline.map((item, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg"
                >
                  <CardContent className="p-6 text-center">
                    <div
                      className={cn(
                        "w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center",
                        item.color === "blue" && "bg-blue-100",
                        item.color === "purple" && "bg-purple-100",
                        item.color === "green" && "bg-green-100"
                      )}
                    >
                      <item.icon
                        className={cn(
                          "w-8 h-8",
                          item.color === "blue" && "text-blue-600",
                          item.color === "purple" && "text-purple-600",
                          item.color === "green" && "text-green-600"
                        )}
                      />
                    </div>
                    <Badge variant="secondary" className="mb-3">
                      {item.month}
                    </Badge>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Principles Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4">CORE PRINCIPLES</Badge>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Our Approach
              </h2>
              <p className="text-gray-600 text-lg">
                Understanding the foundation of our scholarship program
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-xl">
                <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    Need-Cum-Merit Basis
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-gray-700 mb-4">
                    Scholarships are awarded based on both financial need and
                    academic merit, ensuring support reaches those who need it
                    most while maintaining high academic standards.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">
                        Financial need assessment
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">
                        Academic performance review
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">
                        Holistic evaluation process
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl">
                <CardHeader className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    Administration
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-gray-700 mb-4">
                    The NED Controller of Student Affairs (CSA) administers the
                    entire scholarship application process with support from NED
                    Scholars alumni.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">
                        NED CSA manages applications
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">
                        Alumni representatives conduct interviews
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">
                        Transparent selection process
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Priorities */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4">PRIORITY LEVELS</Badge>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Student Eligibility Priorities
              </h2>
              <p className="text-gray-600 text-lg">
                Understanding who receives priority in our selection process
              </p>
            </div>

            <div className="space-y-6">
              {eligibilityPriorities.map((priority, index) => (
                <Card
                  key={index}
                  className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className={cn("bg-gradient-to-r h-2", priority.color)}></div>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div
                        className={cn(
                          "w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 bg-gradient-to-r",
                          priority.color
                        )}
                      >
                        <priority.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Badge variant="secondary">{priority.priority}</Badge>
                          <h3 className="text-xl font-bold text-gray-800">
                            {priority.title}
                          </h3>
                        </div>
                        <p className="text-gray-600">{priority.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Selection Committee */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4">OUR TEAM</Badge>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Selection Committee
              </h2>
              <p className="text-gray-600 text-lg">
                Experienced professionals and senior NEDians who evaluate
                applications
              </p>
            </div>

            <Card className="border-0 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Committee Members
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectionCommittee.map((member, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <UserCheck className="w-5 h-5 text-blue-600" />
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

      {/* Selection Process Steps */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4">STEP-BY-STEP</Badge>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Complete Selection Process
              </h2>
              <p className="text-gray-600 text-lg">
                From application to scholarship distribution - understand every
                step
              </p>
            </div>

            <div className="space-y-6">
              {selectionSteps.map((step, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                          {step.step}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start gap-4 mb-3">
                          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <step.icon className="w-5 h-5 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-1">
                              {step.title}
                            </h3>
                            <p className="text-gray-600 mb-3">
                              {step.description}
                            </p>
                          </div>
                        </div>
                        <div className="ml-14 space-y-2">
                          {step.details.map((detail, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-gray-600">
                                {detail}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interview Details */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4">INTERVIEW PROCESS</Badge>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                What to Expect in Interviews
              </h2>
              <p className="text-gray-600 text-lg">
                Be prepared for these topics during your online interview
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-xl">
                <CardHeader className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                  <CardTitle className="flex items-center gap-2">
                    <Video className="w-5 h-5" />
                    Interview Requirements
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-800 mb-1">
                          Online Platform
                        </p>
                        <p className="text-sm text-gray-600">
                          Interviews are conducted virtually
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-800 mb-1">
                          Parents Must Attend
                        </p>
                        <p className="text-sm text-gray-600">
                          Parents/guardians required to be present
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-800 mb-1">
                          Recording
                        </p>
                        <p className="text-sm text-gray-600">
                          All interviews are recorded for evaluation
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-800 mb-1">
                          Evaluation Form
                        </p>
                        <p className="text-sm text-gray-600">
                          Standardized scoring by committee members
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl">
                <CardHeader className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="w-5 h-5" />
                    Topics Discussed
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    {interviewQuestions.map((question, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <div className="w-5 h-5 bg-green-100 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs text-green-600 font-bold">
                            {index + 1}
                          </span>
                        </div>
                        <p className="text-gray-700">{question}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Verification Process */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-orange-600 to-red-600 text-white">
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Verification & Transparency
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-700 mb-6">
                  To ensure the integrity of our selection process and verify
                  the accuracy of applications:
                </p>
                <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mb-6">
                  <div className="flex items-start gap-3">
                    <Home className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-800 mb-2">
                        Random Home Visits
                      </p>
                      <p className="text-gray-700 text-sm">
                        20% of selected scholars&apos; homes are randomly visited by
                        selection committee members or NED CSA representatives
                        to ensure the truthfulness of applications.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Verification of financial information
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Confirmation of family circumstances
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Ensures fairness in selection
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Media Engagement */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <Badge className="mb-4">STAY CONNECTED</Badge>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Join Our Community
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                All scholarship recipients must engage with our community on
                social media
              </p>
            </div>

            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <a
                    href="https://youtube.com/@nedscholars"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-3 p-4 bg-red-50 rounded-lg hover:bg-red-100 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Youtube className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-center">
                      <p className="font-semibold text-gray-800">YouTube</p>
                      <p className="text-xs text-gray-600">Subscribe</p>
                    </div>
                  </a>

                  <a
                    href="https://facebook.com/nedscholars"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-3 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Facebook className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-center">
                      <p className="font-semibold text-gray-800">Facebook</p>
                      <p className="text-xs text-gray-600">Like & Friend</p>
                    </div>
                  </a>

                  <a
                    href="https://linkedin.com/company/nedscholars"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-3 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Linkedin className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-center">
                      <p className="font-semibold text-gray-800">LinkedIn</p>
                      <p className="text-xs text-gray-600">Follow</p>
                    </div>
                  </a>

                  <a
                    href="https://instagram.com/nedscholars"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-3 p-4 bg-pink-50 rounded-lg hover:bg-pink-100 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Instagram className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-center">
                      <p className="font-semibold text-gray-800">Instagram</p>
                      <p className="text-xs text-gray-600">Follow</p>
                    </div>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Now that you understand our process, take the first step towards
              securing your scholarship
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-10 py-6 rounded-full shadow-xl transform hover:scale-105 transition-all duration-300"
                onClick={() => router.push("/forms/scholarship")}
              >
                Start Your Application
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 text-lg px-10 py-6 rounded-full"
                onClick={() => router.push("/services/scholarship/eligibility")}
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