import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="wrapper section-padding">
      <h2 className="section-header">About Me</h2>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-4 text-gray-600 dark:text-gray-400 text-lg leading-relaxed order-2 md:order-1">
          <p>
            Hello! I&apos;m Omosuyi Olawole — omooladev — a full-stack software engineer based in Lagos, Nigeria,
            building web products end to end in JavaScript and TypeScript, mostly on Next.js, React, Node.js, and
            MongoDB.
          </p>
          <p>
            Lately that&apos;s meant building Knowli, a small product studio: Daylight, an AI-powered journaling PWA
            with autosave, AI-assisted writing, and its own admin dashboard; and Knowli Quiz, which grew from a
            single-user app into a public, multi-tenant platform with creator tiers, live notifications, and a
            real production data migration along the way. I care as much about the parts users never see —
            authentication, rate limiting, security hardening, role-based access — as the features they do.
          </p>
          <p>
            Outside of code, you&apos;ll usually find me playing football with friends or reading.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="https://www.linkedin.com/in/omosuyiolawole"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-2"
            >
              <i className="fa-brands fa-linkedin-in" aria-hidden="true" />
              LinkedIn
            </a>
            <a
              href="https://github.com/omooladev"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-2"
            >
              <i className="fa-brands fa-github" aria-hidden="true" />
              Github
            </a>
            <a href="mailto:omooladev@gmail.com" className="btn-primary flex items-center gap-2">
              <i className="fa-regular fa-envelope" aria-hidden="true" />
              Email
            </a>
          </div>
        </div>
        <div className="relative order-1 md:order-2">
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full rotate-6 animate-pulse-slow" />
            <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl">
              <Image
                src="/images/profile-image.jpeg"
                alt="Omosuyi Olawole"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
