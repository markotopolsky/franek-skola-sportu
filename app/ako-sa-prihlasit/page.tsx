import type { Metadata } from "next";
import HowToRegister from "../components/HowToRegister";

export const metadata: Metadata = {
  title: "Ako sa prihlásiť — Franek, Škola športu Senec",
};

export default function AkoSaPrihlasitPage() {
  return (
    <main>
      <HowToRegister />
    </main>
  );
}
