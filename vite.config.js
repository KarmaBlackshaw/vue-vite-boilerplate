import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// libs
import AutoImport from './src/config/unplugin-auto-import'
import Components from './src/config/unplugin-vue-components'

export default defineConfig({
  clearScreen: true,
  plugins: [
    vue(),
    Components,
    AutoImport
  ],

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/assets/styles/mixins/_breakpoint.scss";
          @import "./src/assets/styles/mixins/_theme.scss";
          @import "./src/assets/styles/root/index.scss";
        `
      }
    }
  },

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
