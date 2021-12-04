import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

axios.defaults.baseURL =
  "https://cs-twitter-clone-backend.herokuapp.com/" ||
  'http://localhost:3000'

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
      const tweet = await axios.post(`/users/61ab8726363e9600169a2939/tweets`, {
        body: tweetBody
      })

      return tweet.data
    },
    async likeTweet({ state }, tweetId) {
      const tweet = await axios.patch(`/users/61ab8726363e9600169a2939/like`, {
        likeTweetId: tweetId
      })

      return tweet.data
    }
  },
  modules: {}
})
