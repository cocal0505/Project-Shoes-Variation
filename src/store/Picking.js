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
                        axios.post('https://shose-variation-2.herokuapp.com/api/bucketListItems',{
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
                            setTimeout(() => {
                                axios.get('https://shose-variation-2.herokuapp.com/api/frompython')
                            .then((res)=>{
                            console.log("client",res.data[0])
                            reslove(res.data[0])
                            const pythonarray = res.data[0].array[0]

                                console.log(pythonarray)
                                let reg = /[`~!@#$%^&*()_|+\-=?;:'".<>\{\}\[\]\\\/ ]/gim;
                                const newarray = pythonarray.replace(reg,"")
                              
                                    
                                const newarray1 = newarray.split(',')
                                console.log(newarray1)
                                const newarray5 = newarray1.slice(3,undefined) 
                                console.log(newarray5)
                    
                                const newArray3 = []
                                    for(let i=0;i<newarray5.length;i+=3){
                                        newArray3.push(newarray5.slice(i,i+3))
                                    }     
                              
                    
                    
                                const new1 = newArray3.map(arr=>{
                                            return `rgb(${String(arr)})`.replace('\n',"")
                                       })
                                      
                    
                                const new2 = new1.map(arr=>{
                                    return arr.replace('\r',"")
                                })
                                console.log(new2)
    
                            commit('serverRGB',new2)


                            })
                            }, 1000);

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



        PaletteColor({commit},payload){
            
            commit("currnetPaletteColor",payload)
        }
        
    },



  
    
  
}





