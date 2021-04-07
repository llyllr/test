<template>
  <div>
    <v-list>
      <v-list-item-group v-model="md" :mandatory="model!=null?true:false">
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          link
        >
            <v-icon v-text="item.icon"></v-icon>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
export default {
  name: "left_menu_2",
  props:['model','items'],
  data() {
    return {
      md:null,
    }
  },
  watch:{
    md(){
      this.$emit('update:model',this.md)
    }
  },
  mounted() {
    this.md=this.model
  }
}
</script>

<style scoped>

</style>
