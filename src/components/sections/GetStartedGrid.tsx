import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { getStartedServices } from "@/lib/data";

export function GetStartedGrid() {
  return (
    <>
      {/* Header */}
      <section style={{ padding: "10rem 2.5rem 5rem" }}>
        <Reveal>
          <SectionLabel>Services</SectionLabel>
        </Reveal>
        <Reveal delay={0.1}>
          <h1
            style={{
              fontFamily: "var(--serif), Georgia, serif",
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              marginBottom: "1rem",
              fontWeight: 400,
            }}
          >
            Let's build something
            <br />
            <em style={{ fontStyle: "italic", color: "var(--ca)" }}>great together</em>
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p
            style={{ color: "var(--cg)", fontSize: "1rem", maxWidth: "480px", lineHeight: 1.7 }}
          >
            Choose the service that fits your needs. Every engagement starts
            with a free consultation.
          </p>
        </Reveal>
      </section>

      {/* Cards */}
      <div
        style={{
          padding: "0 2.5rem",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1.5rem",
          marginBottom: "2rem",
        }}
      >
        {getStartedServices.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.07}>
            <GsCard {...s} />
          </Reveal>
        ))}
      </div>

      {/* CTA */}
      <Reveal>
        <div
          style={{
            margin: "2rem 2.5rem 6rem",
            padding: "5rem 2.5rem",
            textAlign: "center",
            background: "var(--c1)",
            borderRadius: "16px",
            border: "1px solid rgba(201,169,110,0.12)",
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
              width: "500px",
              height: "300px",
              background:
                "radial-gradient(ellipse, rgba(201,169,110,0.07), transparent 70%)",
              pointerEvents: "none",
            }}
          />
          <div style={{ position: "relative", zIndex: 1 }}>
            <h2
              style={{
                fontFamily: "var(--serif), Georgia, serif",
                fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                marginBottom: "1rem",
                fontWeight: 400,
              }}
            >
              Not sure which service
              <br />
              is right for{" "}
              <em style={{ fontStyle: "italic", color: "var(--ca)" }}>you?</em>
            </h2>
            <p
              style={{
                color: "var(--cg)",
                maxWidth: "440px",
                margin: "0 auto 2.5rem",
                fontSize: "1rem",
                lineHeight: 1.7,
              }}
            >
              Let's discuss your project goals and find the perfect solution.
              First consultation is free.
            </p>
            <div
              style={{
                display: "flex",
                gap: "1rem",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <a
                href="mailto:alexrendler@yahoo.com?subject=Free%20Consultation"
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
                Schedule a Free Consultation
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
        </div>
      </Reveal>
    </>
  );
}

function GsCard({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div
      style={{
        background: "var(--c1)",
        border: "1px solid rgba(255,255,255,0.06)",
        borderRadius: "12px",
        padding: "2rem",
        transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)",
        cursor: "pointer",
        position: "relative",
        overflow: "hidden",
        height: "100%",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "rgba(201,169,110,0.2)";
        el.style.transform = "translateY(-4px)";
        const bar = el.querySelector(".gs-bar") as HTMLElement;
        if (bar) bar.style.transform = "scaleX(1)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "rgba(255,255,255,0.06)";
        el.style.transform = "translateY(0)";
        const bar = el.querySelector(".gs-bar") as HTMLElement;
        if (bar) bar.style.transform = "scaleX(0)";
      }}
    >
      <div
        className="gs-bar"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "2px",
          background: "var(--ca)",
          transform: "scaleX(0)",
          transition: "transform 0.3s cubic-bezier(0.34,1.56,0.64,1)",
          transformOrigin: "left",
        }}
      />
      <div style={{ fontSize: "1.5rem", marginBottom: "1.5rem" }}>{icon}</div>
      <h3
        style={{
          fontFamily: "var(--serif), Georgia, serif",
          fontSize: "1.2rem",
          marginBottom: "0.75rem",
          letterSpacing: "-0.02em",
          fontWeight: 400,
        }}
      >
        {title}
      </h3>
      <p style={{ fontSize: "0.85rem", color: "var(--cg)", lineHeight: 1.65, marginBottom: "1.5rem" }}>
        {desc}
      </p>
      <div
        style={{
          fontSize: "0.78rem",
          color: "var(--ca)",
          letterSpacing: "0.04em",
          display: "flex",
          alignItems: "center",
          gap: "6px",
        }}
      >
        Get Started →
      </div>
    </div>
  );
}
