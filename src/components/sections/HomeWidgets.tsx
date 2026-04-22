import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { stats, testimonials } from "@/lib/data";

// ─── Stats Band ───────────────────────────────────────────────────
export function StatsBand() {
  return (
    <div
      style={{
        padding: "5rem 2.5rem",
        background: "var(--c1)",
        borderTop: "1px solid rgba(201,169,110,0.1)",
        borderBottom: "1px solid rgba(201,169,110,0.1)",
        display: "flex",
        justifyContent: "center",
        gap: 0,
      }}
    >
      {stats.map((s, i) => (
        <Reveal key={s.num} delay={i * 0.1}>
          <div
            style={{
              flex: 1,
              textAlign: "center",
              maxWidth: "200px",
              padding: "1.5rem",
              position: "relative",
            }}
          >
            {i < stats.length - 1 && (
              <span
                style={{
                  position: "absolute",
                  right: 0,
                  top: "50%",
                  transform: "translateY(-50%)",
                  height: "48px",
                  width: "1px",
                  background: "rgba(201,169,110,0.15)",
                  display: "block",
                }}
              />
            )}
            <div
              style={{
                fontFamily: "var(--serif), Georgia, serif",
                fontSize: "3.5rem",
                lineHeight: 1,
                letterSpacing: "-0.04em",
              }}
            >
              {s.num}
            </div>
            <div
              style={{
                fontSize: "0.72rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--cg)",
                marginTop: "0.5rem",
              }}
            >
              {s.label}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

// ─── Testimonials ─────────────────────────────────────────────────
export function Testimonials() {
  return (
    <section style={{ padding: "7rem 2.5rem" }}>
      <Reveal>
        <SectionLabel>Client Feedback</SectionLabel>
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
          What clients say about{" "}
          <em style={{ fontStyle: "italic", color: "var(--ca)" }}>working with us</em>
        </h2>
      </Reveal>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1.5rem",
        }}
      >
        {testimonials.map((t, i) => (
          <Reveal key={t.author} delay={i * 0.1}>
            <TestCard {...t} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function TestCard({
  text,
  author,
  role,
}: {
  text: string;
  author: string;
  role: string;
}) {
  return (
    <div
      style={{
        background: "var(--c1)",
        border: "1px solid rgba(255,255,255,0.06)",
        borderRadius: "12px",
        padding: "2rem",
        position: "relative",
        overflow: "hidden",
        transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "rgba(201,169,110,0.2)";
        el.style.transform = "translateY(-3px)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "rgba(255,255,255,0.06)";
        el.style.transform = "translateY(0)";
      }}
    >
      <div
        style={{
          fontFamily: "var(--serif), Georgia, serif",
          fontSize: "5rem",
          color: "rgba(201,169,110,0.12)",
          position: "absolute",
          top: "-0.5rem",
          left: "1rem",
          lineHeight: 1,
          pointerEvents: "none",
        }}
      >
        &ldquo;
      </div>
      <p
        style={{
          fontSize: "0.88rem",
          color: "var(--cl)",
          lineHeight: 1.7,
          marginBottom: "1.5rem",
          position: "relative",
          zIndex: 1,
        }}
      >
        {text}
      </p>
      <div style={{ fontSize: "0.82rem", fontWeight: 500 }}>{author}</div>
      <div style={{ fontSize: "0.75rem", color: "var(--ca)", marginTop: "2px" }}>{role}</div>
    </div>
  );
}

// ─── CTA Section ──────────────────────────────────────────────────
export function CtaSection() {
  return (
    <Reveal>
      <section
        style={{
          padding: "8rem 2.5rem",
          textAlign: "center",
          background: "var(--c1)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "600px",
            height: "400px",
            background:
              "radial-gradient(ellipse, rgba(201,169,110,0.08), transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ position: "relative", zIndex: 1 }}>
          <SectionLabel center>Let's Build</SectionLabel>
          <h2
            style={{
              fontFamily: "var(--serif), Georgia, serif",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              marginBottom: "1rem",
              fontWeight: 400,
            }}
          >
            Ready to grow your business
            <br />
            with <em style={{ fontStyle: "italic", color: "var(--ca)" }}>Rendlr?</em>
          </h2>
          <p
            style={{
              color: "var(--cg)",
              maxWidth: "460px",
              margin: "0 auto 2.5rem",
              fontSize: "1rem",
              lineHeight: 1.7,
            }}
          >
            Get a free consultation. We'll map out exactly how to build your web
            presence the right way.
          </p>
          <div
            style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}
          >
            <a
              href="/getting-started"
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
              Start Your Project
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
              Send Email
            </a>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
