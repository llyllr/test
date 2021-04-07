<template>
  <v-col lg="10" xl="10" md="11" sm="12" cols="12">
    <v-row>
      <v-col cols="9" lg="7" md="7" xl="7" sm="10">
        <v-text-field label="search" append-icon="mdi-magnify"></v-text-field>
      </v-col>
      <v-col cols="12" lg="2" md="2" xl="2" sm="12" class="d-flex align-center justify-space-around"
             v-if="_.indexOf(['lg','xl','md'],screenSize)>=0">
        <v-btn fab icon small v-for="(item,index) in socialButton" :key="index">
          <v-icon>{{ item.icon }}</v-icon>
        </v-btn>
      </v-col>
      <v-col cols="3" lg="3" md="3" xl="3" sm="2" class="d-flex align-center justify-end">
        <v-btn icon @click="$store.commit('switchTheme')" class="mr-2">
          <v-icon v-if="!$store.state.themeDark">mdi-white-balance-sunny</v-icon>
          <v-icon v-else >mdi-moon-waxing-crescent</v-icon>
        </v-btn>
        <v-menu offset-y open-on-hover v-if="_.indexOf(['xl','lg','md'],screenSize)>=0">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              v-on="on"
              depressed
              rounded
              class="mr-3"
            >
              <v-icon>mdi-web</v-icon>
              EN
            </v-btn>
          </template>
          <v-list>
            <v-list-item-group v-model="menuValue.language" :mandatory="menuValue.language!=null?true:false">
              <v-list-item
                v-for="(item, i) in socialButton"
                :key="i"
                link
              >
                <v-list-item-content>
                  <v-list-item-title v-text="_.startCase(item.text)"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-menu>
        <v-btn color="info" depressed rounded to="/login" v-if="!$store.state.user.logged">login</v-btn>
        <div v-else>
          <v-menu offset-y v-if="_.indexOf(['xl','lg','md'],screenSize)>=0" >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                v-bind="attrs"
                v-on="on"
                depressed
                rounded
                class="mr-3"
              >
                <v-icon>mdi-account</v-icon>
                EN
              </v-btn>
            </template>
            <v-list>
              <v-list-item-group v-model="menuValue.logged" :mandatory="menuValue.logged!=null?true:false">
                <v-list-item
                  v-for="(item, i) in userButton"
                  :key="i"
                  link
                >
                  <v-list-item-content>
                    <v-list-item-title v-text=""><v-icon left>{{item.icon}}</v-icon>{{_.startCase(item.text)}}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-menu>
        </div>
      </v-col>
      <v-col cols="12" v-if="_.indexOf(['xs','sm'],screenSize)>=0" class="d-flex justify-space-around">
        <v-btn icon v-for="(item,key) in icons" :key="key">
          <v-icon>{{ item.icon }}</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <nuxt :screenSize="screenSize"/>
  </v-col>
</template>
<script>
import carousel_1 from "@/components/carousel/carousel_1";

export default {
  name: "right",
  components: {
    carousel_1
  },
  props: ['screenSize', 'icons'],
  data() {
    return {
      socialButton: [
        {icon: 'mdi-discord', text: 'discord'},
        {icon: 'mdi-instagram', text: 'instagram'},
        {icon: 'mdi-vk', text: 'vk'}
      ],
      userButton:[
        {icon:'mdi-newspaper-variant-outline',text:'profile'},
        {icon:'mdi-account-cog-outline',text:'settings'},
        {icon:'mdi-location-exit',text:'logout'},
      ],
      menuValue: {
        language:null,
        logged:null
      }
    }
  },
  computed:{
    watchMenuLogged(){
      return this.menuValue.logged
    }
  },
  watch:{
    watchMenuLogged(){
      if(this.menuValue.logged==2){
        this.$store.commit('logout')
      }
    }
  }
}
</script>

<style scoped>

</style>
