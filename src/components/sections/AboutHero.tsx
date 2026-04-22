import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

const roleTags = [
  "Full-Stack Development",
  "AI Engineering",
  "Cybersecurity",
  "SQL · DevOps",
];

export function AboutHero() {
  return (
    <section
      style={{
        padding: "10rem 2.5rem 5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0, right: 0,
          width: "50%",
          height: "100%",
          background:
            "radial-gradient(ellipse at 80% 50%, rgba(201,169,110,0.05), transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <Reveal>
        <SectionLabel>About</SectionLabel>
      </Reveal>
      <Reveal delay={0.1}>
        <h1
          style={{
            fontFamily: "var(--serif), Georgia, serif",
            fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            marginBottom: "1.5rem",
            fontWeight: 400,
          }}
        >
          Hi, I'm{" "}
          <em style={{ fontStyle: "italic", color: "var(--ca)" }}>Alex Rendler</em>
        </h1>
      </Reveal>
      <Reveal delay={0.2}>
        <p
          style={{
            fontSize: "1.1rem",
            color: "var(--cg)",
            maxWidth: "560px",
            lineHeight: 1.7,
            marginBottom: "2rem",
          }}
        >
          Full-stack developer and founder of Rendlr. I build elegant,
          high-performance digital products — from complex AI systems to
          polished client websites.
        </p>
      </Reveal>
      <Reveal delay={0.3}>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "2.5rem" }}>
          <a
            href="/projects"
            style={{
              background: "var(--ca)",
              color: "var(--c0)",
              padding: "0.85rem 2rem",
              borderRadius: "4px",
              textDecoration: "none",
              fontSize: "0.85rem",
              fontWeight: 500,
              letterSpacing: "0.04em",
            }}
          >
            View My Work
          </a>
          <a
            href="mailto:alexrendler@yahoo.com"
            style={{
              color: "var(--cw)",
              padding: "0.85rem 2rem",
              border: "1px solid rgba(201,169,110,0.25)",
              borderRadius: "4px",
              textDecoration: "none",
              fontSize: "0.85rem",
              letterSpacing: "0.04em",
            }}
          >
            Get In Touch
          </a>
        </div>
      </Reveal>
      <Reveal delay={0.4}>
        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          {roleTags.map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: "0.75rem",
                padding: "0.3rem 0.9rem",
                border: "1px solid rgba(201,169,110,0.25)",
                borderRadius: "4px",
                color: "var(--ca)",
                letterSpacing: "0.06em",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
