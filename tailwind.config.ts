import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#faf8f5",
        foreground: "#1c1917",
        muted: "#78716c",
        primary: {
          DEFAULT: "#b45309",
          cyan: "#d97706",
        },
        accent: {
          purple: "#c2410c",
          pink: "#ea580c",
          cyan: "#f59e0b",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(ellipse at 50% 0%, rgba(180,83,9,0.10) 0%, transparent 55%), radial-gradient(ellipse at 85% 20%, rgba(245,158,11,0.08) 0%, transparent 45%), radial-gradient(ellipse at 10% 90%, rgba(194,65,12,0.06) 0%, transparent 45%)",
        "card-gradient":
          "linear-gradient(135deg, rgba(180,83,9,0.07) 0%, rgba(217,119,6,0.03) 100%)",
        "vibrant-gradient":
          "linear-gradient(135deg, #b45309 0%, #d97706 55%, #ea580c 100%)",
      },
      boxShadow: {
        glow: "0 0 35px rgba(180, 83, 9, 0.28)",
        "glow-purple": "0 0 30px rgba(217, 119, 6, 0.25)",
        "glow-lg": "0 0 45px rgba(180,83,9,0.32), 0 0 90px rgba(234,88,12,0.14)",
        glass: "0 8px 32px rgba(28, 25, 23, 0.06)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        pulseGlow: "pulseGlow 3s ease-in-out infinite",
        gradientShift: "gradientShift 6s ease infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
