import type { Metadata } from "next";
import "../styles/globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Cursor } from "@/components/ui/Cursor";
import { ProgressBar } from "@/components/ui/ProgressBar";

export const metadata: Metadata = {
  title: "Rendlr — Modern Web Solutions Built for Growth",
  description:
    "We build modern, secure, and high-performing websites designed to grow your business. Based in Carlsbad, CA.",
  keywords: ["web design", "SEO", "AI integrations", "Next.js", "Carlsbad CA"],
  openGraph: {
    title: "Rendlr — Modern Web Solutions",
    description: "Fast. Secure. Built to grow your business.",
    url: "https://www.rendlr.dev",
    siteName: "Rendlr",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Cursor />
        <ProgressBar />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
