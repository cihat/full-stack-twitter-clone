import axios from 'axios'

const mutations = {
  SET_USER: 'setUser'
}

const actions = {
  FETCH_USER: 'fetchUser'
}

const user = {
  namespaced: true,
  state: () => ({
    user: null
  }),
  mutations: {
    [mutations.SET_USER](state, user) {
      state.user = user
    }
  },
  getters: {},
  actions: {
    async [actions.FETCH_USER]({ commit }, username) {
      const user = await axios.get(`/api/user/${username}`)

      commit(mutations.SET_USER, user.data)
    }
  }
}

export default user
