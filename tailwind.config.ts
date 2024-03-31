import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      brown: {
        100: '#F4EDE4',
        200: '#E9DBC9',
        300: '#DECAAF',
        400: '#D3B994',
        500: '#C8A97A',
        600: '#BD9960',
        700: '#B28946',
        800: '#A7792C',
        900: '#9C6912',
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
