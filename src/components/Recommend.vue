<template>
    <div class="recommend">hello</div>
</template>

<script>
export default {
    data(){
        return{
            color : "yellow" 
        }
    },
    created(){
        // this.$store.dispatch('Picking/colorstatus',{
        //     picked : this.color
        // })

       
    }
}
</script>

<style scoped lang="scss">
    .recommend{
        height:450px;
    }
</style>