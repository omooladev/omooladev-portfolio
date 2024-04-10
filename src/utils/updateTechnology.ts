export const updateTechnology = (name: string) => {
  let technologyImageSrc = "";
  if (name === "HTML5") {
    let technologyName = name;
    let technologyIcon = "bx bxl-html5 html-icon";
    return { technologyName, technologyIcon, technologyImageSrc };
  }
  if (name === "CSS3") {
    let technologyName = name;
    let technologyIcon = "bx bxl-css3 css-icon";
    return { technologyName, technologyIcon, technologyImageSrc };
  }
  if (name === "Sass") {
    let technologyName = name;
    let technologyIcon = "bx bxl-sass sass-icon";
    return { technologyName, technologyIcon, technologyImageSrc };
  }
  if (name === "Javascript") {
    let technologyName = name;
    let technologyIcon = "bx bxl-javascript javascript-icon";
    return { technologyName, technologyIcon, technologyImageSrc };
  }
  if (name === "Typescript") {
    let technologyName = name;
    let technologyIcon = "bx bxl-typescript typescript-icon";
    return { technologyName, technologyIcon, technologyImageSrc };
  }
  if (name === "React") {
    let technologyName = name;
    let technologyIcon = "bx bxl-react react-icon";
    return { technologyName, technologyIcon, technologyImageSrc };
  }
  if (name === "Node.js") {
    let technologyName = name;
    let technologyIcon = "bx bxl-nodejs node-icon";
    return { technologyName, technologyIcon, technologyImageSrc };
  }
  if (name === "MongoDB") {
    let technologyName = name;
    let technologyIcon = "bx bxl-mongodb mongodb-icon";
    return { technologyName, technologyIcon, technologyImageSrc };
  }
  if (name === "Webpack") {
    let technologyName = name;
    let technologyIcon = "";
    let technologyImageSrc = "./assets/icons/webpack.svg";
    return { technologyName, technologyIcon, technologyImageSrc };
  }
  // if (name === "Cropper.Js") {
  //   let technologyName = name;
  //   let technologyIcon = "";
  //   let technologyImageSrc = "";
  //   return { technologyName, technologyIcon, technologyImageSrc };
  // }
  if (name === "Cloudinary") {
    let technologyName = ""; //----------> we make this empty because the cloudinary icon has the name already
    let technologyIcon = "";
    let technologyImageSrc = "./assets/icons/cloudinary.svg?style-different";
    return { technologyName, technologyIcon, technologyImageSrc };
  }
};

//Express.js
//"EJS",
