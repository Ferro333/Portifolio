import Link from "next/link";
import { contact } from "@/app/data/contact";

const cvUrl = "/curriculo.pdf";

export function Hero() {
  return (
    <section
      id="hero"
      className="hero-gradient relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-20 md:px-12 lg:px-24 text-center"
    >
      <div className="max-w-3xl mx-auto">
        <p className="animate-fade-in-up text-sm font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400">
          Desenvolvedor Front-End
        </p>
        <h1 className="font-heading mt-2 text-4xl font-bold tracking-tight text-zinc-900 dark:text-white md:text-5xl lg:text-6xl animate-fade-in-up animate-delay-1 opacity-0 [animation-fill-mode:forwards]">
          Tiago Ferro
        </h1>
        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400 md:text-xl animate-fade-in-up animate-delay-2 opacity-0 [animation-fill-mode:forwards]">
          Next.js · TypeScript · React
        </p>
        <p className="mt-6 max-w-2xl mx-auto text-base leading-relaxed text-zinc-600 dark:text-zinc-400 animate-fade-in-up animate-delay-3 opacity-0 [animation-fill-mode:forwards]">
          Formado em Análise e Desenvolvimento de Sistemas e cursando Engenharia
          de Software. Desenvolvo interfaces modernas, responsivas e funcionais.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3 animate-fade-in-up animate-delay-4 opacity-0 [animation-fill-mode:forwards]">
          <Link
            href="#projetos"
            className="inline-flex items-center justify-center rounded-full bg-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-600/25 transition hover:bg-teal-500 hover:shadow-teal-600/30 dark:bg-teal-500 dark:shadow-teal-500/20 dark:hover:bg-teal-400"
          >
            Ver projetos
          </Link>
          <a
            href={cvUrl}
            download
            className="inline-flex items-center justify-center rounded-full border-2 border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-700 transition hover:border-zinc-400 hover:bg-zinc-50 dark:border-zinc-600 dark:text-zinc-300 dark:hover:border-zinc-500 dark:hover:bg-zinc-800/50"
          >
            Baixar currículo
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-2 border-zinc-300 px-5 py-3 text-sm font-semibold text-zinc-700 transition hover:border-zinc-400 hover:bg-zinc-50 dark:border-zinc-600 dark:text-zinc-300 dark:hover:bg-zinc-800/50"
            aria-label="GitHub"
          >
            <GitHubIcon />
            GitHub
          </a>
          <a
            href={contact.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-2 border-zinc-300 px-5 py-3 text-sm font-semibold text-zinc-700 transition hover:border-zinc-400 hover:bg-zinc-50 dark:border-zinc-600 dark:text-zinc-300 dark:hover:bg-zinc-800/50"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
            LinkedIn
          </a>
          <Link
            href="#contato"
            className="inline-flex items-center justify-center rounded-full border-2 border-zinc-300 px-5 py-3 text-sm font-semibold text-zinc-700 transition hover:border-teal-500 hover:text-teal-600 dark:border-zinc-600 dark:text-zinc-300 dark:hover:border-teal-500 dark:hover:text-teal-400"
          >
            Contato
          </Link>
        </div>
      </div>
    </section>
  );
}

function GitHubIcon() {
  return (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
