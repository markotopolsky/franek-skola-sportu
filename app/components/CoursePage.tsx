import Link from "next/link";
import { Users, MapPin, CalendarClock, ChevronRight } from "lucide-react";

type CoursePageProps = {
  sport: string;
  /** "deti" | "dospelí" — used in headings and copy */
  audience: "deti" | "dospelí";
};

// Reusable skeleton for every course page. All copy is placeholder ("xxx") —
// the real texts will be filled in later by the client.
export default function CoursePage({ sport, audience }: CoursePageProps) {
  const audienceLabel = audience === "deti" ? "pre deti" : "pre dospelých";

  const infoCards = [
    {
      Icon: Users,
      title: "Ako prebieha kurz",
      body: "xxx — ako sú účastníci rozdelení podľa skúseností a náročnosti, ako napredujú, aké súťaže a akcie klubu ich čakajú.",
    },
    {
      Icon: MapPin,
      title: "Kde a kedy",
      body: "xxx — kde a kedy treba prísť, kto vás počká na recepcii, komu odovzdáte dieťa a kde si ho po tréningu nájdete.",
    },
    {
      Icon: CalendarClock,
      title: "Ako často trénujeme",
      body: "xxx — frekvencia tréningov (napr. 1× alebo 2× týždenne) a dĺžka jednej tréningovej jednotky.",
    },
  ];

  const fees = [
    {
      label: "1× týždenne",
      price: "xxx €",
      note: "xxx — splatnosť a obdobie (mesačne / polročne / ročne).",
    },
    {
      label: "2× týždenne",
      price: "xxx €",
      note: "xxx — splatnosť a obdobie (mesačne / polročne / ročne).",
    },
  ];

  return (
    <main>
      <section className="mx-auto max-w-[1200px] px-6 py-12 md:py-16">
        {/* Header */}
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-brand-magenta">
          Tréningy {audienceLabel}
        </p>
        <h1 className="font-display text-3xl font-semibold text-ink md:text-5xl">
          {sport}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
          xxx — krátky úvod o {sport.toLowerCase()} {audienceLabel}: prínosy pre
          zdravie a kondíciu, pre koho je kurz vhodný. (Text doplníme.)
        </p>

        {/* Info cards */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {infoCards.map(({ Icon, title, body }) => (
            <div
              key={title}
              className="rounded-2xl border border-line bg-surface p-6"
            >
              <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-magenta/10 text-brand-magenta">
                <Icon size={20} strokeWidth={2} aria-hidden="true" />
              </span>
              <h2 className="mt-4 font-display text-lg font-semibold text-ink">
                {title}
              </h2>
              <p className="mt-2 text-base leading-7 text-muted">{body}</p>
            </div>
          ))}
        </div>

        {/* Trainers + conditions */}
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-line bg-surface p-6">
            <h2 className="font-display text-lg font-semibold text-ink">
              Kto vás trénuje
            </h2>
            <p className="mt-2 text-base leading-7 text-muted">
              xxx — krátko o tréneroch tohto kurzu.
            </p>
            <Link
              href="/o-nas/nas-tim"
              className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-magenta hover:text-brand-magenta-600"
            >
              Spoznajte náš tím
              <ChevronRight size={16} strokeWidth={2.5} />
            </Link>
          </div>

          <div className="rounded-2xl border border-line bg-surface p-6">
            <h2 className="font-display text-lg font-semibold text-ink">
              Podmienky v skratke
            </h2>
            <p className="mt-2 text-base leading-7 text-muted">
              xxx — napr. „Dieťa prihlasujete na kurz na celý školský rok, váš
              príspevok je členským príspevkom a je nevratný, aj keď dieťa
              tréning vynechá.“
            </p>
            <Link
              href="/o-nas/clenske-podmienky"
              className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-magenta hover:text-brand-magenta-600"
            >
              Celé znenie podmienok
              <ChevronRight size={16} strokeWidth={2.5} />
            </Link>
          </div>
        </div>

        {/* Fees */}
        <h2 className="mt-12 font-display text-2xl font-semibold text-ink md:text-3xl">
          Členské poplatky
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {fees.map((fee) => (
            <div
              key={fee.label}
              className="rounded-2xl border border-line bg-surface p-6"
            >
              <p className="text-sm font-semibold uppercase tracking-wide text-muted">
                {fee.label}
              </p>
              <p className="mt-2 font-display text-3xl font-bold text-brand-magenta">
                {fee.price}
              </p>
              <p className="mt-2 text-base leading-7 text-muted">{fee.note}</p>
            </div>
          ))}
        </div>

        {/* Registration CTA */}
        <div className="mt-12 rounded-2xl bg-ink p-8 text-center md:p-10">
          <h2 className="font-display text-2xl font-semibold text-white md:text-3xl">
            Máte záujem o {sport.toLowerCase()} {audienceLabel}?
          </h2>
          <a
            href="#"
            className="mt-6 inline-flex items-center rounded-full bg-brand-magenta px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-magenta-600"
          >
            Registrácia na kurz
          </a>
          <p className="mx-auto mt-4 max-w-md text-xs leading-6 text-white/60">
            Registráciou prejavujem súhlas s podmienkami OZ. xxx — presné znenie
            doplníme.
          </p>
        </div>
      </section>
    </main>
  );
}
