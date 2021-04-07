<template>
  <div>
    <v-card-subtitle>{{ 'navigation'.toUpperCase() }}</v-card-subtitle>
    <v-list>
      <v-list-item-group v-model="md" :mandatory="model!=null?true:false">
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          link
          @click="$nuxt.error({ statusCode: 404})"
        >
          <v-list-item-icon class="d-flex justify-center">
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="_.startCase(item.text)"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
export default {
  name: "left_menu_1",
  props: ['model', 'items'],
  data(){
    return{
      md:this.model
    }
  },
  watch:{
    md(){
      this.$emit('update:model',this.md)
    }
  },
}
</script>

<style scoped>

</style>
