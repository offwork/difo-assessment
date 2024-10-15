import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        transparent: "transparent",
        current: "currentColor",
        white: colors.white,
        black: colors.black,
        gray: colors.gray,
        "difo-aqua": "#86fffd",
        "difo-blue": "#85abf4",
        "difo-azure": "#4480f5",
        "difo-deep-blue": "#1a0173",
        "difo-hawks-blue": "#dce8ff",
        "difo-punch": "#dd1c1a",
        "difo-sunglow": "#ffca3a",
        "difo-vulcan": "#1a1b25",
        "difo-gray-chateau": "#a4acb9",
        "difo-purple-heart": "#5c37dd",
        "difo-tuna": "#36394a",
        "difo-charade": "#272835",
        "difo-lochinvar": "#08918F",
      },
      container: {
        center: true,
        padding: {
          xs: "1rem",
          sm: "2.5rem",
          md: "3.75rem",
          lg: "3rem",
          xl: "3rem",
          "2xl": "2rem",
          "3xl": "7.5rem",
          "4xl": "6.24rem",
          "5xl": "12.5rem",
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        serif: ['var(--font-karla)'],
      },
      screens : {
        xs: "320px",
        sm: "430px",
        md: "786px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1440px",
        "3xl": "1600px",
        "4xl": "1920px",
        "5xl": "2560px",
      },
    },
  },
  plugins: [],
};
export default config;
