"use client";
import React from "react";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";

interface ParallaxCard {
  label: string;
  tag: string;
  icon: string;
  link: string;
  thumbnail?: string;
}

const CARD_PALETTES = [
  "rgba(111,179,255,0.06)",
  "rgba(100,140,200,0.06)",
  "rgba(120,180,140,0.06)",
  "rgba(180,110,120,0.06)",
  "rgba(160,130,200,0.06)",
];

export function HeroParallax({ products }: { products: ParallaxCard[] }) {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);

  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springCfg = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springCfg
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springCfg
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springCfg
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springCfg
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springCfg
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springCfg
  );

  return (
    <>
      <style jsx>{`
        @media (max-width: 768px) {
          .hero-container {
            height: 150vh !important;
            padding-top: 6rem !important;
          }
          .hero-row {
            gap: 0.75rem !important;
            margin-bottom: 0.75rem !important;
          }
        }
      `}</style>
      <div
        ref={ref}
        className="hero-container"
        style={{
          height: "200vh",
          paddingTop: "8rem",
          paddingBottom: "2rem",
          overflow: "hidden",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          perspective: "1000px",
          // @ts-ignore
          transformStyle: "preserve-3d",
        }}
      >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 60% at 60% 40%, rgba(111,179,255,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      {/* Grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(111,179,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(111,179,255,0.04) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 100%)",
          pointerEvents: "none",
        }}
      />

      <HeroHeader />

      <motion.div
        style={{ rotateX, rotateZ, translateY, opacity }}
      >
        {/* Row 1 — right */}
        <motion.div
          className="hero-row"
          style={{
            display: "flex",
            flexDirection: "row-reverse",
            gap: "1.25rem",
            marginBottom: "1.25rem",
          }}
        >
          {firstRow.map((card, i) => (
            <ProductCard key={card.label} card={card} index={i} translate={translateX} />
          ))}
        </motion.div>

        {/* Row 2 — left */}
        <motion.div
          className="hero-row"
          style={{
            display: "flex",
            gap: "1.25rem",
            marginBottom: "1.25rem",
          }}
        >
          {secondRow.map((card, i) => (
            <ProductCard key={card.label} card={card} index={i + 5} translate={translateXReverse} />
          ))}
        </motion.div>

        {/* Row 3 — right */}
        <motion.div
          className="hero-row"
          style={{ display: "flex", flexDirection: "row-reverse", gap: "1.25rem" }}
        >
          {thirdRow.map((card, i) => (
            <ProductCard key={card.label} card={card} index={i + 10} translate={translateX} />
          ))}
        </motion.div>
      </motion.div>
    </div>
    </>
  );
}

function HeroHeader() {
  return (
    <>
      <style jsx>{`
        @media (max-width: 768px) {
          .hero-header-container {
            padding: 0 1.25rem 2rem !important;
            flex-direction: column !important;
            align-items: flex-start !important;
          }
          .hero-buttons {
            flex-direction: column !important;
            width: 100%;
          }
          .hero-buttons a {
            width: 100%;
            text-align: center;
          }
        }
      `}</style>
      <div
        className="hero-header-container"
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 2.5rem 4rem",
          width: "100%",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: "2rem",
          position: "relative",
          zIndex: 2,
        }}
      >
      <div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontSize: "0.72rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--ca)",
            marginBottom: "1.5rem",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <span style={{ width: "22px", height: "1px", background: "var(--ca)", display: "block" }} />
          Based in Carlsbad, CA · Est. 2024
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: "var(--serif), Georgia, serif",
            fontSize: "clamp(3rem, 7vw, 6rem)",
            lineHeight: 1.04,
            letterSpacing: "-0.03em",
            fontWeight: 400,
          }}
        >
          Modern Web Solutions
          <br />
          <em style={{ fontStyle: "italic", color: "var(--ca)" }}>Built for Growth</em>
        </motion.h1>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        style={{ maxWidth: "360px", flexShrink: 0 }}
      >
        <p style={{ color: "var(--cg)", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
          We build fast, secure, high-performing websites and AI-powered products
          that turn visitors into customers.
        </p>
        <div className="hero-buttons" style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
          <Link
            href="/getting-started"
            style={{
              background: "var(--ca)",
              color: "var(--c0)",
              padding: "0.85rem 1.75rem",
              borderRadius: "4px",
              textDecoration: "none",
              fontSize: "0.82rem",
              fontWeight: 500,
              letterSpacing: "0.04em",
              transition: "background 0.2s",
            }}
          >
            Start Your Project
          </Link>
          <Link
            href="/projects"
            style={{
              color: "var(--cw)",
              padding: "0.85rem 1.75rem",
              border: "1px solid rgba(111,179,255,0.25)",
              borderRadius: "4px",
              textDecoration: "none",
              fontSize: "0.82rem",
              letterSpacing: "0.04em",
              transition: "border-color 0.2s, color 0.2s",
            }}
          >
            View Work
          </Link>
        </div>
      </motion.div>
    </div>
    </>
  );
}

function ProductCard({
  card,
  index,
  translate,
}: {
  card: ParallaxCard;
  index: number;
  translate: MotionValue<number>;
}) {
  return (
    <motion.div
      style={{ x: translate }}
      whileHover={{ y: -16 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Link
        href={card.link}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "block",
          width: "220px",
          height: "144px",
          borderRadius: "10px",
          overflow: "hidden",
          border: "1px solid rgba(111,179,255,0.12)",
          background: CARD_PALETTES[index % CARD_PALETTES.length],
          position: "relative",
          flexShrink: 0,
          textDecoration: "none",
          transition: "border-color 0.2s",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor =
            "rgba(111,179,255,0.35)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor =
            "rgba(111,179,255,0.12)";
        }}
      >
        {/* Top accent line */}
        <div
          style={{
            position: "absolute",
            top: 0, left: 0, right: 0,
            height: "1px",
            background:
              "linear-gradient(to right, transparent, rgba(111,179,255,0.3), transparent)",
          }}
        />

        {/* Thumbnail (if provided) */}
        {"thumbnail" in card && card.thumbnail ? (
          <img
            src={(card as any).thumbnail}
            alt={card.label}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              zIndex: 0,
            }}
          />
        ) : null}

        {/* Icon */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "var(--serif), Georgia, serif",
            fontSize: "2rem",
            color: "var(--ca)",
            opacity: 0.15,
            letterSpacing: "-0.04em",
            zIndex: 1,
          }}
        >
          {card.icon}
        </div>

        {/* Tag */}
        <span
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            fontSize: "9px",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            padding: "3px 7px",
            borderRadius: "3px",
            background: "rgba(111,179,255,0.12)",
            border: "1px solid rgba(111,179,255,0.2)",
            color: "var(--ca)",
          }}
        >
          {card.tag}
        </span>

        {/* Label */}
        <div
          style={{
            position: "absolute",
            bottom: "10px",
            left: "12px",
            right: "12px",
            fontSize: "11px",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.35)",
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
          }}
        >
          {card.label}
        </div>

        {/* Hover overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(111,179,255,0.06)",
            zIndex: 2,
          }}
        />
      </Link>
    </motion.div>
  );
}
