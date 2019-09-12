import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import moment from 'moment'
import router from './router'


Vue.use(VueRouter)
Vue.prototype.moment = moment
Vue.config.productionTip = false
Vue.prototype.moment = moment
Vue.use(VueRouter)

Vue.component('User', { template: 'User/ {{ this.$router.params.id }}' })

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
