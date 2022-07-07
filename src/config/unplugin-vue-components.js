const Components = require('unplugin-vue-components/vite')

module.exports = Components({
  dirs: ['src/components'],

  dts: 'src/types/components.d.ts'
})