// components/form-responses/viewer.tsx
"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import {
  Download,
  Eye,
  RefreshCw,
  FileText,
  Loader2,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import {
  MentorFormResponse,
  PartnerFormResponse,
  ScholarshipFormResponse,
  StudentFormResponse,
  VolunteerFormResponse,
} from "@/lib/form-types";
import {
  GetAllPartners,
  UpdatePartnerApplication,
} from "@/app/actions/partners-application";
import {
  GetAllScholarships,
  UpdateScholarshipApplication,
} from "@/app/actions/scholarship-application";
import {
  GetAllStudents,
  UpdateStudentApplication,
} from "@/app/actions/students-application";
import {
  GetAllMentors,
  UpdateMentorApplication,
} from "@/app/actions/mentors-application";
import {
  GetAllVolunteers,
  UpdateVolunteerApplication,
} from "@/app/actions/volunteers-application";
import { fileData } from "@/lib/types";
import { toast } from "sonner";

type FormType = "partner" | "scholarship" | "student" | "mentor" | "volunteer";

type FormData =
  | PartnerFormResponse
  | ScholarshipFormResponse
  | StudentFormResponse
  | MentorFormResponse
  | VolunteerFormResponse;

// Enhanced download function
const downloadCloudinaryFile = async (url: string, fileName: string) => {
  try {
    toast.info("Preparing download...");

    // Try multiple Cloudinary download strategies
    let downloadUrl = url;

    // Strategy 1: Add fl_attachment flag for forced download
    if (url.includes("/upload/")) {
      downloadUrl = url.replace(/\/upload\//, "/upload/fl_attachment/");
    }

    // Strategy 2: Convert image URLs to raw URLs
    if (url.includes("image/upload")) {
      downloadUrl = downloadUrl.replace("image/upload", "raw/upload");
    }

    try {
      // Attempt to fetch with proper CORS settings
      const response = await fetch(downloadUrl, {
        mode: "cors",
        credentials: "omit",
      });

      if (response.ok) {
        const blob = await response.blob();
        const blobUrl = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = blobUrl;
        link.download = fileName;
        link.style.display = "none";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Clean up
        setTimeout(() => window.URL.revokeObjectURL(blobUrl), 100);

        toast.success("Download started!");
        return true;
      }
    } catch (fetchError) {
      console.warn("Fetch failed, trying alternative method:", fetchError);
    }

    // Fallback: Open in new tab with download parameter
    const fallbackUrl = `${url}?dl=${encodeURIComponent(fileName)}`;
    window.open(fallbackUrl, "_blank");
    toast.info("File opened in new tab");
    return false;
  } catch (error) {
    console.error("Error downloading file:", error);
    toast.error("Download failed. Opening file in new tab...");
    window.open(url, "_blank");
    return false;
  }
};

export default function FormResponsesViewer() {
  const [selectedForm, setSelectedForm] = useState<FormType>("partner");
  const [data, setData] = useState<FormData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [columns, setColumns] = useState<string[]>([]);
  const [updatingStatus, setUpdatingStatus] = useState<string | null>(null);

  const apiEndpoints = {
    partner: GetAllPartners,
    scholarship: GetAllScholarships,
    student: GetAllStudents,
    mentor: GetAllMentors,
    volunteer: GetAllVolunteers,
  };

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await apiEndpoints[selectedForm]();
      if (!response.success)
        throw new Error(response.error || "Failed to fetch data");

      if (response.data) {
        setData(response.data);
        setColumns(
          response.data.length > 0
            ? Object.keys(response.data[0]).filter((key) => key !== "id")
            : []
        );
        toast.success(`Loaded ${response.data.length} ${selectedForm} forms`);
      }
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : "An error occurred";
      setError(errorMsg);
      toast.error(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [selectedForm]);

  const handleStatusUpdate = async (id: string, newStatus: string) => {
    setUpdatingStatus(id);
    try {
      let result;

      switch (selectedForm) {
        case "scholarship":
          result = await UpdateScholarshipApplication(id, newStatus);
          break;
        case "volunteer":
          result = await UpdateVolunteerApplication(id, newStatus);
          break;
        case "student":
          result = await UpdateStudentApplication(id, newStatus);
          break;
        case "partner":
          result = await UpdatePartnerApplication(id, newStatus);
          break;
        case "mentor":
          result = await UpdateMentorApplication(id, newStatus);
          break;
        default:
          throw new Error("Invalid form type");
      }

      if (result.success) {
        // Update local state
        setData((prev) =>
          prev.map((item) =>
            item.id === id ? { ...item, status: newStatus } : item
          )
        );
        toast.success(`Status updated to ${newStatus}`);
      } else {
        throw new Error(result.error || "Failed to update status");
      }
    } catch (error) {
      const errorMsg =
        error instanceof Error ? error.message : "Failed to update status";
      toast.error(errorMsg);
      setError(errorMsg);
    } finally {
      setUpdatingStatus(null);
    }
  };

  const renderCellContent = (item: FormData, column: string) => {
    const value = item[column as keyof typeof item] as string;

    switch (column) {
      case "full_name":
        const linkedin = item[
          "linkedin_profile" as keyof typeof item
        ] as string;
        return (
          <div className="font-medium flex items-center gap-2 min-w-[150px]">
            <span className="truncate">{value}</span>
            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1164A3] hover:text-[#68B9C4] flex-shrink-0"
                title="View LinkedIn Profile"
              >
                <Eye className="h-4 w-4" />
              </a>
            )}
          </div>
        );

      case "email":
        return (
          <p className="text-[#1164A3] hover:text-[#68B9C4]  block truncate max-w-[200px]">
            {value}
          </p>
        );

      case "status":
        const isUpdating = updatingStatus === item.id;
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Badge
                variant={
                  value === "approved"
                    ? "default"
                    : value === "pending"
                      ? "secondary"
                      : value === "rejected"
                        ? "destructive"
                        : "outline"
                }
                className={`cursor-pointer hover:opacity-80 ${
                  value === "approved"
                    ? "bg-[#68B9C4]"
                    : value === "pending"
                      ? "bg-[#B0A3B3]"
                      : value === "reviewed"
                        ? "bg-[#82B4CC]"
                        : ""
                }`}
              >
                {isUpdating ? (
                  <Loader2 className="h-3 w-3 animate-spin mr-1" />
                ) : (
                  <></>
                )}
                {String(value)}
              </Badge>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem
                onClick={() => handleStatusUpdate(item.id, "pending")}
                disabled={isUpdating}
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#B0A3B3]" />
                  Set to Pending
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handleStatusUpdate(item.id, "approved")}
                disabled={isUpdating}
              >
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-[#68B9C4]" />
                  Set to Approved
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handleStatusUpdate(item.id, "rejected")}
                disabled={isUpdating}
              >
                <div className="flex items-center gap-2">
                  <AlertCircle className="h-4 w-4 text-red-500" />
                  Set to Rejected
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handleStatusUpdate(item.id, "reviewed")}
                disabled={isUpdating}
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#82B4CC]" />
                  Set to Reviewed
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );

      case "resources":
        if (!Array.isArray(value) || value.length === 0) {
          return (
            <span className="text-muted-foreground text-sm">No resources</span>
          );
        }
        return (
          <div className="max-w-[250px] overflow-x-auto">
            <div className="flex flex-wrap gap-2">
              {value.map((resource: fileData, index: number) => {
                const fileName =
                  resource.url.split("/").pop() || `resource_${index + 1}`;
                const fileExtension = fileName.includes(".")
                  ? fileName.split(".").pop()?.toUpperCase()
                  : "FILE";

                return (
                  <button
                    key={index}
                    onClick={() =>
                      downloadCloudinaryFile(resource.url, fileName)
                    }
                    className="flex items-center gap-1.5 text-xs bg-gradient-to-r from-[#1164A3]/10 to-[#68B9C4]/10 hover:from-[#1164A3]/20 hover:to-[#68B9C4]/20 text-[#1164A3] px-2.5 py-1.5 rounded-md transition-all border border-[#82B4CC]/30 hover:border-[#1164A3]/50"
                    title={`Download ${fileName}`}
                  >
                    <FileText className="h-3.5 w-3.5" />
                    <span className="font-medium">
                      {fileExtension} {index + 1}
                    </span>
                    <Download className="h-3 w-3" />
                  </button>
                );
              })}
            </div>
          </div>
        );

      case "experience_years":
        return (
          <Badge variant="outline" className="border-[#82B4CC]/50">
            {value} {Number(value) === 1 ? "year" : "years"}
          </Badge>
        );

      case "country":
        const city = item["city" as keyof typeof item] as string;
        return (
          <div className="space-y-1 min-w-[120px]">
            <div className="font-medium">{value}</div>
            {city && (
              <div className="text-xs text-muted-foreground">{city}</div>
            )}
          </div>
        );

      case "createdAt":
      case "updatedAt":
      case "date_of_birth":
        return (
          <span className="text-sm whitespace-nowrap">
            {new Date(value).toLocaleDateString()}
          </span>
        );

      case "why_join":
      case "why_deserve_scholarship":
      case "why_present":
      case "future_goals":
        return (
          <div className="max-w-[300px] overflow-auto max-h-[100px]">
            <p className="text-sm whitespace-pre-wrap" title={value}>
              {value}
            </p>
          </div>
        );

      case "phone":
        return (
          <p className="text-[#1164A3] hover:text-[#68B9C4]  whitespace-nowrap">
            {value}
          </p>
        );

      default:
        if (value === null || value === undefined) {
          return <span className="text-muted-foreground">-</span>;
        }
        return (
          <div className="max-w-[200px] overflow-auto">
            <span className="text-sm" title={String(value)}>
              {String(value)}
            </span>
          </div>
        );
    }
  };

  const exportToCSV = () => {
    const csvContent = [
      columns.join(","),
      ...data.map((item) => {
        const row = columns
          .filter((key) => key !== "resources")
          .map((col) => {
            const text = String(item[col as keyof typeof item] || "");
            return `"${text.replace(/"/g, '""')}"`;
          });
        return row.join(",");
      }),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${selectedForm}_forms_${new Date().toISOString().split("T")[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
    toast.success("CSV exported successfully!");
  };

  return (
    <Card className="w-full border-[#82B4CC]/30 shadow-lg">
      <CardHeader className="bg-gradient-to-r from-[#1164A3]/5 to-[#68B9C4]/5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <CardTitle className="text-2xl text-gray-900">
              Form Responses
            </CardTitle>
            <CardDescription className="text-gray-600">
              View and manage form submissions from different categories
            </CardDescription>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={fetchData}
              disabled={loading}
              className="border-[#82B4CC]/50 hover:bg-[#82B4CC]/10"
            >
              <RefreshCw
                className={`h-4 w-4 mr-2 ${loading ? "animate-spin" : ""}`}
              />
              Refresh
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={exportToCSV}
              disabled={loading || data.length === 0}
              className="bg-gradient-to-r from-[#1164A3] to-[#68B9C4] text-white border-0 hover:from-[#68B9C4] hover:to-[#82B4CC]"
            >
              <Download className="h-4 w-4 mr-2" />
              Export CSV
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="space-y-6">
          {/* Form Selection */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Select Form Type
              </label>
              <Select
                value={selectedForm}
                onValueChange={(value: FormType) => setSelectedForm(value)}
              >
                <SelectTrigger className="w-full sm:w-[300px] border-[#82B4CC]/50 focus:ring-[#1164A3]">
                  <SelectValue placeholder="Select form type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="partner">Partner Forms</SelectItem>
                  <SelectItem value="scholarship">Scholarship Forms</SelectItem>
                  <SelectItem value="student">Student Forms</SelectItem>
                  <SelectItem value="mentor">Mentor Forms</SelectItem>
                  <SelectItem value="volunteer">Volunteer Forms</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-2">
              <Badge
                variant="outline"
                className="text-sm border-[#1164A3] text-[#1164A3]"
              >
                Total: {loading ? "..." : data.length}
              </Badge>
              {data.length > 0 && (
                <Badge
                  variant="secondary"
                  className="text-sm bg-[#68B9C4]/20 text-[#1164A3]"
                >
                  Latest: {new Date(data[0].createdAt).toLocaleDateString()}
                </Badge>
              )}
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="font-medium">Error loading data</p>
                  <p className="text-sm mt-1">{error}</p>
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={fetchData}
                className="mt-3 border-red-300 hover:bg-red-100"
              >
                Retry
              </Button>
            </div>
          )}

          {/* Data Table */}
          <div className="rounded-lg border border-[#82B4CC]/30 overflow-hidden">
            {loading ? (
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <Skeleton className="h-4 w-1/4" />
                  <Skeleton className="h-10 w-full" />
                </div>
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="flex items-center space-x-4">
                    {[1, 2, 3, 4].map((j) => (
                      <Skeleton key={j} className="h-12 flex-1" />
                    ))}
                  </div>
                ))}
              </div>
            ) : data.length === 0 ? (
              <div className="p-12 text-center">
                <div className="mx-auto w-16 h-16 rounded-full bg-[#82B4CC]/20 flex items-center justify-center mb-4">
                  <Eye className="h-8 w-8 text-[#1164A3]" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  No submissions found
                </h3>
                <p className="text-gray-600 mt-2">
                  No {selectedForm} form submissions available yet.
                </p>
              </div>
            ) : (
              <div className="overflow-auto max-h-[700px]">
                <Table>
                  <TableHeader className="sticky top-0 bg-gradient-to-r from-[#1164A3]/10 to-[#68B9C4]/10 z-10">
                    <TableRow>
                      {columns.map((label) => (
                        <TableHead
                          key={label}
                          className="font-semibold text-gray-900 whitespace-nowrap"
                        >
                          {label
                            .replace(/_/g, " ")
                            .replace(/\b\w/g, (l) => l.toUpperCase())}
                        </TableHead>
                      ))}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {data.map((item, idx) => (
                      <TableRow
                        key={item.id}
                        className={`hover:bg-[#82B4CC]/5 ${idx % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}
                      >
                        {columns.map((column) => (
                          <TableCell
                            key={`${item.id}-${column}`}
                            className="py-3"
                          >
                            {renderCellContent(item, column)}
                          </TableCell>
                        ))}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </div>

          {/* Table Info */}
          {!loading && data.length > 0 && (
            <div className="flex items-center justify-between text-sm text-gray-600 pt-2 border-t border-[#82B4CC]/20">
              <p>
                Showing{" "}
                <span className="font-medium text-[#1164A3]">
                  {data.length}
                </span>{" "}
                {selectedForm} form{" "}
                {data.length === 1 ? "submission" : "submissions"}
              </p>
              <p className="text-xs">
                Data fetched on {new Date().toLocaleDateString()} at{" "}
                {new Date().toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
