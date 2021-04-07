<template>
  <v-app>
    <v-container :fluid="false" style="max-width: 1440px;">
      <v-row style="min-height: 95vh">
        <left-component :screenSize="szName" :icons="icons" style="position: relative;"/>
        <right-component :screenSize="szName" :icons="icons"/>
      </v-row>
      <v-row class="mt-8">
        <v-col>
          <v-divider class="mb-4"/>
          <v-list-item-title class="d-flex justify-center">footer</v-list-item-title>

        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
<script>
import leftComponent from '@/components/left'
import rightComponent from '@/components/right'
export default {
  async fetch(e){
    console.log(e)
  },
  components:{
    leftComponent,
    rightComponent,
  },
  data(){
    return{
      icons:[
        {icon:'mdi-star-outline',text:'favorite'},
        {icon:'mdi-rocket-outline',text:'trending'},
        {icon:'mdi-newspaper-variant-outline',text:'articles'}
      ],
      szName:null,
    }
  },
  computed:{
    watchTheme(){
      return this.$store.state.themeDark
    }
  },
  watch:{
    watchTheme(){
      if(this.$store.state.themeDark){
        this.$vuetify.theme.dark=true
      }
      else{
        this.$vuetify.theme.dark=false
      }
    }
  },
  beforeCreate() {

  },
  beforeMount() {
    this.$store.commit('switchTheme',localStorage.getItem('theme')=='true')
    this.$vuetify.theme.dark=localStorage.getItem('theme')=='true'
  },
  mounted() {
    this.$store.commit('getSizeScreen')
    this.szName=this.$store.state.screenSize
    window.addEventListener('resize',()=>{
      this.$store.commit('getSizeScreen')
      this.szName=this.$store.state.screenSize
    })
  }
}
</script>
<style>
body{
  background:white;
}
</style>
