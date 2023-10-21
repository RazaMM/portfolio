import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      cursor: {
        'w95-auto': 'url(/cursors/auto.cur), auto',
        'w95-pointer': 'url(/cursors/pointer.cur), pointer',
        'w95-text': 'url(/cursors/text.cur), text',
        'w95-move': 'url(/cursors/move.cur), move',
        'w95-ns-resize': 'url(/cursors/ns-resize.cur), ns-resize',
        'w95-ew-resize': 'url(/cursors/ew-resize.cur), ew-resize',
        'w95-nwse-resize': 'url(/cursors/nwse-resize.cur), nwse-resize',
        'w95-nesw-resize': 'url(/cursors/nesw-resize.cur), nesw-resize',
      }
    },
  },
  plugins: [],
}
export default config
