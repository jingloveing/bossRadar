<template>
    <div class="allCustom">
      <div class="box">
        <div class="custom-num">共有<span>3</span>位客户</div>
        <div class="list-box" v-for="(item,index) in list">
          <img src="../assets/card.png" alt="" class="photo">
          <div style="margin:0 1.46rem 0 7rem;">
            <div class="list-top flex">
              <span class="name">何小姐</span>
              <div class="flex">
                <span class="rater">AI成交率</span>
                <div class="circle-box">
                  <x-circle
                    :percent="percent"
                    :stroke-width="6"
                    :trail-width="6"
                    stroke-color="rgba(26,163,221,1)"
                    trail-color="#ececec">
                    <span style="color:#36D1DC">{{ percent }}%</span>
                  </x-circle>
                </div>
              </div>
            </div>
            <div class="list-bottom flex">
              <span class="type">未跟进</span>
              <!--<span class="type">今日新增</span>-->
              <span class="time">预计成交时间: 2018-07-24</span>
            </div>
            <div>

            </div>
          </div>
        </div>
       </div>
      <div class="nothing"  style="display: none;">
        <img src="../assets/nothing.png" alt="">
        <p>没有用户数据额！</p>
      </div>
    </div>
</template>

<script>
  import { XCircle } from 'vux'
  export default {
    name: 'allCustom',
    components:{
      XCircle
    },
    data() {
      return {
        percent:80,
        list:[1,2,3,4]
      }
    },
    mounted() {

    },
    created() {

    }
  }
</script>

<style scoped>
  .box{
    min-height: calc(100vh - 3.67rem);
    background: #f9f9f9;
  }
  .custom-num{
    font-size:0.92rem;
    font-weight:400;
    color:rgba(102,102,102,1);
    text-align: center;
    height: 3rem;
    line-height: 3rem;
  }
  .custom-num span{
    color:rgba(26,163,221,1);
  }
  .list-box{
    height:5rem;
    /*opacity:0.65;*/
    margin: 2rem 1rem 1rem;
    background: white;
    position: relative;
    border-radius: 4px;
    box-shadow: 1px 1px 5px 2px #e9e9e9;
  }
  .photo{
    position: absolute;
    width:4.17rem;
    height:4.17rem;
    left: 1.67rem;
    bottom: 1.5rem;
    border-radius: 50%;
  }
  .circle-box{
    width: 3rem;
    height: 3rem;
  }
  .list-top{
    padding-top: 2px;
  }
  .list-top .name{
    font-size:1.17rem;
    font-weight:400;
    color:rgba(34,34,34,1);
  }
  .list-top .rater{
    font-size:0.92rem;
    font-weight:400;
    color:rgba(102,102,102,1);
    margin-right: .42rem;
  }
  .list-bottom .type{
    font-size:1rem;
    font-weight:400;
    color:rgba(26,163,221,1);
  }
  .list-bottom .time{
    font-size:0.92rem;
    font-weight:400;
    color:rgba(102,102,102,1);
  }
  .nothing{
    text-align: center;
    font-size:1.5rem;
    font-weight:normal;
    color:rgba(102,102,102,1);
    min-height: calc(100vh - 3.67rem);
    background: white;
  }
  .nothing img{
   width: 21rem;
    height: 15rem;
    margin: 12rem auto 7rem;

  }

</style>
<style>
  /*.tabbar{*/
    /*box-shadow: 0px 2px 0px #e9e9e9;*/
  /*}*/
  .vux-circle-content{
    font-size:0.92rem;
    font-weight:400;
    color:rgba(26,163,221,1);
  }
</style>




























































