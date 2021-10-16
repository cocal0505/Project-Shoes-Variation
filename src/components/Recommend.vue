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
            <button class="btn" @click="Bringpalettecolor">Bring Color Palette</button>
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
   }, 
   methods:{
       Bringpalettecolor(){
           this.$store.dispatch("Picking/bringcolorpalette")
       }
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
        .btn{
             margin-top:20px;
            background-color:rgb(255, 255, 255);
            width:100px;
            margin-right:auto;
            margin-left:auto;
            z-index: 1;
            box-shadow:1px 1px 16px 5px rgb(226, 240, 255);
            border-radius:14px;
            padding:10px;
            font-weight: 700;
            border:none ;
            margin-bottom: 10px;
        }
        .btn:hover{
                 box-shadow:1px 1px 16px 5px rgb(192, 208, 226);
        }
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
            .btn{
                margin-top:20px;
                background-color:rgb(255, 255, 255);
                width:100px;
                margin-right:auto;
                margin-left:auto;
                z-index: 1;
                box-shadow:1px 1px 16px 5px rgb(226, 240, 255);
                border-radius:14px;
                padding:10px;
                font-weight: 700;
            }
            .btn:hover{
                 box-shadow:1px 1px 16px 5px rgb(192, 208, 226);
            }
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