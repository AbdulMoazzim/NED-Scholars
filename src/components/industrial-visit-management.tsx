"use client";

interface ExcelData1 {
  company: string;
  date: string;
  location: string;
  participants: number;
  status: string;
  title: string;
}
interface ExcelData2 {
  name: string;
  email: string;
  phone: string;
  university: string;
  department: string;
  semester: string;
  status: string;
}
type excelData = ExcelData1 | ExcelData2;

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
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
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Factory,
  Plus,
  Edit,
  Trash2,
  Eye,
  Users,
  Calendar,
  MapPin,
  Building2,
  Clock,
  MoreVertical,
  CheckCircle,
  Download,
  Search,
  Filter,
  Loader2,
  Star,
  UserCheck,
  FileText,
  BarChart3,
  Sparkles,
  Mail,
  Phone,
  Upload,
  Image as ImageIcon,
  Film,
} from "lucide-react";
import {
  GetAllIndustrialVisits,
  GetAllRegistrations,
  CreateIndustrialVisit,
  UpdateIndustrialVisit,
  DeleteIndustrialVisit,
  UpdateRegistrationStatus,
  GetVisitStats,
} from "@/app/actions/industrial-visit";
import { toast } from "sonner";
import { IndustrialVisit, Registration } from "@/lib/form-types";
import { Resource } from "@/lib/types";

interface Stats {
  totalVisits: number;
  upcomingVisits: number;
  completedVisits: number;
  totalRegistrations: number;
}

