import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1c2023",
        asphalt: "#343a3f",
        signal: "#d92f32",
        mist: "#f1f2f2",
      },
      fontFamily: {
        sans: ["var(--font-plus-jakarta-sans)", "sans-serif"],
      },
      boxShadow: {
        lift: "0 18px 50px rgba(28, 32, 35, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
