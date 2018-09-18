// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import Home from './components/Home'
import sort from './components/sort'
import AI from './components/AI'
import allCustom from './components/allCustom'
import card from './components/card'
import '../static/css/main.css'
import { ConfirmPlugin ,AlertPlugin,ToastPlugin,AjaxPlugin ,LoadingPlugin} from 'vux'
import VueScroller from 'vue-scroller'
Vue.use(VueScroller)
Vue.use(LoadingPlugin)
Vue.use(AjaxPlugin)
Vue.use(AlertPlugin)
Vue.use(ToastPlugin)
Vue.use(VueRouter)
Vue.use(ConfirmPlugin)
const routes = [
  {
    path: '/home',
    component: Home,
    meta:{
      showFooter:true,
    }
  },
  {
    path: '/AI',
    component: AI,
    meta:{
      showFooter:true,
    }
  },
  {
    path: '/sort',
    component: sort,
    meta:{
      showFooter:true,
    }
  },
  {
    path: '/allCustom',
    component: allCustom,
  },
  {
    path: '/card',
    component: card,
    meta:{
      title:'我的名片卡'
    }
  },
  {
    path: '*',
    redirect: '/home',
    component: Home,
    meta:{
      showFooter:true,
    }
  },
]

const router = new VueRouter({
  // mode:'history',
  routes
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')



