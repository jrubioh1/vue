<template>
    <transition name="fade">
      <SplashComponent v-show="showSplash" />
    </transition>
    <transition name="fade">
        <v-app v-show="!showSplash">
          <HeaderLayout />
          <v-main class="pa-8">
            <router-view />
          </v-main>
          <FooterLayout />
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
<style>

</style>
