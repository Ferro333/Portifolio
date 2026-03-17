import Link from "next/link";
import { contact } from "@/app/data/contact";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200/80 bg-zinc-100/80 px-6 py-12 dark:border-zinc-800/80 dark:bg-zinc-950/50 md:px-12 lg:px-24">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          © {year} Tiago Ferro. Desenvolvido com Next.js e TypeScript.
        </p>
        <div className="flex gap-8">
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-zinc-600 transition hover:text-teal-600 dark:text-zinc-400 dark:hover:text-teal-400"
            aria-label="GitHub"
          >
            GitHub
          </a>
          <a
            href={contact.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-zinc-600 transition hover:text-teal-600 dark:text-zinc-400 dark:hover:text-teal-400"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
          <Link
            href="#contato"
            className="text-sm font-medium text-zinc-600 transition hover:text-teal-600 dark:text-zinc-400 dark:hover:text-teal-400"
          >
            Contato
          </Link>
        </div>
      </div>
    </footer>
  );
}
