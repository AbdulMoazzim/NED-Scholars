"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FORM_CONFIGS } from "@/data/form-config";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowLeft, CheckCircle2, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { FieldConfig, FormConfig, FormSection, Resource } from "@/lib/types";
import {
  CreateGupShupRegistrationData,
  CreateInternshipApplication,
  CreateRegistrationData,
  createSeminarAttendeeData,
  CreateSeminarPresenterData,
  createWebinarAttendeeData,
  MentorForm,
  PartnerForm,
  ScholarshipForm,
  StudentForm,
  VolunteerForm,
} from "@/lib/form-types";
import { CreateScholarshipApplication } from "@/app/actions/scholarship-application";
import { toast } from "sonner";
import { CreateVolunteerApplication } from "@/app/actions/volunteers-application";
import { CreatePartnerApplication } from "@/app/actions/partners-application";
import { CreateStudentApplication } from "@/app/actions/students-application";
import { CreateMentorApplication } from "@/app/actions/mentors-application";
import { RegisterWebinarAttendee } from "@/app/actions/webinar-attendee";
import { RegisterSeminarAttendee } from "@/app/actions/seminar-attendee";
import { SendEmail } from "@/lib/email-sender";
import { SubmitPresenterApplication } from "@/app/actions/presenter-seminar-application";
import { RegisterForVisit } from "@/app/actions/industrial-visit";
import { useSession } from "@/lib/auth-client";
import { SubmitInternshipApplication } from "@/app/actions/internships";
import { RegisterForGupShupSession } from "@/app/actions/gupshup";

const FORM_SLUG_MAP: Record<string, keyof typeof FORM_CONFIGS> = {
  scholarship: "scholarshipForm",
  partner: "partnerForm",
  student: "studentForm",
  mentor: "mentorForm",
  volunteer: "volunteerForm",
  "seminar-attendee": "attendeeSeminarForm",
  "webinar-attendee": "attendeeWebinarForm",
  "seminar-presenter": "presenterSeminarForm",
  "industrial-visit-attendee": "industrialVisitForm",
  "internship-application": "internshipApplication",
  "gupshup-registration": "gupShupRegistration",
};

// ─── Regex constants ──────────────────────────────────────────────────────────
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[\d\s\-\+\(\)]+$/;
const CNIC_RE  = /^\d{5}-\d{7}-\d{1}$/;
const URL_RE   = /^https?:\/\/.+/;
const CGPA_RE  = /^\d+\.?\d*(\s*\/\s*\d+\.?\d*)?$/;

