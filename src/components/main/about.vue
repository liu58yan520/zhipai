<style scoped>

.pros{
    text-align: center;
    display: flex;
    justify-content: space-around;
    font-size: 2rem;
    color:#999;
    border-bottom: 1px solid #eee;
}
.pros::after{
    content: " ";
    display: block;
    position: absolute;
    left: 0; right: 0;
    top: 0rem;
    margin: auto;
    width: 1px;
    height: 4rem;
    background: #eee;
}
.item{
    cursor: pointer;
    padding-bottom: 15px;
   
}
.item.active{
     border-bottom: 4px solid #24A1F5;
}

.pros h3{
    font-size: 2.2rem;
    color: #333;
    padding: 0;
    line-height: 1rem;
    margin: 0;
}
.pros p{
    margin-bottom: 0;
    font-size: 1.1rem;
}
.content{
    margin: 2rem auto;
}
.contact{
    position: absolute;
    right: 100px;
    top:-10px;
}
.contact .contact_alert{
    position: absolute;
    top: 5px;
    right: 50px;
}
.contact a{
    display: block;
    cursor: pointer;
}
.adv,.service{
    text-align: center;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}

.service{
    text-align: left;
}
.service hr{
    height: 2px;
    background: #ddd;
    margin: 0;
    border:0;
    padding: 0;
    width:50%;
}
.service .service_item{
    width:30%;
    position: relative;
}
.service h3{
    font-size: 2rem;
    color: #333;
    text-decoration: none;
    font-weight: 500;
}

.service .service_item img{
    margin:6rem auto ;
    display: block;
}
.service .service_item p{
    padding-right: 6rem;
    color: #666;
}
.service .service_item::after{
    content: "";
    background: #eee;
    position: absolute;
    right: 0;
    top: 0;
    width:1px;
    height: 70%;
}
.service .service_item:last-child::after{
    content: none;
}
.adv_item{
    width: 33.33%;
    padding-bottom: 15px;
    position: relative;
}
.adv_item h3{
    font-size: 2.2rem;
    font-weight: normal;
    color: #333;
    padding: .5rem 0;
}
.adv_item p{
    font-size: 1.8rem;
    color: #666;
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
            <el-col :span="8" :offset="8">
                <div class="pros">
                    <div class="item" :class="tap1" @click="tap(1)">
                        <h3>服务介绍</h3>
                        <p>派智平台的具体服务</p>
                    </div>
                    <div class="item"  :class="tap2" @click="tap(2)">
                        <h3>服务介绍</h3>
                        <p>派智平台的具体服务</p>
                    </div>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="16" :offset="4">
                <div class="content">
                    <div class="contact">
                        <ul>
                            <li><a href="#"><img src="static/qq.png"></a></li>
                            <li><a href="http://baidu.com"><img src="static/wx.png"></a></li>
                            <li><a href="#"><img src="static/tel.png"></a></li>
                        </ul>
                        <img src="static/contact_alert.png" class="contact_alert">
                    </div>
                    <div v-if="tap1=='active'">
                        <div class="service">
                            <div class="service_item">
                                <img src="static/service1.png" alt="">
                                <h3>专利代理服务</h3>
                                <hr>
                                <div class="text">
                                    <p>对于合伙人不能自行撰写的案件，派智提供专业的代理人团队进行撰稿服务。</p>
                                    <p>年处理案件能力超过1万件。</p>
                                    <p>标准化业务撰稿要求，全过程质量管理，费用透明</p>
                                </div>
                            </div> 
                            <div class="service_item">
                                <img src="static/service1.png" alt="">
                                <h3>专利代理服务</h3>
                                <hr>
                                <div class="text">
                                    <p>对于合伙人不能自行撰写的案件，派智提供专业的代理人团队进行撰稿服务。</p>
                                    <p>年处理案件能力超过1万件。</p>
                                    <p>标准化业务撰稿要求，全过程质量管理，费用透明</p>
                                </div>
                            </div> 
                            <div class="service_item">
                                <img src="static/service1.png" alt="">
                                <h3>专利代理服务</h3>
                                <hr>
                                <div class="text">
                                    <p>对于合伙人不能自行撰写的案件，派智提供专业的代理人团队进行撰稿服务。</p>
                                    <p>年处理案件能力超过1万件。</p>
                                    <p>标准化业务撰稿要求，全过程质量管理，费用透明</p>
                                </div>
                            </div> 
                        </div>
                    </div>
                    <div v-if="tap2=='active'">
                        <div class="adv">
                            <div class="adv_item">
                                <img src="static/adv1.png" alt="">
                                <h3>greagae</h3>
                                <p>rgaergaergeargearg</p>
                            </div>
                            <div class="adv_item">
                                <img src="static/adv1.png" alt="">
                                <h3>greagae</h3>
                                <p>rgaergaergeargearg</p>
                            </div>
                            <div class="adv_item">
                                <img src="static/adv1.png" alt="">
                                <h3>greagae</h3>
                                <p>rgaergaergeargearg</p>
                            </div>
                            <div class="adv_item">
                                <img src="static/adv1.png" alt="">
                                <h3>greagae</h3>
                                <p>rgaergaergeargearg</p>
                            </div>
                            <div class="adv_item">
                                <img src="static/adv1.png" alt="">
                                <h3>greagae</h3>
                                <p>rgaergaergeargearg</p>
                            </div>
                            <div class="adv_item">
                                <img src="static/adv1.png" alt="">
                                <h3>greagae</h3>
                                <p>rgaergaergeargearg</p>
                            </div>
                        </div>
                    </div>

                </div>
            </el-col>
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
              this.tap1='active'
              this.tap2=''
          }else{
             this.tap2='active'
             this.tap1=''   
          }
          
      }

    },

  };
</script>