import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import account from './account'
import tweet from './tweet'
import user from './user'

Vue.use(Vuex)

if (process.env.VUE_APP_ENV === 'development') {
  axios.defaults.baseURL = `${process.env.VUE_APP_API_URL_DEV}`
} else {
  axios.defaults.baseURL = `${process.env.VUE_APP_API_URL_PROD}`
}

axios.defaults.withCredentials = true

axios.defaults.headers = {
  'Content-Type': 'application/json'
  // Accept: 'application/json',
  // 'Access-Control-Allow-Origin': true
  // 'Access-Control-Allow-Credentials': true,
  // 'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH',
  // 'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  // 'Access-Control-Expose-Headers': 'Content-Type, Authorization'
}

const store = new Vuex.Store({
  modules: {
    account,
    tweet,
    user
  }
})

export default async function init() {
  await store.dispatch('account/init')
  await store.dispatch('tweet/init')

  return store
}
