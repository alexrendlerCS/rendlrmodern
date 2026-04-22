import { AboutHero } from "@/components/sections/AboutHero";
import { AiSection } from "@/components/sections/AiSection";
import { CredentialsSection } from "@/components/sections/CredentialsSection";
import { Footer } from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Alex Rendler | Rendlr",
  description:
    "Full-stack developer and founder of Rendlr. I build elegant, high-performance digital products — from complex AI systems to polished client websites.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AiSection />
      <CredentialsSection />
      <Footer />
    </>
  );
}
