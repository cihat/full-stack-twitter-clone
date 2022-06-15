import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './assets/styles/index.scss'
import { clickOutSideBind, clickOutSideUnBind } from './helper'
import Toasted from 'vue-toasted'
import moment from 'moment'
import VueSkeletonLoader from 'skeleton-loader-vue'

import AuthLayout from './layouts/AuthLayout.vue'
import DefaultLayout from './layouts/DefaultLayout.vue'

Vue.config.productionTip = false

Vue.component('auth-layout', AuthLayout)
Vue.component('default-layout', DefaultLayout)
Vue.use(Toasted)
Vue.component(VueSkeletonLoader)

Vue.prototype.moment = moment

Vue.config.productionTip = false

Vue.directive('click-outside', {
  bind: clickOutSideBind,
  unbind: clickOutSideUnBind
})

async function main() {
  let storeInstance = await store()

  new Vue({
    router: router(storeInstance),
    store: storeInstance,
    render: h => h(App)
  }).$mount('#app')
}

main()
