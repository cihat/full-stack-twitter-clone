import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import account from './account'

Vue.use(Vuex)

if (process.env.ENV === 'development') {
  axios.defaults.baseURL = `${process.env.VUE_APP_API_URL_PROD}`
} else {
  axios.defaults.baseURL = `${process.env.VUE_APP_API_URL_DEV}`
}

axios.defaults.withCredentials = true

const store = new Vuex.Store({
  modules: {
    account
  }
})

export default async function init() {
  await store.dispatch('account/init')

  return store
}
