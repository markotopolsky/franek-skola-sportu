import type { Metadata } from "next";
import About from "../../components/About";

export const metadata: Metadata = {
  title: "Náš príbeh — Franek, Škola športu Senec",
};

export default function NasPribehPage() {
  return (
    <main>
      <About />
    </main>
  );
}
