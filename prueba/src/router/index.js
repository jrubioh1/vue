
import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '@/pages/IndexView.vue'


const routes=[
  {path:'/', component: IndexView, name: "index"},


]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})


export default router
