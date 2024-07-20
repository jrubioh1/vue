<template>
    <v-app>

        <v-container class=" mb-6 fill-height">
            <v-row align="center" max-height="150" no-gutters>
                <v-col align="center">
                    <v-expand-transition>
                        <v-sheet v-if="isVisile" class="pa-2 ma-2" max-width="100">
                            <v-img src="@/assets/logo.png" class="" alt="Logo" max-height="600" max-width="100" />
                        </v-sheet>
                    </v-expand-transition>
                    <v-sheet class="mt-15" max-width="200">
                        <v-progress-linear rounded color="blue-lighten-3" indeterminate></v-progress-linear>
                    </v-sheet>
                </v-col>
            </v-row>
        </v-container>


    </v-app>
</template>
  
<script setup>

import { ref , onMounted} from 'vue'

const isVisible = ref(true)

onMounted(()=>{
    setTimeout(() => {
        isVisible.value = !isVisible.value
        
    }, 500)
})

</script>

<style scoped></style> 
               

          
                