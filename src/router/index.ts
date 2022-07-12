import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import StartGame from '../views/StartGame.vue'
import BuildPhase from '../views/BuildPhase.vue'
import GamePhase from '../views/GamePhase.vue'
import LobbyPhase from '../views/LobbyPhase.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: StartGame
  },
  {
    path: '/build',
    name: 'buildPhase',
    component: BuildPhase
  },
  {
    path: '/game',
    name: 'gamePhase',
    component: GamePhase
  },
  {
    path: '/lobby',
    name: 'lobbyPhase',
    component: LobbyPhase
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router
