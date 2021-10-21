<template>
   <ColorPicker
      theme="light"
      :color="color"
      :sucker-hide="false"
      :sucker-canvas="suckerCanvas"
      :sucker-area="suckerArea"
      @changeColor="changeColor"
      @openSucker="openSucker"
    >
   </ColorPicker>
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
        colorsDefault : [],
        
      }
    },
    methods: {
      changeColor(color) {
        const { r, g, b } = color.rgba
        this.color = `${r}, ${g}, ${b}`

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



<style  lang="scss">
  .hu-color-picker.light{
    border-radius: 15px;
    margin-top:20px;
    box-shadow: 2px 2px 20px 10px rgb(226, 240, 255);
    width:198px;
    padding:10px;
    z-index:1;
    background-color:white;

    .color-set{
      display:flex;
    }
    .color-show{
      display: flex;
      margin-top:8px;
      height:30px;
      .sucker{
        display:none;
      }
    }
    .color-type{
      display:flex;
      margin-top:8px;
      font-size:12px;
      .name{
        width:60px;
        height: 30px;
        float: left;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #999;
        background: #e7e8e9;
      }
      .value{
        flex: 1;
        height: 30px;
        min-width: 100px;
        padding: 0 12px;
        border: 0;
        box-sizing: border-box;
        
      }
    }
    .colors{
      display: none;
      .item{
        display: none;
        position: relative;
        width: 16px;
        height: 16px;
        margin: 10px 0 0 10px;
        border-radius: 3px;
        box-sizing: border-box;
        vertical-align: top;
        display: inline-block;
        transition: all .1s;
        cursor: pointer;
      }
    }
  }
  
  .hu-color-picker.light:hover{
    box-shadow: 2px 2px 20px 10px rgb(202, 225, 248);
  }
   
  

</style>