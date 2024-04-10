const projectContainer = document.querySelector(".projects-container");
export const createProject = (project) => {
    const singleProject = document.createElement("div");
    singleProject.classList.add("project");
    createThumbnail(project, singleProject);
    createProjectDetails(project, singleProject);
    createProjectLink(project, singleProject);
    projectContainer.appendChild(singleProject);
};
const createThumbnail = (project, singleProject) => {
    const thumbnailContainer = document.createElement("div");
    const thumbnail = document.createElement("img");
    //----------> attributes and classes
    thumbnail.setAttribute("src", project.thumbnail);
    thumbnail.alt = `An image of the ${project.name} project`;
    thumbnailContainer.classList.add("thumbnail-container");
    thumbnailContainer.appendChild(thumbnail);
    singleProject.appendChild(thumbnailContainer);
};
const createProjectDetails = (project, singleProject) => {
    const projectName = document.createElement("h3");
    const projectDescription = document.createElement("p");
    const projectTechnologies = document.createElement("div");
    createProjectTechnologies(project.technologies, projectTechnologies);
    const projectDetailsContainer = document.createElement("div");
    //----------> texts
    projectName.innerHTML = project.name;
    projectDescription.innerHTML = project.description;
    //----------> attributes and classes
    projectName.classList.add("project-details_name");
    projectDescription.classList.add("project-details_description");
    projectTechnologies.classList.add("project-details_technologies");
    projectDetailsContainer.classList.add("project-details");
    //---------->append children
    projectDetailsContainer.append(projectName, projectDescription, projectTechnologies);
    singleProject.append(projectDetailsContainer);
};
const createProjectTechnologies = (technologies, projectTechnologies) => {
    for (let index = 0; index < technologies.length; index++) {
        //----------> create elements
        const technology = document.createElement("div");
        //----------> add classes and inner html
        technology.classList.add("technology");
        if (technologies[index].technologyIcon) {
            const icon = document.createElement("i");
            icon.className = technologies[index].technologyIcon;
            technology.append(icon);
        }
        if (technologies[index].technologyImageSrc) {
            let src = technologies[index].technologyImageSrc;
            const image = document.createElement("img");
            if (technologies[index].technologyImageSrc.includes("style-different")) {
                src = src.split("?")[0];
                image.classList.add("type-1"); //----------> type 1 has the image and name together
            }
            image.setAttribute("src", technologies[index].technologyImageSrc);
            technology.append(image);
        }
        if (technologies[index].technologyName) {
            const name = document.createElement("p");
            name.innerHTML = technologies[index].technologyName;
            technology.append(name);
        }
        projectTechnologies.appendChild(technology);
    }
};
const createProjectLink = (project, singleProject) => {
    const linkContainer = document.createElement("div");
    const githubLink = document.createElement("a");
    const demoLink = document.createElement("a");
    const githubIcon = document.createElement("i");
    const demoIcon = document.createElement("i");
    //---------->attributes and classes
    githubLink.setAttribute("href", project.Links.github);
    githubLink.setAttribute("target", "_blank");
    demoLink.setAttribute("href", project.Links.demo);
    demoLink.setAttribute("target", "_blank");
    githubIcon.className = "bx bxl-github";
    demoIcon.className = "bx bx-link-external";
    linkContainer.classList.add("link-container");
    githubLink.appendChild(githubIcon);
    demoLink.appendChild(demoIcon);
    linkContainer.append(githubLink, demoLink);
    singleProject.append(linkContainer);
};
