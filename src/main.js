import Vue from 'vue'
import App from './App'
import router from './router'

import "./assets/css/main.less"
Vue.config.productionTip = false
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import {axios} from "./util/initAxios.js" 

Vue.prototype.axios = axios


Vue.use(ElementUI);




new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
