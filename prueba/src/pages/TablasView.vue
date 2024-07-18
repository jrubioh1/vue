<template>

    <h1>Vamos a representar una visa con una tabla</h1>
    <h2>Estos titulos son desde el componente view</h2>
    <TablaComponent :datos="items"/>
   
</template>

<script lang="ts" setup>
import TablaComponent from '@/components/TablaComponent.vue'
import {ref, reactive} from 'vue'

const items = reactive([
  {
    name: 'Lion',
    species: 'Panthera leo',
    diet: 'Carnivore',
    habitat: 'Savanna, Grasslands'
  },
  {
    name: 'Giraffe',
    species: 'Giraffa camelopardalis',
    diet: 'Herbivore',
    habitat: 'Savanna, Woodlands'
  },
  {
    name: 'Kangaroo',
    species: 'Macropus rufus',
    diet: 'Herbivore',
    habitat: 'Grasslands, Open Woodlands'
  },
  {
    name: 'Polar Bear',
    species: 'Ursus maritimus',
    diet: 'Carnivore',
    habitat: 'Arctic Sea Ice, Tundra'
  },
  {
    name: 'Chimpanzee',
    species: 'Pan troglodytes',
    diet: 'Omnivore',
    habitat: 'Tropical Rainforests'
  },
  {
    name: 'Cheetah',
    species: 'Acinonyx jubatus',
    diet: 'Carnivore',
    habitat: 'Grasslands, Savanna'
  },
  {
    name: 'Koala',
    species: 'Phascolarctos cinereus',
    diet: 'Herbivore',
    habitat: 'Eucalyptus Forests'
  },
  {
    name: 'Hippopotamus',
    species: 'Hippopotamus amphibius',
    diet: 'Herbivore',
    habitat: 'Rivers, Lakes, Wetlands'
  },
  {
    name: 'Rhinoceros',
    species: 'Diceros bicornis',
    diet: 'Herbivore',
    habitat: 'Grasslands, Savanna'
  },
  {
    name: 'Octopus',
    species: 'Octopus vulgaris',
    diet: 'Carnivore',
    habitat: 'Coral Reefs, Rocky Shores'
  }
])
</script>

<style scoped>
</style>