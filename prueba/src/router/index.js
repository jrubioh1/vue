
import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '@/pages/IndexView.vue'
import LoginView from '@/pages/LoginView.vue'


const routes=[
  {path:'/', component: IndexView, name: "inicio"},
  {path:'/login', component: LoginView, name: "login"},


]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})


export default router
