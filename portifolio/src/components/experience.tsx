import { experience } from "@/app/data/experience";
import { SectionTitle } from "./section-title";

export function Experience() {
  return (
    <section
      id="experiencia"
      className="relative px-6 py-24 md:px-12 lg:px-24 bg-zinc-50/80 dark:bg-zinc-900/30 border-t border-zinc-200/80 dark:border-zinc-800/80"
    >
      <div className="mx-auto max-w-3xl">
        <SectionTitle
          title="Trajetória"
          subtitle="Formação e evolução profissional."
        />
        <div className="relative">
          <div className="absolute left-[11px] top-2 bottom-2 w-px  from-teal-500 via-zinc-300 to-transparent dark:via-zinc-600" />
          <ul className="space-y-8">
            {experience.map((item, i) => (
              <li key={i} className="relative flex gap-6">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-teal-500 bg-white dark:bg-zinc-900 dark:border-teal-400" />
                <div className="rounded-xl border border-zinc-200/80 bg-white px-5 py-4 shadow-sm dark:border-zinc-800/80 dark:bg-zinc-900/50">
                  <p className="text-sm font-semibold text-teal-600 dark:text-teal-400">
                    {item.period}
                  </p>
                  <p className="mt-0.5 font-heading font-semibold text-zinc-900 dark:text-white">
                    {item.title}
                  </p>
                  {item.description && (
                    <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                      {item.description}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
