export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: "1",
    company: "Combattix",
    position: "Full-stack Developer",
    duration: "January 2025 - Present",
    location: "Lagos, Nigeria",
    description: "Working as a full-stack developer, building innovative web applications and scalable solutions.",
    responsibilities: [
      "Developed and maintained full-stack web applications using modern technologies",
      "Collaborated with cross-functional teams to define and implement new features",
      "Optimized application performance and improved user experience",
      "Implemented RESTful APIs and integrated third-party services",
      "Participated in code reviews and contributed to best practices"
    ],
    technologies: ["React", "Node.js", "TypeScript", "MongoDB", "Express.js", "Next.js"]
  },
  {
    id: "2",
    company: "Polis",
    position: "Full-stack Developer",
    duration: "July 2024 - January 2025",
    location: "Lagos, Nigeria",
    description: "Worked as a full-stack developer, contributing to the development of web applications and API services.",
    responsibilities: [
      "Built and maintained responsive web applications using React and Node.js",
      "Developed RESTful APIs and backend services",
      "Worked closely with designers and product managers to implement user-centric features",
      "Implemented state management solutions and optimized application performance",
      "Conducted code reviews and ensured code quality standards"
    ],
    technologies: ["React", "Node.js", "JavaScript", "MongoDB", "Express.js", "Git"]
  },
];
