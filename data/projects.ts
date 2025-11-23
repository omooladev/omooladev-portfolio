export interface Technology {
  name: string;
  icon?: string;
  imageSrc?: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  fullDescription?: string;
  links: {
    github: string;
    demo: string;
  };
  technologies: Technology[];
  thumbnail: string;
  websitePreview?: string; // For the hover effect showing the full website
  features?: string[];
  challenges?: string[];
}

const getTechnology = (name: string): Technology => {
  const techMap: { [key: string]: Technology } = {
    "HTML5": { name: "HTML5", icon: "bx bxl-html5" },
    "CSS3": { name: "CSS3", icon: "bx bxl-css3" },
    "Sass": { name: "Sass", icon: "bx bxl-sass" },
    "Javascript": { name: "Javascript", icon: "bx bxl-javascript" },
    "Typescript": { name: "Typescript", icon: "bx bxl-typescript" },
    "React": { name: "React", icon: "bx bxl-react" },
    "Node.js": { name: "Node.js", icon: "bx bxl-nodejs" },
    "MongoDB": { name: "MongoDB", icon: "bx bxl-mongodb" },
    "ExpressJS": { name: "ExpressJS", icon: "bx bxs-server" },
    "Webpack": { name: "Webpack", imageSrc: "/icons/webpack.svg" },
    "Cloudinary": { name: "", imageSrc: "/icons/cloudinary.svg" },
    "EJS": { name: "EJS", icon: "bx bx-code-block" },
    "Cropper.Js": { name: "Cropper.Js", icon: "bx bx-crop" },
  };

  return techMap[name] || { name };
};

export const projects: Project[] = [
  {
    id: "flownews",
    name: "FlowNews",
    description: "An interactive news platform that provides users with up-to-date global news and offers registration for contributors. This feature enables users to share their own content and local events, ensuring continuous updates for all.",
    fullDescription: "FlowNews is a comprehensive news platform built with the MERN stack. It allows users to browse the latest news from around the world while also giving them the ability to become contributors and share their own stories. The platform features user authentication, a rich text editor for creating articles, and a responsive design that works seamlessly across all devices.",
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
