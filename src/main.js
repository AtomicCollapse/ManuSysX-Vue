import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import http from '@/common/axios'
import ElementUI from 'element-ui'
import '@/assets/css/global.css'
import 'element-ui/lib/theme-chalk/index.css'
// import store from '@/common/store'

Vue.config.productionTip = false
Vue.use(ElementUI)

Vue.prototype.$http = http

new Vue({
  router,
  // store,
  render: h => h(App),
}).$mount('#app')
