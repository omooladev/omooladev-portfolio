import { projects } from "./data/projects.js";
import { createProject } from "./utils/createProject.js";
const mainProjects = projects.main;
const moreProjects = projects.more;
for (let index = 0; index < mainProjects.length; index++) {
    const { name, description, Links, technologies, thumbnail } = mainProjects[index];
    createProject({ name, description, Links, technologies, thumbnail });
}
