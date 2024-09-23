import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        blob:"blob 7s infinite"
      },

      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, 30px)scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, -20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
      fontWeight: {
        thin: "100",
        hairline: "100",
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },
      colors: {
        primary: "#0E2920",
        primary_lite: "#1E342C",
        ms_white: "#FFF3E3",
        secondary: "#B88E2F",
        ms_text: "#FFCF8F",
      },
      boxShadow: {
        custom: "0px 1px 4px rgba(0, 0, 0, 0.28)",
      },
      screens: {
        xsm: "430px",
        mds: "550px",
        md: "820px",
        xmd: "840px",
        lg: "1150px",
      },
    },
  },
  plugins: [],
};
export default config;
