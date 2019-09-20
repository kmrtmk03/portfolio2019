import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    headSmall: false,
    currentPage: 'Top',
    isMobile: false,
    worksModalNumber: 0,
    isMenu: false,
    canvasData: null
  },
  getters: {
    getCanvasData(state) {
      return state.canvasData
    }
  },
  mutations: {

  },
  actions: {

  }
})
