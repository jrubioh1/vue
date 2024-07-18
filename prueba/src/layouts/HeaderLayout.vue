<template>

    <v-card
    color="transparent"
    class="pa-4 "
    flat
  >
    <div>

    </div>

    <div>
      
    </div>
    <v-toolbar :elevation="8" 
     class="rounded"
      scroll-behavior="hide" 
      scroll-threshold="0"
    >
      <v-menu>
            <template v-slot:activator="{ props }">
              <v-btn icon="mdi-menu" v-bind="props"></v-btn>
            </template>

            <v-list>
              <v-list-item
                v-for="(item, i) in items"
                :key="i"
              >
                <router-link :to="item.route">
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                </router-link>
          
              </v-list-item>
            </v-list>
          </v-menu>


      
      <v-toolbar-title>Web Interna</v-toolbar-title>
 
     
    </v-toolbar>
    
  </v-card>

</template>

<script setup>
import { reactive } from 'vue';
import {ref} from 'vue'
 
      let items= reactive([
        { title: 'Incio', route:"/" },
        { title: 'Page Adios', route:"/adios"},
        { title: 'Tablas', route:"/tablas" },
        { title: 'Tablas2', route:"/tablas2"},
      ])

</script>

<style scoped>
</style>