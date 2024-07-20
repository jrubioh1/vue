<template>
  <v-header class="mt-4
   mx-4">
    <v-container class="d-flex justify-center align-center">
      <v-row align="center" class="justify-center" no-gutters max-height="250">
        <v-col class="ma-2" align="center" cols="1">
          <v-img height="200" max-width="100" src="../assets/logo.png" />
        </v-col>
        <v-col class="ma-2" align="start" cols="3">
          <v-text class="text-h1">Vuetify</v-text>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-toolbar :elevation="4" rounded>
        <v-app-bar-nav-icon  v-tooltip="'Menú'" variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-btn rounded text="Inicio" to="/" />
        <v-btn rounded text="Sobre Nosotros" />
        <v-btn rounded text="Contacto" />
        <v-spacer></v-spacer>
        <v-btn aria-label="Login" v-tooltip="'Inicia sesión'" icon="mdi-login" to="/login"></v-btn>
      </v-toolbar>
    </v-container>
    <v-navigation-drawer width="250" v-model="drawer" class="bg-grey-lighten-3 overflow-auto" absolute temporary  close-on-click>
      <v-container grid-list-xs>
        <v-row v-for="link in links" key="title">
          <v-col align="center">
            <v-btn @click="changeDrawer" :to="link.route" rounded class="w-75 mx-2 ma-1 mt-2" variant="tonal">
              {{ link.title }}
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-navigation-drawer>
  </v-header>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import router from '@/router/index'


let drawer = ref(false)



const links = ref([
]);



function changeDrawer() {
 
  drawer.value = !drawer.value;
 

 
}

onMounted(() => {

  router.getRoutes().forEach((route_) => {

    links.value.push({title: route_.name, route: route_.path})
    
  })

})



</script>

<style scoped></style>