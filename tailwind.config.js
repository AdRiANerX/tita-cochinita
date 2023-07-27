/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white: "#fff",
      "tita-aqua": "#a3e3e4",
      "tita-blue": "#5aa4d7",
      "tita-orange": "#ec7a00",
      "tita-yellow": "#FFC803",
      "tita-red": "#ff0000",
      "tita-dark": "#1C1C19",
    },
    fontFamily: {
      breeSerif: ["Bree Serif", "sans-serif"],
      lobster: ["Lobster", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
