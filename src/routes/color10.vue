<template>
 <div class="main-container">
    <Shose />
        <div class="sub-container">
        <ColorPick />
        <Recommend2 />
        </div>
    </div>
</template>

<script>
import Shose from "../components/Shose.vue"
import ColorPick from "../components/colorpicker.vue"
import Recommend2 from "../components/Recommend2.vue"
export default {
    components:{
        Shose,
        ColorPick,
        Recommend2
    }
}
</script>

<style scoped lang="scss">

</style>