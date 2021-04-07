<template>
<v-dialog v-model="dialog.display" :width="_.indexOf(['xl','lg'],$store.state.screenSize)>=0?'60vw':'100vw'">
  <v-card class="pa-4">
    <v-card-title class="d-flex justify-space-between">
      <h1>Threats</h1>
      <v-btn color="red" icon @click="dialog.display=false" large>
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-card-title>
    <v-card-text class="font-weight-bold">
      Some files are downloaded from the developers' servers and do not need to be verified.
      Varese, etc. are checked using Dr.Web and / or VirusTotal.
    </v-card-text>
  </v-card>
</v-dialog>
</template>

<script>
export default {
  name: "virus_detect",
  props:['dialog'],
  data(){
    return {

    }
  }
}
</script>

<style scoped>

</style>
