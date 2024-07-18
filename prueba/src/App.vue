<template>
  <v-app>
   <HeaderLayout/>
    <v-main>
      <router-view />
    </v-main>
   <FooterLayout/>
  </v-app>
</template>

<script setup>
import HeaderLayout from '@/layouts/HeaderLayout.vue'
import FooterLayout from '@/layouts/FooterLayout.vue' 
  //
</script>
