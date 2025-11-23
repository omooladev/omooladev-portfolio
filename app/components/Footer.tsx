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
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
            >
              <i className="fa-brands fa-x-twitter text-xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/omosuyiolawole"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
            >
              <i className="fa-brands fa-linkedin-in text-xl" />
            </a>
            <a
              href="https://github.com/omooladev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
            >
              <i className="fa-brands fa-github text-xl" />
            </a>
            <a
              href="mailto:omooladev@gmail.com"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
            >
              <i className="fa-regular fa-envelope text-xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
