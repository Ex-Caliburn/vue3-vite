import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'

import store from './store/index'
// import 'element-plus/lib/theme-chalk/index.css'
import './styles/variables.scss'

import router from './router/index'

const app = createApp(App)
app.use(ElementPlus, { size: 'medium', zIndex: 3000 }).use(store).use(router)
app.mount('#app')
