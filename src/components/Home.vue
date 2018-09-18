<template>
  <div class="home">
     <div  class="search-box">
             <div class="search">
               <img src="../assets/search.png" alt="">搜索
             </div>
     </div>
    <div>
      <tab :line-width=2 active-color='#1aa3dd' v-model="index" class="tabbar-box" custom-bar-width="62px">
        <tab-item class="vux-center tabbar" v-for="(item, index) in list" @click="index = index" :key="index">{{item}}</tab-item>
      </tab>
      <!--<swiper v-model="index" height="100px" :show-dots="false">-->
        <!--<swiper-item v-for="(item, index) in list2" :key="index">-->
          <!--<div class="tab-swiper vux-center">{{item}} Container</div>-->
        <!--</swiper-item>-->
      <!--</swiper>-->
        <ul class="list">
          <li><span><span class="circle circle1"></span>客户数量</span><span>2443</span></li>
          <li><span><span class="circle circle2"></span>跟进客户数量</span><span>232</span></li>
          <li><span><span class="circle circle3"></span>被转发数量</span><span>22</span></li>
          <li><span><span class="circle circle4"></span>商城销售金额</span><span>22</span></li>
          <li><span><span class="circle circle2"></span>被保存数量</span><span>22</span></li>
          <li><span><span class="circle circle5"></span>商城订单数量</span><span>22</span></li>
          <li><span><span class="circle circle1"></span>被点赞数量</span><span>22</span></li>
          <li><span><span class="circle circle3"></span>浏览客户数量</span><span>22</span></li>
        </ul>
      <div style="width: 100%;background: white;">
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
      <div style="width: 100%;background: white;">
        <div class="bar">
          <div class="title"><span class=""></span>商城订单量与交易金额</div>
          <div style="position: relative;">
            <ul class="line-tab">
              <li v-for="(item,index) in tabList" :class="tabSelect==index?'selected':''" @click="tabSelect=index">{{item}}</li>
            </ul>
            <ul class="line-title">
              <li><span class="circle circle5"></span>商城订单</li>
              <li><span class="circle circle4"></span>交易金额</li>
            </ul>
          </div>
          <div id="line" class="line">

          </div>
        </div>

      </div>
      <div style="width: 100%;background: white;">
        <div class="bar">
          <div class="title"><span class=""></span>新增客户数量</div>
            <ul class="line-tab" style="margin-left: 0;width: 100%;text-align: center;">
              <li v-for="(item,index) in tabList" :class="tabSelect2==index?'selected':''" @click="tabSelect2=index">{{item}}</li>
            </ul>
          <div id="line2" class="line">

          </div>
        </div>

      </div>
      <div style="width: 100%;background: white;">
        <div class="bar">
          <div class="title"><span class=""></span>浏览客户数量</div>

            <ul class="line-tab" style="margin-left: 0;width: 100%;text-align: center;">
              <li v-for="(item,index) in tabList" :class="tabSelect3==index?'selected':''" @click="tabSelect3=index">{{item}}</li>
            </ul>

          <div id="line3" class="line">

          </div>
        </div>

      </div>
      <div style="width: 100%;background: white;">
        <div class="bar">
          <div class="title"><span class=""></span>跟进客户数量</div>

            <ul class="line-tab" style="margin-left: 0;width: 100%;text-align: center;">
              <li v-for="(item,index) in tabList" :class="tabSelect4==index?'selected':''" @click="tabSelect4=index">{{item}}</li>
            </ul>

          <div id="line4" class="line">

          </div>
        </div>

      </div>
      <div style="width: 100%;background: white;">
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
      <div style="width: 100%;background: white;">
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
          <div class="title"><span class=""></span>互动统计</div>

          <div id="radar" class="line">

          </div>

        </div>

      </div>
    </div>
  </div>
