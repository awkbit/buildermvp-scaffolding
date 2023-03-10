const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {},
    },
  },
  plugins: [
    plugin.withOptions(
      () => {},
      options => {
        try {
          const { themes, current } = options.getThemes();

          return {
            theme: {
              extend: themes && themes[current] ? themes[current] : {},
            },
          };
        } catch (e) {
          return {};
        }
      }
    )({ getThemes: () => require("./tailwind.themes.json") }),
  ],
};