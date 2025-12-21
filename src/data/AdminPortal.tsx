import { SideBarItem, SidebarNavItem } from "@/lib/types";
import { 
  Users, 
  BookOpen, 
  Award, 
  FileText
} from 'lucide-react';

export const sidebarItems: SidebarNavItem[] = [
    { id: 'team-members', label: 'Team Members', icon: <Users className="w-5 h-5" />, color: 'from-blue-500 to-blue-600' },
    { id: 'success-stories', label: 'Success Stories', icon: <Award className="w-5 h-5" />, color: 'from-green-500 to-green-600' },
    { id: 'blogs', label: 'Blogs', icon: <BookOpen className="w-5 h-5" />, color: 'from-purple-500 to-purple-600' },
    { id: 'news', label: 'News & Updates', icon: <FileText className="w-5 h-5" />, color: 'from-orange-500 to-orange-600' },
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
      }
    };
    return configs[type as keyof typeof configs] || configs['team-members'];
  };