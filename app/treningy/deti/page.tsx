import type { Metadata } from "next";
import TrainingsLanding from "@/app/components/TrainingsLanding";

export const metadata: Metadata = {
  title: "Tréningy pre deti — Franek, Škola športu Senec",
};

const courses = [
  {
    label: "Plávanie",
    href: "/treningy/deti/plavanie",
    desc: "xxx — krátky popis plaveckých kurzov pre deti.",
  },
  {
    label: "Triatlon",
    href: "/treningy/deti/triatlon",
    desc: "xxx — krátky popis triatlonu pre deti.",
  },
  {
    label: "Atletika",
    href: "/treningy/deti/atletika",
    desc: "xxx — krátky popis atletiky pre deti.",
  },
  {
    label: "Kondičné tréningy",
    href: "/treningy/deti/kondicne",
    desc: "xxx — krátky popis kondičných tréningov pre deti.",
  },
  {
    label: "Letné tábory",
    href: "/letne-tabory",
    desc: "xxx — denné a pobytové tábory počas leta.",
  },
];

export default function Page() {
  return <TrainingsLanding audience="deti" courses={courses} />;
}
