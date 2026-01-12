/** @type {import('tailwindcss').Config} */
// Shared Tailwind config for all Outreachr properties
export default {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#EBF4FF',
          100: '#D6E8FF',
          200: '#ADD2FF',
          300: '#85BBFF',
          400: '#5CA5FF',
          500: '#2B7FFF',
          600: '#246BDE',
          700: '#1D58BD',
          800: '#16459C',
          900: '#0F327A',
          DEFAULT: '#2B7FFF',
          hover: '#246BDE',
          light: '#EBF4FF',
          border: '#ADD2FF',
        },
        accent: {
          50: '#FFF6E5',
          100: '#FFEDCC',
          200: '#FFDB99',
          300: '#FFC966',
          400: '#FFB733',
          500: '#FFAB2B',
          600: '#DB9225',
          700: '#B77A1F',
          800: '#936219',
          900: '#6F4913',
          DEFAULT: '#FFAB2B',
        },
        dark: '#0f172a',
      },
    },
  },
};
