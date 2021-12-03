import Vue from 'vue'
import VueRouter from 'vue-router'
import LandingPage from '@/components/LandingPage'
import Tiles from '@/components/Tiles/Tiles'
import Ranking from '@/components/Ranking'

const routes = [
  { path: '/', name: 'home', component: LandingPage },
  { path: '/game', name: 'memory', component: Tiles, props: true },
  { path: '/ranking', name: 'ranking', component: Ranking }
]

Vue.use(VueRouter)
export const router = new VueRouter({
  mode: 'history',
  routes: routes,
  base: '/memory/'
})