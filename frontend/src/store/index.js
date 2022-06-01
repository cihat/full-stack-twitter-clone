import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import axios from 'axios'

import auth from './auth'
// import user from './user'

if (process.env.ENV === 'development') {
  axios.defaults.baseURL = `${process.env.VUE_APP_API_URL_PROD}`
} else {
  axios.defaults.baseURL = `${process.env.VUE_APP_API_URL_DEV}`
}

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    auth
    // user
  }
})

export default async function init() {
  await store.dispatch('auth/init')
  // await store.dispatch('user/init')
}

export { store as store_ }
