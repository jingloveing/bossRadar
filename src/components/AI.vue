<template>
    <div class="AI">
       <header>
            <router-link class="header-main flex" to="/card">
              <img src="../assets/card.png" alt="" class="photo">
              <div class="des flex">
                <div class="des-right">
                   <span class="name">姓名
                     <img src="../assets/girl.png" alt="" class="sex-icon">
                     <!--<img src="../assets/boy.png" alt="" class="sex-icon">-->
                   </span>
                  <span class="department">产品运营</span>
                  <span class="company">易呼智能科技有限公司</span>
                </div>
                <img src="../assets/big_right.png" alt="" class="right-icon">
              </div>
            </router-link>
       </header>
      <router-link class="flex card" to="/card">
        <div class="card-name">
          <img src="../assets/card.png" alt="" class="card-img">
          姓名的名片
        </div>
        <img src="../assets/s_right.png" alt="" class="s-right">
      </router-link>
      <tab :line-width=2 active-color='#1aa3dd' v-model="index" class="tabbar-box" custom-bar-width="80px">
        <tab-item class="vux-center tabbar" v-for="(item, index) in list"  :key="index" @on-item-click="tabClicks(index)">{{item}}</tab-item>
        <tab-item class="vux-center tabbar" @on-item-click="tabClicks(2)" style="position: relative;">{{tabValue}} <img src="../assets/down.png" alt="" class="down-icon">
            <div class="modal">
              <div v-for="(item,index) in tabData" @click.stop="modalClick(item)">{{item}}</div>
            </div>
        </tab-item>
      </tab>
      <div v-show="index==0  ">
        <div>
          <div class="flex radar-title">
            <span>当前综合值排名: <span class="num">1</span></span>
            <span>公司综合值排名: <span class="num">1</span></span>
          </div>
        </div>
        <div style="width: 100%;background: white;">
          <div class="bar">
            <div id="radar1" class="line">

            </div>

          </div>

        </div>
      </div>
      <div v-show="index==1">
        <div style="border-bottom: .42rem solid #f4f4f4;">
          <ul class="tab">
            <li v-for="(item,index) in tabList1" :class="tabSelect1==index?'selected':''" @click="tabSelect1=index">{{item}}</li>
          </ul>
          <ul class="list">
            <li><span><span class="circle circle1"></span><span v-text="tabSelect1==0?'客户总数':'新增客户总数'">客户总数</span></span><span>2443</span></li>
            <li><span><span class="circle circle2"></span>转发总数</span><span>232</span></li>
            <li><span><span class="circle circle3"></span>浏览总数</span><span>22</span></li>
            <li><span><span class="circle circle4"></span>保存总数</span><span>22</span></li>
            <li><span><span class="circle circle2"></span>跟进总数</span><span>22</span></li>
            <li><span><span class="circle circle5"></span>点赞总数</span><span>22</span></li>
          </ul>
        </div>
        <div style="width: 100%;background: white;border-bottom: .42rem solid #f4f4f4;">
          <div class="bar">
            <div class="title"><span class=""></span>预计成交率</div>

            <div class="rate">
              <ul>
                <li><span><span class="circle circle2"></span>≤50%</span><span class="right"><x-progress :percent="percent1" :show-cancel="false" class="progress"></x-progress><span>22</span></span></li>
                <li><span><span class="circle circle4"></span>≤80%</span><span class="right"><x-progress :percent="percent2" :show-cancel="false" class="progress"></x-progress><span>22</span></span></li>
                <li><span><span class="circle circle1"></span>≤99%</span><span class="right"><x-progress :percent="percent3" :show-cancel="false" class="progress"></x-progress><span>22</span></span></li>
                <li><span><span class="circle circle5"></span>≤100%</span><span class="right"><x-progress :percent="percent4" :show-cancel="false" class="progress"></x-progress><span>22</span></span></li>
              </ul>

            </div>
          </div>
        </div>
        <div style="width: 100%;background: white;border-bottom: .42rem solid #f4f4f4;">
          <div class="bar">
            <div class="title"><span class=""></span>客户兴趣</div>

            <div id="bar" class="line">

            </div>
            <ul class="pie-title">
              <li><span class="circle circle2"></span>对我感兴趣</li>
              <li><span class="circle circle1"></span>对产品感兴趣</li>
              <li><span class="circle circle4"></span>对公司感兴趣</li>
            </ul>
          </div>

        </div>
        <div style="width: 100%;background: white;border-bottom: .42rem solid #f4f4f4;">
          <div class="bar">
            <div class="title"><span class=""></span>近15日客户活跃度</div>
            <div class="line5-box">
              <div class="line5-title"><span>客户活跃度</span><span>2018-07</span></div>
              <div id="line5" class="line">

              </div>
            </div>
          </div>

        </div>

        <div style="width: 100%;background: white;">
          <div class="bar">
            <div class="title"><span class=""></span>客户与我的互动</div>
            <div id="line2" class="line">

            </div>
          </div>

        </div>



      </div>
      <div v-show="index==2">
          <div v-show="tabValue=='互动跟进'">
            <p class="timer">2018-7-24</p>
            <div class="list-boxs" v-for="(item,index) in ['1','2','3','3']">
              <img src="../assets/card.png" alt="" class="photos">
              <div style="margin:0 1.46rem 0 7rem;">
                <div class="list-bottom flex">
                 张小姐 保存了你的 <span class="type">电话</span>，留意一下TA吧。
                </div>
                <div>

                </div>
              </div>
            </div>
          </div>
          <div v-show="tabValue=='跟进'">
            <div class="list-boxs1" v-for="(item,index) in ['1','2','3','3']">
              <p class="list-boxs1-time"><span></span>2018/07/03 09:00</p>
              <p>客户有意向合作。</p>
            </div>
          </div>
      </div>
    </div>
