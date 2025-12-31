"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle2,
  GraduationCap,
  Users,
  Award,
  BookOpen,
  AlertCircle,
  ArrowRight,
  FileCheck,
} from "lucide-react";
import { redirect } from "next/navigation";
import { cn } from "@/lib/utils";

export default function EligibilityCriteriaPage() {

  const eligibilityCriteria = [
    {
      icon: Award,
      title: "Merit-Based Selection",
      description: "Scholarships are awarded on a 'need-cum-merit' basis",
      color: "blue",
      details: "We evaluate both academic excellence and financial need to ensure deserving students receive support.",
    },
    {
      icon: GraduationCap,
      title: "Geographic Eligibility",
      description: "Must be enrolled in schools/colleges/universities in Pakistan and the USA",
      color: "green",
      details: "Students from institutions in Pakistan or the United States are eligible to apply.",
    },
    {
      icon: Users,
      title: "NED University Preference",
      description: "Preference will be given to NED University of Engineering and Technology students",
      color: "purple",
      details: "While we prioritize NEDians, we also support talented students from other institutions.",
    },
    {
      icon: BookOpen,
      title: "STEM Focus",
      description: "Must be studying STEM related courses",
      color: "orange",
      details: "Science, Technology, Engineering, and Mathematics students are our primary focus.",
    },
    {
      icon: FileCheck,
      title: "Year of Study",
      description: "Scholarships available for second, third and fourth year students",
      color: "red",
      details: "We support Engineering and Non-Engineering NEDians in their advanced years of study.",
    },
    {
      icon: AlertCircle,
      title: "Non-NEDian Scholarships",
      description: "Limited scholarships available for non-NEDian students",
      color: "indigo",
      details: "A small number of scholarships are reserved for deserving students from other institutions.",
    },
  ];

  const preferences = [
    {
      priority: "High Priority",
      description: "Undergraduate Engineering students from NED University",
      color: "from-[#1164A3] to-[#68B9C4]",
    },
    {
      priority: "Medium Priority",
      description: "Non-Engineering NEDians in 2nd, 3rd, and 4th year",
      color: "from-[#68B9C4] to-[#82B4CC]",
    },
    {
      priority: "Available",
      description: "Non-NEDian STEM students (limited slots)",
      color: "from-[#82B4CC] to-[#B0A3B3]",
    },
  ];

  const colorClasses = {
    blue: "bg-[#82B4CC]/20 text-[#1164A3]",
    green: "bg-[#68B9C4]/20 text-[#1164A3]",
    purple: "bg-[#B0A3B3]/30 text-[#1164A3]",
    orange: "bg-[#82B4CC]/30 text-[#1164A3]",
    red: "bg-[#68B9C4]/30 text-[#1164A3]",
    indigo: "bg-[#B0A3B3]/40 text-[#1164A3]",
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-50 to-[#82B4CC]/10">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#1164A3] to-[#68B9C4] text-white py-20">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30 text-sm">
              SCHOLARSHIP PROGRAM
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Eligibility Criteria
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
              Find out if you qualify for our scholarship program and take the
              first step towards achieving your educational dreams
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-[#1164A3] hover:bg-gray-100 text-lg px-8 py-6 rounded-full shadow-xl transform hover:scale-105 transition-all duration-300"
                onClick={() => redirect("/register/scholarship")}
              >
                Apply Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#68B9C4]/20 rounded-full blur-3xl"></div>
      </section>

      {/* Quick Check Section */}
      <section className="py-16 -mt-10 relative z-20">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto shadow-2xl border-0">
            <CardHeader className="bg-gradient-to-r from-[#68B9C4] to-[#1164A3] text-white rounded-t-xl">
              <CardTitle className="text-2xl flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6" />
                Quick Eligibility Check
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <p className="text-gray-700 text-lg mb-6">
                Our scholarships are designed to support talented students who
                demonstrate both academic excellence and financial need. Here&apos;s
                what we look for:
              </p>
              <div className="space-y-3">
                {[
                  "Enrolled in an accredited institution in Pakistan or USA",
                  "Pursuing STEM (Science, Technology, Engineering, Mathematics) education",
                  "Demonstrable financial need",
                  "Strong academic record",
                  "Commitment to educational goals",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#68B9C4]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-[#68B9C4]" />
                    </div>
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Detailed Criteria Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[#68B9C4] text-white border-[#68B9C4]">DETAILED CRITERIA</Badge>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Who Can Apply?
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Review each criterion carefully to determine your eligibility for
              our scholarship program
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {eligibilityCriteria.map((criterion, index) => (
              <Card
                key={index}
                className="hover:shadow-xl hover:border-[#1164A3] transition-all duration-300 hover:-translate-y-2 border-[#82B4CC]/20 shadow-lg"
              >
                <CardContent className="p-6">
                  <div
                    className={cn(
                      "w-14 h-14 rounded-full flex items-center justify-center mb-4",
                      colorClasses[criterion.color as keyof typeof colorClasses]
                    )}
                  >
                    <criterion.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {criterion.title}
                  </h3>
                  <p className="text-gray-600 font-medium mb-3">
                    {criterion.description}
                  </p>
                  <p className="text-sm text-gray-500">{criterion.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Priority Levels Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[#1164A3] text-white border-[#1164A3]">SELECTION PREFERENCE</Badge>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Priority Levels
              </h2>
              <p className="text-gray-600 text-lg">
                Understanding our selection preferences helps you gauge your
                application strength
              </p>
            </div>

            <div className="space-y-6">
              {preferences.map((pref, index) => (
                <Card
                  key={index}
                  className="overflow-hidden border-[#82B4CC]/20 shadow-lg hover:shadow-xl hover:border-[#1164A3] transition-all"
                >
                  <div
                    className={cn(
                      "bg-gradient-to-r h-2",
                      pref.color
                    )}
                  ></div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between flex-wrap gap-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">
                          {pref.priority}
                        </h3>
                        <p className="text-gray-600">{pref.description}</p>
                      </div>
                      <Badge
                        className="text-base px-4 py-2 bg-[#82B4CC] text-white"
                      >
                        Priority {index + 1}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Requirements Section */}
      <section className="py-16 bg-gradient-to-r from-[#B0A3B3]/10 to-[#82B4CC]/10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[#68B9C4] text-white border-[#68B9C4]">IMPORTANT INFORMATION</Badge>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Key Requirements
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Need-Cum-Merit Basis */}
              <Card className="border-0 shadow-xl">
                <CardHeader className="bg-gradient-to-r from-[#1164A3] to-[#68B9C4] text-white">
                  <CardTitle className="flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    Need-Cum-Merit Basis
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-gray-700 mb-4">
                    We evaluate applications based on two key factors:
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#1164A3] rounded-full mt-2"></div>
                      <div>
                        <p className="font-semibold text-gray-800">
                          Financial Need
                        </p>
                        <p className="text-sm text-gray-600">
                          Demonstrated requirement for financial assistance
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#68B9C4] rounded-full mt-2"></div>
                      <div>
                        <p className="font-semibold text-gray-800">
                          Academic Merit
                        </p>
                        <p className="text-sm text-gray-600">
                          Strong academic performance and potential
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* STEM Focus */}
              <Card className="border-0 shadow-xl">
                <CardHeader className="bg-gradient-to-r from-[#68B9C4] to-[#82B4CC] text-white">
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5" />
                    STEM Education Focus
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-gray-700 mb-4">
                    Eligible fields of study include:
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      "Engineering",
                      "Computer Science",
                      "Mathematics",
                      "Physics",
                      "Chemistry",
                      "Biology",
                      "Technology",
                      "Data Science",
                    ].map((field, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-sm text-gray-700"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#68B9C4]" />
                        {field}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#1164A3] to-[#68B9C4] text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Apply?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              If you meet the eligibility criteria, take the next step towards
              securing your scholarship. Our application process is simple and
              straightforward.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-[#1164A3] hover:bg-gray-100 text-lg px-10 py-6 rounded-full shadow-xl transform hover:scale-105 transition-all duration-300"
                onClick={() => redirect("/register/scholarship")}
              >
                Start Your Application
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-[#82B4CC] bg-[#82B4CC]/10">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#82B4CC]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="w-6 h-6 text-[#1164A3]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      Important Note
                    </h3>
                    <div className="space-y-2 text-gray-700">
                      <p>
                        • Meeting the eligibility criteria does not guarantee a
                        scholarship award
                      </p>
                      <p>
                        • Scholarships are awarded based on available funding
                        and application strength
                      </p>
                      <p>
                        • All applications are reviewed thoroughly by our
                        selection committee
                      </p>
                      <p>
                        • Incomplete applications will not be considered for
                        review
                      </p>
                      <p>
                        • Priority is given to students demonstrating both
                        strong academic performance and genuine financial need
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}