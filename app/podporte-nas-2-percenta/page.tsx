import type { Metadata } from "next";
import PageShell from "@/app/components/PageShell";

export const metadata: Metadata = {
  title: "Podporte nás 2% — Franek, Škola športu Senec",
};

export default function Page() {
  return (
    <PageShell
      eyebrow="Podpora"
      title="Podporte nás 2%"
      lead="xxx — ako a prečo nás môžete podporiť poukázaním 2% z dane. (Text doplníme.)"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-line bg-surface p-6">
          <h2 className="font-display text-lg font-semibold text-ink">
            Ako na to
          </h2>
          <p className="mt-2 text-base leading-7 text-muted">
            xxx — postup krok za krokom a termíny.
          </p>
        </div>
        <div className="rounded-2xl border border-line bg-surface p-6">
          <h2 className="font-display text-lg font-semibold text-ink">
            Údaje prijímateľa
          </h2>
          <p className="mt-2 text-base leading-7 text-muted">
            xxx — názov OZ, IČO, právna forma.
          </p>
        </div>
      </div>

      <a
        href="#"
        className="mt-10 inline-flex items-center rounded-full bg-brand-magenta px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-magenta-600"
      >
        Stiahnuť tlačivo
      </a>
    </PageShell>
  );
}
