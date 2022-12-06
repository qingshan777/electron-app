import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/styles/tailwind.css'
import '@/assets/styles/preflight.css'
import '@/assets/styles/index.css'

createApp(App)
  .mount('#app')
  .$nextTick(() => {
    postMessage({ payload: 'removeLoading' }, '*')
  })
