/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-orange": "#E38617",
        "secondary-orange": "#D56811",
        gray: {
          100: "#E5E5E5",
          200: "#D9D9D9",
          300: "#CBCBCB",
        },
        blue: {
          100: "#4F556E",
          200: "#3B415C",
          300: "#3B4366",
        },
        black: "#111111",
      },
    },
  },
  plugins: [],
};
