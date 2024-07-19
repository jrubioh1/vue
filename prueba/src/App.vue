<template>
  <v-app>
   <HeaderLayout/>

       <v-parallax class="pa-8">
        
        <v-main>
          <router-view />
          </v-main>

      </v-parallax>
      <FooterLayout/>
  </v-app>
</template>

<script setup>
import HeaderLayout from '@/layouts/HeaderLayout.vue'
import FooterLayout from '@/layouts/FooterLayout.vue' 
  //
</script>
