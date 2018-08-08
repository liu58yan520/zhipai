
<style scoped>
h2{
    text-align: center;
    font-weight: normal;
    font-size: 3rem;
    padding-bottom: 40px;
}
.flex_bottom{
    max-width: 1200px;
    margin: auto;
    display: flex;
    text-align: center;
    justify-content: space-around;   
}
.flex_bottom p{
    margin: 0;
    padding-bottom: 2rem;
    font-size: 1.5rem;
}
.flex_bottom .item{
    position: relative;
}
.flex_bottom .item::after{
    content: "";
    display: block;
    position: absolute;
    right: -100%;
    top: 0;
    width: 1px;
    height: 100%;
    background: #eee;
}
.flex_bottom .item:last-child::after{
    height: 40%;
    top: 60%;
}
.flex_bottom .item:first-child::before{
    content: "";
    display: block;
    position: absolute;
    left: -100%;
    top: 60%;
    width: 1px;
    height: 40%;
    background: #eee;
}
.s_logo{
    max-width:1200px;
    margin: 1rem auto;
    display: flex;
    justify-content: space-around;
    margin-bottom: 60px;
    flex-wrap: wrap;
}
.s_logo .pics{
    width:22%;
    margin-bottom: 10px;
}
.s_logo .pics img{
    width:100%;
}
</style>

<template>
    <div class="friend">
        <h2>合作企业</h2>
        <div class="s_logo">
            <div class="pics"  v-for="(v,i) in 8" :key="i"><img :src=" 'static/s_logo'+v+'.png' " ></div>
        </div>
        <el-row>
            
                <div class="flex_bottom">
                    <div class="item"> <img src="static/x1.png" alt=""> <p>在线客服</p></div>
                    <div class="item"> <img src="static/x2.png" alt=""> <p>加快办理</p></div>
                    <div class="item"> <img src="static/x3.png" alt=""> <p>隐私保护</p></div>
                    <div class="item"> <img src="static/x4.png" alt=""> <p>售后保障</p></div>
                    <div class="item"> <img src="static/x5.png" alt=""> <p>专属服务</p></div>
                    <div class="item"> <img src="static/x6.png" alt=""> <p>极速响应</p></div>
                </div>
          
        </el-row>
    </div>
</template>
