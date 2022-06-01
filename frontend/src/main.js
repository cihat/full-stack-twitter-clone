import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store, { store_ } from './store'

import AuthLayout from './layouts/AuthLayout.vue'
import DefaultLayout from './layouts/DefaultLayout.vue'

Vue.config.productionTip = false

Vue.component('auth-layout', AuthLayout)
Vue.component('default-layout', DefaultLayout)

Vue.config.productionTip = false

async function main() {
  let storeInstance = await store()

  new Vue({
    router: router(storeInstance),
    store: storeInstance,
    render: h => h(App)
  }).$mount('#app')
}

main()
