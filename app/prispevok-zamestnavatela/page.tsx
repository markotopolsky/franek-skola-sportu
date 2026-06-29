import type { Metadata } from "next";
import PageShell from "@/app/components/PageShell";

export const metadata: Metadata = {
  title: "Príspevok zamestnávateľa — Franek, Škola športu Senec",
};

const steps = [
  {
    title: "1. Overte si nárok",
    body: "xxx — kto má nárok na príspevok zamestnávateľa na šport.",
  },
  {
    title: "2. Vyžiadajte si podklady",
    body: "xxx — aké potvrdenie potrebujete a kde si oň požiadať.",
  },
  {
    title: "3. Odovzdajte zamestnávateľovi",
    body: "xxx — čo doložiť mzdovému oddeleniu a do kedy.",
  },
];

export default function Page() {
  return (
    <PageShell
      eyebrow="Podpora"
      title="Príspevok zamestnávateľa"
      lead="xxx — návod, ako získať podklady na zamestnanecký príspevok na šport. (Text doplníme.)"
    >
      <div className="grid gap-4 md:grid-cols-3">
        {steps.map((s) => (
          <div
            key={s.title}
            className="rounded-2xl border border-line bg-surface p-6"
          >
            <h2 className="font-display text-lg font-semibold text-ink">
              {s.title}
            </h2>
            <p className="mt-2 text-base leading-7 text-muted">{s.body}</p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
