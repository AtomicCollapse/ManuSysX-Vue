import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import http from '@/common/axios'
import ElementUI from 'element-ui'
import '@/assets/css/global.css'
import '@/assets/css/common.css'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(ElementUI)

Vue.prototype.$http = http

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