</template>

<script>
  import { Tab, TabItem,XProgress} from 'vux'
  let echarts = require('echarts');
    export default {
        name: "AI",
      components:{
          Tab,
        TabItem,
        XProgress
      },
      data(){
          return{
            tabValue:'互动跟进',
            tabData:['互动跟进','跟进'],
             index:0,
            list:["雷达能力图","数据分析"],
            percent1:40,
            percent2:50,
            percent3:60,
            percent4:90,
            tabSelect:0,
            tabSelect3:0,
            tabSelect4:0,
            tabList1:["汇总","昨日","近7天","近30天"],
            tabSelect1:0,
          }
      },
      methods:{

        tabClicks(index){
          var self =this
          this.index=index
          if(index==0){
            echarts.init(document.getElementById('radar1')).resize();
            document.getElementsByClassName('modal')[0].style.display="none"
          }else if(index==1){
            echarts.init(document.getElementById('line2')).resize();
            echarts.init(document.getElementById('bar')).resize();
            echarts.init(document.getElementById('line5')).resize();
            document.getElementsByClassName('modal')[0].style.display="none"
          }else{
            document.getElementsByClassName('modal')[0].style.display="block"
          }

        },
        modalClick(item){
          this.tabValue=item
          document.getElementsByClassName('modal')[0].style.display="none"
        }
      },
      mounted:function(){
        this.$nextTick(function() {
          var self=this
          // 基于准备好的dom，初始化echarts实例(折线图2)
         var myChart2 = echarts.init(document.getElementById('line2'));
// 绘制图表
          myChart2.setOption({
            tooltip: {
              trigger: 'axis'
            },
            grid: {
              left: '0%',
              right: '3%',
              bottom: '5%',
              top:'13%',
              containLabel: true
            },
            xAxis: {
              type: 'category',
              boundaryGap: false,
              axisLine:{
                lineStyle:{
                  color:'#999'
                },
                textStyle:{
                  color:"#444"
                },
              },
              data: ['添加印象','保存电话','咨询产品','拨打电话','点赞','评论'],
              axisTick:{
                show:false
              },
              axisLabel:{
                interval:0
              }
            },
            yAxis: {
              type: 'value',
              axisLine:{
                lineStyle:{
                  color:'#999'
                },
                textStyle:{
                  color:"#444"
                },
              },
              splitLine:{
                show:false
              },
              axisTick:{
                show:false
              }
            },
            series: [
              {
                name:'邮件营销',
                type:'line',
                stack: '总量',
                data:[0.0, 0.2, 0.4, 0.6, 0.8, 1.0],
                itemStyle:{
                  normal:{
                    color:'#1aa3dd',
                    lineStyle:{
                      color:"#1aa3dd"
                    }
                  }
                }
              }
            ]
          });

          // 基于准备好的dom，初始化echarts实例(环形图)
         var myChart5= echarts.init(document.getElementById('bar'));
// 绘制图表
          myChart5.setOption({
            series : [
              {
                name: '访问来源',
                type: 'pie',
                radius : ['50%', '80%'],
                center: ['50%', '50%'],
                data:[
                  {
                    value:335,
                    name:'对我感兴趣',
                    itemStyle:{
                      normal:{color:'#ffbe85'}
                    }
                  },
                  {value:310,
                    name:'对产品感兴趣',
                    itemStyle:{
                      normal:{color:'#1aa3dd'}
                    }
                  },
                  {
                    value:234,
                    name:'对公司感兴趣',
                    itemStyle:{
                      normal:{color:'#ff85bb'}
                    }
                  },
                ],
                itemStyle: {
                  emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
                }
              }
            ]
          });
          // 基于准备好的dom，初始化echarts实例(折线图5)
         var myChart6 = echarts.init(document.getElementById('line5'));
// 绘制图表
          myChart6.setOption({
            tooltip: {
              trigger: 'axis'
            },
            grid: {
              left: '0',
              right: '8%',
              bottom: '5%',
              top:'6%',
              containLabel: true
            },
            xAxis: {
              type: 'category',
              // boundaryGap: false,
              // name:'日期',
              // nameLocation:'end',
              axisLine:{
                lineStyle:{
                  color:'rgba(255,255,255,.55)'
                },
                textStyle:{
                  color:"rgba(255,255,255,.55)"
                },
              },
              data: ['周一','周二','周三','周四','周五','周六','周日'],
              axisTick:{
                show:false
              }

            },
            yAxis: {
              type: 'value',
              axisLine:{
                lineStyle:{
                  color:'rgba(255,255,255,0)',
                  show:false
                },
                textStyle:{
                  color:"rgba(255,255,255,0)"
                },
              },
              splitLine:{
                lineStyle:{
                  color:'rgba(255,255,255,.55)'
                }
              }
            },
            series: [
              {
                name:'邮件营销',
                type:'line',
                stack: '总量',
                data:[120, 132, 101, 134, 90, 230, 210],
                itemStyle:{
                  normal:{
                    color:'rgba(255,255,255,1)',
                    label:{
                      show:true
                    },
                    lineStyle:{
                      color:"rgba(255,255,255,1)"
                    }
                  }
                }
              }
            ]
          });
          // 基于准备好的dom，初始化echarts实例(雷达图)
          var myChart7 = echarts.init(document.getElementById('radar1'));
// 绘制图表
          myChart7.setOption({
            polar : [
              {
                startAngle: 60,
                nameGap : 20, // 图中工艺等字距离图的距离
                splitNumber: 3,                     // (这里是圆的环数)指示器轴的分割段数。[ default: 5 ]
                center:['50%','50%'], // 图的位置
                name:{
                  show: true, // 是否显示工艺等文字
                },
                indicator : [
                  { name: '咨询产品', max: 190,color:"rgba(26,163,221,1)"},
                  { name: '评论', max: 285,color:"rgba(26,163,221,1)"},
                  { name: '添加印象', max: 178,color:"rgba(26,163,221,1)"},
                  { name: '拨打电话', max: 136,color:"rgba(26,163,221,1)"},
                  { name: '点赞', max: 25,color:"rgba(26,163,221,1)"},
                  { name: '保存电话', max: 125,color:"rgba(26,163,221,1)"}
                ],
                axisLine: {            // 坐标轴线
                  show: false        // 默认显示，属性show控制显示与否
                },
                splitArea : {
                  show : true,
                  areaStyle : {
                    color: ["white"]  // 图表背景网格的颜色
                  }
                },
                splitLine : {
                  show : true,
                  lineStyle : {
                    width : 1,
                    color : '#85e1ff' // 图表背景网格线的颜色
                  }
                }
              }
            ],
            series: [{
              type: 'radar',
              itemStyle:{
                normal:{
                  lineStyle:{
                    width:1
                  },
                  color:"#1aa3dd",
                }
              },
              data : [
                {
                  value : [24, 12, 50, 90, 11, 11],
                  areaStyle: {
                    normal: {
                      opacity:.55,
                      color: '#35bfef'
                    }
                  },
                  lineStyle: {
                    normal: {
                      color:'#1aa3dd'
                    }
                  },
                  label:{
                    normal: {
                      show: true,             // 单个拐点文本的样式设置。[ default: false ]
                      position: 'insideRight',        // 标签的位置。[ default: top ]
                      distance: 10,            // 距离图形元素的距离。当 position 为字符描述值（如 'top'、'insideRight'）时候有效。[ default: 5 ]
                      color: '#1aa3dd',          // 文字的颜色。如果设置为 'auto'，则为视觉映射得到的颜色，如系列色。[ default: "#fff" ]
                      fontSize: 10,           // 文字的字体大小
                      formatter:function(params) {
                        return params.value;
                      }
                    }
                  }
                }
              ]
            }]
          });
          window.onresize = function () {
              myChart7.resize();
              myChart5.resize();
              myChart6.resize();
              myChart2.resize();
          }
        })
      },
      created:function(){
          var self = this
      },

      destroyed(){

      }
    }
