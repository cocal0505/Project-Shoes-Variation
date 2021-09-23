
export default {
    namespaced: true,
    state: () =>({
        color :[],
        colorRGB  : "",
        rgbArray : [],
        finalRgbArray : [],
        status : false
    }),
    mutations:{
        colorstatus(state,payload){
        state.color.unshift(payload)
        },
        colorRGB(state,payload){
            state.colorRGB = payload
        },
        RGBarray(state,payload){
           state.rgbArray.push(payload)
            state.finalRgbArray = state.rgbArray.filter(i =>{
                return i  
            })
        },
        status(state,payload){
          if(payload){
              state.status = !state.status
          }
        }
        
    },
    actions:{
        color({commit},payload){
            const {rgbcolor,hexcolor} =payload
            commit('colorstatus',hexcolor)
            commit('colorRGB',rgbcolor)   
        },
        RGBarray({commit},payload){
           commit('RGBarray',payload)
        },
        finalRGBArray({commit},payload){
           console.log(payload)
        },
        status({commit},payload){
            if(payload || !payload){
                commit('status',true)
            }
        } 
    },
}
