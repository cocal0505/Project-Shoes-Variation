<template>
    <div class="main-container">
    <Shose />
        <div class="sub-container">
        <ColorPick />
        <Recommend />
        </div>
    </div>
   
</template>

<script>

import Shose from "../components/Shose.vue"
import ColorPick from "../components/colorpicker.vue"
import Recommend from "../components/Recommend.vue"
export default {
    components:{
        Shose,
        ColorPick,
        Recommend
    }
}
</script>



<style lang="scss">
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