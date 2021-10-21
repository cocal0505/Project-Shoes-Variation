<template>
    <div class="navbar-container">
        <div class="navbar">
             <div class="warper">
                <div class="router">  
                    <RouterLink :style="{backgroundColor:color}" @click="btnclick"  class="router-btn" to="/">color Picker</RouterLink>
                     <h1>/</h1>
                    <RouterLink :style="{backgroundColor:color1}" @click="btnclick1" to="/colorPicker" class="router-btn">color Pallete</RouterLink>
                    <h1>/</h1>
                    <RouterLink :style="{backgroundColor:color2}" @click="btnclick2" class="router-btn" to="/colorRten">color R shoe</RouterLink>
                    <h1>/</h1>
                    <RouterLink :style="{backgroundColor:color3}" @click="btnclick3" class="router-btn" to="/colorten">color A shoe</RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>


<script>

export default {
    data(){
        return{
            color: "",
            color1: "",
            color2:"",
            color3 :""
        }
    },
    watch:{
        btnclick1(){

        }
    },
    methods:{
        btnclick(){
            this.color1 = ""
            this.color2= ""
            this.color3=""
            this.color = "rgb(191, 224, 247)"
            // this.$store.commit("Picking/navcolor",string)
        },
        btnclick1(){
            this.color = ""
            this.color2 =""
            this.coloe3 =""
            this.color1 ="rgb(191, 224, 247)"
        },
        btnclick2(){
            this.color2 = "rgb(191, 224, 247)"
            this.color = ""
            this.color1 = ""
            this.color3 =""
        },
        btnclick3(){
            this.color3 ="rgb(191, 224, 247)"
            this.color2 = ""
            this.color1 =""
            this.color =""
        }
     },
}
</script>


<style scoped lang="scss">

.navbar{
     background-color:rgba(239, 253, 255, 0.486);
        width:100%;
        height:50px;
        box-shadow:1px 1px 10px rgb(211, 211, 211);
                box-sizing: border-box;

    .warper{
        margin-right:80px;
        margin-left:80px;
        display:flex;
        justify-content: flex-start;
        align-items: center;
        height:50px;
            .router{
                display:flex;
                justify-content: center;
                align-items: center;
                width:100%;
                box-sizing: border-box;
                font-size:15px;
                font-weight: 800;
                h1{
                    margin: 0 10px 0px 10px; 
                    
                }
                .router-btn{
                    padding:10px;
                    border-radius:5px;
                    transition: all .5s;
                }
                .router-btn:hover{
                    background-color:rgb(220, 241, 255);
                    
                }
            }
            a{
                text-decoration: none;
                color:black;
                
            }

    }
}

@media screen and (max-width:500px){
    .navbar{
        width:100%;
        .warper{
        margin:0px;
        .logo{
            display:none;
        }
        .router{
            margin-right:0px;
        }
       }

    }
    
}
    
</style>