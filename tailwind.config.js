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
        "gshadow": "-8px -8px 9px 3px white, 8px 10px 17px -3px gray",
        "darkGshadow": "-8px -8px 15px -16px white, 8px 10px 15px -16px gray",
        "hoverDarkGshadow": "0px 0px 11px 5px inset",
        "custom-light": "0 0 10px 0 rgba(0, 0, 0, 0.2)",
        "custom-dark": "0 7px 10px -2px gray",
        "boxShadow": " -8px -8px 20px 0px white, 8px 10px 18px -19px gray",
        "insetBoxShadow": "15px 15px 50px -29px #80808036 inset, -57px -83px 35px -17px #ffffff85 inset",
        "darkBoxShadow": "-9px -9px 25px -8px #ffffff0a, 6px 3px 16px -7px #00000069",
        "insetDarkBoxShadow": "-8px -14px 60px -69px #bdbdbd57 inset",
        "hoverInsetDarkBoxShadow": "-12px -12px 65px -35px #00000087 inset",
        "boxBackImg": "linear-gradient(119deg, #0000ff94, #ef0b33c4)"
      },
      fontSize: {
        "7xl": "5rem",
      },
      screens: {
        "3xl": "1600px",
      },
      keyframes: {
        wigglee: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      animation: {
        wigglee: 'wiggle 1s ease-in-out infinite',
      },
      plugins: [],
    }
  }
}