export default function IndustrialVisitsManagement() {
  const [activeTab, setActiveTab] = useState("visits");
  const [visits, setVisits] = useState<IndustrialVisit[]>([]);
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [filteredVisits, setFilteredVisits] = useState<IndustrialVisit[]>([]);
  const [filteredRegistrations, setFilteredRegistrations] = useState<
    Registration[]
  >([]);
  const [stats, setStats] = useState<Stats>({
    totalVisits: 0,
    upcomingVisits: 0,
    completedVisits: 0,
    totalRegistrations: 0,
  });
  const [loading, setLoading] = useState(true);
  const [showDialog, setShowDialog] = useState(false);
  const [showViewDialog, setShowViewDialog] = useState(false);
  const [selectedVisit, setSelectedVisit] = useState<IndustrialVisit | null>(
    null
  );
  const [selectedRegistration, setSelectedRegistration] =
    useState<Registration | null>(null);
  const [editMode, setEditMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [images, setImages] = useState<Resource[]>([]);
  const [videos, setVideos] = useState<Resource[]>([]);
  const [saving, setSaving] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    company: "",
    industry: "manufacturing",
    registrationDeadline: "",
    location: "",
    description: "",
    objectives: "",
    agenda: "",
    visitDate: "",
    startTime: "",
    endTime: "",
    duration: "",
    maxParticipants: 0,
    organizerName: "",
    organizerContact: "",
    companyContact: "",
    companyEmail: "",
    safetyGuidelines: "",
    transportProvided: false,
    meetingPoint: "",
    status: "upcoming",
    slug: "",
  });

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    filterVisits();
  }, [searchQuery, statusFilter, visits]);

  useEffect(() => {
    filterRegistrations();
  }, [searchQuery, registrations]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [visitsRes, registrationsRes, statsRes] = await Promise.all([
        GetAllIndustrialVisits(),
        GetAllRegistrations(),
        GetVisitStats(),
      ]);

      if (visitsRes.success && visitsRes.data) {
        setVisits(visitsRes.data as IndustrialVisit[]);
        setFilteredVisits(visitsRes.data as IndustrialVisit[]);
      }
      if (registrationsRes.success && registrationsRes.data) {
        setRegistrations(registrationsRes.data as Registration[]);
        setFilteredRegistrations(registrationsRes.data as Registration[]);
      }
      if (statsRes.success && statsRes.data) {
        setStats(statsRes.data as Stats);
      }
    } catch (error) {
      toast.error("Failed to load data");
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const filterVisits = () => {
    let filtered = [...visits];

    if (searchQuery) {
      filtered = filtered.filter(
        (visit) =>
          visit.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          visit.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
          visit.location.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (statusFilter !== "all") {
      filtered = filtered.filter((visit) => visit.status === statusFilter);
    }

    setFilteredVisits(filtered);
  };

  const filterRegistrations = () => {
    let filtered = [...registrations];

    if (searchQuery) {
      filtered = filtered.filter(
        (reg) =>
          reg.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          reg.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
          reg.university.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredRegistrations(filtered);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const files = Array.from(e.target.files);
    files.forEach((file) => {
      setImages((prev) => [
        ...prev,
        {
          id: (Date.now() + Math.random()).toString(),
          file,
          name: file.name,
        },
      ]);
    });
  };

  const handleVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const files = Array.from(e.target.files);
    files.forEach((file) => {
      if (file.size < 10 * 1024 * 1024) {
        // 10MB limit
        setVideos((prev) => [
          ...prev,
          {
            id: (Date.now() + Math.random()).toString(),
            file,
            name: file.name,
            size: (file.size / 1024 / 1024).toFixed(2) + " MB",
          },
        ]);
      } else {
        toast.error("Video must be less than 10MB");
      }
    });
  };

  const removeImage = (id: string) => {
    setImages((prev) => prev.filter((img) => img.id !== id));
  };

  const removeVideo = (id: string) => {
    setVideos((prev) => prev.filter((video) => video.id !== id));
  };

  const resetForm = () => {
    setFormData({
      title: "",
      company: "",
      industry: "manufacturing",
      registrationDeadline: "",
      location: "",
      description: "",
      objectives: "",
      agenda: "",
      visitDate: "",
      startTime: "",
      endTime: "",
      duration: "",
      maxParticipants: 0,
      organizerName: "",
      organizerContact: "",
      companyContact: "",
      companyEmail: "",
      safetyGuidelines: "",
      transportProvided: false,
      meetingPoint: "",
      status: "upcoming",
      slug: "",
    });
    setEditMode(false);
    setImages([]);
    setVideos([]);
    setSelectedVisit(null);
  };

  const validateForm = (): boolean => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const startDate = new Date(formData.visitDate);

    // Validate start date is in the future (only for new visits)
    if (startDate < today && !editMode) {
      toast.error("Visit date must be in the future");
      return false;
    }

    // Validate end time is after start time
    if (formData.endTime) {
      const endTime = new Date(formData.endTime);
      const startTime = new Date(formData.startTime);
      if (endTime <= startTime) {
        toast.error("End time must be after start time");
        return false;
      }
    }

    // Validate media uploads for completed status
    if (formData.status === "completed") {
      if (images.length === 0 && videos.length === 0) {
        toast.error(
          "Please add at least one image or video for completed visits"
        );
        return false;
      }
    }

    return true;
  };

  const handleInputChange = (field: string, value: boolean | string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  };

  const handleOpenDialog = (visit?: IndustrialVisit) => {
    if (visit) {
      setEditMode(true);
      setFormData({
        title: visit.title,
        company: visit.company,
        industry: visit.industry,
        location: visit.location,
        description: visit.description,
        objectives: visit.objectives,
        agenda: visit.agenda || "",

        visitDate: new Date(visit.visitDate).toISOString().split("T")[0],
        startTime: new Date(visit.startTime).toISOString().slice(0, 16),
        endTime: visit.endTime
          ? new Date(visit.endTime).toISOString().slice(0, 16)
          : "",
        registrationDeadline: visit.registrationDeadline
          ? new Date(visit.registrationDeadline).toISOString().slice(0, 16)
          : "",
        duration: visit.duration || "",
        maxParticipants: visit.maxParticipants || 0,
        organizerName: visit.organizerName || "",
        organizerContact: visit.organizerContact || "",
        companyContact: visit.companyContact || "",
        companyEmail: visit.companyEmail || "",
        safetyGuidelines: visit.safetyGuidelines || "",
        transportProvided: visit.transportProvided,
        meetingPoint: visit.meetingPoint || "",
        status: visit.status,
        slug: visit.slug,
      });
      setSelectedVisit(visit);
      setImages([]);
      setVideos([]);
    } else {
      resetForm();
    }
    setShowDialog(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    if (!formData.title || !formData.company || !formData.visitDate) {
      toast.error("Please fill in required fields");
      return;
    }

    if (!validateForm()) {
      return;
    }

    const slug = formData.slug || generateSlug(formData.title);

    const visitData = {
      ...formData,
      visitDate: new Date(formData.visitDate),
      startTime: new Date(formData.startTime),
      endTime: formData.endTime ? new Date(formData.endTime) : null,
      maxParticipants: Number(formData.maxParticipants) || 0,
      registrationDeadline: formData.endTime
        ? new Date(formData.endTime)
        : null,
      slug,
    };

    try {
      let result;
      if (editMode && selectedVisit) {
        result = await UpdateIndustrialVisit(
          selectedVisit.id,
          visitData,
          images,
          videos
        );
      } else {
        result = await CreateIndustrialVisit(visitData);
      }

      if (result.success) {
        toast.success(
          editMode ? "Visit updated successfully" : "Visit created successfully"
        );
        setShowDialog(false);
        resetForm();
        fetchData();
      } else {
        toast.error(result.error || "Failed to save visit");
      }
    } catch (error) {
      toast.error("An error occurred");
      console.error("Error saving visit:", error);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (visitId: string) => {
    if (!confirm("Are you sure you want to delete this visit?")) return;

    try {
      const result = await DeleteIndustrialVisit(visitId);
      if (result.success) {
        toast.success("Visit deleted successfully");
        fetchData();
      } else {
        toast.error(result.error || "Failed to delete visit");
      }
    } catch (error) {
      toast.error("An error occurred");
      console.error("Error deleting visit:", error);
    }
  };

  const handleUpdateRegistrationStatus = async (
    registrationId: string,
    status: string
  ) => {
    try {
      const result = await UpdateRegistrationStatus(registrationId, status);
      if (result.success) {
        toast.success("Status updated successfully");
        fetchData();
      } else {
        toast.error(result.error || "Failed to update status");
      }
    } catch (error) {
      toast.error("An error occurred");
      console.error("Error updating status:", error);
    }
  };

  const exportToCSV = (data: excelData[], filename: string) => {
    const headers: string[] = Object.keys(data[0]);
    const csv = [
      headers.join(","),
      ...data.map((row) =>
        headers
          .map((header) =>
            JSON.stringify(row[header as keyof typeof row] || "")
          )
          .join(",")
      ),
    ].join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
  };

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      upcoming: "bg-[#1164A3] text-white",
      ongoing: "bg-[#68B9C4] text-white",
      completed: "bg-[#82B4CC] text-white",
      cancelled: "bg-gray-400 text-white",
      postponed: "bg-amber-500 text-white",
    };
    return colors[status] || "bg-gray-400";
  };

  const getRegistrationStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      registered: "bg-blue-500 text-white",
      confirmed: "bg-[#68B9C4] text-white",
      waitlist: "bg-amber-500 text-white",
      cancelled: "bg-red-500 text-white",
      attended: "bg-green-500 text-white",
      no_show: "bg-gray-400 text-white",
    };
    return colors[status] || "bg-gray-400";
  };

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const formatTime = (date: Date) => {
    return new Date(date).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-800 flex items-center gap-3">
                <Factory className="w-10 h-10 text-[#1164A3]" />
                Industrial Visits Management
              </h1>
              <p className="text-gray-600 mt-2">Manage visits, registrations</p>
            </div>
            <Button
              onClick={() => handleOpenDialog()}
              className="bg-gradient-to-r from-[#1164A3] to-[#68B9C4] text-white"
            >
              <Plus className="w-4 h-4 mr-2" />
              Create Visit
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-[#82B4CC]/30">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">
                Total Visits
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-3xl font-bold text-gray-800">
                  {stats.totalVisits}
                </div>
                <div className="w-12 h-12 bg-[#1164A3]/10 rounded-full flex items-center justify-center">
                  <Factory className="w-6 h-6 text-[#1164A3]" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-[#82B4CC]/30">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">
                Upcoming
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-3xl font-bold text-gray-800">
                  {stats.upcomingVisits}
                </div>
                <div className="w-12 h-12 bg-[#68B9C4]/10 rounded-full flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-[#68B9C4]" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-[#82B4CC]/30">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">
                Completed
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-3xl font-bold text-gray-800">
                  {stats.completedVisits}
                </div>
                <div className="w-12 h-12 bg-[#82B4CC]/10 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-[#82B4CC]" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-[#82B4CC]/30">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">
                Total Registrations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-3xl font-bold text-gray-800">
                  {stats.totalRegistrations}
                </div>
                <div className="w-12 h-12 bg-[#B0A3B3]/10 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-[#B0A3B3]" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-6">
            <TabsTrigger value="visits" className="flex items-center gap-2">
              <Factory className="w-4 h-4" />
              Visits
            </TabsTrigger>
            <TabsTrigger
              value="registrations"
              className="flex items-center gap-2"
            >
              <Users className="w-4 h-4" />
              Registrations
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              Analytics
            </TabsTrigger>
          </TabsList>

          {/* Visits Tab */}
          <TabsContent value="visits">
            <Card className="border-[#82B4CC]/30">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Industrial Visits</CardTitle>
                  <div className="flex items-center gap-3">
                    <div className="relative w-64">
                      <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                      <Input
                        placeholder="Search visits..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                    <Select
                      value={statusFilter}
                      onValueChange={setStatusFilter}
                    >
                      <SelectTrigger className="w-40">
                        <Filter className="w-4 h-4 mr-2" />
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Status</SelectItem>
                        <SelectItem value="upcoming">Upcoming</SelectItem>
                        <SelectItem value="ongoing">Ongoing</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                        <SelectItem value="cancelled">Cancelled</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button
                      variant="outline"
                      onClick={() =>
                        exportToCSV(
                          visits.map((v) => ({
                            title: v.title,
                            company: v.company,
                            location: v.location,
                            date: formatDate(v.visitDate),
                            participants: v.currentParticipants,
                            status: v.status,
                          })),
                          "industrial-visits.csv"
                        )
                      }
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Export
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {loading ? (
                  <div className="flex justify-center items-center py-12">
                    <Loader2 className="w-8 h-8 animate-spin text-[#1164A3]" />
                  </div>
                ) : filteredVisits.length === 0 ? (
                  <div className="text-center py-12">
                    <Factory className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-600">No visits found</p>
                  </div>
                ) : (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Visit Details</TableHead>
                        <TableHead>Company</TableHead>
                        <TableHead>Date & Time</TableHead>
                        <TableHead>Capacity</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredVisits.map((visit) => (
                        <TableRow key={visit.id}>
                          <TableCell>
                            <div className="flex items-start gap-3">
                              <div>
                                <div className="font-semibold text-gray-800">
                                  {visit.title}
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                                  <MapPin className="w-3 h-3" />
                                  {visit.location}
                                </div>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Building2 className="w-4 h-4 text-[#1164A3]" />
                              <span className="font-medium">
                                {visit.company}
                              </span>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="space-y-1">
                              <div className="flex items-center gap-2 text-sm">
                                <Calendar className="w-3 h-3 text-[#68B9C4]" />
                                {formatDate(visit.visitDate)}
                              </div>
                              <div className="flex items-center gap-2 text-sm text-gray-600">
                                <Clock className="w-3 h-3" />
                                {formatTime(visit.startTime)}
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="text-sm">
                              <span className="font-semibold text-[#1164A3]">
                                {visit.currentParticipants}
                              </span>
                              <span className="text-gray-600">
                                {" "}
                                / {visit.maxParticipants}
                              </span>
                            </div>
                            <div className="text-xs text-gray-500 mt-1">
                              {visit.maxParticipants -
                                visit.currentParticipants}{" "}
                              seats left
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge className={getStatusColor(visit.status)}>
                              {visit.status}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="sm">
                                  <MoreVertical className="w-4 h-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem
                                  onClick={() => {
                                    setSelectedVisit(visit);
                                    setShowViewDialog(true);
                                  }}
                                >
                                  <Eye className="w-4 h-4 mr-2" />
                                  View Details
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                  onClick={() => handleOpenDialog(visit)}
                                >
                                  <Edit className="w-4 h-4 mr-2" />
                                  Edit
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                  onClick={() => handleDelete(visit.id)}
                                  className="text-red-600"
                                >
                                  <Trash2 className="w-4 h-4 mr-2" />
                                  Delete
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Registrations Tab */}
          <TabsContent value="registrations">
            <Card className="border-[#82B4CC]/30">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Visit Registrations</CardTitle>
                  <div className="flex items-center gap-3">
                    <div className="relative w-64">
                      <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                      <Input
                        placeholder="Search registrations..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                    <Button
                      variant="outline"
                      onClick={() =>
                        exportToCSV(
                          registrations.map((r) => ({
                            name: r.fullName,
                            email: r.email,
                            phone: r.phone,
                            university: r.university,
                            department: r.department,
                            semester: r.semester,
                            status: r.registrationStatus,
                          })),
                          "registrations.csv"
                        )
                      }
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Export
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {loading ? (
                  <div className="flex justify-center items-center py-12">
                    <Loader2 className="w-8 h-8 animate-spin text-[#1164A3]" />
                  </div>
                ) : filteredRegistrations.length === 0 ? (
                  <div className="text-center py-12">
                    <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-600">No registrations found</p>
                  </div>
                ) : (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Student Details</TableHead>
                        <TableHead>Contact</TableHead>
                        <TableHead>Academic Info</TableHead>
                        <TableHead>Emergency Contact</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredRegistrations.map((registration) => (
                        <TableRow key={registration.id}>
                          <TableCell>
                            <div>
                              <div className="font-semibold text-gray-800">
                                {registration.fullName}
                              </div>
                              {registration.visit && (
                                <div className="text-xs text-gray-600 mt-1">
                                  {registration.visit.title}
                                </div>
                              )}
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="space-y-1 text-sm">
                              <div className="flex items-center gap-2">
                                <Mail className="w-3 h-3 text-[#68B9C4]" />
                                {registration.email}
                              </div>
                              <div className="flex items-center gap-2">
                                <Phone className="w-3 h-3 text-[#68B9C4]" />
                                {registration.phone}
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="text-sm space-y-1">
                              <div className="font-medium">
                                {registration.university}
                              </div>
                              <div className="text-gray-600">
                                {registration.department}
                              </div>
                              <div className="text-gray-600">
                                Semester: {registration.semester}
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="text-sm space-y-1">
                              <div className="font-medium">
                                {registration.emergencyContact}
                              </div>
                              <div className="text-gray-600">
                                {registration.emergencyPhone}
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Select
                              value={registration.registrationStatus}
                              onValueChange={(value) =>
                                handleUpdateRegistrationStatus(
                                  registration.id,
                                  value
                                )
                              }
                            >
                              <SelectTrigger className="w-32">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="registered">
                                  Registered
                                </SelectItem>
                                <SelectItem value="confirmed">
                                  Confirmed
                                </SelectItem>
                                <SelectItem value="waitlist">
                                  Waitlist
                                </SelectItem>
                                <SelectItem value="cancelled">
                                  Cancelled
                                </SelectItem>
                                <SelectItem value="attended">
                                  Attended
                                </SelectItem>
                                <SelectItem value="no_show">No Show</SelectItem>
                              </SelectContent>
                            </Select>
                          </TableCell>

                          <TableCell>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => {
                                setSelectedRegistration(registration);
                                setShowViewDialog(true);
                              }}
                            >
                              <Eye className="w-4 h-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-[#82B4CC]/30">
                <CardHeader>
                  <CardTitle>Visit Statistics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-[#1164A3]/5 rounded-lg">
                      <span className="text-gray-700">Total Visits</span>
                      <span className="font-bold text-[#1164A3]">
                        {stats.totalVisits}
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-[#68B9C4]/5 rounded-lg">
                      <span className="text-gray-700">Upcoming Visits</span>
                      <span className="font-bold text-[#68B9C4]">
                        {stats.upcomingVisits}
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-[#82B4CC]/5 rounded-lg">
                      <span className="text-gray-700">Completed Visits</span>
                      <span className="font-bold text-[#82B4CC]">
                        {stats.completedVisits}
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-[#B0A3B3]/5 rounded-lg">
                      <span className="text-gray-700">Total Registrations</span>
                      <span className="font-bold text-[#B0A3B3]">
                        {stats.totalRegistrations}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-[#82B4CC]/30">
                <CardHeader>
                  <CardTitle>Registration Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {visits.slice(0, 5).map((visit) => (
                      <div
                        key={visit.id}
                        className="flex items-center justify-between p-3 border border-[#82B4CC]/20 rounded-lg"
                      >
                        <div className="flex-1">
                          <div className="font-medium text-gray-800 text-sm">
                            {visit.title}
                          </div>
                          <div className="text-xs text-gray-600 mt-1">
                            {formatDate(visit.visitDate)}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-semibold text-[#1164A3]">
                            {visit.currentParticipants}/{visit.maxParticipants}
                          </div>
                          <div className="text-xs text-gray-600">
                            {Math.round(
                              (visit.currentParticipants /
                                visit.maxParticipants) *
                                100
                            )}
                            % full
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Create/Edit Dialog */}
        <Dialog open={showDialog} onOpenChange={setShowDialog}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>
                {editMode ? "Edit Industrial Visit" : "Create Industrial Visit"}
              </DialogTitle>
              <DialogDescription>
                Fill in the details for the industrial visit
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Basic Information */}
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-800">
                  Basic Information
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="pb-2">Visit Title *</Label>
                    <Input
                      value={formData.title}
                      onChange={(e) =>
                        handleInputChange("title", e.target.value)
                      }
                      placeholder="e.g., Visit to Rajby Textile"
                      required
                    />
                  </div>
                  <div>
                    <Label className="pb-2">Company *</Label>
                    <Input
                      value={formData.company}
                      onChange={(e) =>
                        handleInputChange("company", e.target.value)
                      }
                      placeholder="e.g., Rajby Textile Limited"
                      required
                    />
                  </div>
                  <div>
                    <Label className="pb-2">Industry Type *</Label>
                    <Select
                      value={formData.industry}
                      onValueChange={(value) =>
                        handleInputChange("industry", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="manufacturing">
                          Manufacturing
                        </SelectItem>
                        <SelectItem value="textile">Textile</SelectItem>
                        <SelectItem value="software_it">
                          Software & IT
                        </SelectItem>
                        <SelectItem value="power_energy">
                          Power & Energy
                        </SelectItem>
                        <SelectItem value="telecommunication">
                          Telecommunication
                        </SelectItem>
                        <SelectItem value="engineering">Engineering</SelectItem>
                        <SelectItem value="research_development">
                          Research & Development
                        </SelectItem>
                        <SelectItem value="automotive">Automotive</SelectItem>
                        <SelectItem value="pharmaceuticals">
                          Pharmaceuticals
                        </SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label className="pb-2">Location *</Label>
                    <Input
                      value={formData.location}
                      onChange={(e) =>
                        handleInputChange("location", e.target.value)
                      }
                      placeholder="e.g., Karachi, Pakistan"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-4">
                <div>
                  <Label className="pb-2">Description *</Label>
                  <Textarea
                    value={formData.description}
                    onChange={(e) =>
                      handleInputChange("description", e.target.value)
                    }
                    placeholder="Describe the industrial visit..."
                    rows={3}
                    required
                  />
                </div>
                <div>
                  <Label className="pb-2">Objectives *</Label>
                  <Textarea
                    value={formData.objectives}
                    onChange={(e) =>
                      handleInputChange("objectives", e.target.value)
                    }
                    placeholder="What will students learn?"
                    rows={2}
                    required
                  />
                </div>
                <div>
                  <Label className="pb-2">Agenda (Optional)</Label>
                  <Textarea
                    value={formData.agenda}
                    onChange={(e) =>
                      handleInputChange("agenda", e.target.value)
                    }
                    placeholder="Visit schedule and activities..."
                    rows={2}
                  />
                </div>
              </div>

              {/* Schedule */}
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-800">Schedule</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="pb-2">Visit Date *</Label>
                    <Input
                      type="date"
                      value={formData.visitDate}
                      onChange={(e) =>
                        handleInputChange("visitDate", e.target.value)
                      }
                      required
                    />
                  </div>
                  <div>
                    <Label className="pb-2">Start Time *</Label>
                    <Input
                      type="datetime-local"
                      value={formData.startTime}
                      onChange={(e) =>
                        handleInputChange("startTime", e.target.value)
                      }
                      required
                    />
                  </div>
                  <div>
                    <Label className="pb-2">End Time (Optional)</Label>
                    <Input
                      type="datetime-local"
                      value={formData.endTime}
                      onChange={(e) =>
                        handleInputChange("endTime", e.target.value)
                      }
                    />
                  </div>
                  <div>
                    <Label className="pb-2">Duration</Label>
                    <Input
                      value={formData.duration}
                      onChange={(e) =>
                        handleInputChange("duration", e.target.value)
                      }
                      placeholder="e.g., 4 hours"
                    />
                  </div>
                </div>
              </div>

              {/* Capacity & Registration */}
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-800">
                  Capacity & Registration
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="pb-2">Max Participants *</Label>
                    <Input
                      type="number"
                      value={formData.maxParticipants}
                      onChange={(e) =>
                        handleInputChange("maxParticipants", e.target.value)
                      }
                      placeholder="e.g., 40"
                      required
                    />
                  </div>
                  <div>
                    <Label className="pb-2">Registration Deadline</Label>
                    <Input
                      type="datetime-local"
                      value={formData.registrationDeadline}
                      onChange={(e) =>
                        handleInputChange(
                          "registrationDeadline",
                          e.target.value
                        )
                      }
                      placeholder="e.g., 40"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-800">
                  Contact Information
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="pb-2">Organizer Name</Label>
                    <Input
                      value={formData.organizerName}
                      onChange={(e) =>
                        handleInputChange("organizerName", e.target.value)
                      }
                      placeholder="e.g., Hibab Khan"
                    />
                  </div>
                  <div>
                    <Label className="pb-2">Organizer Contact</Label>
                    <Input
                      value={formData.organizerContact}
                      onChange={(e) =>
                        handleInputChange("organizerContact", e.target.value)
                      }
                      placeholder="Phone or email"
                    />
                  </div>
                  <div>
                    <Label className="pb-2">Company Contact</Label>
                    <Input
                      value={formData.companyContact}
                      onChange={(e) =>
                        handleInputChange("companyContact", e.target.value)
                      }
                      placeholder="Company contact person"
                    />
                  </div>
                  <div>
                    <Label className="pb-2">Company Email</Label>
                    <Input
                      type="email"
                      value={formData.companyEmail}
                      onChange={(e) =>
                        handleInputChange("companyEmail", e.target.value)
                      }
                      placeholder="company@example.com"
                    />
                  </div>
                </div>
              </div>

              {/* Additional Details */}
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-800">
                  Additional Details
                </h3>
                <div>
                  <Label className="pb-2">Safety Guidelines</Label>
                  <Textarea
                    value={formData.safetyGuidelines}
                    onChange={(e) =>
                      handleInputChange("safetyGuidelines", e.target.value)
                    }
                    placeholder="Safety instructions..."
                    rows={2}
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    checked={formData.transportProvided}
                    onCheckedChange={(checked) =>
                      handleInputChange("transportProvided", checked)
                    }
                  />
                  <Label className="pb-2">Transport Provided</Label>
                </div>
                {formData.transportProvided && (
                  <div>
                    <Label className="pb-2">Meeting Point</Label>
                    <Input
                      value={formData.meetingPoint}
                      onChange={(e) =>
                        handleInputChange("meetingPoint", e.target.value)
                      }
                      placeholder="e.g., University Main Gate"
                    />
                  </div>
                )}
              </div>

              {/* Status & Features */}
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-800">
                  Status & Features
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="pb-2">Status</Label>
                    <Select
                      value={formData.status}
                      onValueChange={(value) =>
                        handleInputChange("status", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="upcoming">Upcoming</SelectItem>
                        <SelectItem value="ongoing">Ongoing</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                        <SelectItem value="cancelled">Cancelled</SelectItem>
                        <SelectItem value="postponed">Postponed</SelectItem>
                      </SelectContent>
                    </Select>
                    {formData.status === "completed" && (
                      <p className="text-xs text-amber-600 mt-1">
                        ⚠️ Requires at least 1 image or video
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Media Upload for Completed Visits */}
              {formData.status === "completed" && (
                <div className="space-y-4 border-t pt-4">
                  <h4 className="font-semibold text-gray-800">
                    Visit Media (Required for Completed Visits)
                  </h4>

                  {/* Images */}
                  <div>
                    <Label className="pb-2 flex items-center gap-2">
                      <ImageIcon className="w-4 h-4" />
                      Images
                    </Label>
                    <Input
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={handleImageUpload}
                      className="cursor-pointer"
                    />
                    {images.length > 0 && (
                      <div className="mt-2 space-y-2">
                        {images.map((img) => (
                          <div
                            key={img.id}
                            className="flex items-center justify-between p-2 bg-gray-50 rounded"
                          >
                            <span className="text-sm truncate">{img.name}</span>
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              onClick={() => removeImage(img.id)}
                            >
                              <Trash2 className="w-4 h-4 text-red-500" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Videos */}
                  <div>
                    <Label className="pb-2 flex items-center gap-2">
                      <Film className="w-4 h-4" />
                      Videos (Max 10MB each)
                    </Label>
                    <Input
                      type="file"
                      accept="video/*"
                      multiple
                      onChange={handleVideoUpload}
                      className="cursor-pointer"
                    />
                    {videos.length > 0 && (
                      <div className="mt-2 space-y-2">
                        {videos.map((vid) => (
                          <div
                            key={vid.id}
                            className="flex items-center justify-between p-2 bg-gray-50 rounded"
                          >
                            <div className="flex-1">
                              <span className="text-sm truncate block">
                                {vid.name}
                              </span>
                              <span className="text-xs text-gray-500">
                                {vid.size}
                              </span>
                            </div>
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              onClick={() => removeVideo(vid.id)}
                            >
                              <Trash2 className="w-4 h-4 text-red-500" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Slug */}
              <div>
                <Label className="pb-2">URL Slug</Label>
                <Input
                  value={formData.slug}
                  onChange={(e) => handleInputChange("slug", e.target.value)}
                  placeholder="Auto-generated from title"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Leave empty to auto-generate from title
                </p>
              </div>

              {/* Submit Buttons */}
              <div className="flex justify-end gap-3 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setShowDialog(false)}
                >
                  Cancel
                </Button>
                <Button
                  disabled={saving}
                  type="submit"
                  className="bg-gradient-to-r from-[#1164A3] to-[#68B9C4] text-white"
                >
                  {saving ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      {editMode ? "Updating..." : "Creating..."}
                    </>
                  ) : editMode ? (
                    "Update Visit"
                  ) : (
                    "Create Visit"
                  )}
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>

        {/* View Details Dialog */}
        <Dialog open={showViewDialog} onOpenChange={setShowViewDialog}>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>
                {selectedVisit
                  ? "Visit Details"
                  : selectedRegistration
                    ? "Registration Details"
                    : "Details"}
              </DialogTitle>
            </DialogHeader>

            {selectedVisit && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    {selectedVisit.title}
                  </h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">Company:</span>
                      <span className="ml-2 font-medium">
                        {selectedVisit.company}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-600">Location:</span>
                      <span className="ml-2 font-medium">
                        {selectedVisit.location}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-600">Date:</span>
                      <span className="ml-2 font-medium">
                        {formatDate(selectedVisit.visitDate)}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-600">Time:</span>
                      <span className="ml-2 font-medium">
                        {formatTime(selectedVisit.startTime)}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-600">Capacity:</span>
                      <span className="ml-2 font-medium">
                        {selectedVisit.currentParticipants} /{" "}
                        {selectedVisit.maxParticipants}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-600">Status:</span>
                      <Badge
                        className={`ml-2 ${getStatusColor(selectedVisit.status)}`}
                      >
                        {selectedVisit.status}
                      </Badge>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Description</h4>
                  <p className="text-sm text-gray-700">
                    {selectedVisit.description}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Objectives</h4>
                  <p className="text-sm text-gray-700">
                    {selectedVisit.objectives}
                  </p>
                </div>

                {selectedVisit.safetyGuidelines && (
                  <div>
                    <h4 className="font-semibold mb-2">Safety Guidelines</h4>
                    <p className="text-sm text-gray-700">
                      {selectedVisit.safetyGuidelines}
                    </p>
                  </div>
                )}
              </div>
            )}

            {selectedRegistration && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-4">
                    {selectedRegistration.fullName}
                  </h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">Email:</span>
                      <span className="ml-2 font-medium">
                        {selectedRegistration.email.length > 20
                          ? `${selectedRegistration.email.slice(0, 20)}...`
                          : selectedRegistration.email}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-600">Phone:</span>
                      <span className="ml-2 font-medium">
                        {selectedRegistration.phone}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-600">University:</span>
                      <span className="ml-2 font-medium">
                        {selectedRegistration.university}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-600">Department:</span>
                      <span className="ml-2 font-medium">
                        {selectedRegistration.department}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-600">Semester:</span>
                      <span className="ml-2 font-medium">
                        {selectedRegistration.semester}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-600">Status:</span>
                      <Badge
                        className={`ml-2 ${getRegistrationStatusColor(
                          selectedRegistration.registrationStatus
                        )}`}
                      >
                        {selectedRegistration.registrationStatus}
                      </Badge>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-semibold mb-3">Emergency Contact</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">Contact Person:</span>
                      <span className="ml-2 font-medium">
                        {selectedRegistration.emergencyContact}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-600">Phone:</span>
                      <span className="ml-2 font-medium">
                        {selectedRegistration.emergencyPhone}
                      </span>
                    </div>
                  </div>
                </div>

                {selectedRegistration.feedback && (
                  <div className="border-t pt-4">
                    <h4 className="font-semibold mb-2">Feedback</h4>
                    <div className="flex items-center gap-2 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < (selectedRegistration.rating || 0)
                              ? "fill-[#68B9C4] text-[#68B9C4]"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-sm text-gray-700">
                      {selectedRegistration.feedback}
                    </p>
                  </div>
                )}
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
