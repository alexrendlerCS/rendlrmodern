"use client";
import { useState, useEffect, useRef } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

interface Service {
  id: number;
  icon: string;
  title: string;
  desc: string;
  category: string;
  relatedIds: number[];
  impact: number;
}

const servicesData: Service[] = [
  {
    id: 1,
    icon: "⬡",
    title: "Web Design & Development",
    desc: "Beautiful, responsive websites crafted from scratch. Fast-loading, mobile-first, built to convert visitors into customers.",
    category: "Development",
    relatedIds: [2, 3],
    impact: 95,
  },
  {
    id: 2,
    icon: "◎",
    title: "SEO Optimization",
    desc: "Technical and content SEO that puts you in front of your audience. Rank higher on Google and drive consistent organic traffic.",
    category: "Marketing",
    relatedIds: [1, 5],
    impact: 88,
  },
  {
    id: 3,
    icon: "◈",
    title: "AI Integrations",
    desc: "Cutting-edge AI features embedded into your product — chatbots, automation, personalization, and intelligent workflows.",
    category: "Innovation",
    relatedIds: [1, 4],
    impact: 92,
  },
  {
    id: 4,
    icon: "◇",
    title: "Digital Security",
    desc: "Enterprise-grade security practices for businesses of all sizes. Protect your users, your data, and your reputation.",
    category: "Protection",
    relatedIds: [1, 3],
    impact: 90,
  },
  {
    id: 5,
    icon: "◆",
    title: "Brand Building",
    desc: "Strategic brand identity and positioning that sets you apart. Create memorable experiences that resonate with your audience.",
    category: "Strategy",
    relatedIds: [1, 2],
    impact: 85,
  },
];

