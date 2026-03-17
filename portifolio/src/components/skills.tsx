import { skillCategories } from "@/app/data/skills";
import { SectionTitle } from "./section-title";

export function Skills() {
  return (
    <section
      id="tecnologias"
      className="relative px-6 py-24 md:px-12 lg:px-24 bg-zinc-50/80 dark:bg-zinc-900/30 border-t border-zinc-200/80 dark:border-zinc-800/80"
    >
      <div className="mx-auto max-w-5xl">
        <SectionTitle
          title="Tecnologias"
          subtitle="Ferramentas e stacks que utilizo no dia a dia."
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {Object.entries(skillCategories).map(([key, { label, skills }]) => (
            <div
              key={key}
              className="group rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-sm transition hover:border-teal-500/50 hover:shadow-lg hover:shadow-teal-500/5 dark:border-zinc-800/80 dark:bg-zinc-900/50 dark:hover:border-teal-500/40"
            >
              <h3 className="font-heading text-lg font-semibold text-zinc-900 dark:text-white">
                {label}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-lg bg-zinc-100 px-3 py-1.5 text-sm font-medium text-zinc-700 transition group-hover:bg-teal-50 group-hover:text-teal-700 dark:bg-zinc-800 dark:text-zinc-300 dark:group-hover:bg-teal-950/50 dark:group-hover:text-teal-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
