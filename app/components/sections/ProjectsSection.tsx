import Link from 'next/link';
import ProjectCard from '../ProjectCard';
import { projects } from '@/data/projects';

export default function ProjectsSection() {
  return (
    <section id="project" className="wrapper section-padding">
      <h2 className="section-header">Projects</h2>
      <p className="text-gray-600 dark:text-gray-400 text-lg mb-12 max-w-3xl">
        The following projects serve as demonstrations of my skills and experience, showcasing real-world
        examples of my work. Each project is concisely described and includes links to code repositories
        and live demos. These projects highlight my proficiency in solving complex problems, working with
        various technologies, and effectively managing projects.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} priority={index === 0} />
        ))}
      </div>
      <div className="text-center">
        <Link href="/projects" className="btn-primary inline-flex items-center gap-2">
          See all projects
          <i className="bx bx-right-arrow-alt text-2xl" />
        </Link>
      </div>
    </section>
  );
}
