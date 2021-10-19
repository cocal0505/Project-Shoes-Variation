<template>
    <div class="navbar-container">
        <div class="navbar">
             <div class="warper">
                <div class="router">  
                    <RouterLink to="/">color Picker</RouterLink>
                     <h1>/</h1>
                    <RouterLink to="/colorPicker" class="logo">color Pallete</RouterLink>
                    <h1>/</h1>
                    <RouterLink to="/colorRten">color R shoe</RouterLink>
                    <h1>/</h1>
                    <RouterLink to="/colorten">color A shoe</RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    
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
            .logo{

             font-weight: 800;
            }
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