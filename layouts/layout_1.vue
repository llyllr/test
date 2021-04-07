<template>
<v-app>
  <nuxt-child/>
</v-app>
</template>

<script>
export default {
  name: "layout_1",
  beforeMount() {
    this.$store.commit('switchTheme',localStorage.getItem('theme')=='true')
    this.$vuetify.theme.dark=localStorage.getItem('theme')=='true'
  },
}
</script>

<style scoped>

</style>
