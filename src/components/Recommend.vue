<template>
    <div class="recommend">
        <p>{{shoesStatus}}</p>
        <div
            v-if="shoesStatus">
            <div class="box">
                <p>신발선택</p>
            </div>
        </div>
        <div
            v-else>
            <div class="box">
                <p>신발선택</p>
            </div>
        </div>
        <div
            v-if="shoesStatus">
            <div class="box">
                <p>신발선택</p>
            </div>
        </div>
         <div
            v-else>
            <div class="box">
                <p>신발선택</p>
            </div>
        </div>

        <div class="color-box-container">
            <h1> Color Palette</h1>
            <div class="color-box">
                <ColorPalette />
            </div>
        </div>


    </div>


   
   
</template>


<script>
import ColorPalette from "./ColorPalette.vue"
export default {
    components:{
        ColorPalette
    },
   computed:{
       shoesStatus(){
        return this.$store.state.Picking.status
       },
   }
}
</script>

<style scoped lang="scss">


    .box{
        
        position:absolute;
        left:0px;
        opacity: 1;  
        width:100px;
        height:100px;
        background-color: rgb(63, 63, 63);
        border-radius: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        
        animation : myframes 1.1s ease-in-out forwards alternate
    }
   
      p{     
            font-size:15px;
            color:white;
        }

    @keyframes myframes {
        0% {
               opacity: 0; 
                left:0px;
        }
        50%{
              opacity:1; 
                left:15px;
        }
        100%{
               opacity: 0; 
               left:30px;
        }
    }

    .recommend{
        
    }
    
    .color-box-container{
        margin-top:10px;
        h1{
            margin-bottom:10px;
            font-weight:900;
        }
        .color-box{
            width:500px;
            height:350px;
            box-shadow: 2px 2px 60px 10px rgb(226, 240, 255);;
            border-radius: 15px;
        
        }
    }


    @media screen and(max-width:500px) {
        
        .recommend{
        
        }
    
        .color-box-container{
        margin-top:10px;
            h1{
                margin-bottom:10px;
                font-weight:900;
            }
            .color-box{
                width:375px;
                height:500px;
                box-shadow: 2px 2px 60px 10px rgb(226, 240, 255);;
                border-radius: 15px;
            
            }
        }
    }

</style>