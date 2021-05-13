import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    userInfo: {
        name: 'heyu',
        age: 29
    }
  },
  mutations: {
    increment (state, num) {
      state.userInfo.age = num
    }
  }
})

export default store