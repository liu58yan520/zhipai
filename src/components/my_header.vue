<style scoped>
 
    .top {
        text-align: center;
        
        background: red;
        padding: 0;
        background: #F5F5F5;
        font-size: 1rem;
        margin: auto;
    }
    .top .center{
        max-width: 1200px;
        margin: auto;
        display: flex;
        padding: 12px 0;
        justify-content: space-between;
    }
    .top a{
        margin-left: 8px;
        color: #333;
        font-size: 1rem;
    }
    a:hover{
        color:#FFAE19;
        }
    .top .tel{
        color: #24A1F5;
        font-size: 1.29rem;
    }
    #logo{
        max-width: 1200px;
        margin: 15px auto;
    }
    #logo img{
        width: 400px;
    }
    .el-menu--horizontal{
        border:0;
        padding: .2rem 1.8rem;
        background: #000;
        
    }
    .el-icon-arrow-down{
        display: none !important;
    }
</style>


<template>
    <div class="header">
        <div class="top">
            <div class="center">
                <div class="left">热线电话：<a class="tel" href="tel:0511-85946949-802">0511-85946949-802</a></div>
                <div class="rig">
                    <a href="#">登陆</a>
                    <a href="#">注册</a>
                    <a href="#">关于我们</a>
                </div>
            </div>
        </div>
        <div id="logo"><img src="/static/logo.svg" alt=""></div>
    </div>
</template>
<script>
export default {
    data() {
      return {
        activeIndex: '1',
      }
    }
}
</script>
