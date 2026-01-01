"use client";


import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { memorialScholarships, milestones, values } from '@/data/AboutData';
import { stats } from '@/data/AboutData';
import CustomCard from '@/components/Card';
import StatCard from '@/components/Stats';
import { useRouter } from 'next/navigation';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);



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

      // Hover animation
      const handleMouseEnter = () => {
        gsap.to(card, {
          scale: 1.05,
          duration: 0.3,
          ease: "power2.out"
        });
      };

      const handleMouseLeave = () => {
        gsap.to(card, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out"
        });
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
        <div className="w-24 h-24 bg-gradient-to-r from-[#1164A3] to-[#68B9C4] rounded-full flex items-center justify-center text-white text-3xl shadow-lg">
          {milestone.icon}
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
  const router = useRouter();

  useEffect(() => {
    // Hero animation
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

    // Section titles
    const animateTitle = (element: HTMLElement | null) => {
      if (element) {
        gsap.fromTo(element,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    };

    animateTitle(journeyTitleRef.current);

    // Text sections animations
    const animateTextSection = (element: HTMLElement | null) => {
      if (element) {
        gsap.fromTo(element,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    };

    animateTextSection(missionTextRef.current);
    animateTextSection(challengeTextRef.current);

  }, []);

  return (

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-[#82B4CC]/10">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#1164A3] via-[#68B9C4] to-[#82B4CC] text-white py-20">
          <div className="max-w-6xl mx-auto px-5 text-center">
            <div ref={heroRef}>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-shadow-lg">About NED Scholars</h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto text-shadow-lg">
                Empowering dreams, creating opportunities, and building the future of STEM education since 2007
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
                {stats.map((stat, index) => (
                  <StatCard key={stat.label} stat={stat} index={index} />
                ))}
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
              Where it all began - A timeline of growth, expansion, and impact
            </p>
            
            <div className="relative">
              {/* Timeline line */}
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
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-gray-800">Memorial Scholarships</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Honoring the memory of our beloved friends through educational opportunities
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {memorialScholarships.map((scholarship) => (
                <div key={scholarship.name} className="bg-white p-6 rounded-xl shadow-lg text-center border border-[#82B4CC]/30 hover:shadow-xl hover:border-[#1164A3] transition-all duration-300">
                  <h3 className="font-semibold text-gray-800">{scholarship.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Challenge */}
        <section className="py-20 bg-white">
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

        {/* Our Values */}
        <section className="py-20 bg-gradient-to-br from-[#82B4CC]/10 to-[#B0A3B3]/10">
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

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-[#1164A3] to-[#68B9C4] text-white">
          <div className="max-w-4xl mx-auto px-5 text-center">
            <h2 className="text-4xl font-bold mb-6">Join Our Mission</h2>
            <p className="text-xl mb-8 opacity-90">
              Help us continue leveling the playing field for talented students who need support to reach their full potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={()=>{router.push("/donation")}} className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-[#1164A3] transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                Donate Now
              </button>
              <button onClick={()=>{router.push("/register/mentor")}} className="bg-white text-[#1164A3] px-8 py-4 rounded-full font-bold hover:bg-[#82B4CC] hover:text-white transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                Become a Mentor
              </button>
            </div>
          </div>
        </section>
      </div>
  );
};

export default About;