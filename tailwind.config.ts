import type { Config } from "tailwindcss";

export default {
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
        "light_purple": "rgba(250, 250, 255, 1)",
        "l_grey": "lightgrey",
        'primary-color': 'rgba(124, 13, 255, 1)',
        "blue_col": "rgba(74, 178, 250, 1)",
        "purple_col": "rgba(124, 13, 255, 1)",
        "pink_col": "rgba(230, 10, 234, 1)",
        "background_col": "rgba(250, 250, 255, 1)", 
      },
    },
  },
  plugins: [],
} satisfies Config;
