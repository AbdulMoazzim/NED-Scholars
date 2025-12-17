import { Dispatch, ReactElement, ReactNode, SetStateAction } from "react";

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

export interface SuccessStory {
  slug?: string;
  name: string;
  heading: string;
  image: React.ReactNode;
  content: string;
}

export interface cardItems {
  icon: ReactNode;
  title: string;
  description: string;
  color?: string;
}

export interface Stats {
  number: string;
  label: string;
  color?: string;
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
  name: string;
  position: string;
  email: string;
  phone?: string;
  bio: string;
  expertise?: string;
  achievements?: string;
}

export interface SuccessStoryData {
  studentName: string;
  year: number;
  currentPosition: string;
  company: string;
  story: string;
  impact: string;
  advice?: string;
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

export type ContentData =
  | TeamMemberData
  | SuccessStoryData
  | BlogData
  | NewsData;

export interface ContentFormProps {
  activeTab: string;
  setFormData: Dispatch<SetStateAction<Partial<ContentData>>>;
  formData: Partial<ContentData>;
  config: SideBarItem;
  errors: Record<string, string>;
  setErrors: Dispatch<SetStateAction<Record<string,string>>>;
}

export interface imageData {
  url: string;
  alt: string;
  blogPostId: null | string;
  successStoryId: null | string;
  teamMemberId: null | string;
  newsUpdateId: null | string;
}
export interface videoData {
  url: string;
  title: string;
  blogPostId: null | string;
  successStoryId: null | string;
  teamMemberId: null | string;
  newsUpdateId: null | string;
}

