'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
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

        {/* HEADER SECTION */}
        <section className="text-center mb-16">
          <h2 className="mb-4 text-sm font-semibold tracking-widest text-indigo-400 uppercase">About Me</h2>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Hello, I’m <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">Quentin Guillaume</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-slate-400 leading-relaxed">
            Get to know my professional background and what drives my passion for building impactful digital products.
          </p>
          <div className="mt-6">
            <a
                href="https://www.linkedin.com/in/quentinguillaume"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium text-slate-300 hover:text-white transition-colors border-b border-indigo-500/50 hover:border-indigo-400 pb-0.5"
            >
                <svg className="w-4 h-4 mr-2 text-indigo-400" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                Connect on LinkedIn
            </a>
          </div>
        </section>

        {/* MAIN PROFILE CARD */}
        <section className="relative p-8 md:p-12 mb-12 border border-slate-800 rounded-3xl bg-slate-900/50 backdrop-blur-sm shadow-2xl shadow-black/20">
            {/* Glow Effect */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="flex flex-col md:flex-row gap-10 items-start">
                {/* Image Column */}
                <div className="flex-shrink-0 mx-auto md:mx-0 relative">
                    <div className="absolute inset-0 bg-indigo-500 blur-2xl opacity-20 rounded-full"></div>
                    <Image
                        src="/images/quentin.jpg"
                        alt="Profile picture of Quentin Guillaume"
                        width={200}
                        height={200}
                        className="relative z-10 object-cover rounded-full border-4 border-slate-800 shadow-xl"
                    />
                </div>

                {/* Content Column */}
                <div className="flex-1 space-y-6 text-slate-300 leading-relaxed">
                    <p>
                        Hello! I’m <strong className="text-white">Quentin Guillaume</strong>, a Creative Developer currently contributing to the growth of{' '}
                        <a href="https://www.applovin.com/" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 font-medium hover:underline decoration-indigo-500/30">
                            AppLovin
                        </a>. I specialize in developing modern web experiences that blend high-quality design with robust functionality.
                    </p>
                    
                    {/* REVISED SECTION: WORDPRESS & COLLABORATION FOCUS */}
                    <p>
                        In my role at AppLovin, I serve as the primary developer for our corporate web presence, with a deep focus on the <strong className="text-indigo-300">WordPress ecosystem</strong>. I collaborate closely with the <strong>marketing, content, and web design teams</strong> to implement pixel-perfect layouts and manage dynamic content updates.
                    </p>
                    <p>
                        I act as the bridge between creative vision and technical implementation. By maintaining a strong design sensibility, I ensure that the assets provided by our designers are translated into responsive, high-performance web pages that support the company's marketing initiatives.
                    </p>
                    {/* END REVISION */}

                    <p>
                        With a strong background in <span className="text-teal-300 font-medium">WordPress Development</span>, <span className="text-teal-300 font-medium">React</span>, <span className="text-teal-300 font-medium">Next.js</span>, and <span className="text-teal-300 font-medium">Tailwind CSS</span>, I’m passionate about creating solutions that are both innovative and intuitive.
                    </p>
                </div>
            </div>
        </section>

        {/* SKILLS & INTERESTS GRID */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            
            {/* Skills Column */}
            <div className="p-8 border border-slate-800 rounded-2xl bg-slate-900/30 hover:bg-slate-900/50 transition-colors">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                    </div>
                    <h2 className="text-xl font-bold text-white">Core Expertise</h2>
                </div>
                
                <div className="space-y-6">
                    <div>
                        <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">Front-End & CMS</h3>
                        <div className="flex flex-wrap gap-2">
                            {/* REORDERED: WordPress First */}
                            {['WordPress', 'React', 'Next.js', 'Tailwind CSS', 'SEO', 'PHP'].map((skill) => (
                                <span key={skill} className="px-3 py-1 text-sm font-medium text-indigo-200 bg-indigo-500/10 border border-indigo-500/20 rounded-full">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                    
                    <div>
                        <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">Back-End & Systems</h3>
                        <div className="flex flex-wrap gap-2">
                            {['Node.js', 'Supabase', 'RESTful APIs', 'Git', 'MySQL'].map((skill) => (
                                <span key={skill} className="px-3 py-1 text-sm font-medium text-slate-300 bg-slate-800 border border-slate-700 rounded-full">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Interests Column */}
            <div className="p-8 border border-slate-800 rounded-2xl bg-slate-900/30 hover:bg-slate-900/50 transition-colors">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-pink-500/10 rounded-lg text-pink-400">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                    </div>
                    <h2 className="text-xl font-bold text-white">Values & Interests</h2>
                </div>
                
                <p className="text-slate-400 leading-relaxed mb-6">
                    Outside of my day-to-day work, I’m passionate about <strong>gaming</strong>, discovering new skills, and <strong>traveling</strong> to explore different cultures and environments.
                </p>
                <p className="text-slate-400 leading-relaxed">
                     I believe this curiosity drives me to continuously learn and adapt both in my personal life and professionally. Whether it’s mastering new technologies or planning my next adventure, I thrive on the excitement of discovery.
                </p>
            </div>

        </div>

        {/* CTA SECTION */}
        <section className="mt-20 mb-12 text-center">
            <h3 className="text-2xl font-bold text-white mb-8">Ready to work together?</h3>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                    href="/projects"
                    className="px-8 py-3 font-semibold text-white transition-all transform bg-indigo-600 rounded-full hover:bg-indigo-700 hover:scale-105 shadow-lg shadow-indigo-500/25"
                >
                    View My Projects
                </Link>
                <a
                    href="mailto:contact@quentinguillaume.com"
                    className="px-8 py-3 font-semibold text-slate-300 transition-colors border border-slate-700 rounded-full hover:bg-slate-800 hover:text-white"
                >
                    Get In Touch
                </a>
            </div>
        </section>

      </div>
    </main>
  );
}