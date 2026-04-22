import { GetStartedGrid } from "@/components/sections/GetStartedGrid";
import { Footer } from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Started — Rendlr",
  description:
    "Choose the service that fits your needs. Every engagement starts with a free consultation.",
};

export default function GetStartedPage() {
  return (
    <>
      <GetStartedGrid />
      <Footer />
    </>
  );
}
