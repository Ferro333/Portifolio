"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#tecnologias", label: "Tecnologias" },
  { href: "#projetos", label: "Projetos" },
  { href: "#experiencia", label: "Trajetória" },
  { href: "#certificados", label: "Certificados" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200/80 dark:border-zinc-800/80 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 md:px-12 lg:px-24">
        <Link
          href="#hero"
          className="font-heading text-lg font-bold tracking-tight text-zinc-900 dark:text-white"
        >
          TF
        </Link>
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-zinc-600 transition hover:text-teal-600 dark:text-zinc-400 dark:hover:text-teal-400"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="#contato"
          className="rounded-full bg-teal-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-teal-500 dark:bg-teal-500 dark:hover:bg-teal-400"
        >
          Contato
        </Link>
      </nav>
    </header>
  );
}
