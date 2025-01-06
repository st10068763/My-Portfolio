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
        'fade-in': 'fadeIn 2s ease-in-out',
        'bounce-slow': 'bounce 2s infinite',
        'zoom-in': 'zoomIn 1s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        zoomIn: {
          '0%': { transform: 'scale(0.9)', opacity: 0 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
