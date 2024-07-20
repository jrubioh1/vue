<template>
  <v-container>


    <v-row align="center" class="mb-10">
      <v-col align="center">
        <h1>Wellcome at our's Vuetify Webpage </h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6">
        <img src="https://via.placeholder.com/800x400" alt="Imagen de relleno" class="mx-auto mb-4">
      </v-col>

      <v-col>
        <h1 class="text-3xl font-bold mb-4">Welcome to our website!</h1>
        <p class="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum
          magna sed, convallis ex. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </p>

        <p class="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum
          magna sed, convallis ex. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </p>

        <v-btn class="ma-4" text="Learn more"/>
       

      </v-col>
    </v-row>

    <v-row align="center">
      <v-col align="start">
        <h1 class="text-3xl font-bold mb-4">Welcome to our website!</h1>
        <p class="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum
          magna sed, convallis ex. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </p>

        <p class="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum
          magna sed, convallis ex. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </p>
        <button class="btn btn-primary">Learn more</button>
      </v-col>
      <v-col align="center">
        <h2 class="text-2xl font-bold mb-4">Our features</h2>
        <ul class="list-none mb-4">
          <li class="mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li class="mb-2">Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</li>
          <li class="mb-2">Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</li>
        </ul>
        <button class="btn btn-secondary">See all features</button>
      </v-col>
    </v-row>
    <v-row align="center">
      <v-col align="center">
        <h2 class="text-2xl font-bold mb-4">Our team</h2>
      </v-col>
    </v-row>

    <v-row>
      <v-col align="end" cols="3">
        <img src="https://via.placeholder.com/200x200" alt="Imagen de relleno" class="rounded-full mb-4">
      </v-col>
      <v-col align="start">
        <h3 class="text-lg font-bold">John Doe</h3>
        <p class="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </v-col>


    </v-row>

    <v-row>
      <v-col align="end">

        <h3 class="text-lg font-bold">Jane Doe</h3>
        <p class="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </v-col>
      <v-col align="start" cols="3">
        <img src="https://via.placeholder.com/200x200" alt="Imagen de relleno" class="rounded-full mb-4">
      </v-col>
    </v-row>

    <v-row>
      <v-col align="end" cols="3">
        <img src="https://via.placeholder.com/200x200" alt="Imagen de relleno" class="rounded-full mb-4">
      </v-col>
      <v-col align="start">
        <h3 class="text-lg font-bold">Bob Smith</h3>
        <p class="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </v-col>

    </v-row>


  </v-container>

  <carousel-componet/>
</template>

<script setup>

import CarouselComponet from '@/components/CarouselComponet.vue'
//
</script>
