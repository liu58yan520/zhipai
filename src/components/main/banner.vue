<style scoped>
    .banner{
        margin: 3rem auto;
    }
    .el-carousel__item{
        background-color: #101241;
    }
    .item1{
        position: absolute;
        left: 0;
        right: 500px;
        bottom: 30%;
        margin: auto;
        width: 30rem;
        text-align: center;
        font-size: 3.2rem;
    }
    
    .item1 button{
        display: block;
        border: 0;
        border-radius: 6px;
        background: #FFAE19;
        color: #fff;
        margin: auto;
        padding: .7rem 3rem;
        font-size: 1.7rem;
    }
    .banner_img{
        width: 1200px;
        display: block;
        margin: auto;
    }
    .banner_bottom{
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 30px;
        background: rgba(0,0,0,.5);
        z-index: 15;
    }
    .nav{
        display: flex;
        justify-content: space-around;
        font-size: 1.5rem;
        padding: .3rem 0;
        cursor: pointer;
    }

</style>
<template>
    <div class="banner">
        <el-row>
        <el-col :span="16" :offset="4">
            <ul class="nav">
                <li>菜单菜单</li>
                <li>菜单菜单</li>
                <li>菜单菜单</li>
                <li>菜单菜单</li>
            </ul>
        </el-col>
        </el-row>
        <el-carousel height="478px">
                <el-carousel-item v-for="item in 1" :key="item" >
                    <img src="/static/banner.jpg" class="banner_img">
                    <div v-if="item==1" class="item1">
                        <button>免费试用</button>
                    </div>
                    <div class="banner_bottom"></div>
                </el-carousel-item>
        </el-carousel>
    </div>
</template>
