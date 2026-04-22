import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Instrument Serif", "Georgia", "serif"],
        sans: ["DM Sans", "system-ui", "sans-serif"],
      },
      colors: {
        obsidian: {
          DEFAULT: "#0a0a0a",
          50: "#f0ede8",
          100: "#c8c8c8",
          200: "#888",
          300: "#555",
          400: "#333",
          500: "#242424",
          600: "#1a1a1a",
          700: "#111111",
          800: "#0d0d0d",
          900: "#0a0a0a",
        },
        amber: {
          DEFAULT: "#c9a96e",
          light: "#e8d5b0",
          dark: "#a88040",
        },
      },
    },
  },
  plugins: [],
};
export default config;
