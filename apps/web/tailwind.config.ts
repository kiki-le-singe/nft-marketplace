import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",

    // include packages if not transpiling
    "../../packages/ui/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ["dark-gray"]: "#3B3B3B",
        black: "#2B2B2B",
        gray: "#858584",
      },
      borderRadius: {
        ["20px"]: "20px",
      },
      fontFamily: {
        sans: ["var(--font-work-sans)"],
        mono: ["var(--font-space-mono)"],
      },
      screens: {
        xxs: "320px",
        xs: "375px",
      },
    },
  },
  plugins: [],
};
export default config;
