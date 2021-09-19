<template>
  <div class="shose-container">
    <ShoseImage />
  </div>
</template>

<script>
import ShoseImage from  "./ShoseImage.vue"
export default {
  components:{
    ShoseImage
  }
}
</script>

<style lang="scss">
  .shose-container{
    background-color: rgba(0, 128, 0, 0.226);
    width:800px;
    height:500px;
    padding:10px;
    margin-right:auto;
    margin-left:auto;
    position:relative;
  }
</style>