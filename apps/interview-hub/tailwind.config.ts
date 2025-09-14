import type { Config } from 'tailwindcss';

export default {
  content: [
    './apps/**/*.{html,ts}',
    './libs/**/*.{html,ts}',
  ],
  theme: {
    extend: {
      keyframes: {
        fade: {
          '0%':   { opacity: '0', transform: 'translateY(6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '.6' },
        },
        shimmer: {
          '0%':   { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        fade: 'fade .45s ease both',
        pulseSoft: 'pulseSoft 2s ease-in-out infinite',
        shimmer: 'shimmer 1.2s infinite linear',
      }
    }
  },
  plugins: [],
} satisfies Config;
