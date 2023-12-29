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
          grey1: "#F8F9FA",
          grey2: "#E9ECEF",
          grey3: "#DEE2E6",
          grey4: "#CED4DA",
          grey5: "#ADB5BD",
          grey6: "#6C757D",
          grey7: "#495057",
          grey8: "#343A40",
          grey9: "#212529",
        },
        light: {
          primary: "#ffffff",
          secondary: "#0A0A0A",
          accent: "#616F39",
          neutral: "#A7D129",
          grey1: "#F8F9FA",
          grey2: "#E9ECEF",
          grey3: "#DEE2E6",
          grey4: "#CED4DA",
          grey5: "#ADB5BD",
          grey6: "#6C757D",
          grey7: "#495057",
          grey8: "#343A40",
          grey9: "#212529",
        },
      },
    ],
  },
};
export default config;
