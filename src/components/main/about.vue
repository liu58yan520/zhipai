<style scoped>

.pros{
    text-align: center;
    display: flex;
    justify-content: space-around;
    font-size: 2rem;
    color:#999;
    border-bottom: 1px solid #eee;
    text-align: center;
    max-width: 1200px;
}
.pros::after{
    content: " ";
    display: block;
    position: absolute;
    left: 0; right: 0;
    top: 0;
    margin: auto;
    width: 1px;
    height: 5.5rem;
    background: #eee;
}
.item{
    cursor: pointer;
    padding-bottom: 15px;
    position: relative;
}

/* .item::after{
    content: "";
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    width:0;
    height: 3px;
    background: #24A1F5;
}
.item.active::after{
    transition: width 1s;
    width:100%;
} */
.pros h3{
    font-size: 2.5rem;
    color: #333;
    padding: 0;
    line-height: 1rem;
    margin: 0;
    font-weight: normal;
}
.pros p{
    margin-bottom: 0;
    font-size: 1.1rem;
    padding: 10px 0 15px;
}
.content{
    margin: 2rem auto;
    max-width: 1100px;
}
.contact{
    position: fixed;
    right: 20px;
    top:30%;
    z-index: 99;
}
.contact .contact_tel{
    position: absolute;
    top:120px;
    right: 50px;
    display: none;
}
.contact .contact_wx{
    position: absolute;
    top:80px;
    right: 60px;
    display: none;
}
.contact .contact_qq{
    position: absolute;
    top:30px;
    right: 50px;
    display: none;
}
.contact li:nth-child(1):hover .contact_qq{
    display: block;
}
.contact li:nth-child(2):hover .contact_wx{
    display: block;
}
.contact li:nth-child(3):hover .contact_tel{
    display: block;
}
.contact a{
    display: block;
    cursor: pointer;
    background: #24A1F5;
    width: 50px;
    margin-bottom: 5px;
    padding: 5px;
    box-sizing: border-box;
}
.contact a:hover{
    background: #0062A4;
}
.contact a img{
    width: 100%;
}
.adv,.service{
    text-align: center;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}

.service{
    text-align: left;
    padding: 20px 0;
}
.service hr{
    height: 1px;
    background: #ddd;
    margin: 0;
    border:0;
    padding: 0;
    width:80%;
}
.service .service_item{
    width:30%;
    position: relative;
}
.service h3{
    font-size: 2.2rem;
    color: #333;
    text-decoration: none;
    font-weight: 500;
}

.service .service_item img{
    margin:6rem auto ;
    display: block;
}
.service .service_item p{
    padding-right: 1.5rem;
    color: #888;
    font-size: 14px;
}
.service .service_item::after{
    content: "";
    background: #eee;
    position: absolute;
    right: 0;
    top: 0;
    width:1px;
    height: 100%;
}
.service .service_item:last-child::after{
    content: none;
}
.adv_item{
    width: 33.33%;
    padding: 2rem 0 15px;
    position: relative;
}
.adv_item h3{
    font-size: 2.2rem;
    font-weight: normal;
    color: #333;
    padding: .5rem 0;
}
.adv_item p{
    font-size: 14px;
    color: #888;
}

.adv_item::after{
    content: "";
    display: block;
    background: #eee;
    width: 1px;
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
}
.adv_item:nth-child(3)::after,.adv_item:nth-child(6)::after{
    content: none;
}

.adv_item::before{
    content: "";
    display: block;
    background: #eee;
    width: 100%;
    height: 1px;
    position: absolute;
    bottom: 0;
}
.adv_item:nth-child(n+4)::before{
    content:none;
}


</style>

