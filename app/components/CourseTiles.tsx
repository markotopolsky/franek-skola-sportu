"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronRight } from "lucide-react";

// Static tiles — no image cycling, no animation. Each leads to its own subpage.
// `adults` flags whether the course is also suitable for adults; summer camps are kids-only.
const courses = [
  {
    name: "Plávanie",
    href: "/treningy/plavanie",
    image:
      "https://res.cloudinary.com/dl6xldrhk/image/upload/v1782473666/plavanie_1_gh6po0.png",
    adults: true,
  },
  {
    name: "Atletika",
    href: "/treningy/atletika",
    image:
      "https://res.cloudinary.com/dl6xldrhk/image/upload/v1782473666/atletika_1_kemhlu.png",
    adults: true,
  },
  {
    name: "Triatlon",
    href: "/treningy/triatlon",
    image:
      "https://res.cloudinary.com/dl6xldrhk/image/upload/v1782473665/triatlon_1_nz0jqj.png",
    adults: true,
  },
  {
    name: "Letné tábory",
    href: "/letne-tabory",
    image:
      "https://res.cloudinary.com/dl6xldrhk/image/upload/v1782473664/letne_tabory_1_dymwqs.png",
    adults: false,
  },
  {
    name: "Individuálne tréningy",
    href: "/treningy/individualne",
    image:
      "https://res.cloudinary.com/dl6xldrhk/image/upload/v1782473664/individualne_treningy_1_rzl1iz.png",
    adults: true,
  },
];

export default function CourseTiles() {
  // When on, show only courses suitable for adults. Plain show/hide — no transitions.
  const [adultsOnly, setAdultsOnly] = useState(false);

  const visible = adultsOnly ? courses.filter((c) => c.adults) : courses;

  return (
    <section className="mx-auto max-w-[1200px] px-6 py-10 md:py-12">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">
            Čo u nás trénujeme
          </h2>
          <p className="mt-3 max-w-md text-base leading-7 text-muted">
            Vyberte si oblasť a pozrite si, ako to u nás chodí.
          </p>
        </div>

        {/* Filter — plain show/hide toggle, no animated tile transitions */}
        <button
          type="button"
          role="switch"
          aria-checked={adultsOnly}
          onClick={() => setAdultsOnly((v) => !v)}
          className={`inline-flex shrink-0 items-center gap-3 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
            adultsOnly
              ? "border-brand-magenta text-brand-magenta"
              : "border-line text-muted hover:text-ink"
          }`}
        >
          Vhodné aj pre dospelých
          <span
            className={`relative inline-flex h-5 w-9 items-center rounded-full ${
              adultsOnly ? "bg-brand-magenta" : "bg-line"
            }`}
          >
            <span
              className={`inline-block h-4 w-4 rounded-full bg-white ${
                adultsOnly ? "translate-x-4" : "translate-x-0.5"
              }`}
            />
          </span>
        </button>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {visible.map((course) => (
          <Link
            key={course.name}
            href={course.href}
            className="group relative isolate block aspect-[4/5] overflow-hidden rounded-2xl"
          >
            <Image
              src={course.image}
              alt={course.name}
              fill
              sizes="(min-width: 1024px) 220px, (min-width: 640px) 33vw, 50vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />

            {/* legibility scrim */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 to-transparent to-60%" />

            <h3 className="absolute bottom-4 left-4 right-12 font-display text-lg font-semibold leading-tight text-white">
              {course.name}
            </h3>

            <span className="absolute bottom-4 right-4 grid h-9 w-9 place-items-center rounded-full bg-brand-magenta text-white transition-colors group-hover:bg-brand-magenta-600">
              <ChevronRight size={18} strokeWidth={2.5} aria-hidden="true" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
