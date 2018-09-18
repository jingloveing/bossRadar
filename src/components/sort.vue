<template>
    <div class="sort">
      <tab :line-width=2 active-color='#1aa3dd' v-model="index" class="tabbar-box" custom-bar-width="80px">
        <tab-item class="vux-center tabbar" v-for="(item, index) in list" @click="index = index" :key="index">{{item}}</tab-item>
      </tab>
      <div v-show="index==0" style="overflow: hidden">
        <ul class="tab">
          <li v-for="(item,index) in tabList" :class="tabSelect==index?'selected':''" @click="tabSelect=index">{{item}}</li>
        </ul>
        <div class="list">
          <router-link to="/allCustom" class="list-item" v-for="(item,index) in listData" :key="item">
            <div class="left">
              <div>
                <img src="../assets/num1.png" alt="" class="num-img" v-show="index==0">
                <img src="../assets/num2.png" alt="" class="num-img" v-show="index==1">
                <img src="../assets/num3.png" alt="" class="num-img" v-show="index==2">
                <span class="num-img num" v-show="index>2">{{index+1}}</span>
              </div>
              <div class="photo-box" :class="index==0?'photo-box1':(index==1?'photo-box2':'')">
                <img src="../assets/card.png" alt="" class="photo">
              </div>
              <span class="name">张某某张某某张某某</span>
            </div>
            <div class="right">
              <span>22单</span>
              <span class="dian"></span>
              <span>￥1312</span>
            </div>
          </router-link>
        </div>
      </div>
      <div v-show="index==1" style="overflow: hidden">
        <div>
          <ul class="tab2">
            <li v-for="(item,index) in tabList2" :class="tabSelect2==index?'selected2':''" @click="tabSelect2=index">{{item}}</li>
          </ul>
        </div>
        <ul class="tab tabs" v-show="tabSelect2==1">
          <li v-for="(item,index) in tabList3" :class="tabSelect3==index?'selected':''" @click="tabSelect3=index">{{item}}</li>
        </ul>
        <div class="list">
          <router-link to="/allCustom" class="list-item" v-for="(item,index) in listData" :key="item">
            <div class="left">
              <div>
                <img src="../assets/num1.png" alt="" class="num-img" v-show="index==0">
                <img src="../assets/num2.png" alt="" class="num-img" v-show="index==1">
                <img src="../assets/num3.png" alt="" class="num-img" v-show="index==2">
                <span class="num-img num" v-show="index>2">{{index+1}}</span>
              </div>
              <div class="photo-box" :class="index==0?'photo-box1':(index==1?'photo-box2':'')">
                <img src="../assets/card.png" alt="" class="photo">
              </div>
              <span class="name">张某某张某某张某某</span>
            </div>
            <div class="right">
              <span style="color: #1aa3dd">22</span>
            </div>
          </router-link>
        </div>
      </div>
      <div v-show="index==2" style="overflow: hidden">
        <div>
          <ul class="tab2">
            <li v-for="(item,index) in tabList4" :class="tabSelect4==index?'selected2':''" @click="tabSelect4=index">{{item}}</li>
          </ul>
        </div>
        <ul class="tab tabs" v-show="tabSelect4==1">
        <li v-for="(item,index) in tabList3" :class="tabSelect5==index?'selected':''" @click="tabSelect5=index">{{item}}</li>
      </ul>
        <div class="list">
          <router-link to="/allCustom" class="list-item" v-for="(item,index) in listData" :key="item">
            <div class="left">
              <div>
                <img src="../assets/num1.png" alt="" class="num-img" v-show="index==0">
                <img src="../assets/num2.png" alt="" class="num-img" v-show="index==1">
                <img src="../assets/num3.png" alt="" class="num-img" v-show="index==2">
                <span class="num-img num" v-show="index>2">{{index+1}}</span>
              </div>
              <div class="photo-box" :class="index==0?'photo-box1':(index==1?'photo-box2':'')">
                <img src="../assets/card.png" alt="" class="photo">
              </div>
              <span class="name">张某某张某某张某某</span>
            </div>
            <div class="right">
              <span style="color: #1aa3dd">22</span>
            </div>
          </router-link>
        </div>
      </div>
      <div v-show="index==3" style="overflow: hidden">
        <ul class="tab">
          <li v-for="(item,index) in tabList6" :class="tabSelect6==index?'selected':''" @click="tabSelect6=index" style="width: 5rem;">{{item}}</li>
        </ul>
        <div class="list">
          <router-link to="/allCustom" class="list-item" v-for="(item,index) in listData" :key="item">
            <div class="left">
              <div>
                <img src="../assets/num1.png" alt="" class="num-img" v-show="index==0">
                <img src="../assets/num2.png" alt="" class="num-img" v-show="index==1">
                <img src="../assets/num3.png" alt="" class="num-img" v-show="index==2">
                <span class="num-img num" v-show="index>2">{{index+1}}</span>
              </div>
              <div class="photo-box" :class="index==0?'photo-box1':(index==1?'photo-box2':'')">
                <img src="../assets/photo.jpg" alt="" class="photo">
              </div>
              <span class="name">张某某张某某张某某</span>
            </div>
            <div class="right">
              <span style="color: #1aa3dd">22</span>
            </div>
          </router-link>
        </div>
      </div>
    </div>
