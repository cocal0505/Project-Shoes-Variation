<template>
<div class="Palette-container">
    
    <div 
    v-if="status"
    class="Palette-color">
        <div 
            v-for="color in RGBColor"
            :key="color">
                <div class="color-ball" @click="pickpalette(color)"
                :style="{backgroundColor:color}">
                </div>
        </div>
    </div>  


    <div 
    v-else
    class="skeleton">
        <div 
        v-for="skeleton in skeletons"
        :key="skeleton"
        class="color-skeleton"></div>
    </div>
</div>
    


</template>


<script>

export default {
    data(){
        return{
            RGBColor:[],
            skeletons:[1,2,3,4,5,6]
        }
    },
    computed:{
        serverRGB(){
             return this.$store.state.Picking.serverRGB
        },
        status(){
            return this.$store.state.Picking.serverRGBstatus
        }
    },
    watch:{
        serverRGB(){
            if(this.serverRGB === undefined){
                return
            }else{
                this.init()
            }
        }
    },
    methods:{
        async init(){
            const array = this.$store.state.Picking.serverRGB
            this.RGBColor = array
        
        },
        pickpalette(color){
             this.$store.dispatch("Picking/PaletteColor",color)
        }
    }
}
</script>


<style scoped lang="scss">
.Palette-container{
  

    .Palette-color{
         display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-content: center;
        padding:40px;
        box-sizing: border-box;
            .color-ball{
            width:100px;
            height:100px;
        
            border-radius: 50px;
            margin-right:10px;
            margin-left:10px;
            margin-top:20px;
            margin-bottom:20px;
            
            }
    }
    .skeleton{
             display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-content: center;
        padding:40px;
        box-sizing: border-box;
        .color-skeleton{
        width:100px;
        height:100px;
        background-color: rgb(221, 221, 221) ;
        border-radius: 50px;
        margin-right:10px;
        margin-left:10px;
        margin-top:20px;
        margin-bottom:20px;    
    }
   
    }
    
 
}



</style>