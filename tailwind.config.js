/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["poppins", "sans-serif"],
        poppinsbold: ["poppins-bold", "sans-serif"],
        poppinslight: ["poppins-light", "sans-serif"],
      },
    },
  },
  plugins: [],
};
