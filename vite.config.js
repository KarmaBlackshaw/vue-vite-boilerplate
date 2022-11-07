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
      dirs: ['src/components'],
      dts: 'src/types/components.d.ts',
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

  css: {
    postcss,
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

  server: {
    port: 6376
  },

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
