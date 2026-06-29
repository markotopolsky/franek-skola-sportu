import type { ReactNode } from "react";

type PageShellProps = {
  /** small uppercase label above the title */
  eyebrow?: string;
  title: string;
  /** short intro paragraph under the title */
  lead?: string;
  /** alternate the page background to the warm soft tone */
  soft?: boolean;
  children?: ReactNode;
};

// Shared wrapper so every subpage has the same header rhythm and container.
export default function PageShell({
  eyebrow,
  title,
  lead,
  soft = false,
  children,
}: PageShellProps) {
  return (
    <main className={soft ? "bg-surface-soft" : undefined}>
      <section className="mx-auto max-w-[1200px] px-6 py-12 md:py-16">
        {eyebrow && (
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-brand-magenta">
            {eyebrow}
          </p>
        )}
        <h1 className="font-display text-3xl font-semibold text-ink md:text-5xl">
          {title}
        </h1>
        {lead && (
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted">{lead}</p>
        )}
        {children && <div className="mt-10">{children}</div>}
      </section>
    </main>
  );
}
