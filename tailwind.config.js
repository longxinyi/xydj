/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      width: {
        400: "400px",
      },
    },
    screens: {
      mobileSm: { max: "320px" },
      mobile: { max: "480px" },
      tablet: { max: "768px" },
      laptopSm: { max: "1170px" },
    },
  },
  plugins: [],
};
