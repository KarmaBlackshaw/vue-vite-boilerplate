import plugin from 'tailwindcss/plugin'

export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {}
  },
  plugins: [

    plugin(function ({ addVariant }) {
      addVariant('not-last', '&:not(:last-child)')
      addVariant('last', '&:last-child')
    })
  ]
}
