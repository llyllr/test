<template>
  <v-container class="pa-1">
    <v-card>
        <v-img :src="source[active].src" class="d-flex align-end" @click="$router.push('/product_detail')">
          <v-row class="mb-4 justify-center">
            <v-btn large @click.stop="updateCarousel(index)" icon dark v-for="(n,index) in source.length" :key="index">
              <v-icon>mdi-circle-small</v-icon>
            </v-btn>
          </v-row>

        </v-img>
    </v-card>

  </v-container>
</template>

<script>
export default {
  name: "carousel_1",
  data:()=>{
    return {
      source:[
        {src:'https://mir-s3-cdn-cf.behance.net/project_modules/fs/65f335104454295.5f634082a1a63.png',text:'photo 1'},
        {src:'https://mir-s3-cdn-cf.behance.net/project_modules/fs/3dcf06113451765.60280b370238c.jpg',text:'photo 2'},
        {src:'https://mir-s3-cdn-cf.behance.net/project_modules/fs/7464d6111882115.6009e8c2a024f.jpg',text:'photo 3'}
      ],
      active:0,
    }
  },
  methods:{
    updateCarousel(id=null){
      if(id==null){
        if(this.active!=this.source.length-1){
          this.active+=1
        }
        else{
          this.active=0
        }
      }
      else{
        this.active=id
      }
    },
  },
  mounted() {
    setInterval(()=>{
      this.updateCarousel()
    },5000)
  }
}
</script>

<style scoped>

</style>
