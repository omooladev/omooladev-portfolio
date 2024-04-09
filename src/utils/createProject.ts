interface Project {
  name: string;
  description: string;
  Links: { github: string; demo: string };
  technologies: string[];
  thumbnail: string;
}
export const createProject = (project: Project) => {
  console.log(project);
};