<template>
    <div class="about">
        <el-row>
            <el-col :span="14" :offset="5">
                <div class="pros">
                    <div class="item" :class="tap1" @click="tap(1)">
                        <h3>服务介绍</h3>
                        <p>派智平台的具体服务</p>
                    </div>
                    <div class="item"  :class="tap2" @click="tap(2)" >
                        <h3>智享优势</h3>
                        <p>派智平台的平台优势</p>
                    </div>
                </div>
                <div class="heng"><i></i></div>
            </el-col>
        </el-row>
        <el-row>
          
                <div class="content">
                    <div class="contact">
                        <ul>
                            <li><a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=2096345456&site=qq&menu=yes"><img src="static/qq.svg"></a><img src="static/contact_qq.svg" class="contact_qq"></li>
                            <li><a href="#"><img src="static/wx.svg"></a> <img src="static/ewm.png" class="contact_wx"></li>
                            <li><a href="#"><img src="static/tel.svg"></a><img src="static/contact_tel.svg" class="contact_tel"></li>
                        </ul>
                        
                    </div>
                    <div v-if="tap1=='active'">
                        <div class="service">
                            <div class="service_item">
                                <img src="static/service1.svg" alt="">
                                <h3>专利代理服务</h3>
                                <hr>
                                <div class="text">
                                    <p>对于合伙人不能自行撰写的案件，派智提供专业的代理人团队进行撰稿服务。</p>
                                    <p>年处理案件能力超过1万件。</p>
                                    <p>标准化业务撰稿要求，全过程质量管理，费用透明</p>
                                </div>
                            </div> 
                            <div class="service_item">
                                <img src="static/service2.svg" alt="">
                                <h3>流程智能托管</h3>
                                <hr>
                                <div class="text">
                                    <p>为合伙人提供知识产权业务的全流程托管。</p>
                                    <p>专业的流程管理团队，提供专岗专人的流程服务。</p>
                                    <p>云端案件处理平台，可以提供立案、进度查询、费用查询查询等各项服务。</p>
                                </div>
                            </div> 
                            <div class="service_item">
                                <img src="static/service3.svg" alt="">
                                <h3>合规完善的资质</h3>
                                <hr>
                                <div class="text">
                                    <p>提供国家认证的专利代理正规资质。</p>
                                    <p>帮助合伙人合规承接业务，告别黑代理。</p>
                                </div>
                            </div> 
                        </div>
                    </div>
                    <div v-if="tap2=='active'">
                        <div class="adv">
                            <div class="adv_item">
                                <img src="static/adv1.svg" alt="">
                                <h3>一站式的服务</h3>
                                <p>代理人，服务资质，流程管理一步掌握。</p>
                            </div>
                            <div class="adv_item">
                                <img src="static/adv2.svg" alt="">
                                <h3>拓宽业务范围</h3>
                                <p>专利、版权、商标，赚钱的业务一项都不能少。</p>
                            </div>
                            <div class="adv_item">
                                <img src="static/adv3.svg" alt="">
                                <h3>价格优势</h3>
                                <p>一键对接代理人，拒绝中间商赚差价。</p>
                            </div>
                            <div class="adv_item">
                                <img src="static/adv4.svg" alt="">
                                <h3>案件实时跟踪</h3>
                                <p>智能贴身管家，实时提醒案件进度。</p>
                            </div>
                            <div class="adv_item">
                                <img src="static/adv5.svg" alt="">
                                <h3>高效品质服务</h3>
                                <p>平台监管，妈妈再也不用担心我弄丢代理人啦。</p>
                            </div>
                            <div class="adv_item">
                                <img src="static/adv6.svg" alt="">
                                <h3>透明服务</h3>
                                <p>随时查询账户资金，让每笔支出都有迹可循。</p>
                            </div>
                        </div>
                    </div>

                </div>
         
        </el-row>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        tap1:'active',
        tap2:'',
      };
    },
    methods: {
      tap(index){
          if(index=='1'){
              document.querySelectorAll('.about .pros .item h3')[0].style.color="#24A1F5"
              document.querySelectorAll('.about .pros .item h3')[1].style.color="#000"
              this.tap1='active'
              this.tap2=''
          }else{
              document.querySelectorAll('.about .pros .item h3')[1].style.color="#24A1F5"
              document.querySelectorAll('.about .pros .item h3')[0].style.color="#000"
             this.tap2='active'
             this.tap1=''   
          }
          
      }

    },

  };
</script>