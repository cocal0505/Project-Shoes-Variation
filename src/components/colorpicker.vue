<template>

   <ColorPicker
      theme="light"
      :color="color"
      :sucker-hide="false"
      :sucker-canvas="suckerCanvas"
      :sucker-area="suckerArea"
      @changeColor="changeColor"
      @openSucker="openSucker"
    />

   
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
        suckerCanvas: null,
        suckerArea: [],
        isSucking: false,
        colorsDefault : []
      }
    },
    methods: {
      changeColor(color) {
        const { r, g, b } = color.rgba
        this.color = `rgba(${r}, ${g}, ${b}})`
        const rgb = this.color
        // this.$store.dispatch('Picking/color',{
        //   rgbcolor: rgb,
        //   hexcolor: hex 
        // })
         this.colorsDefault = color.hex
        const hexarray  =this.colorsDefault
          this.$store.dispatch('Picking/color',{
          rgbcolor: rgb,
          hexcolor: hexarray
        })
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

</style>