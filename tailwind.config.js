/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neutralSilver: "#F5F7FA",
        neutralDGrey: "#4D4DAD",
        brandPrimary: "#4CAF4F",
        neturalGrey: "#717171",
        grey900: "#18191F",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
