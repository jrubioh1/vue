<template>
    <v-app>
        <div class="container">
            <img src="@/assets/logo.png" class="logo" alt="Logo" />
            <div class="progress-container">
                <v-progress-circular :size="60" :width="3" indeterminate color="primary"></v-progress-circular>
            </div>
        </div>
    </v-app>
</template>
  
<script setup>


</script>

<style scoped>
.container {
    display: flex;
    /* Activa Flexbox */
    flex-direction: column;
    /* Organiza los elementos en columna */
    justify-content: center;
    /* Centra los elementos verticalmente */
    align-items: center;
    /* Centra los elementos horizontalmente */
    height: 100vh;
    /* Ocupa toda la altura de la ventana */
    width: 100vw;
    /* Ocupa toda la anchura de la ventana (opcional) */
}


.logo {
    max-width: 200px;
    /* Limita el ancho máximo de la imagen */
    margin-bottom: 16px;
    /* Espacio debajo de la imagen */
}


.progress-container {
    margin-top: 50px;

}</style> 