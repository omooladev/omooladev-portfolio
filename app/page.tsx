import Image from "next/image";
import Link from "next/link";
import ProjectCard from "./components/ProjectCard";
import { projects } from "@/data/projects";
import { experiences } from "@/data/experience";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="wrapper section-padding pt-32 md:pt-40 min-h-screen flex items-center">
        <div className="w-full">
          <p className="text-blue-600 dark:text-blue-500 text-lg md:text-xl mb-4 animate-fade-in">
            Welcome to my site.
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 animate-fade-in-up">
            I&apos;m <span className="text-blue-600 dark:text-blue-500">Omosuyi Olawole</span>,
            <br />a Fullstack developer.
          </h1>
          <div className="max-w-3xl mb-8 animate-fade-in-up animation-delay-200">
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              I&apos;m a software developer focused on creating exceptional user experiences through
              code. I am passionate about continuous learning and exploring new technologies, frameworks,
              and programming languages. Currently, my focus is on mastering Node.js, Typescript and Webpack.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-400">
            <a href="#contact" className="btn-primary text-center">
              Get in touch
            </a>
            <a
              href="/pdfs/omosuyi-olawole-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-center"
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="wrapper section-padding">
        <h2 className="section-header">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4 text-gray-600 dark:text-gray-400 text-lg leading-relaxed order-2 md:order-1">
            <p>
              Hello! I&apos;m Omosuyi Olawole, also known as omooladev, a dedicated software engineer from Lagos,
              Nigeria, specializing in web application development. My core expertise lies in Javascript, and I
              prefer using it for most of my projects.
            </p>
            <p>
              I graduated from the Civil Engineering Department of the Federal University of Technology. I have a
              keen interest in crafting solutions using the best available tools. A critical thinker, I am deeply
              passionate about problem-solving.
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
                <i className="fa-brands fa-linkedin-in" />
                LinkedIn
              </a>
              <a
                href="https://github.com/omooladev"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center gap-2"
              >
                <i className="fa-brands fa-github" />
                Github
              </a>
              <a
                href="mailto:omooladev@gmail.com"
                className="btn-primary flex items-center gap-2"
              >
                <i className="fa-regular fa-envelope" />
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

      {/* Projects Section */}
      <section id="project" className="wrapper section-padding">
        <h2 className="section-header">Projects</h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg mb-12 max-w-3xl">
          The following projects serve as demonstrations of my skills and experience, showcasing real-world
          examples of my work. Each project is concisely described and includes links to code repositories and
          live demos. These projects highlight my proficiency in solving complex problems, working with various
          technologies, and effectively managing projects.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} priority={index === 0} />
          ))}
        </div>
        <div className="text-center">
          <Link href="/projects" className="btn-primary inline-flex items-center gap-2">
            See all projects
            <i className="bx bx-right-arrow-alt text-2xl" />
          </Link>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="wrapper section-padding bg-gray-50 dark:bg-zinc-800/50 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-header">Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className="bg-white dark:bg-zinc-900 rounded-lg shadow-lg p-6 md:p-8 hover:shadow-2xl transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                      {exp.position}
                    </h3>
                    <p className="text-xl text-blue-600 dark:text-blue-500 font-medium">
                      {exp.company}
                    </p>
                  </div>
                  <div className="mt-2 md:mt-0 text-gray-600 dark:text-gray-400">
                    <p className="font-medium">{exp.duration}</p>
                    <p>{exp.location}</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {exp.description}
                </p>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    Key Responsibilities:
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                    {exp.responsibilities.map((responsibility, index) => (
                      <li key={index}>{responsibility}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="wrapper section-padding">
        <h2 className="section-header text-center">Get In Touch</h2>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
            I&apos;m currently open to new opportunities and collaborations. Whether you have a question or just
            want to say hi, feel free to reach out!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:omooladev@gmail.com"
              className="btn-primary flex items-center justify-center gap-2"
            >
              <i className="fa-regular fa-envelope text-xl" />
              Send me an email
            </a>
            <a
              href="https://www.linkedin.com/in/omosuyiolawole"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex items-center justify-center gap-2"
            >
              <i className="fa-brands fa-linkedin-in text-xl" />
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
