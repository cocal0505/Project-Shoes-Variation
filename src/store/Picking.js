import axios from "axios"

export default {
  
    namespaced: true,
    state: () =>({
        color :[],
        colorRGB  : "",
        rgbArray : [],
        finalRgbArray : [],
        status : false,
        serverstatus: false,
        serverRGB : {},
        serverRGBstatus :false,
        currnetPaletteColor:""
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
        sendedtoserver(state,payload){
            if(payload){
                state.serverstatus = true
            }else{
                state.serverstatus = false
            }
            console.log("serversended",state.serverstatus)
        },
        serverRGB(state,payload){
            state.serverRGB = payload
            // console.log(state.serverRGB)
            if(payload){
                state.serverRGBstatus = true
            }else{
                state.serverRGBstatus = false
            }
        },
        currnetPaletteColor(state,payload){
            state.currnetPaletteColor = payload
            console.log(state.currnetPaletteColor)
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










       async finalRGBArray({commit,state},payload){
            const final = Object.values(payload)
            // console.log(final)
            const newArray =[].concat(...final)
           
            const newArray1 =  newArray.map((i)=>{
                return Number(i)
            })   
            

            const newArray2 = []
                for(let i=0;i<newArray1.length;i+=3){
                    newArray2.push(newArray1.slice(i,i+3))
                }     
            
            console.log(newArray2)

                function sendsever(){
                    return new Promise((reslove,rej)=>{
                        axios.post('http://localhost:3000/api/bucketListItems/',{
                            array: newArray2
                        })
                            .then((res)=>{
                                console.log(res.data)
                                reslove(res)
                                const status = true
                                if(res.data){
                                    commit('sendedtoserver',status)  
                                }
                            })
                           
                    })
                }

                function fetch(){
                    
                   return new Promise((reslove,rej)=>{
                    if(state.serverstatus){
                        setTimeout(()=>{
                            axios.get('http://localhost:3000/api/frompython')
                            .then((res)=>{
                            console.log("client",res.data[0])
                            reslove(res.data[0])
                            })
                        },5000)
                        
                    }else{
                        console.log("did not recived")
                        }
                   })
                }



                await sendsever()
                await fetch()
                
    
        },
        status({commit},payload){
            if(payload || !payload){
                commit('status',true)
            }
        },











       ReturnFromServer({state,commit}){

            
            
            
      

                // await axios.get('http://localhost:3000/api/bucketListItems/')
                //  .then((res)=>{
                //      console.log(res.data[0])
                //  })
                // const rgbarray =[[[227, 228, 232], [242, 215, 206], [249, 191, 167], [219, 139, 114], [216, 167, 106], [221, 221, 114]]]
            
                // const newArray = [].concat(...rgbarray)
                // const newArray1 = [].concat(...newArray)

                // // console.log(rgbarray)
                // const newArray1 = newArray.map(arr=>{
                //     return {
                //         "colorRGB": arr
                //     }
                // })
                
            //     const newArray3 = []
            //     for(let i=0;i<newArray1.length;i+=3){
            //         newArray3.push(newArray1.slice(i,i+3))
            //     }     

            //    const new1 = newArray3.map(arr=>{
            //         return `rgb(${String(arr)})`
            //    })
            //    console.log(new1)
                // commit('serverRGB',new1)
            
        },
        PaletteColor({commit},payload){
            
            commit("currnetPaletteColor",payload)
        }
        
    },



  
    
  
}





