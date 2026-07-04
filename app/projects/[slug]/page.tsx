import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects, getProjectBySlug, getSimilarProjects } from "@/data/projects";

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
      description: "The requested project could not be found.",
    };
  }

  const technologies = project.technologies.map(tech => tech.name).filter(Boolean).join(', ');

  return {
    title: `${project.name} | Omosuyi Olawole - Full-Stack Developer`,
    description: project.fullDescription || project.description,
    keywords: [
      project.name,
      project.category,
      ...project.technologies.map(tech => tech.name).filter(Boolean),
      'Web Development',
      'Portfolio Project',
    ],
    authors: [{ name: 'Omosuyi Olawole' }],
    openGraph: {
      title: `${project.name} | Omosuyi Olawole`,
      description: project.description,
      type: 'website',
      url: `https://omooladev-portfolio-dev.vercel.app/projects/${project.id}`,
      images: [
        {
          url: project.thumbnail,
          width: 1200,
          height: 630,
          alt: `${project.name} - ${project.category} project`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.name} | Omosuyi Olawole`,
      description: project.description,
      images: [project.thumbnail],
      creator: '@omooladev',
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
      <div className="relative min-h-[400px] md:h-[60vh] bg-gray-900">
        <Image
          src={project.thumbnail}
          alt={project.name}
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="wrapper py-8">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 md:mb-6 transition-colors text-sm md:text-base"
            >
              <i className="bx bx-left-arrow-alt text-xl md:text-2xl" />
              <span>Back to Projects</span>
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
              {project.name}
            </h1>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              {project.links.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center justify-center gap-2 text-sm md:text-base"
                >
                  <i className="fa-solid fa-external-link-alt" aria-hidden="true" />
                  <span>Live Demo</span>
                </a>
              )}
              {project.privateRepo ? (
                <span
                  className="btn-secondary bg-white/5 border-white/40 text-white/60 cursor-not-allowed flex items-center justify-center gap-2 text-sm md:text-base"
                  title="Private repository"
                >
                  <i className="fa-solid fa-lock" aria-hidden="true" />
                  Private Repo
                </span>
              ) : (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary bg-white/10 border-white text-white hover:bg-white hover:text-gray-900 flex items-center justify-center gap-2 text-sm md:text-base"
                >
                  <i className="fa-brands fa-github" aria-hidden="true" />
                  View Code
                </a>
              )}
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
                      <i className="bx bx-check-circle text-2xl text-primary dark:text-primary-dark flex-shrink-0 mt-1" />
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

            {/* Releases */}
            {project.releases && project.releases.length > 0 && (
              <div>
                <h2 className="text-3xl font-bold mb-2">Release History</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {project.releases.length} shipped releases — a summarized changelog of how this
                  product evolved over time.
                </p>
                <ol className="relative border-l-2 border-gray-200 dark:border-zinc-700 ml-2 space-y-6">
                  {project.releases.map((release) => {
                    const dotColor =
                      release.category === "fix"
                        ? "bg-yellow-500"
                        : release.category === "docs"
                          ? "bg-blue-500"
                          : release.category === "internal"
                            ? "bg-gray-400"
                            : "bg-primary dark:bg-primary-dark";
                    return (
                      <li key={release.version} className="ml-6">
                        <span
                          className={`absolute -left-[9px] mt-1.5 h-4 w-4 rounded-full ring-4 ring-white dark:ring-zinc-900 ${dotColor}`}
                          aria-hidden="true"
                        />
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-1">
                          <span className="font-mono text-sm font-semibold px-2 py-0.5 rounded bg-gray-100 dark:bg-zinc-700 text-gray-900 dark:text-gray-100">
                            {release.version}
                          </span>
                          <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                            {release.title}
                          </h3>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {release.date}
                          </span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                          {release.summary}
                        </p>
                      </li>
                    );
                  })}
                </ol>
              </div>
            )}

            {/* Social / Write-ups */}
            {project.social && (project.social.posts?.length || project.social.searchUrl) && (
              <div>
                <h2 className="text-3xl font-bold mb-2">Social & Write-ups</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Posts where I share progress and lessons from building this project.
                </p>
                {project.social.posts && project.social.posts.length > 0 && (
                  <ul className="space-y-3">
                    {project.social.posts.map((post, index) => (
                      <li key={index}>
                        <a
                          href={post.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center gap-4 p-4 rounded-lg bg-gray-50 dark:bg-zinc-800 hover:bg-gray-100 dark:hover:bg-zinc-700 transition-colors"
                        >
                          <i
                            className={`text-2xl flex-shrink-0 ${
                              post.platform === "twitter"
                                ? "fa-brands fa-x-twitter"
                                : "fa-brands fa-linkedin text-[#0a66c2]"
                            }`}
                            aria-hidden="true"
                          />
                          <span className="flex-1">
                            <span className="block font-medium text-gray-900 dark:text-gray-100 group-hover:text-primary dark:group-hover:text-primary-dark transition-colors">
                              {post.title}
                            </span>
                            {post.date && (
                              <span className="block text-sm text-gray-500 dark:text-gray-400">
                                {post.date}
                              </span>
                            )}
                          </span>
                          <i className="fa-solid fa-arrow-up-right-from-square text-gray-400 group-hover:text-primary dark:group-hover:text-primary-dark transition-colors" aria-hidden="true" />
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
                {project.social.searchUrl && (
                  <a
                    href={project.social.searchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 text-primary dark:text-primary-dark hover:gap-3 transition-all font-medium"
                  >
                    See all my posts about {project.name} on LinkedIn
                    <i className="bx bx-right-arrow-alt text-2xl" />
                  </a>
                )}
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
          <div className="space-y-6 lg:sticky lg:top-24 lg:self-start">
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
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-primary/10 dark:bg-primary-dark/20 text-primary dark:text-primary-dark rounded-lg hover:bg-primary/20 dark:hover:bg-primary-dark/30 transition-colors"
                  >
                    <i className="fa-solid fa-external-link-alt text-xl" aria-hidden="true" />
                    <span className="font-medium">Visit Live Site</span>
                  </a>
                )}
                {project.privateRepo ? (
                  <div
                    className="flex items-center gap-3 p-3 bg-gray-100 dark:bg-zinc-700 text-gray-400 dark:text-gray-500 rounded-lg cursor-not-allowed"
                    title="Private repository"
                  >
                    <i className="fa-solid fa-lock text-xl" aria-hidden="true" />
                    <span className="font-medium">Private Repository</span>
                  </div>
                ) : (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-gray-100 dark:bg-zinc-700 text-gray-900 dark:text-gray-100 rounded-lg hover:bg-gray-200 dark:hover:bg-zinc-600 transition-colors"
                  >
                    <i className="fa-brands fa-github text-xl" aria-hidden="true" />
                    <span className="font-medium">View Source Code</span>
                  </a>
                )}
              </div>
            </div>

            {/* Share */}
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-4">Share This Project</h3>
              <div className="flex gap-3">
                <a
                  href={`https://twitter.com/intent/tweet?text=Check out ${project.name}&url=${project.links.demo || project.links.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-3 bg-primary/10 dark:bg-primary-dark/20 text-primary dark:text-primary-dark rounded-lg hover:bg-primary/20 dark:hover:bg-primary-dark/30 transition-colors"
                  aria-label="Share on Twitter"
                >
                  <i className="fa-brands fa-x-twitter text-xl" aria-hidden="true" />
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${project.links.demo || project.links.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-3 bg-primary/10 dark:bg-primary-dark/20 text-primary dark:text-primary-dark rounded-lg hover:bg-primary/20 dark:hover:bg-primary-dark/30 transition-colors"
                  aria-label="Share on LinkedIn"
                >
                  <i className="fa-brands fa-linkedin-in text-xl" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Projects */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-8">Similar Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getSimilarProjects(project.id, 3).map((otherProject) => (
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
