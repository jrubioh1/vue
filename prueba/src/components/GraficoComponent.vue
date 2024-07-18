<template>
    <h1>los datos se  han extradio por props y se ha implementado injeccion de componentes anidados</h1>

     <v-card
    class="mt-8 mx-auto overflow-visible"
    max-width="400"
  >
    <v-sheet
      class="v-sheet--offset mx-auto"
      color="cyan"
      elevation="12"
      max-width="calc(100% - 32px)"
      rounded="lg"
    >
      <v-sparkline
        :labels="labels"
        :model-value="value"
        color="white"
        line-width="2"
        padding="16"
      ></v-sparkline>
    </v-sheet>

    <v-card-text class="pt-0">
      <div class="text-h6 font-weight-light mb-2">
        User Registrations
      </div>
      <div class="subheading font-weight-light text-grey">
        Last Campaign Performance
      </div>
      <v-divider class="my-2"></v-divider>
      <v-icon
        class="me-2"
        size="small"
      >
        mdi-clock
      </v-icon>
      <span class="text-caption text-grey font-weight-light">last registration 26 minutes ago</span>
    </v-card-text>
  </v-card>
</template>

<script lang="ts" setup>
    const props= defineProps(["labels", "values"])
    let labels =props.labels
    let value= props.values
</script>
<style scoped>
  .v-sheet--offset {
    top: -24px;
    position: relative;
  }
</style>