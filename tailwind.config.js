/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");

const spacingRange = 200;
const spacing = {};
Array.from({ length: spacingRange * 2 }).map((item, index) => {
  const key = index * 0.5;
  spacing[key] = `${key * 0.25}rem`;
});

module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    spacing: { ...spacing },
    extend: {
      zIndex: {
        max: 999999,
      },
      backgroundImage: {
        "wooden-table": "url('/public/doctormedical/wooden_table.jpg')"
      },
      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0 2px 4px var(--tw-shadow-color)",
        lg: "0 8px 16px var(--tw-shadow-color)",
      },
      boxShadow: {
        input: "0 0 0 1px rgba(0, 0, 0, 0.3)",
      },
      transitionProperty: {
        "max-height": "max-height",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0%" },
          "100%": { opacity: "100%" },
        },
      },
      spacing: {
        960: "240rem",
      },
      colors: {
        primary: {
          ...colors.blue,
          DEFAULT: "#1975DC",
        },
        secondary: {
          ...colors.gray,
          DEFAULT: "#525D6A",
        },
        warning: {
          ...colors.yellow,
          DEFAULT: colors.yellow["500"],
        },
        danger: {
          ...colors.red,
          DEFAULT: colors.red["600"],
        },
        success: {
          ...colors.green,
          DEFAULT: "#279656",
        },
        info: {
          ...colors.cyan,
          DEFAULT: colors.cyan["700"],
        },
        primary_theme: {
          DEFAULT: "#182537",
          hv: "#243041",
          tx: "white",
        },
        homepage: {
          ...colors.emerald,
        },
      },
      
    },
    
  },
  plugins: [
    require("@tailwindcss/typography"),
    plugin(function ({ matchUtilities, theme, addUtilities }) {
      matchUtilities(
        {
          "min-max-w": (value) => ({
            "min-width": value,
            "max-width": value,
          }),
          "column-w": (value) => ({
            flex: "none !important",
            width: value,
          }),
        },
        { values: theme("spacing") },
      );
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") },
      );
      addUtilities({
        ".flex-center": {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
        ".border-debug *": {
          border: "1px dashed red",
        },
      });
    }),
  ],
};
