"use client";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { certifications, skills } from "@/lib/data";

const aiTags = [
  "RAG Architecture", "Vector Embeddings", "LLM Integration",
  "Semantic Search", "Ollama / Local LLMs", "Prompt Engineering",
];

const codeLines = [
  { num: 1, html: `<span class="kw">const</span> tutor = <span class="kw">new</span> <span class="fn">AITutor</span>({` },
  { num: 2, html: `&nbsp;&nbsp;model: <span class="str">'llama3-8b'</span>,` },
  { num: 3, html: `&nbsp;&nbsp;method: <span class="str">'socratic'</span>,` },
  { num: 4, html: `&nbsp;&nbsp;rag: <span class="fn">vectorStore</span>.connect(),` },
  { num: 5, html: `&nbsp;&nbsp;context: <span class="fn">buildContext</span>({` },
  { num: 6, html: `&nbsp;&nbsp;&nbsp;&nbsp;lesson, progress, quizScore` },
  { num: 7, html: `&nbsp;&nbsp;})` },
  { num: 8, html: `})` },
  { num: 9, html: `<span class="cm">// → 3 guiding questions, never answers</span>` },
];

// ─── AI Section ───────────────────────────────────────────────────
export function AiSection() {
  return (
    <>
      <div
        style={{
          height: "1px",
          background:
            "linear-gradient(to right, transparent, rgba(111,179,255,0.2), transparent)",
          margin: "0 2.5rem",
        }}
      />
      <section
        style={{
          padding: "7rem 2.5rem",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "6rem",
          alignItems: "center",
        }}
      >
        <Reveal>
          <div>
            <SectionLabel>AI Engineering</SectionLabel>
            <h2
              style={{
                fontFamily: "var(--serif), Georgia, serif",
                fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                marginBottom: "1rem",
                fontWeight: 400,
              }}
            >
              Production-Ready
              <br />
              <em style={{ fontStyle: "italic", color: "var(--ca)" }}>AI Infrastructure</em>
            </h2>
            <p
              style={{
                color: "var(--cg)",
                fontSize: "0.95rem",
                lineHeight: 1.75,
                marginBottom: "1.5rem",
              }}
            >
              I architect and implement advanced AI systems with deep expertise
              in RAG, vector embeddings, and semantic search. My work spans from
              designing chunking strategies for optimal context retrieval to
              building scalable AI pipelines that integrate local LLMs and
              real-time data processing.
            </p>
            <p
              style={{
                color: "var(--cg)",
                fontSize: "0.95rem",
                lineHeight: 1.75,
                marginBottom: "2rem",
              }}
            >
              At AIcademy, I engineered an AI tutor that reimagines how students
              interact with educational content — acting as a Socratic learning
              coach rather than an answer machine.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {aiTags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize: "0.75rem",
                    padding: "0.35rem 0.75rem",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "4px",
                    color: "var(--cg)",
                    letterSpacing: "0.03em",
                    transition: "all 0.2s",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Code block */}
        <Reveal delay={0.15}>
          <div
            style={{
              background: "var(--c2)",
              border: "1px solid rgba(111,179,255,0.15)",
              borderRadius: "16px",
              padding: "2.5rem",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(ellipse at 30% 30%, rgba(111,179,255,0.06), transparent 60%)",
                pointerEvents: "none",
              }}
            />
            {codeLines.map((line) => (
              <div
                key={line.num}
                style={{
                  fontFamily: "monospace",
                  fontSize: "0.78rem",
                  padding: "0.25rem 0",
                  display: "flex",
                  gap: "1rem",
                  borderBottom:
                    line.num < codeLines.length
                      ? "1px solid rgba(255,255,255,0.04)"
                      : "none",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <span
                  style={{ color: "rgba(111,179,255,0.25)", minWidth: "16px" }}
                >
                  {line.num}
                </span>
                <span
                  style={{ color: "var(--cl)" }}
                  dangerouslySetInnerHTML={{ __html: line.html }}
                />
              </div>
            ))}
            <style>{`
              .kw { color: #c9a96e; }
              .fn { color: #88c9a9; }
              .str { color: #a9c4e8; }
              .cm { color: #555; }
            `}</style>
          </div>
        </Reveal>
      </section>
    </>
  );
}

// ─── Credentials + Skills ─────────────────────────────────────────
export function CredentialsSection() {
  return (
    <>
      <div
        style={{
          height: "1px",
          background:
            "linear-gradient(to right, transparent, rgba(111,179,255,0.2), transparent)",
          margin: "0 2.5rem",
        }}
      />
      <section
        style={{
          padding: "7rem 2.5rem",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "6rem",
          alignItems: "start",
        }}
      >
        {/* Certifications */}
        <Reveal>
          <div>
            <SectionLabel>Credentials</SectionLabel>
            <h2
              style={{
                fontFamily: "var(--serif), Georgia, serif",
                fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                marginBottom: "2rem",
                fontWeight: 400,
              }}
            >
              Certifications &amp;{" "}
              <em style={{ fontStyle: "italic", color: "var(--ca)" }}>Current Roles</em>
            </h2>
            {certifications.map((cert) => (
              <div
                key={cert.title}
                style={{
                  border: "1px solid rgba(111,179,255,0.15)",
                  borderRadius: "10px",
                  padding: "1.5rem",
                  marginBottom: "1rem",
                  background: "var(--c1)",
                  transition: "all 0.3s",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(111,179,255,0.35)";
                  el.style.transform = "translateX(4px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(111,179,255,0.15)";
                  el.style.transform = "translateX(0)";
                }}
              >
                <div
                  style={{ fontSize: "0.85rem", fontWeight: 500, marginBottom: "0.25rem" }}
                >
                  {cert.title}
                </div>
                <div style={{ fontSize: "0.78rem", color: "var(--ca)" }}>{cert.org}</div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Skills */}
        <Reveal delay={0.15}>
          <div>
            <SectionLabel>Skills</SectionLabel>
            <h2
              style={{
                fontFamily: "var(--serif), Georgia, serif",
                fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                marginBottom: "2rem",
                fontWeight: 400,
              }}
            >
              Tech Stack &amp;{" "}
              <em style={{ fontStyle: "italic", color: "var(--ca)" }}>Expertise</em>
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {skills.map((skill) => (
                <span
                  key={skill}
                  style={{
                    fontSize: "0.75rem",
                    padding: "0.35rem 0.75rem",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "4px",
                    color: "var(--cg)",
                    letterSpacing: "0.03em",
                    transition: "all 0.2s",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "rgba(111,179,255,0.4)";
                    el.style.color = "var(--ca)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "rgba(255,255,255,0.1)";
                    el.style.color = "var(--cg)";
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
