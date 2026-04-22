// ─── Design Tokens ───────────────────────────────────────────────
export const tokens = {
  colors: {
    c0: "#0a0a0a",
    c1: "#111111",
    c2: "#1a1a1a",
    cg: "#777",
    cl: "#bbb",
    cw: "#f0ede8",
    ca: "#c9a96e",
    cai: "#e8d5b0",
  },
  spring: { stiffness: 300, damping: 30, bounce: 100 },
  springSmooth: { stiffness: 200, damping: 40 },
} as const;

// ─── Navigation Links ────────────────────────────────────────────
export const navLinks = [
  { label: "Home",        href: "/" },
  { label: "About",       href: "/about" },
  { label: "Projects",    href: "/projects" },
  { label: "Blog",        href: "/blog" },
];

// ─── Services ────────────────────────────────────────────────────
export const services = [
  {
    icon: "⬡",
    title: "Web Design & Development",
    desc: "Beautiful, responsive websites crafted from scratch. Fast-loading, mobile-first, built to convert visitors into customers.",
  },
  {
    icon: "◎",
    title: "SEO Optimization",
    desc: "Technical and content SEO that puts you in front of your audience. Rank higher on Google and drive consistent organic traffic.",
  },
  {
    icon: "◈",
    title: "AI Integrations",
    desc: "Cutting-edge AI features embedded into your product — chatbots, automation, personalization, and intelligent workflows.",
  },
  {
    icon: "◇",
    title: "Digital Security",
    desc: "Enterprise-grade security practices for businesses of all sizes. Protect your users, your data, and your reputation.",
  },
];

// ─── Why Choose Rendlr ───────────────────────────────────────────
export const whyItems = [
  {
    num: "01",
    title: "Lightning Fast",
    desc: "Optimized for Core Web Vitals. Sub-second load times that keep visitors engaged and boost SEO rankings.",
  },
  {
    num: "02",
    title: "Modern Stack",
    desc: "Built with Next.js, Supabase, and proven modern tools. Scalable, maintainable, and future-proof.",
  },
  {
    num: "03",
    title: "Dedicated Support",
    desc: "From launch to long-term growth. We're your technical partner, not just your developer.",
  },
  {
    num: "04",
    title: "Results Driven",
    desc: "Every decision tracks to metrics that matter — conversions, traffic, engagement, and revenue.",
  },
];

// ─── Testimonials ────────────────────────────────────────────────
export const testimonials = [
  {
    text: "The quick delivery time and amazing design exceeded my expectations. Alex went above and beyond — creating a platform that perfectly fits my practice needs.",
    author: "Kimberly Joyce",
    role: "PT Startup",
  },
  {
    text: "FitWeb Studio has made managing my business so much easier. Booking clients and selling packages is completely seamless. My clients love how easy the new system is — total game changer.",
    author: "Coach Kilday",
    role: "Fitness Trainer Brand",
  },
  {
    text: "Alex delivered better than expected and added more features than asked for, making the website exceptional. Truly exceptional work — I couldn't be happier.",
    author: "Michael Marx",
    role: "Real Estate Website",
  },
];

// ─── Stats ────────────────────────────────────────────────────────
export const stats = [
  { num: "30+", label: "Websites Launched" },
  { num: "100%", label: "Client Satisfaction" },
  { num: "24/7", label: "Support Available" },
];

// ─── Projects ────────────────────────────────────────────────────
export type ProjectCategory = "web" | "ai" | "data" | "finance";

export interface Project {
  title: string;
  desc: string;
  tags: string[];
  category: ProjectCategory[];
  link: string;
  thumbnail?: string;
}

