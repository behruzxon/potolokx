import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,js,jsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
      },
    },
    extend: {
      colors: {
        brand: {
          50: "#eff8ff",
          100: "#dbeefe",
          200: "#bfe2fe",
          300: "#93d0fd",
          400: "#60b5fa",
          500: "#3b95f6",
          600: "#2575eb",
          700: "#1d5ed7",
          800: "#1e4cae",
          900: "#1e4189",
          950: "#172a55",
        },
        ink: {
          50: "#f6f7f9",
          100: "#eceef2",
          200: "#d5dae2",
          300: "#b0b9c7",
          400: "#8693a6",
          500: "#67748a",
          600: "#525d71",
          700: "#434c5c",
          800: "#3a414e",
          900: "#1f242d",
          950: "#0d1117",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(15, 23, 42, 0.15)",
        glow: "0 20px 60px -20px rgba(37, 117, 235, 0.35)",
      },
      backgroundImage: {
        "grid-light":
          "linear-gradient(to right, rgba(15,23,42,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.06) 1px, transparent 1px)",
        "hero-glow":
          "radial-gradient(ellipse at top, rgba(59,149,246,0.18), transparent 60%)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
