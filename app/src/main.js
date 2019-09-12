import Vue from 'vue'
import App from './App.vue'
import moment from 'moment'
import router from './router'

Vue.prototype.moment = moment
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
