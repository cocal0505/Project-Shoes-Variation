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
    box-shadow: 2px 30px 60px 10px rgb(226, 240, 255);
    width:800px;
    margin-top:20px;
    margin-left:20px;
    position:relative;
    border-radius: 40px;
    transition: box-shadow 0.2s;
    flex-basis: 100%;
  }
  .shose-container:hover{
    box-sizing: border-box;
    box-shadow: 2px 30px 60px 10px rgb(202, 225, 248);
  
  }
}


</style>