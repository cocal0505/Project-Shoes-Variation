<template>
    <div class="background"></div>
    <div class="status-box">
        <h1> Sended Successfully</h1>
        <button class="okbtn" @click="closepopup">ok</button>
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
        padding:40px;
        border-radius: 15px;
        box-shadow: 1px 1px 10px rgb(196, 196, 196);
        background-color:white;
        z-index: 3;
        .okbtn{
            margin-top:10px;
            width:100px;
            border-radius: 15px;
            border: solid 1px rgb(119, 119, 119);

        }
    }
    .background{
       position:absolute;
       width:100%;
       height:100vh;
       background-color:rgba(0, 0, 0, 0.26);
       z-index: 2;
    }
</style>