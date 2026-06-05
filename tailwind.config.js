/** @type {import('tailwindcss').Config} */
module.exports = {
  // Scan all HTML and JS files for class usage
  content: [
    './*.html',
    './pages/**/*.html',
    './js/**/*.js',
  ],
  // Disable Tailwind's preflight (CSS reset) to avoid conflict with Bootstrap's reboot
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      // Map existing design tokens to Tailwind theme
      colors: {
        'accent': '#ef9311',
        'accent-hover': '#d4820e',
        'bg-dark': '#231f20',
        'bg-secondary': '#2d2826',
        'text-muted': 'rgba(255,255,255,0.45)',
        'border-subtle': 'rgba(255,255,255,0.08)',
      },
      fontFamily: {
        'primary': ['Inter', 'sans-serif'],
        'heading': ['Montserrat', 'sans-serif'],
        'display': ['Unica One', 'sans-serif'],
      },
      spacing: {
        'xs': '0.5rem',
        'sm': '1rem',
        'md': '2rem',
        'lg': '4rem',
        'xl': '8rem',
      },
      transitionDuration: {
        'fast': '200ms',
        'normal': '400ms',
      },
    },
  },
  plugins: [],
}
