
import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import TablasView from '@/pages/TablasView'
import AdiosView from '@/pages/AdiosView.vue'

const routes=[
  {path:'/', component: HelloWorld, name: "helloWorld"},
   {path:'/adios', component: AdiosView, name: "adios"},
    {path:'/tablas', component: TablasView, name: "tablas"}
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})


export default router
