export default function ContactSection() {
  return (
    <section id="contact" className="wrapper section-padding">
      <h2 className="section-header text-center">Get In Touch</h2>
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
          I&apos;m currently open to new opportunities and collaborations. Whether you have a question
          or just want to say hi, feel free to reach out!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:omooladev@gmail.com"
            className="btn-primary flex items-center justify-center gap-2"
          >
            <i className="fa-regular fa-envelope text-xl" aria-hidden="true" />
            Send me an email
          </a>
          <a
            href="https://www.linkedin.com/in/omosuyiolawole"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary flex items-center justify-center gap-2"
          >
            <i className="fa-brands fa-linkedin-in text-xl" aria-hidden="true" />
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
