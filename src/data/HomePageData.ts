import {
  Award,
  CreditCard,
  DollarSign,
  GraduationCap,
  Smartphone,
  TrendingUp,
  Wallet,
} from "lucide-react";
import { successStories } from "./SuccessStories";

export const banners = [
  {
    title: "BUILDING A BETTER FUTURE",
    subtitle: "Education Today, Impact Forever",
    description:
      "Empower communities through education and help create lasting change. Your contribution today fuels generations of progress and innovation!",
    buttonText: "CONTRIBUTE NOW",
    gradient: "from-blue-600 to-purple-700",
  },
  {
    title: "PROMOTING STEM EDUCATION",
    subtitle: "Empowering Future Through Education",
    description:
      "A single person with the right education can change the life of an entire family!",
    buttonText: "DONATE NOW",
    gradient: "from-green-600 to-blue-600",
  },
  {
    title: "SUPPORT HIGHER EDUCATION",
    subtitle: "Empowering the Innovators of Tomorrow",
    description:
      "Investing in education is investing in a brighter future for all!",
    buttonText: "JOIN THE CAUSE",
    gradient: "from-purple-600 to-pink-600",
  },
];

export const stats = [
  {
    icon: Award,
    label: "Scholarships Provided",
    value: "600",
    color: "text-blue-600",
  },
  {
    icon: DollarSign,
    label: "Financial Aid Provided",
    value: "$478,818",
    color: "text-green-600",
  },
  {
    icon: GraduationCap,
    label: "Graduated Scholars",
    value: "131",
    color: "text-purple-600",
  },
  {
    icon: TrendingUp,
    label: "Success Rate",
    value: "87%",
    color: "text-orange-600",
  },
];

export const causes = [
  { name: "STEM-Focused Events", percentage: 80, color: "bg-blue-500" },
  { name: "Financial Support", percentage: 90, color: "bg-green-500" },
  { name: "Scholarship", percentage: 95, color: "bg-purple-500" },
  { name: "Medical and Others", percentage: 37, color: "bg-orange-500" },
];


export const paymentMethods = [
  { name: "Credit Card", icon: CreditCard },
  { name: "PayPal", icon: Wallet },
  { name: "Bank Transfer", icon: DollarSign },
  { name: "Mobile Pay", icon: Smartphone },
];
