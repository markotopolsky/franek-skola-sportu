import Image from "next/image";
import { ChevronDown } from "lucide-react";
import InfoBar from "./InfoBar";

const navLinks: { label: string; dropdown?: boolean }[] = [
  { label: "O nás", dropdown: true },
  { label: "Tréningy", dropdown: true },
  { label: "Faq" },
  { label: "Referencie" },
  { label: "Kontakt" },
  { label: "Podporte nás" },
];

export default function SiteHeader() {
  return (
    <header>
      {/* Info bar */}
      <InfoBar />

      {/* Announcement bar */}


      {/* Main navigation */}
      <nav className="border-b border-line bg-surface">
        <div className="mx-auto flex h-20 max-w-[1200px] items-center justify-between px-6">
          {/* Logo */}
          <a href="#" className="flex items-center" aria-label="Franek — domov">
            <Image
              src="/logo-nav.svg"
              alt="Franek — Škola športu Senec"
              width={385}
              height={206}
              priority
              unoptimized
              className="h-12 w-auto"
            />
          </a>

          {/* Menu */}
          <ul className="flex items-center gap-7 text-sm font-medium text-ink">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href="#"
                  className="flex items-center gap-1 transition-colors hover:text-brand-magenta"
                >
                  {item.label}
                  {item.dropdown && (
                    <ChevronDown
                      size={14}
                      strokeWidth={2.5}
                      className="mt-0.5 text-muted"
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-4 text-sm font-medium">
            <a
              href="#"
              className="text-ink transition-colors hover:text-brand-magenta"
            >
              Registrovať sa
            </a>
            <a
              href="#"
              className="inline-flex items-center rounded-full bg-brand-magenta px-6 py-2.5 text-white transition-colors hover:bg-brand-magenta-600"
            >
              Prihlásiť sa
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
