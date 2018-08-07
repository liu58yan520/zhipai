<style>
.footer{
    background: #0D1022;
    padding: 2rem 0;
    color: #AEAEAE;
}
.tel{
    position: relative;
    margin-bottom: 3rem;
}
.tel::after{
    position: absolute;
    content: "";
    bottom: -40%;
    left: 0;
    background: #fff;
    width:80%;
    height: 1px;
}
.tel img{
    float: left;
}
.tel strong{
    font-size: 3.2rem;
    padding: .5rem 0 0  6rem;
    display: block;
    font-weight: normal;
    color: #fff;
}
.info {
    clear: both;
    font-size: 1.4rem;
}
.info span{
    color: #AEAEAE;
}
.ft_nav{
    text-align: center;
    font-size: 1.5rem;
}
.ft_nav h3{
    font-weight: normal;
    color: #fff;
}
.ft_right {
    text-align: center;
}
.ft_right h2{
    color: #fff;
    font-size: 2.6rem;
    padding: 0;
    margin: 0;
}
.ft_right h3{
    font-size: 1.7rem;
    font-weight: normal;
}
</style>

<template>
    <div class="footer">
        <el-row>
            <el-col :span="6" :offset="3">
                <div class="tel">
                    <img src="static/tel2.png" alt="">
                    <strong>400-123-4567</strong>
                </div>
                <div class="info">
                    <p>镇江众邦科技有限公司</p>
                    <p>地址：镇江市润州区南徐大道198号，瑞泰数字产业园区，c座7楼</p>
                    <p>邮箱：12345678@qq.com</p>
                    <p>客服QQ：12345678 <span>（工作日：9：00～22：00）</span></p>
                </div>
            </el-col>
            <el-col :span="1" :offset="2">
                <div class="ft_nav">
                    <h3>产品</h3>
                    <p>派智</p>
                    <p>炫版权</p>
                </div>
            </el-col>
            <el-col :span="1" :offset="2">
                <div class="ft_nav">
                    <h3>服务</h3>
                    <p>专利申请</p>
                    <p>费用减免</p>
                    <p>案件加急</p>
                    <p>专利命名</p>
                </div>
            </el-col>
            <el-col :span="3" :push="2">
                <div class="ft_right">
                    <h2>关注派智公众号</h2>
                    <h3>随时掌握最新消息</h3>
                    <img src="static/ewm.png" alt="">
                </div>
            </el-col>
        </el-row>
    </div>
</template>
