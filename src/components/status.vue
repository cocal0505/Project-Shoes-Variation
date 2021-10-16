<template>
    <div class="background"></div>
    <div class="status-box">
        <h1> sended successfully</h1>
        <button @click="closepopup">ok</button>
    </div>
</template>


<script>
export default {
    methods:{
        closepopup(){
            this.$store.commit("Picking/sendedtoserver",false)
        }
    }
}
</script>


<style  lang="scss">
    .status-box{  
        position:absolute;
        left:0; 
        right:0;
        top:0;
        bottom:0;
        width:100px;
        height:50px;
        margin:auto;
        padding:10px;
        border-radius: 15px;
        box-shadow: 1px 1px 10px rgb(196, 196, 196);
        background-color:white;
        z-index: 3;
    }
    .background{
        position:absolute;
       width:100%;
       height:100vh;
       background-color:rgba(0, 0, 0, 0.26);
       z-index: 2;
    }
</style>