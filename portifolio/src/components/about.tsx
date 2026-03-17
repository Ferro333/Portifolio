import { SectionTitle } from "./section-title";

export function About() {
  return (
    <section
      id="sobre"
      className="relative px-6 py-24 md:px-12 lg:px-24 border-t border-zinc-200/80 dark:border-zinc-800/80"
    >
      <div className="mx-auto max-w-3xl">
        <SectionTitle
          title="Sobre mim"
          subtitle="Um pouco da minha trajetória e foco."
        />
        <div className="rounded-2xl border border-zinc-200/80 bg-white p-8 shadow-sm dark:border-zinc-800/80 dark:bg-zinc-900/50">
          <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            Sou desenvolvedor com foco em <strong className="text-zinc-800 dark:text-zinc-200">front-end</strong>, criando aplicações web com
            React, Next.js e TypeScript. Sou formado em Análise e Desenvolvimento
            de Sistemas e atualmente curso Engenharia de Software. Busco evoluir
            cada vez mais em boas práticas, performance, arquitetura e experiência
            do usuário.
          </p>
        </div>
      </div>
    </section>
  );
}
