<template>
    <br>
    <hr>
    <h3>Datos desde el componente componente</h3>

    <v-data-table :items="items"></v-data-table>

</template>

<script lang="js" setup>

import {} from 'vue'

const props= defineProps(["datos"])

let items= props.datos

</script>

<style scoped>
</style>
