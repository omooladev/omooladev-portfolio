export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-zinc-800 mt-20">
      <div className="wrapper py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} Omosuyi Olawole. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="https://x.com/omooladev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-dark transition-colors"
              aria-label="Twitter"
            >
              <i className="fa-brands fa-x-twitter text-xl" aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com/in/omosuyiolawole"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-dark transition-colors"
              aria-label="LinkedIn"
            >
              <i className="fa-brands fa-linkedin-in text-xl" aria-hidden="true" />
            </a>
            <a
              href="https://github.com/omooladev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-dark transition-colors"
              aria-label="GitHub"
            >
              <i className="fa-brands fa-github text-xl" aria-hidden="true" />
            </a>
            <a
              href="mailto:omooladev@gmail.com"
              className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-dark transition-colors"
              aria-label="Email"
            >
              <i className="fa-regular fa-envelope text-xl" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
