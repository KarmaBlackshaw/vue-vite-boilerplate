import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@/styles/app/_tailwind.scss'

const app = createApp(App)

app.use(router)

app.mount('#app')
