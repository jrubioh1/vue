<template>
    <h3>ADIOS</h3>

    <v-text-field
  label="Email address"
  placeholder="johndoe@gmail.com"
  type="email"
    v-model="emailtemp"
></v-text-field>
<v-btn @click="changeEmail">cambiar email</v-btn>
<br>

<br>
{{  emailPrecreate}} ----- precreate

<br>
{{ emailPremount}}--premount
<br>
{{ mounted }}--mounted
<br>
{{ email }}  ---actual
<hr>
<br>

historialwatched----
{{ historial }}
<br>
<hr>

<br>
<br>
contador= {{ contador }}
<br>
<br>
el valor computado de multiplicar el numero del contador por 2 es:

{{ resultadoComputado }}

</template>

<script lang="ts" setup>
import {onBeforeMount, onMounted, ref,computed, watch} from 'vue'

let emailPrecreate=ref("-")
let emailPremount=ref("-")
let emailtemp=ref("temp")
let mounted= ref('-')
let historial=ref([])
let contador= ref(0)

let email=ref("")
emailPrecreate.value=email.value


onBeforeMount(()=>{
    email.value="jr@emaul"
    emailPremount.value=email.value
})

onMounted(()=>{
    email.value="postmounted@sdfd"
    mounted.value=email.value
    emailtemp.value=email.value
})

console.log(`el valor de el email despues de montar de montar es: ${email.value}`);


watch(email,()=>{
    historial.value.push(email.value)
})

function changeEmail(){
    email.value= emailtemp.value
    contador.value++
}

const resultadoComputado= computed(()=> {return contador.value *2} )
 



</script>

<style scoped>
</style>