// ─── Central field validator ──────────────────────────────────────────────────
function validateField(fieldName: string, field: FieldConfig, value: string): string | null {
  // Required check
  if (field.required && (!value || value.trim() === "")) {
    return `${field.label} is required`;
  }

  // Nothing more to check when empty + optional
  if (!value || value.trim() === "") return null;

  if (field.type === "email" || fieldName.toLowerCase().includes("email")) {
    if (!EMAIL_RE.test(value)) return "Please enter a valid email address";
  }

  if (field.type === "tel" || fieldName.toLowerCase().includes("phone")) {
    if (!PHONE_RE.test(value))
      return "Only digits, spaces, +, -, and parentheses are allowed";
    if (value.replace(/\D/g, "").length < 7)
      return "Phone number must have at least 7 digits";
  }

  if (
    field.type === "url" ||
    fieldName.toLowerCase().includes("linkedin") ||
    fieldName.toLowerCase().includes("portfolio")
  ) {
    if (!URL_RE.test(value))
      return "Please enter a valid URL starting with http:// or https://";
  }

  // Date of birth — must be past, age 10–100
  if (field.type === "date" && (fieldName === "date_of_birth" || fieldName === "dob")) {
    const dob = new Date(value);
    const today = new Date();
    if (isNaN(dob.getTime())) return "Please enter a valid date";
    if (dob >= today) return "Date of birth must be in the past";
    const minAge = new Date(today.getFullYear() - 10, today.getMonth(), today.getDate());
    if (dob > minAge) return "You must be at least 10 years old";
    const maxAge = new Date(today.getFullYear() - 100, today.getMonth(), today.getDate());
    if (dob < maxAge) return "Please enter a realistic date of birth";
  }

  // Generic date with explicit maxDate config
  if (field.type === "date" && field.validation?.maxDate) {
    const d = new Date(value);
    if (isNaN(d.getTime())) return "Please enter a valid date";
    if (d > field.validation.maxDate) return "Date cannot be in the future";
  }

  // CNIC (Pakistani national ID)
  if (fieldName === "cnic" && value) {
    if (!CNIC_RE.test(value)) return "CNIC must be in format: 12345-1234567-1";
  }

  // CGPA — numeric, within scale
  if (fieldName === "cgpa" && value) {
    if (!CGPA_RE.test(value)) return "Please enter a valid CGPA (e.g. 3.5 or 3.5/4.0)";
    const num = parseFloat(value.split("/")[0]);
    const denom = value.includes("/") ? parseFloat(value.split("/")[1]) : 4.0;
    if (isNaN(num) || num < 0) return "CGPA cannot be negative";
    if (num > denom) return `CGPA (${num}) cannot exceed the scale (${denom})`;
  }

  // Expected graduation — free-text, must contain a present-or-future year
  if (fieldName === "expectedGraduation" && value) {
    const yearMatch = value.match(/\b(\d{4})\b/);
    if (!yearMatch) return "Please include a year (e.g. June 2025)";
    const year = parseInt(yearMatch[1]);
    const currentYear = new Date().getFullYear();
    if (year < currentYear) return "Expected graduation must be this year or in the future";
    if (year > currentYear + 10) return "Expected graduation year seems too far ahead";
  }

  // expected_graduation_year — numeric year field in scholarship form
  if (fieldName === "expected_graduation_year" && value) {
    const year = parseInt(value);
    const currentYear = new Date().getFullYear();
    if (isNaN(year)) return "Please enter a valid year";
    if (year < currentYear) return "Graduation year must be this year or later";
    if (year > currentYear + 10) return "Graduation year seems too far ahead";
  }

  // GPA or percentage (scholarship free-text field)
  if (fieldName === "gpa_or_percentage" && value) {
    const cleaned = value.replace(/\s*(gpa|%)/gi, "").trim();
    const num = parseFloat(cleaned);
    if (isNaN(num) || num < 0) return "Please enter a valid GPA or percentage (e.g. 3.8 GPA or 85%)";
    if (value.includes("%") && num > 100) return "Percentage cannot exceed 100";
    if (!value.includes("%") && num > 10)
      return "GPA looks too high — if this is a percentage, add a % sign";
  }

  // Emergency phone — same phone rules, re-applied by field name
  if (fieldName === "emergencyPhone") {
    if (!PHONE_RE.test(value))
      return "Only digits, spaces, +, -, and parentheses are allowed";
    if (value.replace(/\D/g, "").length < 7)
      return "Emergency phone must have at least 7 digits";
  }

  const v = field.validation;
  if (!v) return null;

  if (v.pattern && !v.pattern.test(value)) {
    return v.message || `${field.label} format is invalid`;
  }
  if (v.minLength && value.length < v.minLength) {
    return `Minimum ${v.minLength} characters required`;
  }
  if (v.maxLength && value.length > v.maxLength) {
    return `Maximum ${v.maxLength} characters allowed`;
  }
  if (field.type === "number") {
    const num = Number(value);
    if (isNaN(num)) return `${field.label} must be a number`;
    if (v.min !== undefined && num < v.min) return `Minimum value is ${v.min}`;
    if (v.max !== undefined && num > v.max) return `Maximum value is ${v.max}`;
  }

  return null;
}

