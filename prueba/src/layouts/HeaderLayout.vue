<template>

    <v-card
    color="transparent"
    class="pa-4"
    flat
  >
    <v-toolbar :elevation="8" 
    >
       <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-toolbar-title>Web Interna</v-toolbar-title>

     
    </v-toolbar>
  </v-card>

</template>

<script lang="ts" setup>

import {ref} from 'vue'
 let menuVisible= ref(false)
    let menuItems= ref( [
      { text: 'Item 1' },
      { text: 'Item 2' },
      { text: 'Item 3' },
    ])
</script>

<style scoped>
</style>