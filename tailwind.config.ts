import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-section": "  url('/images/hero.png')",
      },

      fontFamily: {
        "neue-normal": ["neue-normal", "sans-serif"],
        "neue-medium": ["neue-medium", "sans-serif"],
        "clash-semi": ["clash-semi", "ui-sans-serif", "system-ui"],
      },
      colors: {
        primary: "#0D5B4B",
        secondary: "#FCB64E",
        lightgreen: "#18B99B",
      },
    },
  },
  plugins: [],
};
export default config;
