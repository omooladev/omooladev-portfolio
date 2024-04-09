import { updateTechnology } from "../utils/updateTechnology.js";

//----------> Display 4 main projects
const generateLinkToThumbnail = (imageName: string) => {
  return `../../assets/project-images/${imageName}`;
};
const updateTechnologiesWithIcon = (technologies: string[]): updatedTechnologies[] => {
  const updatedTechnologies: updatedTechnologies[] = [];
  for (let index = 0; index < technologies.length; index++) {
    const update = updateTechnology(technologies[index]);
    if (update) {
      updatedTechnologies.push(update);
    }
  }
  return updatedTechnologies;
};
export const projects = {
  main: [
    //<----------- PROJECT 1 ---------->\\
    {
      name: "FlowNews",
      description:
        "An interactive news platform that provides users with up-to-date global news and offers registration for contributors .This feature enables users to share their own content and local events, ensuring continuous updates for all.",
      Links: { github: "https://github.com/omooladev/flownews", demo: "https://flownews.netlify.app" },
      technologies: updateTechnologiesWithIcon([
        "HTML5",
        "CSS3",
        "Sass",
        "Javascript",
        "React",
        "Node.js",
        "ExpressJS",
        "MongoDB",
      ]),
      thumbnail: generateLinkToThumbnail("flownews.PNG"), //----------> Link to the image
    },
    //<----------- PROJECT 1 ---------->\\
    {
      name: "ShopCommerce",
      description:
        "An e-commerce platform enabling users to browse and purchase products, with administrative capabilities for adding, editing, and deleting products",
      Links: {
        github: "https://github.com/omooladev/ShopCommerce",
        demo: "https://shopcommerce.onrender.com",
      },
      technologies: updateTechnologiesWithIcon([
        "HTML5",
        "CSS3",
        "Sass",
        "Javascript",
        "Typescript",
        "EJS",
        "Node.js",
        "ExpressJS",
        "MongoDB",
        "Cloudinary",
      ]),
      thumbnail: generateLinkToThumbnail("shopcommerce.PNG"), //----------> Link to the image
    },
  ],
  more: [{}],
};
