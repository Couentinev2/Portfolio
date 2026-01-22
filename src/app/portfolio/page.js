'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion'; // 1. Import Framer Motion

export default function ProjectsPage() {
  const projects = [
    {
      title: 'JobScroller',
      subtitle: 'Smarter Job Discovery',
      tags: ['NextJS', 'Supabase', 'Tailwind', 'AI/LLM'],
      description: `JobScroller is a personalized job discovery tool that curates tech job listings from company career pages. I built it from the ground up using NextJS, Supabase, and Ollama. It’s fast, lightweight, and ideal for anyone tired of traditional job boards.`,
      link: 'https://www.jobscroller.net/',
      isInternal: false,
    },
    {
      title: 'AppLovin',
      subtitle: 'Corporate Website Architecture',
      tags: ['Web Architecture', 'CMS', 'React', 'Performance'],
      description: `I was responsible for designing and developing the entire website ecosystem. I built reusable components and custom fields to empower the marketing team to manage and update content efficiently while adhering to strict performance standards.`,
      link: 'https://www.applovin.com/',
      isInternal: false,
    },
    {
      title: 'BadgeList',
      subtitle: 'Backend Systems',
      tags: ['Backend', 'Database Optimization', 'API Design'],
      description: `As a backend developer, I ensured the stability and scalability of the platform by managing infrastructure and optimizing database performance. My work included API development and system integrations.`,
      link: 'https://badgelist.com/',
      isInternal: false,
    },
    {
      title: 'Travel Helper',
      subtitle: 'AI Trip Planner',
      tags: ['OpenAI API', 'React', 'UX Design'],
      description: `I designed and implemented key features, including an AI-powered trip advisor using the OpenAI API, and built a responsive interface with robust backend integration to make trip planning easier.`,
      link: '/travel',
      isInternal: true, 
    },
  ];

  // 2. Define the animation variant for reuse
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  return (
    <main className="w-full min-h-screen bg-slate-950 text-slate-200 selection:bg-indigo-500/30">
      
      {/* BACKGROUND GRID PATTERN */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        
        {/* NAV BACK */}
        <div className="mb-12">
            <Link href="/" className="inline-flex items-center text-sm text-slate-400 hover:text-indigo-400 transition-colors">
                <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Home
            </Link>
        </div>

        {/* HEADER - Added a simple fade in here too */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Works</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-slate-400">
            A collection of professional roles, side projects, and technical experiments.
          </p>
        </motion.section>

        {/* FEATURED ROLE: APPLOVIN */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
            <div className="relative overflow-hidden border border-slate-800 rounded-3xl bg-slate-900/50 backdrop-blur-sm">
                <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
                
                <div className="grid items-center grid-cols-1 md:grid-cols-2">
                    <div className="p-8 sm:p-12 order-2 md:order-1">
                        <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-indigo-300 uppercase bg-indigo-500/10 rounded-full">
                            Previous Role
                        </div>
                        <h2 className="mb-4 text-3xl font-bold text-white">Full Stack at AppLovin</h2>
                        <p className="mb-6 text-slate-400 leading-relaxed">
                            I was proud to be part of the team at AppLovin, a leading marketing platform. 
                            My role involved building innovative solutions that connected advertisers with high-quality audiences.
                            I collaborated with engineers, designers, and product managers to deliver a seamless experience.
                        </p>
                        <a
                            href="https://www.applovin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center font-semibold text-indigo-400 transition hover:text-indigo-300"
                        >
                            Visit AppLovin 
                            <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>
                    
                    {/* Logo Area */}
                    <div className="flex items-center justify-center p-12 bg-white/5 order-1 md:order-2 h-full min-h-[300px]">
                        <div className="relative p-8 bg-white rounded-2xl shadow-xl shadow-indigo-500/10">
                            <Image
                                src="/images/events_sponsors_trim_1017.png"
                                alt="AppLovin Logo"
                                width={240}
                                height={80}
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>

        {/* PROJECTS GRID */}
        <section>
          <h2 className="mb-10 text-2xl font-bold text-white border-b border-slate-800 pb-4">
            Project Archive
          </h2>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
            {projects.map((proj, i) => (
              <motion.article
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }} // Triggers when 50px of element is in view
                variants={cardVariants}
                className="group relative flex flex-col p-6 sm:p-8 transition-colors duration-300 bg-slate-900/40 border border-slate-800 rounded-2xl hover:bg-slate-900/80 hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/10"
              >
                <div className="flex flex-wrap gap-2 mb-4">
                    {proj.tags.map((tag, t) => (
                        <span key={t} className="px-2.5 py-1 text-xs font-medium text-slate-300 bg-slate-800 rounded-md border border-slate-700">
                            {tag}
                        </span>
                    ))}
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                    {proj.title}
                </h3>
                <p className="text-sm text-indigo-200/60 mb-4 font-medium">
                    {proj.subtitle}
                </p>
                
                <p className="text-slate-400 mb-6 leading-relaxed flex-grow">
                    {proj.description}
                </p>

                <div className="mt-auto">
                    {proj.isInternal ? (
                        <Link 
                            href={proj.link}
                            className="inline-flex items-center text-sm font-semibold text-white transition-colors group-hover:text-indigo-400"
                        >
                            View Details &rarr;
                        </Link>
                    ) : (
                        <a
                            href={proj.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-sm font-semibold text-white transition-colors group-hover:text-indigo-400"
                        >
                            View Project 
                            <svg className="w-3 h-3 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                    )}
                </div>
              </motion.article>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-24 mb-12 text-center">
            <h3 className="text-2xl font-bold text-white mb-6">Interested in collaborating?</h3>
            <a
              href="mailto:contact@quentinguillaume.com"
              className="inline-block px-8 py-4 font-semibold text-indigo-950 transition bg-white rounded-full hover:bg-indigo-50 hover:scale-105"
            >
              Contact Me
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}