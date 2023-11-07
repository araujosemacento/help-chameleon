/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  corePlugins: {
    preflight: false,
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      progress: {
        valid: {
          colors: ["red-light", "red-night", "green-light", "green-night"],
        },
        variants: {
          filled: {
            "red-light": {
              background: "transparent",
              color: "#330000",
            },
            "red-night": {
              background: "transparent",
              color: "#ff9999",
            },
            "green-light": {
              background: "transparent",
              color: "#003300",
            },
            "green-night": {
              background: "transparent",
              color: "#99ff99",
            },
          },
        },
      },
      keyframes: {
        wick: {
          from: {
            width: "100%",
          },
          to: {
            width: "0%",
          },
        },
      },
      colors: {
        fail: {
          50: "#FEF6F6",
          100: "#FCE4E4",
          200: "#F7C5C5",
          300: "#F09898",
          400: "#E47474",
          500: "#C41C1C",
          600: "#A51818",
          700: "#7D1212",
          800: "#430A0A",
          900: "#240505",
        },
        success: {
          50: "#F6FEF6",
          100: "#E3FBE3",
          200: "#C7F7C7",
          300: "#A1E8A1",
          400: "#51BC51",
          500: "#1F7A1F",
          600: "#136C13",
          700: "#0A470A",
          800: "#042F04",
          900: "#021D02",
        },
        warning: {
          50: "#FEFAF6",
          100: "#FDF0E1",
          200: "#FCE1C2",
          300: "#F3C896",
          400: "#EA9A3E",
          500: "#9A5B13",
          600: "#72430D",
          700: "#492B08",
          800: "#2E1B05",
          900: "#1D1002",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        domine: ["Domine", "serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
});
