'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="w-full min-h-screen px-6 py-12 text-gray-800 bg-gray-50">
      <section className="max-w-4xl p-6 mx-auto bg-white shadow-md md:p-10">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            About Me
          </h1>
          <p className="mt-2 text-gray-600">
            Get to know my professional background and what drives my passion
            for building impactful digital products.
          </p>
        </div>

        {/* PROFILE SECTION */}
        <div className="flex flex-col items-center gap-6 mb-8 md:flex-row md:items-start">
 
          <div className="flex-shrink-0 mb-4 md:mb-0">
            <Image
              src="/images/quentin.jpg"
              alt="Profile Picture of Quentin Guillaume"
              width={160}
              height={160}
              className="object-cover rounded-full"
            />
          </div>
          <div className="flex-1 space-y-4 text-gray-700">
            <p>
              Hello! I’m <strong>Quentin Guillaume</strong>, a Creative
              Developer currently contributing to the growth of{' '}
              <a
                href="https://www.applovin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-blue-600 underline hover:text-blue-800"
              >
                AppLovin
              </a>
              . I specialize in developing modern web experiences that blend
              high-quality design with robust functionality, always prioritizing
              user engagement and performance.
            </p>
            <p>
            In my role at AppLovin, I serve as the main developer, overseeing 
  the technical aspects of our website and creating specialized tools 
  for the marketing team. By focusing on performance, reliability, and 
  efficient workflows, I enable our marketing initiatives to run smoothly 
  and effectively. Although I don’t interface directly with clients, my 
  work behind the scenes is critical to driving the company’s overall success 
  and ensuring our internal teams have the platforms they need to excel.
            </p>
            <p>
              With a strong background in <strong>JavaScript</strong>,{' '}
              <strong>React</strong>, <strong>Next.js</strong>, and modern CSS
              frameworks like <strong>Tailwind CSS</strong>, I’m passionate
              about creating solutions that are both innovative and intuitive.
              I thrive in dynamic environments, value continuous learning, and
              enjoy contributing to collaborative projects that impact users on
              a global scale.
            </p>
          </div>
        </div>

        {/* SKILLS SECTION */}
        <div className="p-4 mb-8 bg-gray-100 rounded-lg md:p-6">
          <h2 className="mb-3 text-xl font-semibold text-gray-900">
            Core Skills & Expertise
          </h2>
          <ul className="space-y-2 text-gray-700 list-disc list-inside">
            <li>
              **Front-End Development:** React, Next.js, Tailwind CSS, Responsive UI
            </li>
            <li>
              **Back-End / APIs:** Node.js, Express, RESTful services, basic AWS
              integration
            </li>
            <li>
              **Project Collaboration:** Agile/Scrum, Git version control, code
              reviews, cross-functional teamwork
            </li>
            <li>
              **Performance & Optimization:** Profiling and fine-tuning front-end
              performance, web accessibility best practices
            </li>
          </ul>
        </div>

        {/* PERSONAL SECTION */}
        <div className="mb-8 text-gray-700">
          <h2 className="mb-3 text-xl font-semibold text-gray-900">
            Personal Values & Interests
          </h2>
          <p>
          Outside of my day-to-day work, I’m passionate about <strong>gaming</strong>, 
    discovering new <strong>skills</strong>, and <strong>traveling</strong> to 
    explore different cultures and environments. I believe this curiosity drives 
    me to continuously learn and adapt—both in my personal life and professionally.
    Whether it’s mastering new technologies or planning my next adventure, 
    I thrive on the excitement of discovery and the pursuit of fresh perspectives.
          </p>
        </div>

        {/* CTA SECTION */}
        <div className="mt-6 text-center">
          <Link
            href="/projects"
            className="inline-block px-6 py-2 mr-3 text-white transition-colors bg-blue-600 rounded hover:bg-blue-700"
          >
            View My Projects
          </Link>
          <a
  href="mailto:contact@quentinguillaume.com"
  className="inline-block px-6 py-2 font-semibold text-blue-600 transition-colors border-2 border-blue-600 rounded hover:bg-blue-600 hover:text-white"
>
  Get In Touch
</a>

        </div>
      </section>
    </main>
  );
}
