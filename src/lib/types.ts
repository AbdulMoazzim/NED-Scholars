import { GetAllSuccessStories } from "@/app/actions/success-stories";
import { Dispatch, ReactElement, SetStateAction } from "react";
import { FORM_CONFIGS } from "../data/form-config";
import { GetAllMembers } from "@/app/actions/team-member";
import { GetAllRemembrances } from "@/app/actions/remembrance";
import { Transparency } from "./form-types";

// Define types for menu items
export interface SubSubLinkItem {
  href: string;
  title: string;
}

export interface SubLinkItem {
  href: string;
  title: string;
  subItems?: SubSubLinkItem[];
}

export interface MenuItem {
  title: string;
  href: string;
  subItems?: SubLinkItem[];
}

export interface cardItems {
  title: string;
  description: string;
}

export interface Stats {
  number: string;
  label: string;
}

export interface Resource {
  id: string;
  file: File;
  name: string;
  size?: string;
}

export interface YouTubeUrl {
  url: string;
  title: string;
}

export interface FormField {
  name: string;
  label: string;
  type:
    | "text"
    | "email"
    | "tel"
    | "number"
    | "date"
    | "datetime-local"
    | "textarea"
    | "select";
  required: boolean;
  rows?: number; // for textarea
  options?: string[]; // for select
}

export interface SideBarItem {
  title: string;
  fields: FormField[];
}

export interface SidebarNavItem {
  id: string;
  label: string;
  icon: ReactElement;
  color: string;
}

export interface TeamMemberData {
  slug: string;
  name: string;
  position: string;
  email: string;
  phone: string | null;
  bio: string;
  expertise: string | null;
  achievements: string | null;
}

export interface SuccessStoryData {
  slug: string;
  studentName: string;
  year: number;
  currentPosition: string;
  company: string;
  story: string;
  impact: string | null;
  advice: string | null;
}

export interface BlogData {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  category:
    | "TECHNOLOGY"
    | "EDUCATION"
    | "RESEARCH"
    | "INNOVATION"
    | "STUDENT_LIFE";
}

export interface NewsData {
  slug: string;
  headline: string;
  summary: string;
  content: string;
  location?: string;
  eventDate?: string;
  priority: "LOW" | "MEDIUM" | "HIGH" | "URGENT";
  category:
    | "ANNOUNCEMENT"
    | "EVENT"
    | "ACHIEVEMENT"
    | "RESEARCH"
    | "PARTNERSHIP";
}
export interface Remembrance {
  description: string;
  name: string;
}

export type ContentData =
  | TeamMemberData
  | SuccessStoryData
  | BlogData
  | NewsData
  | Remembrance
  | Transparency;

export interface ContentFormProps {
  activeTab: string;
  setFormData: Dispatch<SetStateAction<Partial<ContentData>>>;
  formData: Partial<ContentData>;
  config: SideBarItem;
  errors: Record<string, string>;
  setErrors: Dispatch<SetStateAction<Record<string, string>>>;
}

interface resourceData {
  url: string;
  blogPostId: null | string;
  successStoryId: null | string;
  teamMemberId: null | string;
  newsUpdateId: null | string;
 
}
export interface imageData extends resourceData {
   seminarId: null | string;
  webinarId: null | string;
  remembranceId: null | string;
  public_id: string;
  alt: string | null; // Changed from string to string | null
}

export interface videoData extends resourceData {
   seminarId: null | string;
  webinarId: null | string;
  public_id: string;
  title: string | null;
}
export interface urlData extends resourceData {
  title: string | null;
}
export interface fileData {
  public_id: string;
  url: string;
  scholarshipResourceId: null | string;
  transparencyResourceId: null | string;
}

export type SuccessStoriesData = Awaited<
  ReturnType<typeof GetAllSuccessStories>
>;
export type TeamMembersData = Awaited<ReturnType<typeof GetAllMembers>>;
export type RemembranceData = Awaited<ReturnType<typeof GetAllRemembrances>>;

// Type definitions for TypeScript
export interface FieldConfig {
  type: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  validation?: {
    minLength?: number;
    maxLength?: number;
    pattern?: RegExp;
    min?: number;
    max?: number;
    maxDate?: Date;
  };
  options?: Array<{ value: string; label: string }>;
  rows?: number;
  accept?: string;
  helperText?: string;
  defaultValue?: string;
  hidden?: boolean;
}

export interface FormSection {
  heading: string;
  description: string;
  fields: string[];
}

export interface FormConfig {
  title: string;
  description: string;
  submitButtonText: string;
  successMessage: string;
  fields: Record<string, FieldConfig>;
  sections: FormSection[];
}

export type FormConfigs = typeof FORM_CONFIGS;