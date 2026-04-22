import Link from "next/link";

export function Footer() {
  return (
    <footer
      style={{
        padding: "4rem 2.5rem 3rem",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr",
          gap: "4rem",
          marginBottom: "3rem",
        }}
      >
        {/* Brand */}
        <div>
          <div
            style={{
              fontFamily: "var(--serif), Georgia, serif",
              fontSize: "1.8rem",
              letterSpacing: "-0.02em",
              marginBottom: "0.75rem",
            }}
          >
            Rendlr
          </div>
          <p style={{ color: "var(--cg)", fontSize: "0.85rem", lineHeight: 1.6, maxWidth: "280px" }}>
            Modern web solutions built for growth. Based in Carlsbad, CA.
          </p>
        </div>

        {/* Services */}
        <div>
          <h4
            style={{
              fontSize: "0.72rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--cg)",
              marginBottom: "1.25rem",
            }}
          >
            Services
          </h4>
          {["Web Design", "SEO Optimization", "AI Integrations", "Digital Security"].map((s) => (
            <span key={s} style={{ display: "block", color: "var(--cl)", fontSize: "0.85rem", marginBottom: "0.6rem" }}>
              {s}
            </span>
          ))}
        </div>

        {/* Contact */}
        <div>
          <h4
            style={{
              fontSize: "0.72rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--cg)",
              marginBottom: "1.25rem",
            }}
          >
            Contact
          </h4>
          <span style={{ display: "block", color: "var(--cl)", fontSize: "0.85rem", marginBottom: "0.6rem" }}>
            Carlsbad, CA
          </span>
          <a
            href="mailto:alexrendler@yahoo.com"
            style={{ display: "block", color: "var(--cl)", fontSize: "0.85rem", marginBottom: "0.6rem", textDecoration: "none" }}
          >
            alexrendler@yahoo.com
          </a>
          <a
            href="tel:+17606539999"
            style={{ display: "block", color: "var(--cl)", fontSize: "0.85rem", textDecoration: "none" }}
          >
            (760) 653-9999
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          paddingTop: "2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span style={{ fontSize: "0.78rem", color: "var(--cg)" }}>
          © 2025 Rendlr. Built by{" "}
          <a
            href="https://github.com/alexrendlerCS"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--ca)", textDecoration: "none" }}
          >
            Alex Rendler
          </a>
          .
        </span>
        <span
          style={{
            fontSize: "0.7rem",
            color: "rgba(201,169,110,0.4)",
            letterSpacing: "0.05em",
          }}
        >
          ALL RIGHTS RESERVED
        </span>
      </div>
    </footer>
  );
}
