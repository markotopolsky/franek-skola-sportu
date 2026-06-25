import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

// Static tiles — no image cycling, no animation. Each leads to its own subpage.
const courses = [
  {
    name: "Plávanie",
    href: "/treningy/plavanie",
    image: "/hero/right-halfHeightUp/_MB10241_PS 1.png",
  },
  {
    name: "Atletika",
    href: "/treningy/atletika",
    image: "/hero/right-halfHeightUp/_MB10405_PS 1.png",
  },
  {
    name: "Triatlon",
    href: "/treningy/triatlon",
    image: "/hero/right-halfHeightUp/image 3.png",
  },
  {
    name: "Letné tábory",
    href: "/letne-tabory",
    image: "/hero/right-halfHeightDown/_MB18945 1.png",
  },
  {
    name: "Individuálne tréningy",
    href: "/treningy/individualne",
    image: "/hero/right-halfHeightDown/_MB18948 2.png",
  },
];

export default function CourseTiles() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-10 md:py-12">
      <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">
        Čo u nás trénujeme
      </h2>
      <p className="mt-3 max-w-md text-base leading-7 text-muted">
        Vyberte si oblasť a pozrite si, ako to u nás chodí.
      </p>

      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {courses.map((course) => (
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
