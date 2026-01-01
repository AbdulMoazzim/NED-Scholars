// "use client";

// import { ReactNode, useEffect, useState } from "react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { Input } from "@/components/ui/input";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import {
//   Briefcase,
//   MapPin,
//   Calendar,
//   DollarSign,
//   Users,
//   TrendingUp,
//   CheckCircle,
//   Target,
//   Lightbulb,
//   Award,
//   Clock,
//   Building2,
//   Search,
//   Filter,
//   Loader2,
//   ExternalLink,
//   Mail,
//   Phone,
//   Sparkles,
// } from "lucide-react";
// // import { GetActiveInternships } from "@/app/actions/internships";
// import { toast } from "sonner";
// import { useRouter } from "next/navigation";

// interface Internship {
//   id: string;
//   title: string;
//   company: string;
//   location: string;
//   locationType: string;
//   description: string;
//   category: string;
//   duration: string;
//   applicationDeadline?: Date;
//   applicationUrl?: string;
//   isPaid: boolean;
//   stipend?: string;
//   skills: string[];
//   status: string;
//   featured: boolean;
//   slug: string;
//   _count?: {
//     applications: number;
//   };
// }

// export default function InternshipsPage() {
//   const router = useRouter();
//   const [internships, setInternships] = useState<Internship[]>([]);
//   const [filteredInternships, setFilteredInternships] = useState<Internship[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [categoryFilter, setCategoryFilter] = useState("all");
//   const [locationFilter, setLocationFilter] = useState("all");

//   useEffect(() => {
//     fetchInternships();
//   }, []);

//   useEffect(() => {
//     filterInternships();
//   }, [searchQuery, categoryFilter, locationFilter, internships]);

//   const fetchInternships = async () => {
//     setLoading(true);
//     try {
//       const result = await GetActiveInternships();
//       if (result.success && result.data) {
//         setInternships(result.data as Internship[]);
//         setFilteredInternships(result.data as Internship[]);
//       }
//     } catch (error) {
//       toast.error("Failed to load internships");
//       console.error("Error fetching internships:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const filterInternships = () => {
//     let filtered = [...internships];

//     // Search filter
//     if (searchQuery) {
//       filtered = filtered.filter(
//         (int) =>
//           int.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//           int.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
//           int.description.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     }

//     // Category filter
//     if (categoryFilter !== "all") {
//       filtered = filtered.filter((int) => int.category === categoryFilter);
//     }

//     // Location filter
//     if (locationFilter !== "all") {
//       filtered = filtered.filter((int) => int.locationType === locationFilter);
//     }

//     setFilteredInternships(filtered);
//   };

//   const getCategoryIcon = (category: string) => {
//     const icons: Record<string, ReactNode> = {
//       engineering: <Building2 className="w-5 h-5" />,
//       information_technology: <Briefcase className="w-5 h-5" />,
//       software_development: <Briefcase className="w-5 h-5" />,
//       research_development: <Lightbulb className="w-5 h-5" />,
//       corporate_administrative: <Users className="w-5 h-5" />,
//       education_training: <Award className="w-5 h-5" />,
//     };
//     return icons[category] || <Briefcase className="w-5 h-5" />;
//   };

//   const getCategoryColor = (category: string) => {
//     const colors: Record<string, string> = {
//       engineering: "from-[#1164A3] to-[#68B9C4]",
//       information_technology: "from-[#68B9C4] to-[#82B4CC]",
//       software_development: "from-[#82B4CC] to-[#B0A3B3]",
//       research_development: "from-[#1164A3] to-[#82B4CC]",
//       corporate_administrative: "from-[#68B9C4] to-[#B0A3B3]",
//       education_training: "from-[#82B4CC] to-[#1164A3]",
//     };
//     return colors[category] || "from-[#1164A3] to-[#68B9C4]";
//   };

//   const formatCategory = (category: string) => {
//     return category
//       .split("_")
//       .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//       .join(" ");
//   };

//   const formatLocationType = (type: string) => {
//     return type.charAt(0).toUpperCase() + type.slice(1);
//   };

//   const overviewItems = [
//     {
//       icon: <Target className="w-8 h-8" />,
//       title: "Hands-on Experience",
//       description:
//         "Apply theoretical knowledge in real work environments and gain practical skills",
//       color: "from-[#1164A3] to-[#68B9C4]",
//     },
//     {
//       icon: <Users className="w-8 h-8" />,
//       title: "Professional Development",
//       description:
//         "Develop workplace skills, ethics, and understand organizational culture",
//       color: "from-[#68B9C4] to-[#82B4CC]",
//     },
//     {
//       icon: <TrendingUp className="w-8 h-8" />,
//       title: "Career Readiness",
//       description:
//         "Enhance employability, build networks, and explore career paths",
//       color: "from-[#82B4CC] to-[#B0A3B3]",
//     },
//     {
//       icon: <Award className="w-8 h-8" />,
//       title: "Industry Exposure",
//       description:
//         "Gain insight into expectations, responsibilities, and workflows",
//       color: "from-[#1164A3] to-[#82B4CC]",
//     },
//   ];

