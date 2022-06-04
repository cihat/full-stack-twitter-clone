import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import account from './account'
import tweet from './tweet'

Vue.use(Vuex)

if (process.env.ENV === 'development') {
  axios.defaults.baseURL = `${process.env.VUE_APP_API_URL_PROD}`
} else {
  axios.defaults.baseURL = `${process.env.VUE_APP_API_URL_DEV}`
}

axios.defaults.withCredentials = true

const store = new Vuex.Store({
  modules: {
    account,
    tweet
  }
})

export default async function init() {
  await store.dispatch('account/init')
  await store.dispatch('tweet/init')

  return store
}
