import type { Metadata } from "next";
import TrainingsLanding from "@/app/components/TrainingsLanding";

export const metadata: Metadata = {
  title: "Tréningy pre dospelých — Franek, Škola športu Senec",
};

const courses = [
  {
    label: "Plávanie",
    href: "/treningy/dospeli/plavanie",
    desc: "xxx — krátky popis plaveckých kurzov pre dospelých.",
  },
  {
    label: "Triatlon",
    href: "/treningy/dospeli/triatlon",
    desc: "xxx — krátky popis triatlonu pre dospelých.",
  },
  {
    label: "Atletika",
    href: "/treningy/dospeli/atletika",
    desc: "xxx — krátky popis atletiky pre dospelých.",
  },
  {
    label: "Kondičné tréningy",
    href: "/treningy/dospeli/kondicne",
    desc: "xxx — krátky popis kondičných tréningov pre dospelých.",
  },
];

export default function Page() {
  return <TrainingsLanding audience="dospelí" courses={courses} />;
}
