/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        jabra: {
          yellow: "#FFD100",
          yellowHover: "#E6BC00",
          black: "#111111",
          card: "#18181B",
          dark: "#0C0C0E",
          gray: "#27272A",
          lightGray: "#F4F4F6",
          textMuted: "#A1A1AA",
        },
      },
    },
  },
  plugins: [],
};
