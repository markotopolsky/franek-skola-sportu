import { ChevronRight } from "lucide-react";
import HeroTile from "./HeroTile";

// Each section cycles through its own set of photos (public/hero/*).
const leftImages = [
  "/hero/left-fullHeight/hero-1-1.png",
  "/hero/left-fullHeight/hero-1-2.png",
  "/hero/left-fullHeight/hero-1-3.png",
];

const rightUpImages = [
  "/hero/right-halfHeightUp/_MB10241_PS 1.png",
  "/hero/right-halfHeightUp/_MB10405_PS 1.png",
  "/hero/right-halfHeightUp/image 3.png",
];

const rightDownImages = [
  "/hero/right-halfHeightDown/_MB18945 1.png",
  "/hero/right-halfHeightDown/_MB18948 2.png",
];

function ArrowButton() {
  return (
    <span className="absolute bottom-4 right-4 grid h-11 w-11 place-items-center rounded-full bg-brand-magenta text-white transition-colors group-hover:bg-brand-magenta-600">
      <ChevronRight size={20} strokeWidth={2.5} aria-hidden="true" />
    </span>
  );
}

export default function Hero() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-10 md:py-12">
      <div className="grid h-[480px] grid-cols-2 gap-2">
        {/* Left — full height */}
        <HeroTile
          images={leftImages}
          priority
          interval={6000}
          sizes="(min-width: 1200px) 588px, 50vw"
          className="h-full"
        >
          <div className="absolute inset-x-0 bottom-0 flex flex-col items-start gap-4 p-8">
            <h1 className="font-display text-5xl font-semibold leading-[1.05] text-white">
              Šport je
              <br />
              naším poslaním
            </h1>
            <p className="max-w-sm text-sm leading-6 text-white/85">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
            <a
              href="#"
              className="mt-1 inline-flex items-center rounded-full bg-brand-magenta px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-magenta-600"
            >
              Prihlásiť sa
            </a>
          </div>
        </HeroTile>

        {/* Right — two stacked half-height tiles */}
        <div className="grid h-full grid-rows-2 gap-2">
          <HeroTile
            images={rightUpImages}
            interval={5000}
            sizes="(min-width: 1200px) 588px, 50vw"
          >
            <h2 className="absolute bottom-5 left-6 font-display text-3xl font-semibold text-white">
              Tréningy deti
            </h2>
            <ArrowButton />
          </HeroTile>

          <HeroTile
            images={rightDownImages}
            interval={5500}
            sizes="(min-width: 1200px) 588px, 50vw"
          >
            <h2 className="absolute bottom-5 left-6 font-display text-3xl font-semibold text-white">
              Tréningy dospelí
            </h2>
            <ArrowButton />
          </HeroTile>
        </div>
      </div>
    </section>
  );
}
