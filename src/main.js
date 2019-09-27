import Vue from 'vue'
import App from './App.vue'
import moment from 'moment'
import router from './router'
import Datetime from 'vue-datetime'
import 'vue-datetime/dist/vue-datetime.css'
import VModal from 'vue-js-modal'

Vue.use(VModal, { dialog: true })


Vue.prototype.moment = moment
Vue.config.productionTip = false

Vue.use(router)
Vue.use(Datetime)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
