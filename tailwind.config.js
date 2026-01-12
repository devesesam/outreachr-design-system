/** @type {import('tailwindcss').Config} */
// Shared Tailwind config for all Outreachr properties
export default {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2B7FFF',  // Outreachr brand blue
          hover: '#1E6DE6',     // Darker blue for hover states
          light: '#EBF4FF',     // Light blue backgrounds
          border: '#A0CDFF',    // Light blue borders
        },
        dark: '#3B4F6B',        // Dark blue from logo
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
};