</script>

<style scoped>
  .vux-tab .tabbar.vux-tab-item{
    font-size:1.17rem;
    color:rgba(68,68,68,1);
  }


  .down-icon{
    width:0.63rem;
    height:0.42rem;
  }
header{
  width: 100%;
  opacity:0.99;
  background-image: url("../assets/bd_img.png");
  background-size: 100% ;
  background-repeat: no-repeat;
}
header:before{
  display: table;
  content: '';
}
  .header-main{
    margin: 2rem 1rem 0rem;
    border-radius: 4px;
    background: rgba(255,255,255,.65);
    height:12.38rem;
    box-shadow: 0px 0px .1rem .1rem rgba(242,242,242,.5);
  }
  .header-main .photo{
    width:7.45rem;
    height:7.45rem;
    border-radius: 50%;
    border: 2px solid white;
    margin: 0 2rem;
  }
  .right-icon{
    width: .63rem;
    height: 1.42rem;
    margin-right: 1.25rem;
  }
  .header-main .name{
    font-size:1.17rem;
    font-weight:400;
    color:rgba(68,68,68,1);
  }
  .department{
    font-size:1rem;
    font-weight:300;
    color:rgba(102,102,102,1);
  }
  .company{
    font-size:1rem;
    font-weight:300;
    color:rgba(102,102,102,1);
  }
  .des{
    width: calc(100% - 11rem);height: 7.45rem;
  }
  .sex-icon{
    width:0.83rem;
    height:0.88rem;
  }
  .des-right{
    flex-direction: column;height: 100%;
    display: flex;
    justify-content: space-between;
  }
  .card{
    height: 4.25rem;
    padding: 0 2rem;
    border-bottom: .42rem solid #f9f9f9;
  }
  .card-name{
    font-size:1rem;
    font-weight:300;
    color:rgba(34,34,34,1);
    display: flex;
    align-items: center;
  }
  .card-img{
    width:1.92rem;
    height:1.43rem;
    margin-right: 1rem;
  }
  .s-right{
    width: .5rem;
    height: .92rem ;
  }
  .radar-title{
    font-size:0.92rem;
    font-weight:300;
    color:rgba(68,68,68,1);
    height: 5.375rem;
    margin: 0 3rem;
  }
  .radar-title .num{
    color:rgba(26,163,221,1);
  }



