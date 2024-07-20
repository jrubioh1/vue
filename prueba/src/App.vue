<template>
  <div id="app">
    <transition name="fade">
      <SplashComponent v-show="showSplash" />
    </transition>
    <transition name="fade">
      <div v-show="!showSplash">
        <v-app>
          <HeaderLayout />
          <v-main class="pa-8">
            <router-view />
          </v-main>
          <FooterLayout />
        </v-app>
      </div>
    </transition>
  </div>
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
  }, 3000)
})
</script>
<style>
  .fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