</template>

<script>
  import { Tab, TabItem } from 'vux'
  const list = () => ['按订单量', '按客户人数', '按互动频率', '按成交率']
    export default {
        name: "sort",
      components: {
        Tab,
        TabItem
      },
      data(){
          return{
            list:list(),
            index:0,
            tabList:["全部","近7天","近15天","近30天"],
            tabSelect:0,
            tabList2:["客户总数","新增客户"],
            tabSelect2:0,
            tabList3:["昨日","近7天","近15天","近30天"],
            tabSelect3:0,
            tabList4:["跟进总数","咨询总数"],
            tabSelect4:0,
            tabSelect5:0,
            tabList6:["1%~50%","51%~80%","81%~99%","100%"],
            tabSelect6:0,
            listData:[1,2,3,4,5]
          }
      }
    }
</script>

<style scoped>
  .vux-tab .tabbar.vux-tab-item{
    font-size:1.17rem;
    color:rgba(34,34,34,1);
  }
  .tab{
    text-align: center;
    margin: 1.75rem 3.58rem .25rem;
    display: flex;
    justify-content: space-between;
  }
  .tab.tabs{
    margin: .5rem 3.58rem .25rem;
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
  .selected2{
    color: #1aa3dd;
  }
  .list-item{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.08rem 2.54rem .33rem 1.75rem;
    border-bottom: 1px solid #e9e9e9;
    font-size: 1.12rem;
    color: #222;
  }
  .list-item .left{
    display: flex;
    align-items: center;
  }
  .list-item .right{
    display: flex;
    align-items: center;
  }
  .list-item .name{
    display: inline-block;
    max-width: 6.42rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .photo-box{
    width: 3.67rem;
    height: 3.67rem;
    border-radius: 50%;
    border: .17rem solid #ffe7b3;
    box-sizing: border-box;
    margin: 0 1.46rem 0 1.125rem;
  }
  .photo-box1{
    border: .17rem solid #ffca28;
  }
  .photo-box2{
    border: .17rem solid #c9ddea;
  }
  .photo{
    width: 3.33rem;
    height: 3.33rem;
    border-radius: 50%;
  }
  .num-img{
    width: 1.75rem;
    height: 2.17rem;
  }
  .num{
    display: inline-block;
    text-align: center;
    line-height: 2.17rem;
  }
  .dian{
    display: inline-block;
    width: .25rem;
    height: .25rem;
    border-radius: 50%;
    background: #1aa3dd;
    margin: 0 .58rem;
  }
  .tab2{
    font-size: 1.08rem;
    color: #999999;
    width: 12.92rem;
    height: 2.92rem;
    line-height: 2.92rem;
    display: flex;
    align-items: center;
    margin: .5rem auto 0;
  }
  .tab2 li{
    width: 50%;
    height: 1.125rem;
    line-height: 1.125rem;
    text-align: center;
  }
  .tab2 li:nth-child(1){
    border-right: 1px solid #999;
    box-sizing: border-box;
  }
</style>
<style>
  .sort .vux-tab-container{
    height: 3.33rem;
  }
  .sort .vux-tab{
    height: 3.33rem;
  }
  .vux-tab-wrap{
    padding-top: 3.33rem;
  }
</style>
