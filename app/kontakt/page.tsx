import type { Metadata } from "next";
import { Mail, Phone, MapPin } from "lucide-react";
import PageShell from "@/app/components/PageShell";

export const metadata: Metadata = {
  title: "Kontakt — Franek, Škola športu Senec",
};

const contacts = [
  { Icon: Mail, label: "E-mail", value: "xxx@xxx.sk" },
  { Icon: Phone, label: "Telefón", value: "xxx xxx xxx" },
  { Icon: MapPin, label: "Adresa", value: "xxx — sídlo / korešpondenčná adresa" },
];

export default function Page() {
  return (
    <PageShell
      eyebrow="Kontakt"
      title="Kontakt"
      lead="xxx — napíšte nám alebo zavolajte. (Doplníme.)"
    >
      <div className="grid gap-4 sm:grid-cols-3">
        {contacts.map(({ Icon, label, value }) => (
          <div
            key={label}
            className="rounded-2xl border border-line bg-surface p-6"
          >
            <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-magenta/10 text-brand-magenta">
              <Icon size={20} strokeWidth={2} aria-hidden="true" />
            </span>
            <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-muted">
              {label}
            </p>
            <p className="mt-1 text-base leading-7 text-ink">{value}</p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
