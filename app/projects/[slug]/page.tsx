import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects, getProjectBySlug } from "@/data/projects";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.name} | Omosuyi Olawole`,
    description: project.description,
    openGraph: {
      title: project.name,
      description: project.description,
      images: [project.thumbnail],
    },
  };
}

export default async function ProjectDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[400px] bg-gray-900">
        <Image
          src={project.thumbnail}
          alt={project.name}
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="wrapper">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
            >
              <i className="bx bx-left-arrow-alt text-2xl" />
              Back to Projects
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              {project.name}
            </h1>
            <div className="flex flex-wrap gap-4">
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center gap-2"
              >
                <i className="fa-solid fa-external-link-alt" />
                Live Demo
              </a>
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary bg-white/10 border-white text-white hover:bg-white hover:text-gray-900 flex items-center gap-2"
              >
                <i className="fa-brands fa-github" />
                View Code
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="wrapper mt-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <div>
              <h2 className="text-3xl font-bold mb-4">About This Project</h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-4">
                {project.description}
              </p>
              {project.fullDescription && (
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                  {project.fullDescription}
                </p>
              )}
            </div>

            {/* Features */}
            {project.features && project.features.length > 0 && (
              <div>
                <h2 className="text-3xl font-bold mb-4">Key Features</h2>
                <ul className="space-y-3">
                  {project.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-gray-600 dark:text-gray-400 text-lg"
                    >
                      <i className="bx bx-check-circle text-2xl text-blue-600 dark:text-blue-500 flex-shrink-0 mt-1" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Challenges */}
            {project.challenges && project.challenges.length > 0 && (
              <div>
                <h2 className="text-3xl font-bold mb-4">Challenges & Solutions</h2>
                <ul className="space-y-3">
                  {project.challenges.map((challenge, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-gray-600 dark:text-gray-400 text-lg"
                    >
                      <i className="bx bx-bulb text-2xl text-yellow-600 dark:text-yellow-500 flex-shrink-0 mt-1" />
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Live Preview */}
            {project.websitePreview && (
              <div>
                <h2 className="text-3xl font-bold mb-4">Live Preview</h2>
                <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-2xl border-4 border-gray-200 dark:border-zinc-700">
                  <iframe
                    src={project.websitePreview}
                    className="w-full h-full"
                    title={`Live preview of ${project.name}`}
                    sandbox="allow-scripts allow-same-origin allow-forms"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Technologies */}
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-4">Technologies Used</h3>
              <div className="space-y-3">
                {project.technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-zinc-700 rounded-lg"
                  >
                    {tech.icon && <i className={`${tech.icon} text-3xl`} />}
                    {tech.imageSrc && (
                      <Image
                        src={tech.imageSrc}
                        alt={tech.name}
                        width={32}
                        height={32}
                        className="w-8 h-8"
                      />
                    )}
                    {tech.name && (
                      <span className="font-medium text-gray-900 dark:text-gray-100">
                        {tech.name}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <div className="space-y-3">
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                >
                  <i className="fa-solid fa-external-link-alt text-xl" />
                  <span className="font-medium">Visit Live Site</span>
                </a>
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-gray-100 dark:bg-zinc-700 text-gray-900 dark:text-gray-100 rounded-lg hover:bg-gray-200 dark:hover:bg-zinc-600 transition-colors"
                >
                  <i className="fa-brands fa-github text-xl" />
                  <span className="font-medium">View Source Code</span>
                </a>
              </div>
            </div>

            {/* Share */}
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-4">Share This Project</h3>
              <div className="flex gap-3">
                <a
                  href={`https://twitter.com/intent/tweet?text=Check out ${project.name}&url=${project.links.demo}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-3 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                >
                  <i className="fa-brands fa-twitter text-xl" />
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${project.links.demo}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-3 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                >
                  <i className="fa-brands fa-linkedin-in text-xl" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Other Projects */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-8">Other Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects
              .filter((p) => p.id !== project.id)
              .slice(0, 3)
              .map((otherProject) => (
                <Link
                  key={otherProject.id}
                  href={`/projects/${otherProject.id}`}
                  className="card group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={otherProject.thumbnail}
                      alt={otherProject.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-2">{otherProject.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400 line-clamp-2">
                      {otherProject.description}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
