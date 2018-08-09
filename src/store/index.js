import Vue from 'vue'
import Vuex from 'vuex'
import storage from 'good-storage'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: { // 存放本地storage 缓存

  },
  mutations: {
    setUser (state, userData) {
      state.user = userData
    },
    removeUser (state) {
      state.user = null
    },
    setMessageCount (state, count) {
      state.messageCount = count
      storage.session.set('message_count', count)
    },
    loginOutSet (state) {
      state.messageCount = 0
      state.user = ''
      state.currentCompany = ''
    },
    clearKeep (state) {
      state.keepArray = []
    },
    setKeep (state, name) {
      state.keepArray.push(name)
    },
    removeKeep (state, name) {
      let index = 0
      for (let item of state.keepArray) {
        if (item === name) {
          state.keepArray.splice(index, 1)
          break
        }
        index++
      }
    }
  },
  actions: {

  },
  modules: {

  }
})

export default store
