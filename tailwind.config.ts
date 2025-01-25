import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        paragraph: "var(--paragraph)",
        background: "var(--background)",
      },
      fontFamily: {
        raleway: ["var(--font-raleway)", "sans-serif"],
        montserrat: ["var(--font-montserrat)", "sans-serif"],
        jost: ["var(--font-jost)", "sans-serif"],
        satisfy: ["var(--font-satisfy)", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
