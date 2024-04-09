const projectContainer = document.querySelector(".projects-container");
export const createProject = (project) => {
    const singleProject = document.createElement("div");
    console.log(project);
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
