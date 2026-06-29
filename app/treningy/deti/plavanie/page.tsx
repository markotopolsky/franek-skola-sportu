import type { Metadata } from "next";
import CoursePage from "@/app/components/CoursePage";

export const metadata: Metadata = {
  title: "Plávanie pre deti — Franek, Škola športu Senec",
};

export default function Page() {
  return <CoursePage sport="Plávanie" audience="deti" />;
}