export const projects: Project[] = [
  {
    title: "RealtyEdge — Housing Market Deals",
    desc: "B2B marketplace connecting homebuyers, agents, and lenders with automated under-market property deals using workflow automation.",
    tags: ["Next.js", "Supabase", "Workflow Automation", "Data Viz"],
    category: ["web", "data", "finance"],
    link: "https://realtyedge.vercel.app",
    thumbnail: "/realty-edge-showcase.png",
  },
  {
    title: "TrainerDev — Fitness Coach Platform",
    desc: "Custom website platform for personal trainers with booking flows, payment integrations, SEO optimization, and managed hosting.",
    tags: ["Next.js", "Stripe", "Supabase", "ShadCN UI"],
    category: ["web"],
    link: "https://trainerdev.vercel.app/",
    thumbnail: "/fitness-trainer-showcase.png",
  },
  {
    title: "Fitness Trainer Platform",
    desc: "Full-stack scheduling platform with role-based auth, contract signing, Google Calendar sync, and Stripe payments.",
    tags: ["Next.js", "PostgreSQL", "OAuth", "Stripe"],
    category: ["web"],
    link: "https://www.coachkilday.com",
    thumbnail: "/fitness_trainer_platform.png",
  },
  {
    title: "SEO Insights — AI Dashboard",
    desc: "AI-powered dashboard analyzing Google Ads performance, clustering keywords, and generating LLM optimization suggestions.",
    tags: ["Python", "NLP", "OpenAI", "Prompt Engineering"],
    category: ["ai", "data"],
    link: "https://github.com/alexrendlerCS/SEO_Insight",
    thumbnail: "/seo_insight.png",
  },
  {
    title: "AIcademy — K–12 AI Tutor",
    desc: "Interactive AI tutor guiding students through Socratic questioning. Tracks XP, progress, and quiz scores via Supabase.",
    tags: ["React", "OpenAI", "RAG", "Supabase"],
    category: ["ai"],
    link: "https://aicademy-six.vercel.app/",
    thumbnail: "/Aicademy.png",
  },
  {
    title: "Automated Stock Trading Bot",
    desc: "Algorithmic trading system predicting market moves with ML logic, finance analytics, and optional Docker deployment.",
    tags: ["Python", "ML", "Docker", "Data Viz"],
    category: ["ai", "data", "finance"],
    link: "https://github.com/alexrendlerCS",
    thumbnail: "/stock_trading_bot.png",
  },
  {
    title: "Nexus — Crypto Brokerage",
    desc: "Crypto advice platform built with an agile team. Portfolio analysis tools, role-based auth, live crypto and sentiment data.",
    tags: ["Supabase", "PostgreSQL", "Role Auth", "Agile"],
    category: ["data", "finance"],
    link: "https://nexus-brokerage.netlify.app/",
    thumbnail: "/nexus.png",
  },
  {
    title: "StatsX — Sports Analyzer",
    desc: "Sports analytics platform with data pipelines, web scraping, MySQL-based matchup analysis, and prediction logic.",
    tags: ["MySQL", "Docker", "Web Scraping", "Charts"],
    category: ["data"],
    link: "https://www.statsx.online/",
    thumbnail: "/statsx.png",
  },
  {
    title: "AI Resume Builder",
    desc: "AI-powered resume analyzer categorizing content, aligning with job descriptions, and generating context-aware edits via NLP.",
    tags: ["OpenAI", "Flask", "NLP", "Python"],
    category: ["ai"],
    link: "https://github.com/alexrendlerCS/AIResume",
    thumbnail: "/resumebuilder.png",
  },
  {
    title: "Budget Tracker",
    desc: "Finance tracker with JWT auth, category-based spending tracking, and visualized analytics via FastAPI and React.",
    tags: ["FastAPI", "JWT", "React", "Data Viz"],
    category: ["data", "finance"],
    link: "https://github.com/alexrendlerCS/BudgetTracker",
    thumbnail: "/budgettracker.png",
  },
  {
    title: "Bells & Bones Online Shop",
    desc: "Freelance e-commerce site with responsive basket store, secure checkout, and clean UX. First paid client project.",
    tags: ["E-Commerce", "Stripe", "SEO", "Responsive"],
    category: ["web"],
    link: "https://bandb-one.vercel.app/",
    thumbnail: "/bellsandbones.png",
  },
  {
    title: "CoreVybe Care Solutions",
    desc: "Custom site for a senior wellness company, improving communication of services and scheduling. Early paid contract.",
    tags: ["Client Work", "SEO", "Accessibility", "Responsive"],
    category: ["web"],
    link: "https://corevybe.com/",
    thumbnail: "/CoreVybe.jpg",
  },
];

