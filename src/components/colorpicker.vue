<template>
<div :style="{background: color}">
   <ColorPicker
      theme="light"
      :color="color"
      :sucker-hide="false"
      :sucker-canvas="suckerCanvas"
      :sucker-area="suckerArea"
      @changeColor="changeColor"
      @openSucker="openSucker"
    />

</div>
  

   
</template>


<script>
import { ColorPicker } from 'vue-color-kit'
import 'vue-color-kit/dist/vue-color-kit.css'
export default {
    components:{
        ColorPicker
    },
  data() {
      return {
        color: '#59c7f9',
        rgbcolor:"",
        suckerCanvas: null,
        suckerArea: [],
        isSucking: false,
      }
    },
    methods: {
      changeColor(color) {
        const { r, g, b ,a} = color.rgba
        // const hex = color.hex
        this.color = `rgba(${r}, ${g}, ${b}, ${a}})`
        this.rgbcolor = `rgba(${r}, ${g}, ${b}, ${a}})`
        // const rgb = this.color
        // this.$store.dispatch('Picking/color',{
        //   rgbcolor: rgb,
        //   hexcolor: hex 
        // })
      },
      openSucker(isOpen) {
        if (isOpen) {
          // ... canvas be created
          // this.suckerCanvas = canvas
          // this.suckerArea = [x1, y1, x2, y2]
        } else {
          // this.suckerCanvas && this.suckerCanvas.remove
        }
      },
    },
}
</script>



<style lang="scss">
  .box{
    width:100px;
    height:100px;
  }
</style>