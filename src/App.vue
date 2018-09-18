<template>
  <div id="app">
       <!--<app-header :title="$route.meta.title"></app-header>-->
       <router-view></router-view>
       <app-footer v-show="$route.meta.showFooter"></app-footer>
  </div>
</template>
<script>
  // import AppHeader from '@/components/header'
  import AppFooter from '@/components/footer'
export default {
  name: 'app',
  components:{
    AppFooter,
    // AppHeader
  },
  data:function(){
    return{

    }
  },
  mounted:function(){
    this.$nextTick(function() {

    })
  },
  watch:{

  },
  methods:{

  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #f4f4f4;
}
</style>
