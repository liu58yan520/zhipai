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
    width:3rem;
}
.tel strong{
    font-size: 2.3rem;
    padding: .5rem 0 0  4rem;
    display: block;
    font-weight: normal;
    color: #fff;
}
.info {
    clear: both;
    font-size: 1.4rem;
    color:#FFFFFF;
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
    font-size: 2.2rem;
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
                    <strong><a href="tel:0511-85946949-802">0511-85946949-802</a></strong>
                </div>
                <div class="info">
                    <p>镇江众帮信息技术有限公司</p>
                    <p>地址：镇江市润州区南徐大道298号，瑞泰数字产业园区，C座7楼</p>
                    <p>邮箱：IP@pizhigu.com</p>
                    <p>客服QQ：2096345456 <span>（工作日：9：00～18：00）</span></p>
                </div>
            </el-col>
            <el-col :span="3" :offset="1">
                <div class="ft_nav">
                    <h3>产品</h3>
                    <p>派智</p>
                    <p>炫版权</p>
                </div>
            </el-col>
            <el-col :span="3" :offset="1">
                <div class="ft_nav">
                    <h3>服务</h3>
                    <p>专利申请</p>
                    <p>费用减免</p>
                    <p>案件加急</p>
                    <p>专利命名</p>
                </div>
            </el-col>
            <el-col :span="3" :push="1">
                <div class="ft_right">
                    <h2>关注派智公众号</h2>
                    <h3>随时掌握最新消息</h3>
                    <img src="static/ewm.png" alt="">
                </div>
            </el-col>
        </el-row>
    </div>
</template>
