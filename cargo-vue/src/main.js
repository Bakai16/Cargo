import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '../layouts/Index.scss'

createApp(App).use(router).mount('#app')