import type { Metadata } from "next";
import CoursePage from "@/app/components/CoursePage";

export const metadata: Metadata = {
  title: "Triatlon pre deti — Franek, Škola športu Senec",
};

export default function Page() {
  return <CoursePage sport="Triatlon" audience="deti" />;
}
