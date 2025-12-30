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
    position: "Full-Stack Developer",
    duration: "January 2025 - Present",
    location: "London, United Kingdom (Remote)",
    description: "Building and maintaining core platform features for a combat sports platform, implementing payment systems, search functionality, and scalable backend architecture.",
    responsibilities: [
      "Built and maintained core platform features including payments, payouts, search, events, tickets, dashboards, and user profiles using a full-stack approach",
      "Implemented Stripe Checkout and Stripe Connect, handling payment flows, connected accounts, payouts, webhook processing, and financial validations",
      "Designed and integrated full-stack search using Algolia, including indexing, autocomplete, filtering and pagination",
      "Led major backend refactors, introducing service-based architecture, MongoDB transaction management, and scalable event and fighter management systems",
      "Delivered analytics dashboards, notifications, authentication, and real-time updates"
    ],
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "MongoDB", "Stripe", "Algolia", "Express.js"]
  },
  {
    id: "2",
    company: "Polis",
    position: "Full-Stack Developer",
    duration: "August 2024 - January 2025",
    location: "London, United Kingdom (Remote)",
    description: "Developed full-stack features for a booking and payment platform using modern web technologies and GraphQL.",
    responsibilities: [
      "Developed full-stack features using React, Next.js, Node.js, GraphQL, and MongoDB across search, bookings, payments, and user management",
      "Implemented end-to-end booking flows with approval logic, date validation, and payment integration",
      "Built responsive user interfaces and optimized application performance",
      "Collaborated with cross-functional teams to deliver user-centric features",
      "Maintained code quality through reviews and adherence to best practices"
    ],
    technologies: ["React", "Next.js", "Node.js", "GraphQL", "MongoDB", "TypeScript", "JavaScript"]
  },
];
