import { experiences } from '@/data/experience';
import { getCompanyLink } from '@/app/utils/getCompanyLink';

export default function ExperienceSection() {
  return (
    <section id="experience" className="bg-gray-50 dark:bg-zinc-800/50 section-padding">
      <div className="wrapper">
        <h2 className="section-header">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp) => {
            const companyLink = getCompanyLink(exp.company);

            return (
              <div
                key={exp.id}
                className="bg-white dark:bg-zinc-900 rounded-lg shadow-lg p-6 md:p-8 hover:shadow-2xl transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                      {exp.position}
                    </h3>
                    {companyLink ? (
                      <a
                        href={companyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xl text-primary dark:text-primary-dark font-medium hover:underline inline-flex items-center gap-2"
                      >
                        {exp.company}
                        <i className="fa-solid fa-external-link-alt text-sm" aria-hidden="true" />
                      </a>
                    ) : (
                      <p className="text-xl text-primary dark:text-primary-dark font-medium">
                        {exp.company}
                      </p>
                    )}
                  </div>
                  <div className="mt-2 md:mt-0 text-gray-600 dark:text-gray-400">
                    <p className="font-medium">{exp.duration}</p>
                    <p>{exp.location}</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{exp.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    Key Responsibilities:
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                    {exp.responsibilities.map((responsibility, index) => (
                      <li key={index}>{responsibility}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary/10 dark:bg-primary-dark/20 text-primary dark:text-primary-dark rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
