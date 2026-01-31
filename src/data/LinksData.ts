import { MenuItem } from "@/lib/types";

export const menuItems: MenuItem[] = [
  {
    title: "About Us",
    href: "/about",
    subItems: [
      { title: "About Ned Scholars", href: "/about" },
      { title: "Our Team", href: "/about/team" },
      { title: "Our Journey", href: "/about/journey" },
      { title: "Causes To Support", href: "/about/causes-to-support" },
      { title: "Transparency", href: "/about/transparency" },
      { title: "Remembrance", href: "/about/remembrance" },
      { title: "Acknowledgement", href: "/about/acknowledgement" },
    ],
  },
  {
    title: "Services",
    href: "/services",
    subItems: [
      {
        title: "Scholarship",
        href: "/services/scholarships",
      },
      { title: "Laptop Scholarship", href: "/services/laptop-scholarship" },
      { title: "Mentorship", href: "/services/mentorship" },
      { title: "Dare 2 Design", href: "/services/dare-to-design" },
      { title: "Vocational Training", href: "/services/vocational-training" },
      { title: "Save a Child", href: "/services/save-a-child" },
      { title: "Coaching Center", href: "/services/coaching-center" },
    ],
  },
  {
    title: "Programs",
    href: "/programs",
    subItems: [
      { title: "Seminar", href: "/programs/seminars" },
      { title: "Webinar", href: "/programs/webinars" },
      { title: "Internship", href: "/programs/internships" },
    ],
  },
  {
    title: "Scholars",
    href: "/scholars",
    subItems: [
      { title: "Volunteers", href: "/scholars/volunteers" },
      { title: "Success Stories", href: "/scholars/success-stories" },
    ],
  },
  {
    title: "Events",
    href: "/events",
    subItems: [
      { title: "Gupshup", href: "/events/gupshup" },
      { title: "Industrial Visit", href: "/events/industrial-visits" },
      { title: "E-learning", href: "/events/e-learning" },
    ],
  },
  {
      title: 'Donate Now',
      href: '/donate',
      subItems: [
        { title: 'Donation Method', href: '/donate' },
        { title: 'Donation in Pakistan', href: '/donate/pakistan' },
        { title: 'One-Time Donation Using PayPal', href: 'https://www.paypal.com/donate/?hosted_button_id=4K8YRVRTRUTGC' },
        { title: 'Monthly Donation Using PayPal', href: 'https://www.paypal.com/donate/?hosted_button_id=4K8YRVRTRUTGC' },
        { title: 'Money Transfer Using Zelle', href: '/donate/zelle' },
        { title: 'Money Transfer Using Zeffy', href: 'https://www.zeffy.com/en-US/donation-form/3a802600-124d-4a9d-aef3-95b57e19f7ef' },
        { title: 'Money Transfer Using Citizen', href: '/donate/citizen' },
        { title: 'Donate by Mail', href: '/donate/mail' }
      ]
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

export const dimensions = {
  "About Us": "w-[220px] translate-x-[-234px] mt-[454px]",
  "Services": "w-[600px] translate-x-[75px] mt-[431px]",
  "Programs": "w-[200px] translate-x-[-20px] mt-[276px]",
  "Scholars": "w-[200px] translate-x-[85px] mt-[237px]",
  "Events": "w-[200px] translate-x-[186px] mt-[276px]",
  }
