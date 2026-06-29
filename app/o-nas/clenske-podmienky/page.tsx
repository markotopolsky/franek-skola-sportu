import type { Metadata } from "next";
import PageShell from "@/app/components/PageShell";

export const metadata: Metadata = {
  title: "Členské podmienky — Franek, Škola športu Senec",
};

export default function Page() {
  return (
    <PageShell
      eyebrow="O nás"
      title="Členské podmienky"
      lead="xxx — celé znenie členských podmienok doplníme."
    >
      <div className="max-w-2xl space-y-4 text-base leading-7 text-muted">
        <p>xxx — prihlasovanie na kurz a obdobie členstva.</p>
        <p>xxx — členský príspevok, splatnosť a jeho nevratnosť.</p>
        <p>xxx — výnimky, storno podmienky a ďalšie ustanovenia.</p>
      </div>
    </PageShell>
  );
}
