import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router/index'
import './assets/css/global.scss'

createApp(App)
.use(router)
.use(ElementPlus)
.mount('#app')
 