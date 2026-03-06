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
  ArrowRight,
  Shield,
  UserCheck,
} from "lucide-react";
import Link from "next/link";

export default function ScholarshipGuidelines() {
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
      <section className="relative overflow-hidden bg-gradient-to-r from-[#1164A3] to-[#68B9C4] text-white py-20">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              Scholarship Information
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Guidelines and Selection Process
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              NED University of Engineering and Technology, Pakistan
            </p>
            <Link
              href="/register/scholarship"
              className="inline-flex items-center gap-2 bg-white text-[#1164A3] hover:bg-gray-100 text-lg px-8 py-4 rounded-full shadow-xl font-semibold transform hover:scale-105 transition-all duration-300"
            >
              Apply Now
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#68B9C4]/20 rounded-full blur-3xl"></div>
      </section>

      {/* Guidelines Section — image beside key guidelines + eligibility cards */}
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

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-10">
              {/* Cards */}
              <div className="space-y-6">
                <Card className="shadow-lg border-[#1164A3]/20">
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
                          <span className="font-semibold">October and November</span>.
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Users className="w-5 h-5 text-[#82B4CC] mt-1 flex-shrink-0" />
                        <span className="text-gray-700">
                          The{" "}
                          <span className="font-semibold">NED Controller of Student Affairs</span>{" "}
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
                          <span className="font-semibold">December – January</span>.
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Users className="w-5 h-5 text-[#82B4CC] mt-1 flex-shrink-0" />
                        <span className="text-gray-700">
                          The NED Controller of Students Affairs distributes scholarships.
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Eligibility */}
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
                        <p className="font-semibold text-[#1164A3] mb-2">Primary Eligibility:</p>
                        <p className="text-gray-700">
                          All Bachelor of Engineering{" "}
                          <span className="font-semibold">first-year</span>{" "}
                          engineering students are eligible for applying.
                        </p>
                      </div>
                      <div className="bg-[#82B4CC]/10 border-l-4 border-[#82B4CC] p-4 rounded">
                        <p className="font-semibold text-[#1164A3] mb-2">Additional Opportunities:</p>
                        <p className="text-gray-700">
                          Few scholarships are available for students in the{" "}
                          <span className="font-semibold">second, third, and fourth year</span>{" "}
                          Engineering and Non-Engineering NEDians.
                        </p>
                      </div>
                      <div className="bg-[#B0A3B3]/20 border-l-4 border-[#B0A3B3] p-4 rounded">
                        <p className="font-semibold text-[#1164A3] mb-2">Limited Availability:</p>
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

              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[560px]">
                <img
                  src="/images/guidelines-principles.jpg"
                  alt="NED Scholars scholarship program overview"
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

      {/* Selection Committee Section — image beside committee cards */}
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

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px]">
                <img
                  src="/images/guidelines-committee.jpg"
                  alt="NED Scholars selection committee members"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1164A3]/50 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-white text-sm font-medium bg-black/30 rounded-xl px-4 py-2 backdrop-blur-sm">
                    Industry professionals and academics ensuring fair, unbiased selection
                  </p>
                </div>
                <div className="absolute -bottom-3 -left-3 w-full h-full rounded-2xl border-4 border-[#68B9C4]/30 -z-10" />
              </div>

              {/* Committee list */}
              <div className="grid grid-cols-1 gap-4">
                {selectionCommittee.map((member, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-xl hover:border-[#1164A3] transition-all duration-300 border-[#82B4CC]/20"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-[#82B4CC]/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <UserCheck className="w-5 h-5 text-[#1164A3]" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-0.5">{member.name}</h4>
                          <p className="text-sm text-gray-600">{member.role}</p>
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

      {/* Selection Process Section — wide image banner + steps */}
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

            {/* Wide image banner */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl mb-10 h-56 md:h-64">
              <img
                src="/images/guidelines-process.jpg"
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
                <Card
                  key={index}
                  className="hover:shadow-lg hover:border-[#1164A3] transition-all duration-300 border-[#82B4CC]/20"
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

      {/* Important Notes Section — image beside notes cards */}
      <section className="py-16 bg-gradient-to-r from-[#B0A3B3]/10 to-[#82B4CC]/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[#68B9C4] text-white border-[#68B9C4]">
                Key Points
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Important Notes
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  {
                    icon: <Home className="w-6 h-6 flex-shrink-0 mt-1 text-[#1164A3]" />,
                    title: "Home Verification",
                    desc: "20% of scholars' homes are randomly visited to ensure the truthfulness of applications.",
                  },
                  {
                    icon: <Video className="w-6 h-6 flex-shrink-0 mt-1 text-[#1164A3]" />,
                    title: "Recorded Interviews",
                    desc: "All interviews are recorded for evaluation and transparency purposes.",
                  },
                  {
                    icon: <Users className="w-6 h-6 flex-shrink-0 mt-1 text-[#1164A3]" />,
                    title: "Parent Participation",
                    desc: "Parents/guardians must be present during the online interview process.",
                  },
                  {
                    icon: <Award className="w-6 h-6 flex-shrink-0 mt-1 text-[#1164A3]" />,
                    title: "Need-Cum-Merit Based",
                    desc: "Selection considers both financial need and academic merit of the applicants.",
                  },
                ].map((note, i) => (
                  <Card key={i} className="border-0 shadow-lg hover:shadow-xl hover:border-[#1164A3] transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-3">
                        {note.icon}
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">{note.title}</h4>
                          <p className="text-gray-600 text-sm">{note.desc}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px]">
                <img
                  src="/images/guidelines-verification.jpg"
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

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-[#1164A3] to-[#68B9C4] text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Apply?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Applications are accepted in October and November. Make sure you
              meet the eligibility criteria and have all required documents ready.
            </p>
            <Link
              href="/register/scholarship"
              className="inline-flex items-center gap-2 bg-white text-[#1164A3] hover:bg-gray-100 text-lg px-10 py-4 rounded-full font-semibold shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Start Your Application
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}