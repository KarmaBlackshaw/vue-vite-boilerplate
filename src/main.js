// vue core
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// scss
import '@/assets/styles/app/index.scss'

createApp(App)
  .use(router)
  .mount('#app')