//   const learningOutcomes = [
//     "Practical experience relevant to your field",
//     "Improved technical and professional skills",
//     "Understanding of workplace dynamics",
//     "Enhanced confidence and problem-solving abilities",
//     "Professional network development",
//     "Industry insights and career clarity",
//   ];

//   const benefits = [
//     {
//       icon: <Briefcase className="w-6 h-6" />,
//       text: "Real-world professional experience",
//     },
//     {
//       icon: <CheckCircle className="w-6 h-6" />,
//       text: "Strengthened CV and portfolio",
//     },
//     {
//       icon: <TrendingUp className="w-6 h-6" />,
//       text: "Improved job readiness",
//     },
//     {
//       icon: <Users className="w-6 h-6" />,
//       text: "Confidence and professional growth",
//     },
//     {
//       icon: <Target className="w-6 h-6" />,
//       text: "Career path exploration",
//     },
//     {
//       icon: <Award className="w-6 h-6" />,
//       text: "Industry connections",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
//       {/* Hero Section */}
//       <section className="bg-gradient-to-r from-[#1164A3] via-[#68B9C4] to-[#82B4CC] text-white py-20">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto text-center">
//             <Badge className="mb-4 bg-white/20 text-white border-white/30 text-base px-4 py-2">
//               Professional Development
//             </Badge>
//             <h1 className="text-5xl md:text-6xl font-bold mb-6">
//               Internship Opportunities
//             </h1>
//             <p className="text-2xl text-white/90 mb-4">
//               Bridge the Gap Between Theory and Practice
//             </p>
//             <p className="text-xl text-white/80 max-w-3xl mx-auto">
//               Connect with meaningful internship opportunities that complement your
//               academic learning and prepare you for real-world challenges
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Overview Section */}
//       <section className="py-20">
//         <div className="container mx-auto px-4">
//           <div className="max-w-6xl mx-auto">
//             <div className="text-center mb-12">
//               <Badge className="mb-4 text-base bg-[#68B9C4] text-white">
//                 Program Overview
//               </Badge>
//               <h2 className="text-4xl font-bold text-gray-800 mb-4">
//                 Why Internships Matter
//               </h2>
//               <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//                 Internships are a vital part of a student&apos;s academic and professional
//                 development, providing hands-on experience that complements classroom
//                 learning.
//               </p>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
//               {overviewItems.map((item, index) => (
//                 <Card
//                   key={index}
//                   className="hover:shadow-2xl hover:border-[#1164A3] transition-all duration-300"
//                 >
//                   <CardContent className="p-8">
//                     <div className="flex items-start gap-6">
//                       <div
//                         className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center text-white flex-shrink-0`}
//                       >
//                         {item.icon}
//                       </div>
//                       <div>
//                         <h3 className="text-xl font-bold text-gray-800 mb-2">
//                           {item.title}
//                         </h3>
//                         <p className="text-gray-600">{item.description}</p>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Learning Outcomes */}
//       <section className="py-20 bg-gradient-to-r from-[#B0A3B3]/10 to-[#82B4CC]/10">
//         <div className="container mx-auto px-4">
//           <div className="max-w-6xl mx-auto">
//             <div className="text-center mb-12">
//               <Badge className="mb-4 text-base bg-[#1164A3] text-white">
//                 What You&apos;ll Gain
//               </Badge>
//               <h2 className="text-4xl font-bold text-gray-800 mb-4">
//                 Learning Outcomes
//               </h2>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {learningOutcomes.map((outcome, index) => (
//                 <Card
//                   key={index}
//                   className="border-[#82B4CC]/30 hover:border-[#1164A3] transition-all"
//                 >
//                   <CardContent className="p-6 flex items-start gap-4">
//                     <CheckCircle className="w-6 h-6 text-[#68B9C4] flex-shrink-0 mt-1" />
//                     <p className="text-gray-700 font-medium">{outcome}</p>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Student Benefits */}
//       <section className="py-20">
//         <div className="container mx-auto px-4">
//           <div className="max-w-6xl mx-auto">
//             <div className="text-center mb-12">
//               <Badge className="mb-4 text-base bg-[#68B9C4] text-white">
//                 Student Benefits
//               </Badge>
//               <h2 className="text-4xl font-bold text-gray-800 mb-4">
//                 How You&apos;lll Benefit
//               </h2>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {benefits.map((benefit, index) => (
//                 <Card
//                   key={index}
//                   className="border-[#82B4CC]/30 hover:shadow-lg transition-all"
//                 >
//                   <CardContent className="p-6 flex items-center gap-4">
//                     <div className="w-12 h-12 rounded-lg bg-[#1164A3]/10 flex items-center justify-center text-[#1164A3]">
//                       {benefit.icon}
//                     </div>
//                     <p className="text-gray-700 font-medium">{benefit.text}</p>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Available Internships */}
//       <section className="py-20 bg-gradient-to-r from-gray-50 to-[#82B4CC]/10">
//         <div className="container mx-auto px-4">
//           <div className="max-w-7xl mx-auto">
//             <div className="text-center mb-12">
//               <Badge className="mb-4 text-base bg-[#1164A3] text-white">
//                 <Sparkles className="w-4 h-4 mr-1 inline" />
//                 Current Opportunities
//               </Badge>
//               <h2 className="text-4xl font-bold text-gray-800 mb-4">
//                 Available Internships
//               </h2>
//               <p className="text-xl text-gray-600">
//                 Explore opportunities in various fields and start your career journey
//               </p>
//             </div>

