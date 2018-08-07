<style scoped>
    .comment{
        background: #F6F7FC;
        padding:3rem 0;
    }
    h2{
        text-align: center;
        font-size: 2.2rem;
        padding: 0;
    }
    .comment .content{
        max-width:1200px;
        background: #fff;
        margin: auto;
        position: relative;
        border-radius: 5px;
        overflow: hidden;
    }
    .comment .content .left{
        width:30%;
        float: left;
    }
    .comment .content .left img{
        width:100%;
        display: block;
    }
    .comment .content .right {
        width:70%;
        float: right;
        box-sizing: border-box;
    }
    .comment .content .right .cards{
        width:40rem;
        margin: auto;
        position: relative;
    }

    .comment .content .right .cards .item{
        padding: 2rem;
        box-sizing: border-box;
        background: #fff;
        width:30rem;
        box-shadow:2px 2px 5px #525252;
        position: absolute;
        border-radius: 5px;
    }
    .comment .content .right .cards .item h4{
        font-size: 2.2rem;
        font-weight: normal;
        padding: 0;
        color: #FFAE19;
        margin: 0;
    }
    .comment .content .right .cards .item h6{
        text-align: center;
        color: #666;
        font-weight: normal;
        padding: 0;
        margin: 0;
    }
    .comment .content .right .cards .item p{
        color: #999;
        height:7rem;
        letter-spacing:1px;
    }
    .comment .content .right .cards .item .more{
        text-decoration: none;
        background: #24A1F5;
        color: #fff;
        padding: .6rem 0;
        width:7rem;
        margin: auto;
        display: block;
        text-align: center;
    }
    .comment .content .right .cards .item:nth-child(1){
        top: 0;
        left: 0;
        z-index: 1;
    }
    .comment .content .right .cards .item:nth-child(2){
        top: 5px;
        left: 5px;
        z-index: 2;
    }
    .comment .content .right .cards .item:nth-child(3){
        top: 10px;
        left: 10px;
        z-index: 3;
    }
    .clear{
        clear: both;
    }
    .pinfen{
        position: absolute;
        right: 30rem;
        margin: auto;
        bottom: 30px;
        z-index: 5;
        width:15rem;
        transform: scale(2);
    }
 
</style>
<template>
    <div class="comment">
        <h2>他们这样说派智</h2>
        <el-row>
            <el-col :span="18" :offset="3">
                <div class="content">
                    <div class="left">
                        <el-carousel indicator-position="none" height='360px'>
                            <el-carousel-item v-for="item in 1" :key="item">
                                <img  src="static/demo.jpg" alt="">
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                    <div class="right">
                        <div class="cards">
                            <div class="item" :style="{ top:cards_index*cards_pos+'px', left:cards_index*cards_pos+'px',zIndex:cards_index }">
                                <h4>发明专利</h4>
                                <h6>2017年3月</h6>
                                <p>派智平台真正做到了专利服务的一站式服务，他们非常好的利用互联网产品的链接属性将复杂的专利流程管理和业务消化进行了结合统一，让我们拓展知产业务更便捷、更轻松、也更放心。</p>
                                <a href="#" class="more">了解更多</a>
                            </div>
                            <div class="item" :style="{ top:(cards_index+1)*cards_pos+'px',left:(cards_index+1)*cards_pos+'px',zIndex:(cards_index+1) }">
                                <h4>发明专利</h4>
                                <h6>2017年3月</h6>
                                <p>派智平台真正做到了专利服务的一站式服务，他们非常好的利用互联网产品的链接属性将复杂的专利流程管理和业务消化进行了结合统一，让我们拓展知产业务更便捷、更轻松、也更放心。</p>
                                <a href="#" class="more">了解更多</a>
                            </div>
                            <div class="item" :style="{ top:(cards_index+2)*cards_pos+'px',left:(cards_index+2)*cards_pos+'px',zIndex:(cards_index+2) }">
                                <h4>发明专利</h4>
                                <h6>2017年3月</h6>
                                <p>派智平台真正做到了专利服务的一站式服务，他们非常好的利用互联网产品的链接属性将复杂的专利流程管理和业务消化进行了结合统一，让我们拓展知产业务更便捷、更轻松、也更放心。</p>
                                <a href="#" class="more">了解更多</a>
                            </div>
                        </div>
                        <div class="pinfen">
                            <el-rate v-model="pinfen"  :colors="['#24A1F5', '#24A1F5', '#24A1F5']" ></el-rate>
                        </div>
                    </div>
                    <div class="clear"></div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    data(){
        return{
            cards_index:0,
            cards_pos:15,
            pinfen:5,
            card_aceive_index:3
        }
    }
}
</script>

