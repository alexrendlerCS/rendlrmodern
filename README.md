# Rendlr — Premium Developer & Studio Website

Built with Next.js 14, Framer Motion, and Tailwind CSS.  
Dark-mode obsidian palette · Warm amber accents · Instrument Serif headlines · DM Sans body

---

## Stack

- **Framework**: Next.js 14 (App Router)
- **Animation**: Framer Motion 11
- **Styling**: Tailwind CSS + CSS custom properties
- **Fonts**: Instrument Serif (Google Fonts) · DM Sans (Google Fonts)
- **Language**: TypeScript

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — HeroParallax, services, why section, stats, testimonials, CTA |
| `/about` | About — bio, AI engineering, certifications, skills cloud |
| `/projects` | Projects — filterable grid of 12 projects |
| `/getting-started` | Services — 6 service cards + consultation CTA |

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
npm start
```

Open [http://localhost:3000](http://localhost:3000).

---

## Project Structure

```
src/
├── app/                  # Next.js App Router pages
│   ├── layout.tsx        # Root layout (cursor, navbar, progress bar)
│   ├── page.tsx          # Home page
│   ├── about/page.tsx
│   ├── projects/page.tsx
│   └── getting-started/page.tsx
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx    # Sticky navbar with scroll state
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── HeroParallax.tsx   # 3-row scroll-linked parallax hero
│   │   ├── Marquee.tsx
│   │   ├── Services.tsx
│   │   ├── WhyRendlr.tsx
│   │   ├── HomeWidgets.tsx    # StatsBand, Testimonials, CtaSection
│   │   ├── AboutHero.tsx
│   │   ├── AiSection.tsx      # AI section + CredentialsSection
│   │   ├── ProjectsGrid.tsx   # Filterable projects grid
│   │   └── GetStartedGrid.tsx
│   └── ui/
│       ├── Cursor.tsx         # Custom spring-lag cursor
│       ├── ProgressBar.tsx    # Scroll progress indicator
│       ├── Reveal.tsx         # Framer Motion scroll reveal wrapper
│       └── SectionLabel.tsx   # Amber label with line accent
├── lib/
│   └── data.ts           # All content: projects, services, testimonials, etc.
└── styles/
    └── globals.css       # Design tokens, noise overlay, marquee keyframes
```

---

## Customization

All content lives in **`src/lib/data.ts`** — edit projects, testimonials, services, and navigation there.

Design tokens are in **`src/styles/globals.css`** as CSS variables:
- `--ca` / `--cai` — amber accent colors
- `--c0` through `--c4` — obsidian background scale
- `--cg` / `--cl` / `--cw` — text grays to cream

---

## Deploy to Vercel

```bash
npm i -g vercel
vercel
```

Or connect the GitHub repo directly in the [Vercel dashboard](https://vercel.com).

---

Built by [Alex Rendler](https://github.com/alexrendlerCS) · [rendlr.dev](https://www.rendlr.dev)
