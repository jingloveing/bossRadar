<template>
  <div>
    <tabbar class="tabbar">
      <div class="title">{{title}}</div>
    </tabbar>
    <div style="height: 3.67rem;"></div>
  </div>

</template>
<style scoped>
  .tabbar{
    height:3.67rem;
    position:fixed;
    top:0;
    background: white;
    border-bottom: 1px solid #e9e9e9;
    box-sizing: border-box;
  }
  .title{
    text-align:center;
    margin:auto;
    font-size:1.5rem;
    color:rgba(0,0,0,1);
  }
</style>
<style>
  .weui-tabbar.tabbar:before{
    border: none;
    height: 0;
  }
</style>
<script>
  import {Tabbar} from 'vux'
  export default{
    name: 'AppHeader',
    components: {
      Tabbar
    },
    props:{
      title:{
        default:'boss雷达'
      }
    },
    methods: {

    },
  }

</script>