</template>
<script>
  import { Tab, TabItem ,Swiper, SwiperItem,XProgress } from 'vux'
  let echarts = require('echarts');
  const list = () => ['汇总', '昨日', '本周', '本月']
  export default {
    name: 'Home',
    components: {
      Tab,
      TabItem,
      Swiper,
      SwiperItem,
      XProgress
    },
    data() {
      return {
        list: list(),
        index: 0,
        percent1:40,
        percent2:50,
        percent3:60,
        percent4:90,
        tabList:["近7天","近15天","近30天"],
        tabSelect:0,
      tabSelect2:0,
        tabSelect3:0,
        tabSelect4:0,
      }
    },
    methods: {

    },
    mounted: function () {
      this.$nextTick(function() {
        // 基于准备好的dom，初始化echarts实例(折线图1)
        var myChart = echarts.init(document.getElementById('line'));
// 绘制图表
        myChart.setOption({
          tooltip: {
            trigger: 'axis'
          },
          grid: {
            left: '5%',
            right: '5%',
            bottom: '5%',
            top:'13%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            // boundaryGap: false,
            axisLine:{
              lineStyle:{
                color:'#999'
              },
              textStyle:{
                color:"#444"
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
              data:[120, 132, 101, 134, 90, 230, 210],
              itemStyle:{
                normal:{
                  color:'#ff85bb',
                  lineStyle:{
                    color:"#ff85bb"
                  }
                }
              }
            },
            {
              name:'联盟广告',
              type:'line',
              stack: '总量',
              data:[220, 182, 191, 234, 290, 330, 310],
              itemStyle:{
                normal:{
                  color:'#85e1ff',
                  lineStyle:{
                    color:"#85e1ff"
                  }
                }
              }
            }
          ]
        });
        // 基于准备好的dom，初始化echarts实例(折线图2)
        var myChart2 = echarts.init(document.getElementById('line2'));
// 绘制图表
        myChart2.setOption({
          tooltip: {
            trigger: 'axis'
          },
          grid: {
            left: '5%',
            right: '5%',
            bottom: '5%',
            top:'13%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            // boundaryGap: false,
            axisLine:{
              lineStyle:{
                color:'#999'
              },
              textStyle:{
                color:"#444"
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
              data:[120, 132, 101, 134, 90, 230, 210],
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
        // 基于准备好的dom，初始化echarts实例(折线图3)
        var myChart3 = echarts.init(document.getElementById('line3'));
// 绘制图表
        myChart3.setOption({
          tooltip: {
            trigger: 'axis'
          },
          grid: {
            left: '5%',
            right: '5%',
            bottom: '5%',
            top:'13%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            // boundaryGap: false,
            axisLine:{
              lineStyle:{
                color:'#999'
              },
              textStyle:{
                color:"#444"
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
              data:[120, 132, 101, 134, 90, 230, 210],
              itemStyle:{
                normal:{
                  color:'#9985ff',
                  lineStyle:{
                    color:"#9985ff"
                  }
                }
              }
            }
          ]
        });
        // 基于准备好的dom，初始化echarts实例(折线图4)
        var myChart4 = echarts.init(document.getElementById('line4'));
// 绘制图表
        myChart4.setOption({
          tooltip: {
            trigger: 'axis'
          },
          grid: {
            left: '5%',
            right: '5%',
            bottom: '5%',
            top:'13%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            // boundaryGap: false,
            axisLine:{
              lineStyle:{
                color:'#999'
              },
              textStyle:{
                color:"#444"
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
              data:[120, 132, 101, 134, 90, 230, 210],
              itemStyle:{
                normal:{
                  color:'#ffbe85',
                  lineStyle:{
                    color:"#ffbe85"
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
            axisLine:{
              lineStyle:{
                color:'rgba(255,255,255,.55)'
              },
              textStyle:{
                color:"rgba(255,255,255,.55)"
              },
            },
            data: ['周一','周二','周三','周四','周五','周六','周日']
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
        var myChart7 = echarts.init(document.getElementById('radar'));
// 绘制图表
        myChart7.setOption({
          polar : [
            {
              startAngle: 60,
              nameGap : 5, // 图中工艺等字距离图的距离
              splitNumber: 3,                     // (这里是圆的环数)指示器轴的分割段数。[ default: 5 ]
              center:['50%','50%'], // 图的位置
              name:{
                show: true, // 是否显示工艺等文字
                // formatter: null, // 工艺等文字的显示形式
                textStyle: {
                  color:'rgba(0,0,0,1)' // 工艺等文字颜色
                }
              },
              indicator : [
                { name: '咨询产品', max: 190,color:"rgba(0,0,0,1)"},
                { name: '评论', max: 285,color:"rgba(0,0,0,1)"},
                { name: '添加印象', max: 178,color:"rgba(0,0,0,1)"},
                { name: '拨打电话', max: 136,color:"rgba(0,0,0,1)"},
                { name: '点赞', max: 25,color:"rgba(0,0,0,1)"},
                { name: '保存电话', max: 125,color:"rgba(0,0,0,1)"}
              ],
              axisLine: {            // 坐标轴线
                show: false        // 默认显示，属性show控制显示与否
              },
              axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
                show: false,
                textStyle: {
                  color: 'rgba(0,0,0,1)' // 坐标轴刻度文字的样式
                }
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
        // 自适应
        window.onresize = function () {
          myChart.resize();
          myChart2.resize();
          myChart3.resize();
          myChart4.resize();
          myChart5.resize();
          myChart6.resize();
          myChart7.resize();
        }
      })
    },
    created: function(){

    }
  }
</script>
<style scoped>
  .home{
    background: #f9f9f9;
  }
.search-box{
  width: 100%;
  height:2.88rem;
  background: #f9f9f9;
  padding: .416rem 1.25rem;
  box-sizing: border-box;
}
  .search{
    width: 100%;
    height: 100%;
    background: white;
    border-radius: 4px;
    font-size:1rem;
    color:rgba(153,153,153,1);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .search img{
    width:1.04rem;
    height:1.04rem;
    margin-right: 1rem;
  }
.vux-tab .tabbar.vux-tab-item{
  font-size:1.17rem;
  color:rgba(34,34,34,1);
}
.home .tabbar-box {
  padding-top:3.33rem;
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
    border-right: 1px solid #e9e9e9;
  }
  .list li:nth-of-type(even){
    padding-left: .9rem;
  }
  .list li:last-child{
    border-bottom: none;
  }
  .list li:nth-child(7){
    border-bottom: none;
  }
  .list li{
    height: 4.166rem;
    width: 50%;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e9e9e9;
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
  border-bottom: 1px solid #e9e9e9;
}
.bar:last-child{
  border: none;
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
  .line-title{
    position: absolute;
    right: 2rem;
    top: 0;
    font-size:0.92rem;
    color:rgba(68,68,68,1);
  }
  .line-title li{
    margin-bottom: 4px;
  }
  .line-tab{
    display: inline-block;
    margin-top: 15px;
    margin-left: 50px;
  }
  .line-tab li{
    display: inline-block;
    border: 1px solid #999;
    width:4.4rem;
    height:1.8rem;
    line-height:1.8rem ;
    text-align: center;
    font-size:1.15rem;
    color:rgba(153,153,153,1);
    border-radius: 4px;
    margin-right: 10px;
  }
.line-tab .selected{
    background: #1aa3dd;
    color: white;
    border: 1px solid #1aa3dd;
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
</style>
<style>
  .home .vux-tab-container{
    height: 3.33rem;
  }
  .home .vux-tab{
    height: 3.33rem;
  }
  .progress .weui-progress__bar{
    height: 1.3rem;
  }
  .rate li:nth-child(1) .weui-progress__inner-bar{
    background: #ffbe85;
  }
  .rate li:nth-child(2) .weui-progress__inner-bar{
    background: #ff85bb;
  }
  .rate li:nth-child(3) .weui-progress__inner-bar{
    background: #1aa3dd;
  }
  .rate li:nth-child(4) .weui-progress__inner-bar{
    background: #85e1ff;
  }
</style>














