import type { Metadata } from "next";
import CoursePage from "@/app/components/CoursePage";

export const metadata: Metadata = {
  title: "Kondičné tréningy pre dospelých — Franek, Škola športu Senec",
};

export default function Page() {
  return <CoursePage sport="Kondičné tréningy" audience="dospelí" />;
}
