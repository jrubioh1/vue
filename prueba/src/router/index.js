
import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import TablasView from '@/pages/TablasView'
import AdiosView from '@/pages/AdiosView.vue'
import TablasView2 from '@/pages/TablasView2'


const routes=[
  {path:'/', component: HelloWorld, name: "helloWorld"},
   {path:'/adios', component: AdiosView, name: "adios"},
    {path:'/tablas', component: TablasView, name: "tablas"},
     {path:'/tablas2', component: TablasView2, name: "tablas2"}
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})


export default router
