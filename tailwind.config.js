/** @type {import('tailwindcss').Config} */
// Elegimos Tailwind CSS sobre Bootstrap porque:
// - Es más moderno y flexible (utility-first approach)
// - Permite diseño más rápido y mantenible
// - Mejor integración con React y componentes
// - Más ligero y personalizable
// - Mejor para responsive design con breakpoints claros
// 
// Paleta de colores: Indigo/Purple
// Elegida por ser moderna, profesional y versátil
// Funciona excelente tanto en light como dark mode
export default {
  darkMode: 'class', // Habilita dark mode con clase
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Nueva paleta de colores: Indigo/Purple
      // Moderna, profesional y versátil para portfolios
      colors: {
        primary: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
        },
      },
      // Animaciones personalizadas
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