// ─── Get Started Services ─────────────────────────────────────────
export const getStartedServices = [
  {
    icon: "⬡",
    title: "Website Design",
    desc: "Beautiful, responsive websites tailored to your brand and conversion goals. Fast, accessible, and built to last.",
  },
  {
    icon: "◎",
    title: "SEO Services",
    desc: "Improve your search rankings and drive qualified organic traffic through technical and content SEO.",
  },
  {
    icon: "◈",
    title: "SaaS & Custom Apps",
    desc: "Build scalable SaaS products or custom web apps with modern stacks — from MVP to production-ready.",
  },
  {
    icon: "◇",
    title: "Securing Data",
    desc: "Enterprise-grade security practices to protect your users and data. Audits, hardening, and monitoring.",
  },
  {
    icon: "◉",
    title: "AI Integrations",
    desc: "Add AI features that automate workflows and personalize experiences. From chatbots to full RAG pipelines.",
  },
  {
    icon: "▲",
    title: "Full Projects",
    desc: "End-to-end delivery — design, build, launch, and ongoing growth. Your full technical partner from day one.",
  },
];

// ─── Skills ───────────────────────────────────────────────────────
export const skills = [
  "React", "Next.js", "TypeScript", "JavaScript", "Python", "Java",
  "C / C++", "Svelte", "PostgreSQL", "Supabase", "MySQL", "Docker",
  "AWS", "Linux", "Git", "Jira", "Agile / Scrum", "APIs", "Stripe",
  "OAuth", "UI/UX Design", "SEO", "Data Analytics", "Accessibility",
  "Responsive Design", "E-Commerce",
];

// ─── Certifications ───────────────────────────────────────────────
export const certifications = [
  { title: "AI Engineer", org: "IBM AI Engineering Professional Certificate" },
  { title: "Data Engineer", org: "SIMS Security & SQL Developer" },
  { title: "Full-Stack Developer", org: "Founder of Rendlr — Current Focus" },
];

// ─── Hero Parallax Cards ──────────────────────────────────────────
export const parallaxCards = [
  { label: "RealtyEdge",     tag: "Web Dev",     icon: "RE", link: "https://realtyedge.vercel.app" },
  { label: "AIcademy",       tag: "AI / EdTech", icon: "AI", link: "https://aicademy-six.vercel.app/" },
  { label: "Coach Kilday",   tag: "Full Stack",  icon: "CK", link: "https://www.coachkilday.com" },
  { label: "TrainerDev",     tag: "SaaS",        icon: "TD", link: "https://trainerdev.vercel.app/" },
  { label: "SEO Insights",   tag: "AI / Data",   icon: "SI", link: "https://github.com/alexrendlerCS/SEO_Insight" },
  { label: "Nexus Crypto",   tag: "Finance",     icon: "NX", link: "https://nexus-brokerage.netlify.app/" },
  { label: "StatsX",         tag: "Analytics",   icon: "SX", link: "https://www.statsx.online/" },
  { label: "Budget Tracker", tag: "Finance",     icon: "BT", link: "https://github.com/alexrendlerCS/BudgetTracker" },
  { label: "AI Resume",      tag: "NLP",         icon: "AR", link: "https://github.com/alexrendlerCS/AIResume" },
  { label: "Bells & Bones",  tag: "E-Commerce",  icon: "BB", link: "https://bandb-one.vercel.app/" },
  { label: "CoreVybe",       tag: "Client Work", icon: "CV", link: "https://corevybe.com/" },
  { label: "Trading Bot",    tag: "ML",          icon: "TB", link: "https://github.com/alexrendlerCS" },
  { label: "Rendlr.dev",     tag: "Agency",      icon: "R·", link: "https://www.rendlr.dev" },
  { label: "Web Security",   tag: "DevSecOps",   icon: "WS", link: "/" },
  { label: "Data Pipelines", tag: "Engineering", icon: "DP", link: "/" },
];
