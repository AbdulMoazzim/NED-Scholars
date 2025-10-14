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
        { title: 'Remembrance', href: '/about/remembrance' }
      ]
    },
    {
      title: 'Services',
      href: '/services',
      subItems: [
        {
          title: 'Scholarship',
          href: '/services/scholarship',
        },
        { title: 'Laptop Scholarship', href: '/services/laptop-scholarship' },
        { title: 'Mentorship', href: '/services/mentorship' },
        { title: 'Dare 2 Design', href: '/services/dare-2-design' },
        { title: 'Vocational Training', href: '/services/vocational-training' },
        { title: 'Save a Child', href: '/services/save-a-child' },
        { title: 'Coaching Center', href: '/services/coaching-center' }
      ]
    },
    {
      title: 'Programs',
      href: '/programs',
      subItems: [
        { title: 'Seminar', href: '/programs/seminar' },
        { title: 'Webinar', href: '/programs/webinar' },
        { title: 'Internship', href: '/programs/internship' },
        { title: 'Laptop Distribution', href: '/programs/laptop-distribution' }
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
        { title: 'Industrial Visit', href: '/events/industrial-visit' },
        { title: 'E-learning', href: '/events/e-learning' }
      ]
    },
    {
      title: 'Donate Now',
      href: '/donate',
      subItems: [
        { title: 'Donation Method', href: '/donate/methods' },
        { title: 'Donation in Pakistan', href: '/donate/pakistan' },
        { title: 'One-Time Donation Using PayPal', href: '/donate/paypal-onetime' },
        { title: 'Monthly Donation Using PayPal', href: '/donate/paypal-monthly' },
        { title: 'Money Transfer Using Zelle', href: '/donate/zelle' },
        { title: 'Money Transfer Using Zeffy', href: '/donate/zeffy' },
        { title: 'Money Transfer Using Citizen', href: '/donate/citizen' },
        { title: 'Donate by Mail', href: '/donate/mail' }
      ]
    }
  ];

export const ScholarshipData = [
    {
      title: "Eligibility Criteria",
      href: "/services/scholarship/eligibility",
    },
    {
      title: "Application and Selection Process",
      href: "/services/scholarship/process",
    },
    { title: "Apply for Scholarship", href: "/services/scholarship/apply" },
  ];