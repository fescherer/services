import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

const config: Config = {
  content: ['./src/**/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors: {
      primary: {
        // Background 1 color
        DEFAULT: '#F1F1F1',
        border: '#ffffff55',
        label: {
          primary: '#313235',
          secondary: '#313235',
          active: '#313235',
        },
      },
      secondary: {
        // Background 2 color
        DEFAULT: '#25A8A8',
        border: '#ffffff55',
        label: {
          primary: '#F1F1F1',
          secondary: '#F1F1F1',
          active: '#F1F1F1',
        },
      },
      accent: {
        // Brand color
        DEFAULT: '#008585',
        active: '#008585',
        label: {
          primary: '#0f0f0f',
          active: '#ff0000',
        },
      },
      feedback: {
        info: {
          DEFAULT: '',
          active: '',
        },
        sucess: {
          DEFAULT: '',
          active: '',
        },
        error: {
          DEFAULT: '#ff0000',
          active: '',
        },
        warning: {
          DEFAULT: '',
          active: '',
        },
      },
      transparent: 'transparent',
      shadow: '#050315',
    },
    keyframes: {
      slideDown: {
        from: { height: '0px' },
        to: { height: 'var(--radix-accordion-content-height)' },
      },
      slideUp: {
        from: { height: 'var(--radix-accordion-content-height)' },
        to: { height: '0px' },
      },
    },
    animation: {
      slideDown: 'slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)',
      slideUp: 'slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)',
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        '.styled-scrollbars': {
          'scrollbar-color': 'red',
          'scrollbar-width': 'thin',

          '&::-webkit-scrollbar': {
            width: '4px',
            height: '4px',
          },
          '&::-webkit-scrollbar-track': {
            background: 'transparent',
          },
          '@media (hover:hover)': {
            '&': {
              scrollbarColor: '#47484baa transparent',
              scrollbarWidth: 'thin',
              transition: 'cubic-bezier(0.165, 0.84, 0.44, 1) 500ms all',
            },
            '&:hover': {
              scrollbarColor: '#47484b transparent',
            },
            '&::-webkit-scrollbar-thumb': {
              'background': '#47484b',
              '-ms-overflow-style': 'none',
              'scrollbarWidth': 'thin',
            },
          },
        },
        '.mui-icon-filled': {
          fontFamily: 'Material Icons',
          fontWeight: 'normal',
          fontStyle: 'normal',
          fontSize: '24px', /* Preferred icon size */
          display: 'inline-block',
          lineHeight: '1',
          textTransform: 'none',
          letterSpacing: 'normal',
          wordWrap: 'normal',
          whiteSpace: 'nowrap',
          direction: 'ltr',

          /* Support for all WebKit browsers. */
          WebkitFontSmoothing: 'antialiased',
          /* Support for Safari and Chrome. */
          textRendering: 'optimizeLegibility',

          /* Support for Firefox. */
          MozOsxFontSmoothing: 'grayscale',

          /* Support for IE. */
          fontFeatureSettings: 'liga',

        },
      })
    }),
  ],
}
export default config
