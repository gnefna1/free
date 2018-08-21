import Vue from 'vue'
import Router from 'vue-router'
import { resolve } from 'url';



Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/register",
      name:"register",
      component:resolve=>require(['@/page/register.vue'],resolve)
    },
    {
      path:"/detail",
      name:"detail",
      component:resolve=>require(['@/page/detail.vue'],resolve)
    }
    
  ]
})
