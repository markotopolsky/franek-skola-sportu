"use client";

import { useState } from "react";
import { X } from "lucide-react";
import TiltedCard from "./TiltedCard";

const PHOTO =
  "https://res.cloudinary.com/dl6xldrhk/image/upload/v1782301854/_MB10374_PS_x7vxas.jpg";

const trainers = [
  {
    name: "Peter Franek",
    tags: ["Zakladateľ", "Plávanie", "Triatlon"],
    photo: PHOTO,
  },
  {
    name: "Zuzana Hurtošová",
    tags: ["Atletika", "Deti"],
    photo: PHOTO,
  },
  {
    name: "Aneta Oltúsová",
    tags: ["Posilovačka", "Deti"],
    photo: PHOTO,
  },
  {
    name: "Samuel Čambal",
    tags: ["Kondícia", "Dospelí"],
    photo: PHOTO,
  },
];

const BRAND_COLORS = ["magenta", "teal", "orange"] as const;

const ALL_LABELS = Array.from(
  new Set(trainers.flatMap((t) => t.tags))
);

const CATEGORY_COLOR: Record<string, string> = Object.fromEntries(
  ALL_LABELS.map((label, i) => [label, BRAND_COLORS[i % 3]])
);

const ALL_CATEGORIES = ALL_LABELS.filter((l) => l !== "Zakladateľ");

const activeBg: Record<string, string> = {
  magenta: "bg-brand-magenta text-white",
  teal: "bg-brand-teal text-white",
  orange: "bg-brand-orange text-white",
};

const activeHover: Record<string, string> = {
  magenta: "hover:border-brand-magenta hover:text-brand-magenta",
  teal: "hover:border-brand-teal hover:text-brand-teal",
  orange: "hover:border-brand-orange hover:text-brand-orange",
};

export default function Trainers() {
  const [selected, setSelected] = useState<Set<string>>(new Set());

  function toggle(cat: string) {
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(cat) ? next.delete(cat) : next.add(cat);
      return next;
    });
  }

  return (
    <section className="mx-auto max-w-[1200px] px-6 py-10 md:py-12">
      {/* Header + filters */}
      <div className="flex flex-col items-end gap-4 mb-10">
        <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">
          Tréneri / Team
        </h2>

        <div className="flex flex-wrap justify-end gap-2">
          {selected.size > 0 && (
            <button
              onClick={() => setSelected(new Set())}
              className="flex items-center gap-1.5 rounded-full border border-line px-4 py-1.5 text-sm font-medium text-muted hover:text-ink transition-colors"
            >
              Zrušiť výber
              <X size={14} strokeWidth={2.5} />
            </button>
          )}
          {ALL_CATEGORIES.map((cat) => {
            const color = CATEGORY_COLOR[cat];
            const active = selected.has(cat);
            return (
              <button
                key={cat}
                onClick={() => toggle(cat)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  active
                    ? activeBg[color]
                    : `border border-line text-muted ${activeHover[color]}`
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-2 gap-x-10 gap-y-5 md:grid-cols-4 mb-10">
        {trainers.map((trainer) => (
          <div key={trainer.name} className="flex flex-col gap-3">
            <TiltedCard
              imageSrc={trainer.photo}
              altText={trainer.name}
              containerHeight="400px"
              containerWidth="100%"
              imageHeight="400px"
              imageWidth="100%"
              rotateAmplitude={10}
              scaleOnHover={1.05}
              showMobileWarning={false}
              showTooltip={false}
              displayOverlayContent={true}
              overlayContent={
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/65 via-black/10 to-transparent px-4 pb-4">
                  <p className="font-display text-base font-semibold leading-snug text-white mb-1.5">
                    {trainer.name}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {trainer.tags.map((tag) => {
                      const color = CATEGORY_COLOR[tag];
                      return (
                        <span
                          key={tag}
                          className={`rounded-full px-2.5 py-0.5 text-xs transition-colors ${
                            tag === "Zakladateľ" ? "font-bold" : "font-medium"
                          } ${
                            selected.has(tag)
                              ? activeBg[color]
                              : "border border-white/40 text-white/60"
                          }`}
                        >
                          {tag}
                        </span>
                      );
                    })}
                  </div>
                </div>
              }
            />
          </div>
        ))}
      </div>
      {/* Footer text + CTA */}
      <div className="mt-2 flex flex-col items-center gap-1 text-center">
        <p className="text-base text-muted">
          Máte otázky ohľadom tréningov alebo si nie ste istí, čo je pre vás to pravé?
        </p>
        <a
          href="#kontakt"
          className="text-base font-semibold text-brand-magenta underline underline-offset-4 decoration-brand-magenta hover:text-brand-magenta-600 transition-colors"
        >
          Spojte sa s nami
        </a>
      </div>
    </section>
  );
}
