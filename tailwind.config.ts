import type { Config } from 'tailwindcss'

const config: Config = {
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
      cursor: {
        'w95-auto': 'url(/cursors/auto.cur), auto',
        'w95-pointer': 'url(/cursors/pointer.cur), pointer',
        'w95-text': 'url(/cursors/text.cur), text',
        'w95-move': 'url(/cursors/move.cur), move',
        'w95-ns-resize': 'url(/cursors/resize-ns.cur), ns-resize',
        'w95-ew-resize': 'url(/cursors/resize-ew.cur), ew-resize',
        'w95-nwse-resize': 'url(/cursors/resize-nwse.cur), nwse-resize',
        'w95-nesw-resize': 'url(/cursors/resize-nesw.cur), nesw-resize',
      }
    },
  },
  plugins: [],
}
export default config
