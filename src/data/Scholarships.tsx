import {
  Users,
  Award,
  Heart,
  CheckCircle,
  Target,
  Laptop,
  FileText,
  BookOpen,
} from "lucide-react";

export const expectations = [
  {
    icon: <Users className="w-6 h-6" />,
    title: "Active Participation",
    description: "Engage in organizational events and group activities",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Peer Networking",
    description: "Build strong connections with fellow scholars",
  },
  {
    icon: <CheckCircle className="w-6 h-6" />,
    title: "Maintain Integrity",
    description: "Be responsive and honest in all interactions",
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Represent Values",
    description: "Embody the organization's vision and mission",
  },
];

export const scholarGroups = [
  {
    title: "Research & Innovation Team",
    description:
      "Leading cutting-edge research projects and developing innovative solutions for real-world problems.",
    icon: <Target className="w-8 h-8" />,
    color: "from-indigo-500 to-purple-600",
  },
  {
    title: "Community Outreach Program",
    description:
      "Engaging with local communities and organizing social impact initiatives across Pakistan.",
    icon: <Users className="w-8 h-8" />,
    color: "from-green-500 to-teal-600",
  },
  {
    title: "Leadership Development Circle",
    description:
      "Building tomorrow's leaders through mentorship, workshops, and leadership challenges.",
    icon: <Award className="w-8 h-8" />,
    color: "from-orange-500 to-red-600",
  },
  {
    title: "Tech Innovation Hub",
    description:
      "Creating technological solutions and participating in hackathons and tech competitions.",
    icon: <Laptop className="w-8 h-8" />,
    color: "from-purple-500 to-pink-600",
  },
];

export const universities = [
  "NED University of Engineering and Technology, Karachi",
  "Sir Syed University of Engineering and Technology, Karachi",
  "Usman Institute of Technology, Karachi",
  "Iqra University, Karachi",
  "DHA Suffa University, Karachi",
  "National University of Science and Technology (NUST), Pakistan",
  "Bahauddin Zakariya University, Multan",
  "Muhammad Nawaz Shareef University of Agriculture, Multan",
  "Jinnah Sindh Medical University, Karachi",
  "Dow University of Health Sciences, Karachi",
];

export const benefits = [
  "Full tuition fees coverage",
  "Monthly stipend support",
  "Family support when needed",
  "Medical assistance",
  "Free courses and certifications",
  "Seminars and webinars",
  "Industrial visits and internships",
  "Innovation development platforms",
];

export const cards = [
  {
    icon: Laptop,
    title: "Laptop Scholarship",
    description: "Get the tools you need for success",
  },
  {
    icon: FileText,
    title: "Eligibility Criteria",
    description: "Check if you qualify for our program",
  },
  {
    icon: BookOpen,
    title: "Application Process",
    description: "Learn about our selection procedure",
  },
];

export const statsData = [
  {
    number: "10+",
    label: "Partner Universities",
    color: "text-indigo-400",
  },
  {
    number: "100%",
    label: "Tuition Coverage",
    color: "text-indigo-400",
  },
  {
    number: "500+",
    label: "Students Supported",
    color: "text-indigo-400",
  },
  {
    number: "∞",
    label: "Growth Opportunities",
    color: "text-indigo-400",
  },
];
