/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      morkerod: "#400D0D",
      lyseblaa: "#A3ACBF",
      morkebrun: "#593719",
      lysebrun: "#8C745E",
      grå: "#D9D9D9",
      hvid: "#FFFFFF",
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
