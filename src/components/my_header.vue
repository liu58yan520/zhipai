<style scoped>
    .top1 {
        text-align: center;
        padding: 10px 0;
        background: red;
        margin: 0;
        padding: 0;
        background: #F5F5F5;
        font-size: 1rem;
    }
    .top1 a{
        margin-left: 8px;
        color: #333;
        font-size: 1rem;
    }
    a:hover{
        color:#FFAE19;
        }
    .top1 .tel{
        color: #24A1F5;
        font-size: 1.29rem;
    }
    #logo{
        height: 8rem;
    }
    #logo img{
        height: 100%;
        width: auto;
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
       <el-row class="top1" style="padding:6px ">
            <el-col :span="5" :offset="3">热线电话：<a class="tel" href="tel:0511-85946949-802">0511-85946949-802</a></el-col>
            <el-col :span="5" :offset="8">
                <a href="#">登陆</a>
                <a href="#">注册</a>
                <a href="#">关于我们</a>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="4" :offset="4"><div id="logo"><img src="/static/logo.jpg" alt=""></div></el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    data() {
      return {
        activeIndex: '1',
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>
