/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        logo: {
          blue: '#0052CC',       // Royal Vibrant Blue from SV text
          brightBlue: '#0066FF', // Sky/Vibrant Blue
          cyan: '#00A3FF',       // Building Gradient Cyan
          darkCyan: '#0284C7',
          graphite: '#1E242B',   // Dark Graphite from INFRA text
          slate: '#334155',      // Medium Slate from DEVELOPERS text
          silver: '#64748B',     // Wave Silver
          lightBg: '#F8FAFC',
          cardBg: '#FFFFFF',
        },
        navy: {
          950: '#0F172A',
          900: '#1E293B',
          800: '#334155',
          700: '#475569',
          600: '#64748B',
          100: '#F1F5F9',
          50: '#F8FAFC',
        },
        accent: {
          cyan: '#00A3FF',
          blue: '#0052CC',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
