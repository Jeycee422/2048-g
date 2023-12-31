/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'b': '0 3px 0 0 rgba(0, 0, 0, 1)',
      },
      animation: {
        ping: 'ping 1.5s infinite'
      },
      keyframes: {
        ping: {
          '75%, 100%': {
            transform: 'scale(1.1)',
            opacity: '1'
          },
          '50%, 75%': {
            opacity: '1',
            transform: 'scale(.8)'
          }
        }
      }
    },
  },
  plugins: [],
}
