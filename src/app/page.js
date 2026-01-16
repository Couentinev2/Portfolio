'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

// ANIMATION VARIANTS
// Keeping these outside the component prevents re-creation on every render
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Delay between each child animation
      delayChildren: 0.3,
    }
  }
};

const hoverCard = {
  hover: { 
    y: -10, // Lift up
    transition: { duration: 0.3 } 
  }
};

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-slate-950 text-slate-200 selection:bg-indigo-500/30 overflow-hidden">
      
      {/* BACKGROUND GRID PATTERN (Static background is fine, let's just animate opacity on load) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="fixed inset-0 z-0 pointer-events-none"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </motion.div>

      {/* HERO SECTION */}
      <motion.section 
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center justify-center min-h-[90vh] px-6 text-center"
      >
        {/* Availability Badge */}
        <motion.div variants={fadeInUp} className="mb-8 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm font-medium">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          Available for new projects
        </motion.div>

        <motion.h1 variants={fadeInUp} className="max-w-4xl mx-auto mb-6 text-5xl font-bold tracking-tight sm:text-7xl">
          Quentin Guillaume
          <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 leading-tight">
            Creative Engineer.
          </span>
        </motion.h1>
        
        <motion.p variants={fadeInUp} className="max-w-2xl mx-auto mb-10 text-lg text-slate-400 sm:text-xl leading-relaxed">
          I build thoughtful digital experiences that merge technical precision with creative design.
        </motion.p>

        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/projects"
              className="px-8 py-4 font-semibold text-white transition-all bg-indigo-600 rounded-full hover:bg-indigo-700 shadow-[0_0_20px_-5px_rgba(79,70,229,0.5)] block"
            >
              View Projects
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="mailto:contact@quentinguillaume.com"
              className="px-8 py-4 font-semibold text-slate-300 transition-colors border border-slate-700 rounded-full hover:bg-slate-800 hover:text-white block"
            >
              Contact Me
            </Link>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* FEATURED PROJECTS */}
      <section className="relative z-10 max-w-6xl px-6 py-24 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-16"
        >
          <div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Selected Work</h2>
            <p className="mt-2 text-slate-400">Recent projects and experiments.</p>
          </div>
          <Link 
            href="/projects" 
            className="hidden text-indigo-400 hover:text-indigo-300 hover:underline sm:block"
          >
            View all &rarr;
          </Link>
        </motion.div>

        <div className="grid gap-10 md:grid-cols-2">
          
          {/* Project 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover="hover"
            variants={hoverCard}
            className="group relative flex flex-col overflow-hidden border border-slate-800 rounded-2xl bg-slate-900/50"
          >
            <div className="relative overflow-hidden aspect-video">
              <Image
                src="/images/Generic_Applovin.jpg"
                alt="AppLovin Project"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent opacity-60"></div>
            </div>
            
            <div className="flex flex-col flex-1 p-6 sm:p-8">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 text-xs font-medium text-teal-300 rounded-full bg-teal-400/10">Web Development</span>
                <span className="px-3 py-1 text-xs font-medium text-indigo-300 rounded-full bg-indigo-400/10">CMS Architecture</span>
              </div>
              
              <h3 className="mb-2 text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                AppLovin Websites
              </h3>
              <p className="flex-1 mb-6 text-slate-400 leading-relaxed">
                Designed and developed the entire web ecosystem. Built reusable components and custom fields empowering the marketing team to manage content efficiently.
              </p>
              
              <a
                href="https://www.applovin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-semibold text-white transition-colors hover:text-indigo-400"
              >
                Visit Website 
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Project 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover="hover"
            variants={hoverCard}
            className="group relative flex flex-col overflow-hidden border border-slate-800 rounded-2xl bg-slate-900/50"
          >
            <div className="relative overflow-hidden aspect-video">
              <Image
                src="/images/jobscroller-preview.png"
                alt="JobScroller Project"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent opacity-60"></div>
            </div>
            
            <div className="flex flex-col flex-1 p-6 sm:p-8">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 text-xs font-medium text-pink-300 rounded-full bg-pink-400/10">SaaS</span>
                <span className="px-3 py-1 text-xs font-medium text-indigo-300 rounded-full bg-indigo-400/10">Automation</span>
              </div>
              
              <h3 className="mb-2 text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                JobScroller
              </h3>
              <p className="flex-1 mb-6 text-slate-400 leading-relaxed">
                A personalized job discovery tool that curates tech listings. Features auto-extraction of role details and application tracking to organize the hunt.
              </p>
              
              <a
                href="https://www.jobscroller.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-semibold text-white transition-colors hover:text-indigo-400"
              >
                View Project
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </motion.div>

        </div>

        <div className="mt-12 text-center sm:hidden">
            <Link href="/projects" className="block w-full px-6 py-3 font-semibold text-center text-slate-300 border border-slate-800 rounded-lg hover:bg-slate-800">
              View All Projects
            </Link>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative py-24 mt-12 overflow-hidden">
        {/* Background glow effect */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2] 
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[100px] pointer-events-none"
        ></motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 px-6 text-center"
        >
          <h2 className="mb-6 text-4xl font-bold text-white sm:text-5xl">Let’s build something <br/> exceptional.</h2>
          <p className="max-w-xl mx-auto mb-10 text-lg text-slate-400">
            Whether you have a specific idea or just want to say hi, my inbox is always open.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:contact@quentinguillaume.com"
            className="inline-block px-8 py-4 font-semibold text-indigo-950 transition bg-white rounded-full hover:bg-indigo-50"
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </section>
    </main>
  );
}