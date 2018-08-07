<style>
h2{
    text-align: center;
    font-weight: normal;
    padding-bottom: 15rem;
    font-size: 3rem;
}
.flex{
    display: flex;
    text-align: center;
    justify-content: space-around;   
}
.flex p{
    margin: 0;
    padding-bottom: 2rem;
    font-size: 1.5rem;
}
.flex .item{
    position: relative;
}
.flex .item::after{
    content: "";
    display: block;
    position: absolute;
    right: -100%;
    top: 0;
    width: 1px;
    height: 100%;
    background: #eee;
}
.flex .item:last-child::after{
    height: 40%;
    top: 60%;
}
.flex .item:first-child::before{
    content: "";
    display: block;
    position: absolute;
    left: -100%;
    top: 60%;
    width: 1px;
    height: 40%;
    background: #eee;
}
</style>

<template>
    <div class="friend">
        <h2>合作企业</h2>
        <el-row>
            <el-col :span="14" :offset="5">
                <div class="flex">
                    <div class="item"> <img src="static/x1.png" alt=""> <p>极速响应</p></div>
                    <div class="item"> <img src="static/x2.png" alt=""> <p>专属服务</p></div>
                    <div class="item"> <img src="static/x3.png" alt=""> <p>售后保障</p></div>
                    <div class="item"> <img src="static/x4.png" alt=""> <p>隐私保护</p></div>
                    <div class="item"> <img src="static/x5.png" alt=""> <p>加快办理</p></div>
                    <div class="item"> <img src="static/x6.png" alt=""> <p>在线客服</p></div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
