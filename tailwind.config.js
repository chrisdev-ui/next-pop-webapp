/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      keyframes: {
        shine: {
          from: { transform: 'translateX(-70px) rotate(10deg)' },
          to: { transform: 'translateX(300px) rotate(10deg)' }
        },
        'lift-moving': {
          '0%': { left: '-65px' },
          '50%': { left: '20px' },
          '60%': { left: '15px' },
          '100%': { left: '365px' }
        },
        'place-box': {
          '0%': { top: '56px' },
          '20%': { top: '0', left: '50px' },
          '50%': { top: '0', left: '50px' },
          '60%': { top: '0', left: '45px' },
          '100%': { top: '0', left: '395px' }
        }
      },
      animation: {
        'lift-moving': '4s lift-moving infinite',
        'place-box': '4s place-box infinite'
      },
      content: {
        checkmark: "url('/images/checkmark.svg')"
      },
      fontFamily: {
        roboto: ['var(--font-roboto)', 'sans-serif'],
        title: ['var(--font-title)', 'sans-serif'],
        subtitle: ['var(--font-subtitle)', 'sans-serif'],
        text: ['var(--font-text)', 'sans-serif']
      },
      colors: {
        'primary-text-color': '#222',
        'secondary-text-color': '#465b52',
        'primary-nav-color': '#e9d483',
        'primary-link-color': '#1a1a1a',
        'primary-accent-color': '#fa7484',
        'primary-accent-hover-color': 'rgba(250, 116, 132, 0.4)',
        'primary-accent-active-color': 'rgba(250, 116, 132, 0.8)',
        'primary-border-color': '#cce7d0',
        'random-fe1-color': '#fddde4',
        'random-fe2-color': '#cdebbc',
        'random-fe3-color': '#d1e8f2',
        'random-fe4-color': '#cdd4f8',
        'random-fe5-color': '#f6dbf6',
        'random-fe6-color': '#fff2e5',
        'yellow-star-color': '#ffc107',
        'brand-text-color': '#606063',
        'primary-add-cart-color': '#e8f6ea',
        'signup-bg-color': '#041e42',
        'other-text-color': '#818ea0',
        'other-highlight-text-color': '#ffbd27',
        'blog-date-color': '#c9cbce',
        'input-border-color': '#e1e1e1',
        'table-header-color': '#e2e9e1',
        'error-message-bg-color': '#ffcfcc',
        'error-message-text-color': '#f44336',
        'success-message-bg-color': '#a3ffdd',
        'success-message-text-color': '#04aa6d',
        'info-message-bg-color': '#c3d9eb',
        'info-message-text-color': '#2196f3',
        'warning-message-bg-color': '#ffe1b5',
        'warning-message-text-color': '#ff9800'
      },
      boxShadow: {
        nav: '0 5px 15px rgba(0,0,0,0.06)',
        'fe-box': '20px 20px 34px rgba(0,0,0,0.03)',
        'fe-box-hover': '10px 10px 54px rgba(70,62,221,0.1)',
        'product-card': '20px 20px 30px rgba(0,0,0,0.02)',
        'product-card-hover': '20px 20px 30px rgba(0,0,0,0.06)',
        chip: 'inset 1px 1px 0px rgba(#B39256, 0.5)'
      },
      height: {
        '90vh': '90vh'
      },
      width: {
        45: '180px',
        'product-card': '23%'
      },
      minWidth: {
        250: '250px'
      },
      backgroundImage: {
        night:
          'linear-gradient(to bottom, #292256 0%, #8446cf 70%, #a871d6 100%)',
        'night-after':
          'radial-gradient(ellipse at center, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 40%, rgba(15, 10, 38, 0.2) 100%)'
      }
    }
  },
  plugins: []
}
