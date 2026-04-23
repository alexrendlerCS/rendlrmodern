"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style jsx>{`
        @media (max-width: 768px) {
          .nav-links {
            display: none !important;
          }
          .mobile-menu-btn {
            display: flex !important;
          }
          .nav-container {
            padding: 0 1.25rem !important;
          }
        }
        @media (min-width: 769px) {
          .mobile-menu-btn {
            display: none !important;
          }
          .mobile-menu {
            display: none !important;
          }
        }
      `}</style>
      <nav
        className="nav-container"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: "0 2.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "68px",
          transition: "all 0.4s cubic-bezier(0.25,0.1,0.25,1)",
          background: scrolled ? "rgba(10,10,10,0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(111,179,255,0.12)"
            : "1px solid transparent",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            fontFamily: "var(--serif), Georgia, serif",
            fontSize: "1.5rem",
            color: "var(--cw)",
            textDecoration: "none",
            letterSpacing: "-0.02em",
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <img
            src="/Logo-Header.png"
            alt="Rendlr"
            style={{ width: 28, height: 28, objectFit: "contain", display: "block" }}
          />
          <span
            style={{
              display: "inline-block",
              marginLeft: "-4px",
              fontFamily: "var(--serif), Georgia, serif",
              fontSize: "1.3rem",
              color: "var(--cw)",
              letterSpacing: "-0.02em",
            }}
          >
            endlr
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="nav-links" style={{ display: "flex", alignItems: "center", gap: "2.5rem" }}>
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              active={pathname === link.href}
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            href="/getting-started"
            style={{
              background: "var(--ca)",
              color: "var(--c0)",
              padding: "0.5rem 1.25rem",
              borderRadius: "4px",
              fontSize: "0.8rem",
              fontWeight: 500,
              textDecoration: "none",
              letterSpacing: "0.04em",
              transition: "background 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--cai)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--ca)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: "none",
            flexDirection: "column",
            gap: "5px",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            padding: "8px",
          }}
        >
          <span style={{ width: "24px", height: "2px", background: "var(--cw)", transition: "all 0.3s", transform: mobileMenuOpen ? "rotate(45deg) translateY(7px)" : "none" }}></span>
          <span style={{ width: "24px", height: "2px", background: "var(--cw)", transition: "all 0.3s", opacity: mobileMenuOpen ? 0 : 1 }}></span>
          <span style={{ width: "24px", height: "2px", background: "var(--cw)", transition: "all 0.3s", transform: mobileMenuOpen ? "rotate(-45deg) translateY(-7px)" : "none" }}></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className="mobile-menu"
          style={{
            position: "fixed",
            top: "68px",
            left: 0,
            right: 0,
            background: "rgba(10,10,10,0.98)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid rgba(111,179,255,0.12)",
            padding: "1.5rem 1.25rem",
            zIndex: 99,
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: pathname === link.href ? "var(--ca)" : "var(--cw)",
                textDecoration: "none",
                fontSize: "0.9rem",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                padding: "0.5rem 0",
                borderBottom: "1px solid rgba(111,179,255,0.1)",
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/getting-started"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              background: "var(--ca)",
              color: "var(--c0)",
              padding: "0.75rem 1.5rem",
              borderRadius: "4px",
              fontSize: "0.85rem",
              fontWeight: 500,
              textDecoration: "none",
              letterSpacing: "0.04em",
              textAlign: "center",
              marginTop: "0.5rem",
            }}
          >
            Get Started
          </Link>
        </div>
      )}
    </>
  );
}

function NavLink({
  href,
  children,
  active,
}: {
  href: string;
  children: string;
  active: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        color: active ? "var(--cw)" : hovered ? "var(--cw)" : "var(--cg)",
        textDecoration: "none",
        fontSize: "0.8rem",
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        transition: "color 0.2s",
        paddingBottom: "4px",
      }}
    >
      {children}
      <span
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          height: "1px",
          background: "var(--ca)",
          width: active || hovered ? "100%" : "0",
          transition: "width 0.3s cubic-bezier(0.16,1,0.3,1)",
        }}
      />
    </Link>
  );
}
