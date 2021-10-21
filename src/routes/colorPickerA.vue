<template>
    <div class="outer">
        <Shoseimage/>
        <Colorpicker />
    </div>
</template>


<script>
import Shoseimage from "../components/ShoseImage3.vue"
import Colorpicker from '../components/colorpicker2.vue'
export default {
    components:{
        Shoseimage,
        Colorpicker,
    }
}
</script>


<style scoped lang="scss">
.outer{
    position:relative;
}
</style>