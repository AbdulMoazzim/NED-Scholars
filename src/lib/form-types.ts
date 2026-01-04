import { fileData, imageData, videoData } from "./types";
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
  resources: fileData[];
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

export type CreateSeminarData = Omit<
  Seminar,
  | "id"
  | "createdAt"
  | "updatedAt"
  | "attendees"
  | "presenters"
  | "images"
  | "videos"
>;
export type UpdateSeminarData = Partial<CreateSeminarData>;

export type CreateWebinarData = Omit<
  Webinar,
  "id" | "createdAt" | "updatedAt" | "attendees" | "images" | "videos"
>;
export type UpdateWebinarData = Partial<CreateWebinarData>;

export type createSeminarAttendeeData = Omit<
  AttendeeSeminar,
  "id" | "createdAt" | "updatedAt"
>;
export type updateSeminarAttendeeData = Partial<createSeminarAttendeeData>;

export type createWebinarAttendeeData = Omit<
  AttendeeWebinar,
  "id" | "createdAt" | "updatedAt"
>;
export type updateWebinarAttendeeData = Partial<createWebinarAttendeeData>;

export type CreateSeminarPresenterData = Omit<
  PresenterSeminar,
  "id" | "createdAt" | "updatedAt"
>;
export type UpdateSeminarPresenterData = Partial<CreateSeminarPresenterData>;

export interface Transparency {
  year: string;
}

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
  status: string;
  attendees: AttendeeWebinar[];
  createdAt: Date;
  updatedAt: Date;
  images: imageData[];
  videos: videoData[];
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
  status: string;
  attendees: AttendeeSeminar[];
  presenters: PresenterSeminar[];
  createdAt: Date;
  updatedAt: Date;
  images: imageData[];
  videos: videoData[];
}

export interface AttendeeWebinar {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  attendance_mode: string;
  registration_status: string;
  webinarId: string | null;
  createdAt: Date;
}

