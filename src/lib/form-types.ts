import { fileData } from "./types";
// ============================================
// FORM MODELS
// ============================================

export interface ScholarshipForm {
  full_name: string;
  email: string;
  phone: string;
  date_of_birth: Date;
  gender: string;
  status: string;
  country: string;
  city: string;
  address: string | null;
  current_education_level: string;
  institution_name: string;
  field_of_study: string;
  gpa_or_percentage: string;
  expected_graduation_year: number | null;
  annual_family_income: string;
  why_deserve_scholarship: string;
  future_goals: string;
}

export interface ScholarshipFormResponse extends ScholarshipForm {
  createdAt: Date;
  id: string;
  resources: fileData[]
}
export interface PartnerFormResponse extends PartnerForm {
  createdAt: Date;
  id: string;
}
export interface MentorFormResponse extends MentorForm {
  createdAt: Date;
  id: string;
}
export interface StudentFormResponse extends StudentForm {
  createdAt: Date;
  id: string;
}
export interface VolunteerFormResponse extends VolunteerForm {
  createdAt: Date;
  id: string;
}

export interface PartnerForm {
  full_name: string;
  email: string;
  phone: string;
  status: string;
  why_join: string;
  organization_name: string;
  designation: string;
  linkedin_profile: string | null;
  areas_of_expertise: string;
  education_level: string;
}

export interface StudentForm {
  full_name: string;
  email: string;
  phone: string;
  why_join: string;
  education_level: string;
  field_of_study: string;
  organization_name: string;
  status: string;
}

export interface MentorForm {
  full_name: string;
  email: string;
  phone: string;
  why_join: string;
  designation: string;
  linkedin_profile: string | null;
  field_of_study: string;
  status: string;
  experience_years: number;
  areas_of_expertise: string;
}

export interface VolunteerForm {
  full_name: string;
  email: string;
  phone: string;
  date_of_birth: Date;
  gender: string;
  status: string;
  country: string;
  city: string;
  current_education_level: string;
  areas_of_interest: string;
  skills: string;
}

// ============================================
// EVENT MODELS
// ============================================



export type CreateSeminarData = Omit<Seminar, "id" | "createdAt" | "updatedAt" | "attendees" | "presenters">
export type UpdateSeminarData = Partial<CreateSeminarData>


export type CreateWebinarData = Omit<Webinar, "id" | "createdAt" | "updatedAt" | "attendees">
export type UpdateWebinarData = Partial<CreateWebinarData>


export type createSeminarAttendeeData = Omit<AttendeeSeminar, "id" | "createdAt" | "updatedAt">
export type updateSeminarAttendeeData = Partial<createSeminarAttendeeData>


export type createWebinarAttendeeData = Omit<AttendeeWebinar, "id" | "createdAt" | "updatedAt">
export type updateWebinarAttendeeData = Partial<createWebinarAttendeeData>

export type CreateSeminarPresenterData = Omit<PresenterSeminar, "id" | "createdAt" | "updatedAt">
export type UpdateSeminarPresenterData = Partial<CreateSeminarPresenterData>

export interface Transparency {
    year: string;
}

// Types based on your Prisma schema
export type EventStatus = "upcoming" | "ongoing" | "completed" | "cancelled";
export type AttendanceMode = "virtual" | "physical";

export interface Webinar {
  id: string;
  title: string;
  description: string;
  date: Date;
  endDate: Date | null;
  meetingLink: string | null;
  meetingPassword: string | null;
  platform: string | null;
  maxParticipants: number | null;
  status: EventStatus;
  attendees: AttendeeWebinar[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Seminar {
  id: string;
  title: string;
  description: string;
  date: Date;
  endDate: Date | null;
  location: string;
  maxCapacity: number | null;
  virtualCapacity: number | null;
  physicalCapacity: number | null;
  status: EventStatus;
  attendees: AttendeeSeminar[];
  presenters: PresenterSeminar[];
  createdAt: Date;
  updatedAt: Date;
}

export interface AttendeeWebinar {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  attendance_mode: AttendanceMode;
  registration_status: string;
  webinarId: string  | null;
  createdAt: Date;
}

export interface AttendeeSeminar {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  seminarId: string | null;
  attendance_mode: AttendanceMode;
  registration_status: string;
  createdAt: Date;
}

export interface PresenterSeminar {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  country: string;
  current_designation: string;
  organization_name: string;
  linkedin_profile: string | null;
  presentation_title: string;
  presentation_topic: string;
  areas_of_expertise: string;
  why_present: string;
  impact_statement: string | null;
  application_status: string;
  seminarId: string | null;
  createdAt: Date;
}

