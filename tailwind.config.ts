import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Core palette — "Our Date"
        blush: "#E8B4C0",      // primary accent, warm dusty rose
        blushDeep: "#C97B94",  // pressed / active state
        plum: "#3B1F3A",       // deep plum, near-black text/bg
        cream: "#FFF8F3",      // warm off-white background
        gold: "#D9A94C",       // small accent (favorite star, highlights)
        sage: "#8FA888",       // secondary accent, calm/confirm
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      borderRadius: {
        card: "1.75rem",
      },
      keyframes: {
        floatUp: {
          "0%": { transform: "translateY(0px)", opacity: "0.5" },
          "50%": { opacity: "0.9" },
          "100%": { transform: "translateY(-40px)", opacity: "0" },
        },
        popIn: {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      animation: {
        floatUp: "floatUp 4s ease-in-out infinite",
        popIn: "popIn 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
