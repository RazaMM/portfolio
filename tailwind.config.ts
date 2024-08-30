import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './public/**/*.{js,ts,jsx,tsx,mdx}',
    './utils/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'w95-cyan': '#008080',
        'w95-blue': '#000080',
        'w95-grey': '#C6C6C6',
        'w95-dark-grey': '#808080',
        'degree-red': '#8E2C3B',
        'degree-beige': '#FFFDE4',
        'degree-gold': '#97845B',
      },
      cursor: {
        'w95-auto': 'url(/cursors/auto.cur), auto',
        'w95-pointer': 'url(/cursors/pointer.cur), pointer',
        'w95-text': 'url(/cursors/text.cur), text',
        'w95-move': 'url(/cursors/move.cur), move',
        'w95-ns-resize': 'url(/cursors/ns-resize.cur), ns-resize',
        'w95-ew-resize': 'url(/cursors/ew-resize.cur), ew-resize',
        'w95-nwse-resize': 'url(/cursors/nwse-resize.cur), nwse-resize',
        'w95-nesw-resize': 'url(/cursors/nesw-resize.cur), nesw-resize',
      },
      boxShadow: {
        w95: '-2px -2px #e0dede, -2px 0 #e0dede, 0 -2px #e0dede, -4px -4px white, -4px 0 white, 0 -4px white, 2px 2px #818181, 0 2px #818181, 2px 0 #818181,  2px -2px #e0dede, -2px 2px #818181, -4px 2px white, -4px 4px black, 4px 4px black, 4px 0 black, 0 4px black, 2px -4px white, 4px -4px black',
        'w95-inverted':
          '-2px -2px #818181, -2px 0 #818181, 0 -2px #818181, -4px -4px black, -4px 0 black, 0 -4px black, 2px 2px #e0dede, 0 2px #e0dede, 2px 0 #e0dede,  2px -2px #818181, -2px 2px #e0dede, -4px 2px black, -4px 4px white, 4px 4px white, 4px 0 white, 0 4px white, 2px -4px black, 4px -4px white',
        'w95-thin':
          '-1px -1px #e0dede, -1px 0 #e0dede, 0 -1px #e0dede, -1px -1px white, -1px 0 white, 0 -1px white, 1px 1px #818181, 0 1px #818181, 1px 0 #818181,  1px -1px #e0dede, -1px 1px #818181, -1px 1px white, -1px 1px black, 1px 1px black, 1px 0 black, 0 1px black, 1px -1px white, 1px -1px black',
        'w95-inverted-thin':
          '-1px -1px #818181, -1px 0 #818181, 0 -1px #818181, -2px -2px black, -2px 0 black, 0 -2px black, 1px 1px #e0dede, 0 1px #e0dede, 1px 0 #e0dede,  1px -1px #818181, -1px 1px #e0dede, -2px 1px black, -2px 2px white, 2px 2px white, 2px 0 white, 0 2px white, 1px -2px black, 2px -2px white',
        'w95-alt':
          '-3px -3px white, -3px 0 white, 0 -3px white, 3px 3px #818181, 0 3px #818181, 3px 0 #818181, -3px 3px #818181, -3px 3px white, 3px -3px white',
        'w95-alt-inverted':
          '-3px -3px #818181, -3px 0 #818181, 0 -3px #818181, 3px 3px white, 0 3px white, 3px 0 white, -3px 3px white, -3px 3px #818181, 3px -3px #818181',
        'w95-alt-thin':
          '-2px -2px white, -2px 0 white, 0 -2px white, 2px 2px #818181, 0 2px #818181, 2px 0 #818181, -2px 2px #818181, -2px 2px white, 2px -2px white',
        'w95-alt-inverted-thin':
          '-2px -2px #818181, -2px 0 #818181, 0 -2px #818181, 2px 2px white, 0 2px white, 2px 0 white, -2px 2px white, -2px 2px #818181, 2px -2px #818181',
      },
    },
  },
  plugins: [],
};
export default config;
