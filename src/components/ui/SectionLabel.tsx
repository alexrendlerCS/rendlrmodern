interface SectionLabelProps {
  children: string;
  center?: boolean;
}

export function SectionLabel({ children, center = false }: SectionLabelProps) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        fontSize: "0.72rem",
        letterSpacing: "0.15em",
        textTransform: "uppercase",
        color: "var(--ca)",
        marginBottom: "1rem",
        justifyContent: center ? "center" : "flex-start",
      }}
    >
      <span
        style={{
          width: "24px",
          height: "1px",
          background: "var(--ca)",
          flexShrink: 0,
        }}
      />
      {children}
    </div>
  );
}
