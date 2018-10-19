<style scoped>
    .comment{
        background: #F6F7FC;
        padding:3rem 0;
    }
    .comment h2{
        text-align: center;
        font-size: 2.2rem;
        padding-bottom: 5rem ;
    }
    .comment .content{
        max-width:1090px;
        height: 324px;
        background: #fff;
        margin: auto;
        position: relative;
        border-radius: 5px;
    }
    .comment .content .left{
        width:427px;
        height:100% ;
        float: left;
    }
    .comment .content .left img{
        width:100%;
        display: block;
    }
    .comment .content .right {
        width:663px;
        float: right;
        box-sizing: border-box;
    }
    .comment .content .right .cards{
        width:40rem;
        margin: auto;
        position: absolute;
        right: 2.5%;
        top: -10%
    }

    .comment .content .right .cards .item{
        padding: 2rem;
        box-sizing: border-box;
        background: #fff;
        width:30rem;
        box-shadow:2px 2px 5px #ccc;
        position: absolute;
        z-index: 5;
        transition: all 2s;
        transform-origin: right top;
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
        font-size: 1.6rem;
    }
    .comment .content .right .cards .item p{
        color: #999;
        height:7rem;
        letter-spacing:1px;
        font-size: 1.2rem;
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
        font-size: 1.2rem;
    }
   .comment .content .right .cards .di_item{
        left: -2rem;
        top: 2rem;
        height: 15rem;
        width:34rem;
        position: absolute;
        box-shadow:2px 2px 5px #ccc;
        background: #fff;
    }
   
    .clear{
        clear: both;
    }
    .pinfen{
        position: absolute;
        right:15.5%;
        margin: auto;
        bottom: 30px;
        z-index: 5;
        width:15rem;
        transform: scale(2);
    }
    .pinjia_right{
        position: absolute;
        right: 8px;
        bottom: 25px;
    }
 
 

</style>
<template>
    <div class="comment">
        <h2>他们这样说派智</h2>
        <el-row>
            <el-col :span="18" :offset="3">
                <div class="content">
                    <div class="left">
                        <el-carousel indicator-position="none" height='360px' @change="card_move" :autoplay="false">
                            <el-carousel-item v-for="item in 3" :key="item">
                                <img  :src=" 'static/pinjia'+item+'.jpg'" alt="">
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                    <div class="right">
                        <div class="cards" ref="cards">
                             <div class="di_item"></div>
                            <div class="item" @click="card_move" v-for="(v,i) in cards" :key="i">
                                <h4>{{v.title}}</h4>
                                <h6>{{v.date}}</h6>
                                <p>{{v.text}}</p>
                                <a href="#" class="more">了解更多</a>
                            </div>
                        </div>
                        <div class="pinfen">
                            <el-rate v-model="pinfen" disabled :colors="['#24A1F5', '#24A1F5', '#24A1F5']" ></el-rate>
                        </div>
                        <img class="pinjia_right" src="static/pinjia_right.png" alt="">
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
            pinfen:5,
            aceive_card_ami:0,  //正在进行动画的item
            cards:[
                {
                    title:"交广投资",
                    date:'2017年3月',
                    text:'派智平台真正做到了专利服务的一站式服务，他们非常好的利用互联网产品的链接属性将复杂的专利流程管理和业务消化进行了结合统一，让我们拓展知产业务更便捷、更轻松、也更放心。'
                },{
                    title:"江苏鸿剑",
                    date:'2017年8月',
                    text:'合作过多家知产服务机构，派智的信息安全管控、业务专一，让我更放心把客户交到他们手中，互相信任是我们和派智之间最大的合作共识。'
                },
                {
                    title:"吉林优步",
                    date:'2017年12月',
                    text:'派智以其专业、细致的服务和积极的服务态度，在相关知识产权服务上，为我们提供了有力的支持，特别是去中间商服务的特性让我们以更低的成本享受到了品质化的服务。'
                }
            ]
        }
    },
    methods:{
        card_move:function(a){
            let card=this.$refs.cards.getElementsByClassName('item');
            let count=card.length-1
            let b=a+1;

            card[b].style.transform='rotate(152deg)'
            card[b].style.opacity=0
            card[a].style.transform='rotate(-152deg)'
            card[a].style.opacity=1
            

            // setTimeout(()=>{
            //     this.cards.splice(index,1);
            // },2000)
           

      
        }
    }
}
</script>

