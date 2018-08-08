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
        max-width:1200px;
        background: #fff;
        margin: auto;
        position: relative;
        border-radius: 5px;
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
        position: absolute;
        right: 10%;
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
                        <el-carousel indicator-position="none" height='360px' @change="card_move" :autoplay="false">
                            <el-carousel-item v-for="item in 3" :key="item">
                                <img  src="static/pinjia1.jpg" alt="">
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
                    title:"发明专利",
                    date:'2017年3月',
                    text:'派智平台真正做到了专利服务的一站式服务，他们非常好的利用互联网产品的链接属性将复杂的专利流程管理和业务消化进行了结合统一，让我们拓展知产业务更便捷、更轻松、也更放心。'
                },{
                    title:"1",
                    date:'1',
                    text:'2'
                },
                {
                    title:"22",
                    date:'2',
                    text:'22'
                }
            ]
        }
    },
    methods:{
        card_move:function(){
            let card=this.$refs.cards.getElementsByClassName('item');
            let index=card.length-1
            if(!index) return ;
            card[index].style.transform='rotate(152deg)'
            card[index].style.opacity=0
            let new_data=card[index]
            setTimeout(()=>{
                this.cards.splice(index,1);
            },2000)

      
        }
    }
}
</script>

