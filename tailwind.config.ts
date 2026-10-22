import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#09090b",
        foreground: "#f4f4f5",
        brand: {
          black: "#000000",
          obsidian: "#09090b",
          dark: "#121215",
          card: "#18181b",
          cardHover: "#27272a",
          border: "#27272a",
          muted: "#71717a",
          silver: "#a1a1aa",
          light: "#f4f4f5",
          white: "#ffffff",
        },
      },
      keyframes: {
        equalize: {
          "0%, 100%": { height: "4px" },
          "50%": { height: "18px" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
      },
      animation: {
        equalize1: "equalize 0.8s ease-in-out infinite",
        equalize2: "equalize 0.6s ease-in-out infinite 0.2s",
        equalize3: "equalize 0.9s ease-in-out infinite 0.4s",
        equalize4: "equalize 0.7s ease-in-out infinite 0.1s",
        pulseGlow: "pulseGlow 3s ease-in-out infinite",
        "spin-slow": "spin 12s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
