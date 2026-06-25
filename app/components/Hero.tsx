import HeroTile from "./HeroTile";

// One hero image that slowly cross-fades — no competing animations.
const heroImages = [
  "/hero/left-fullHeight/hero-1-1.png",
  "/hero/left-fullHeight/hero-1-2.png",
  "/hero/left-fullHeight/hero-1-3.png",
];

export default function Hero() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-10 md:py-12">
      <HeroTile
        images={heroImages}
        priority
        interval={6000}
        sizes="(min-width: 1200px) 1200px, 100vw"
        className="h-[480px] w-full"
      >
        <div className="absolute inset-x-0 bottom-0 flex max-w-2xl flex-col items-start gap-4 p-8 md:p-10">
          <h1 className="font-display text-4xl font-semibold leading-[1.1] text-white md:text-5xl">
            Šport je
            <br />
            naším poslaním
          </h1>
          <p className="max-w-md text-base leading-7 text-white/90">
            Tréningy plávania, atletiky a triatlonu pre deti aj dospelých —
            v Senci, od roku 2014.
          </p>
          <a
            href="/o-nas/nas-pribeh"
            className="mt-1 inline-flex items-center rounded-full bg-brand-magenta px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-magenta-600"
          >
            Náš príbeh
          </a>
        </div>
      </HeroTile>
    </section>
  );
}
