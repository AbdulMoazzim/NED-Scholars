import { SideBarItem, SidebarNavItem } from "@/lib/types";
import { 
  Users, 
  BookOpen, 
  Award, 
  FileText,
  Video
} from 'lucide-react';

export const sidebarItems: SidebarNavItem[] = [
    { id: 'team-members', label: 'Team Members', icon: <Users className="w-5 h-5" />, color: 'from-[#1164A3] to-[#68B9C4]' },
    { id: 'remembrance', label: 'Remembrance', icon: <Users className="w-5 h-5" />, color: 'from-[#68B9C4] to-[#82B4CC]' },
    { id: 'success-stories', label: 'Success Stories', icon: <Award className="w-5 h-5" />, color: 'from-[#82B4CC] to-[#B0A3B3]' },
    { id: 'blogs', label: 'Blogs', icon: <BookOpen className="w-5 h-5" />, color: 'from-[#1164A3] to-[#82B4CC]' },
    { id: 'news', label: 'News & Updates', icon: <FileText className="w-5 h-5" />, color: 'from-[#68B9C4] to-[#82B4CC]' },
    { id: 'transparency', label: 'Transparency', icon: <FileText className="w-5 h-5" />, color: 'from-[#1164A3] to-[#68B9C4]' },
    { id: 'form-responses', label: 'Form Responses', icon: <FileText className="w-5 h-5" />, color: 'from-[#82B4CC] to-[#B0A3B3]' },
    { id: 'sessions', label: 'Sessions', icon: <Video className="w-5 h-5" />, color: 'from-[#68B9C4] to-[#82B4CC]' },
];

export const getFormConfig = (type: string) => {
    const configs: Record<string, SideBarItem> = {
      'team-members': {
        title: 'Create Team Member Profile',
        fields: [
          { name: 'name', label: 'Full Name', type: 'text', required: true },
          { name: 'position', label: 'Position/Role', type: 'text', required: true },
          { name: 'email', label: 'Email Address', type: 'email', required: true },
          { name: 'phone', label: 'Phone Number', type: 'tel', required: false },
          { name: 'bio', label: 'Biography', type: 'textarea', required: true, rows: 4 },
          { name: 'expertise', label: 'Areas of Expertise', type: 'textarea', required: false, rows: 2 },
          { name: 'achievements', label: 'Key Achievements', type: 'textarea', required: false, rows: 3 },
        ]
      },
      'success-stories': {
        title: 'Create Success Story',
        fields: [
          { name: 'studentName', label: 'Student Name', type: 'text', required: true },
          { name: 'year', label: 'Graduation Year', type: 'number', required: true },
          { name: 'currentPosition', label: 'Current Position', type: 'text', required: false },
          { name: 'company', label: 'Company/Organization', type: 'text', required: false },
          { name: 'story', label: 'Success Story', type: 'textarea', required: true, rows: 6 },
          { name: 'impact', label: 'Scholarship Impact', type: 'textarea', required: false, rows: 4 },
          { name: 'advice', label: 'Advice for Future Students', type: 'textarea', required: false, rows: 3 },
        ]
      },
      'blogs': {
        title: 'Create Blog Post',
        fields: [
          { name: 'title', label: 'Blog Title', type: 'text', required: true },
          { name: 'excerpt', label: 'Blog Excerpt', type: 'textarea', required: true, rows: 3 },
          { name: 'content', label: 'Blog Content', type: 'textarea', required: true, rows: 8 },
          { name: 'author', label: 'Author Name', type: 'text', required: true },
          { name: 'category', label: 'Category', type: 'select', required: true, options: ["TECHNOLOGY"
    , "EDUCATION"
    , "RESEARCH"
    , "INNOVATION"
    , "STUDENT_LIFE"] },
        ]
      },
      'news': {
        title: 'Create News Update',
        fields: [
          { name: 'headline', label: 'News Headline', type: 'text', required: true },
          { name: 'summary', label: 'News Summary', type: 'textarea', required: true, rows: 3 },
          { name: 'content', label: 'Full Article', type: 'textarea', required: true, rows: 6 },
          { name: 'location', label: 'Location', type: 'text', required: false },
          { name: 'eventDate', label: 'Event Date', type: 'datetime-local', required: false },
          { name: 'priority', label: 'Priority Level', type: 'select', required: true, options: ["LOW" , "MEDIUM" , "HIGH" , "URGENT"] },
          { name: 'category', label: 'News Category', type: 'select', required: true, options: ["ANNOUNCEMENT"
    , "EVENT"
    , "ACHIEVEMENT"
    , "RESEARCH"
    , "PARTNERSHIP"] },
        ]
      },
      'remembrance': {
        title: 'Create Remembrance',
        fields: [
          { name: 'name', label: 'Name', type: 'text', required: true},
          { name: 'description', label: 'Summary', type: 'textarea', required: true, rows: 15 },
        ]
      },
      'transparency': {
        title: 'Upload transparency files',
        fields: [
          { name: 'year', label: 'Year', type: 'text', required: true},
        ]
      },
    };
    return configs[type as keyof typeof configs] || configs['team-members'];
  };