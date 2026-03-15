import Award from "../data/images/HomePage/scholarship_provided.png"
import GraduationCap from "../data/images/HomePage/scholars.png"
import TrendingUp from "../data/images/HomePage/rate.png"
import DollarSign from "../data/images/HomePage/aid.svg"
import { CreditCard, Smartphone, Wallet } from "lucide-react";

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
];;


