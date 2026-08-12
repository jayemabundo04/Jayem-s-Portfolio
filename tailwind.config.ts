import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#111827",
        paper: "#f8faf7",
        line: "#d9e2dc",
        moss: "#2f6f5e",
        clay: "#b65f3b"
      },
      boxShadow: {
        soft: "0 18px 60px rgba(17, 24, 39, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
