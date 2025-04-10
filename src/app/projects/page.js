'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function ProjectsPage() {
  return (
    <main className="w-full min-h-screen text-gray-800 bg-white scroll-smooth">
      {/* HEADER */}
      <section className="relative px-6 py-24 text-center text-white bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto">
          <h1 className="mb-4 text-4xl font-extrabold sm:text-5xl">My Projects</h1>
          <p className="text-base text-blue-100 sm:text-lg">
            Here you'll find an overview of my professional journey, and some of the key
            projects I've worked on.
          </p>
        </div>

      {/* CURRENT ROLE */}
      <div className="relative z-10 px-6 mt-16">
        <div className="max-w-6xl px-8 py-12 mx-auto bg-white shadow-xl rounded-3xl">
          <div className="grid items-center grid-cols-1 gap-10 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-2xl font-semibold text-gray-700">Last Role at AppLovin</h2>
              <p className="text-gray-700">
  I was proud to be part of the team at{' '}
  <a
    href="https://www.applovin.com"
    target="_blank"
    rel="noopener noreferrer"
    className="font-medium text-blue-600 underline hover:text-blue-800"
  >
    AppLovin
  </a>
  , a leading marketing platform that helped mobile app developers grow their businesses.
  My role involved building innovative solutions that connected advertisers with high-quality audiences,
  driving growth and engagement across the mobile ecosystem.
</p>
<p className="mt-4 text-gray-700">
  Working at AppLovin allowed me to collaborate with a diverse team of engineers, designers,
  and product managers, all focused on delivering a seamless and impactful experience for our partners.
</p>

            </div>
            <div className="flex justify-center md:justify-center">
              <Image
                src="/images/events_sponsors_trim_1017.png"
                alt="AppLovin Logo"
                width={300}
                height={100}
                className="object-contain h-auto"
              />
            </div>
          </div>
        </div>
      </div>
      </section>

      {/* PROJECTS */}
      <section className="px-6 py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="mb-10 text-2xl font-semibold">Highlighted Projects</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* PROJECT CARD */}
            {[
              {
                title: 'JobScroller – Smarter Job Discovery',
                description1: `JobScroller is a personalized job discovery tool that curates tech job listings from company career pages.`,
                description2: `I built JobScroller from the ground up using NextJS, Supabase, TailwindCSS, and Ollama with Mistral. It’s fast, lightweight, and ideal for anyone tired of traditional job boards.`,
                link: 'https://www.jobscroller.net/',
              },
              {
                title: 'AppLovin',
                description1: `At AppLovin, I was responsible for designing and developing the entire website. I built reusable components and custom fields to empower the marketing team to manage and update content efficiently.`,
                description2: `My role involved creating a seamless user experience while adhering to branding and performance standards.`,
                link: 'https://www.applovin.com/',
              },
              {
                title: 'BadgeList',
                description1: `As a backend developer at BadgeList, I ensured the stability and scalability of the platform by managing infrastructure and optimizing database performance.`,
                description2: `My work included API development and system integrations, contributing to the platform's reliability and user satisfaction.`,
                link: 'https://badgelist.com/',
              },
              {
                title: 'Travel Helper Application',
                description1: `As someone who loves to travel and discover new experiences, I created the Travel Helper Application to make trip planning easier and more enjoyable.`,
                description2: `I designed and implemented key features, including an AI-powered trip advisor using the OpenAI API, and built a responsive interface with robust backend integration.`,
                link: '/travel',
              },

            ].map((proj, i) => (
              <article
                key={i}
                className="p-6 transition bg-white border border-gray-200 shadow-sm sm:p-8 rounded-2xl hover:shadow-md"
              >
                <h3 className="mb-3 text-xl font-semibold">{proj.title}</h3>
                <p className="text-gray-700">{proj.description1}</p>
                <p className="mt-3 text-gray-700">{proj.description2}</p>
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 font-medium text-blue-600 hover:underline"
                >
                  View Project
                </a>
              </article>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <a
              href="mailto:contact@quentinguillaume.com"
              className="inline-block px-6 py-3 font-semibold text-indigo-600 transition bg-white rounded-full hover:bg-gray-100"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
