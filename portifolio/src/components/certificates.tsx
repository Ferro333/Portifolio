import { certificates } from "@/app/data/certificates";
import { SectionTitle } from "./section-title";

export function Certificates() {
  return (
    <section
      id="certificados"
      className="relative px-6 py-24 md:px-12 lg:px-24 border-t border-zinc-200/80 dark:border-zinc-800/80"
    >
      <div className="mx-auto max-w-3xl">
        <SectionTitle
          title="Certificados e formação"
          subtitle="Cursos e graduações."
        />
        <ul className="space-y-3">
          {certificates.map((cert, i) => (
            <li
              key={i}
              className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-zinc-200/80 bg-white px-5 py-4 shadow-sm transition hover:border-teal-500/40 hover:shadow-md dark:border-zinc-800/80 dark:bg-zinc-900/50"
            >
              <span className="font-medium text-zinc-900 dark:text-white">
                {cert.name}
              </span>
              <span
                className={
                  cert.status === "concluído"
                    ? "rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300"
                    : "rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800 dark:bg-amber-900/50 dark:text-amber-300"
                }
              >
                {cert.status === "concluído" ? "Concluído" : "Em andamento"}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
