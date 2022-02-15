import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/CompLogin.vue'
import Home from '../components/CompWelcome.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
      path:'/home',
      name: 'Home',
      component: Home
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router