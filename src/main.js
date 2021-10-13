import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/index.js'
import store from './store/index.js'

createApp(App)
    .use(router)
    .use(store)
    .mount('#app')



const hello =[ 1,2,3]

