import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './App.vue'
import LandingPage from '@/components/LandingPage'
import Tiles from '@/components/Tiles/Tiles'
import Ranking from '@/components/Ranking'

import VuexPersistence from 'vuex-persist'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(Vuex)

const routes = [
  { path: '/', name:'main', component: LandingPage},
  { path: '/memory', name: 'memory', component: Tiles, props: true},
  { path: '/ranking', name: 'ranking', component: Ranking}
]

const router = new VueRouter({
  mode: 'history',
  routes: routes
})

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  reducer: (state) => ({games: state.games})
})

const store = new Vuex.Store({
  state: {
    games: [],
  },
  mutations: {
    addGame (state, payload) {
      state.games.push(payload.newGame)
      // Vue.set(state, 'games', [...state.games, payload.games])
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

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
