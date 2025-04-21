'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="w-full min-h-screen text-gray-800 bg-white scroll-smooth">
      {/* HERO SECTION */}
      <section className="relative flex items-center justify-center px-6 py-32 text-white bg-gradient-to-br from-indigo-600 to-purple-600">
        <div className="absolute inset-0 bg-[url('/images/hero-bg.png')] bg-cover bg-center opacity-10 pointer-events-none"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="mb-6 text-5xl font-extrabold leading-tight sm:text-6xl">
            Quentin Guillaume
          </h1>
          <p className="mb-8 text-lg sm:text-xl text-white/90">
            Web Developer & Creative Engineer building thoughtful digital experiences.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/projects"
              className="px-6 py-3 font-semibold text-indigo-600 transition bg-white rounded-full hover:bg-gray-100"
            >
              View Projects
            </Link>
            <Link
          href="mailto:contact@quentinguillaume.com"
          className="px-6 py-3 font-semibold text-white transition border border-white rounded-full hover:bg-white hover:text-indigo-600"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="max-w-6xl px-6 py-24 mx-auto">
        <h2 className="mb-16 text-4xl font-bold text-center">Featured Projects</h2>
        <div className="grid gap-12 md:grid-cols-2">
          {/* Project 1 */}
          <div className="overflow-hidden transition bg-white shadow-lg rounded-3xl hover:shadow-2xl">
            <Image
              src="/images/Generic_Applovin.jpg"
              alt="AppLovin Project"
              width={1200}
              height={800}
              className="object-cover w-full h-64"
            />
            <div className="p-6 sm:p-8">
              <h3 className="mb-3 text-2xl font-semibold">AppLovin Websites</h3>
              <p className="mb-4 text-sm text-gray-600">
                At AppLovin, I was responsible for designing and developing the entire websites. I built reusable components
                and custom fields to empower the marketing team to manage and update content efficiently.
              </p>
              <a
                href="https://www.applovin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-indigo-600 hover:underline"
              >
                View Site
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="overflow-hidden transition bg-white shadow-lg rounded-3xl hover:shadow-2xl">
            <Image
              src="/images/jobscroller-preview.png"
              alt="JobScroller App Preview"
              width={1200}
              height={800}
              className="object-cover w-full h-64"
            />
            <div className="p-6 sm:p-8">
              <h3 className="mb-3 text-2xl font-semibold">JobScroller – Smarter Job Discovery</h3>
              <p className="mb-4 text-sm text-gray-600">
                JobScroller is a personalized job discovery tool that curates tech job listings from company career pages. 
                It auto-extracts role details, tracks what you've viewed or applied to, and keeps your search organized — all without spammy boards.
              </p>
              <a
                href="https://www.jobscroller.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-indigo-600 hover:underline"
              >
                View Project
              </a>
            </div>
          </div>
        </div> {/* ✅ This closing div was missing */}

        <div className="mt-16 text-center">
          <Link
            href="/projects"
            className="px-6 py-3 font-semibold text-white transition bg-indigo-600 rounded-full hover:bg-indigo-700"
          >
            View All Projects
          </Link>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="px-6 py-24 text-center text-white bg-gradient-to-br from-purple-600 to-indigo-600">
        <h2 className="mb-4 text-4xl font-bold">Let’s Work Together</h2>
        <p className="mb-6 text-white/90">
          Whether you have an idea or just want to say hi, my inbox is always open.
        </p>
        <a
          href="mailto:contact@quentinguillaume.com"
          className="inline-block px-6 py-3 font-semibold text-indigo-600 transition bg-white rounded-full hover:bg-gray-100"
        >
          Get In Touch
        </a>
      </section>
    </main>
  );
}
