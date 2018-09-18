<template>
   <div>
     <tabbar class="footer">
       <tabbar-item link="/home" :selected="$route.path == '/home'">
         <img slot="icon" src="../assets/pandect.png" v-show="$route.path !== '/home'" class="footer-img">
         <img slot="icon" src="../assets/pandect_selected.png" v-show="$route.path == '/home'" class="footer-img">

         <span slot="label">总览</span>
       </tabbar-item>
       <tabbar-item link="/sort" :selected="$route.path == '/sort'" class="footer-img">
         <img slot="icon" src="../assets/sort.png" v-show="$route.path !== '/sort'" class="footer-img">
         <img slot="icon" src="../assets/sort_selected.png" v-show="$route.path == '/sort'" class="footer-img">
         <span slot="label">销售排行</span>
       </tabbar-item>
       <tabbar-item  link="/AI" :selected="$route.path == '/AI'">
         <img slot="icon" src="../assets/ai.png" v-show="$route.path !== '/AI'" class="footer-img">
         <img slot="icon" src="../assets/ai_selected.png" v-show="$route.path == '/AI'" class="footer-img">
         <span slot="label">AI分析</span>
       </tabbar-item>
     </tabbar>
     <div style="height: 4.08rem;"></div>
   </div>
</template>
<script>
  import { Tabbar, TabbarItem} from 'vux'
  export  default {
    name:'AppFooter',
    components:{
      Tabbar,
      TabbarItem,
    }

  }
</script>
<style scoped>
   .footer {
     position: fixed;
     height: 4.08rem;
     background: white;
   }
   .footer-img{
     width:2.083rem;
     height:2.083rem;
   }
</style>
<style>
  .weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon, .weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon > i, .weui-tabbar__item.weui-bar__item_on .weui-tabbar__label {
    color:rgba(26,163,221,1) !important;
    font-size: .92rem;
  }
  .weui-tabbar:before{
    border-top: 1px solid #e9e9e9;
  }
  .footer .weui-tabbar__item{
    padding: 2px 0 0;
  }
</style>
