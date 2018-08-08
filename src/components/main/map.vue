<style scoped>
    .map{
        background: #F6F7FC;  
        padding-top: 30px;
        position: relative;
    }
    .map h2{
        font-weight: normal;
        text-align: center;
        font-size:3rem;
        padding: 0 0 2rem; 
        margin: 0;
    }
    .map_img{
        max-width: 1000px;
        margin: auto;
    }
     .map_img img{
        width:100%;
        display: block;
     }
    .bg{
        width:100%;
        height: 160px;
        margin-top: -160px;
        background: #fff;
    }
    #card{
        position: absolute;
        top: 23%;
        right: 18vw;
        width: 20rem;
    }
    #card li{
        margin: 1rem auto;
    }
    #card button{
        cursor: pointer;
        width:15rem;
        padding: .9rem 0;
        border:none;
        color: #fff;
        font-size: 1.8rem;
        font-weight: lighter;
        box-shadow:0px 2px 2px #8C8C8C;
        outline: none;
    }
    #card .card_btn1{
        background: #FFA1A1;
    }
    #card .card_btn2{
        background: #CFA7FF;
    }
    #card .card_btn3{
        background: #89DEFF;
    }
    #card .card_btn4{
        background: #67E9BF;
    }
    #card p{
        color: #666;
        padding: 0 1rem;
        font-size: 1rem;
    }

</style>
<template>
    <div class="map">
        <h2>服务承诺</h2>
        <el-row>
            <el-col :span="10" :offset="6"><div class="map_img"> <img src="static/map.svg"></div></el-col>
            <div id="card">
                <ul>
                    <li>
                        <button @click="card_index=1" class="card_btn1">广泛的服务范围</button>
                        <p v-show="card_index==1">派智在全国拥有多处服务地点，可随时为您服务。</p>
                    </li>
                    <li>
                        <button  @click="card_index=2" class="card_btn2">竞业禁止</button>
                        <p v-show="card_index==2">平台承诺不直接开展业务<br>客户属地绑定，产生的所有业务均属于合伙人。</p>
                    </li>
                    <li>
                        <button  @click="card_index=3" class="card_btn3">数据保障</button>
                        <p v-show="card_index==3">业务数据云端储存，随时查看下载。</p>
                    </li>
                    <li>
                        <button  @click="card_index=4" class="card_btn4">品质保障</button>
                        <p v-show="card_index==4">资深专家高效撰写，快速派案，多重审核</p>
                    </li>
                </ul>
            </div>     
        </el-row>
        <div class="bg"></div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            card_index:1
        }
    }
}
</script>
