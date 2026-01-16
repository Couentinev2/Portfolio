'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-slate-950 text-slate-200 selection:bg-indigo-500/30">
      
      {/* BACKGROUND GRID PATTERN */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      {/* HERO SECTION */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-[90vh] px-6 text-center">
        {/* Availability Badge */}
        <div className="mb-8 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm font-medium animate-fade-in-up">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          Available for new projects
        </div>

        <h1 className="max-w-4xl mx-auto mb-6 text-5xl font-bold tracking-tight sm:text-7xl">
          Quentin Guillaume
          <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 leading-tight">
            Creative Engineer.
          </span>
        </h1>
        
        <p className="max-w-2xl mx-auto mb-10 text-lg text-slate-400 sm:text-xl leading-relaxed">
          I build thoughtful digital experiences that merge technical precision with creative design.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/projects"
            className="px-8 py-4 font-semibold text-white transition-all transform bg-indigo-600 rounded-full hover:bg-indigo-700 hover:scale-105 shadow-[0_0_20px_-5px_rgba(79,70,229,0.5)]"
          >
            View Projects
          </Link>
          <Link
            href="mailto:contact@quentinguillaume.com"
            className="px-8 py-4 font-semibold text-slate-300 transition-colors border border-slate-700 rounded-full hover:bg-slate-800 hover:text-white"
          >
            Contact Me
          </Link>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="relative z-10 max-w-6xl px-6 py-24 mx-auto">
        <div className="flex items-end justify-between mb-16">
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
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          
          {/* Project 1 */}
          <div className="group relative flex flex-col overflow-hidden transition-all duration-300 border border-slate-800 rounded-2xl bg-slate-900/50 hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/10">
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
          </div>

          {/* Project 2 */}
          <div className="group relative flex flex-col overflow-hidden transition-all duration-300 border border-slate-800 rounded-2xl bg-slate-900/50 hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/10">
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
          </div>

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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="relative z-10 px-6 text-center">
          <h2 className="mb-6 text-4xl font-bold text-white sm:text-5xl">Let’s build something <br/> exceptional.</h2>
          <p className="max-w-xl mx-auto mb-10 text-lg text-slate-400">
            Whether you have a specific idea or just want to say hi, my inbox is always open.
          </p>
          <a
            href="mailto:contact@quentinguillaume.com"
            className="inline-block px-8 py-4 font-semibold text-indigo-950 transition bg-white rounded-full hover:bg-indigo-50 hover:scale-105"
          >
            Get In Touch
          </a>
        </div>
      </section>
    </main>
  );
}