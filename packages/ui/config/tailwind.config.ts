import type { Config } from "tailwindcss";

const config: Config = {
  // Warning: for the content option, the paths are relative to the web and docs apps.
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
        "dark-gray": "#3B3B3B",
        black: "#2B2B2B",
        gray: "#858584",
        purple: "#A259FF",
        "purple-transparent": "rgba(162, 89, 255, 0.50)",
        "black-transparent": "rgba(59, 59, 59, 0.50)",
      },
      borderRadius: {
        "20px": "20px",
      },
      fontFamily: {
        sans: ["var(--font-work-sans)"],
        mono: ["var(--font-space-mono)"],
      },
      screens: {
        xxs: "320px",
        xs: "375px",
        sm: "425px",
        "4k": "2560px",
      },
      spacing: {
        "30px": "1.875rem",
      },
    },
  },
  plugins: [],
};
export default config;
