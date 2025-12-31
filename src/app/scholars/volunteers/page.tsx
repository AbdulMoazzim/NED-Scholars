"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Palette,
  Share2,
  Film,
  Code,
  FileText,
  Brain,
  Heart,
  Laptop,
  Calendar,
  CheckCircle2,
  Users,
  ArrowRight,
  Sparkles,
  Target,
  Award,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function VolunteersPage() {
  const router = useRouter();
  const teams = [
    {
      id: "graphics",
      name: "TEAM GRAPHICS",
      icon: <Palette className="w-12 h-12" />,
      color: "from-[#82B4CC] to-[#B0A3B3]",
      description:
        "Volunteers with a passion for graphic design are encouraged to join NED Scholars Graphics Team, where creativity meets purpose. The team is dedicated to crafting visually impactful graphics that highlight the achievements, events, and opportunities provided by NED Scholars. Through engaging visuals and captivating videos, we aim to strengthen NED Scholars' media presence across platforms, including social media and YouTube. Our designs focus on interactive and meaningful storytelling, allowing us to communicate our mission effectively. By volunteering, designers contribute to building a strong, visually cohesive brand that inspires and informs. Join us in making a difference with every graphic, supporting NED Scholars' mission to empower and uplift.",
      skills: [
        {
          title: "Proficiency in Design Software",
          description:
            "Knowledge of Adobe Photoshop, Illustrator, or Canva for graphic creation.",
        },
        {
          title: "Video Editing",
          description:
            "Basic skills in Premiere Pro or After Effects for engaging video production.",
        },
        {
          title: "Creativity and Visual Storytelling",
          description: "Ability to convey ideas through compelling visuals.",
        },
        {
          title: "Attention to Detail",
          description:
            "Ensuring precision and professionalism in all design elements.",
        },
      ],
      formLink: "/register/volunteer",
    },
    {
      id: "media",
      name: "TEAM MEDIA",
      icon: <Share2 className="w-12 h-12" />,
      color: "from-[#1164A3] to-[#68B9C4]",
      description:
        "Volunteers are encouraged to follow, like, and share our posts to boost our social media visibility. The Promotion Team handles posting on Instagram and Facebook stories, and shares our content across Facebook and WhatsApp groups. The Engagement Team tags friends under each post and leaves random comments to drive interaction. The Post Boosting Team ensures important posts like forms, seminars, and graduate tales are shared repeatedly. Lastly, the StoryRepost Team shares our posts in their stories and reposts on LinkedIn and Facebook. By collaborating with the Graphic Design team, we create engaging content that captures attention and fosters interaction, aiming to expand our reach and grow our community.",
      skills: [
        {
          title: "Creativity",
          description:
            "Innovate and develop engaging content that captures attention.",
        },
        {
          title: "Communication",
          description:
            "Demonstrate strong verbal and written skills for effective audience interaction.",
        },
        {
          title: "Social Media Proficiency",
          description:
            "Leverage platforms like Instagram, Facebook, and LinkedIn to enhance our online presence.",
        },
        {
          title: "Analytical Skills",
          description:
            "Analyze engagement metrics to evaluate the success of posts and strategies.",
        },
      ],
      formLink: "/register/volunteer",
    },
    {
      id: "animation",
      name: "TEAM ANIMATION",
      icon: <Film className="w-12 h-12" />,
      color: "from-[#68B9C4] to-[#82B4CC]",
      description:
        "Volunteers passionate about animation are encouraged to join NED Scholars Animation Team, where creativity drives interactive experiences. The team focuses on designing multimedia games and applications, like Triple Option Effect and Conflict Management, to support dynamic learning. By integrating innovative animation, these projects foster engaging educational environments that capture attention and inspire learning. The Animation Team brings ideas to life through 2D and 3D animations, creating visually appealing content that enhances understanding and retention. Volunteers here contribute to a creative, impactful approach to education and communication, reinforcing NED Scholars' commitment to interactive and meaningful content. Join us to build, inspire, and elevate learning experiences with every animation created.",
      skills: [
        {
          title: "Animation Software Proficiency",
          description:
            "Knowledge of tools like Adobe Animate, Blender, or After Effects.",
        },
        {
          title: "2D and 3D Animation Skills",
          description:
            "Ability to create interactive, visually appealing animations.",
        },
        {
          title: "Creativity and Storytelling",
          description: "Skill in crafting engaging, educational content.",
        },
        {
          title: "Attention to Detail",
          description: "Precision to ensure high-quality, professional animations.",
        },
      ],
      formLink: "/register/volunteer",
    },
    {
      id: "website",
      name: "TEAM NED'S WEBSITE",
      icon: <Code className="w-12 h-12" />,
      color: "from-[#1164A3] to-[#82B4CC]",
      description:
        "Volunteers enthusiastic about web development are encouraged to join the NED Scholars Website Team, where creativity supports functionality. The team manages and updates the NED Scholars website, ensuring timely information on announcements, events, and impactful content for users. Volunteers enhance the site's design, focusing on modern, visually appealing layouts that represent the NED Scholars mission effectively. Key responsibilities include content management, SEO optimization, and creating engaging visuals to improve site aesthetics. By implementing effective SEO strategies, the team broadens the website's reach, connecting with a wider audience and building a dynamic online presence. This role offers volunteers an opportunity to make a meaningful contribution to digital outreach.",
      skills: [
        {
          title: "WordPress Proficiency",
          description:
            "Skill in creating and maintaining websites using WordPress.",
        },
        {
          title: "SEO Content Writing",
          description:
            "Strong writing skills with a focus on SEO to improve site visibility.",
        },
        {
          title: "Graphic Design",
          description:
            "Creative ability to design engaging visuals for the website.",
        },
        {
          title: "Responsive Design",
          description:
            "Knowledge of creating mobile-friendly layouts to enhance user experience across devices.",
        },
      ],
      formLink: "/register/volunteer",
    },
    {
      id: "documentation",
      name: "TEAM DOCUMENTATION",
      icon: <FileText className="w-12 h-12" />,
      color: "from-[#82B4CC] to-[#B0A3B3]",
      description:
        "Volunteers records key activities and events, creating detailed reports and bi-yearly newsletters to keep the community informed about milestones and achievements. Volunteers capture comprehensive meeting minutes to track NED Scholars progress and decisions. The team develops engaging newsletters, blog posts, and articles that showcase accomplishments, activities, and significant milestones. Additionally, they organize and maintain essential resources for future members, ensuring valuable information is easily accessible. Collaboration with the media team enhances documentation efforts by visually capturing events through photos and videos, preserving lasting memories and fostering community engagement.",
      skills: [
        {
          title: "Strong Writing Skills",
          description:
            "Ability to create clear, concise, and engaging reports and newsletters.",
        },
        {
          title: "Attention to Detail",
          description:
            "Skill in accurately recording meeting minutes and documenting activities.",
        },
        {
          title: "Organizational Skills",
          description:
            "Capability to manage and maintain important resources and documentation.",
        },
        {
          title: "Basic Research Skills",
          description:
            "Proficiency in gathering and synthesizing information for blog posts and articles.",
        },
      ],
      formLink: "/register/volunteer",
    },
    {
      id: "aisw",
      name: "TEAM AI / SW",
      icon: <Brain className="w-12 h-12" />,
      color: "from-[#1164A3] to-[#68B9C4]",
      description:
        "Volunteers passionate about technology are encouraged to join the NED Scholars AI/SW Team, where innovation and application converge. This team explores cutting-edge projects in Software Development and Artificial Intelligence, from chatbot development to integrating AI into various applications. Volunteers gain hands-on experience in creating tools that address real-world challenges, enhancing efficiency across domains. The team fosters skill-building in advanced software and website development, empowering members with practical AI applications. Joining the AI/SW Team offers opportunities to expand your skill set, build a strong portfolio, and prepare for the job market. Stand out as a fresh graduate with valuable experience and a competitive edge, equipped for impactful roles in tech-driven industries.",
      skills: [
        {
          title: "Programming Proficiency",
          description:
            "Strong skills in Python, C and JavaScript for application development.",
        },
        {
          title: "Understanding of AI Concepts",
          description:
            "Familiarity with artificial intelligence and machine learning principles.",
        },
        {
          title: "Problem-solving Skills",
          description:
            "Ability to analyze challenges and develop innovative solutions.",
        },
        {
          title: "Collaboration",
          description:
            "Teamwork skills to effectively work with others on various projects.",
        },
      ],
      formLink: "/register/volunteer",
    },
    {
      id: "medical",
      name: "TEAM MEDICAL",
      icon: <Heart className="w-12 h-12" />,
      color: "from-[#68B9C4] to-[#82B4CC]",
      description:
        "Volunteers interested in making a difference in healthcare are encouraged to join the NED Scholars Medical Team, focused on supporting students and families with health-related needs. The team connects individuals with accessible medical services in Karachi, including free or low-cost healthcare options. Volunteers assist in finding hospitals, arranging treatments, coordinating surgeries, and offering support for hospital visits. Additionally, they provide valuable information on obtaining necessary medicines and ongoing care. This initiative ensures that individuals facing health challenges have a reliable source of support, promoting wellness and accessibility. By joining, volunteers play a vital role in making healthcare more accessible, fostering a community where no one faces health issues alone.",
      skills: [
        {
          title: "Knowledge of Healthcare Resources",
          description:
            "Familiarity with local hospitals, clinics, and affordable healthcare options.",
        },
        {
          title: "Communication Skills",
          description:
            "Ability to compassionately interact with individuals in need and effectively convey medical information.",
        },
        {
          title: "Organizational Skills",
          description:
            "Efficiently coordinating appointments, treatments, and follow-up visits.",
        },
        {
          title: "Problem-solving",
          description:
            "Quick thinking to find solutions for health-related challenges and access to care.",
        },
      ],
      formLink: "/register/volunteer",
    },
    {
      id: "laptop",
      name: "TEAM LAPTOP DISTRIBUTION",
      icon: <Laptop className="w-12 h-12" />,
      color: "from-[#82B4CC] to-[#B0A3B3]",
      description:
        "Volunteers are encouraged to join the Laptop Distribution team at NED Scholars, a dedicated group focused on fair and organized laptop allocation for students. The team efficiently manages the allocation, tracking, and retrieval of laptops, ensuring smooth operations with comprehensive student and laptop data handling, along with personal follow-ups. Through this role, volunteers gain valuable skills, improving communication through student interactions and enhancing proficiency in Excel and data management. Participants also develop strong management and organizational abilities while building teamwork and collaboration experience. Join us to contribute to a meaningful cause, gain practical experience, and support students by maintaining an efficient resource distribution process.",
      skills: [
        {
          title: "Data Management",
          description:
            "Ability to organize, track, and maintain accurate records of laptop allocation and retrieval.",
        },
        {
          title: "Proficiency in Excel",
          description:
            "Skills in Excel for data entry, analysis, and maintaining comprehensive records efficiently.",
        },
        {
          title: "Communication Skills",
          description:
            "Strong interpersonal skills for effective interactions with students and smooth coordination.",
        },
        {
          title: "Organizational Skills",
          description:
            "Ability to manage multiple tasks, prioritize efficiently, and ensure a streamlined distribution process.",
        },
      ],
      formLink: "/register/volunteer",
    },
    {
      id: "events",
      name: "TEAM EVENT MANAGEMENT",
      icon: <Calendar className="w-12 h-12" />,
      color: "from-[#1164A3] to-[#68B9C4]",
      description:
        "Volunteers are encouraged to join the Event Management team at NED Scholars, where they gain hands-on experience in organizing seminars, webinars, and industrial visits. This role includes managing event planning, coordinating guest interactions, and arranging venues to ensure seamless operations. Volunteers handle logistics, AV setups, and necessary equipment to deliver successful events with on-site support. By joining, participants develop valuable leadership and teamwork skills, strengthen their communication and problem-solving abilities, and expand their professional connections. Become part of a collaborative, dynamic team that offers the opportunity to gain practical event management experience and make a meaningful impact on the NED Scholars community.",
      skills: [
        {
          title: "Organizational Skills",
          description:
            "Ability to manage event planning, logistics, and coordination effectively.",
        },
        {
          title: "Communication Skills",
          description:
            "Strong interpersonal skills for coordinating with guests, team members, and vendors.",
        },
        {
          title: "Problem-solving Skills",
          description:
            "Quick thinking to handle on-site issues and ensure smooth event operations.",
        },
        {
          title: "Time Management",
          description:
            "Ability to prioritize tasks and meet event timelines efficiently.",
        },
      ],
      formLink: "#join-events",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1164A3] via-[#68B9C4] to-[#82B4CC] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-4">
              <Users className="w-16 h-16 text-white" />
            </div>
            <Badge className="mb-4 bg-white/20 text-white border-white/30 text-base px-4 py-2">
              Join Our Community
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Volunteer With NED Scholars
            </h1>
            <p className="text-xl text-white/90 mb-4">
              Make a Meaningful Impact Through Your Skills
            </p>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Join one of our specialized teams and contribute to empowering
              students, building communities, and creating lasting change.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Why Volunteer With Us?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              At NED Scholars, volunteers are the backbone of our mission. Each
              team plays a crucial role in supporting students, creating
              impactful content, and building a stronger community. Whether
              you&apos;re a creative designer, tech enthusiast, or compassionate
              helper, there&apos;s a place for you here.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="text-center p-6 hover:shadow-xl hover:border-[#1164A3] transition-all">
                <div className="w-16 h-16 bg-gradient-to-r from-[#1164A3] to-[#68B9C4] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Gain Experience</h3>
                <p className="text-sm text-gray-600">
                  Build valuable skills and enhance your resume
                </p>
              </Card>
              <Card className="text-center p-6 hover:shadow-xl hover:border-[#1164A3] transition-all">
                <div className="w-16 h-16 bg-gradient-to-r from-[#68B9C4] to-[#82B4CC] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Make an Impact</h3>
                <p className="text-sm text-gray-600">
                  Help students achieve their dreams and goals
                </p>
              </Card>
              <Card className="text-center p-6 hover:shadow-xl hover:border-[#1164A3] transition-all">
                <div className="w-16 h-16 bg-gradient-to-r from-[#82B4CC] to-[#B0A3B3] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Build Network</h3>
                <p className="text-sm text-gray-600">
                  Connect with like-minded professionals and students
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Teams Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 text-base bg-[#68B9C4] text-white">Our Teams</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Choose Your Team
              </h2>
              <p className="text-xl text-gray-600">
                Explore our volunteer teams and find the perfect fit for your
                skills and interests
              </p>
            </div>

            <div className="space-y-12">
              {teams.map((team, index) => (
                <Card
                  key={team.id}
                  className="hover:shadow-2xl hover:border-[#1164A3] transition-all duration-300 overflow-hidden"
                >
                  <div className="md:flex">
                    {/* Team Header/Icon Section */}
                    <div
                      className={`bg-gradient-to-br ${team.color} p-8 md:w-1/3 flex flex-col items-center justify-center text-white`}
                    >
                      <div className="mb-4">{team.icon}</div>
                      <h3 className="text-2xl font-bold text-center mb-4">
                        {team.name}
                      </h3>
                      <a
                        href={team.formLink}
                        className="bg-white text-[#1164A3] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 inline-flex items-center"
                      >
                        JOIN OUR TEAM
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </div>

                    {/* Team Content */}
                    <div className="p-8 md:w-2/3">
                      <p className="text-gray-700 leading-relaxed mb-6">
                        {team.description}
                      </p>

                      <div className="border-t border-gray-200 pt-6">
                        <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                          <Sparkles className="w-5 h-5 mr-2 text-[#68B9C4]" />
                          ESSENTIAL SKILLS FOR {team.name}
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {team.skills.map((skill, skillIndex) => (
                            <div
                              key={skillIndex}
                              className="flex items-start space-x-3"
                            >
                              <CheckCircle2 className="w-5 h-5 text-[#68B9C4] flex-shrink-0 mt-0.5" />
                              <div>
                                <p className="font-semibold text-gray-800 text-sm">
                                  {skill.title}:
                                </p>
                                <p className="text-sm text-gray-600">
                                  {skill.description}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-[#1164A3] via-[#68B9C4] to-[#82B4CC] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Choose a team that aligns with your skills and passion, and start
              your volunteer journey with NED Scholars today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button onClick={()=> router.push("/about/team")} className="bg-white text-[#1164A3] px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                View All Teams
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[#1164A3] text-white">Volunteer Benefits</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                What You&apos;ll Gain
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="p-6 text-center hover:shadow-xl hover:border-[#1164A3] transition-all">
                <div className="text-4xl mb-3">🎓</div>
                <h4 className="font-bold text-gray-800 mb-2">
                  Skill Development
                </h4>
                <p className="text-sm text-gray-600">
                  Learn new tools and enhance existing skills
                </p>
              </Card>
              <Card className="p-6 text-center hover:shadow-xl hover:border-[#1164A3] transition-all">
                <div className="text-4xl mb-3">🤝</div>
                <h4 className="font-bold text-gray-800 mb-2">Networking</h4>
                <p className="text-sm text-gray-600">
                  Connect with professionals and peers
                </p>
              </Card>
              <Card className="p-6 text-center hover:shadow-xl hover:border-[#1164A3] transition-all">
                <div className="text-4xl mb-3">📜</div>
                <h4 className="font-bold text-gray-800 mb-2">Certificates</h4>
                <p className="text-sm text-gray-600">
                  Receive recognition for your contributions
                </p>
              </Card>
              <Card className="p-6 text-center hover:shadow-xl hover:border-[#1164A3] transition-all">
                <div className="text-4xl mb-3">💼</div>
                <h4 className="font-bold text-gray-800 mb-2">
                  Portfolio Building
                </h4>
                <p className="text-sm text-gray-600">
                  Showcase real projects and experience
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-2xl bg-gradient-to-r from-[#82B4CC]/20 to-[#B0A3B3]/20 border-l-4 border-[#1164A3]">
              <CardContent className="p-8 md:p-12 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-[#1164A3] to-[#68B9C4] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                  Join Our Growing Community of Volunteers
                </h3>
                <p className="text-lg text-gray-700 mb-8">
                  Whether you have an hour a week or want to dive deep into a
                  project, every contribution matters. Start your journey with
                  NED Scholars today.
                </p>
                <button onClick={()=> router.push("/register/volunteer")} className="bg-gradient-to-r from-[#1164A3] to-[#68B9C4] text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  Start Volunteering Today
                </button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}