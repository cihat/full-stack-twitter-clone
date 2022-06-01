import { createStore } from 'vuex'
import axios from 'axios'
// import account from './account'

export default createStore({
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
  }
})
