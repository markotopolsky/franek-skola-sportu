import type { Metadata } from "next";
import PageShell from "@/app/components/PageShell";

export const metadata: Metadata = {
  title: "Letné tábory — Franek, Škola športu Senec",
};

const blocks = [
  {
    title: "Pre koho",
    body: "xxx — vek detí, úroveň, čo deti zažijú.",
  },
  {
    title: "Kedy a kde",
    body: "xxx — termíny turnusov, miesto, denný program.",
  },
  {
    title: "Čo je v cene",
    body: "xxx — strava, vybavenie, tréneri, doprava.",
  },
];

export default function Page() {
  return (
    <PageShell
      eyebrow="Pre deti"
      title="Letné tábory"
      lead="xxx — krátky úvod o letných táboroch. (Text doplníme.)"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {blocks.map((b) => (
          <div
            key={b.title}
            className="rounded-2xl border border-line bg-surface p-6"
          >
            <h2 className="font-display text-lg font-semibold text-ink">
              {b.title}
            </h2>
            <p className="mt-2 text-base leading-7 text-muted">{b.body}</p>
          </div>
        ))}
      </div>

      <a
        href="#"
        className="mt-10 inline-flex items-center rounded-full bg-brand-magenta px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-magenta-600"
      >
        Registrácia na kurz
      </a>
    </PageShell>
  );
}
