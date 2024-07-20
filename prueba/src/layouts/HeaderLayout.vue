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

    <div>


    </div>


    <v-toolbar :elevation="0" rounded>

      <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer justify-end>
        <v-btn text>Inicio</v-btn>
        <v-btn text>Contacto</v-btn>
        <v-btn text>Sobre Nosotros</v-btn>

      </v-spacer>



    </v-toolbar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list>
        <v-list-item @click="changeDrawer">
          <v-list-item-title v-for="item in items" key="title" :to="item.route">{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

  </v-header>
</template>
<script setup>
import { ref } from 'vue'
import router from '@/router/index'

let drawer = ref(false)
const items = ref([
  { title: "Inicio", route: "/" }

]);
const currentPage = ref('')


function changeDrawer() {
  console.log("hola")
  drawer.value = !drawer.value;
  console.log(drawer.value);
}



</script>

<style scoped></style>