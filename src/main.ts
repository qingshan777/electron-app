import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import '@/assets/styles/tailwind.css'
import '@/assets/styles/preflight.css'
import '@/assets/styles/index.css'

const pinia = createPinia()

const app = createApp(App)
app.use(pinia)
app.mount('#app').$nextTick(() => {
  postMessage({ payload: 'removeLoading' }, '*')
})
