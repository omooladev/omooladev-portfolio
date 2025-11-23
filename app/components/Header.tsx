"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTheme } from "./ThemeProvider";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setIsMenuOpen(false);

    if (pathname !== "/") {
      window.location.href = `/#${sectionId}`;
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Projects", id: "project" },
    { name: "Experience", id: "experience" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <nav className="wrapper py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/omooladev-logo.png"
                alt="Omooladev Logo"
                width={50}
                height={50}
                className="w-12 h-12"
              />
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <li key={item.id}>
                  {item.name === "Projects" && pathname === "/" ? (
                    <button
                      onClick={() => handleNavClick(item.id)}
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500 transition-colors duration-300 font-medium"
                    >
                      {item.name}
                    </button>
                  ) : (
                    <button
                      onClick={() => handleNavClick(item.id)}
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500 transition-colors duration-300 font-medium"
                    >
                      {item.name}
                    </button>
                  )}
                </li>
              ))}
              <li>
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-zinc-800 transition-colors"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? (
                    <i className="bx bx-sun text-2xl text-yellow-500" />
                  ) : (
                    <i className="bx bx-moon text-2xl text-blue-600" />
                  )}
                </button>
              </li>
            </ul>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-zinc-800 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <i className="bx bx-sun text-2xl text-yellow-500" />
                ) : (
                  <i className="bx bx-moon text-2xl text-blue-600" />
                )}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex flex-col gap-1.5 p-2"
                aria-label="Toggle menu"
              >
                <span
                  className={`w-6 h-0.5 bg-gray-700 dark:bg-gray-300 transition-all ${
                    isMenuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`w-6 h-0.5 bg-gray-700 dark:bg-gray-300 transition-all ${
                    isMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`w-6 h-0.5 bg-gray-700 dark:bg-gray-300 transition-all ${
                    isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          isMenuOpen ? "visible" : "invisible"
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsMenuOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 bottom-0 w-64 bg-white dark:bg-zinc-900 shadow-2xl transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-8">
              <Image
                src="/images/omooladev-logo.png"
                alt="Omooladev Logo"
                width={40}
                height={40}
              />
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2"
                aria-label="Close menu"
              >
                <i className="bx bx-x text-3xl text-gray-700 dark:text-gray-300" />
              </button>
            </div>
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className="block w-full text-left py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500 transition-colors font-medium"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-zinc-800">
              <h3 className="text-sm font-semibold mb-4 text-gray-700 dark:text-gray-300">
                Connect with me
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://x.com/omooladev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-zinc-800 transition-colors"
                >
                  <i className="fa-brands fa-x-twitter text-xl" />
                </a>
                <a
                  href="https://www.linkedin.com/in/omosuyiolawole"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-zinc-800 transition-colors"
                >
                  <i className="fa-brands fa-linkedin-in text-xl" />
                </a>
                <a
                  href="https://github.com/omooladev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-zinc-800 transition-colors"
                >
                  <i className="fa-brands fa-github text-xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
