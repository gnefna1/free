import Vue from 'vue'
import Router from 'vue-router'




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
    },
    {
      path:"/upload",
      name:"upload",
      component:resolve=>require(['@/page/upload.vue'],resolve)
    },
    
  ]
})
