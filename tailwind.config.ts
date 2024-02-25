import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./containers/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        dark: {
          primary: "#0A0A0A",
          secondary: "#ffffff",
          accent: "#A7D129",
          neutral: "#616F39",
          "base-100": "#242424",
        },
        light: {
          primary: "#ffffff",
          secondary: "#0A0A0A",
          accent: "#A7D129",
          neutral: "#616F39",
          "base-100": "#d9d9d9",
        },
      },
    ],
  },
};
export default config;
