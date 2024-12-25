'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-white text-gray-800">
      {/* HERO SECTION */}
      <section className="relative flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-blue-500 to-indigo-600 py-24 px-6 text-white">
        <div className="absolute left-0 top-0 h-full w-full bg-[url('/images/hero-bg.png')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 text-center">
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl lg:text-6xl">
            Welcome to My Portfolio
          </h1>
          <p className="mx-auto mb-6 max-w-2xl text-lg sm:text-xl">
            I’m a creative developer who builds modern and engaging experiences
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/projects"
              className="inline-block rounded bg-white px-6 py-3 font-semibold text-blue-600 transition-colors hover:bg-gray-200"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="inline-block rounded border-2 border-white bg-transparent px-6 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-blue-600"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="py-16 px-6 lg:px-16">
        <h2 className="mb-8 text-center text-3xl font-bold sm:text-4xl">Featured Projects</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Project Card 1 */}
          <div className="rounded-lg border shadow-sm transition hover:shadow-lg">

            <div className="p-4">
              <h3 className="mb-2 text-xl font-semibold">Project One</h3>
              <p className="text-sm text-gray-600">
                A brief description of the project. It showcases my expertise in design
                and coding.
              </p>
            </div>
          </div>
          {/* Project Card 2 */}
          <div className="rounded-lg border shadow-sm transition hover:shadow-lg">

            <div className="p-4">
              <h3 className="mb-2 text-xl font-semibold">Project Two</h3>
              <p className="text-sm text-gray-600">
                Another awesome project where I tackled complex front-end challenges.
              </p>
            </div>
          </div>
          {/* Project Card 3 */}
          <div className="rounded-lg border shadow-sm transition hover:shadow-lg">

            <div className="p-4">
              <h3 className="mb-2 text-xl font-semibold">Project Three</h3>
              <p className="text-sm text-gray-600">
                A highlight of my experience with modern frameworks, UX/UI, and APIs.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/projects"
            className="rounded bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
          >
            View All Projects
          </Link>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-16 px-6 bg-gray-50 lg:px-16">
        <h2 className="mb-8 text-center text-3xl font-bold sm:text-4xl">About Me</h2>
        <div className="mx-auto flex max-w-4xl flex-col items-center space-y-6 text-center md:flex-row md:items-start md:space-y-0 md:space-x-8">
 
          <div className="flex-1">
            <p className="mb-4 text-gray-700">
              I’m a developer with a passion for creating dynamic, user-friendly digital
              experiences. With a background in design and a keen eye for detail, I enjoy
              crafting solutions that delight end users.
            </p>
            <p className="mb-4 text-gray-700">
              When I’m not coding, you can find me exploring nature, experimenting with
              new design trends, or contributing to open source projects.
            </p>
            <Link
              href="/about"
              className="font-medium text-blue-600 hover:underline"
            >
              Read more about my journey →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-indigo-600 py-16 px-6 text-center text-white lg:px-16">
        <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Let’s Work Together</h2>
        <p className="mb-6 text-gray-100">
          Whether you have an idea or just want to say hi, my inbox is always open.
        </p>
        <Link
          href="/contact"
          className="inline-block rounded bg-white px-6 py-3 font-semibold text-indigo-600 transition-colors hover:bg-gray-200"
        >
          Get In Touch
        </Link>
      </section>
    </main>
  );
}
