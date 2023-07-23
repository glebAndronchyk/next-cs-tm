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
        "orange-teammate": "#eda338",
        "yellow-teammate": "#e6f13d",
        "green-teammate": "#109856",
        "purple-teammate": "#803ca1",
        "blue-teammate": "#68a3e5",
        gray: {
          100: "#E5E5E5",
          200: "#D9D9D9",
          300: "#CBCBCB",
        },
        blue: {
          50: "#587281",
          100: "#4F556E",
          200: "#3B415C",
          300: "#3B4366",
          400: "#1E202F",
        },
        black: "#111111",
      },
      fontFamily: {
        rajdhani: ["var(--font-rajdhani)"],
      },
      backgroundImage: {
        "blue-pattern": "url('/images/blue-bg.svg')",
        "gray-pattern": "url('/images/gray-bg.svg')",
        "maps-pattern": "url(/images/maps.jpg)",
      },
      keyframes: {
        "move-card-bg": {
          to: {
            "background-position": "-600px 0",
          },
        },
      },
      spacing: {
        header: "76px",
      },
    },
  },
  plugins: [],
};
