/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          50:  "#e6f2ef",
          100: "#c0ded6",
          200: "#96c8bb",
          300: "#6cb29f",
          400: "#4a9f89",
          500: "#2c8c73",
          600: "#1e6f5c",
          700: "#155c4b",
          800: "#0f4c3a",
          900: "#0a352a",
          950: "#062018",
        },
        olive: {
          50:  "#f7f6e9",
          100: "#ece9c8",
          200: "#dfd99e",
          300: "#cdc474",
          400: "#bdb158",
          500: "#a59c44",
          600: "#847d36",
          700: "#65602a",
          800: "#4a4720",
          900: "#322f15",
        },
        cream: {
          50:  "#fffdf8",
          100: "#fdf9ee",
          200: "#f8f0d8",
          300: "#f0e4bc",
          400: "#e3d294",
        },
        amber: {
          400: "#f5b942",
          500: "#e8a020",
          600: "#c5840f",
        },
      },
      fontFamily: {
        display: ["'Caveat'", "'Brush Script MT'", "cursive"],
        heading: ["'Poppins'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 25px rgba(245, 185, 66, 0.35)",
        card: "0 10px 30px -10px rgba(15, 76, 58, 0.25)",
      },
      backgroundImage: {
        "teal-gradient": "linear-gradient(135deg, #0f4c3a 0%, #0a352a 100%)",
      },
    },
  },
  plugins: [],
}