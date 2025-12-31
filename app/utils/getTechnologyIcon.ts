export interface TechnologyIcon {
  technologyName: string;
  technologyIcon: string;
  technologyImageSrc: string;
}

export const getTechnologyIcon = (name: string): TechnologyIcon => {
  let technologyImageSrc = "";

  const technologyMap: Record<string, { icon: string }> = {
    "HTML5": { icon: "bx bxl-html5 html-icon" },
    "CSS3": { icon: "bx bxl-css3 css-icon" },
    "Sass": { icon: "bx bxl-sass sass-icon" },
    "Javascript": { icon: "bx bxl-javascript javascript-icon" },
    "Typescript": { icon: "bx bxl-typescript typescript-icon" },
    "React": { icon: "bx bxl-react react-icon" },
    "Node.js": { icon: "bx bxl-nodejs node-icon" },
    "MongoDB": { icon: "bx bxl-mongodb mongodb-icon" },
    "Webpack": { icon: "bx bxs-package webpack-icon" },
    "Next.js": { icon: "bx bxl-react react-icon" },
    "Tailwind CSS": { icon: "bx bxl-tailwind-css css-icon" },
    "Git": { icon: "bx bxl-git git-icon" },
    "GitHub": { icon: "bx bxl-github github-icon" },
    "Express": { icon: "bx bxl-nodejs node-icon" },
    "ExpressJS": { icon: "bx bxl-nodejs node-icon" },
    "PostgreSQL": { icon: "bx bxs-data postgresql-icon" },
    "MySQL": { icon: "bx bxs-data mysql-icon" },
    "Python": { icon: "bx bxl-python python-icon" },
    "Django": { icon: "bx bxl-django django-icon" },
    "Vue": { icon: "bx bxl-vuejs vue-icon" },
    "Angular": { icon: "bx bxl-angular angular-icon" },
    "Docker": { icon: "bx bxl-docker docker-icon" },
    "AWS": { icon: "bx bxl-aws aws-icon" },
    "Firebase": { icon: "bx bxl-firebase firebase-icon" },
    "Redux": { icon: "bx bxl-redux redux-icon" },
    "EJS": { icon: "bx bx-code-block ejs-icon" },
    "Cropper.Js": { icon: "bx bx-crop cropper-icon" },
  };

  const technology = technologyMap[name];

  if (technology) {
    return {
      technologyName: name,
      technologyIcon: technology.icon,
      technologyImageSrc,
    };
  }

  // Default fallback
  return {
    technologyName: name,
    technologyIcon: "bx bx-code-alt",
    technologyImageSrc,
  };
};
