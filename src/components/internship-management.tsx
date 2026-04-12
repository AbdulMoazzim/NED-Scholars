"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Briefcase, Plus, Edit, Trash2, Eye, Star, MapPin, Users, FileText,
  CheckCircle, Clock, Loader2, Search, Filter, ExternalLink,
} from "lucide-react";
import {
  GetAllInternships, CreateInternship, UpdateInternship, DeleteInternship,
  GetAllApplications, UpdateApplicationStatus, GetInternshipStats,
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

// ─── Validation ───────────────────────────────────────────────────────────────

type FormData = {
  title: string; company: string; location: string; locationType: string;
  description: string; responsibilities: string; requirements: string;
  category: string; duration: string; startDate: string; endDate: string;
  applicationDeadline: string; applicationUrl: string; contactEmail: string;
  contactPhone: string; isPaid: boolean; stipend: string; skills: string;
  benefits: string; numberOfPositions: string; status: string;
  featured: boolean; slug: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const URL_RE   = /^https?:\/\/.+/;
const PHONE_RE = /^[\d\s\-\+\(\)]+$/;

function validateForm(data: FormData): FormErrors {
  const errors: FormErrors = {};
  const today = new Date(); today.setHours(0, 0, 0, 0);

  if (!data.title.trim()) errors.title = "Title is required";
  else if (data.title.trim().length < 3) errors.title = "Title must be at least 3 characters";

  if (!data.company.trim()) errors.company = "Company name is required";
  if (!data.location.trim()) errors.location = "Location is required";

  if (!data.description.trim()) errors.description = "Description is required";
  else if (data.description.trim().length < 20)
    errors.description = "Description must be at least 20 characters";

  if (!data.responsibilities.trim()) errors.responsibilities = "Responsibilities are required";
  if (!data.requirements.trim()) errors.requirements = "Requirements are required";
  if (!data.duration.trim()) errors.duration = "Duration is required";
  if (!data.skills.trim()) errors.skills = "At least one skill is required";

  // Date logic
  if (data.startDate && data.endDate && new Date(data.endDate) <= new Date(data.startDate))
    errors.endDate = "End date must be after the start date";

  if (data.applicationDeadline) {
    const deadline = new Date(data.applicationDeadline);
    if (deadline < today)
      errors.applicationDeadline = "Application deadline cannot be in the past";
    if (data.startDate && deadline > new Date(data.startDate))
      errors.applicationDeadline = "Deadline should be on or before the start date";
  }

  // Contact
  if (data.contactEmail && !EMAIL_RE.test(data.contactEmail))
    errors.contactEmail = "Please enter a valid email address";

  if (data.contactPhone && !PHONE_RE.test(data.contactPhone))
    errors.contactPhone = "Only digits, spaces, +, -, and parentheses are allowed";

  if (data.applicationUrl && !URL_RE.test(data.applicationUrl))
    errors.applicationUrl = "Application URL must start with http:// or https://";

  // Positions
  if (data.numberOfPositions) {
    const n = parseInt(data.numberOfPositions);
    if (isNaN(n) || n < 1) errors.numberOfPositions = "Must be at least 1 position";
    else if (n > 999) errors.numberOfPositions = "Number of positions seems unrealistically high";
  }

  // Stipend required when paid
  if (data.isPaid && !data.stipend.trim())
    errors.stipend = "Please provide stipend details for a paid internship";

  return errors;
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function InternshipManagement() {
  const [internships, setInternships] = useState<Internship[]>([]);
  const [applications, setApplications] = useState<InternshipApplication[]>([]);
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingInternship, setEditingInternship] = useState<Internship | null>(null);
  const [viewingApplication, setViewingApplication] = useState<InternshipApplication | null>(null);
  const [activeTab, setActiveTab] = useState("internships");
  const [formErrors, setFormErrors] = useState<FormErrors>({});

  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [applicationStatusFilter, setApplicationStatusFilter] = useState("all");

  const emptyForm: FormData = {
    title: "", company: "", location: "", locationType: "onsite",
    description: "", responsibilities: "", requirements: "",
    category: "software_development", duration: "", startDate: "", endDate: "",
    applicationDeadline: "", applicationUrl: "", contactEmail: "", contactPhone: "",
    isPaid: false, stipend: "", skills: "", benefits: "", numberOfPositions: "1",
    status: "active", featured: false, slug: "",
  };

  const [formData, setFormData] = useState<FormData>(emptyForm);

  useEffect(() => { fetchData(); }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [internshipsRes, applicationsRes, statsRes] = await Promise.all([
        GetAllInternships(), GetAllApplications(), GetInternshipStats(),
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

  // Live-clear errors on change
  const update = (patch: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...patch }));
    setFormErrors((prev) => {
      const next = { ...prev };
      (Object.keys(patch) as (keyof FormErrors)[]).forEach((k) => delete next[k]);
      return next;
    });
  };

  // Inline error display helpers
  const fe = (key: keyof FormErrors) =>
    formErrors[key] ? (
      <p className="text-sm text-red-500 mt-1 flex items-center gap-1">
        <span className="text-xs">⚠</span> {formErrors[key]}
      </p>
    ) : null;

  const ic = (key: keyof FormErrors) =>
    formErrors[key] ? "border-red-500 focus-visible:ring-red-400" : "";

  // ── Submit ────────────────────────────────────────────────────────

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateForm(formData);
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      const firstKey = Object.keys(errors)[0];
      document.getElementById(firstKey)?.scrollIntoView({ behavior: "smooth", block: "center" });
      toast.error("Please fix the errors before submitting");
      return;
    }
    setFormErrors({});
    setSaving(true);
    try {
      const internshipData = {
        ...formData,
        skills: formData.skills.split(",").map((s) => s.trim()).filter(Boolean),
        numberOfPositions: formData.numberOfPositions ? parseInt(formData.numberOfPositions) : 1,
        startDate: formData.startDate ? new Date(formData.startDate) : undefined,
        endDate: formData.endDate ? new Date(formData.endDate) : undefined,
        applicationDeadline: formData.applicationDeadline ? new Date(formData.applicationDeadline) : undefined,
        slug: formData.slug || formData.title.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, ""),
      };
      const result = editingInternship
        ? await UpdateInternship(editingInternship.id, internshipData)
        : await CreateInternship(internshipData as CreateInternshipData);

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
    } finally {
      setSaving(false);
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
    setFormErrors({});
    setFormData({
      title: internship.title, company: internship.company,
      location: internship.location, locationType: internship.locationType,
      description: internship.description, responsibilities: internship.responsibilities,
      requirements: internship.requirements, category: internship.category,
      duration: internship.duration,
      startDate: internship.startDate ? new Date(internship.startDate).toISOString().split("T")[0] : "",
      endDate: internship.endDate ? new Date(internship.endDate).toISOString().split("T")[0] : "",
      applicationDeadline: internship.applicationDeadline ? new Date(internship.applicationDeadline).toISOString().split("T")[0] : "",
      applicationUrl: internship.applicationUrl || "",
      contactEmail: internship.contactEmail || "",
      contactPhone: internship.contactPhone || "",
      isPaid: internship.isPaid, stipend: internship.stipend || "",
      skills: internship.skills.join(", "), benefits: internship.benefits || "",
      numberOfPositions: internship.numberOfPositions?.toString() || "1",
      status: internship.status, featured: internship.featured, slug: internship.slug,
    });
    setIsFormOpen(true);
  };

  const resetForm = () => {
    setEditingInternship(null);
    setFormErrors({});
    setFormData(emptyForm);
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

  // ── Helpers ───────────────────────────────────────────────────────

  const getStatusColor = (status: string) => {
    const c: Record<string, string> = {
      active: "bg-green-100 text-green-800", inactive: "bg-gray-100 text-gray-800",
      completed: "bg-blue-100 text-blue-800", cancelled: "bg-red-100 text-red-800",
    };
    return c[status] || "bg-gray-100 text-gray-800";
  };

  const getApplicationStatusColor = (status: string) => {
    const c: Record<string, string> = {
      submitted: "bg-blue-100 text-blue-800", under_review: "bg-yellow-100 text-yellow-800",
      shortlisted: "bg-purple-100 text-purple-800", interview_scheduled: "bg-indigo-100 text-indigo-800",
      accepted: "bg-green-100 text-green-800", rejected: "bg-red-100 text-red-800",
      withdrawn: "bg-gray-100 text-gray-800",
    };
    return c[status] || "bg-gray-100 text-gray-800";
  };

  const formatCategory = (category: string) =>
    category.split("_").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

  const filteredInternships = internships.filter((int) =>
    (int.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
     int.company.toLowerCase().includes(searchQuery.toLowerCase())) &&
    (statusFilter === "all" || int.status === statusFilter)
  );

  const filteredApplications = applications.filter((app) =>
    (app.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
     app.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
     app.internship.title.toLowerCase().includes(searchQuery.toLowerCase())) &&
    (applicationStatusFilter === "all" || app.applicationStatus === applicationStatusFilter)
  );

  // Which application statuses are allowed as next steps
  const getDisabledAppStatuses = (current: string): string[] => {
    const disabled = [current]; // always disable current
    if (["accepted", "rejected", "withdrawn"].includes(current)) {
      // Terminal states — block all further changes except for admin override of rejected
      disabled.push("under_review", "shortlisted", "interview_scheduled");
      if (current !== "rejected") disabled.push("rejected");
      if (current !== "accepted") disabled.push("accepted");
    }
    if (current === "withdrawn") {
      disabled.push("accepted", "rejected");
    }
    return disabled;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="w-12 h-12 animate-spin text-[#1164A3]" />
      </div>
    );
  }

  // ── Render ────────────────────────────────────────────────────────

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Internship Management</h1>
          <p className="text-gray-600">Manage internship postings and applications</p>
        </div>

        {/* Stats */}
        {stats && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {[
              { label: "Total Internships", value: stats.totalInternships, icon: Briefcase, color: "#1164A3" },
              { label: "Active Postings", value: stats.activeInternships, icon: CheckCircle, color: "#68B9C4" },
              { label: "Total Applications", value: stats.totalApplications, icon: Users, color: "#82B4CC" },
              { label: "Pending Review", value: stats.pendingApplications, icon: Clock, color: "#F59E0B" },
            ].map(({ label, value, icon: Icon, color }) => (
              <Card key={label} style={{ borderColor: color }}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">{label}</p>
                      <p className="text-3xl font-bold" style={{ color }}>{value}</p>
                    </div>
                    <Icon className="w-12 h-12 opacity-20" style={{ color }} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-6">
            <TabsTrigger value="internships"><Briefcase className="w-4 h-4 mr-2" />Internships</TabsTrigger>
            <TabsTrigger value="applications"><Users className="w-4 h-4 mr-2" />Applications</TabsTrigger>
          </TabsList>

          {/* ── Internships Tab ── */}
          <TabsContent value="internships">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Internship Postings</CardTitle>
                  <Dialog open={isFormOpen} onOpenChange={(open) => { setIsFormOpen(open); if (!open) resetForm(); }}>
                    <DialogTrigger asChild>
                      <Button onClick={() => resetForm()} className="bg-gradient-to-r from-[#1164A3] to-[#68B9C4] text-white">
                        <Plus className="w-4 h-4 mr-2" />Add Internship
                      </Button>
                    </DialogTrigger>

                    <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle>{editingInternship ? "Edit Internship" : "Create New Internship"}</DialogTitle>
                      </DialogHeader>

                      <form onSubmit={handleSubmit} className="space-y-6">

                        {/* Basic Info */}
                        <div className="space-y-4">
                          <h3 className="font-semibold text-lg">Basic Information</h3>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="title" className="pb-2">Title *</Label>
                              <Input id="title" value={formData.title} className={ic("title")}
                                onChange={(e) => update({ title: e.target.value })} />
                              {fe("title")}
                            </div>
                            <div>
                              <Label htmlFor="company" className="pb-2">Company *</Label>
                              <Input id="company" value={formData.company} className={ic("company")}
                                onChange={(e) => update({ company: e.target.value })} />
                              {fe("company")}
                            </div>
                            <div>
                              <Label htmlFor="location" className="pb-2">Location *</Label>
                              <Input id="location" value={formData.location} className={ic("location")}
                                onChange={(e) => update({ location: e.target.value })} />
                              {fe("location")}
                            </div>
                            <div>
                              <Label className="pb-2">Location Type *</Label>
                              <Select value={formData.locationType} onValueChange={(val) => update({ locationType: val })}>
                                <SelectTrigger><SelectValue /></SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="onsite">On-site</SelectItem>
                                  <SelectItem value="remote">Remote</SelectItem>
                                  <SelectItem value="hybrid">Hybrid</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div>
                              <Label className="pb-2">Category *</Label>
                              <div className="overflow-x-hidden">
                              <Select value={formData.category} onValueChange={(val) => update({ category: val })} >
                                <SelectTrigger><SelectValue /></SelectTrigger>
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
                            </div>
                            <div>
                              <Label htmlFor="duration" className="pb-2">Duration *</Label>
                              <Input id="duration" placeholder="e.g., 3 months, Summer 2024"
                                value={formData.duration} className={ic("duration")}
                                onChange={(e) => update({ duration: e.target.value })} />
                              {fe("duration")}
                            </div>
                          </div>
                        </div>

                        {/* Dates */}
                        <div className="space-y-4">
                          <h3 className="font-semibold text-lg">Dates</h3>
                          <div className="grid grid-cols-3 gap-4">
                            <div>
                              <Label htmlFor="startDate" className="pb-2">Start Date</Label>
                              <Input id="startDate" type="date" value={formData.startDate}
                                className={ic("startDate")}
                                onChange={(e) => update({ startDate: e.target.value })} />
                              {fe("startDate")}
                            </div>
                            <div>
                              <Label htmlFor="endDate" className="pb-2">End Date</Label>
                              <Input id="endDate" type="date" value={formData.endDate}
                                min={formData.startDate || undefined}
                                className={ic("endDate")}
                                onChange={(e) => update({ endDate: e.target.value })} />
                              {fe("endDate")}
                            </div>
                            <div>
                              <Label htmlFor="applicationDeadline" className="pb-2">Application Deadline</Label>
                              <Input id="applicationDeadline" type="date"
                                value={formData.applicationDeadline}
                                max={formData.startDate || undefined}
                                className={ic("applicationDeadline")}
                                onChange={(e) => update({ applicationDeadline: e.target.value })} />
                              {fe("applicationDeadline")}
                            </div>
                          </div>
                        </div>

                        {/* Details */}
                        <div className="space-y-4">
                          <h3 className="font-semibold text-lg">Details</h3>
                          <div>
                            <Label htmlFor="description" className="pb-2">Description *</Label>
                            <Textarea id="description" rows={4} value={formData.description}
                              className={ic("description")}
                              onChange={(e) => update({ description: e.target.value })} />
                            {fe("description")}
                          </div>
                          <div>
                            <Label htmlFor="responsibilities" className="pb-2">Responsibilities *</Label>
                            <Textarea id="responsibilities" rows={4} placeholder="Use bullet points (- Item)"
                              value={formData.responsibilities} className={ic("responsibilities")}
                              onChange={(e) => update({ responsibilities: e.target.value })} />
                            {fe("responsibilities")}
                          </div>
                          <div>
                            <Label htmlFor="requirements" className="pb-2">Requirements *</Label>
                            <Textarea id="requirements" rows={4} placeholder="Use bullet points (- Item)"
                              value={formData.requirements} className={ic("requirements")}
                              onChange={(e) => update({ requirements: e.target.value })} />
                            {fe("requirements")}
                          </div>
                          <div>
                            <Label className="pb-2">Benefits</Label>
                            <Textarea rows={3} value={formData.benefits}
                              onChange={(e) => update({ benefits: e.target.value })} />
                          </div>
                        </div>

                        {/* Skills & Positions */}
                        <div className="space-y-4">
                          <h3 className="font-semibold text-lg">Skills & Positions</h3>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="skills" className="pb-2">Required Skills *</Label>
                              <Input id="skills" placeholder="Comma-separated (e.g., React, Node.js, Python)"
                                value={formData.skills} className={ic("skills")}
                                onChange={(e) => update({ skills: e.target.value })} />
                              {fe("skills")}
                            </div>
                            <div>
                              <Label htmlFor="numberOfPositions" className="pb-2">Number of Positions</Label>
                              <Input id="numberOfPositions" type="number" min="1"
                                value={formData.numberOfPositions} className={ic("numberOfPositions")}
                                onChange={(e) => update({ numberOfPositions: e.target.value })} />
                              {fe("numberOfPositions")}
                            </div>
                          </div>
                        </div>

                        {/* Compensation */}
                        <div className="space-y-4">
                          <h3 className="font-semibold text-lg">Compensation</h3>
                          <div className="flex items-center space-x-2 mb-4">
                            <Checkbox checked={formData.isPaid}
                              onCheckedChange={(checked) => update({ isPaid: checked as boolean, stipend: checked ? formData.stipend : "" })} />
                            <Label className="pb-2">This is a paid internship</Label>
                          </div>
                          {formData.isPaid && (
                            <div>
                              <Label htmlFor="stipend" className="pb-2">Stipend Details *</Label>
                              <Input id="stipend" placeholder="e.g., PKR 30,000/month"
                                value={formData.stipend} className={ic("stipend")}
                                onChange={(e) => update({ stipend: e.target.value })} />
                              {fe("stipend")}
                            </div>
                          )}
                        </div>

                        {/* Contact & Application */}
                        <div className="space-y-4">
                          <h3 className="font-semibold text-lg">Contact & Application</h3>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="contactEmail" className="pb-2">Contact Email</Label>
                              <Input id="contactEmail" type="email" value={formData.contactEmail}
                                className={ic("contactEmail")}
                                onChange={(e) => update({ contactEmail: e.target.value })} />
                              {fe("contactEmail")}
                            </div>
                            <div>
                              <Label htmlFor="contactPhone" className="pb-2">Contact Phone</Label>
                              <Input id="contactPhone" value={formData.contactPhone}
                                className={ic("contactPhone")}
                                onChange={(e) => update({ contactPhone: e.target.value })} />
                              {fe("contactPhone")}
                            </div>
                            <div className="col-span-2">
                              <Label htmlFor="applicationUrl" className="pb-2">Application URL</Label>
                              <Input id="applicationUrl" type="url"
                                placeholder="External application link (optional)"
                                value={formData.applicationUrl} className={ic("applicationUrl")}
                                onChange={(e) => update({ applicationUrl: e.target.value })} />
                              {fe("applicationUrl")}
                            </div>
                          </div>
                        </div>

                        {/* Status & SEO */}
                        <div className="space-y-4">
                          <h3 className="font-semibold text-lg">Status & SEO</h3>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label className="pb-2">Status *</Label>
                              <Select value={formData.status} onValueChange={(val) => update({ status: val })}>
                                <SelectTrigger><SelectValue /></SelectTrigger>
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
                              <Input placeholder="URL slug (auto-generated if empty)"
                                value={formData.slug}
                                onChange={(e) => update({ slug: e.target.value })} />
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox checked={formData.featured}
                              onCheckedChange={(checked) => update({ featured: checked as boolean })} />
                            <Label className="pb-2">Feature this internship</Label>
                          </div>
                        </div>

                        <div className="flex justify-end gap-4 pt-4">
                          <Button type="button" variant="outline" onClick={() => { setIsFormOpen(false); resetForm(); }}>
                            Cancel
                          </Button>
                          <Button disabled={saving} type="submit" className="bg-gradient-to-r from-[#1164A3] to-[#68B9C4] text-white">
                            {saving
                              ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" />{editingInternship ? "Updating..." : "Creating..."}</>
                              : `${editingInternship ? "Update" : "Create"} Internship`}
                          </Button>
                        </div>
                      </form>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardHeader>

              <CardContent>
                <div className="flex gap-4 mb-6">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                    <Input placeholder="Search internships..." value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)} className="pl-10" />
                  </div>
                  <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger className="w-48"><Filter className="w-4 h-4 mr-2" /><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="inactive">Inactive</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                      <SelectItem value="cancelled">Cancelled</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="border rounded-lg">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Title</TableHead><TableHead>Company</TableHead>
                        <TableHead>Category</TableHead><TableHead>Location</TableHead>
                        <TableHead>Status</TableHead><TableHead>Featured</TableHead>
                        <TableHead>Applications</TableHead><TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredInternships.map((internship) => (
                        <TableRow key={internship.id}>
                          <TableCell className="font-medium">{internship.title}</TableCell>
                          <TableCell>{internship.company}</TableCell>
                          <TableCell>{formatCategory(internship.category)}</TableCell>
                          <TableCell><div className="flex items-center gap-1"><MapPin className="w-3 h-3" />{internship.location}</div></TableCell>
                          <TableCell><Badge className={getStatusColor(internship.status)}>{internship.status}</Badge></TableCell>
                          <TableCell>{internship.featured && <Star className="w-4 h-4 text-amber-500 fill-amber-500" />}</TableCell>
                          <TableCell><Badge variant="outline">{internship.applications?.length || 0}</Badge></TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              <Button size="sm" variant="outline" onClick={() => window.open(`/programs/internships/${internship.slug}`, "_blank")}><Eye className="w-4 h-4" /></Button>
                              <Button size="sm" variant="outline" onClick={() => handleEdit(internship)}><Edit className="w-4 h-4" /></Button>
                              <Button size="sm" variant="outline" onClick={() => handleDelete(internship.id)}><Trash2 className="w-4 h-4 text-red-500" /></Button>
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

          {/* ── Applications Tab ── */}
          <TabsContent value="applications">
            <Card>
              <CardHeader><CardTitle>Internship Applications</CardTitle></CardHeader>
              <CardContent>
                <div className="flex gap-4 mb-6">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                    <Input placeholder="Search applications..." value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)} className="pl-10" />
                  </div>
                  <Select value={applicationStatusFilter} onValueChange={setApplicationStatusFilter}>
                    <SelectTrigger className="w-48"><Filter className="w-4 h-4 mr-2" /><SelectValue /></SelectTrigger>
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

                <div className="border rounded-lg">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Applicant</TableHead><TableHead>Internship</TableHead>
                        <TableHead>University</TableHead><TableHead>CGPA</TableHead>
                        <TableHead>Status</TableHead><TableHead>Applied</TableHead>
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
                          <TableCell>{new Date(application.createdAt).toLocaleDateString()}</TableCell>
                          <TableCell>
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button size="sm" variant="outline" onClick={() => setViewingApplication(application)}>
                                  <Eye className="w-4 h-4 mr-2" />View
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                                <DialogHeader><DialogTitle>Application Details</DialogTitle></DialogHeader>
                                {viewingApplication && (() => {
                                  const disabledStatuses = getDisabledAppStatuses(viewingApplication.applicationStatus);
                                  return (
                                    <div className="space-y-6">
                                      {/* Applicant */}
                                      <div>
                                        <h3 className="font-semibold text-lg mb-3">Applicant Information</h3>
                                        <div className="grid grid-cols-2 gap-4">
                                          <div><Label className="pb-2 text-gray-600">Full Name</Label><p className="font-medium">{viewingApplication.fullName}</p></div>
                                          <div><Label className="pb-2 text-gray-600">Email</Label><p className="font-medium overflow-auto">{viewingApplication.email}</p></div>
                                          <div><Label className="pb-2 text-gray-600">Phone</Label><p className="font-medium">{viewingApplication.phone}</p></div>
                                          <div>
                                            <Label className="pb-2 text-gray-600">Status</Label>
                                            <Badge className={getApplicationStatusColor(viewingApplication.applicationStatus)}>
                                              {viewingApplication.applicationStatus.replace("_", " ")}
                                            </Badge>
                                          </div>
                                        </div>
                                      </div>

                                      {/* Academic */}
                                      <div>
                                        <h3 className="font-semibold text-lg mb-3">Academic Information</h3>
                                        <div className="grid grid-cols-2 gap-4">
                                          <div><Label className="pb-2 text-gray-600">University</Label><p className="font-medium">{viewingApplication.university}</p></div>
                                          <div><Label className="pb-2 text-gray-600">Department</Label><p className="font-medium">{viewingApplication.department}</p></div>
                                          <div><Label className="pb-2 text-gray-600">Semester</Label><p className="font-medium">{viewingApplication.semester}</p></div>
                                          <div><Label className="pb-2 text-gray-600">CGPA</Label><p className="font-medium">{viewingApplication.cgpa}</p></div>
                                          <div><Label className="pb-2 text-gray-600">Expected Graduation</Label><p className="font-medium">{viewingApplication.expectedGraduation}</p></div>
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
                                              <Link href={viewingApplication.resume[0].url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#1164A3] hover:underline">
                                                <FileText className="w-4 h-4" />View Resume<ExternalLink className="w-3 h-3" />
                                              </Link>
                                            )}
                                            {viewingApplication.linkedIn && (
                                              <Link href={viewingApplication.linkedIn} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#1164A3] hover:underline">
                                                LinkedIn Profile<ExternalLink className="w-3 h-3" />
                                              </Link>
                                            )}
                                            {viewingApplication.portfolio && (
                                              <Link href={viewingApplication.portfolio} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#1164A3] hover:underline">
                                                Portfolio<ExternalLink className="w-3 h-3" />
                                              </Link>
                                            )}
                                          </div>
                                        </div>
                                      )}

                                      {viewingApplication.coverLetter && (
                                        <div>
                                          <h3 className="font-semibold text-lg mb-3">Cover Letter</h3>
                                          <div className="p-4 bg-gray-50 rounded-lg whitespace-pre-line">{viewingApplication.coverLetter}</div>
                                        </div>
                                      )}

                                      {viewingApplication.previousExperience && (
                                        <div>
                                          <h3 className="font-semibold text-lg mb-3">Previous Experience</h3>
                                          <div className="p-4 bg-gray-50 rounded-lg whitespace-pre-line">{viewingApplication.previousExperience}</div>
                                        </div>
                                      )}

                                      {/* Update Status — with disabled logic */}
                                      <div>
                                        <h3 className="font-semibold text-lg mb-3">Update Status</h3>
                                        <div className="grid grid-cols-4 gap-2">
                                          {[
                                            { status: "under_review", label: "Under Review", style: "border-yellow-500 text-yellow-700 overflow-auto" },
                                            { status: "shortlisted", label: "Shortlist", style: "border-purple-500 text-purple-700" },
                                            { status: "interview_scheduled", label: "Interview", style: "border-indigo-500 text-indigo-700" },
                                            { status: "accepted", label: "Accept", style: "border-green-500 text-green-700" },
                                            { status: "rejected", label: "Reject", style: "border-red-500 text-red-700" },
                                          ].map(({ status, label, style }) => {
                                            const isDisabled = disabledStatuses.includes(status);
                                            const isCurrent = status === viewingApplication.applicationStatus;
                                            return (
                                              <Button
                                                key={status}
                                                size="sm"
                                                variant="outline"
                                                disabled={isDisabled}
                                                title={isDisabled ? (isCurrent ? "Current status" : "Not available for this status") : `Move to ${label}`}
                                                className={`${style} disabled:opacity-40 disabled:cursor-not-allowed`}
                                                onClick={() => handleUpdateApplicationStatus(viewingApplication.id, status)}
                                              >
                                                {label}{isCurrent && " ✓"}
                                              </Button>
                                            );
                                          })}
                                        </div>
                                        <p className="text-xs text-gray-500 mt-2">
                                          Greyed-out buttons are unavailable for the current status.
                                        </p>
                                      </div>
                                    </div>
                                  );
                                })()}
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