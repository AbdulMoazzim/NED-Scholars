import { ReactElement, ReactNode } from "react";

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
  image: React.ReactNode; // This can be a URL string or a React component
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
  type: 'text' | 'email' | 'tel' | 'number' | 'date' | 'datetime-local' | 'textarea' | 'select';
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
  category: 'Technology' | 'Education' | 'Research' | 'Innovation' | 'Student Life';
}

export interface NewsData {
  headline: string;
  summary: string;
  content: string;
  location?: string;
  eventDate?: string;
  priority: 'Low' | 'Medium' | 'High' | 'Urgent';
  category: 'Announcement' | 'Event' | 'Achievement' | 'Research' | 'Partnership';
}

export type ContentData = TeamMemberData | SuccessStoryData | BlogData | NewsData;

export interface ContentFormProps {
  config: SideBarItem;
  previewMode: boolean;
  setPreviewMode: (mode: boolean) => void;
}

// Form submission interface
export interface FormSubmissionData {
  formData: Record<string, any>;
  images: Resource[];
  videos: Resource[];
  youtubeUrls: YouTubeUrl[];
  type: string;
}

// API Response interfaces
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Database entity interfaces
export interface BaseEntity {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  isActive: boolean;
}

export interface TeamMember extends BaseEntity {
  name: string;
  position: string;
  department: string;
  email: string;
  phone?: string;
  bio: string;
  expertise?: string;
  achievements?: string;
  profileImage?: string;
  images: string[];
  videos: string[];
  youtubeUrls: YouTubeUrl[];
}

export interface SuccessStory extends BaseEntity {
  studentName: string;
  program: string;
  year: number;
  currentPosition: string;
  company: string;
  story: string;
  impact: string;
  advice?: string;
  featured: boolean;
  studentImage?: string;
  images: string[];
  videos: string[];
  youtubeUrls: YouTubeUrl[];
}

export interface Blog extends BaseEntity {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  tags: string[];
  publishDate: Date;
  published: boolean;
  views: number;
  featuredImage?: string;
  images: string[];
  videos: string[];
  youtubeUrls: YouTubeUrl[];
}

export interface News extends BaseEntity {
  headline: string;
  summary: string;
  content: string;
  location?: string;
  eventDate?: Date;
  priority: string;
  category: string;
  published: boolean;
  views: number;
  featuredImage?: string;
  images: string[];
  videos: string[];
  youtubeUrls: YouTubeUrl[];
}

// File upload interfaces
export interface FileUploadConfig {
  maxSize: number; // in bytes
  allowedTypes: string[];
  maxFiles: number;
}

export interface UploadedFile {
  id: string;
  originalName: string;
  filename: string;
  path: string;
  mimetype: string;
  size: number;
  url: string;
}

// // Form validation types
// export interface ValidationError {
//   field: string;
//   message: string;
// }

// export interface FormValidationResult {
//   isValid: boolean;
//   errors: ValidationError[];
// }

// // Media management types
// export interface MediaLibrary {
//   id: string;
//   type: 'image' | 'video';
//   originalName: string;
//   filename: string;
//   path: string;
//   url: string;
//   size: number;
//   mimetype: string;
//   alt?: string;
//   caption?: string;
//   uploadedBy: string;
//   uploadedAt: Date;
//   usageCount: number;
// }
