import Color from 'color';

// const alpha = (color, val) => Color(color).alpha(val).rgb().string();
const lighten = (color, val) => Color(color).lighten(val).rgb().string();
const darken = (color, val) => Color(color).darken(val).rgb().string();

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['sjsans'],
        bold: ['sjsans_bold'],
        medium: ['sjsans_medium']
      },
      colors: {
        'sj-bg-primary': {
          dark: '#000',
          DEFAULT: '#fff'
        },
        'sj-bg-secondary': {
          dark: '#1e1e1e',
          DEFAULT: '#fff'
        },
        'sj-bg-tertiary': {
          dark: '#282828',
          DEFAULT: '#fff'
        },
        'sj-bg-elevated-primary': {
          dark: '#1e1e1e',
          DEFAULT: '#fff'
        },
        'sj-bg-elevated-secondary': {
          dark: '#282828',
          DEFAULT: '#fff'
        },
        'sj-bg-elevated-tertiary': {
          dark: '#333',
          DEFAULT: '#fff'
        },
        'sj-leaf': {
          hover: darken('#00AB3B', 0.1),
          'hover-dark': lighten('#009433', 0.1),
          dark: '#009433',
          DEFAULT: '#00AB3B'
        },
        'sj-grass': {
          dark: '#1BBD0F',
          DEFAULT: '#62DB5A'
        },
        'sj-dark-sky': {
          dark: '#008DAD',
          DEFAULT: '#00A2C7'
        },
        'sj-sky': {
          dark: '#15A3CB',
          DEFAULT: '#22BCE8'
        },
        'sj-moss': {
          dark: '#2B4146',
          DEFAULT: '#E8F7F6'
        },
        'sj-autumn-leaf': {
          dark: '#ED5B1C',
          DEFAULT: '#F56200'
        },
        'sj-rapeseed': {
          dark: '#FFD700',
          DEFAULT: '#FFD700'
        },
        'sj-sand': {
          dark: 'F9F4CF',
          DEFAULT: '46412B'
        },
        'sj-granite': {
          dark: '#696B57',
          DEFAULT: '#8C8C8C'
        },
        'sj-snow': {
          dark: '#F5F5EE',
          DEFAULT: '#474747'
        },
        'sj-warning': {
          dark: '#DE1F26',
          DEFAULT: '#DE1F26'
        },
        'sj-pink': {
          dark: '#FCE9E9',
          DEFAULT: '#593636'
        },
        'sj-label': {
          dark: '#fff',
          DEFAULT: '#000'
        },
        'sj-label-secondary': {
          dark: 'rgba(255,255,255,0.6)',
          DEFAULT: 'rgba(0,0,0,0.6)'
        }
      }
    }
  },
  plugins: [require('daisyui')]
};
