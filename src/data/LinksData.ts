import { MenuItem } from "@/lib/types";

export const menuItems: MenuItem[] = [
    {
      title: 'About Us',
      href: '/about',
      subItems: [
        { title: 'About Ned Scholars', href: '/about' },
        { title: 'Our Team', href: '/about/team' },
        { title: 'Our Journey', href: '/about/journey' },
        { title: 'Causes To Support', href: '/about/causes-to-support' },
        { title: 'Transparency', href: '/about/transparency' },
        { title: 'Remembrance', href: '/about/remembrance' },
        { title: 'Acknowledgement', href: '/about/acknowledgement' }
      ]
    },
    {
      title: 'Services',
      href: '/services',
      subItems: [
        {
          title: 'Scholarship',
          href: '/services/scholarships',
        },
        { title: 'Laptop Scholarship', href: '/services/laptop-scholarship' },
        { title: 'Mentorship', href: '/services/mentorship' },
        { title: 'Dare 2 Design', href: '/services/dare-to-design' },
        { title: 'Vocational Training', href: '/services/vocational-training' },
        { title: 'Save a Child', href: '/services/save-a-child' },
        { title: 'Coaching Center', href: '/services/coaching-center' }
      ]
    },
    {
      title: 'Programs',
      href: '/programs',
      subItems: [
        { title: 'Seminar', href: '/programs/seminars' },
        { title: 'Webinar', href: '/programs/webinars' },
        { title: 'Internship', href: '/programs/internships' }
      ]
    },
    {
      title: 'Scholars',
      href: '/scholars',
      subItems: [
        { title: 'Volunteers', href: '/scholars/volunteers' },
        { title: 'Success Stories', href: '/scholars/success-stories' }
      ]
    },
    {
      title: 'Events',
      href: '/events',
      subItems: [
        { title: 'Gupshup', href: '/events/gupshup' },
        { title: 'Industrial Visit', href: '/events/industrial-visits' },
        { title: 'E-learning', href: '/events/e-learning' }
      ]
    },
    {
      title: 'Donate Now',
      href: '/donation',
    }
  ];

export const ScholarshipData = [
    {
      title: "Eligibility Criteria",
      href: "/services/scholarships/eligible-criteria",
    },
    {
      title: "Application and Selection Process",
      href: "/services/scholarships/application-selection-process",
    },
    { title: "Apply for Scholarship", href: "/register/scholarship" },
  ];