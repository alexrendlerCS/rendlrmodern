"use client";

import {
  useCallback,
  useEffect,
  useState,
  type MouseEvent,
} from "react";
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  type MotionStyle,
  type MotionValue,
  type Variants,
} from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";

// --- Types ---
type WrapperStyle = MotionStyle & {
  "--x": MotionValue<string>;
  "--y": MotionValue<string>;
};

interface Step {
  id: string;
  name: string;
  title: string;
  description: string;
  image?: string;
  image2?: string;
}

// --- Constants ---
const TOTAL_STEPS = 4;

const steps: readonly Step[] = [
  {
    id: "1",
    name: "Step 1",
    title: "Lightning Fast",
    description: "Optimized for Core Web Vitals. Sub-second load times that keep visitors engaged and boost SEO rankings.",
    image: "/lightningfast.png",
  },
  {
    id: "2",
    name: "Step 2",
    title: "Modern Stack",
    description: "Built with Next.js, Supabase, and proven modern tools. Scalable, maintainable, and future-proof.",
    image: "/moderntech.png",
  },
  {
    id: "3",
    name: "Step 3",
    title: "Dedicated Support",
    description: "From launch to long-term growth. We're your technical partner, not just your developer.",
    image: "/techsupport.png",
    image2: "/techsupport2.png",
  },
  {
    id: "4",
    name: "Step 4",
    title: "Results Driven",
    description: "Every decision tracks to metrics that matter — conversions, traffic, engagement, and revenue.",
    image: "/resultsdriven2.png",
    image2: "/resultsdriven.png",
  },
];

const ANIMATION_PRESETS = {
  fadeInScale: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
    transition: { type: "spring", stiffness: 300, damping: 25, mass: 0.5 },
  },
} as const;

// --- Hooks ---
function useNumberCycler(totalSteps: number = TOTAL_STEPS, interval: number = 5000) {
  const [currentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setCurrentNumber((prev) => (prev + 1) % totalSteps);
    }, interval);

    return () => clearTimeout(timerId);
  }, [currentNumber, totalSteps, interval]);

  const setStep = useCallback(
    (stepIndex: number) => {
      setCurrentNumber(stepIndex % totalSteps);
    },
    [totalSteps]
  );

  return { currentNumber, setStep };
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };
    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);
  return isMobile;
}

// --- Components ---
function IconCheck({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={className}
      style={{ width: "1rem", height: "1rem" }}
      {...props}
    >
      <path d="m229.66 77.66-128 128a8 8 0 0 1-11.32 0l-56-56a8 8 0 0 1 11.32-11.32L96 188.69 218.34 66.34a8 8 0 0 1 11.32 11.32Z" />
    </svg>
  );
}

const stepVariants: Variants = {
  inactive: { scale: 0.95, opacity: 0.7 },
  active: { scale: 1, opacity: 1 },
};

