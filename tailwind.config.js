/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mw: "450px",
      // => @media (min-width: 450px) { ... }
      sm: "640px",
      // => @media (min-width: 640px) { ... }
      sd: "700px",
      // => @media (min-width: 700px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }
      mm: "940px",
      // => @media (min-width: 940px) { ... }
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      boxShadow: {
        custom: "2px 10px 28px rgba(75, 0, 129, .12)",
        slide: "0 0 8px rgba(0, 0, 0, .15)",
      },
    },
  },
  plugins: [],
};
