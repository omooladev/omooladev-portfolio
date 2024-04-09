const projectContainer = document.querySelector(".projects-container");
export const createProject = (project) => {
    const singleProject = document.createElement("div");
    singleProject.classList.add("project");
    //imp<---------- THUMBNAIL STARTS HERE ---------->
    const thumbnail = document.createElement("img");
    const thumbnailContainer = document.createElement("div");
    //----------> attributes and classes
    thumbnail.setAttribute("src", project.thumbnail);
    thumbnail.alt = `An image of the ${project.name} project`;
    thumbnailContainer.classList.add("thumbnail-container");
    //imp<---------- THUMBNAIL ENDS HERE---------->
    //imp<---------- PROJECT DETAILS STARTS HERE ---------->
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
    //imp<---------- PROJECT DETAILS ENDS HERE ---------->
    //----------> append children
    thumbnailContainer.appendChild(thumbnail);
    projectDetailsContainer.append(projectName, projectDescription, projectTechnologies);
    singleProject.appendChild(thumbnailContainer);
    singleProject.appendChild(projectDetailsContainer);
    projectContainer.appendChild(singleProject);
};
const createProjectTechnologies = (technologies, projectTechnologies) => {
    for (let index = 0; index < technologies.length; index++) {
        //----------> create elements
        const icon = document.createElement("i");
        const name = document.createElement("p");
        const technology = document.createElement("div");
        //----------> add classes and inner html
        icon.className = technologies[index].technologyIcon;
        name.innerHTML = technologies[index].technologyName;
        technology.classList.add("technology");
        technology.append(icon, name);
        projectTechnologies.appendChild(technology);
    }
};
