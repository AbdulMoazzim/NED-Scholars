export const FORM_CONFIGS = {
  scholarshipForm: {
    title: "Scholarship Application Form",
    description:
      "Apply for our scholarship program to support your educational journey",
    submitButtonText: "Submit Application",
    successMessage:
      "Your scholarship application has been submitted successfully!",
    fields: {
      full_name: {
        type: "text",
        label: "Full Name",
        placeholder: "Enter your full name",
        required: true,
        validation: {
          minLength: 2,
          maxLength: 255,
        },
      },
      email: {
        type: "email",
        label: "Email Address",
        placeholder: "your.email@example.com",
        required: true,
        validation: {
          pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        },
      },
      phone: {
        type: "tel",
        label: "Phone Number",
        placeholder: "+1 (555) 000-0000",
        required: true,
        validation: {
          pattern: /^[\d\s\-\+\(\)]+$/,
        },
      },
      date_of_birth: {
        type: "date",
        label: "Date of Birth",
        placeholder: "Select your date of birth",
        required: true,
        validation: {
          maxDate: new Date(), // Can't be in future
        },
      },
      gender: {
        type: "select",
        label: "Gender",
        placeholder: "Select your gender",
        required: true,
        options: [
          { value: "MALE", label: "Male" },
          { value: "FEMALE", label: "Female" },
          { value: "PREFER_NOT_TO_SAY", label: "Prefer not to say" },
        ],
      },
      status: {
        type: "select",
        label: "Application Status",
        placeholder: "Select status",
        required: true,
        options: [
          { value: "pending", label: "Pending" },
          { value: "approved", label: "Approved" },
          { value: "rejected", label: "Rejected" },
        ],
        defaultValue: "pending",
        hidden: true, // Hidden from user, set by system
      },
      country: {
        type: "text",
        label: "Country",
        placeholder: "Enter your country",
        required: true,
      },
      city: {
        type: "text",
        label: "City",
        placeholder: "Enter your city",
        required: true,
      },
      address: {
        type: "textarea",
        label: "Address (Optional)",
        placeholder: "Enter your complete address",
        required: false,
        rows: 3,
      },
      current_education_level: {
        type: "select",
        label: "Current Education Level",
        placeholder: "Select your education level",
        required: true,
        options: [
          { value: "high_school", label: "High School" },
          { value: "undergraduate", label: "Undergraduate" },
          { value: "graduate", label: "Graduate" },
          { value: "postgraduate", label: "Postgraduate" },
          { value: "doctorate", label: "Doctorate" },
        ],
      },
      institution_name: {
        type: "text",
        label: "Institution Name",
        placeholder: "Enter your institution/university name",
        required: true,
      },
      field_of_study: {
        type: "text",
        label: "Field of Study",
        placeholder: "e.g., Computer Science, Business Administration",
        required: true,
      },
      gpa_or_percentage: {
        type: "text",
        label: "GPA or Percentage",
        placeholder: "e.g., 3.8 GPA or 85%",
        required: true,
      },
      expected_graduation_year: {
        type: "number",
        label: "Expected Graduation Year (Optional)",
        placeholder: "e.g., 2025",
        required: false,
        validation: {
          min: new Date().getFullYear(),
          max: new Date().getFullYear() + 10,
        },
      },
      annual_family_income: {
        type: "text",
        label: "Annual Family Income",
        placeholder: "e.g., $50,000 or PKR 1,500,000",
        required: true,
      },
      why_deserve_scholarship: {
        type: "textarea",
        label: "Why Do You Deserve This Scholarship?",
        placeholder:
          "Explain your financial need, academic achievements, and how this scholarship will help you...",
        required: true,
        rows: 6,
        validation: {
          maxLength: 2048,
        },
        helperText: "Maximum 2048 characters",
      },
      future_goals: {
        type: "textarea",
        label: "Future Goals",
        placeholder:
          "Describe your career aspirations and how this scholarship aligns with your goals...",
        required: true,
        rows: 6,
        validation: {
          maxLength: 2048,
        },
        helperText: "Maximum 2048 characters",
      },
      academic_transcript_url: {
        type: "file",
        label: "Academic Transcript",
        placeholder: "Upload your academic transcript",
        required: true,
        accept: ".pdf,.doc,.docx",
        helperText: "Upload PDF or Word document (Max 5MB)",
      },
      recommendation_letter_url: {
        type: "file",
        label: "Recommendation Letter",
        placeholder: "Upload recommendation letter",
        required: true,
        accept: ".pdf,.doc,.docx",
        helperText: "Upload PDF or Word document (Max 5MB)",
      },
    },
    sections: [
      {
        heading: "Personal Information",
        description: "Tell us about yourself",
        fields: [
          "full_name",
          "email",
          "phone",
          "date_of_birth",
          "gender",
          "country",
          "city",
          "address",
        ],
      },
      {
        heading: "Academic Information",
        description: "Your educational background",
        fields: [
          "current_education_level",
          "institution_name",
          "field_of_study",
          "gpa_or_percentage",
          "expected_graduation_year",
        ],
      },
      {
        heading: "Financial Information",
        description: "Help us understand your financial situation",
        fields: ["annual_family_income"],
      },
      {
        heading: "Essay Questions",
        description: "Share your story and aspirations",
        fields: ["why_deserve_scholarship", "future_goals"],
      },
      {
        heading: "Required Documents",
        description: "Upload supporting documents",
        fields: ["academic_transcript_url", "recommendation_letter_url"],
      },
    ],
  },

  partnerForm: {
    title: "Partner Application Form",
    description: "Join us as a partner and collaborate to make an impact",
    submitButtonText: "Submit Partnership Application",
    successMessage:
      "Thank you for your interest! We'll review your application and get back to you soon.",
    fields: {
      full_name: {
        type: "text",
        label: "Full Name",
        placeholder: "Enter your full name",
        required: true,
      },
      email: {
        type: "email",
        label: "Email Address",
        placeholder: "your.email@example.com",
        required: true,
      },
      phone: {
        type: "tel",
        label: "Phone Number",
        placeholder: "+1 (555) 000-0000",
        required: true,
      },
      why_join: {
        type: "textarea",
        label: "Why Do You Want to Join as a Partner?",
        placeholder:
          "Tell us about your motivation and what you hope to achieve through this partnership...",
        required: true,
        rows: 6,
        validation: {
          maxLength: 2048,
        },
        helperText: "Maximum 2048 characters",
      },
      organization_name: {
        type: "text",
        label: "Organization Name",
        placeholder: "Enter your organization name",
        required: true,
      },
      designation: {
        type: "text",
        label: "Your Designation",
        placeholder: "e.g., CEO, Director, Manager",
        required: true,
      },
      linkedin_profile: {
        type: "url",
        label: "LinkedIn Profile (Optional)",
        placeholder: "https://linkedin.com/in/yourprofile",
        required: false,
      },
      areas_of_expertise: {
        type: "textarea",
        label: "Areas of Expertise",
        placeholder: "List your key areas of expertise, skills, or domains...",
        required: true,
        rows: 4,
      },
      education_level: {
        type: "select",
        label: "Education Level",
        placeholder: "Select your highest education level",
        required: true,
        options: [
          { value: "high_school", label: "High School" },
          { value: "bachelors", label: "Bachelor's Degree" },
          { value: "masters", label: "Master's Degree" },
          { value: "doctorate", label: "Doctorate" },
          { value: "professional", label: "Professional Certification" },
        ],
      },
    },
    sections: [
      {
        heading: "Contact Information",
        description: "How can we reach you?",
        fields: ["full_name", "email", "phone"],
      },
      {
        heading: "Professional Background",
        description: "Tell us about your professional experience",
        fields: [
          "organization_name",
          "designation",
          "linkedin_profile",
          "education_level",
          "areas_of_expertise",
        ],
      },
      {
        heading: "Motivation",
        description: "Why partner with us?",
        fields: ["why_join"],
      },
    ],
  },

  studentForm: {
    title: "Student Registration Form",
    description: "Join our community of learners and grow together",
    submitButtonText: "Register as Student",
    successMessage:
      "Welcome! Your registration is complete. Check your email for next steps.",
    fields: {
      full_name: {
        type: "text",
        label: "Full Name",
        placeholder: "Enter your full name",
        required: true,
      },
      email: {
        type: "email",
        label: "Email Address",
        placeholder: "your.email@example.com",
        required: true,
      },
      phone: {
        type: "tel",
        label: "Phone Number",
        placeholder: "+1 (555) 000-0000",
        required: true,
      },
      why_join: {
        type: "textarea",
        label: "Why Do You Want to Join?",
        placeholder:
          "Share your learning goals and what you hope to achieve...",
        required: true,
        rows: 6,
        validation: {
          maxLength: 2048,
        },
        helperText: "Maximum 2048 characters",
      },
      education_level: {
        type: "select",
        label: "Current Education Level",
        placeholder: "Select your education level",
        required: true,
        options: [
          { value: "high_school", label: "High School" },
          { value: "undergraduate", label: "Undergraduate" },
          { value: "graduate", label: "Graduate" },
          { value: "postgraduate", label: "Postgraduate" },
        ],
      },
      field_of_study: {
        type: "text",
        label: "Field of Study",
        placeholder: "e.g., Computer Science, Engineering, Business",
        required: true,
      },
      organization_name: {
        type: "text",
        label: "Institution/University Name",
        placeholder: "Enter your institution name",
        required: true,
      },
    },
    sections: [
      {
        heading: "Personal Information",
        description: "Let us know who you are",
        fields: ["full_name", "email", "phone"],
      },
      {
        heading: "Academic Details",
        description: "Your educational background",
        fields: ["education_level", "field_of_study", "organization_name"],
      },
      {
        heading: "Motivation",
        description: "Tell us about your goals",
        fields: ["why_join"],
      },
    ],
  },

  mentorForm: {
    title: "Mentor Application Form",
    description: "Share your knowledge and experience by becoming a mentor",
    submitButtonText: "Apply as Mentor",
    successMessage:
      "Thank you for applying! We'll review your application and contact you soon.",
    fields: {
      full_name: {
        type: "text",
        label: "Full Name",
        placeholder: "Enter your full name",
        required: true,
      },
      email: {
        type: "email",
        label: "Email Address",
        placeholder: "your.email@example.com",
        required: true,
      },
      phone: {
        type: "tel",
        label: "Phone Number",
        placeholder: "+1 (555) 000-0000",
        required: true,
      },
      why_join: {
        type: "textarea",
        label: "Why Do You Want to Become a Mentor?",
        placeholder:
          "Share your passion for mentoring and what you hope to contribute...",
        required: true,
        rows: 6,
        validation: {
          maxLength: 2048,
        },
        helperText: "Maximum 2048 characters",
      },
      designation: {
        type: "text",
        label: "Current Designation",
        placeholder: "e.g., Senior Engineer, Professor, Consultant",
        required: true,
      },
      linkedin_profile: {
        type: "url",
        label: "LinkedIn Profile (Optional)",
        placeholder: "https://linkedin.com/in/yourprofile",
        required: false,
      },
      field_of_study: {
        type: "text",
        label: "Field of Expertise",
        placeholder: "e.g., Software Engineering, Data Science, Business",
        required: true,
      },
      experience_years: {
        type: "number",
        label: "Years of Professional Experience",
        placeholder: "Enter number of years",
        required: true,
        validation: {
          min: 1,
          max: 50,
        },
      },
      areas_of_expertise: {
        type: "textarea",
        label: "Areas of Expertise",
        placeholder:
          "List specific skills, technologies, or domains you can mentor in...",
        required: true,
        rows: 4,
      },
    },
    sections: [
      {
        heading: "Personal Information",
        description: "Tell us about yourself",
        fields: ["full_name", "email", "phone"],
      },
      {
        heading: "Professional Background",
        description: "Your experience and expertise",
        fields: [
          "designation",
          "linkedin_profile",
          "field_of_study",
          "experience_years",
          "areas_of_expertise",
        ],
      },
      {
        heading: "Motivation",
        description: "Why mentorship?",
        fields: ["why_join"],
      },
    ],
  },

  volunteerForm: {
    title: "Volunteer Registration Form",
    description: "Make a difference by volunteering with us",
    submitButtonText: "Register as Volunteer",
    successMessage:
      "Thank you for registering! We'll be in touch with volunteer opportunities.",
    fields: {
      full_name: {
        type: "text",
        label: "Full Name",
        placeholder: "Enter your full name",
        required: true,
      },
      email: {
        type: "email",
        label: "Email Address",
        placeholder: "your.email@example.com",
        required: true,
      },
      phone: {
        type: "tel",
        label: "Phone Number",
        placeholder: "+1 (555) 000-0000",
        required: true,
      },
      date_of_birth: {
        type: "date",
        label: "Date of Birth",
        placeholder: "Select your date of birth",
        required: true,
      },
      gender: {
        type: "select",
        label: "Gender",
        placeholder: "Select your gender",
        required: true,
        options: [
          { value: "MALE", label: "Male" },
          { value: "FEMALE", label: "Female" },
          { value: "PREFER_NOT_TO_SAY", label: "Prefer not to say" },
        ],
      },
      status: {
        type: "select",
        label: "Status",
        placeholder: "Select status",
        required: true,
        options: [
          { value: "pending", label: "Pending" },
          { value: "approved", label: "Approved" },
          { value: "rejected", label: "Rejected" },
        ],
        defaultValue: "pending",
        hidden: true,
      },
      country: {
        type: "text",
        label: "Country",
        placeholder: "Enter your country",
        required: true,
      },
      city: {
        type: "text",
        label: "City",
        placeholder: "Enter your city",
        required: true,
      },
      current_education_level: {
        type: "select",
        label: "Current Education Level",
        placeholder: "Select your education level",
        required: true,
        options: [
          { value: "high_school", label: "High School" },
          { value: "undergraduate", label: "Undergraduate" },
          { value: "graduate", label: "Graduate" },
          { value: "postgraduate", label: "Postgraduate" },
          { value: "doctorate", label: "Doctorate" },
          { value: "working_professional", label: "Working Professional" },
        ],
      },
      areas_of_interest: {
        type: "select",
        label: "Areas of Interest",
        placeholder: "Select your area of interest",
        required: true,
        options: [
          { value: "graphics", label: "Graphics" },
          { value: "media", label: "Media" },
          { value: "website", label: "Website" },
          { value: "animations", label: "Animations" },
          { value: "documention", label: "Documentation" },
          { value: "ai-sw", label: "AI / SW" },
          { value: "medical", label: "Medical" },
          { value: "laptop-distribution", label: "Laptop Distribution" },
          { value: "event-management", label: "Event Management" },
        ],
      },
      skills: {
        type: "textarea",
        label: "Skills",
        placeholder:
          "List your relevant skills (e.g., communication, project management, graphic design)...",
        required: true,
        rows: 4,
      },
    },
    sections: [
      {
        heading: "Personal Information",
        description: "Tell us about yourself",
        fields: [
          "full_name",
          "email",
          "phone",
          "date_of_birth",
          "gender",
          "country",
          "city",
        ],
      },
      {
        heading: "Education",
        description: "Your educational background",
        fields: ["current_education_level"],
      },
      {
        heading: "Volunteer Preferences",
        description: "What would you like to help with?",
        fields: ["areas_of_interest", "skills"],
      },
    ],
  },

  attendeeSeminarForm: {
    title: "Seminar Registration",
    description: "Register to attend our upcoming seminar",
    submitButtonText: "Register for Seminar",
    successMessage:
      "Registration successful! You'll receive a confirmation email shortly.",
    fields: {
      full_name: {
        type: "text",
        label: "Full Name",
        placeholder: "Enter your full name",
        required: true,
      },
      email: {
        type: "email",
        label: "Email Address",
        placeholder: "your.email@example.com",
        required: true,
      },
      phone: {
        type: "tel",
        label: "Phone Number",
        placeholder: "+1 (555) 000-0000",
        required: true,
      },
      attendance_mode: {
        type: "radio",
        label: "How would you like to attend?",
        required: true,
        options: [
          { value: "virtual", label: "Virtual (Online)" },
          { value: "physical", label: "Physical (In-Person)" },
        ],
      },
      seminarId: {
        type: "hidden",
        label: "Seminar ID",
        required: true,
        hidden: true,
      },
    },
    sections: [
      {
        heading: "Registration Details",
        description: "Please provide your information",
        fields: ["full_name", "email", "phone", "attendance_mode"],
      },
    ],
  },

  attendeeWebinarForm: {
    title: "Webinar Registration",
    description: "Register for our online webinar",
    submitButtonText: "Register for Webinar",
    successMessage: "You're registered! Check your email for the meeting link.",
    fields: {
      full_name: {
        type: "text",
        label: "Full Name",
        placeholder: "Enter your full name",
        required: true,
      },
      email: {
        type: "email",
        label: "Email Address",
        placeholder: "your.email@example.com",
        required: true,
      },
      phone: {
        type: "tel",
        label: "Phone Number",
        placeholder: "+1 (555) 000-0000",
        required: true,
      },
      attendance_mode: {
        type: "hidden",
        defaultValue: "virtual",
        hidden: true,
      },
      webinarId: {
        type: "hidden",
        label: "Webinar ID",
        required: true,
        hidden: true,
      },
    },
    sections: [
      {
        heading: "Registration Details",
        description: "Join us online",
        fields: ["full_name", "email", "phone"],
      },
    ],
  },

  presenterSeminarForm: {
    title: "Seminar Presenter Application",
    description: "Apply to present at our seminar and share your expertise",
    submitButtonText: "Submit Presenter Application",
    successMessage: "Application submitted! We'll review and contact you soon.",
    fields: {
      full_name: {
        type: "text",
        label: "Full Name",
        placeholder: "Enter your full name",
        required: true,
      },
      email: {
        type: "email",
        label: "Email Address",
        placeholder: "your.email@example.com",
        required: true,
      },
      phone: {
        type: "tel",
        label: "Phone Number",
        placeholder: "+1 (555) 000-0000",
        required: true,
      },
      country: {
        type: "text",
        label: "Country",
        placeholder: "Enter your country",
        required: true,
      },
      current_designation: {
        type: "text",
        label: "Current Designation",
        placeholder: "e.g., Senior Researcher, Professor, Director",
        required: true,
      },
      organization_name: {
        type: "text",
        label: "Organization Name",
        placeholder: "Your current organization/institution",
        required: true,
      },
      linkedin_profile: {
        type: "url",
        label: "LinkedIn Profile (Optional)",
        placeholder: "https://linkedin.com/in/yourprofile",
        required: false,
      },
      presentation_title: {
        type: "text",
        label: "Presentation Title",
        placeholder: "The title of your presentation",
        required: true,
      },
      presentation_topic: {
        type: "textarea",
        label: "Presentation Topic & Abstract",
        placeholder:
          "Provide a detailed description of your presentation topic...",
        required: true,
        rows: 6,
        helperText: "Describe what you'll cover in your presentation",
      },
      areas_of_expertise: {
        type: "textarea",
        label: "Areas of Expertise",
        placeholder:
          "List your key areas of expertise relevant to this presentation...",
        required: true,
        rows: 4,
      },
      why_present: {
        type: "textarea",
        label: "Why Do You Want to Present?",
        placeholder: "Share your motivation for presenting at this seminar...",
        required: true,
        rows: 5,
      },
      impact_statement: {
        type: "textarea",
        label: "Expected Impact (Optional)",
        placeholder:
          "What impact do you hope your presentation will have on attendees?",
        required: false,
        rows: 4,
      },
      seminarId: {
        type: "hidden",
        label: "Seminar ID",
        required: false,
        hidden: true,
      },
      application_status: {
        type: "select",
        label: "Application Status",
        defaultValue: "pending",
        hidden: true,
        options: [
          { value: "pending", label: "Pending" },
          { value: "approved", label: "Approved" },
          { value: "rejected", label: "Rejected" },
        ],
      },
    },
    sections: [
      {
        heading: "Personal Information",
        description: "Tell us about yourself",
        fields: ["full_name", "email", "phone", "country"],
      },
      {
        heading: "Professional Background",
        description: "Your current role and expertise",
        fields: [
          "current_designation",
          "organization_name",
          "linkedin_profile",
          "areas_of_expertise",
        ],
      },
      {
        heading: "Presentation Details",
        description: "What will you present?",
        fields: ["presentation_title", "presentation_topic"],
      },
      {
        heading: "Motivation & Impact",
        description: "Why present and what's the expected outcome?",
        fields: ["why_present", "impact_statement"],
      },
    ],
  },
  industrialVisitForm: {
    title: "Industrial Visit Registration",
    description:
      "Register for our industrial visit and gain real-world industry exposure",
    submitButtonText: "Complete Registration",
    successMessage:
      "Registration successful! You'll receive a confirmation email with visit details shortly.",
    fields: {
      fullName: {
        type: "text",
        label: "Full Name",
        placeholder: "Enter your full name",
        required: true,
        validation: {
          minLength: 2,
          maxLength: 255,
        },
      },
      email: {
        type: "email",
        label: "Email Address",
        placeholder: "your.email@example.com",
        required: true,
        validation: {
          pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        },
      },
      phone: {
        type: "tel",
        label: "Phone Number",
        placeholder: "+92 300 1234567",
        required: true,
        validation: {
          pattern: /^[\d\s\-\+\(\)]+$/,
        },
      },
      cnic: {
        type: "text",
        label: "CNIC Number (Optional)",
        placeholder: "12345-1234567-1",
        required: false,
        validation: {
          pattern: /^\d{5}-\d{7}-\d{1}$/,
        },
        helperText: "Format: 12345-1234567-1",
      },
      university: {
        type: "text",
        label: "University/Institution",
        placeholder: "e.g., NED University of Engineering & Technology",
        required: true,
      },
      department: {
        type: "text",
        label: "Department",
        placeholder: "e.g., Mechanical Engineering, Computer Science",
        required: true,
      },
      semester: {
        type: "select",
        label: "Current Semester",
        placeholder: "Select your semester",
        required: true,
        options: [
          { value: "1st", label: "1st Semester" },
          { value: "2nd", label: "2nd Semester" },
          { value: "3rd", label: "3rd Semester" },
          { value: "4th", label: "4th Semester" },
          { value: "5th", label: "5th Semester" },
          { value: "6th", label: "6th Semester" },
          { value: "7th", label: "7th Semester" },
          { value: "8th", label: "8th Semester" },
          { value: "graduate", label: "Graduate" },
          { value: "postgraduate", label: "Postgraduate" },
        ],
      },
      rollNumber: {
        type: "text",
        label: "Roll Number (Optional)",
        placeholder: "e.g., ME-2021-123",
        required: false,
      },
      emergencyContact: {
        type: "text",
        label: "Emergency Contact Name",
        placeholder: "e.g., Father - Ahmed Ali",
        required: true,
        helperText: "Name and relationship (e.g., Father - John Doe)",
      },
      emergencyPhone: {
        type: "tel",
        label: "Emergency Contact Phone",
        placeholder: "+92 300 7654321",
        required: true,
        validation: {
          pattern: /^[\d\s\-\+\(\)]+$/,
        },
      },
      visitId: {
        type: "hidden",
        label: "Visit ID",
        required: true,
        hidden: true,
      },
      registrationStatus: {
        type: "hidden",
        label: "Registration Status",
        defaultValue: "registered",
        hidden: true,
      },
    },
    sections: [
      {
        heading: "Personal Information",
        description: "Tell us about yourself",
        fields: ["fullName", "email", "phone", "cnic"],
      },
      {
        heading: "Academic Information",
        description: "Your educational details",
        fields: ["university", "department", "semester", "rollNumber"],
      },
      {
        heading: "Emergency Contact",
        description: "Required for safety purposes",
        fields: ["emergencyContact", "emergencyPhone"],
      },
    ],
  },
  internshipApplication: {
    title: "Internship Application",
    description:
      "Apply for this internship opportunity and take the next step in your career",
    submitButtonText: "Submit Application",
    successMessage:
      "Application submitted successfully! We'll review your application and get back to you soon.",

    fields: {
      // Personal Information
      fullName: {
        type: "text",
        label: "Full Name",
        placeholder: "Enter your full name",
        required: true,
        validation: {
          minLength: 3,
          maxLength: 100,
        },
      },
      email: {
        type: "email",
        label: "Email Address",
        placeholder: "your.email@example.com",
        required: true,
        validation: {
          pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          message: "Please enter a valid email address",
        },
      },
      phone: {
        type: "tel",
        label: "Phone Number",
        placeholder: "+92-300-1234567",
        required: true,
        validation: {
          pattern: /^[\d\s\-\+\(\)]+$/,
          message: "Please enter a valid phone number",
        },
      },
      cnic: {
        type: "text",
        label: "CNIC (Optional)",
        placeholder: "12345-1234567-1",
        required: false,
        validation: {
          pattern: /^\d{5}-\d{7}-\d{1}$/,
          message: "CNIC must be in format: 12345-1234567-1",
        },
      },

      // Academic Information
      university: {
        type: "text",
        label: "University/Institution",
        placeholder: "NED University of Engineering and Technology",
        required: true,
        validation: {
          minLength: 3,
          maxLength: 200,
        },
      },
      department: {
        type: "text",
        label: "Department/Major",
        placeholder: "Computer Science",
        required: true,
        validation: {
          minLength: 2,
          maxLength: 100,
        },
      },
      semester: {
        type: "select",
        label: "Current Semester",
        required: true,
        options: [
          { label: "1st Semester", value: "1st Semester" },
          { label: "2nd Semester", value: "2nd Semester" },
          { label: "3rd Semester", value: "3rd Semester" },
          { label: "4th Semester", value: "4th Semester" },
          { label: "5th Semester", value: "5th Semester" },
          { label: "6th Semester", value: "6th Semester" },
          { label: "7th Semester", value: "7th Semester" },
          { label: "8th Semester", value: "8th Semester" },
          { label: "Graduate", value: "Graduate" },
          { label: "Postgraduate", value: "Postgraduate" },
        ],
      },
      cgpa: {
        type: "text",
        label: "CGPA",
        placeholder: "3.5/4.0 or 3.5",
        required: true,
        helperText: "Enter your current CGPA (e.g., 3.5/4.0)",
        validation: {
          pattern: /^\d+\.?\d*(\s*\/\s*\d+\.?\d*)?$/,
          message: "Please enter a valid CGPA (e.g., 3.5 or 3.5/4.0)",
        },
      },
      expectedGraduation: {
        type: "text",
        label: "Expected Graduation",
        placeholder: "June 2025",
        required: true,
        helperText: "Month and Year (e.g., June 2025)",
        validation: {
          minLength: 3,
          maxLength: 50,
        },
      },

      // Professional Information
      resume: {
        type: "file",
        label: "Resume/CV URL",
        placeholder: "Upload your Resume/CV",
        required: true,
        accept: ".pdf,.doc,.docx",
        helperText: "Upload PDF or Word document (Max 5MB)",
      },
      coverLetter: {
        type: "textarea",
        label: "Cover Letter (Optional)",
        placeholder:
          "Tell us why you're interested in this internship and what makes you a good fit...",
        required: false,
        helperText: "Share your motivation and relevant experience",
        validation: {
          maxLength: 2000,
        },
      },
      linkedIn: {
        type: "text",
        label: "LinkedIn Profile (Optional)",
        placeholder: "https://www.linkedin.com/in/your-profile",
        required: false,
        validation: {
          pattern: /^https?:\/\/.+/,
          message: "Please enter a valid URL",
        },
      },
      portfolio: {
        type: "text",
        label: "Portfolio/GitHub (Optional)",
        placeholder: "https://github.com/yourusername or your portfolio link",
        required: false,
        helperText: "Showcase your projects and work",
        validation: {
          pattern: /^https?:\/\/.+/,
          message: "Please enter a valid URL",
        },
      },

      // Skills & Experience
      skills: {
        type: "text",
        label: "Skills",
        placeholder: "React, Node.js, Python, SQL, Git",
        required: true,
        helperText: "Enter your skills separated by commas",
        validation: {
          minLength: 3,
          maxLength: 500,
          message: "Please list at least one skill",
        },
      },
      previousExperience: {
        type: "textarea",
        label: "Previous Experience (Optional)",
        placeholder:
          "Describe any relevant internships, projects, or work experience...",
        required: false,
        helperText:
          "Include internships, freelance work, or significant projects",
        validation: {
          maxLength: 2000,
        },
      },

      

      // Hidden field for internship ID
      internshipId: {
        type: "hidden",
        label: "",
        required: true,
      },
    },

    sections: [
      {
        heading: "Personal Information",
        description: "Tell us about yourself",
        fields: ["fullName", "email", "phone", "cnic"],
      },
      {
        heading: "Academic Information",
        description: "Your educational background",
        fields: [
          "university",
          "department",
          "semester",
          "cgpa",
          "expectedGraduation",
        ],
      },
      {
        heading: "Professional Information",
        description: "Share your professional profile",
        fields: ["resume", "coverLetter", "linkedIn", "portfolio"],
      },
      {
        heading: "Skills & Experience",
        description: "Showcase your abilities",
        fields: ["skills", "previousExperience"],
      }
    ],
  },gupShupRegistration: {
  title: "Gup Shup Registration",
  description: "Join us for meaningful conversation",
  submitButtonText: "Complete Registration",
  successMessage: "Registration successful! You'll receive a confirmation email with session details.",
  
  fields: {
    // Personal Information
    fullName: {
      type: "text",
      label: "Full Name",
      placeholder: "Enter your full name",
      required: true,
      validation: {
        minLength: 3,
        maxLength: 100,
      },
    },
    email: {
      type: "email",
      label: "Email Address",
      placeholder: "your.email@example.com",
      required: true,
      validation: {
        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: "Please enter a valid email address",
      },
    },
    phone: {
      type: "tel",
      label: "Phone Number (Optional)",
      placeholder: "+92-300-1234567",
      required: false,
      validation: {
        pattern: /^[\d\s\-\+\(\)]+$/,
        message: "Please enter a valid phone number",
      },
    },

    // Additional Details
    organization: {
      type: "text",
      label: "Organization/University",
      placeholder: "e.g., NED University, XYZ Company",
      required: false,
      helperText: "Your affiliation or workplace",
      validation: {
        maxLength: 200,
      },
    },
    designation: {
      type: "text",
      label: "Designation",
      placeholder: "e.g., Student, Professional, Researcher",
      required: false,
      helperText: "Your role or position",
      validation: {
        maxLength: 100,
      },
    },

    // Interest & Questions
    whyAttending: {
      type: "textarea",
      label: "Why do you want to attend? (Optional)",
      placeholder: "Share what interests you about this session...",
      required: false,
      helperText: "Help us understand your motivation",
      validation: {
        maxLength: 500,
      },
    },
    questionsForSpeaker: {
      type: "textarea",
      label: "Questions for Speaker (Optional)",
      placeholder: "Submit questions you'd like to ask during the Q&A...",
      required: false,
      helperText: "Your questions may be selected during the session",
      validation: {
        maxLength: 500,
      },
    },

    // Hidden field for session ID
    sessionId: {
      type: "hidden",
      label: "",
      required: true,
    },
  },
  
  sections: [
    {
      heading: "Personal Information",
      description: "Tell us about yourself",
      fields: ["fullName", "email", "phone"],
    },
    {
      heading: "Additional Details",
      description: "Help us know you better",
      fields: ["organization", "designation"],
    },
    {
      heading: "Your Interest",
      description: "Share your thoughts and questions",
      fields: ["whyAttending", "questionsForSpeaker"],
    },
  ],
}
};
