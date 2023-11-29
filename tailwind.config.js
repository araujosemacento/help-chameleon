/** @type {import("tailwindcss").Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  darkMode: ["class"],
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
          50: "var(--fail-50)",
          100: "var(--fail-100)",
          200: "var(--fail-200)",
          300: "var(--fail-300)",
          400: "var(--fail-400)",
          500: "var(--fail-500)",
          600: "var(--fail-600)",
          700: "var(--fail-700)",
          800: "var(--fail-800)",
          900: "var(--fail-900)",
        },
        success: {
          50: "var(--success-50)",
          100: "var(--success-100)",
          200: "var(--success-200)",
          300: "var(--success-300)",
          400: "var(--success-400)",
          500: "var(--success-500)",
          600: "var(--success-600)",
          700: "var(--success-700)",
          800: "var(--success-800)",
          900: "var(--success-900)",
        },
        warning: {
          50: "var(--warning-50)",
          100: "var(--warning-100)",
          200: "var(--warning-200)",
          300: "var(--warning-300)",
          400: "var(--warning-400)",
          500: "var(--warning-500)",
          600: "var(--warning-600)",
          700: "var(--warning-700)",
          800: "var(--warning-800)",
          900: "var(--warning-900)",
        },
        text: {
          50: "color(var(--text-50) / <alpha-value>)",
          100: "color(var(--text-100) / <alpha-value>)",
          200: "color(var(--text-200) / <alpha-value>)",
          300: "color(var(--text-300) / <alpha-value>)",
          400: "color(var(--text-400) / <alpha-value>)",
          500: "color(var(--text-500) / <alpha-value>)",
          600: "color(var(--text-600) / <alpha-value>)",
          700: "color(var(--text-700) / <alpha-value>)",
          800: "color(var(--text-800) / <alpha-value>)",
          900: "color(var(--text-900) / <alpha-value>)",
          950: "color(var(--text-950) / <alpha-value>)",
        },
        background: {
          50: "color(var(--background-50) / <alpha-value>)",
          100: "color(var(--background-100) / <alpha-value>)",
          200: "color(var(--background-200) / <alpha-value>)",
          300: "color(var(--background-300) / <alpha-value>)",
          400: "color(var(--background-400) / <alpha-value>)",
          500: "color(var(--background-500) / <alpha-value>)",
          600: "color(var(--background-600) / <alpha-value>)",
          700: "color(var(--background-700) / <alpha-value>)",
          800: "color(var(--background-800) / <alpha-value>)",
          900: "color(var(--background-900) / <alpha-value>)",
          950: "color(var(--background-950) / <alpha-value>)",
        },
        primary: {
          50: "color(var(--primary-50) / <alpha-value>)",
          100: "color(var(--primary-100) / <alpha-value>)",
          200: "color(var(--primary-200) / <alpha-value>)",
          300: "color(var(--primary-300) / <alpha-value>)",
          400: "color(var(--primary-400) / <alpha-value>)",
          500: "color(var(--primary-500) / <alpha-value>)",
          600: "color(var(--primary-600) / <alpha-value>)",
          700: "color(var(--primary-700) / <alpha-value>)",
          800: "color(var(--primary-800) / <alpha-value>)",
          900: "color(var(--primary-900) / <alpha-value>)",
          950: "color(var(--primary-950) / <alpha-value>)",
        },
        secondary: {
          50: "color(var(--secondary-50) / <alpha-value>)",
          100: "color(var(--secondary-100) / <alpha-value>)",
          200: "color(var(--secondary-200) / <alpha-value>)",
          300: "color(var(--secondary-300) / <alpha-value>)",
          400: "color(var(--secondary-400) / <alpha-value>)",
          500: "color(var(--secondary-500) / <alpha-value>)",
          600: "color(var(--secondary-600) / <alpha-value>)",
          700: "color(var(--secondary-700) / <alpha-value>)",
          800: "color(var(--secondary-800) / <alpha-value>)",
          900: "color(var(--secondary-900) / <alpha-value>)",
          950: "color(var(--secondary-950) / <alpha-value>)",
        },
        accent: {
          50: "color(var(--accent-50) / <alpha-value>)",
          100: "color(var(--accent-100) / <alpha-value>)",
          200: "color(var(--accent-200) / <alpha-value>)",
          300: "color(var(--accent-300) / <alpha-value>)",
          400: "color(var(--accent-400) / <alpha-value>)",
          500: "color(var(--accent-500) / <alpha-value>)",
          600: "color(var(--accent-600) / <alpha-value>)",
          700: "color(var(--accent-700) / <alpha-value>)",
          800: "color(var(--accent-800) / <alpha-value>)",
          900: "color(var(--accent-900) / <alpha-value>)",
          950: "color(var(--accent-950) / <alpha-value>)",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        bitter: ["Bitter", "serif"],
        sono: ["Sono", "monospace"],
      },
    },
  },
  plugins: [],
});