export function Services() {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({});
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [pulseEffect, setPulseEffect] = useState<Record<number, boolean>>({});
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedItems({});
      setActiveNodeId(null);
      setPulseEffect({});
      setAutoRotate(true);
    }
  };

  const toggleItem = (id: number) => {
    setExpandedItems((prev) => {
      const newState = { ...prev };
      Object.keys(newState).forEach((key) => {
        if (parseInt(key) !== id) {
          newState[parseInt(key)] = false;
        }
      });

      newState[id] = !prev[id];

      if (!prev[id]) {
        setActiveNodeId(id);
        setAutoRotate(false);

        const relatedItems = getRelatedItems(id);
        const newPulseEffect: Record<number, boolean> = {};
        relatedItems.forEach((relId) => {
          newPulseEffect[relId] = true;
        });
        setPulseEffect(newPulseEffect);
      } else {
        setActiveNodeId(null);
        setAutoRotate(true);
        setPulseEffect({});
      }

      return newState;
    });
  };

  useEffect(() => {
    let rotationTimer: NodeJS.Timeout;

    if (autoRotate) {
      rotationTimer = setInterval(() => {
        setRotationAngle((prev) => {
          const newAngle = (prev + 0.2) % 360;
          return Number(newAngle.toFixed(3));
        });
      }, 50);
    }

    return () => {
      if (rotationTimer) {
        clearInterval(rotationTimer);
      }
    };
  }, [autoRotate]);

  const calculateNodePosition = (index: number, total: number) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const radius = 220;
    const radian = (angle * Math.PI) / 180;

    const x = radius * Math.cos(radian);
    const y = radius * Math.sin(radian);

    const zIndex = Math.round(100 + 50 * Math.cos(radian));
    const opacity = Math.max(0.5, Math.min(1, 0.5 + 0.5 * ((1 + Math.sin(radian)) / 2)));

    return { x, y, angle, zIndex, opacity };
  };

  const getRelatedItems = (itemId: number): number[] => {
    const currentItem = servicesData.find((item) => item.id === itemId);
    return currentItem ? currentItem.relatedIds : [];
  };

  const isRelatedToActive = (itemId: number): boolean => {
    if (!activeNodeId) return false;
    const relatedItems = getRelatedItems(activeNodeId);
    return relatedItems.includes(itemId);
  };

  return (
    <>
      <style jsx>{`
        @media (max-width: 768px) {
          .services-container {
            padding: 2rem 1.25rem !important;
          }
          .orbital-container {
            height: 500px !important;
            margin-top: 1rem !important;
          }
        }
      `}</style>
      <section className="services-container" style={{ padding: "3rem 2.5rem 3rem", position: "relative", overflow: "visible" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
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
              marginBottom: "1rem",
            }}
          >
            Every service we offer is built to move the needle — more traffic,
            more conversions, stronger brand presence.
          </p>
        </Reveal>

        {/* Orbital Visualization */}
        <div
          ref={containerRef}
          onClick={handleContainerClick}
          className="orbital-container"
          style={{
            width: "100%",
            height: "700px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            marginTop: "1.5rem",
            marginBottom: "2rem",
          }}
        >
          <div
            ref={orbitRef}
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Center Core */}
            <div
              style={{
                position: "absolute",
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, var(--ca) 0%, var(--cab) 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 10,
                boxShadow: "0 0 40px rgba(111,179,255,0.4)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  border: "1px solid rgba(111,179,255,0.2)",
                  animation: "ping 2s cubic-bezier(0, 0, 0.2, 1) infinite",
                  opacity: 0.7,
                }}
              ></div>
              <div
                style={{
                  position: "absolute",
                  width: "120px",
                  height: "120px",
                  borderRadius: "50%",
                  border: "1px solid rgba(111,179,255,0.1)",
                  animation: "ping 2s cubic-bezier(0, 0, 0.2, 1) infinite",
                  animationDelay: "0.5s",
                  opacity: 0.5,
                }}
              ></div>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.9)",
                  backdropFilter: "blur(10px)",
                }}
              ></div>
            </div>

            {/* Orbit Ring */}
            <div
              style={{
                position: "absolute",
                width: "440px",
                height: "440px",
                borderRadius: "50%",
                border: "1px solid rgba(111,179,255,0.15)",
              }}
            ></div>

            {/* Service Nodes */}
            {servicesData.map((item, index) => {
              const position = calculateNodePosition(index, servicesData.length);
              const isExpanded = expandedItems[item.id];
              const isRelated = isRelatedToActive(item.id);
              const isPulsing = pulseEffect[item.id];

              const nodeStyle = {
                transform: `translate(${position.x}px, ${position.y}px)`,
                zIndex: isExpanded ? 200 : position.zIndex,
                opacity: isExpanded ? 1 : position.opacity,
              };

              return (
                <div
                  key={item.id}
                  ref={(el) => {
                    nodeRefs.current[item.id] = el;
                  }}
                  style={{
                    position: "absolute",
                    transition: "all 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
                    cursor: "pointer",
                    ...nodeStyle,
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleItem(item.id);
                  }}
                >
                  {/* Pulse Effect */}
                  <div
                    style={{
                      position: "absolute",
                      borderRadius: "50%",
                      background: "radial-gradient(circle, rgba(111,179,255,0.3) 0%, rgba(111,179,255,0) 70%)",
                      width: `${item.impact * 0.6 + 50}px`,
                      height: `${item.impact * 0.6 + 50}px`,
                      left: `-${(item.impact * 0.6 + 50 - 50) / 2}px`,
                      top: `-${(item.impact * 0.6 + 50 - 50) / 2}px`,
                      animation: isPulsing ? "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite" : "none",
                    }}
                  ></div>

                  {/* Node Circle */}
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: isExpanded
                        ? "var(--ca)"
                        : isRelated
                        ? "rgba(111,179,255,0.5)"
                        : "var(--c2)",
                      border: `2px solid ${
                        isExpanded
                          ? "var(--ca)"
                          : isRelated
                          ? "var(--ca)"
                          : "rgba(111,179,255,0.3)"
                      }`,
                      boxShadow: isExpanded
                        ? "0 0 30px rgba(111,179,255,0.6)"
                        : isRelated
                        ? "0 0 20px rgba(111,179,255,0.4)"
                        : "0 4px 15px rgba(0,0,0,0.3)",
                      transition: "all 0.3s ease",
                      transform: isExpanded ? "scale(1.3)" : "scale(1)",
                      fontSize: "1.5rem",
                    }}
                  >
                    {item.icon}
                  </div>

                  {/* Title Label */}
                  <div
                    style={{
                      position: "absolute",
                      top: "60px",
                      left: "50%",
                      transform: `translateX(-50%) ${isExpanded ? "scale(1.15)" : "scale(1)"}`,
                      whiteSpace: "nowrap",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                      color: isExpanded ? "var(--ca)" : "rgba(255,255,255,0.8)",
                      transition: "all 0.3s ease",
                    }}
                  >
                    {item.title}
                  </div>

                  {/* Expanded Card */}
                  {isExpanded && (
                    <div
                      style={{
                        position: "absolute",
                        top: "90px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "280px",
                        background: "rgba(17,17,17,0.95)",
                        backdropFilter: "blur(20px)",
                        border: "1px solid rgba(111,179,255,0.3)",
                        borderRadius: "12px",
                        padding: "1.5rem",
                        boxShadow: "0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(111,179,255,0.2)",
                        animation: "fadeInScale 0.3s ease-out forwards",
                      }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      {/* Connector Line */}
                      <div
                        style={{
                          position: "absolute",
                          top: "-15px",
                          left: "50%",
                          transform: "translateX(-50%)",
                          width: "1px",
                          height: "15px",
                          background: "rgba(111,179,255,0.5)",
                        }}
                      ></div>

                      {/* Category Badge */}
                      <div
                        style={{
                          display: "inline-block",
                          padding: "0.25rem 0.75rem",
                          background: "var(--ca)",
                          color: "var(--c0)",
                          fontSize: "0.65rem",
                          fontWeight: 700,
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          borderRadius: "4px",
                          marginBottom: "1rem",
                        }}
                      >
                        {item.category}
                      </div>

                      {/* Description */}
                      <p
                        style={{
                          color: "rgba(255,255,255,0.85)",
                          fontSize: "0.875rem",
                          lineHeight: 1.6,
                          marginBottom: "1.25rem",
                        }}
                      >
                        {item.desc}
                      </p>

                      {/* Impact Meter */}
                      <div
                        style={{
                          paddingTop: "1rem",
                          borderTop: "1px solid rgba(111,179,255,0.15)",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            fontSize: "0.7rem",
                            marginBottom: "0.5rem",
                          }}
                        >
                          <span style={{ color: "rgba(255,255,255,0.6)" }}>Impact Level</span>
                          <span
                            style={{
                              fontFamily: "monospace",
                              color: "var(--ca)",
                              fontWeight: 700,
                            }}
                          >
                            {item.impact}%
                          </span>
                        </div>
                        <div
                          style={{
                            width: "100%",
                            height: "4px",
                            background: "rgba(111,179,255,0.15)",
                            borderRadius: "2px",
                            overflow: "hidden",
                          }}
                        >
                          <div
                            style={{
                              height: "100%",
                              background: "linear-gradient(90deg, var(--cab) 0%, var(--ca) 100%)",
                              width: `${item.impact}%`,
                              transition: "width 0.5s ease",
                            }}
                          ></div>
                        </div>
                      </div>

                      {/* Related Services */}
                      {item.relatedIds.length > 0 && (
                        <div
                          style={{
                            marginTop: "1.25rem",
                            paddingTop: "1rem",
                            borderTop: "1px solid rgba(111,179,255,0.15)",
                          }}
                        >
                          <h4
                            style={{
                              fontSize: "0.7rem",
                              textTransform: "uppercase",
                              letterSpacing: "0.1em",
                              color: "rgba(255,255,255,0.6)",
                              marginBottom: "0.75rem",
                              fontWeight: 600,
                            }}
                          >
                            Related Services
                          </h4>
                          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                            {item.relatedIds.map((relatedId) => {
                              const relatedItem = servicesData.find((i) => i.id === relatedId);
                              return (
                                <button
                                  key={relatedId}
                                  style={{
                                    padding: "0.375rem 0.75rem",
                                    fontSize: "0.7rem",
                                    border: "1px solid rgba(111,179,255,0.3)",
                                    background: "transparent",
                                    color: "rgba(255,255,255,0.8)",
                                    borderRadius: "4px",
                                    cursor: "pointer",
                                    transition: "all 0.2s ease",
                                    fontWeight: 500,
                                  }}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleItem(relatedId);
                                  }}
                                  onMouseEnter={(e) => {
                                    (e.currentTarget as HTMLElement).style.background =
                                      "rgba(111,179,255,0.15)";
                                    (e.currentTarget as HTMLElement).style.color = "var(--ca)";
                                  }}
                                  onMouseLeave={(e) => {
                                    (e.currentTarget as HTMLElement).style.background = "transparent";
                                    (e.currentTarget as HTMLElement).style.color =
                                      "rgba(255,255,255,0.8)";
                                  }}
                                >
                                  {relatedItem?.title}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
