import { ProjectsGrid } from "@/components/sections/ProjectsGrid";
import { Footer } from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects — Rendlr",
  description:
    "Full-stack builds, AI systems, and client work spanning web development, data analytics, and machine learning.",
};

export default function ProjectsPage() {
  return (
    <>
      <ProjectsGrid />
      <Footer />
    </>
  );
}
