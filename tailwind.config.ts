import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        smx:{ max: "425px" }, // Max width: 479px
        xs2: { max: "379px" }, // Max width: 379px
        xs: { min: "320px", max: "639px" }, // Range: 480px - 639px
        xxl4:{min:"1900px",max:"3840px"}
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary_text: "var(--primary-color)",
      },
    },
    fontFamily: {
      courier: ["Courier Prime", "serif"],
      rockwellNova: ["RockwellNova", "serif"],
      amazingSlab: ["AmazingSlab", "serif"],
    },
  },
  plugins: [],
} satisfies Config;