export default function FormPage({ form }: { form: string }) {
  const router = useRouter();
  const query = useSearchParams();
  const [currentSection, setCurrentSection] = useState(0);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [files, setFiles] = useState<Resource[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const session = useSession();

  const formConfigKey = FORM_SLUG_MAP[form];
  const formConfig: FormConfig = FORM_CONFIGS[formConfigKey];

  if (!formConfig) {
    return (
      <div className="min-h-screen bg-gradient-to-r from-gray-50 to-[#82B4CC]/10 flex items-center justify-center p-4">
        <Card className="max-w-md w-full">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-red-600 text-2xl">✕</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Form Not Found</h2>
            <p className="text-gray-600 mb-6">The form you&apos;re looking for doesn&apos;t exist.</p>
            <Button onClick={() => router.push("/")} variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back Home
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const totalSections = formConfig.sections.length;
  const currentSectionData = formConfig.sections[currentSection];
  const progress = ((currentSection + 1) / totalSections) * 100;

  const handleInputChange = (fieldName: string, value: string) => {
    setFormData((prev) => ({ ...prev, [fieldName]: value }));
    if (errors[fieldName]) {
      setErrors((prev) => { const n = { ...prev }; delete n[fieldName]; return n; });
    }
  };

  const handleFileUpload = async (fieldName: string, file: File) => {
    handleInputChange(fieldName, URL.createObjectURL(file));
    setFiles((prev) => [
      ...prev,
      {
        id: (Date.now() + Math.random()).toString(),
        file,
        name: file.name,
        size: (file.size / 1024 / 1024).toFixed(2) + " MB",
      },
    ]);
  };

  const validateSection = (): boolean => {
    const newErrors: Record<string, string> = {};
    currentSectionData.fields.forEach((fieldName) => {
      const field = formConfig.fields[fieldName];
      if (!field || field.hidden) return;
      const value = (formData[fieldName] ?? "").toString();
      const error = validateField(fieldName, field, value);
      if (error) newErrors[fieldName] = error;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateSection() && currentSection < totalSections - 1) {
      setCurrentSection(currentSection + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePrevious = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleSubmit = async () => {
    if (!validateSection()) return;
    setIsSubmitting(true);
    let bool = false;
    try {
      switch (form) {
        case "partner":
          const partnerData: PartnerForm = {
            full_name: formData?.full_name ?? "", email: formData?.email ?? "",
            phone: formData?.phone ?? "", status: "pending",
            why_join: formData?.why_join ?? "", organization_name: formData?.organization_name ?? "",
            designation: formData?.designation ?? "", linkedin_profile: formData?.linkedin_profile ?? null,
            areas_of_expertise: formData?.areas_of_expertise ?? "", education_level: formData?.education_level ?? "",
          };
          const partnerResult = await CreatePartnerApplication({ formData: partnerData });
          bool = partnerResult.success;
          if (bool) await SendEmail(partnerData.full_name, partnerData.email);
          break;

        case "student":
          const studentData: StudentForm = {
            full_name: formData?.full_name ?? "", email: formData?.email ?? "",
            phone: formData?.phone ?? "", why_join: formData?.why_join ?? "",
            education_level: formData?.education_level ?? "", organization_name: formData?.organization_name ?? "",
            field_of_study: formData?.field_of_study ?? "", status: "pending",
          };
          const studentResult = await CreateStudentApplication({ formData: studentData });
          bool = studentResult.success;
          if (bool) await SendEmail(studentData.full_name, studentData.email);
          break;

        case "mentor":
          const mentorData: MentorForm = {
            full_name: formData?.full_name ?? "", email: formData?.email ?? "",
            phone: formData?.phone ?? "", why_join: formData?.why_join ?? "",
            designation: formData?.designation ?? "", linkedin_profile: formData?.linkedin_profile ?? null,
            field_of_study: formData?.field_of_study ?? "", status: "pending",
            experience_years: Number(formData?.experience_years ?? 0),
            areas_of_expertise: formData?.areas_of_expertise ?? "",
          };
          const mentorResult = await CreateMentorApplication({ formData: mentorData });
          bool = mentorResult.success;
          if (bool) await SendEmail(mentorData.full_name, mentorData.email);
          break;

        case "scholarship":
          const scholarshipData: ScholarshipForm = {
            full_name: formData?.full_name ?? "", email: formData?.email ?? "",
            phone: formData?.phone ?? "", date_of_birth: new Date(formData?.date_of_birth),
            gender: formData?.gender ?? "MALE", status: "pending",
            country: formData?.country ?? "", city: formData?.city ?? "",
            address: formData?.address ?? null,
            current_education_level: formData?.current_education_level ?? "",
            institution_name: formData?.institution_name ?? "",
            field_of_study: formData?.field_of_study ?? "",
            gpa_or_percentage: formData?.gpa_or_percentage ?? "",
            expected_graduation_year: formData?.expected_graduation_year ? Number(formData?.expected_graduation_year) : null,
            annual_family_income: formData?.annual_family_income ?? "",
            why_deserve_scholarship: formData?.why_deserve_scholarship ?? "",
            future_goals: formData?.future_goals ?? "",
          };
          const scholarshipResult = await CreateScholarshipApplication({ formData: scholarshipData, files });
          bool = scholarshipResult.success;
          if (bool) await SendEmail(scholarshipData.full_name, scholarshipData.email);
          break;

        case "volunteer":
          const volunteerData: VolunteerForm = {
            full_name: formData?.full_name ?? "", email: formData?.email ?? "",
            phone: formData?.phone ?? "", date_of_birth: new Date(formData?.date_of_birth),
            gender: formData?.gender, status: "pending",
            country: formData?.country ?? "", city: formData?.city ?? "",
            current_education_level: formData?.current_education_level ?? "",
            areas_of_interest: formData?.areas_of_interest, skills: formData?.skills ?? "",
          };
          const volunteerResult = await CreateVolunteerApplication({ formData: volunteerData });
          bool = volunteerResult.success;
          if (bool) await SendEmail(volunteerData.full_name, volunteerData.email);
          break;

        case "webinar-attendee":
          const webinarAttendeeData: createWebinarAttendeeData = {
            full_name: formData?.full_name ?? "", email: formData?.email ?? "",
            phone: formData?.phone ?? "",
            attendance_mode: (formData?.attendance_mode as "virtual" | "physical") ?? "virtual",
            webinarId: formData?.webinarId || null, registration_status: "pending",
          };
          const webinarAttendeeResult = await RegisterWebinarAttendee(webinarAttendeeData);
          bool = webinarAttendeeResult.success;
          if (bool) {
            await SendEmail(webinarAttendeeData.full_name, webinarAttendeeData.email);
            if (webinarAttendeeResult.message) toast(webinarAttendeeResult.message);
          }
          break;

        case "seminar-attendee":
          const seminarAttendeeData: createSeminarAttendeeData = {
            full_name: formData?.full_name ?? "", email: formData?.email ?? "",
            phone: formData?.phone ?? "",
            attendance_mode: (formData?.attendance_mode as "virtual" | "physical") ?? "physical",
            seminarId: query.get("seminarId") || null, registration_status: "pending",
          };
          const seminarAttendeeResult = await RegisterSeminarAttendee(seminarAttendeeData);
          bool = seminarAttendeeResult.success;
          if (bool) {
            await SendEmail(seminarAttendeeData.full_name, seminarAttendeeData.email);
            if (seminarAttendeeResult.message) toast(seminarAttendeeResult.message);
          }
          break;

        case "seminar-presenter":
          const presenterData: CreateSeminarPresenterData = {
            full_name: formData?.full_name ?? "", email: formData?.email ?? "",
            phone: formData?.phone ?? "", country: formData?.country ?? "",
            current_designation: formData?.current_designation ?? "",
            organization_name: formData?.organization_name ?? "",
            linkedin_profile: formData?.linkedin_profile || null,
            presentation_title: formData?.presentation_title ?? "",
            presentation_topic: formData?.presentation_topic ?? "",
            areas_of_expertise: formData?.areas_of_expertise ?? "",
            why_present: formData?.why_present ?? "",
            impact_statement: formData?.impact_statement || null,
            application_status: "pending", seminarId: formData?.seminarId || null,
          };
          const presenterResult = await SubmitPresenterApplication(presenterData);
          bool = presenterResult.success;
          if (bool) {
            await SendEmail(presenterData.full_name, presenterData.email);
            if (presenterResult.message) toast(presenterResult.message);
          }
          break;

        case "industrial-visit-attendee":
          const visitId = query.get("visitId");
          if (!visitId) { toast.error("Visit ID is required"); setIsSubmitting(false); return; }
          const visitRegistrationData: CreateRegistrationData = {
            userId: session.data?.user.id || "",
            fullName: formData?.fullName ?? "", email: formData?.email ?? "",
            phone: formData?.phone ?? "", cnic: formData?.cnic || undefined,
            university: formData?.university ?? "", department: formData?.department ?? "",
            semester: formData?.semester ?? "", rollNumber: formData?.rollNumber || undefined,
            emergencyContact: formData?.emergencyContact ?? "",
            emergencyPhone: formData?.emergencyPhone ?? "", visitId,
          };
          const visitRegistrationResult = await RegisterForVisit(visitRegistrationData);
          bool = visitRegistrationResult.success;
          if (bool) {
            await SendEmail(visitRegistrationData.fullName, visitRegistrationData.email);
          } else {
            toast.error(visitRegistrationResult.error || "Registration failed");
          }
          break;

        case "internship-application":
          const internshipId = query.get("internshipId");
          if (!internshipId) { toast.error("Internship ID is required"); setIsSubmitting(false); return; }
          const skillsArray = formData.skills
            ? formData.skills.split(",").map((s) => s.trim()).filter(Boolean)
            : [];
          const internshipApplicationData: CreateInternshipApplication = {
            fullName: formData.fullName ?? "", email: formData.email ?? "",
            phone: formData.phone ?? "", cnic: formData.cnic || null,
            university: formData.university ?? "", department: formData.department ?? "",
            semester: formData.semester ?? "", cgpa: formData.cgpa ?? "",
            expectedGraduation: formData.expectedGraduation ?? "",
            coverLetter: formData.coverLetter ?? "", linkedIn: formData.linkedIn || null,
            portfolio: formData.portfolio || null, skills: skillsArray,
            previousExperience: formData.previousExperience || null,
            applicationStatus: "submitted", notes: null, internshipId,
          };
          const resumeFile = files.find(
            (f) => f.name.toLowerCase().includes("resume") || f.name.toLowerCase().includes("cv")
          );
          if (!resumeFile) { toast.error("Resume is required"); setIsSubmitting(false); return; }
          const internshipResult = await SubmitInternshipApplication(internshipApplicationData, resumeFile);
          bool = internshipResult.success;
          if (bool) {
            await SendEmail(internshipApplicationData.fullName, internshipApplicationData.email);
            setIsSuccess(true);
          } else {
            toast.error(internshipResult.error || "Failed to submit application");
          }
          return;

        case "gupshup-registration":
          const sessionId = query.get("sessionId");
          if (!sessionId) { toast.error("Session ID is required"); setIsSubmitting(false); return; }
          const gupshupRegistrationData: CreateGupShupRegistrationData = {
            fullName: formData.fullName ?? "", email: formData.email ?? "",
            phone: formData.phone || null, organization: formData.organization || null,
            designation: formData.designation || null,
            whyAttending: formData.whyAttending || null,
            questionsForSpeaker: formData.questionsForSpeaker || null,
            sessionId, userId: session.data?.user.id || "",
          };
          const gupshupResult = await RegisterForGupShupSession(gupshupRegistrationData);
          bool = gupshupResult.success;
          if (bool) {
            await SendEmail(gupshupRegistrationData.fullName, gupshupRegistrationData.email);
            if (gupshupResult.data?.registrationStatus === "waitlist") {
              toast.info("You've been added to the waitlist. We'll notify you if a spot opens up.");
            } 
            setIsSuccess(true);
          } else {
            toast.error(gupshupResult.error || "Registration failed");
          }
          return;
      }

      if (bool) {
        toast("Application submitted successfully");
        setIsSuccess(true);
      } else {
        toast("Failed to submit application");
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      console.error("Form submission error:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderField = (fieldName: string) => {
    const field = formConfig.fields[fieldName];
    const value = (formData[fieldName] as string) || "";
    const error = errors[fieldName];

    if (field.hidden) return null;

    const today = new Date().toISOString().split("T")[0];
    const isDateOfBirth = fieldName === "date_of_birth" || fieldName === "dob";
    const maxDate = isDateOfBirth
      ? today
      : field.validation?.maxDate
      ? new Date(field.validation.maxDate).toISOString().split("T")[0]
      : undefined;

    const commonProps = {
      id: fieldName,
      value,
      className: cn(error && "border-red-500 focus-visible:ring-red-400"),
    };

    return (
      <div key={fieldName} className="space-y-2">
        <Label htmlFor={fieldName} className="text-gray-700 font-medium">
          {field.label}
          {field.required && <span className="text-red-500 ml-1">*</span>}
        </Label>

        {(field.type === "text" || field.type === "email" || field.type === "tel" || field.type === "url") && (
          <Input
            {...commonProps}
            type={field.type}
            placeholder={field.placeholder}
            onChange={(e) => handleInputChange(fieldName, e.target.value)}
          />
        )}

        {field.type === "number" && (
          <Input
            {...commonProps}
            type="number"
            placeholder={field.placeholder}
            min={field.validation?.min}
            max={field.validation?.max}
            onChange={(e) => handleInputChange(fieldName, e.target.value)}
          />
        )}

        {field.type === "date" && (
          <Input
            {...commonProps}
            type="date"
            max={maxDate}
            onChange={(e) => handleInputChange(fieldName, e.target.value)}
          />
        )}

        {field.type === "textarea" && (
          <Textarea
            {...commonProps}
            placeholder={field.placeholder}
            rows={field.rows || 4}
            onChange={(e) => handleInputChange(fieldName, e.target.value)}
          />
        )}

        {field.type === "select" && (
          <Select value={value} onValueChange={(val) => handleInputChange(fieldName, val)}>
            <SelectTrigger className={cn(error && "border-red-500")}>
              <SelectValue placeholder={field.placeholder} />
            </SelectTrigger>
            <SelectContent>
              {field.options?.map((option: { value: string; label: string }) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}

        {field.type === "radio" && (
          <RadioGroup value={value} onValueChange={(val) => handleInputChange(fieldName, val)}>
            {field.options?.map((option: { value: string; label: string }) => (
              <div key={option.value} className="flex items-center space-x-2">
                <RadioGroupItem value={option.value} id={`${fieldName}-${option.value}`} />
                <Label htmlFor={`${fieldName}-${option.value}`} className="font-normal">
                  {option.label}
                </Label>
              </div>
            ))}
          </RadioGroup>
        )}

        {field.type === "file" && (
          <Input
            type="file"
            accept={field.accept}
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) handleFileUpload(fieldName, file);
            }}
            className={cn(error && "border-red-500")}
          />
        )}

        {field.helperText && !error && (
          <p className="text-sm text-gray-500">{field.helperText}</p>
        )}

        {error && (
          <p className="text-sm text-red-500 flex items-center gap-1">
            <span className="text-xs">⚠</span> {error}
          </p>
        )}
      </div>
    );
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-r from-[#82B4CC]/10 to-[#B0A3B3]/10 flex items-center justify-center p-4">
        <Card className="max-w-md w-full">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-[#68B9C4]/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-10 h-10 text-[#68B9C4]" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Success!</h2>
            <p className="text-gray-600 mb-6">{formConfig.successMessage}</p>
            <Button
              onClick={() => router.push("/")}
              className="w-full bg-gradient-to-r from-[#1164A3] to-[#68B9C4] hover:from-[#68B9C4] hover:to-[#82B4CC]"
            >
              Return to Home
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  // ── Main render ───────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-50 to-[#82B4CC]/10 py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <Badge className="mb-4 bg-[#1164A3] text-white">
            {formConfigKey?.replace(/Form$/, "").toUpperCase()}
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">{formConfig.title}</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{formConfig.description}</p>
        </div>

        {totalSections > 1 && (
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-600">
                Step {currentSection + 1} of {totalSections}
              </span>
              <span className="text-sm font-medium text-gray-600">{Math.round(progress)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-[#1164A3] to-[#68B9C4] h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}

        <Card className="shadow-xl p-0">
          <CardHeader className="bg-gradient-to-r from-[#1164A3] to-[#68B9C4] text-white rounded-t-lg py-6">
            <CardTitle className="text-2xl">{currentSectionData.heading}</CardTitle>
            <p className="text-white/90 text-sm">{currentSectionData.description}</p>
          </CardHeader>

          <CardContent className="p-8">
            <div className="space-y-6">
              {currentSectionData.fields.map((fieldName) => renderField(fieldName))}
            </div>

            <div className="flex justify-between mt-8 pt-6 border-t">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentSection === 0}
                className="min-w-[120px] border-[#1164A3] text-[#1164A3] hover:bg-[#1164A3] hover:text-white"
              >
                Previous
              </Button>

              {currentSection < totalSections - 1 ? (
                <Button
                  onClick={handleNext}
                  className="min-w-[120px] bg-gradient-to-r from-[#1164A3] to-[#68B9C4] hover:from-[#68B9C4] hover:to-[#82B4CC]"
                >
                  Next
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="min-w-[120px] bg-gradient-to-r from-[#1164A3] to-[#68B9C4] hover:from-[#68B9C4] hover:to-[#82B4CC]"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    formConfig.submitButtonText
                  )}
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        {totalSections > 1 && (
          <div className="flex justify-center space-x-2 mt-6">
            {formConfig.sections.map((_: FormSection, index: number) => (
              <button
                key={index}
                onClick={() => setCurrentSection(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all",
                  index === currentSection
                    ? "bg-[#1164A3] w-8"
                    : index < currentSection
                    ? "bg-[#68B9C4]"
                    : "bg-gray-300"
                )}
                aria-label={`Go to section ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}