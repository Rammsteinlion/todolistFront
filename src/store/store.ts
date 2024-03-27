import { createStore } from 'vuex'

export default createStore({
  state: {
    token: localStorage.getItem('token'),
    is_authenticated: !!localStorage.getItem('token')
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
