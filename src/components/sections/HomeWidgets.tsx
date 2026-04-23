"use client";
import { useState, useEffect, useRef } from "react";
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
        borderTop: "1px solid rgba(111,179,255,0.1)",
        borderBottom: "1px solid rgba(111,179,255,0.1)",
        display: "flex",
        justifyContent: "center",
        gap: 0,
      }}
    >
      {stats.map((s, i) => (
        <Reveal key={s.num} delay={i * 0.1}>
          <StatCard stat={s} index={i} isLast={i === stats.length - 1} />
        </Reveal>
      ))}
    </div>
  );
}

function StatCard({ stat, index, isLast }: { stat: typeof stats[0]; index: number; isLast: boolean }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Parse the number and suffix correctly (e.g., "30+" -> {num: 30, suffix: "+"}, "24/7" -> {num: 24, suffix: "/7"})
  const match = stat.num.match(/^(\d+)(.*)$/);
  const targetValue = match ? parseInt(match[1]) : 0;
  const suffix = match ? match[2] : '';

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          const duration = 2500; // 2.5 seconds
          const startTime = Date.now();
          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function (ease-out)
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const currentCount = Math.floor(easeOut * targetValue);
            
            setCount(currentCount);
            
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          
          animate();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [targetValue, hasAnimated]);

  return (
    <div
      ref={ref}
      style={{
        flex: 1,
        textAlign: "center",
        maxWidth: "200px",
        padding: "1.5rem",
        position: "relative",
      }}
    >
      {!isLast && (
        <span
          style={{
            position: "absolute",
            right: 0,
            top: "50%",
            transform: "translateY(-50%)",
            height: "48px",
            width: "1px",
            background: "rgba(111,179,255,0.15)",
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
        {count}{suffix}
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
        {stat.label}
      </div>
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
  const [hovered, setHovered] = useState(false);

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
        el.style.borderColor = "rgba(111,179,255,0.2)";
        el.style.transform = "translateY(-3px)";
        setHovered(true);
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "rgba(255,255,255,0.06)";
        el.style.transform = "translateY(0)";
        setHovered(false);
      }}
    >
      <div
        style={{
          fontFamily: "var(--serif), Georgia, serif",
          fontSize: "5rem",
          color: "rgba(111,179,255,0.12)",
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

      {/* Star Rating */}
      <div style={{ display: "flex", gap: "4px", marginBottom: "1rem", position: "relative", zIndex: 1 }}>
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              transition: `fill 0.5s cubic-bezier(0.34,1.56,0.64,1) ${i * 0.1}s`,
              animation: hovered ? `starBounce 0.6s cubic-bezier(0.34,1.56,0.64,1) ${i * 0.1}s` : "none",
            }}
          >
            <path
              d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
              fill={hovered ? "var(--ca)" : "rgba(111,179,255,0.15)"}
              stroke={hovered ? "var(--ca)" : "rgba(111,179,255,0.3)"}
              strokeWidth="1"
              style={{
                transition: `fill 0.3s ease ${i * 0.1}s`,
              }}
            />
          </svg>
        ))}
      </div>

      <style>{`
        @keyframes starBounce {
          0% { transform: translateY(0); }
          30% { transform: translateY(-8px); }
          50% { transform: translateY(-10px); }
          65% { transform: translateY(0); }
          80% { transform: translateY(-3px); }
          100% { transform: translateY(0); }
        }
      `}</style>

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
              "radial-gradient(ellipse, rgba(111,179,255,0.08), transparent 70%)",
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
                border: "1px solid rgba(111,179,255,0.25)",
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
