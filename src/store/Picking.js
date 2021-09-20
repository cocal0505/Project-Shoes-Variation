import { parseQuery } from "vue-router"

export default {
    namespaced: true,
    state: () =>({
        color :""
    }),
    mutations:{
        colorstatus(state,payload){
           state.color = payload
           console.log(state.color)
        },
        // domelement(state,payload){
        //     payload.style.fill = state.color
        // }
    },
    actions:{

        // status({commit,state},payload){
        //     // console.log(payload)
        //     	// const st2 = document.querySelector('.st2')
        //         // st2.style.fill = state.color
        //     // commit('domelement',st2)
        // },
        
        color({commit},payload){

            const {rgbcolor,hexcolor} =payload
            // console.log(rgbcolor)
            // console.log(hexcolor)
            commit('colorstatus',hexcolor)
        }
    },
}
