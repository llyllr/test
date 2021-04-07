<template>
<v-snackbar v-model="snackbar.display" :timeout="snackbar.timeout" top >
{{snackbar.content}}
  <template v-slot:action="{ attrs }">
    <v-btn
      color="red"
      text
      v-bind="attrs"
      fab
      @click="snackbar.display = false"
    >
      <v-icon>mdi-close</v-icon>
    </v-btn>
  </template>
</v-snackbar>
</template>

<script>
export default {
name: "snackbar",
  props:['snackbar'],
  data(){
  return{

  }
  }
}
</script>

<style scoped>

</style>
