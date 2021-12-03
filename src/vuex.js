import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  reducer: (state) => ({ games: state.games })
})

export const store = new Vuex.Store({
  state: {
    games: [],
  },
  mutations: {
    addGame(state, payload) {
      state.games.push(payload.newGame)
    }
  },
  getters: {
    getRanking(state) {
      console.log(state)
      return state.games;
    }
  },
  plugins: [vuexLocal.plugin]
})