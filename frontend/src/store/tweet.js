import axios from 'axios'

const mutations = {
  SET_TWEET: 'setTweet',
  SET_TWEETS: 'setTweets',
}

const actions = {
  CREATE_TWEET: 'createTweet',
  FETCH_TWEETS: 'fetchTweets',
  FETCH_TWEET: 'fetchTweet',
  INIT: 'init',
  LIKE_TWEET: 'likeTweet',
  RETWEET: 'retweet'
}
const tweet = {
  namespaced: true,
  state: () => ({
    tweet: null,
    tweets: [],
    tweetId: null,
    tweetUser: null,
    tweetUserId: null,
    getTweet: null
  }),
  mutations: {
    [mutations.SET_TWEET](state, tweet) {
      state.tweet = tweet
    },
    [mutations.SET_TWEETS](state, tweets) {
      state.tweets = tweets
    },
  },
  getters: {
    tweets: state => state.tweets
  },
  actions: {
    async [actions.CREATE_TWEET]({ commit }, tweet) {
      const response = await axios.post('/api/tweet', tweet)
      commit('setTweet', response.data)
    },
    async [actions.FETCH_TWEETS]({ commit }) {
      const response = await axios.get('/api/tweet')
      commit('setTweets', response.data)
    },
    async [actions.FETCH_TWEET]({ commit }, tweetId) {
      const response = await axios.get(`/api/tweet/${tweetId}`)
      commit('setTweet', response.data)
    },
    async [actions.INIT]({ dispatch }) {
      await dispatch(actions.FETCH_TWEETS)
    },
    async [actions.LIKE_TWEET]({ commit, dispatch }, tweetId) {
      const response = await axios.patch(`/api/tweet/${tweetId}/like`)
      commit('setTweet', response.data)
      // dispatch(actions.FETCH_TWEETS)

      // dispatch(actions.FETCH_TWEET, tweetId)
    },
    async [actions.RETWEET]({ commit, dispatch }, tweetId) {
      const response = await axios.patch(`/api/tweet/${tweetId}/retweet`)
      commit('setTweet', response.data)
      // dispatch(actions.FETCH_TWEETS)

      // dispatch(actions.FETCH_TWEET, tweetId)
    }
  }
}

export default tweet
