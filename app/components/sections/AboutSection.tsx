import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="wrapper section-padding">
      <h2 className="section-header">About Me</h2>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-4 text-gray-600 dark:text-gray-400 text-lg leading-relaxed order-2 md:order-1">
          <p>
            Hello! I&apos;m Omosuyi Olawole, also known as omooladev, a dedicated software engineer from Lagos, Nigeria,
            specializing in web application development. My core expertise lies in Javascript, and I prefer using it for
            most of my projects.
          </p>
          <p>
            I graduated from the Civil Engineering Department of the Federal University of Technology. I have a keen
            interest in crafting solutions using the best available tools. A critical thinker, I am deeply passionate
            about problem-solving.
          </p>
          <p>
            When I&apos;m not coding, you&apos;ll find me enjoying football games with friends, diving into books, or
            enjoying a swim.
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
