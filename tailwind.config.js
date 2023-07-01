/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'rgb(var(--primary) / <alpha-value>)',
          variant: 'rgb(var(--primary-variant) / <alpha-value>)',
        },
        canvas: {
          DEFAULT: 'rgb(var(--canvas-default) / <alpha-value>)',
          muted: 'rgb(var(--canvas-muted) / <alpha-value>)',
          variant: 'rgb(var(--canvas-variant) / <alpha-value>)',
        },
        fg: {
          DEFAULT: 'rgb(var(--fg-default) / <alpha-value>)',
          muted: 'rgb(var(--fg-muted) / <alpha-value>)',
        },
        on: {
          primary: 'rgb(var(--on-primary) / <alpha-value>)',
        },
      },
    },
  },
  plugins: [],
}
