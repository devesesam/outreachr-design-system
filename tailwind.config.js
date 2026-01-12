/** @type {import('tailwindcss').Config} */
// Shared Tailwind config for all Outreachr properties
export default {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563eb', // blue-600
          hover: '#1d4ed8',   // blue-700
          light: '#eff6ff',   // blue-50
          border: '#bfdbfe',  // blue-200
        },
      },
    },
  },
};
