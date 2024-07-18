
 <template>
  <v-card
    title="Nutrition"
    flat
>
     <template v-slot:text>
      <v-text-field
        v-model="search"
        label="Search"
        prepend-inner-icon="mdi-magnify"
        variant="outlined"
        hide-details
        single-line
      ></v-text-field>
    </template>

    <v-data-table
      :headers="headers"
      :items="desserts"
      :search="search"
    ></v-data-table>
  </v-card>
</template>


<script lang="ts" setup>

import { ref} from 'vue'

const props= defineProps(["datos", "headers"])

let desserts= props.datos
let headers=props.headers
console.log(desserts)
console.log(headers)
let search=ref("")

</script>

<style scoped>
</style>
