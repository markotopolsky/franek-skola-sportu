import type { Metadata } from "next";
import { MapPin } from "lucide-react";
import PageShell from "@/app/components/PageShell";

export const metadata: Metadata = {
  title: "Športoviská — Franek, Škola športu Senec",
};

const venues = [
  { name: "xxx — názov športoviska", address: "xxx — adresa", note: "xxx — čo tu trénujeme" },
  { name: "xxx — názov športoviska", address: "xxx — adresa", note: "xxx — čo tu trénujeme" },
];

export default function Page() {
  return (
    <PageShell
      eyebrow="Kontakt"
      title="Športoviská"
      lead="xxx — kde nás nájdete a kde prebiehajú tréningy. (Doplníme.)"
    >
      <div className="grid gap-4 md:grid-cols-2">
        {venues.map((v, i) => (
          <div
            key={i}
            className="rounded-2xl border border-line bg-surface p-6"
          >
            <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-magenta/10 text-brand-magenta">
              <MapPin size={20} strokeWidth={2} aria-hidden="true" />
            </span>
            <h2 className="mt-4 font-display text-lg font-semibold text-ink">
              {v.name}
            </h2>
            <p className="mt-2 text-base leading-7 text-muted">{v.address}</p>
            <p className="mt-1 text-base leading-7 text-muted">{v.note}</p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
