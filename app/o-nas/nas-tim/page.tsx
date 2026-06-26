import type { Metadata } from "next";
import Trainers from "../../components/Trainers";

export const metadata: Metadata = {
  title: "Náš tím — Franek, Škola športu Senec",
};

export default function NasTimPage() {
  return (
    <main>
      <Trainers />
    </main>
  );
}
