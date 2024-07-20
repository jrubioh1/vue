<template>
    <v-app>
        
        <v-container class=" mb-20">
            <v-row align="center" style="height: 50vh;">
                <v-col cols="20" align="center">
                    <v-expand-transition>
                        <v-sheet v-if="isVisible" class="text-h1">Bienvenido a Vuetify</v-sheet>
                    </v-expand-transition>
                </v-col>
            </v-row>

            <v-row align="center" class="justify-center" max-height="150" no-gutters>
                <v-col align="center">

                    <v-expand-transition>
                        <v-sheet v-if="isVisible" class="pb-2 mb-2" max-width="100" color="transparent">
                            <v-img src="@/assets/logo.png" class="" alt="Logo" max-height="600" max-width="100" />
                        </v-sheet>
                    </v-expand-transition>

                    <v-sheet v-if="isVisible" class="mt-15" max-width="200">
                        <v-progress-linear rounded color="blue" indeterminate></v-progress-linear>
                    </v-sheet>
                </v-col>
            </v-row>
        </v-container>
      

    </v-app>
</template>
  
<script setup>

import { ref, onMounted } from 'vue'

const isVisible = ref(true)

onMounted(() => {
    setTimeout(() => {
        isVisible.value = !isVisible.value

    }, 2875)
})
console.log(isVisible.value)

</script>

<style scoped></style> 
               

          
                