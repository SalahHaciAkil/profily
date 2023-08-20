/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        white_text: "rgba(231, 227, 252, 0.87)",
        black: "#212428",

        primary: {
          100: "#9155FD",
          200: "#7D3AFD",
          300: "#6A1FFD",
          400: "#5604FD",
          500: "#3D00E4",
        },
        secondary: {
          100: "#28243D",
          200: "#1E1A30",
          300: "#14121F",
          400: "#0A090F",
          500: "#000000",
        },
        yellow: {
          50: "#ffffe6",
          100: "#ffffb3",
          200: "#ffff80",
          300: "#ffff4d",
          400: "#ffff1a",
          500: "#ffff00",
          600: "#e6e600",
          700: "#cccc00",
          800: "#b3b300",
        },

        red: {
          50: "#ffe6e6",
          100: "#ffb3b3",
          200: "#ff8080",
          300: "#ff4d4d",
          400: "#ff1a1a",
          500: "#ff0000",
          600: "#e60000",
          700: "#cc0000",
          800: "#b30000",
        },
        green: {
          50: "#e6ffe6",
          100: "#b3ffb3",
          200: "#80ff80",
          300: "#4dff4d",
          400: "#1aff1a",
          500: "#00ff00",
          600: "#00e600",
          700: "#00cc00",
          800: "#00b300",
        },
      },

      fontFamily: {
        body: ["Nunito"],
      },
      borderWidth: {
        10: "10px",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        "custom-light": "0 0 10px 0 rgba(0, 0, 0, 0.2)",
        "custom-dark": "0 0 10px 0 rgba(0, 0, 0, 0.6)",
      },
      fontSize: {
        "7xl": "5rem",
      },
      screens: {
        "3xl": "1600px",
      },
    },
  },
  plugins: [],
};
