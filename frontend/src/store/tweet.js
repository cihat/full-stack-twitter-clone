import axios from 'axios'

const mutations = {
  SET_TWEET: 'setTweet',
  SET_TWEETS: 'setTweets'
}

const actions = {
  CREATE_TWEET: 'createTweet',
  FETCH_TWEETS: 'fetchTweets',
  INIT: 'init'
}
const tweet = {
  namespaced: true,
  state: () => ({
    tweet: null,
    tweets: [],
    tweetId: null,
    tweetUser: null,
    tweetUserId: null
  }),
  mutations: {
    [mutations.SET_TWEET](state, tweets) {
      state.tweets = tweets
    },
    [mutations.SET_TWEETS](state, tweets) {
      state.tweets = tweets
    }
  },
  getters: {
    tweets: state => state.tweets
  },
  actions: {
    async [actions.CREATE_TWEET]({ commit }, tweet) {
      const response = await axios.post('/tweet', tweet)
      commit('setTweet', response.data)
    },
    async [actions.FETCH_TWEETS]({ commit }) {
      const response = await axios.get('/tweet')
      commit('setTweets', response.data)
    },
    async [actions.INIT]({ dispatch }) {
      await dispatch(actions.FETCH_TWEETS)
    }
  }
}

export default tweet

// export default createStore({
//   state: {
//     isLogin: true
//   },
//   mutations: {
//     toggleLoginStatus(state, payload) {
//       if (state) state.isLogin = true
//       return
//     }
//   },
//   actions: {
//     async fetchUsers() {
//       const request = await axios.get('/users')
//       return request.data
//     },
//     async fetchUser({ state }, userId) {
//       const request = await axios.get(`/users/${userId}`)

//       return request.data
//     },
//     async createTweet({ state }, tweetBody) {
//       const tweet = await axios.post(`/users/${state.user._id}/tweets`, {
//         body: tweetBody
//       })

//       return tweet.data
//     },
//     async likeTweet({ state }, tweetId) {
//       const tweet = await axios.patch(`/users/61ab8726363e9600169a2939/like`, {
//         likeTweetId: tweetId
//       })

//       return tweet.data
//     }
//   }
// })
