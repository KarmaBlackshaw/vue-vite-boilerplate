import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// libs
import AutoImport from './src/config/unplugin-auto-import'
import Components from './src/config/unplugin-vue-components'

export default defineConfig({
  plugins: [
    vue(),
    Components,
    AutoImport
  ],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
