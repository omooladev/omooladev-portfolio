export default function HeroSection() {
  return (
    <section id="home" className="wrapper section-padding pt-32 md:pt-40 min-h-screen flex items-center">
      <div className="w-full">
        <p className="text-primary dark:text-primary-dark text-lg md:text-xl mb-4 animate-fade-in">
          Welcome to my site.
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 animate-fade-in-up">
          I&apos;m <span className="text-primary dark:text-primary-dark">Omosuyi Olawole</span>,
          <br />a Fullstack developer.
        </h1>
        <div className="max-w-3xl mb-8 animate-fade-in-up animation-delay-200">
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            I&apos;m a software developer focused on creating exceptional user experiences through code.
            I am passionate about continuous learning and exploring new technologies, frameworks, and
            programming languages. Currently, my focus is on mastering Node.js, Typescript and Webpack.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-400">
          <a href="#contact" className="btn-primary text-center">
            Get in touch
          </a>
          <a
            href="/pdfs/resumes/v1/omosuyi-olawole-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-center"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
