import { createRouter, createWebHashHistory} from 'vue-router'
import Home from "./Home.vue"
import colorwithrandom10 from "./colorwithrandom10.vue"
import color10 from "./color10"
export default createRouter ({
    // hash 모드 
    history: createWebHashHistory(), 
    // pages 
    routes:[
      {
        // https://google.com/  슬레시 하나면 메인페이지 
        path:'/',
        component: Home
      }, 
      {
        path:'/colorRten',
        component: colorwithrandom10
      },
      {
        path:'/colorten',
        component: color10
      }
    ]
  })
  
  