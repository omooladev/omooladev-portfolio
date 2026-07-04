"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
}

export default function ProjectCard({ project, priority = false }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="card group relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={project.thumbnail}
          alt={project.name}
          fill
          className={`object-cover object-top transition-all duration-700 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
          priority={priority}
        />

        {/* Overlay on Hover */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300 z-20 ${
            isHovered ? "opacity-100" : "opacity-60"
          }`}
        />

        {/* Quick Links */}
        <div
          className={`absolute top-4 right-4 flex gap-2 z-30 transition-all duration-300 ${
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
          }`}
        >
          {project.privateRepo ? (
            <span
              className="p-2 bg-white/70 dark:bg-zinc-800/70 rounded-lg cursor-not-allowed opacity-60"
              title="Private repository"
              aria-label="Private repository"
              onClick={(e) => e.stopPropagation()}
            >
              <i className="fa-brands fa-github text-xl text-gray-500 dark:text-gray-400" aria-hidden="true" />
            </span>
          ) : (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/90 dark:bg-zinc-800/90 rounded-lg hover:bg-white dark:hover:bg-zinc-700 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <i className="fa-brands fa-github text-xl text-gray-900 dark:text-gray-100" aria-hidden="true" />
            </a>
          )}
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/90 dark:bg-zinc-800/90 rounded-lg hover:bg-white dark:hover:bg-zinc-700 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <i className="fa-solid fa-external-link-alt text-xl text-gray-900 dark:text-gray-100" aria-hidden="true" />
            </a>
          )}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
          {project.name}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 5).map((tech, index) => (
            <span
              key={index}
              className="flex items-center gap-1 px-3 py-1 bg-gray-100 dark:bg-zinc-800 rounded-full text-sm"
            >
              {tech.icon && <i className={`${tech.icon} text-lg ${tech.colorClass || ''}`} />}
              {tech.imageSrc && (
                <Image
                  src={tech.imageSrc}
                  alt={tech.name}
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
              )}
              {tech.name && <span className="text-gray-700 dark:text-gray-300">{tech.name}</span>}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="px-3 py-1 bg-gray-100 dark:bg-zinc-700 text-gray-700 dark:text-gray-300 rounded-full text-sm">
              +{project.technologies.length - 5} more
            </span>
          )}
        </div>

        <Link
          href={`/projects/${project.id}`}
          className="inline-flex items-center gap-2 text-primary dark:text-primary-dark hover:gap-3 transition-all font-medium"
        >
          View Details
          <i className="bx bx-right-arrow-alt text-2xl" />
        </Link>
      </div>
    </div>
  );
}
