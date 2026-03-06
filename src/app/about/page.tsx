"use client";

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { memorialScholarships, milestones, values } from '@/data/AboutData';
import { stats } from '@/data/AboutData';
import CustomCard from '@/components/Card';
import StatCard from '@/components/Stats';
import { useRouter } from 'next/navigation';
import {
  TrendingUp,
  Globe,
  Users,
  BookOpen,
  Heart,
  Award,
  Star,
  Lightbulb,
  GraduationCap,
  HandHeart,
  ArrowRight,
  User,
} from 'lucide-react';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);
const milestoneIcons = [
  <User key={0} className="w-10 h-10 text-white" />,
  <TrendingUp key={1} className="w-10 h-10 text-white" />,
  <Heart key={2} className="w-10 h-10 text-white" />,
  <Globe key={3} className="w-10 h-10 text-white" />,
  <Users key={4} className="w-10 h-10 text-white" />,
  <Award key={5} className="w-10 h-10 text-white" />,
  <Star key={6} className="w-10 h-10 text-white" />,
  <Lightbulb key={7} className="w-10 h-10 text-white" />,
];

const MilestoneCard: React.FC<{ milestone: typeof milestones[0]; index: number }> = ({ milestone, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (card) {
      gsap.set(card, { opacity: 0, x: index % 2 === 0 ? -100 : 100 });

      gsap.to(card, {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: index * 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });

      const handleMouseEnter = () => {
        gsap.to(card, { scale: 1.05, duration: 0.3, ease: "power2.out" });
      };

      const handleMouseLeave = () => {
        gsap.to(card, { scale: 1, duration: 0.3, ease: "power2.out" });
      };

      card.addEventListener('mouseenter', handleMouseEnter);
      card.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        card.removeEventListener('mouseenter', handleMouseEnter);
        card.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [index]);

  return (
    <div ref={cardRef} className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} mb-16`}>
      <div className="flex-shrink-0">
        <div className="w-24 h-24 bg-gradient-to-r from-[#1164A3] to-[#68B9C4] rounded-full flex items-center justify-center shadow-lg">
          {milestoneIcons[index % milestoneIcons.length]}
        </div>
        <div className="text-center mt-4">
          <span className="text-2xl font-bold text-[#1164A3]">{milestone.year}</span>
        </div>
      </div>
      <div className="flex-1 bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#1164A3]">
        <h3 className="text-2xl font-bold text-gray-800 mb-3">{milestone.title}</h3>
        <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
      </div>
    </div>
  );
};

const About: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const journeyTitleRef = useRef<HTMLHeadingElement>(null);
  const missionTextRef = useRef<HTMLDivElement>(null);
  const challengeTextRef = useRef<HTMLDivElement>(null);
  const scholarsRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (heroRef.current) {
      const heroElements = heroRef.current.children;
      gsap.set(heroElements, { opacity: 0, y: 50 });
      gsap.to(heroElements, {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out"
      });
    }

    const animateTitle = (element: HTMLElement | null) => {
      if (element) {
        gsap.fromTo(element,
          { opacity: 0, y: 50 },
          {
            opacity: 1, y: 0, duration: 0.8, ease: "power2.out",
            scrollTrigger: { trigger: element, start: "top 80%", toggleActions: "play none none reverse" }
          }
        );
      }
    };

    const animateTextSection = (element: HTMLElement | null) => {
      if (element) {
        gsap.fromTo(element,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, duration: 0.8, ease: "power2.out",
            scrollTrigger: { trigger: element, start: "top 80%", toggleActions: "play none none reverse" }
          }
        );
      }
    };

    animateTitle(journeyTitleRef.current);
    animateTextSection(missionTextRef.current);
    animateTextSection(challengeTextRef.current);
    animateTextSection(scholarsRef.current);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-[#82B4CC]/10">

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1164A3] via-[#68B9C4] to-[#82B4CC] text-white py-20">
        <div className="max-w-6xl mx-auto px-5 text-center">
          <div ref={heroRef}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-shadow-lg">About NED Scholars</h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto text-shadow-lg">
              Cultivating Talent by Leveling Fields
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              {stats.map((stat, index) => (
                <StatCard key={stat.label} stat={stat} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Belief & Vision */}
      <section className="py-20 bg-white">
  <div className="max-w-6xl mx-auto px-5">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

      {/* Left - Text Content */}
      <div className="space-y-12">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-7 h-7 text-[#1164A3]" />
            <h2 className="text-4xl font-bold text-gray-800">Our Belief</h2>
          </div>
          <blockquote className="text-xl italic text-[#1164A3] font-semibold border-l-4 border-[#68B9C4] pl-4 mb-6">
            &quot;A single person with the right education can change the life of an entire family.&quot;
          </blockquote>
          <p className="text-gray-600 leading-relaxed">
            Education has the power to rewrite destinies. One empowered learner can uplift siblings,
            support parents, and inspire entire communities. At NED Scholars, we see every student
            not just as an individual, but as a future catalyst for change.
          </p>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-4">
            <Lightbulb className="w-7 h-7 text-[#1164A3]" />
            <h2 className="text-4xl font-bold text-gray-800">Our Vision</h2>
          </div>
          <blockquote className="text-xl italic text-[#1164A3] font-semibold border-l-4 border-[#68B9C4] pl-4 mb-6">
            &quot;We envision a world where equal opportunity in education is a reality, not a privilege.&quot;
          </blockquote>
          <p className="text-gray-600 leading-relaxed">
            By investing in individuals and cultivating their potential, we create lasting
            impact—uplifting families, strengthening communities, and building a more equitable and
            skilled society.
          </p>
        </div>
      </div>

      {/* Right - Stacked Image Collage */}
      <div className="relative h-[520px] hidden lg:block">

        {/* Top-right image */}
        <div className="absolute top-0 right-0 w-[58%] h-[48%] rounded-2xl overflow-hidden shadow-xl z-10">
          <img
            src="/images/belief-1.jpg"
            alt="Graduate with family"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Middle-left image */}
        <div className="absolute top-[26%] left-0 w-[62%] h-[44%] rounded-2xl overflow-hidden shadow-xl z-20">
          <img
            src="/images/belief-2.jpg"
            alt="Scholar in graduation gown"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bottom-right image */}
        <div className="absolute bottom-0 right-0 w-[55%] h-[36%] rounded-2xl overflow-hidden shadow-xl z-10">
          <img
            src="/images/belief-3.jpg"
            alt="Scholars with their families"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Decorative background dot pattern */}
        <div className="absolute -bottom-4 -left-4 w-28 h-28 rounded-full bg-[#68B9C4]/20 -z-10" />
        <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-[#1164A3]/10 -z-10" />
      </div>

    </div>
  </div>
</section>

      {/* Who We Are */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-[#82B4CC]/10">
  <div className="max-w-6xl mx-auto px-5">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      
      {/* Left - Image */}
      <div className="relative">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="/images/who-we-are.jpg"
            alt="NED Scholars community"
            className="w-full h-[480px] object-cover"
          />
        </div>
      </div>

      {/* Right - Content */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <Users className="w-8 h-8 text-[#1164A3]" />
          <h2 className="text-4xl font-bold text-gray-800">Who We Are</h2>
        </div>

        <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
          <p>
            <strong className="text-gray-800">NED Scholars</strong> is a non-profit corporation
            operating exclusively for educational and charitable purposes within the meaning of{" "}
            <strong className="text-[#1164A3]">
              Section 501(c)(3) of the Internal Revenue Code
            </strong>
            .
          </p>
          <p>
            We provide{" "}
            <strong className="text-[#1164A3]">need-cum-merit based financial assistance</strong> to
            deserving students pursuing Bachelor&apos;s level education in{" "}
            <strong className="text-gray-800">
              Science, Technology, Engineering, and Mathematics (STEM)
            </strong>
            . Our support extends beyond scholarships to include mentorship, internships, training,
            career guidance, and personal development, enabling students to thrive academically and
            professionally.
          </p>
        </div>

        {/* Accent stat pills */}
        <div className="flex flex-wrap gap-3 mt-8">
          {[
            { icon: <GraduationCap className="w-4 h-4" />, label: "STEM Focused" },
            { icon: <Globe className="w-4 h-4" />, label: "Pakistan & USA" },
            { icon: <Heart className="w-4 h-4" />, label: "501(c)(3) Nonprofit" },
            { icon: <HandHeart className="w-4 h-4" />, label: "Need-cum-Merit" },
          ].map((pill) => (
            <span
              key={pill.label}
              className="flex items-center gap-2 bg-white border border-[#82B4CC]/40 text-[#1164A3] text-sm font-medium px-4 py-2 rounded-full shadow-sm"
            >
              {pill.icon}
              {pill.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Our Journey Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <h2 ref={journeyTitleRef} className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800">
            Our Journey
          </h2>
          <p className="text-xl text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Where it all began — A timeline of growth, expansion, and impact
          </p>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#1164A3] to-[#68B9C4] rounded-full hidden md:block"></div>
            {milestones.map((milestone, index) => (
              <MilestoneCard key={milestone.year} milestone={milestone} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Memorial Scholarships */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-[#82B4CC]/10">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Heart className="w-8 h-8 text-[#1164A3]" />
              <h2 className="text-4xl font-bold text-gray-800">Memorial Scholarships</h2>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              NED Scholars began in 2007 as a sincere act of giving back by a small group of alumni from NED University&apos;s Mechanical Engineering Batch of 1980–1981 (NEDians). The initiative was originally established to honor the memory of departed friends through named scholarships.
            </p>
          </div>

          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
            What began as support for students within NED University&apos;s Mechanical Engineering Department gradually expanded in scope. Today, NED Scholars supports deserving STEM students across Pakistan and the USA, helping talented individuals overcome financial and social barriers to higher education.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {memorialScholarships.map((scholarship) => (
              <div key={scholarship.name} className="bg-white p-6 rounded-xl shadow-lg text-center border border-[#82B4CC]/30 hover:shadow-xl hover:border-[#1164A3] transition-all duration-300">
                <Heart className="w-6 h-6 text-[#1164A3] mx-auto mb-3" />
                <h3 className="font-semibold text-gray-800">{scholarship.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Are Our Scholars */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <div ref={scholarsRef}>
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="w-8 h-8 text-[#1164A3]" />
              <h2 className="text-4xl font-bold text-gray-800">Who Are Our Scholars?</h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
              We proudly call our scholarship recipients <strong className="text-[#1164A3]">Scholars</strong> — because they represent not only academic promise, but determination, resilience, and potential for leadership.
            </p>
            <p className="text-gray-700 font-semibold mb-4">Most of our scholars are:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[
                { icon: <Star className="w-6 h-6 text-[#1164A3]" />, text: "The first in their families to attend a university offering STEM education" },
                { icon: <Users className="w-6 h-6 text-[#1164A3]" />, text: "From lower-middle-income or underprivileged backgrounds" },
                { icon: <TrendingUp className="w-6 h-6 text-[#1164A3]" />, text: "Facing challenges such as limited financial resources, low exposure, and reduced self-confidence" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-5 bg-gradient-to-br from-slate-50 to-[#82B4CC]/10 rounded-xl border border-[#82B4CC]/30">
                  <div className="flex-shrink-0 mt-1">{item.icon}</div>
                  <p className="text-gray-600 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-600 leading-relaxed">
              Our support goes beyond financial assistance. We actively nurture the personal and professional growth of our scholars through mentorship, training, and community engagement. Scholars are regularly involved in volunteering and outreach activities to cultivate a strong spirit of giving back to society. Many of the organization&apos;s events, initiatives, and programs are planned and led by our student body and scholars themselves — fostering leadership, ownership, and a sustainable cycle of impact.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Challenge */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-[#82B4CC]/10">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div ref={missionTextRef}>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">Our Mission</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Originally known as the MECH 80-81 ALUMNI Scholarship, NED Scholars was started by a small group of NEDians from the Mechanical Engineering Batch 80-81 in 2007. Under the program, scholarships are awarded on a &quot;need-cum-merit&quot; basis to deserving students.
                </p>
                <p>
                  Since 2015, we have opened the scholarship to students from various countries in STEM (Science Technology Engineering and Math) education. Currently we are entertaining applicants from Pakistan and USA on need-cum-merit basis.
                </p>
                <p>
                  What makes scholarships by NED Scholars different is the mentorship that is provided to these scholars. Scholars are encouraged to communicate directly with the NED Alumni group, with at least one alumni contacting them throughout the academic year.
                </p>
              </div>
            </div>

            <div ref={challengeTextRef}>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">The Challenge We Address</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  We are living in a world that is supposed to be &quot;flat&quot;, providing equal opportunities to all. But in reality, the model fails in academics, especially when we talk about a society with &quot;class segregation&quot; as in Pakistan.
                </p>
                <p>
                  With the advent and introduction of computers and the Internet, the &quot;competition field for success&quot; is not flat any more, but rather tilted. It is tilted towards students who have access to personal computers, high-speed Internet, and modern learning resources.
                </p>
                <p>
                  NED Scholars is an effort to support students on a &quot;need-cum-merit&quot; basis, in an effort to create a level field for them to compete. These scholars come from lower middle class and poor families, lacking in resources, professionalism, self-esteem, and motivation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide our mission and shape our impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <CustomCard key={value.title} value={value} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Support Us / Call to Action */}
      <section className="py-20 bg-gradient-to-r from-[#1164A3] to-[#68B9C4] text-white">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <h2 className="text-4xl font-bold">Support Us | Donate to Promote STEM Education</h2>
          </div>
          <p className="text-xl mb-8 opacity-90">
            Education has the power to transform lives—but it requires collective effort.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-10 text-left">
            {[
              "Level the playing field for deserving students",
              "Promote STEM education among underprivileged communities",
              "Empower future engineers, scientists, technologists, and leaders",
              "Create long-term, generational impact",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-white/10 rounded-lg p-3">
                <ArrowRight className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                <span className="text-white opacity-90 text-sm">{item}</span>
              </div>
            ))}
          </div>

          <p className="text-lg opacity-90 mb-8">
            Your support enables us to cultivate talent, unlock potential, and build a stronger future—one scholar at a time.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => { router.push("/donate"); }}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-[#1164A3] transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
            >
              Donate Now
            </button>
            <button
              onClick={() => { router.push("/register/mentor"); }}
              className="bg-white text-[#1164A3] px-8 py-4 rounded-full font-bold hover:bg-[#82B4CC] hover:text-white transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
            >
              Become a Mentor
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;