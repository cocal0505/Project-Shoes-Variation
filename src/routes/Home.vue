<template>
  

    <div class="main-container">
    <Status v-if="this.status" />
    <Shose />
        <div class="sub-container">
        <ColorPick />
        <Recommend />
        </div>
    </div>
   
</template>

<script>

import Status from "../components/status.vue"
import Shose from "../components/Shose.vue"
import ColorPick from "../components/colorpicker.vue"
import Recommend from "../components/Recommend.vue"

export default {
   
    data(){
        return{
           stauts1:status
        }
    },
    components:{
        Shose,
        ColorPick,
        Recommend,
        Status
    },
    computed:{
        status(){
            return this.$store.state.Picking.serverstatus
        }
    }
}
</script>



<style lang="scss">
.status-container{
    position:relative;
}
   .main-container{
       display: flex;
       align-items: center;
    
       .sub-container{
           flex-basis: 100%;
           display: flex;
           flex-direction:column;
           align-items: center;
           position:relative;
       }
   }

@media screen and(max-width:500px){
    .main-container{
        flex-wrap: wrap;
    }
}

</style>