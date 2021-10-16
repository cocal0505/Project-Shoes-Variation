<template>
<h1>this is random ten</h1>
 <div class="main-container">
    <Status v-if="this.status" />
    <Shose />
    <Statusbox />
        <div class="sub-container">
        <ColorPick />
        <Recommend2 />
        </div>
    </div>
</template>

<script>
import Status  from "../components/status.vue"
import Shose from "../components/Shose2.vue"
import ColorPick from "../components/colorpicker.vue"
import Recommend2 from "../components/Recommend2.vue"
import Statusbox  from "../components/statusbox.vue"
export default {
    components:{
        Shose,
        ColorPick,
        Recommend2,
        Statusbox,
        Status
    },
     computed:{
        status(){
            return this.$store.state.Picking.serverstatus
        }
    }
}
</script>

<style scoped lang="scss">

</style>