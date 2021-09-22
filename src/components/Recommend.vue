<template>
    <div class="recommend">
        <div
        v-if="shoesStatus">
         <div 
            class="box">
            <p>신발클릭</p>
         </div>
        </div>
        
        <div
        v-if="shoesStatus2">
            <div class="box">
                <p>신발해제</p>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    data(){
        return{
            color : "yellow" 
        }
    },
   created(){

   },
   computed:{
       shoesStatus(){
        return this.$store.state.Picking.status
       },
       shoesStatus2(){
           return this.$store.state.Picking.status2
       }
   }
}
</script>

<style scoped lang="scss">
    .recommend{
        height:450px;
        position: relative;
    }
    .box{
        position:absolute;
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

</style>