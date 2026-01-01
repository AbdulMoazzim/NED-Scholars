"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle2,
  Calendar,
  Users,
  FileText,
  Video,
  Home,
  Phone,
  Mail,
  Award,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function ScholarshipGuidelines() {

  const router = useRouter();
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
      description: "Apply online through the scholarship portal.",
      icon: <FileText className="w-6 h-6" />,
    },
    {
      step: 2,
      title: "Application Compilation",
      description:
        "NED CSA compiles applications and submits them to the NED Scholars Selection Committee comprised of senior NEDIANs, professionals, and industrialists.",
      icon: <Users className="w-6 h-6" />,
    },
    {
      step: 3,
      title: "Initial Screening",
      description:
        "Selection committee uses initial criteria of 'need' (total earnings / total family members) and invites all applicants for an interview.",
      icon: <CheckCircle2 className="w-6 h-6" />,
    },
    {
      step: 4,
      title: "Interview Setup",
      description:
        "At the online interview, all applicants must have their parents/guardian to talk with the committee.",
      icon: <Video className="w-6 h-6" />,
    },
    {
      step: 5,
      title: "Interview Process",
      description:
        "Questions regarding electric bills, rent and ownership of residence, employed family members, etc. are asked to identify the importance of 'need'. All interviews are recorded.",
      icon: <Phone className="w-6 h-6" />,
    },
    {
      step: 6,
      title: "Evaluation",
      description:
        "Selection committee members use an Evaluation Form to judge applicants, and cumulative scores help them select scholars.",
      icon: <Award className="w-6 h-6" />,
    },
    {
      step: 7,
      title: "Home Verification",
      description:
        "After selection, 20% of scholars' homes are randomly visited by a selection committee member or NED CSA to ensure truthfulness.",
      icon: <Home className="w-6 h-6" />,
    },
    {
      step: 8,
      title: "Selection Announcement",
      description:
        "Selection list is sent to NED CSA office, and Welcome Letters are sent to successful candidates.",
      icon: <Mail className="w-6 h-6" />,
    },
    {
      step: 9,
      title: "Parent Communication",
      description:
        "Admin-NED SCHOLARS makes phone calls to scholars and their parents to inform them about the decision and establish communication.",
      icon: <Phone className="w-6 h-6" />,
    },
    {
      step: 10,
      title: "Payment to University",
      description:
        "NED SCHOLARS issues a check for the total scholarship amount to NED University.",
      icon: <CheckCircle2 className="w-6 h-6" />,
    },
    {
      step: 11,
      title: "Distribution",
      description:
        "NED University, through CSA, distributes the scholarship amount to the scholars.",
      icon: <Users className="w-6 h-6" />,
    },
    {
      step: 12,
      title: "Receipt Confirmation",
      description:
        "Scholars send a receipt of their scholarship amount to Admin-NED Scholars.",
      icon: <FileText className="w-6 h-6" />,
    },
    {
      step: 13,
      title: "Social Media Engagement",
      description:
        "All scholars should subscribe to our YouTube Channel, Like and friend us on Facebook, and Follow us on LinkedIn and Instagram.",
      icon: <Award className="w-6 h-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1164A3] to-[#68B9C4] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              Scholarship Information
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Guidelines and Selection Process
            </h1>
            <p className="text-xl text-white/90">
              NED University of Engineering and Technology, Pakistan
            </p>
          </div>
        </div>
      </section>

      {/* Guidelines Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Scholarship Guidelines and Priorities
              </h2>
              <p className="text-gray-600 text-lg">
                Understanding the scholarship application and selection criteria
              </p>
            </div>

            <Card className="mb-8 shadow-lg border-[#1164A3]/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="w-6 h-6 text-[#1164A3]" />
                  <span>Key Guidelines</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-[#68B9C4] mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      Scholarships are awarded on a{" "}
                      <span className="font-semibold">&quot;need-cum-merit&quot;</span>{" "}
                      basis.
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Calendar className="w-5 h-5 text-[#1164A3] mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      Applications are accepted and reviewed in{" "}
                      <span className="font-semibold">
                        October and November
                      </span>
                      .
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Users className="w-5 h-5 text-[#82B4CC] mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      The{" "}
                      <span className="font-semibold">
                        NED Controller of Student Affairs
                      </span>{" "}
                      administrates the scholarship application process.
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Video className="w-5 h-5 text-[#1164A3] mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      Selection is done through an{" "}
                      <span className="font-semibold">interview process</span>{" "}
                      by NED SCHOLARS and MECH 80-81 alumni representatives.
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Calendar className="w-5 h-5 text-[#68B9C4] mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      Interviews are conducted in{" "}
                      <span className="font-semibold">
                        December – January
                      </span>
                      .
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Users className="w-5 h-5 text-[#82B4CC] mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      The NED Controller of Students Affairs distributes
                      scholarships.
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Eligibility Section */}
            <Card className="shadow-lg border-[#1164A3]/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CheckCircle2 className="w-6 h-6 text-[#68B9C4]" />
                  <span>Eligibility Criteria</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-[#68B9C4]/10 border-l-4 border-[#68B9C4] p-4 rounded">
                    <p className="font-semibold text-[#1164A3] mb-2">
                      Primary Eligibility:
                    </p>
                    <p className="text-gray-700">
                      All Bachelor of Engineering{" "}
                      <span className="font-semibold">first-year</span>{" "}
                      engineering students are eligible for applying.
                    </p>
                  </div>

                  <div className="bg-[#82B4CC]/10 border-l-4 border-[#82B4CC] p-4 rounded">
                    <p className="font-semibold text-[#1164A3] mb-2">
                      Additional Opportunities:
                    </p>
                    <p className="text-gray-700">
                      Few scholarships are available for students in the{" "}
                      <span className="font-semibold">
                        second, third, and fourth year
                      </span>{" "}
                      Engineering and Non-Engineering NEDians.
                    </p>
                  </div>

                  <div className="bg-[#B0A3B3]/20 border-l-4 border-[#B0A3B3] p-4 rounded">
                    <p className="font-semibold text-[#1164A3] mb-2">
                      Limited Availability:
                    </p>
                    <p className="text-gray-700">
                      A small number of scholarships are available for{" "}
                      <span className="font-semibold">non-NEDian</span>{" "}
                      students.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Selection Committee Section */}
      <section className="py-16 bg-gradient-to-r from-[#B0A3B3]/10 to-[#82B4CC]/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[#68B9C4] text-white border-[#68B9C4]">
                Our Selection Committee
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Meet Our Selection Committee
              </h2>
              <p className="text-gray-600 text-lg">
                Comprised of senior NEDIANs, professionals, and industrialists
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {selectionCommittee.map((member, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl hover:border-[#1164A3] transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#1164A3] to-[#68B9C4] rounded-full flex items-center justify-center flex-shrink-0">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">
                          {member.name}
                        </h4>
                        <p className="text-sm text-gray-600">{member.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Selection Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[#1164A3] text-white border-[#1164A3]">
                Step-by-Step Process
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                13-Step Selection Process
              </h2>
              <p className="text-gray-600 text-lg">
                From application to social media engagement
              </p>
            </div>

            <div className="space-y-6">
              {selectionSteps.map((step, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg hover:border-[#1164A3] transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-r from-[#1164A3] to-[#68B9C4] rounded-full flex items-center justify-center text-white font-bold text-lg">
                          {step.step}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <div className="text-[#1164A3]">{step.icon}</div>
                          <h4 className="font-semibold text-lg text-gray-800">
                            {step.title}
                          </h4>
                        </div>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Important Notes Section */}
      <section className="py-16 bg-gradient-to-r from-[#1164A3] to-[#68B9C4] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Important Notes
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <Home className="w-6 h-6 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-2">Home Verification</h4>
                      <p className="text-white/90">
                        20% of scholars&quot; homes are randomly visited to ensure
                        the truthfulness of applications.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <Video className="w-6 h-6 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-2">Recorded Interviews</h4>
                      <p className="text-white/90">
                        All interviews are recorded for evaluation and
                        transparency purposes.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <Users className="w-6 h-6 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-2">Parent Participation</h4>
                      <p className="text-white/90">
                        Parents/guardians must be present during the online
                        interview process.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <Award className="w-6 h-6 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-2">Need-Cum-Merit Based</h4>
                      <p className="text-white/90">
                        Selection considers both financial need and academic
                        merit of the applicants.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Ready to Apply?
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Applications are accepted in October and November. Make sure you
              meet the eligibility criteria and have all required documents
              ready.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button 
                onClick={()=>{router.push("/register/scholarship")}} 
                className="bg-gradient-to-r from-[#1164A3] to-[#68B9C4] text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}