export interface AttendeeSeminar {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  seminarId: string | null;
  attendance_mode: string;
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

export interface IndustrialVisit {
  registrationDeadline: Date | null;
  id: string;
  title: string;
  company: string;
  industry: string;
  location: string;
  description: string;
  objectives: string;
  agenda: string | null;
  visitDate: Date;
  startTime: Date;
  endTime: Date | null;
  duration: string | null;
  maxParticipants: number;
  currentParticipants: number;
  organizerName: string | null;
  organizerContact: string | null;
  companyContact: string | null;
  companyEmail: string | null;
  safetyGuidelines: string | null;
  transportProvided: boolean;
  meetingPoint: string | null;
  status: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
  videos: videoData[];
  images: imageData[];
  _count?: {
    registrations: number;
  };
}

export interface VisitDetails extends IndustrialVisit {
  registrations: Registration[];
}

export interface Registration {
  id: string;
  userId: string;
  fullName: string;
  email: string;
  phone: string;
  cnic: string | null;
  university: string;
  department: string;
  semester: string;
  rollNumber: string | null;
  emergencyContact: string;
  emergencyPhone: string;
  visitId: string;
  registrationStatus: string;
  rating: number | null;
  feedback: string | null;
  feedbackDate?: Date | null;
  createdAt: Date;
  updatedAt: Date;
  visit?: IndustrialVisit;
}

export interface CreateRegistrationData {
  userId: string;
  fullName: string;
  email: string;
  phone: string;
  cnic?: string;
  university: string;
  department: string;
  semester: string;
  rollNumber?: string;
  emergencyContact: string;
  emergencyPhone: string;
  visitId: string;
}

export type CreateVisitData = Omit<
  IndustrialVisit,
  "createdAt" | "updatedAt" | "id" | "currentParticipants" | "images" | "videos"
>;
export type UpdateVisitData = Partial<CreateVisitData>;

export interface Internship {
  id: string;
  title: string;
  company: string;
  location: string;
  locationType: string;
  description: string;
  responsibilities: string;
  requirements: string;
  category: string;
  duration: string;
  startDate: Date | null;
  endDate: Date | null;
  applicationDeadline: Date | null;
  applicationUrl: string | null;
  contactEmail: string | null;
  contactPhone: string | null;
  isPaid: boolean;
  stipend: string | null;
  skills: string[];
  benefits: string | null;
  numberOfPositions: number | null;
  status: string;
  featured: boolean;
  slug: string;
  applications: InternshipApplication[] | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface InternshipApplication {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  cnic: string | null;
  university: string;
  department: string;
  semester: string;
  cgpa: string;
  expectedGraduation: string;
  coverLetter: string;
  internshipId: string;
  linkedIn: string | null;
  portfolio: string | null;
  skills: string[];
  previousExperience: string | null;
  applicationStatus: string;
  notes: string | null;
  internship: {
    title: string;
    company: string;
  };
  resume: fileData;
  createdAt: Date;
  updatedAt: Date;
}

export type CreateInternshipData = Omit<
  Internship,
  "createdAt" | "updatedAt" | "id" | "applications"
>;
export interface CreateInternshipApplication extends Omit<
  InternshipApplication,
  "createdAt" | "updatedAt" | "id" | "internship" | "resume"
> {
  internshipId: string;
}
export type UpdateInternshipData = Partial<CreateInternshipData>;

export interface GupShupSession {
  id: string;
  title: string;
  slug: string;
  description: string;
  speakerName: string;
  speakerBio: string | null;
  speakerEmail: string | null;
  category: string;
  date: Date;
  startTime: string;
  duration: string;
  platform: string | null;
  meetingLink: string | null;
  mainTopic: string;
  discussionPoints: string | null;
  expectedOutcome: string | null;
  thumbnailImage: imageData | null;
  youtubeUrl: string | null;
  maxAttendees: number | null;
  requiresRegistration: boolean;
  registrationDeadline: Date | null;
  status: string;
  featured: boolean;
  _count: { registrations: number } | null;
}
export interface CreateGupShupSessionData extends Omit<
  GupShupSession,
  "thumbnailImage" | "id" | "meetingPassword" | "_count"
> {
  isPublic?: boolean;
}
export type UpdateGupShupSessionData = Partial<CreateGupShupSessionData>;
export interface GupShupRegistration {
  id: string;
  fullName: string;
  email: string;
  phone: string | null;
  organization: string | null;
  designation: string | null;
  whyAttending: string | null;
  questionsForSpeaker?: string | null;
  registrationStatus: string;
  attended: boolean | null;
  rating: number | null;
  feedback: string | null;
  feedbackDate: Date | null;
  userId: string;
  session: {
    id: string;
    title: string;
    date: Date;
    speakerName: string;
    category: string;
  };
  createdAt: Date;
}

export interface CreateGupShupRegistrationData {
  fullName: string;
  email: string;
  phone: string | null;
  organization: string | null;
  designation: string | null;
  whyAttending: string | null;
  questionsForSpeaker: string | null;
  sessionId: string;
  userId: string;
}

export interface Course {
  id: string;
  title: string;
  instructor: string;
  instructorTitle?: string;
  instructorBio?: string;
  overview: string;
  description: string;
  learningOutcomes: string;
  category: string;
  level: string;
  thumbnailUrl?: string;
  youtubeUrl?: string;
  videoUrl?: string;
  duration?: string;
  targetAudience: string;
  prerequisites?: string;
  syllabus?: string;
  modules?: number;
  lessons?: number;
  isFree: boolean;
  price?: number;
  currency?: string;
  status: string;
  featured: boolean;
  rating?: number;
  enrollmentCount: number;
  slug: string;
  tags: string[];
  publishedDate: Date;
  createdAt: Date;
  updatedAt: Date;
  _count?: {
    enrollments: number;
  };
}

export interface CourseEnrollment {
  id: string;
  userId: string;
  fullName: string;
  email: string;
  phone?: string;
  currentStatus: string;
  organization?: string;
  department?: string;
  courseId: string;
  status: string;
  enrollmentDate: Date;
  rating?: number;
  review?: string;
  reviewDate?: Date;
  createdAt: Date;
  updatedAt: Date;
  course: {
    id: string;
    title: string;
    instructor: string;
    category: string;
    slug: string;
  };
}

export interface CourseFormData {
  title: string;
  instructor: string;
  instructorTitle: string;
  instructorBio: string;
  overview: string;
  description: string;
  learningOutcomes: string;
  category: string;
  level: string;
  thumbnailUrl: string | null;
  youtubeUrl: string | null;
  videoUrl: string | null;
  duration: string;
  targetAudience: string;
  prerequisites: string;
  syllabus: string;
  modules: string;
  lessons: string;
  isFree: boolean;
  price: string;
  currency: string;
  status: string;
  featured: boolean;
  slug: string;
  tags: string;
}