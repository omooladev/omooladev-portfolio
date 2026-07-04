import { getTechnologyIcon } from '@/app/utils/getTechnologyIcon';

export interface Technology {
  name: string;
  icon?: string;
  imageSrc?: string;
  colorClass?: string;
}

// A summarized product release, shown as a version timeline on the project page.
export interface Release {
  version: string;
  title: string;
  date: string; // human-readable, e.g. "Jun 2026" or "Unreleased"
  summary: string;
  category?: "feature" | "fix" | "docs" | "internal"; // colors the timeline dot
}

// A link to an external post/write-up about the project (e.g. a LinkedIn post).
export interface SocialPost {
  title: string;
  url: string;
  date?: string;
  platform?: "linkedin" | "twitter" | "other";
}

export interface Project {
  id: string;
  name: string;
  description: string;
  fullDescription?: string;
  category: string; // e.g., "news", "ecommerce", "tools", "chat", etc.
  links: {
    github: string;
    demo?: string; // optional — some projects are not deployed yet
  };
  privateRepo?: boolean; // repo is private — disable the GitHub / "View Code" buttons
  technologies: Technology[];
  thumbnail: string;
  websitePreview?: string; // For the hover effect showing the full website
  features?: string[];
  challenges?: string[];
  releases?: Release[]; // Version history, newest first
  social?: {
    posts?: SocialPost[]; // Curated list of write-ups / posts
    searchUrl?: string; // Optional "see all posts" link (e.g. a LinkedIn search)
  };
}

const getTechnology = (name: string): Technology => {
  const { technologyName, technologyIcon, technologyImageSrc } = getTechnologyIcon(name);

  // Special cases with custom images
  const specialCases: { [key: string]: Technology } = {
    "Webpack": { name: "Webpack", imageSrc: "/icons/webpack.svg" },
    "Cloudinary": { name: "", imageSrc: "/icons/cloudinary.svg" },
  };

  if (specialCases[name]) {
    return specialCases[name];
  }

  return {
    name: technologyName,
    icon: technologyIcon,
    imageSrc: technologyImageSrc,
  };
};

