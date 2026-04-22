const items = [
  "Web Design", "·", "SEO Optimization", "·",
  "AI Integration", "·", "Digital Security", "·",
  "Full-Stack Development", "·", "Performance", "·",
  "Web Design", "·", "SEO Optimization", "·",
  "AI Integration", "·", "Digital Security", "·",
  "Full-Stack Development", "·", "Performance", "·",
];

export function Marquee() {
  return (
    <div
      style={{
        padding: "2.5rem 0",
        overflow: "hidden",
        borderTop: "1px solid rgba(255,255,255,0.04)",
        borderBottom: "1px solid rgba(255,255,255,0.04)",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "2.5rem",
          width: "max-content",
          animation: "marqueeScroll 22s linear infinite",
        }}
      >
        {items.map((item, i) => (
          <span
            key={i}
            style={{
              fontFamily: "var(--serif), Georgia, serif",
              fontSize: "1.3rem",
              color:
                item === "·"
                  ? "rgba(201,169,110,0.2)"
                  : i % 6 === 2
                  ? "rgba(201,169,110,0.5)"
                  : "rgba(201,169,110,0.25)",
              whiteSpace: "nowrap",
              letterSpacing: "-0.02em",
              fontStyle: i % 6 === 2 ? "italic" : "normal",
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
