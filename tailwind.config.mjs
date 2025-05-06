/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          400: '#9ca3af',
          600: '#4b5563',
          800: '#1f2937',
          900: '#111827',
        },
        blue: {
          100: '#dbeafe',
          600: '#2563eb',
          800: '#1e40af',
        },
      },
    },
  },
  plugins: [],
} 