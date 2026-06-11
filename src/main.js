import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import 'primeicons/primeicons.css'
import './style.css'
const app = createApp(App)

app.use(router)
app.mount('#app')