/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,svelte,js,ts}"],
  daisyui: {
    themes: [
      {
        mainstreet: {
          primary: "#eab308",

          secondary: "#854d0e",

          accent: "#fcd34d",

          neutral: "#6b7280",

          "base-100": "#101010",

          info: "#fef9c3",

          success: "#00ff00",

          warning: "#00ff00",

          error: "#ff0000",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
