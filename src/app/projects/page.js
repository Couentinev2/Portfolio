'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-12 text-gray-800">
      <header className="mb-8">
        <h1 className="text-3xl font-bold sm:text-4xl">My Projects</h1>
        <p className="mt-2 text-gray-600">
          Here you’ll find an overview of my professional journey and some of the key
          projects I’ve worked on.
        </p>
      </header>

      {/* CURRENT COMPANY SECTION */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Current Role at AppLovin</h2>
        <div className="flex flex-col items-start md:flex-row md:items-center md:gap-6">
          {/* Optional image/logo */}
          <div className="mb-4 md:mb-0">
            <Image
              src="/images/applovin-logo-hz-black-2019.svg"
              alt="AppLovin Logo"
              width={200}
              height={50}
            />
          </div>

          <div>
            <p className="text-gray-700">
              I’m proud to be part of the team at{' '}
              <a
                href="https://www.applovin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-blue-600 underline decoration-blue-600 hover:text-blue-800"
              >
                AppLovin
              </a>
              , a leading marketing platform that helps mobile app developers
              grow their businesses. My role involves building innovative
              solutions that connect advertisers with high-quality audiences,
              driving growth and engagement across the mobile ecosystem.
            </p>
            <p className="mt-2 text-gray-700">
              Working at AppLovin allows me to collaborate with a diverse team
              of engineers, designers, and product managers, all focused on
              delivering a seamless and impactful experience for our partners.
            </p>
          </div>
        </div>
      </section>

      {/* SAMPLE PROJECTS SECTION */}
      <section>
        <h2 className="mb-4 text-2xl font-semibold">Highlighted Projects</h2>
        <div className="space-y-8">
          {/* PROJECT 1 */}
          <article className="rounded-lg border p-4 shadow-sm transition hover:shadow-md">
            <h3 className="mb-2 text-xl font-semibold">Project One</h3>
            <p className="text-gray-600">
              Description of a notable project you worked on (e.g., an internal
              dashboard, a new app feature, or a data analysis pipeline). Discuss
              your role and the technologies used.
            </p>
          </article>

          {/* PROJECT 2 */}
          <article className="rounded-lg border p-4 shadow-sm transition hover:shadow-md">
            <h3 className="mb-2 text-xl font-semibold">Project Two</h3>
            <p className="text-gray-600">
              Highlight another impactful project. You could talk about challenges
              faced, your problem-solving approach, and the final outcome or
              business impact.
            </p>
          </article>

          {/* PROJECT 3 */}
          <article className="rounded-lg border p-4 shadow-sm transition hover:shadow-md">
            <h3 className="mb-2 text-xl font-semibold">Project Three</h3>
            <p className="text-gray-600">
              If you have any open-source work, side projects, or interesting
              personal initiatives, list them here. Emphasize what skills you
              demonstrated or learned.
            </p>
          </article>
        </div>

        {/* CTA TO SEE MORE PROJECTS OR CONTACT */}
        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-block rounded bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Contact Me
          </Link>
        </div>
      </section>
    </main>
  );
}
