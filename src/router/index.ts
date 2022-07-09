import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import StartGame from '../views/StartGame.vue'
import BuildPhase from '../views/BuildPhase.vue'

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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from) => {
  // TODO: Require to ask 
  if (to.name == 'home')
    return confirm("You will be returned to the lobby, continue?")
  return true
})

export default router
