'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="w-full min-h-screen text-gray-800 bg-gray-50">
      {/* HERO SECTION */}
      <section className="px-6 py-24 text-center text-white bg-gradient-to-br from-blue-600 to-purple-600">
  <div className="max-w-3xl mx-auto">
    <h2 className="mb-2 text-sm tracking-widest text-blue-100 uppercase">About Me</h2>
    <h1 className="mb-4 text-4xl font-extrabold sm:text-5xl">Hello, I’m Quentin Guillaume</h1>
    <p className="text-lg text-blue-100 sm:text-xl">
      Get to know my professional background and what drives my passion for building impactful digital products.
    </p>
    <p className="mt-4">
      <a
        href="https://www.linkedin.com/in/quentinguillaume"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-blue-100 underline hover:text-white"
      >
        Connect with me on LinkedIn
      </a>
    </p>
  </div>
</section>

      {/* PROFILE SECTION */}
      <section className="px-6 -mt-[3em]">
        <div className="flex flex-col max-w-5xl gap-10 p-8 mx-auto bg-white shadow-xl rounded-3xl md:p-12 md:flex-row">
          <div className="flex justify-center md:justify-start">
            <Image
              src="/images/quentin.jpg"
              alt="Profile picture of Quentin Guillaume"
              width={160}
              height={160}
              className="object-cover rounded-full"
            />
          </div>
          <div className="flex-1 space-y-4 text-gray-700">
            <p>
              Hello! I’m <strong>Quentin Guillaume</strong>, a Creative Developer currently contributing to the growth of{' '}
              <a
                href="https://www.applovin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-blue-600 underline hover:text-blue-800"
              >
                AppLovin
              </a>
              . I specialize in developing modern web experiences that blend high-quality design with robust functionality, always prioritizing user engagement and performance.
            </p>
            <p>
              In my role at AppLovin, I serve as the main developer, overseeing the technical aspects of our website and creating specialized tools for the marketing team. By focusing on performance, reliability, and efficient workflows, I enable our marketing initiatives to run smoothly and effectively. Although I don’t interface directly with clients, my work behind the scenes is critical to driving the company’s overall success and ensuring our internal teams have the platforms they need to excel.
            </p>
            <p>
              With a strong background in <strong>JavaScript</strong>, <strong>React</strong>, <strong>Next.js</strong>, and modern CSS frameworks like <strong>Tailwind CSS</strong>, I’m passionate about creating solutions that are both innovative and intuitive. I thrive in dynamic environments, value continuous learning, and enjoy contributing to collaborative projects that impact users on a global scale.
            </p>
          </div>
        </div>
      </section>

      {/* SKILLS & INTERESTS */}
      <section className="px-6 mt-16">
        <div className="grid max-w-5xl grid-cols-1 gap-8 mx-auto md:grid-cols-2">
          <div className="p-6 bg-gray-100 shadow-sm rounded-2xl md:p-8">
            <h2 className="mb-4 text-xl font-semibold">Core Skills & Expertise</h2>
            <ul className="space-y-2 text-gray-700 list-disc list-inside">
              <li><strong>Front-End Development:</strong> React, Next.js, Tailwind CSS, Responsive UI</li>
              <li><strong>Back-End / APIs:</strong> Node.js, Express, RESTful services, basic AWS integration</li>
              <li><strong>Project Collaboration:</strong> Agile/Scrum, Git version control, code reviews, cross-functional teamwork</li>
              <li><strong>Performance & Optimization:</strong> Front-end profiling, accessibility best practices</li>
            </ul>
          </div>

          <div className="p-6 bg-gray-100 shadow-sm rounded-2xl md:p-8">
            <h2 className="mb-4 text-xl font-semibold">Personal Values & Interests</h2>
            <p className="text-gray-700">
              Outside of my day-to-day work, I’m passionate about <strong>gaming</strong>, discovering new <strong>skills</strong>, and <strong>traveling</strong> to explore different cultures and environments. I believe this curiosity drives me to continuously learn and adapt—both in my personal life and professionally. Whether it’s mastering new technologies or planning my next adventure, I thrive on the excitement of discovery and the pursuit of fresh perspectives.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-16 pb-[4em] text-center">
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/projects"
            className="inline-block px-6 py-3 font-semibold text-white transition bg-blue-600 rounded-full hover:bg-blue-700"
          >
            View My Projects
          </Link>
          <a
            href="mailto:contact@quentinguillaume.com"
            className="inline-block px-6 py-3 font-semibold text-blue-600 transition border-2 border-blue-600 rounded-full hover:bg-blue-600 hover:text-white"
          >
            Get In Touch
          </a>
        </div>
      </section>
    </main>
  );
}
