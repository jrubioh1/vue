
import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import AppAdios from '@/components/AppAdios.vue'

const routes=[
  {path:'/', component: HelloWorld, name: "helloWorld"},
   {path:'/adios', component: AppAdios, name: "adios"}
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})


export default router
