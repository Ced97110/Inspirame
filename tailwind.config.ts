
import plugin from 'tailwindcss/plugin';
import type { Config } from "tailwindcss";
import flowbite from "flowbite-react/tailwind";
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
const svgToDataUri = require("mini-svg-data-uri");


const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    fontFamily: {
      "display": "var(--display-font)",
    },
    extend: {
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' }
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        blink: {
          '0%': { opacity: '0.2' },
          '20%': { opacity: '1' },
          '100% ': { opacity: '0.2' }
        }
      },
      animation: {
        fadeIn: 'fadeIn .3s ease-in-out',
        carousel: 'marquee 60s linear infinite',
        blink: 'blink 1.4s both infinite'
      },
      boxShadow: {
        'custom-normal': '0 10px 30px -15px rgba(2, 12, 27, 0.7)',
        'custom-hover': '0 20px 30px -15px rgba(255, 255, 255, 0.7)'
      },
      transitionProperty: {
        'height-width': 'height, width',
      },
      transitionTimingFunction: {
        'custom-ease': 'cubic-bezier(0.645, 0.045, 0.355, 1)',
      },
      colors: {
        navy: '#111D4A',
        fuch: '#820263',
        ciel: '#2F7DD2',
        jaune: '#F3CE28',
        lightnavy: '#112240',
        slate: '#8892b0',
        'custom-dark': 'rgba(0, 0, 0, 0.7)',
      },
      fontFamily: {
        nothing: ['Nothing You Could Do'],
      },
    },
  },
  plugins: [
    // @ts-ignore
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "bg-grid": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke-width="2" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
    require('flowbite/plugin')
  ],
}

export default config;
