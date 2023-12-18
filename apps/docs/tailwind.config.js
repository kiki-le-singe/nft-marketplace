module.exports = {
  content: [
    "./stories/**/*.{js,jsx,ts,tsx}",

    // include packages if not transpiling
    "../../packages/ui/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ["dark-gray"]: "#3B3B3B",
        black: "#2B2B2B",
        gray: "#858584",
        purple: "#A259FF",
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
        sm: "425px",
      },
    },
  },
  plugins: [],
};