//             {/* Filters */}
//             <Card className="mb-8 border-[#82B4CC]/30">
//               <CardContent className="p-6">
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                   <div className="relative">
//                     <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
//                     <Input
//                       placeholder="Search internships..."
//                       value={searchQuery}
//                       onChange={(e) => setSearchQuery(e.target.value)}
//                       className="pl-10 border-[#82B4CC]/50 focus:ring-[#1164A3]"
//                     />
//                   </div>
//                   <Select value={categoryFilter} onValueChange={setCategoryFilter}>
//                     <SelectTrigger className="border-[#82B4CC]/50">
//                       <Filter className="w-4 h-4 mr-2" />
//                       <SelectValue placeholder="Category" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="all">All Categories</SelectItem>
//                       <SelectItem value="engineering">Engineering</SelectItem>
//                       <SelectItem value="information_technology">IT</SelectItem>
//                       <SelectItem value="software_development">
//                         Software Development
//                       </SelectItem>
//                       <SelectItem value="research_development">
//                         Research & Development
//                       </SelectItem>
//                       <SelectItem value="corporate_administrative">
//                         Corporate & Admin
//                       </SelectItem>
//                       <SelectItem value="education_training">
//                         Education & Training
//                       </SelectItem>
//                     </SelectContent>
//                   </Select>
//                   <Select value={locationFilter} onValueChange={setLocationFilter}>
//                     <SelectTrigger className="border-[#82B4CC]/50">
//                       <MapPin className="w-4 h-4 mr-2" />
//                       <SelectValue placeholder="Location Type" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="all">All Types</SelectItem>
//                       <SelectItem value="onsite">On-site</SelectItem>
//                       <SelectItem value="remote">Remote</SelectItem>
//                       <SelectItem value="hybrid">Hybrid</SelectItem>
//                     </SelectContent>
//                   </Select>
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Internship Cards */}
//             {loading ? (
//               <div className="flex justify-center items-center py-20">
//                 <Loader2 className="w-12 h-12 animate-spin text-[#1164A3]" />
//               </div>
//             ) : filteredInternships.length === 0 ? (
//               <Card className="border-[#82B4CC]/30">
//                 <CardContent className="p-20 text-center">
//                   <Briefcase className="w-16 h-16 text-[#68B9C4] mx-auto mb-4" />
//                   <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                     No Internships Found
//                   </h3>
//                   <p className="text-gray-600">
//                     Try adjusting your filters or check back later for new opportunities
//                   </p>
//                 </CardContent>
//               </Card>
//             ) : (
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {filteredInternships.map((internship) => (
//                   <Card
//                     key={internship.id}
//                     className={`hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 ${
//                       internship.featured
//                         ? "border-[#1164A3] bg-gradient-to-br from-[#1164A3]/5 to-[#68B9C4]/5"
//                         : "border-[#82B4CC]/30 hover:border-[#1164A3]"
//                     }`}
//                     onClick={() => router.push(`/internships/${internship.slug}`)}
//                   >
//                     {internship.featured && (
//                       <div className="absolute top-0 right-0 bg-gradient-to-r from-[#1164A3] to-[#68B9C4] text-white px-3 py-1 rounded-bl-lg rounded-tr-lg text-xs font-semibold">
//                         <Sparkles className="w-3 h-3 inline mr-1" />
//                         Featured
//                       </div>
//                     )}
//                     <CardHeader>
//                       <div
//                         className={`w-12 h-12 rounded-lg bg-gradient-to-r ${getCategoryColor(
//                           internship.category
//                         )} flex items-center justify-center text-white mb-4`}
//                       >
//                         {getCategoryIcon(internship.category)}
//                       </div>
//                       <CardTitle className="text-xl mb-2">
//                         {internship.title}
//                       </CardTitle>
//                       <div className="flex items-center gap-2 text-gray-600 mb-2">
//                         <Building2 className="w-4 h-4" />
//                         <span className="font-semibold">{internship.company}</span>
//                       </div>
//                     </CardHeader>
//                     <CardContent>
//                       <p className="text-gray-600 mb-4 line-clamp-2">
//                         {internship.description}
//                       </p>

//                       <div className="space-y-3 mb-4">
//                         <div className="flex items-center gap-2 text-sm text-gray-600">
//                           <MapPin className="w-4 h-4 text-[#1164A3]" />
//                           <span>{internship.location}</span>
//                           <Badge variant="outline" className="text-xs">
//                             {formatLocationType(internship.locationType)}
//                           </Badge>
//                         </div>

//                         <div className="flex items-center gap-2 text-sm text-gray-600">
//                           <Clock className="w-4 h-4 text-[#1164A3]" />
//                           <span>{internship.duration}</span>
//                         </div>

//                         {internship.isPaid && internship.stipend && (
//                           <div className="flex items-center gap-2 text-sm text-gray-600">
//                             <DollarSign className="w-4 h-4 text-[#68B9C4]" />
//                             <span className="font-semibold text-[#68B9C4]">
//                               {internship.stipend}
//                             </span>
//                           </div>
//                         )}
//                       </div>

//                       <div className="flex flex-wrap gap-2 mb-4">
//                         <Badge className="bg-[#82B4CC] text-white text-xs">
//                           {formatCategory(internship.category)}
//                         </Badge>
//                         {internship.skills.slice(0, 2).map((skill, idx) => (
//                           <Badge
//                             key={idx}
//                             variant="outline"
//                             className="text-xs border-[#82B4CC]"
//                           >
//                             {skill}
//                           </Badge>
//                         ))}
//                         {internship.skills.length > 2 && (
//                           <Badge variant="outline" className="text-xs">
//                             +{internship.skills.length - 2} more
//                           </Badge>
//                         )}
//                       </div>

//                       {internship.applicationDeadline && (
//                         <div className="mb-4 p-2 bg-amber-50 border border-amber-200 rounded text-xs text-amber-800 flex items-center gap-2">
//                           <Calendar className="w-3 h-3" />
//                           Deadline:{" "}
//                           {new Date(internship.applicationDeadline).toLocaleDateString()}
//                         </div>
//                       )}

//                       <Button
//                         className="w-full bg-gradient-to-r from-[#1164A3] to-[#68B9C4] text-white"
//                         onClick={(e) => {
//                           e.stopPropagation();
//                           router.push(`/internships/${internship.slug}`);
//                         }}
//                       >
//                         View Details
//                         <ExternalLink className="w-4 h-4 ml-2" />
//                       </Button>
//                     </CardContent>
//                   </Card>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//       </section>

//       {/* Conclusion CTA */}
//       <section className="py-20 bg-gradient-to-r from-[#1164A3] via-[#68B9C4] to-[#82B4CC] text-white">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto text-center">
//             <h2 className="text-4xl font-bold mb-6">
//               Ready to Start Your Professional Journey?
//             </h2>
//             <p className="text-xl text-white/90 mb-8">
//               NED Scholars connects students with meaningful internship opportunities
//               that support skill development and career preparation. Join us in
//               bridging the gap between academic learning and professional success.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Button
//                 onClick={() => {
//                   const internshipsSection = document.querySelector(
//                     'section:has([class*="Available Internships"])'
//                   );
//                   internshipsSection?.scrollIntoView({ behavior: "smooth" });
//                 }}
//                 className="bg-white text-[#1164A3] hover:bg-gray-100 text-lg px-8 py-6"
//               >
//                 Browse Opportunities
//                 <ExternalLink className="w-5 h-5 ml-2" />
//               </Button>
//               <Button
//                 variant="outline"
//                 onClick={() => router.push("/contact")}
//                 className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6"
//               >
//                 <Mail className="w-5 h-5 mr-2" />
//                 Contact Us
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
import React from 'react'

export default function page() {
  return (
    <div>page</div>
  )
}
