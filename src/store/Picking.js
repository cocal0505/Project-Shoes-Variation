export default {
  
    namespaced: true,
    state: () =>({
        color :[],
        colorRGB  : "",
        rgbArray : [],
        finalRgbArray : [],
        status : false,
        final : []
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
        },
        finalRGB(state,payload){
           
         const final = Object.values(payload)
            console.log(final)
            state.final = final
            // console.log(state.final)
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
        //    console.log(payload)
            commit("finalRGB",payload)
        },
        status({commit},payload){
            if(payload || !payload){
                commit('status',true)
            }
        } 
    },
}




// const spawn = require('child_process').spawn

// // const  array = [[255, 0, 0], [244, 247, 114], [252, 255, 248], [186, 205, 219], [-999, -999, -999], [244, 247, 114], [244, 247, 114], [186, 205, 219], [-999, -999, -999], [244, 247, 114], [-999, -999, -999]]
// const spawn = require('child_process').spawn
// const process1 = spawn('python', ['./repeat.py',array]);


// const datafrompython = []

// process1.stdout.on('data',data=>{
    
//     // console.log(data.toString())
//     datafrompython.push(data.toString());
//     console.log("from python ",datafrompython)
// })

