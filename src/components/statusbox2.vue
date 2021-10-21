<template>
    <div class="statusbox">
        <!-- <p>{{shoesStatus}}</p> -->
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
        <!-- <div
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
        </div> -->
    </div>
</template>


<script>

export default {
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
        opacity: 1;  
        width:100px;
        height:100px;
        background-color: rgb(63, 63, 63);
        border-radius: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        animation : myframes 1.1s ease-in-out forwards alternate;
        z-index: 1;
    }
   
      p{     
            font-size:15px;
            color:white;
        }

    @keyframes myframes {
        0% {
               opacity: 0; 
                top:100px;
        }
        50%{
              opacity:1; 
                top:200px;
        }
        100%{
               opacity: 0; 
               top:100px;
        }
    }

 

</style>