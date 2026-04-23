"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { projects, type ProjectCategory } from "@/lib/data";

const FILTERS: { label: string; value: "all" | ProjectCategory }[] = [
  { label: "All", value: "all" },
  { label: "Web Dev", value: "web" },
  { label: "AI / ML", value: "ai" },
  { label: "Data", value: "data" },
  { label: "Finance", value: "finance" },
];

export function ProjectsGrid() {
  const [active, setActive] = useState<"all" | ProjectCategory>("all");

  const filtered =
    active === "all"
      ? projects
      : projects.filter((p) => p.category.includes(active));

  return (
    <>
      {/* Header */}
      <section style={{ padding: "10rem 2.5rem 4rem" }}>
        <Reveal>
          <SectionLabel>Work</SectionLabel>
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
            Selected <em style={{ fontStyle: "italic", color: "var(--ca)" }}>Projects</em>
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p style={{ color: "var(--cg)", fontSize: "1rem", maxWidth: "480px", lineHeight: 1.7 }}>
            Full-stack builds, AI systems, and client work spanning web
            development, data analytics, and machine learning.
          </p>
        </Reveal>
      </section>

      {/* Filters */}
      <div style={{ padding: "0 2.5rem", marginBottom: "2rem" }}>
        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          {FILTERS.map((f) => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              style={{
                fontSize: "0.78rem",
                padding: "0.4rem 1rem",
                borderRadius: "4px",
                border: `1px solid ${
                  active === f.value
                    ? "var(--ca)"
                    : "rgba(255,255,255,0.1)"
                }`,
                background:
                  active === f.value
                    ? "rgba(111,179,255,0.06)"
                    : "transparent",
                color: active === f.value ? "var(--ca)" : "var(--cg)",
                cursor: "pointer",
                transition: "all 0.2s",
                letterSpacing: "0.04em",
                fontFamily: "var(--sans)",
              }}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div
        style={{
          padding: "0 2.5rem 6rem",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1.5rem",
        }}
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{
                duration: 0.4,
                delay: i * 0.04,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const categoryLabel = project.category[0].toUpperCase();

  return (
    <div
      style={{
        background: "var(--c1)",
        border: "1px solid rgba(255,255,255,0.06)",
        borderRadius: "12px",
        overflow: "hidden",
        transition: "all 0.35s cubic-bezier(0.16,1,0.3,1)",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
  el.style.borderColor = "rgba(111,179,255,0.2)";
        el.style.transform = "translateY(-6px)";
        el.style.boxShadow = "0 24px 60px rgba(0,0,0,0.5)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "rgba(255,255,255,0.06)";
        el.style.transform = "translateY(0)";
        el.style.boxShadow = "none";
      }}
    >
      {/* Image placeholder */}
      <div
        style={{
          height: "180px",
          background: "var(--c2)",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <span
            style={{
            fontFamily: "var(--serif), Georgia, serif",
            fontSize: "1.5rem",
            color: "rgba(111,179,255,0.3)",
            letterSpacing: "-0.02em",
          }}
        >
          {project.title.split("—")[0].trim()}
        </span>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, transparent 50%, rgba(10,10,10,0.8))",
          }}
        />
        <span
          style={{
            position: "absolute",
            top: "1rem",
            left: "1rem",
            fontSize: "0.65rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            padding: "0.3rem 0.7rem",
            background: "rgba(111,179,255,0.15)",
            border: "1px solid rgba(111,179,255,0.25)",
            borderRadius: "3px",
            color: "var(--ca)",
          }}
        >
          {project.category[0]}
        </span>
      </div>

      {/* Body */}
      <div style={{ padding: "1.5rem", flex: 1, display: "flex", flexDirection: "column" }}>
        <h3
          style={{
            fontFamily: "var(--serif), Georgia, serif",
            fontSize: "1.1rem",
            letterSpacing: "-0.02em",
            marginBottom: "0.5rem",
            fontWeight: 400,
          }}
        >
          {project.title}
        </h3>
        <p
          style={{
            fontSize: "0.82rem",
            color: "var(--cg)",
            lineHeight: 1.6,
            marginBottom: "1rem",
            flex: 1,
          }}
        >
          {project.desc}
        </p>

        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.25rem" }}>
          {project.tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: "0.68rem",
                padding: "0.2rem 0.55rem",
                background: "rgba(255,255,255,0.05)",
                borderRadius: "3px",
                color: "var(--cg)",
                letterSpacing: "0.03em",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: "0.78rem",
            color: "var(--ca)",
            textDecoration: "none",
            letterSpacing: "0.04em",
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            transition: "gap 0.2s",
          }}
        >
          View Project →
        </a>
      </div>
    </div>
  );
}
