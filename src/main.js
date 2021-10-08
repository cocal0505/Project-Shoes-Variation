import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/index.js'
import store from './store/index.js'

createApp(App)
    .use(router)
    .use(store)
    .mount('#app')



//    const arrrya = [1,3,4,"",2]
//    console.log(arrrya)
//    const newarrya = arrrya.filter(i=>{
//        return i 
//    })
//    console.log(newarrya)