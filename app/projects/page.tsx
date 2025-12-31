import ProjectCard from "../components/ProjectCard";
import { projects } from "@/data/projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Omosuyi Olawole - Full-Stack Developer",
  description: "Explore my portfolio of web development projects. Built with React, Next.js, Node.js, TypeScript, and MongoDB. Real-world applications showcasing full-stack development skills.",
  keywords: [
    "Web Development Projects",
    "React Projects",
    "Next.js Projects",
    "Node.js Projects",
    "Full-Stack Projects",
    "Portfolio",
    "JavaScript Projects",
    "TypeScript Projects",
  ],
  openGraph: {
    title: "Projects | Omosuyi Olawole",
    description: "Explore my portfolio of web development projects showcasing full-stack development skills.",
    type: "website",
    url: "https://omooladev-portfolio-dev.vercel.app/projects",
    images: [
      {
        url: "/images/omooladev.png",
        width: 1200,
        height: 630,
        alt: "Omosuyi Olawole Projects Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Omosuyi Olawole",
    description: "Explore my portfolio of web development projects showcasing full-stack development skills.",
    images: ["/images/omooladev.png"],
  },
};

export default function ProjectsPage() {
  return (
    <div className="wrapper pt-32 pb-20">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          All <span className="text-primary dark:text-primary-dark">Projects</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg max-w-3xl">
          Here you&apos;ll find a comprehensive collection of my work. Each project represents a unique challenge
          and learning experience, demonstrating my skills in various technologies and problem-solving approaches.
          Hover over any project card to see a live preview of the website!
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} priority={index < 3} />
        ))}
      </div>

      {projects.length === 0 && (
        <div className="text-center py-20">
          <p className="text-gray-600 dark:text-gray-400 text-xl">
            No projects found. Check back later!
          </p>
        </div>
      )}
    </div>
  );
}
