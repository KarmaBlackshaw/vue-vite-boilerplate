import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// libs
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

export default defineConfig({
  plugins: [
    vue(),

    Components({
      dirs: ['src/components'],

      dts: 'src/types/components.d.ts'
    }),

    AutoImport({
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
  ],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
