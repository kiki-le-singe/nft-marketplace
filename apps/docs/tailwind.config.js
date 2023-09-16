module.exports = {
  content: [
    "./stories/**/*.{js,jsx,ts,tsx}",

    // include packages if not transpiling
    "../../packages/ui/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
