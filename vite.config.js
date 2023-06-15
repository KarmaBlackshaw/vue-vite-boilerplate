import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// libs
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

// configs
import postcss from './postcss.config.js'

export default defineConfig({
  clearScreen: true,
  plugins: [
    vue(),
    Icons({
      autoInstall: true
    }),
    Components({
      dirs: ['src/components', 'src/layouts'],
      dts: 'components.d.ts',
      directoryAsNamespace: true,
      resolvers: [
        IconsResolver({
          prefix: 'icon'
        })
      ]
    }),
    AutoImport({
      imports: [
        'vue',
        'pinia',
        'vue-router',
        'vue/macros',
        '@vueuse/head',
        '@vueuse/core'
      ],

      dts: 'auto-imports.d.ts',

      dirs: [
        'src/composables',
        'src/stores'
      ],

      vueTemplate: true,

      eslintrc: {
        enabled: true
      }
    })
  ],

  css: {
    postcss
  },

  server: {
    port: 6376,
    host: true
  },

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
