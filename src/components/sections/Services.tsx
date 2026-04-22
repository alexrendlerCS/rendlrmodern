import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { services } from "@/lib/data";

export function Services() {
  return (
    <section style={{ padding: "7rem 2.5rem", position: "relative" }}>
      <Reveal>
        <SectionLabel>What We Do</SectionLabel>
      </Reveal>
      <Reveal delay={0.1}>
        <h2
          style={{
            fontFamily: "var(--serif), Georgia, serif",
            fontSize: "clamp(2rem, 4vw, 3.2rem)",
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            marginBottom: "1rem",
            fontWeight: 400,
          }}
        >
          Comprehensive digital solutions
          <br />
          that <em style={{ fontStyle: "italic", color: "var(--ca)" }}>deliver results</em>
        </h2>
      </Reveal>
      <Reveal delay={0.2}>
        <p
          style={{
            color: "var(--cg)",
            fontSize: "1rem",
            maxWidth: "540px",
            lineHeight: 1.7,
            marginBottom: "3rem",
          }}
        >
          Every service we offer is built to move the needle — more traffic,
          more conversions, stronger brand presence.
        </p>
      </Reveal>

      <Reveal delay={0.25}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "1px",
            background: "rgba(201,169,110,0.1)",
            border: "1px solid rgba(201,169,110,0.1)",
            borderRadius: "12px",
            overflow: "hidden",
          }}
        >
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </Reveal>
    </section>
  );
}

function ServiceCard({
  icon,
  title,
  desc,
}: {
  icon: string;
  title: string;
  desc: string;
}) {
  return (
    <div
      style={{
        background: "var(--c1)",
        padding: "2.5rem",
        transition: "background 0.3s",
        position: "relative",
        overflow: "hidden",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.background = "var(--c2)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.background = "var(--c1)";
      }}
    >
      <div
        style={{
          width: "40px",
          height: "40px",
          border: "1px solid rgba(201,169,110,0.3)",
          borderRadius: "8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "1.5rem",
          fontSize: "1rem",
        }}
      >
        {icon}
      </div>
      <h3
        style={{
          fontFamily: "var(--serif), Georgia, serif",
          fontSize: "1.3rem",
          marginBottom: "0.75rem",
          letterSpacing: "-0.02em",
          fontWeight: 400,
        }}
      >
        {title}
      </h3>
      <p style={{ color: "var(--cg)", fontSize: "0.9rem", lineHeight: 1.65 }}>{desc}</p>
    </div>
  );
}
