<template>
  <div class="shose-container">
    <ShoseImage />
  </div>
</template>

<script>
import ShoseImage from  "./ShoseImage2.vue"
export default {
  components:{
    ShoseImage
  }
}
</script>

<style lang="scss">

@media screen and (max-width:500px){
  .shose-container{
    box-sizing: border-box;
    box-shadow: 2px 30px 60px 10px rgb(226, 240, 255);
    width:375px;
    padding:10px;
    border-radius: 40px;
    position:relative;
  }
}

@media screen and (min-width:500px) {
  .shose-container{
    position:relative;
    flex-basis: 100%;
  }
  
}


</style>