'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

// ANIMATION VARIANTS
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    }
  }
};

const hoverCard = {
  hover: { 
    y: -5,
    transition: { duration: 0.3, ease: "easeInOut" } 
  }
};

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-slate-950 text-slate-200 selection:bg-indigo-500/30 overflow-hidden font-sans leading-relaxed">
      
      {/* BACKGROUND ELEMENTS */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      {/* HERO SECTION */}
      <motion.section 
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center justify-center min-h-[90vh] px-6 text-center"
      >
        {/* Location & Availability Badge */}
        <motion.div variants={fadeInUp} className="mb-8 flex items-center gap-3">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-300 text-xs font-medium tracking-wide">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Available for work
            </div>
            <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full border border-slate-700/50 bg-slate-800/30 text-slate-400 text-xs font-medium">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                San Francisco, CA
            </div>
        </motion.div>

        <motion.h1 variants={fadeInUp} className="max-w-4xl mx-auto mb-6 text-5xl font-bold tracking-tight sm:text-7xl leading-relaxed">
          Quentin Guillaume
          <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 leading-relaxed">
            Creative Engineer.
          </span>
        </motion.h1>
        
        <motion.p variants={fadeInUp} className="max-w-2xl mx-auto mb-10 text-lg text-slate-400 sm:text-xl leading-relaxed">
          I build high-performance web applications and digital experiences. <br className="hidden sm:block"/>
          Focusing on <span className="text-slate-200">Next.js</span>, <span className="text-slate-200">TypeScript</span>, and <span className="text-slate-200">User Growth</span>.
        </motion.p>

        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/projects"
              className="px-8 py-4 font-semibold text-white transition-all bg-indigo-600 rounded-full hover:bg-indigo-700 shadow-[0_0_20px_-5px_rgba(79,70,229,0.5)] block"
            >
              View Selected Work
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
      <section className="relative z-10 max-w-7xl px-6 py-24 mx-auto leading-relaxed">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-16 border-b border-slate-800 pb-8"
        >
          <div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Featured Projects</h2>
            <p className="mt-2 text-slate-400">Engineering, Design, and Growth.</p>
          </div>
          <Link href="/portfolio" className="hidden text-indigo-400 hover:text-indigo-300 hover:underline sm:block">
            View all &rarr;
          </Link>
        </motion.div>

        {/* PROJECT GRID */}
        {/* Changed lg:grid-cols-3 to lg:grid-cols-2 since we only have 2 items now, making them centered/balanced */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          
          {/* Project 1: AppLovin */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover="hover"
            variants={hoverCard}
            className="group flex flex-col bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden hover:border-indigo-500/50 transition-colors"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src="/images/Generic_Applovin.jpg"
                alt="AppLovin Project"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />
            </div>
            
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">AppLovin Marketing Engine</h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed flex-1">
                Engineered the core marketing websites for a major ad-tech platform. Built a custom component library that reduced the marketing team's content update time by 40%.
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="px-2 py-1 text-[10px] uppercase tracking-wider font-semibold text-slate-300 bg-slate-800 rounded">PHP</span>
                <span className="px-2 py-1 text-[10px] uppercase tracking-wider font-semibold text-slate-300 bg-slate-800 rounded">JavaScript</span>
                <span className="px-2 py-1 text-[10px] uppercase tracking-wider font-semibold text-slate-300 bg-slate-800 rounded">WordPress API</span>
              </div>
            </div>
          </motion.div>

          {/* Project 2: JobScroller */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover="hover"
            variants={hoverCard}
            className="group flex flex-col bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden hover:border-indigo-500/50 transition-colors"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src="/images/jobscroller-preview.png"
                alt="JobScroller SaaS"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />
            </div>
            
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">JobScroller SaaS</h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed flex-1">
                A personalized job discovery platform. Features automated role extraction, application tracking, and a custom dashboard to organize the job hunt without the noise.
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="px-2 py-1 text-[10px] uppercase tracking-wider font-semibold text-indigo-200 bg-indigo-900/40 rounded border border-indigo-500/30">Next.js 14</span>
                <span className="px-2 py-1 text-[10px] uppercase tracking-wider font-semibold text-indigo-200 bg-indigo-900/40 rounded border border-indigo-500/30">Supabase</span>
                <span className="px-2 py-1 text-[10px] uppercase tracking-wider font-semibold text-indigo-200 bg-indigo-900/40 rounded border border-indigo-500/30">TypeScript</span>
              </div>
              
            </div>
          </motion.div>
        </div>

        <div className="mt-12 text-center sm:hidden">
            <Link href="/portfolio" className="block w-full px-6 py-3 font-semibold text-center text-slate-300 border border-slate-800 rounded-lg hover:bg-slate-800">
              View All Projects
            </Link>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative py-24 mt-12 overflow-hidden border-t border-slate-800/50">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1] 
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-[120px] pointer-events-none"
        ></motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 px-6 text-center"
        >
          <h2 className="mb-6 text-4xl font-bold text-white sm:text-5xl">Ready to collaborate?</h2>
          <p className="max-w-xl mx-auto mb-10 text-lg text-slate-400">
            Currently based in San Francisco and open to new opportunities. Let's build something exceptional together.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:contact@quentinguillaume.com"
            className="inline-block px-8 py-4 font-semibold text-indigo-950 transition bg-white rounded-full hover:bg-indigo-50 shadow-lg shadow-indigo-500/20"
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </section>
    </main>
  );
}