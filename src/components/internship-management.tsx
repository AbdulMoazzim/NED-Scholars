"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Briefcase,
  Plus,
  Edit,
  Trash2,
  Eye,
  Star,
  MapPin,
  Users,
  FileText,
  CheckCircle,
  Clock,
  Loader2,
  Search,
  Filter,
  ExternalLink,
} from "lucide-react";
import {
  GetAllInternships,
  CreateInternship,
  UpdateInternship,
  DeleteInternship,
  GetAllApplications,
  UpdateApplicationStatus,
  GetInternshipStats,
} from "@/app/actions/internships";
import { toast } from "sonner";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { CreateInternshipData, Internship, InternshipApplication } from "@/lib/form-types";
import Link from "next/link";



interface Stats {
  totalInternships: number;
  activeInternships: number;
  totalApplications: number;
  pendingApplications: number;
}

export default function InternshipManagement() {
  const [internships, setInternships] = useState<Internship[]>([]);
  const [applications, setApplications] = useState<InternshipApplication[]>([]);
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingInternship, setEditingInternship] = useState<Internship | null>(null);
  const [viewingApplication, setViewingApplication] = useState<InternshipApplication | null>(null);
  const [activeTab, setActiveTab] = useState("internships");
  
  // Filters
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [applicationStatusFilter, setApplicationStatusFilter] = useState("all");

  // Form state
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    locationType: "onsite",
    description: "",
    responsibilities: "",
    requirements: "",
    category: "software_development",
    duration: "",
    startDate: "",
    endDate: "",
    applicationDeadline: "",
    applicationUrl: "",
    contactEmail: "",
    contactPhone: "",
    isPaid: false,
    stipend: "",
    skills: "",
    benefits: "",
    numberOfPositions: "1",
    status: "active",
    featured: false,
    slug: "",
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [internshipsRes, applicationsRes, statsRes] = await Promise.all([
        GetAllInternships(),
        GetAllApplications(),
        GetInternshipStats(),
      ]);

      if (internshipsRes.success) setInternships(internshipsRes.data as Internship[]);
      if (applicationsRes.success) setApplications(applicationsRes.data as InternshipApplication[]);
      if (statsRes.success) setStats(statsRes.data as Stats);
    } catch (error) {
      toast.error("Failed to load data");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const internshipData = {
        ...formData,
        skills: formData.skills.split(",").map(s => s.trim()).filter(Boolean),
        numberOfPositions: formData.numberOfPositions ? parseInt(formData.numberOfPositions) : 1,
        startDate: formData.startDate ? new Date(formData.startDate) : undefined,
        endDate: formData.endDate ? new Date(formData.endDate) : undefined,
        applicationDeadline: formData.applicationDeadline ? new Date(formData.applicationDeadline) : undefined,
        slug: formData.slug || formData.title.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, ""),
      };

      let result;
      if (editingInternship) {
        result = await UpdateInternship(editingInternship.id, internshipData);
      } else {
        result = await CreateInternship(internshipData as CreateInternshipData);
      }

      if (result.success) {
        toast.success(`Internship ${editingInternship ? "updated" : "created"} successfully`);
        setIsFormOpen(false);
        resetForm();
        fetchData();
      } else {
        toast.error(result.error || "Failed to save internship");
      }
    } catch (error) {
      toast.error("An error occurred");
      console.error(error);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this internship?")) return;

    try {
      const result = await DeleteInternship(id);
      if (result.success) {
        toast.success("Internship deleted successfully");
        fetchData();
      } else {
        toast.error(result.error || "Failed to delete internship");
      }
    } catch (error) {
      toast.error("An error occurred");
      console.error(error);
    }
  };

  const handleEdit = (internship: Internship) => {
    setEditingInternship(internship);
    setFormData({
      title: internship.title,
      company: internship.company,
      location: internship.location,
      locationType: internship.locationType,
      description: internship.description,
      responsibilities: internship.responsibilities,
      requirements: internship.requirements,
      category: internship.category,
      duration: internship.duration,
      startDate: internship.startDate ? new Date(internship.startDate).toISOString().split("T")[0] : "",
      endDate: internship.endDate ? new Date(internship.endDate).toISOString().split("T")[0] : "",
      applicationDeadline: internship.applicationDeadline ? new Date(internship.applicationDeadline).toISOString().split("T")[0] : "",
      applicationUrl: internship.applicationUrl || "",
      contactEmail: internship.contactEmail || "",
      contactPhone: internship.contactPhone || "",
      isPaid: internship.isPaid,
      stipend: internship.stipend || "",
      skills: internship.skills.join(", "),
      benefits: internship.benefits || "",
      numberOfPositions: internship.numberOfPositions?.toString() || "1",
      status: internship.status,
      featured: internship.featured,
      slug: internship.slug,
    });
    setIsFormOpen(true);
  };

  const resetForm = () => {
    setEditingInternship(null);
    setFormData({
      title: "",
      company: "",
      location: "",
      locationType: "onsite",
      description: "",
      responsibilities: "",
      requirements: "",
      category: "software_development",
      duration: "",
      startDate: "",
      endDate: "",
      applicationDeadline: "",
      applicationUrl: "",
      contactEmail: "",
      contactPhone: "",
      isPaid: false,
      stipend: "",
      skills: "",
      benefits: "",
      numberOfPositions: "1",
      status: "active",
      featured: false,
      slug: "",
    });
  };

  const handleUpdateApplicationStatus = async (applicationId: string, status: string) => {
    try {
      const result = await UpdateApplicationStatus(applicationId, status);
      if (result.success) {
        toast.success("Application status updated");
        fetchData();
        setViewingApplication(null);
      } else {
        toast.error(result.error || "Failed to update status");
      }
    } catch (error) {
      toast.error("An error occurred");
      console.error(error);
    }
  };

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      active: "bg-green-100 text-green-800",
      inactive: "bg-gray-100 text-gray-800",
      completed: "bg-blue-100 text-blue-800",
      cancelled: "bg-red-100 text-red-800",
    };
    return colors[status] || "bg-gray-100 text-gray-800";
  };

  const getApplicationStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      submitted: "bg-blue-100 text-blue-800",
      under_review: "bg-yellow-100 text-yellow-800",
      shortlisted: "bg-purple-100 text-purple-800",
      interview_scheduled: "bg-indigo-100 text-indigo-800",
      accepted: "bg-green-100 text-green-800",
      rejected: "bg-red-100 text-red-800",
      withdrawn: "bg-gray-100 text-gray-800",
    };
    return colors[status] || "bg-gray-100 text-gray-800";
  };

  const formatCategory = (category: string) => {
    return category.split("_").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  };

  const filteredInternships = internships.filter(int => {
    const matchesSearch = 
      int.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      int.company.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "all" || int.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const filteredApplications = applications.filter(app => {
    const matchesSearch =
      app.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.internship.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = applicationStatusFilter === "all" || app.applicationStatus === applicationStatusFilter;
    return matchesSearch && matchesStatus;
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="w-12 h-12 animate-spin text-[#1164A3]" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Internship Management</h1>
          <p className="text-gray-600">Manage internship postings and applications</p>
        </div>

        {/* Stats Cards */}
        {stats && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="border-[#1164A3]">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Total Internships</p>
                    <p className="text-3xl font-bold text-[#1164A3]">{stats.totalInternships}</p>
                  </div>
                  <Briefcase className="w-12 h-12 text-[#1164A3] opacity-20" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-[#68B9C4]">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Active Postings</p>
                    <p className="text-3xl font-bold text-[#68B9C4]">{stats.activeInternships}</p>
                  </div>
                  <CheckCircle className="w-12 h-12 text-[#68B9C4] opacity-20" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-[#82B4CC]">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Total Applications</p>
                    <p className="text-3xl font-bold text-[#82B4CC]">{stats.totalApplications}</p>
                  </div>
                  <Users className="w-12 h-12 text-[#82B4CC] opacity-20" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-amber-500">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Pending Review</p>
                    <p className="text-3xl font-bold text-amber-600">{stats.pendingApplications}</p>
                  </div>
                  <Clock className="w-12 h-12 text-amber-500 opacity-20" />
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Main Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-6">
            <TabsTrigger value="internships">
              <Briefcase className="w-4 h-4 mr-2" />
              Internships
            </TabsTrigger>
            <TabsTrigger value="applications">
              <Users className="w-4 h-4 mr-2" />
              Applications
            </TabsTrigger>
          </TabsList>

          {/* Internships Tab */}
          <TabsContent value="internships">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Internship Postings</CardTitle>
                  <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
                    <DialogTrigger asChild>
                      <Button
                        onClick={() => resetForm()}
                        className="bg-gradient-to-r from-[#1164A3] to-[#68B9C4] text-white"
                      >
                        <Plus className="w-4 h-4 mr-2" />
                        Add Internship
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle>
                          {editingInternship ? "Edit Internship" : "Create New Internship"}
                        </DialogTitle>
                      </DialogHeader>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Basic Information */}
                        <div className="space-y-4">
                          <h3 className="font-semibold text-lg">Basic Information</h3>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label className="pb-2">Title *</Label>
                              <Input
                                required
                                value={formData.title}
                                onChange={(e) => setFormData({...formData, title: e.target.value})}
                              />
                            </div>
                            <div>
                              <Label className="pb-2">Company *</Label>
                              <Input
                                required
                                value={formData.company}
                                onChange={(e) => setFormData({...formData, company: e.target.value})}
                              />
                            </div>
                            <div>
                              <Label className="pb-2">Location *</Label>
                              <Input
                                required
                                value={formData.location}
                                onChange={(e) => setFormData({...formData, location: e.target.value})}
                              />
                            </div>
                            <div>
                              <Label className="pb-2">Location Type *</Label>
                              <Select value={formData.locationType} onValueChange={(val) => setFormData({...formData, locationType: val})}>
                                <SelectTrigger>
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="onsite">On-site</SelectItem>
                                  <SelectItem value="remote">Remote</SelectItem>
                                  <SelectItem value="hybrid">Hybrid</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div>
                              <Label className="pb-2">Category *</Label>
                              <Select value={formData.category} onValueChange={(val) => setFormData({...formData, category: val})}>
                                <SelectTrigger>
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="engineering">Engineering</SelectItem>
                                  <SelectItem value="information_technology">Information Technology</SelectItem>
                                  <SelectItem value="software_development">Software Development</SelectItem>
                                  <SelectItem value="research_development">Research & Development</SelectItem>
                                  <SelectItem value="corporate_administrative">Corporate & Administrative</SelectItem>
                                  <SelectItem value="education_training">Education & Training</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div>
                              <Label className="pb-2">Duration *</Label>
                              <Input
                                required
                                placeholder="e.g., 3 months, Summer 2024"
                                value={formData.duration}
                                onChange={(e) => setFormData({...formData, duration: e.target.value})}
                              />
                            </div>
                          </div>
                        </div>

                        {/* Dates */}
                        <div className="space-y-4">
                          <h3 className="font-semibold text-lg">Dates</h3>
                          <div className="grid grid-cols-3 gap-4">
                            <div>
                              <Label className="pb-2">Start Date</Label>
                              <Input
                                type="date"
                                value={formData.startDate}
                                onChange={(e) => setFormData({...formData, startDate: e.target.value})}
                              />
                            </div>
                            <div>
                              <Label className="pb-2">End Date</Label>
                              <Input
                                type="date"
                                value={formData.endDate}
                                onChange={(e) => setFormData({...formData, endDate: e.target.value})}
                              />
                            </div>
                            <div>
                              <Label className="pb-2">Application Deadline</Label>
                              <Input
                                type="date"
                                value={formData.applicationDeadline}
                                onChange={(e) => setFormData({...formData, applicationDeadline: e.target.value})}
                              />
                            </div>
                          </div>
                        </div>

                        {/* Details */}
                        <div className="space-y-4">
                          <h3 className="font-semibold text-lg">Details</h3>
                          <div>
                            <Label className="pb-2">Description *</Label>
                            <Textarea
                              required
                              rows={4}
                              value={formData.description}
                              onChange={(e) => setFormData({...formData, description: e.target.value})}
                            />
                          </div>
                          <div>
                            <Label className="pb-2">Responsibilities *</Label>
                            <Textarea
                              required
                              rows={4}
                              placeholder="Use bullet points (- Item)"
                              value={formData.responsibilities}
                              onChange={(e) => setFormData({...formData, responsibilities: e.target.value})}
                            />
                          </div>
                          <div>
                            <Label className="pb-2">Requirements *</Label>
                            <Textarea
                              required
                              rows={4}
                              placeholder="Use bullet points (- Item)"
                              value={formData.requirements}
                              onChange={(e) => setFormData({...formData, requirements: e.target.value})}
                            />
                          </div>
                          <div>
                            <Label className="pb-2">Benefits</Label>
                            <Textarea
                              rows={3}
                              value={formData.benefits}
                              onChange={(e) => setFormData({...formData, benefits: e.target.value})}
                            />
                          </div>
                        </div>

                        {/* Skills & Positions */}
                        <div className="space-y-4">
                          <h3 className="font-semibold text-lg">Skills & Positions</h3>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label className="pb-2">Required Skills *</Label>
                              <Input
                                required
                                placeholder="Comma-separated (e.g., React, Node.js, Python)"
                                value={formData.skills}
                                onChange={(e) => setFormData({...formData, skills: e.target.value})}
                              />
                            </div>
                            <div>
                              <Label className="pb-2">Number of Positions</Label>
                              <Input
                                type="number"
                                min="1"
                                value={formData.numberOfPositions}
                                onChange={(e) => setFormData({...formData, numberOfPositions: e.target.value})}
                              />
                            </div>
                          </div>
                        </div>

                        {/* Compensation */}
                        <div className="space-y-4">
                          <h3 className="font-semibold text-lg">Compensation</h3>
                          <div className="flex items-center space-x-2 mb-4">
                            <Checkbox
                              checked={formData.isPaid}
                              onCheckedChange={(checked) => setFormData({...formData, isPaid: checked as boolean})}
                            />
                            <Label className="pb-2">This is a paid internship</Label>
                          </div>
                          {formData.isPaid && (
                            <div>
                              <Label className="pb-2">Stipend Details</Label>
                              <Input
                                placeholder="e.g., PKR 30,000/month"
                                value={formData.stipend}
                                onChange={(e) => setFormData({...formData, stipend: e.target.value})}
                              />
                            </div>
                          )}
                        </div>

                        {/* Contact & Application */}
                        <div className="space-y-4">
                          <h3 className="font-semibold text-lg">Contact & Application</h3>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label className="pb-2">Contact Email</Label>
                              <Input
                                type="email"
                                value={formData.contactEmail}
                                onChange={(e) => setFormData({...formData, contactEmail: e.target.value})}
                              />
                            </div>
                            <div>
                              <Label className="pb-2">Contact Phone</Label>
                              <Input
                                value={formData.contactPhone}
                                onChange={(e) => setFormData({...formData, contactPhone: e.target.value})}
                              />
                            </div>
                            <div className="col-span-2">
                              <Label className="pb-2">Application URL</Label>
                              <Input
                                type="url"
                                placeholder="External application link (optional)"
                                value={formData.applicationUrl}
                                onChange={(e) => setFormData({...formData, applicationUrl: e.target.value})}
                              />
                            </div>
                          </div>
                        </div>

                        {/* Status & SEO */}
                        <div className="space-y-4">
                          <h3 className="font-semibold text-lg">Status & SEO</h3>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label className="pb-2">Status *</Label>
                              <Select value={formData.status} onValueChange={(val) => setFormData({...formData, status: val})}>
                                <SelectTrigger>
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="active">Active</SelectItem>
                                  <SelectItem value="inactive">Inactive</SelectItem>
                                  <SelectItem value="completed">Completed</SelectItem>
                                  <SelectItem value="cancelled">Cancelled</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div>
                              <Label className="pb-2">Slug</Label>
                              <Input
                                placeholder="URL slug (auto-generated if empty)"
                                value={formData.slug}
                                onChange={(e) => setFormData({...formData, slug: e.target.value})}
                              />
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              checked={formData.featured}
                              onCheckedChange={(checked) => setFormData({...formData, featured: checked as boolean})}
                            />
                            <Label className="pb-2">Feature this internship</Label>
                          </div>
                        </div>

                        <div className="flex justify-end gap-4 pt-4">
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => {
                              setIsFormOpen(false);
                              resetForm();
                            }}
                          >
                            Cancel
                          </Button>
                          <Button type="submit" className="bg-gradient-to-r from-[#1164A3] to-[#68B9C4] text-white">
                            {editingInternship ? "Update" : "Create"} Internship
                          </Button>
                        </div>
                      </form>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardHeader>
              <CardContent>
                {/* Filters */}
                <div className="flex gap-4 mb-6">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                    <Input
                      placeholder="Search internships..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger className="w-48">
                      <Filter className="w-4 h-4 mr-2" />
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="inactive">Inactive</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                      <SelectItem value="cancelled">Cancelled</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Table */}
                <div className="border rounded-lg">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Title</TableHead>
                        <TableHead>Company</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Location</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Featured</TableHead>
                        <TableHead>Applications</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredInternships.map((internship) => (
                        <TableRow key={internship.id}>
                          <TableCell className="font-medium">{internship.title}</TableCell>
                          <TableCell>{internship.company}</TableCell>
                          <TableCell>{formatCategory(internship.category)}</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              {internship.location}
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge className={getStatusColor(internship.status)}>
                              {internship.status}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            {internship.featured && (
                              <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                            )}
                          </TableCell>
                          <TableCell>
                            <Badge variant="outline">
                              {internship.applications?.length || 0}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => window.open(`/programs/internships/${internship.slug}`, "_blank")}
                              >
                                <Eye className="w-4 h-4" />
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => handleEdit(internship)}
                              >
                                <Edit className="w-4 h-4" />
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => handleDelete(internship.id)}
                              >
                                <Trash2 className="w-4 h-4 text-red-500" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Applications Tab */}
          <TabsContent value="applications">
            <Card>
              <CardHeader>
                <CardTitle>Internship Applications</CardTitle>
              </CardHeader>
              <CardContent>
                {/* Filters */}
                <div className="flex gap-4 mb-6">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                    <Input
                      placeholder="Search applications..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Select value={applicationStatusFilter} onValueChange={setApplicationStatusFilter}>
                    <SelectTrigger className="w-48">
                      <Filter className="w-4 h-4 mr-2" />
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="submitted">Submitted</SelectItem>
                      <SelectItem value="under_review">Under Review</SelectItem>
                      <SelectItem value="shortlisted">Shortlisted</SelectItem>
                      <SelectItem value="interview_scheduled">Interview Scheduled</SelectItem>
                      <SelectItem value="accepted">Accepted</SelectItem>
                      <SelectItem value="rejected">Rejected</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Table */}
                <div className="border rounded-lg">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Applicant</TableHead>
                        <TableHead>Internship</TableHead>
                        <TableHead>University</TableHead>
                        <TableHead>CGPA</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Applied</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredApplications.map((application) => (
                        <TableRow key={application.id}>
                          <TableCell>
                            <div>
                              <div className="font-medium">{application.fullName}</div>
                              <div className="text-sm text-gray-500">{application.email}</div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div>
                              <div className="font-medium">{application.internship.title}</div>
                              <div className="text-sm text-gray-500">{application.internship.company}</div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="text-sm">
                              <div>{application.university}</div>
                              <div className="text-gray-500">{application.department}</div>
                            </div>
                          </TableCell>
                          <TableCell>{application.cgpa}</TableCell>
                          <TableCell>
                            <Badge className={getApplicationStatusColor(application.applicationStatus)}>
                              {application.applicationStatus.replace("_", " ")}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            {new Date(application.createdAt).toLocaleDateString()}
                          </TableCell>
                          <TableCell>
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => setViewingApplication(application)}
                                >
                                  <Eye className="w-4 h-4 mr-2" />
                                  View
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                                <DialogHeader>
                                  <DialogTitle>Application Details</DialogTitle>
                                </DialogHeader>
                                {viewingApplication && (
                                  <div className="space-y-6">
                                    {/* Applicant Info */}
                                    <div>
                                      <h3 className="font-semibold text-lg mb-3">Applicant Information</h3>
                                      <div className="grid grid-cols-2 gap-4">
                                        <div>
                                          <Label className="pb-2 text-gray-600">Full Name</Label>
                                          <p className="font-medium">{viewingApplication.fullName}</p>
                                        </div>
                                        <div>
                                          <Label className="pb-2 text-gray-600">Email</Label>
                                          <p className="font-medium">{viewingApplication.email}</p>
                                        </div>
                                        <div>
                                          <Label className="pb-2 text-gray-600">Phone</Label>
                                          <p className="font-medium">{viewingApplication.phone}</p>
                                        </div>
                                        <div>
                                          <Label className="pb-2 text-gray-600">Status</Label>
                                          <Badge className={getApplicationStatusColor(viewingApplication.applicationStatus)}>
                                            {viewingApplication.applicationStatus.replace("_", " ")}
                                          </Badge>
                                        </div>
                                      </div>
                                    </div>

                                    {/* Academic Info */}
                                    <div>
                                      <h3 className="font-semibold text-lg mb-3">Academic Information</h3>
                                      <div className="grid grid-cols-2 gap-4">
                                        <div>
                                          <Label className="pb-2 text-gray-600">University</Label>
                                          <p className="font-medium">{viewingApplication.university}</p>
                                        </div>
                                        <div>
                                          <Label className="pb-2 text-gray-600">Department</Label>
                                          <p className="font-medium">{viewingApplication.department}</p>
                                        </div>
                                        <div>
                                          <Label className="pb-2 text-gray-600">Semester</Label>
                                          <p className="font-medium">{viewingApplication.semester}</p>
                                        </div>
                                        <div>
                                          <Label className="pb-2 text-gray-600">CGPA</Label>
                                          <p className="font-medium">{viewingApplication.cgpa}</p>
                                        </div>
                                        <div>
                                          <Label className="pb-2 text-gray-600">Expected Graduation</Label>
                                          <p className="font-medium">{viewingApplication.expectedGraduation}</p>
                                        </div>
                                        
                                      </div>
                                    </div>

                                    {/* Skills */}
                                    <div>
                                      <h3 className="font-semibold text-lg mb-3">Skills</h3>
                                      <div className="flex flex-wrap gap-2">
                                        {viewingApplication.skills.map((skill, idx) => (
                                          <Badge key={idx} variant="outline">{skill}</Badge>
                                        ))}
                                      </div>
                                    </div>

                                    {/* Links */}
                                    {(viewingApplication.linkedIn || viewingApplication.portfolio || viewingApplication.resume) && (
                                      <div>
                                        <h3 className="font-semibold text-lg mb-3">Links & Documents</h3>
                                        <div className="space-y-2">
                                          {viewingApplication.resume && (
                                            <Link
                                              href={viewingApplication.resume.url}
                                              target="_blank"
                                              rel="noopener noreferrer"
                                              className="flex items-center gap-2 text-[#1164A3] hover:underline"
                                            >
                                              <FileText className="w-4 h-4" />
                                              View Resume
                                              <ExternalLink className="w-3 h-3" />
                                            </Link>
                                          )}
                                          {viewingApplication.linkedIn && (
                                            <Link
                                              href={viewingApplication.linkedIn}
                                              target="_blank"
                                              rel="noopener noreferrer"
                                              className="flex items-center gap-2 text-[#1164A3] hover:underline"
                                            >
                                              LinkedIn Profile
                                              <ExternalLink className="w-3 h-3" />
                                            </Link>
                                          )}
                                          {viewingApplication.portfolio && (
                                            <Link
                                              href={viewingApplication.portfolio}
                                              target="_blank"
                                              rel="noopener noreferrer"
                                              className="flex items-center gap-2 text-[#1164A3] hover:underline"
                                            >
                                              Portfolio
                                              <ExternalLink className="w-3 h-3" />
                                            </Link>
                                          )}
                                        </div>
                                      </div>
                                    )}

                                    {/* Cover Letter */}
                                    {viewingApplication.coverLetter && (
                                      <div>
                                        <h3 className="font-semibold text-lg mb-3">Cover Letter</h3>
                                        <div className="p-4 bg-gray-50 rounded-lg whitespace-pre-line">
                                          {viewingApplication.coverLetter}
                                        </div>
                                      </div>
                                    )}

                                    {/* Previous Experience */}
                                    {viewingApplication.previousExperience && (
                                      <div>
                                        <h3 className="font-semibold text-lg mb-3">Previous Experience</h3>
                                        <div className="p-4 bg-gray-50 rounded-lg whitespace-pre-line">
                                          {viewingApplication.previousExperience}
                                        </div>
                                      </div>
                                    )}

                                    {/* Update Status */}
                                    <div>
                                      <h3 className="font-semibold text-lg mb-3">Update Status</h3>
                                      <div className="grid grid-cols-4 gap-2">
                                        <Button
                                          size="sm"
                                          variant="outline"
                                          onClick={() => handleUpdateApplicationStatus(viewingApplication.id, "under_review")}
                                          className="border-yellow-500 text-yellow-700"
                                        >
                                          Under Review
                                        </Button>
                                        <Button
                                          size="sm"
                                          variant="outline"
                                          onClick={() => handleUpdateApplicationStatus(viewingApplication.id, "shortlisted")}
                                          className="border-purple-500 text-purple-700"
                                        >
                                          Shortlist
                                        </Button>
                                        <Button
                                          size="sm"
                                          variant="outline"
                                          onClick={() => handleUpdateApplicationStatus(viewingApplication.id, "interview_scheduled")}
                                          className="border-indigo-500 text-indigo-700"
                                        >
                                          Interview
                                        </Button>
                                        <Button
                                          size="sm"
                                          variant="outline"
                                          onClick={() => handleUpdateApplicationStatus(viewingApplication.id, "accepted")}
                                          className="border-green-500 text-green-700"
                                        >
                                          Accept
                                        </Button>
                                        <Button
                                          size="sm"
                                          variant="outline"
                                          onClick={() => handleUpdateApplicationStatus(viewingApplication.id, "rejected")}
                                          className="border-red-500 text-red-700"
                                        >
                                          Reject
                                        </Button>
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </DialogContent>
                            </Dialog>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}