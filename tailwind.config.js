/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Nuestra paleta personalizada (Zinc)
        background: '#09090B',
        surface: '#18181B',
        border: '#27272A',
        
        // Colores de Acción (Indigo)
        primary: {
          DEFAULT: '#6366F1', // Indigo 500
          hover: '#4F46E5',   // Indigo 600
        },
        
        // Textos
        text: {
          main: '#FAFAFA',    // Zinc 50
          muted: '#A1A1AA',   // Zinc 400
        },

        // Semánticos
        success: '#10B981',   // Emerald 500
        danger: '#EF4444',    // Red 500
        warning: '#F59E0B',   // Amber 500
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}