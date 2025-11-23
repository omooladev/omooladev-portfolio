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
    company: "Your Company Name",
    position: "Software Engineer",
    duration: "Jan 2023 - Present",
    location: "Lagos, Nigeria",
    description: "Working as a fullstack developer, building scalable web applications and APIs.",
    responsibilities: [
      "Developed and maintained web applications using React and Node.js",
      "Collaborated with cross-functional teams to define and implement new features",
      "Optimized application performance and improved user experience",
      "Implemented RESTful APIs and integrated third-party services",
      "Participated in code reviews and mentored junior developers"
    ],
    technologies: ["React", "Node.js", "TypeScript", "MongoDB", "Express.js"]
  },
  // Add more experiences as needed
];
