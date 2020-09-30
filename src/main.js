import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { Lazyload, Popup, Toast, Dialog } from 'vant'
import 'vant/lib/index.css';

Vue.use(Lazyload)
Vue.use(Popup)
Vue.use(Toast, Dialog)
Vue.prototype.$toast = Toast
Vue.prototype.$eventBus = new Vue()
Vue.config.productionTip = false
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
