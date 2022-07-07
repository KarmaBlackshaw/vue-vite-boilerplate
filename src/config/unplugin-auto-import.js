
const AutoImport = require('unplugin-auto-import/vite')

module.exports = AutoImport({
  imports: [
    'vue',
    'vue-router',
    'vue/macros',
    '@vueuse/head',
    '@vueuse/core'
  ],

  dts: 'src/types/auto-imports.d.ts',

  dirs: [
    'src/composables',
    'src/store'
  ],

  vueTemplate: true,

  eslintrc: {
    enabled: true
  }
})