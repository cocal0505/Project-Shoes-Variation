import { parseQuery } from "vue-router"

export default {
    namespaced: true,
    state: () =>({
        color :[],
        colorRGB  : "",
        status : false,
        status2: false,
        rgbArray : [],
        finalRgbArray : []
    }),
    mutations:{
        colorstatus(state,payload){
        
        state.color.unshift(payload)
      
     
        },

        status(state,payload){
          state.status = payload
          
        },
        statusdouble(state,payload){
            if(payload === false){
                state.status2 = true
                // console.log("second",state.status2)
            }else{
                state.status2 =false
            }
        },
        colorRGB(state,payload){
            state.colorRGB = payload
            
        },
        RGBarray(state,payload){
          
           state.rgbArray.push(payload)
          console.log(payload)
            state.finalRgbArray = state.rgbArray.filter(i =>{
                return i  
            })
            console.log("final",state.finalRgbArray)
        }
    },
    actions:{

        status({commit},payload){
            
            commit('status',payload)
            commit('statusdouble',payload)
            // console.log("origin",payload)
        },
        
        color({commit},payload){
            const {rgbcolor,hexcolor} =payload

         
                  commit('colorstatus',hexcolor)
                commit('colorRGB',rgbcolor)

            // commit('colorstatus',hexcolor)
            // console.log(rgbcolor)
            // console.log(hexcolor)
            
        },
        RGBarray({commit},payload){
           commit('RGBarray',payload)

            
        }
    },
}
