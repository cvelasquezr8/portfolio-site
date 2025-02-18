/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        pink: {
          400: '#EC4899',
          500: '#E91E63',
          600: '#DB2777',
          700: '#BE185D',
          950: '#500724',
        },
        violet: {
          400: '#8B5CF6',
          500: '#7C3AED',
          950: '#2E1065',
        }
      }
    },
  },
  plugins: [],
}