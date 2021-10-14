<template>
 <h1>this is colorten</h1>
 <div class="main-container">
   
    <Shose />
    <Statusbox />
        <div class="sub-container">
        <ColorPick />
        <Recommend2 />
        </div>
    </div>
</template>

<script>
import Shose from "../components/Shose2.vue"
import ColorPick from "../components/colorpicker.vue"
import Recommend2 from "../components/Recommend2.vue"
import Statusbox  from "../components/statusbox.vue"
export default {
    components:{
        Shose,
        ColorPick,
        Recommend2,
        Statusbox
    }
}
</script>

<style scoped lang="scss">

</style>