.tab{
  text-align: center;
  margin: 25px 3.58rem .25rem;
  display: flex;
  justify-content: space-between;
}
.tab li{
  display: inline-block;
  border: 1px solid #999;
  width:4rem;
  height:1.38rem;
  line-height:1.38rem ;
  text-align: center;
  font-size:0.92rem;
  color:rgba(153,153,153,1);
  border-radius: 4px;
}
.tab .selected{
  background: #1aa3dd;
  color: white;
  border: 1px solid #1aa3dd;
}







.list{
  width: 100%;
  line-height: 4.166rem;
  font-size:1.17rem;
  color:rgba(85,85,85,1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap:wrap;
  padding: 0 .75rem;
  box-sizing: border-box;
  background: white;
  margin-bottom: .83rem;
}
.list li:nth-of-type(odd){
  padding-right: .9rem;
}
  .list li:nth-of-type(even){
    padding-left: .9rem;
  }
.list li{
  height: 4.166rem;
  width: 50%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.list li span:nth-of-type(even){
  color:rgba(68,68,68,1);
}
.circle{
  display: inline-block;
  border-radius: 50%;
  width: .5rem;
  height: .5rem;
  margin-right: 1rem;
}
.circle1{
  background: #1aa3dd;
}
.circle2{
  background: #ffbe85;
}
.circle3{
  background: #9985ff;
}
.circle4{
  background: #ff85bb;
}
.circle5{
  background: #85e1ff;
}
.bar{
  background: white;
  padding:1.67rem 0;
  margin: 0 1.25rem;
}
.title{
  font-size:1.17rem;
  color:rgba(34,34,34,1);
  display: flex;
  align-items: center;
}
.title span{
  display: inline-block;
  width: 2px;
  height: 1.04rem;
  background: #1aa3dd;
  margin-right: .833rem;
}
.rate {
  width: 100%;
  background-color: white;
  overflow: hidden;
  display: flex;
  align-items: center;
  font-size: 1rem;
  color: #444;
  margin-top: 1rem;
}
.rate ul{
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
}
.rate ul li{
  width: 100%;
  line-height: 2.6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.rate .right{
  width: 23rem;
  display: flex;
  align-items: center;
}
.rate .progress{
  width: 70%;
  display: inline-block;
  margin: 0 1rem;

}
.line{
  width: 100%;
  height: 17.08rem;
  overflow: hidden;
}


.pie-title{
  margin: 2rem 1rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size:0.92rem;
  color:rgba(68,68,68,1);
}
.pie-title li{
  display: inline-block;
  line-height: 2rem;
}
.line5-box{
  background: linear-gradient(top,#1abadd,#1aa3dd);
  border-radius: .71rem;
  margin-top: 20px;
}
.line5-title{
  width: 100%;
  line-height: 3.4rem;
  padding: 0 26px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size:0.92rem;
  color:rgba(255,255,255,1);
}


  .modal{
    position: absolute;z-index: 999;font-size:0.92rem;font-weight:300;color:rgba(255,255,255,1);background: #595959;
    top: 3.6rem;
    right: 1.6rem;
    width:7.5rem;
    height:3.67rem;
    text-align: center;
    display: none;
  }
  .modal div{
    line-height: 1.83rem;
    margin:0 1rem;
  }
  .modal div:nth-child(1){
    border-bottom: 1px solid white;
  }




  /*互动跟进样式*/
  .timer{
    font-size:0.92rem;
    font-weight:300;
    color:rgba(68,68,68,1);
    line-height: 2.25rem;
    margin-top: 1rem;
    text-align: center;
  }
  .list-boxs{
    height:5rem;
    margin: 2rem 1rem 1rem;
    background: white;
    position: relative;
    border-radius: 4px;
    box-shadow: 1px 1px 5px 2px #e9e9e9;
    display: flex;
    align-items: center;
  }
  .list-boxs1{
    height:5rem;
    margin: 1rem;
    background: white;
    border-radius: 4px;
    box-shadow: 1px 1px 5px 2px #e9e9e9;
    font-size:1.08rem;
    font-weight:300;
  }
  .list-boxs1 p{
    line-height: 2.5rem;
  }
  .list-boxs1 p:nth-child(2){
    margin-left: 2rem;
  }
  .list-boxs1-time{
    color:rgba(153,153,153,1);
  }
  .list-boxs1-time span{
    width: .54rem;
    height: .54rem;
    display: inline-block;
    background: #1aa3dd;
    border-radius: 50%;
    margin: 0 1rem;
  }
  .list-boxs1 p:nth-child(2){
    color:rgba(68,68,68,1);
  }
  .photos{
    position: absolute;
    width:4.17rem;
    height:4.17rem;
    left: 1.67rem;
    bottom: 1.5rem;
    border-radius: 50%;
  }
  .list-bottom{
    font-size:0.92rem;
    font-weight:300;
    color:rgba(68,68,68,1);
  }
  .list-bottom .type{
    color: #38aadf;
  }

</style>
<style>
  .AI .vux-tab-container{
    overflow:visible;
    height: 3.63rem;
  }
  .AI .vux-tab-wrap{
    height: 3.63rem;
    padding-top: 0;
  }
  .AI .vux-tab{
    height: 3.63rem;
  }
  .AI .vux-tab .vux-tab-item{
    line-height: 3.63rem;
  }
</style>


























































