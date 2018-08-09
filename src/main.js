import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import Vuex from 'vuex'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css' // 引入 element-ui 样式表
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Vuex)
/* eslint-disable no-new */
/* eslint-disable */
String.prototype.xbTrim = function () {
  return this.replace(/^\s+|\s+$/g, '')
}
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
