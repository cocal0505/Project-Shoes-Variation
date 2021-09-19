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
       .sub-container{
           flex-basis: 100%;
           display: flex;
           flex-direction:column;
       }
   }
</style>