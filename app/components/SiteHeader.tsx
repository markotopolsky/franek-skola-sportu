"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import InfoBar from "./InfoBar";

type NavLink = { label: string; href: string };
type NavGroup = { title: string; href: string; links: NavLink[] };
type NavItem = {
  label: string;
  href?: string;
  links?: NavLink[];
  groups?: NavGroup[];
};

const nav: NavItem[] = [
  {
    label: "O nás",
    links: [
      { label: "Náš príbeh", href: "/o-nas/nas-pribeh" },
      { label: "Náš tím", href: "/o-nas/nas-tim" },
      { label: "Členské podmienky", href: "/o-nas/clenske-podmienky" },
      { label: "GDPR", href: "/o-nas/gdpr" },
    ],
  },
  {
    label: "Tréningy",
    groups: [
      {
        title: "Deti",
        href: "/treningy/deti",
        links: [
          { label: "Plávanie", href: "/treningy/deti/plavanie" },
          { label: "Triatlon", href: "/treningy/deti/triatlon" },
          { label: "Atletika", href: "/treningy/deti/atletika" },
          { label: "Kondičné tréningy", href: "/treningy/deti/kondicne" },
          { label: "Letné tábory", href: "/letne-tabory" },
        ],
      },
      {
        title: "Dospelí",
        href: "/treningy/dospeli",
        links: [
          { label: "Plávanie", href: "/treningy/dospeli/plavanie" },
          { label: "Triatlon", href: "/treningy/dospeli/triatlon" },
          { label: "Atletika", href: "/treningy/dospeli/atletika" },
          { label: "Kondičné tréningy", href: "/treningy/dospeli/kondicne" },
        ],
      },
    ],
  },
  { label: "Faq", href: "#" },
  { label: "Referencie", href: "#" },
  { label: "Kontakt", href: "/kontakt" },
  {
    label: "Podporte nás",
    links: [
      { label: "Podporte nás 2%", href: "/podporte-nas-2-percenta" },
      { label: "Príspevok zamestnávateľa", href: "/prispevok-zamestnavatela" },
    ],
  },
];

export default function SiteHeader() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <header>
      <InfoBar />

      <nav className="border-b border-line bg-surface">
        <div className="mx-auto flex h-20 max-w-[1200px] items-center justify-between px-6">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center"
            aria-label="Franek — domov"
          >
            <Image
              src="/logo-nav.svg"
              alt="Franek — Škola športu Senec"
              width={385}
              height={206}
              priority
              unoptimized
              className="h-12 w-auto"
            />
          </Link>

          {/* Menu */}
          <ul className="flex items-center gap-7 text-sm font-medium text-ink">
            {nav.map((item) => {
              const hasMenu = Boolean(item.links || item.groups);

              if (!hasMenu) {
                return (
                  <li key={item.label}>
                    <Link
                      href={item.href ?? "#"}
                      className="transition-colors hover:text-brand-magenta"
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              }

              return (
                <li
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpen(item.label)}
                  onMouseLeave={() =>
                    setOpen((o) => (o === item.label ? null : o))
                  }
                >
                  <button
                    type="button"
                    className="flex items-center gap-1 transition-colors hover:text-brand-magenta"
                  >
                    {item.label}
                    <ChevronDown
                      size={14}
                      strokeWidth={2.5}
                      className="mt-0.5 text-muted"
                    />
                  </button>

                  {open === item.label && (
                    <div className="absolute left-0 top-full z-50 pt-3">
                      {item.links && (
                        <ul className="min-w-[220px] rounded-2xl border border-line bg-surface p-2 shadow-lg shadow-black/5">
                          {item.links.map((l) => (
                            <li key={l.href}>
                              <Link
                                href={l.href}
                                className="block rounded-xl px-4 py-2.5 text-sm text-ink transition-colors hover:bg-surface-soft hover:text-brand-magenta"
                              >
                                {l.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}

                      {item.groups && (
                        <div className="flex gap-2 rounded-2xl border border-line bg-surface p-3 shadow-lg shadow-black/5">
                          {item.groups.map((g) => (
                            <div key={g.title} className="min-w-[200px]">
                              <Link
                                href={g.href}
                                className="block rounded-xl px-3 py-2 font-display text-sm font-semibold text-ink transition-colors hover:text-brand-magenta"
                              >
                                {g.title}
                              </Link>
                              <ul className="mt-1">
                                {g.links.map((l) => (
                                  <li key={l.href}>
                                    <Link
                                      href={l.href}
                                      className="block rounded-xl px-3 py-2 text-sm text-muted transition-colors hover:bg-surface-soft hover:text-brand-magenta"
                                    >
                                      {l.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-4 text-sm font-medium">
            <a
              href="#"
              className="inline-flex items-center whitespace-nowrap rounded-full bg-brand-magenta px-6 py-2.5 text-white transition-colors hover:bg-brand-magenta-600"
            >
              Registrácia na kurz
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
