import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: true
  },
  mutations: {
    toggleLoginStatus(state, payload) {
      if (state) state.isLogin = true
      return
    }
  },
  actions: {
    async fetchUsers() {
      const request = await axios.get('/users')
      return request.data
    },
    async fetchUser({ state }, userId) {
      const request = await axios.get(`/users/${userId}`)

      return request.data
    },
    async postTweet({ state }, tweetBody) {
      const tweet = await axios.post(`/users/612cea71e2e1167e4e1547ce/tweets`, {
        body: tweetBody
      })

      return tweet.data
    }
  },
  modules: {}
})
