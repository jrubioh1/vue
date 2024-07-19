<template>
    <GraficoComponent :labels="labels" :values="values"/>
</template>

<script lang="ts" setup>

import GraficoComponent from '@/components/GraficoComponent.vue'
import {reactive, ref} from 'vue'

const labels= ref( [
        '12am',
        '3am',
        '6am',
        '9am',
        '12pm',
        '3pm',
        '6pm',
        '9pm',
      ])

 const values=ref([
        200,
        675,
        410,
        390,
        310,
        460,
        250,
        240,
      ])


</script>

<style scoped>
</style>