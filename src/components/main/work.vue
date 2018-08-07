<style>
.work{
    background:url(/static/bolang.png) no-repeat;
    background-position:bottom;
    background-size: contain;
    position: relative;
}
.work h2{
    font-size: 3rem;
    padding: 1rem;
    text-align: center;
    font-weight: normal;
}
.work .content{
    max-width: 1200px;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
.work_item{
    width: 25%;
    padding-bottom: 15px;
    position: relative;
}
.work_item img{
    display: block;
    margin: 3rem auto 0;
    width:30%;
}
.work_item h3{
    text-align: center;
    font-size: 2rem;
    font-weight: normal;
    color: #333;
    padding: .5rem 0;
}
.work_item p{
    font-size: 1.5rem;
    color: #666;
    padding: 0 2rem;
}
.work_item::after{
    content: "";
    display: block;
    background: #eee;
    width: 1px;
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
}
.work_item:nth-child(4)::after,.work_item:nth-child(8)::after{
    content: none;
}
.work_item::before{
    content: "";
    display: block;
    background: #eee;
    width: 100%;
    height: 1px;
    position: absolute;
    bottom: 0;
}
.work_item:nth-child(n+5)::before{
    content:none;
}
.work .bottom{
    height: 12rem;
    width: 100%;
    position: relative;
}
.work .bottom button{
    width: 13rem;
    height: 3rem;
    line-height: 3rem;
    border:none;
    background: #24A1F5;
    color: #fff;
    position: absolute;
    display: block;
    border-radius: 3px;
    box-shadow:0px 4px 13px #8C8C8C;
    cursor: pointer;
    left: 0;right: 0;
    bottom: 20%;
    margin: auto;
}
.liucheng{
    background: #110F21;
    width:100%;
}
.liucheng img{
    display: block;
    margin: auto;
    max-width: 1200px;
}
</style>
<template>
    <div class="work_liucheng">
        <div class="work">
            <h2>主要业务</h2>
            <div class="content">
                <div class="work_item">
                    <img src="static/work1.png">
                    <h3>申请专利</h3>
                    <p>包含发明专利，实用新型专利，外观专利的申请。</p>
                </div>
                <div class="work_item">
                    <img src="static/work2.png">
                    <h3>特殊领域</h3>
                    <p>包含发明专利，实用新型专利，外观专利的申请。</p>
                </div>
                <div class="work_item">
                    <img src="static/work3.png">
                    <h3>加快审查</h3>
                    <p>包含发明专利，实用新型专利，外观专利的申请。</p>
                </div>
                <div class="work_item">
                    <img src="static/work4.png">
                    <h3>智能递交</h3>
                    <p>包含发明专利，实用新型专利，外观专利的申请。</p>
                </div>
                <div class="work_item">
                    <img src="static/work5.png">
                    <h3>挖掘撰写</h3>
                    <p>包含发明专利，实用新型专利，外观专利的申请。</p>
                </div>
                <div class="work_item">
                    <img src="static/work6.png">
                    <h3>授权担保 </h3>
                    <p>包含发明专利，实用新型专利，外观专利的申请。</p>
                </div>
                <div class="work_item">
                    <img src="static/work7.png">
                    <h3>作品登记</h3>
                    <p>包含发明专利，实用新型专利，外观专利的申请。</p>
                </div>
                <div class="work_item">
                    <img src="static/work8.png">
                    <h3>加强保护</h3>
                    <p>包含发明专利，实用新型专利，外观专利的申请。</p>
                </div>
            </div>
            <div class="bottom">
                <button>了解更多</button>
            </div>
        </div>
        <div class="liucheng">
            <img src="static/liucheng.png" alt="">
        </div>
    </div>
</template>
