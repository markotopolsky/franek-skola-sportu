import Image from "next/image";
import Link from "next/link";

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" width={18} height={18} fill="currentColor" aria-hidden="true">
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.52 1.5-3.92 3.78-3.92 1.1 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.44 2.9h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

const linkGroups = [
  {
    title: "O klube",
    links: [
      { label: "Členské podmienky", href: "/o-nas/clenske-podmienky" },
      { label: "GDPR", href: "/o-nas/gdpr" },
    ],
  },
  {
    title: "Podpora",
    links: [
      { label: "Podporte nás 2%", href: "/podporte-nas-2-percenta" },
      { label: "Zamestnanecký príspevok", href: "/prispevok-zamestnavatela" },
    ],
  },
  {
    title: "Kontakt",
    links: [
      { label: "Športoviská", href: "/sportoviska" },
      { label: "Kontakt", href: "/kontakt" },
    ],
  },
];

const socials = [
  { label: "Facebook", href: "https://facebook.com", Icon: FacebookIcon },
  { label: "Instagram", href: "https://instagram.com", Icon: InstagramIcon },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-[1200px] px-6 py-12">
        <div className="grid gap-10 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
          {/* Brand + socials */}
          <div>
            <Image
              src="/logo-nav.svg"
              alt="Franek — Škola športu Senec"
              width={385}
              height={206}
              unoptimized
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="mt-4 max-w-xs text-base leading-7 text-white/60">
              Škola športu pre deti aj dospelých — v Senci od roku 2014.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-white transition-colors hover:border-brand-magenta hover:text-brand-magenta"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {linkGroups.map((group) => (
            <nav key={group.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-base text-white/70 transition-colors hover:text-brand-magenta"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-white/50">
          © {new Date().getFullYear()} Franek — Škola športu Senec
        </div>
      </div>
    </footer>
  );
}
