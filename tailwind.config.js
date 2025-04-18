module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          background: '#121212',
          card: '#1e1e1e',
          text: '#ffffff',
          textSecondary: '#b0b0b0',
          accent: '#4f46e5',
          accentHover: '#3730a3',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-in-up': 'fadeInUp 0.5s ease-out',
        'bounce-slow': 'bounce 2s infinite',
        'zoom-in': 'zoomIn 0.3s ease-in-out',
        'stagger-in': 'staggerIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        zoomIn: {
          '0%': { transform: 'scale(0.95)', opacity: 0 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
        staggerIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        }
      },
      // Add these new utilities
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'), // For more advanced animations
    require('@tailwindcss/line-clamp'), // For text truncation
  ],
};