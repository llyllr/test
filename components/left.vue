<template>
    <v-col lg="2" xl="2" md="1" sm="12" cols="12" style="position: relative;">
      <div style="position: sticky;top:0px;">
        <h1 @click="$router.push('/')" class="pr-4 pl-4">logo</h1>
        <v-card
          class="mx-auto"
          flat
          v-if="_.indexOf(['lg','xl','md'],screenSize)>=0"
        >
          <style-menu1 v-if="_.indexOf(['lg','xl'],screenSize)>=0"
                       :items="icons" :model.sync="model"/>
          <style-menu2 v-if="screenSize==='md'" :items="icons"/>
        </v-card>
      </div>

    </v-col>
</template>

<script>
import styleMenu1 from '~/components/left_menu_1'
import styleMenu2 from '~/components/left_menu_2'
export default {
  name: "left",
  components:{
    styleMenu1,
    styleMenu2
  },
  props:['screenSize','icons'],
  data(){
    return {
      windowW:null,
      model:null,
      textDisplay:true
    }
  },
  methods:{
    updateModel(val){
      this.model=val
    }
  },
  computed: {

  },
  watch:{
    colSz(){
      console.log(this.colSz)
    },
    model(){
      console.log(this.model)
    }
  },
  mounted() {

  }
}
</script>

<style scoped>

</style>
