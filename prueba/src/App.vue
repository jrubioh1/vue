<template>
  <transition name="fade">
    <SplashComponent v-show="showSplash" />
  </transition>
  <transition name="fade">
    <v-app v-show="!showSplash">
      <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
        <HeaderLayout />
        <v-main>
          <v-container class="mx-15">
            <router-view />
          </v-container>
        </v-main>
        <FooterLayout />
      </v-parallax>

    </v-app>
  </transition>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import HeaderLayout from '@/layouts/HeaderLayout.vue'
import FooterLayout from '@/layouts/FooterLayout.vue'
import SplashComponent from '@/components/SplashComponent.vue'

let showSplash = ref(true)

onMounted(() => {
  setTimeout(() => {
    showSplash.value = false
  }, 3500)
})
</script>
<style></style>
