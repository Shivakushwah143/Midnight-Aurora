/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E8ECF1',
          100: '#D1D9E3',
          200: '#A3B3C7',
          300: '#758DAB',
          400: '#47678F',
          500: '#1A1F2B', // Deep Midnight Blue
          600: '#151925',
          700: '#10131F',
          800: '#0A0D19',
          900: '#050713',
        },
        secondary: {
          50: '#F5F1FE',
          100: '#EBE3FD',
          200: '#D7C7FB',
          300: '#C3ABF9',
          400: '#AF8FF7',
          500: '#9F7AEA', // Lavender Glow
          600: '#7F62BB',
          700: '#5F498C',
          800: '#3F315D',
          900: '#1F182E',
        },
        accent: {
          50: '#FEFCF0',
          100: '#FDF9E1',
          200: '#FBF3C3',
          300: '#F9EDA5',
          400: '#F7E787',
          500: '#F6E05E', // Golden Sunlight
          600: '#C5B34B',
          700: '#948638',
          800: '#625925',
          900: '#312D12',
        },
        background: '#FDFCFB', // Soft Off-White
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
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
};