function FeatureCard({ children, step }: { children: React.ReactNode; step: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const isMobile = useIsMobile();

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    if (isMobile) return;
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      style={
        {
          "--x": useMotionTemplate`${mouseX}px`,
          "--y": useMotionTemplate`${mouseY}px`,
          position: "relative",
          width: "100%",
          borderRadius: "1.5rem",
        } as WrapperStyle
      }
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          overflow: "hidden",
          borderRadius: "1.5rem",
          border: "1px solid rgba(111,179,255,0.1)",
          background: "var(--c1)",
          transition: "border-color 0.3s",
        }}
      >
        <div style={{ margin: "2.5rem", minHeight: "450px", width: "100%", position: "relative" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              style={{ display: "flex", flexDirection: "column", gap: "1rem", width: "100%", maxWidth: "60%" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "var(--ca)",
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                {steps[step].name}
              </motion.div>
              <motion.h2
                style={{
                  fontFamily: "var(--serif), Georgia, serif",
                  fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  color: "var(--cw)",
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                {steps[step].title}
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "var(--cg)" }}>
                  {steps[step].description}
                </p>
              </motion.div>
            </motion.div>
          </AnimatePresence>
          {children}
        </div>
      </div>
    </motion.div>
  );
}

function StepsNav({
  steps: stepItems,
  current,
  onChange,
}: {
  steps: readonly Step[];
  current: number;
  onChange: (index: number) => void;
}) {
  return (
    <nav aria-label="Progress" style={{ display: "flex", justifyContent: "center", padding: "0 1rem" }}>
      <ol
        style={{
          display: "flex",
          width: "100%",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.5rem",
          listStyle: "none",
          padding: 0,
          margin: 0,
        }}
        role="list"
      >
        {stepItems.map((step, stepIdx) => {
          const isCompleted = current > stepIdx;
          const isCurrent = current === stepIdx;
          return (
            <motion.li
              key={step.name}
              initial="inactive"
              animate={isCurrent ? "active" : "inactive"}
              variants={stepVariants}
              transition={{ duration: 0.3 }}
              style={{ position: "relative" }}
            >
              <button
                type="button"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.625rem",
                  borderRadius: "9999px",
                  padding: "0.375rem 0.875rem",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  transition: "all 0.3s",
                  border: "none",
                  cursor: "pointer",
                  background: isCurrent
                    ? "var(--ca)"
                    : "rgba(111,179,255,0.1)",
                  color: isCurrent ? "var(--c0)" : "var(--cg)",
                }}
                onClick={() => onChange(stepIdx)}
              >
                <span
                  style={{
                    display: "flex",
                    height: "1.25rem",
                    width: "1.25rem",
                    flexShrink: 0,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "9999px",
                    transition: "all 0.3s",
                    background: isCompleted
                      ? "var(--ca)"
                      : isCurrent
                      ? "rgba(111,179,255,0.3)"
                      : "rgba(111,179,255,0.1)",
                    color: isCompleted || isCurrent ? "var(--c0)" : "var(--cg)",
                    fontSize: "0.75rem",
                  }}
                >
                  {isCompleted ? <IconCheck /> : <span>{stepIdx + 1}</span>}
                </span>
                <span style={{ display: window.innerWidth < 640 ? "none" : "inline-block" }}>
                  {step.name}
                </span>
              </button>
            </motion.li>
          );
        })}
      </ol>
    </nav>
  );
}

export function WhyRendlr() {
  const { currentNumber: step, setStep } = useNumberCycler();

  const renderStepContent = () => {
    if (!steps[step].image) return null;
    
    const hasTwoImages = !!steps[step].image2;
    
    return (
      <div style={{ position: "relative", width: "100%", height: "100%" }}>
        {/* First image */}
        <motion.img
          src={steps[step].image}
          alt={steps[step].title}
          style={{
            position: "absolute",
            width: "50%",
            right: hasTwoImages ? "5%" : "15%",
            top: hasTwoImages ? "50%" : "40%",
            borderRadius: "0.75rem",
            border: "1px solid rgba(111,179,255,0.15)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
            userSelect: "none",
            maxHeight: "380px",
            objectFit: "cover",
            zIndex: 1,
          }}
          {...ANIMATION_PRESETS.fadeInScale}
        />
        
        {/* Second image (if exists) */}
        {steps[step].image2 && (
          <motion.img
            src={steps[step].image2}
            alt={`${steps[step].title} 2`}
            style={{
              position: "absolute",
              width: "50%",
              right: "40%",
              top: "35%",
              borderRadius: "0.75rem",
              border: "1px solid rgba(111,179,255,0.15)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
              userSelect: "none",
              maxHeight: "380px",
              objectFit: "cover",
              zIndex: 2,
            }}
            {...ANIMATION_PRESETS.fadeInScale}
            transition={{ ...ANIMATION_PRESETS.fadeInScale.transition, delay: 0.1 }}
          />
        )}
      </div>
    );
  };

  return (
    <section style={{ padding: "4rem 2.5rem" }}>
      <div style={{ marginBottom: "3rem" }}>
        <SectionLabel>Why Rendlr</SectionLabel>
        <h2
          style={{
            fontFamily: "var(--serif), Georgia, serif",
            fontSize: "clamp(2rem, 4vw, 3.2rem)",
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            marginTop: "1.5rem",
            fontWeight: 400,
          }}
        >
          Technical expertise meets
          <br />
          <em style={{ fontStyle: "italic", color: "var(--ca)" }}>business strategy</em>
        </h2>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "3rem", width: "100%", maxWidth: "64rem", margin: "0 auto" }}>
        <FeatureCard step={step}>
          <AnimatePresence mode="wait">
            <motion.div key={step} {...ANIMATION_PRESETS.fadeInScale} style={{ width: "100%", height: "100%", position: "absolute", top: 0, left: 0 }}>
              {renderStepContent()}
            </motion.div>
          </AnimatePresence>
        </FeatureCard>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <StepsNav current={step} onChange={setStep} steps={steps} />
        </motion.div>
      </div>
    </section>
  );
}
