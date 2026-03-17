interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="mb-12">
      <span className="inline-block h-1 w-12 rounded-full bg-teal-500 mb-4" />
      <h2 className="font-heading text-3xl font-bold tracking-tight text-zinc-900 dark:text-white md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">{subtitle}</p>
      )}
    </div>
  );
}
