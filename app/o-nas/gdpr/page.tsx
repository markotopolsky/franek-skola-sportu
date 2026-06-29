import type { Metadata } from "next";
import PageShell from "@/app/components/PageShell";

export const metadata: Metadata = {
  title: "GDPR — Franek, Škola športu Senec",
};

export default function Page() {
  return (
    <PageShell
      eyebrow="O nás"
      title="Ochrana osobných údajov (GDPR)"
      lead="xxx — informácie o spracúvaní osobných údajov doplníme."
    >
      <div className="max-w-2xl space-y-4 text-base leading-7 text-muted">
        <p>xxx — prevádzkovateľ a kontaktné údaje.</p>
        <p>xxx — aké údaje spracúvame a na aký účel.</p>
        <p>xxx — práva dotknutých osôb a doba uchovávania.</p>
      </div>
    </PageShell>
  );
}
