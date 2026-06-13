import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Crimson luxury palette
        crimson: {
          50:  "#fef2f2",
          100: "#fee2e2",
          200: "#fecaca",
          300: "#fca5a5",
          400: "#f87171",
          500: "#ef4444",
          600: "#dc2626",
          700: "#b91c1c",
          800: "#991b1b",
          900: "#7f1d1d",
          950: "#450a0a",
        },
        // Surface palette
        void:    { DEFAULT: "#080808", light: "#fafafa" },
        surface: { DEFAULT: "#111111", light: "#f4f4f5" },
        elevated:{ DEFAULT: "#1a1a1a", light: "#ffffff" },
        border:  { DEFAULT: "rgba(255,255,255,0.06)", light: "rgba(0,0,0,0.08)" },
      },
      fontFamily: {
        sans:    ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono:    ["var(--font-geist-mono)", "monospace"],
      },
      backgroundImage: {
        "crimson-gradient": "linear-gradient(135deg, #dc2626 0%, #991b1b 100%)",
        "crimson-radial":   "radial-gradient(circle, rgba(220,38,38,0.15) 0%, transparent 70%)",
        "void-gradient":    "linear-gradient(180deg, #080808 0%, #0d0d0d 100%)",
      },
      boxShadow: {
        crimson:     "0 0 40px rgba(220, 38, 38, 0.20)",
        "crimson-lg":"0 0 80px rgba(220, 38, 38, 0.25)",
        glass:       "0 8px 32px rgba(0, 0, 0, 0.4), inset 0 0 0 1px rgba(255,255,255,0.06)",
        "glass-hover":"0 20px 60px rgba(0, 0, 0, 0.6), inset 0 0 0 1px rgba(220,38,38,0.2)",
        luxury:      "0 24px 80px rgba(0, 0, 0, 0.8)",
      },
      animation: {
        "fade-up":       "fadeUp 0.7s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        "fade-in":       "fadeIn 0.5s ease forwards",
        "glow-pulse":    "glowPulse 3s ease-in-out infinite",
        "float":         "float 6s ease-in-out infinite",
        "spin-slow":     "spin 20s linear infinite",
        "gradient-shift":"gradientShift 8s ease infinite",
        "slide-up":      "slideUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(220,38,38,0.2)" },
          "50%":       { boxShadow: "0 0 60px rgba(220,38,38,0.4)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":       { transform: "translateY(-12px)" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%":       { backgroundPosition: "100% 50%" },
        },
        slideUp: {
          "0%":   { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      transitionTimingFunction: {
        luxury: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      backdropBlur: {
        xs: "2px",
        "2xl": "40px",
      },
    },
  },
  plugins: [],
};

export default config;
