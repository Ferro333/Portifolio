import { projects } from "@/app/data/projects";
import { SectionTitle } from "./section-title";

export function Projects() {
  return (
    <section
      id="projetos"
      className="relative px-6 py-24 md:px-12 lg:px-24 border-t border-zinc-200/80 dark:border-zinc-800/80"
    >
      <div className="mx-auto max-w-5xl">
        <SectionTitle
          title="Projetos em destaque"
          subtitle="Alguns dos projetos que desenvolvi."
        />
        <div className="grid gap-8 sm:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200/80 bg-white shadow-sm transition hover:border-teal-500/40 hover:shadow-xl hover:shadow-teal-500/5 dark:border-zinc-800/80 dark:bg-zinc-900/50"
            >
              <div className="project-placeholder flex h-44 items-center justify-center transition group-hover:opacity-90">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <span className="font-heading text-5xl font-bold text-zinc-400 dark:text-zinc-500">
                    {project.name.charAt(0)}
                  </span>
                )}
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-heading text-xl font-semibold text-zinc-900 dark:text-white">
                  {project.name}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {project.description}
                </p>
                <p className="mt-3 text-xs font-medium text-teal-600 dark:text-teal-400">
                  {project.technologies.join(" · ")}
                </p>
                
                <div className="mt-5 flex flex-wrap gap-2">
                  
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-full border-2 border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 transition hover:border-zinc-400 hover:bg-zinc-50 dark:border-zinc-600 dark:text-zinc-300 dark:hover:bg-zinc-800"
                  >
                    Ver código
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
