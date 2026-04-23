"use client";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { whyItems } from "@/lib/data";

export function WhyRendlr() {
  return (
    <section style={{ padding: "7rem 2.5rem" }}>
      <Reveal>
        <SectionLabel>Why Rendlr</SectionLabel>
      </Reveal>
      <Reveal delay={0.1}>
        <h2
          style={{
            fontFamily: "var(--serif), Georgia, serif",
            fontSize: "clamp(2rem, 4vw, 3.2rem)",
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            marginBottom: "3rem",
            fontWeight: 400,
          }}
        >
          Technical expertise meets
          <br />
          <em style={{ fontStyle: "italic", color: "var(--ca)" }}>business strategy</em>
        </h2>
      </Reveal>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "1.5rem",
        }}
      >
        {whyItems.map((item, i) => (
          <Reveal key={item.num} delay={i * 0.08}>
            <WhyCard {...item} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function WhyCard({ num, title, desc }: { num: string; title: string; desc: string }) {
  return (
    <div
      style={{
        padding: "2rem",
        border: "1px solid rgba(255,255,255,0.06)",
        borderRadius: "10px",
        background: "var(--c1)",
        transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
  el.style.borderColor = "rgba(111,179,255,0.25)";
        el.style.transform = "translateY(-4px)";
        el.style.background = "var(--c2)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "rgba(255,255,255,0.06)";
        el.style.transform = "translateY(0)";
        el.style.background = "var(--c1)";
      }}
    >
      <div
        style={{
          fontFamily: "var(--serif), Georgia, serif",
          fontSize: "2.5rem",
          color: "rgba(111,179,255,0.2)",
          lineHeight: 1,
          marginBottom: "1rem",
        }}
      >
        {num}
      </div>
      <h3 style={{ fontSize: "0.95rem", fontWeight: 500, marginBottom: "0.5rem" }}>{title}</h3>
      <p style={{ fontSize: "0.82rem", color: "var(--cg)", lineHeight: 1.6 }}>{desc}</p>
    </div>
  );
}
