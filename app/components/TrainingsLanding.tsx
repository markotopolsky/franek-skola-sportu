import Link from "next/link";
import { ChevronRight } from "lucide-react";

type Course = { label: string; href: string; desc: string };

type TrainingsLandingProps = {
  /** "deti" | "dospelí" */
  audience: "deti" | "dospelí";
  courses: Course[];
};

// Landing page that lists the available courses for one audience (kids / adults).
export default function TrainingsLanding({
  audience,
  courses,
}: TrainingsLandingProps) {
  const audienceLabel = audience === "deti" ? "pre deti" : "pre dospelých";

  return (
    <main>
      <section className="mx-auto max-w-[1200px] px-6 py-12 md:py-16">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-brand-magenta">
          Tréningy
        </p>
        <h1 className="font-display text-3xl font-semibold text-ink md:text-5xl">
          Tréningy {audienceLabel}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
          xxx — krátky úvod o ponuke tréningov {audienceLabel}. Vyberte si oblasť
          a pozrite si detail kurzu.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {courses.map((course) => (
            <Link
              key={course.href}
              href={course.href}
              className="group flex items-start justify-between gap-4 rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-brand-magenta"
            >
              <div>
                <h2 className="font-display text-xl font-semibold text-ink">
                  {course.label}
                </h2>
                <p className="mt-2 text-base leading-7 text-muted">
                  {course.desc}
                </p>
              </div>
              <span className="mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand-magenta text-white transition-colors group-hover:bg-brand-magenta-600">
                <ChevronRight size={18} strokeWidth={2.5} aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