export const projects: Project[] = [
  {
    id: "knowli",
    name: "Knowli",
    description: "A public quiz platform where anyone signs up, builds a short quiz about themselves, and shares a personal link with friends. Friends answer, see how well they really know the creator, share their score on WhatsApp, and open a thank-you gift — no account needed to play.",
    fullDescription: "Knowli started as a single-person quiz (\"How well do you know me?\") and grew, over 15+ releases, into a full multi-user product. Every user is now a creator with their own quiz at /u/<username>, a dashboard with stat cards and an activity feed, per-recipient gifts, and creator self-tests kept separate from real player results. It ships a complete platform layer: self-service signup, multi-admin auth gated behind super-admin approval, database-driven free-tier limits with creator tiers and email verification, an in-app notification system, limit-increase requests with an admin approval queue, and Google Analytics — all backed by a real v1→v2 data migration run against the live database.",
    category: "platform",
    links: {
      github: "https://github.com/omooladev/knowli",
      demo: "https://www.knowli.xyz"
    },
    privateRepo: true,
    technologies: [
      getTechnology("Next.js"),
      getTechnology("React"),
      getTechnology("Typescript"),
      getTechnology("Tailwind CSS"),
      getTechnology("MongoDB"),
      getTechnology("Node.js"),
    ],
    thumbnail: "/project-images/knowli.PNG",
    websitePreview: "https://www.knowli.xyz",
    features: [
      "Self-service creator signup — build your own quiz and share it at /u/<username>",
      "Play with no account — just enter the name the creator knows you by",
      "Server-side grading; correct answers are never sent to the browser",
      "Per-recipient thank-you gifts with save-as-image and WhatsApp lead capture",
      "Creator dashboard with stat cards, activity feed, and per-submission breakdowns",
      "Creator tiers + free email verification to raise free-tier limits",
      "In-app notification system with a live unread badge and per-category preferences",
      "Multi-admin oversight gated behind a super-admin approval step",
      "Community-ranked suggested questions to seed a new quiz in one click",
    ],
    challenges: [
      "Opening a single-owner v1 app into a multi-tenant platform via an expand → migrate → contract database migration, run idempotently against the live v1 data",
      "Resolving each creator's real limits from three layers — global defaults, tier/verification, and per-creator overrides — consistently across every page",
      "Keeping creator self-tests fully isolated from real player results so testing never skews popularity, analytics, or archiving",
    ],
    releases: [
      { version: "v2.10.0", title: "Google Analytics", date: "Jun 2026", category: "feature", summary: "Added Google Analytics to understand real usage, with a transparent new Analytics section in the privacy policy disclosing exactly what's collected." },
      { version: "v2.9.0", title: "Request Higher Limits & Boosted Caps", date: "Jun 2026", category: "feature", summary: "Verified creators can request a manual limit increase from the dashboard, with a full admin review/approval queue and \"Boosted\" indicators on manually raised caps." },
      { version: "v2.8.0", title: "Smarter Suggestions & Local Times", date: "Jun 2026", category: "feature", summary: "Suggested questions now rank by community popularity, and every date/time renders in the visitor's own time zone instead of UTC." },
      { version: "v2.7.2", title: "Correct Content Limits", date: "Jun 2026", category: "fix", summary: "The Questions and Gifts pages now show and enforce each creator's real cap (tier + verification + overrides) instead of the basic free-tier number." },
      { version: "v2.7.1", title: "Dashboard Header Mobile Fix", date: "Jun 2026", category: "fix", summary: "Restructured the dashboard header so the notification bell no longer overflows on small screens." },
      { version: "v2.7.0", title: "Notifications", date: "Jun 2026", category: "feature", summary: "A full in-app notification system: a dashboard bell with a live unread badge, a notifications page, per-category preferences, and alerts on quiz plays, email changes, and tier updates." },
      { version: "v2.6.0", title: "Friendly Error Pages", date: "Jun 2026", category: "fix", summary: "Errors now show a friendly page with a \"Try again\" option instead of a blank or broken screen." },
      { version: "v2.5.0", title: "Creator Tiers & Email Verification", date: "Jun 2026", category: "feature", summary: "Creators raise their free limits by verifying an email via a 6-digit code — more questions, gifts, and responses at no cost. Early creators sit on higher Founder / Top Founder tiers, with a full limits explainer." },
      { version: "v2.4.1", title: "Signed-in Users Skip Auth Pages", date: "Jun 2026", category: "fix", summary: "Logged-in creators and admins now land straight on their dashboard instead of seeing the home or sign-in screens." },
      { version: "v2.4.0", title: "Suggested Questions & \"Create Your Own Quiz\" CTA", date: "Jun 2026", category: "feature", summary: "New creators get a curated pool of suggested questions to seed their quiz in one click; players who finish a quiz are invited to create their own." },
      { version: "v2.3.0", title: "Per-Result Detail & Scaffold Cleanup", date: "Jun 2026", category: "feature", summary: "Creators can open any submission for a question-by-question breakdown of what a player picked versus the correct answer. Also removed leftover Next.js starter branding." },
      { version: "v2.2.0", title: "AppSettings Collection Rename", date: "Jun 2026", category: "internal", summary: "Internal cleanup — the global-settings document moved to a self-describing appsettings collection. No user-facing change." },
      { version: "v2.1.0", title: "Global Defaults & Limits", date: "Jun 2026", category: "internal", summary: "Platform staff can set global free-tier caps and default question counts from the CLI, with no deploy needed." },
      { version: "v2.0.0", title: "Public, Multi-User Platform", date: "Jun 2026", category: "feature", summary: "The big one: Knowli became a platform. Anyone signs up, builds their own quiz, and shares /u/<username>. Adds the creator dashboard, per-recipient gifts, self-tests, multi-admin auth with super-admin approval, DB-driven free-tier limits, privacy/terms, and a live v1→v2 data migration." },
      { version: "v1.1.0", title: "Documentation & Testing Groundwork", date: "Jun 2026", category: "docs", summary: "Docs-only: a proper README front door and a plain-language, page-by-page testing checklist anyone can follow. No behaviour change." },
      { version: "v1.0.0", title: "How Well Do You Know Me?", date: "Jun 2026", category: "feature", summary: "The first release: friends take a personal quiz from one shared link, get a score, share it on WhatsApp, and open a thank-you gift — no account needed. A private admin area manages questions and gifts and reviews submissions, with CSV bulk-import." },
    ],
    social: {
      posts: [
        // TODO: replace with real "Copy link to post" permalinks from your LinkedIn posts.
        { title: "Knowli v2 — from a one-person quiz to a public platform", url: "https://www.linkedin.com/in/omosuyiolawole/", date: "Jun 2026", platform: "linkedin" },
        { title: "Building the per-recipient gift flow in Knowli", url: "https://www.linkedin.com/in/omosuyiolawole/", date: "Jun 2026", platform: "linkedin" },
      ],
      // A public URL can't hard-filter to only your posts (that needs your numeric
      // member URN + a logged-in viewer). Adding your name biases results toward you.
      searchUrl: "https://www.linkedin.com/search/results/content/?keywords=knowli%20omosuyi%20olawole",
    },
  },
  {
    id: "omocollege",
    name: "OmoCollege",
    description: "A web platform for Omo College secondary school that lets students take tests and exams online, submit assignments, and view their results — while giving admins full control to create content and track student performance.",
    fullDescription: "OmoCollege is a full-stack school platform built with Next.js 16 and MongoDB. Students self-register (with an auto-generated Student ID) and can log in only after an admin approves their account. Authentication is fully built — JWT sessions, role-based route protection, and login via surname or Student ID — with a separate protected admin area. Admins approve or reject students, view student lists and details, and upload per-subject results with flexible CA components and an exam score that auto-computes the total and grade; students then view their own results read-only. The online test/exam and assignment systems are the next major areas of work.",
    category: "education",
    links: {
      github: "https://github.com/omooladev/omocollege",
      demo: "https://omocollege.vercel.app"
    },
    privateRepo: true,
    technologies: [
      getTechnology("Next.js"),
      getTechnology("React"),
      getTechnology("Typescript"),
      getTechnology("Tailwind CSS"),
      getTechnology("MongoDB"),
      getTechnology("Node.js"),
    ],
    thumbnail: "/project-images/omocollege.PNG",
    websitePreview: "https://omocollege.vercel.app",
    features: [
      "Student self-registration with an auto-generated Student ID",
      "Admin approval workflow — only active accounts can sign in (pending/rejected are blocked)",
      "JWT-based authentication with role-based route protection",
      "Login via surname or Student ID",
      "Separate protected admin area with its own login and CLI-created admins",
      "Per-subject result upload with flexible CA components and auto total/grade",
      "Read-only student results dashboard",
      "Env-controlled maintenance mode (\"opening soon\" gate)",
    ],
    challenges: [
      "Designing a role-based access model that keeps students, admins, and pending accounts strictly separated at the route level",
      "Building a flexible results model that supports varying continuous-assessment components while auto-computing totals and grades",
      "Generating collision-free, human-readable Student IDs at registration time",
    ],
  },
  {
    id: "flownews",
    name: "FlowNews",
    description: "An interactive news platform that provides users with up-to-date global news and offers registration for contributors. This feature enables users to share their own content and local events, ensuring continuous updates for all.",
    fullDescription: "FlowNews is a comprehensive news platform built with the MERN stack. It allows users to browse the latest news from around the world while also giving them the ability to become contributors and share their own stories. The platform features user authentication, a rich text editor for creating articles, and a responsive design that works seamlessly across all devices.",
    category: "news",
    links: {
      github: "https://github.com/omooladev/flownews",
      demo: "https://flownews.netlify.app"
    },
    technologies: [
      getTechnology("HTML5"),
      getTechnology("CSS3"),
      getTechnology("Sass"),
      getTechnology("Javascript"),
      getTechnology("React"),
      getTechnology("Node.js"),
      getTechnology("ExpressJS"),
      getTechnology("MongoDB"),
    ],
    thumbnail: "/project-images/flownews.PNG",
    websitePreview: "https://flownews.netlify.app",
    features: [
      "Real-time news updates from global sources",
      "User authentication and authorization",
      "Contributor registration system",
      "Rich text editor for article creation",
      "Responsive design for all devices",
      "Search and filter functionality"
    ],
    challenges: [
      "Implementing real-time updates without overwhelming the server",
      "Designing an intuitive content management system",
      "Ensuring secure user authentication and data protection"
    ]
  },
  {
    id: "shopcommerce",
    name: "ShopCommerce",
    description: "An e-commerce platform enabling users to browse and purchase products, with administrative capabilities for adding, editing, and deleting products",
    fullDescription: "ShopCommerce is a full-featured e-commerce solution that provides both customer and admin interfaces. Customers can browse products, add items to their cart, and complete purchases securely. Administrators have access to a comprehensive dashboard for managing products, orders, and inventory with image upload capabilities via Cloudinary.",
    category: "ecommerce",
    links: {
      github: "https://github.com/omooladev/ShopCommerce",
      demo: "https://shopcommerce.onrender.com"
    },
    technologies: [
      getTechnology("HTML5"),
      getTechnology("CSS3"),
      getTechnology("Sass"),
      getTechnology("Javascript"),
      getTechnology("Typescript"),
      getTechnology("EJS"),
      getTechnology("Node.js"),
      getTechnology("ExpressJS"),
      getTechnology("MongoDB"),
      getTechnology("Cloudinary"),
    ],
    thumbnail: "/project-images/shopcommerce.PNG",
    websitePreview: "https://shopcommerce.onrender.com",
    features: [
      "Product browsing and search",
      "Shopping cart functionality",
      "Secure checkout process",
      "Admin dashboard for product management",
      "Image upload and optimization with Cloudinary",
      "Order tracking and management",
      "User authentication and profiles"
    ],
    challenges: [
      "Implementing secure payment processing",
      "Managing product inventory in real-time",
      "Optimizing image uploads and storage with Cloudinary"
    ]
  },
  {
    id: "cropify",
    name: "Cropify",
    description: "Cropify allows you to effortlessly crop any image in your collection, regardless of format. It takes the hassle out of image cropping, making it accessible to everyone, regardless of technical expertise.",
    fullDescription: "Cropify is a user-friendly image cropping tool built with modern web technologies. It leverages the Cropper.js library to provide professional-grade image cropping capabilities directly in the browser. The application is bundled with Webpack for optimal performance and supports various image formats.",
    category: "tools",
    links: {
      github: "https://github.com/omooladev/Cropify",
      demo: "https://cropify.vercel.app/"
    },
    technologies: [
      getTechnology("HTML5"),
      getTechnology("CSS3"),
      getTechnology("Sass"),
      getTechnology("Javascript"),
      getTechnology("Webpack"),
      getTechnology("Cropper.Js"),
    ],
    thumbnail: "/project-images/cropify.PNG",
    websitePreview: "https://cropify.vercel.app/",
    features: [
      "Support for multiple image formats",
      "Intuitive drag-and-resize interface",
      "Aspect ratio presets",
      "Real-time preview",
      "High-quality image export",
      "No server-side processing - everything runs in the browser"
    ],
    challenges: [
      "Maintaining image quality during cropping",
      "Handling large image files efficiently",
      "Creating an intuitive user interface for technical and non-technical users"
    ]
  },
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.id === slug);
};

export const getSimilarProjects = (currentProjectId: string, limit: number = 3): Project[] => {
  const currentProject = projects.find(p => p.id === currentProjectId);
  if (!currentProject) return projects.filter(p => p.id !== currentProjectId).slice(0, limit);

  // First, get projects from the same category
  const sameCategory = projects.filter(
    p => p.id !== currentProjectId && p.category === currentProject.category
  );

  // If we have enough projects from same category, return them
  if (sameCategory.length >= limit) {
    return sameCategory.slice(0, limit);
  }

  // Otherwise, fill remaining slots with other projects
  const otherProjects = projects.filter(
    p => p.id !== currentProjectId && p.category !== currentProject.category
  );

  return [...sameCategory, ...otherProjects].slice(0, limit);
};
