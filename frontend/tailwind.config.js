/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        heading: "rgb(24 24 29)",
        primary_light: "#A9E1FF",
        primary_dark: "#00668C",
        text: "#004660",
        white: "#fff",
        black: "#212529",
        gray: "#D9D9D9",
        helper: "#8490ff",
        bg: "#F2FAFF",
        footer_bg: "#0a1435",
        btn: "rgb(98 84 243)",
        border: "rgba(98, 84, 243, 0.5)",
        hr: "#ffffff",
        gradient: "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
        shadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
        shadowSupport: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
      },
      fontFamily: {
        habibi: ['"Habibi"', 'serif'],
        inter: ['"Inter"', 'serif'],
      },
      screens: {
        'mobile': '768px',
        'tab': '998px',
      },
    },
  },
  plugins: [],
};
