<template>
  <div>
    <v-row>
      <carousel_1/>
    </v-row>
    <v-row>
      <v-container class="pa-1">
        <div class="d-flex justify-space-between align-baseline">
          <h1 class="mt-4 mb-1">Programs</h1>
          <a>View All</a>
        </div>
        <v-divider class="mb-3"></v-divider>
        <list_view_1 :items="[1,2,3,4,5,6,7,8,8,9,9,1]"/>
      </v-container>
    </v-row>
    <v-row>
      <v-container class="pa-1">
        <div class="d-flex justify-space-between align-baseline">
          <h1 class="mt-4 mb-1">Games</h1>
          <a>View All</a>
        </div>
        <v-divider class="mb-3"></v-divider>
        <list_view_2 :items="[1,2,3,4,5,6,7,8,8,9,9,1]"/>
      </v-container>
    </v-row>
    <v-row>
      <v-container class="pa-1">
        <div class="d-flex justify-space-between align-baseline">
          <h1 class="mt-4 mb-1">Articles</h1>
          <a>View All</a>
        </div>
        <v-divider class="mb-3"></v-divider>
        <v-row>
          <v-col :cols="_.indexOf(['xl','lg'],$store.state.screenSize)>=0?4:($store.state.screenSize=='md'?6:12)" v-for="n in 3" :key="n">
            <v-hover v-slot="{hover}">
              <v-img src="https://www.appstorrent.ru/uploads/posts/2021-03/1614784089_jetbrains.jpg"
                     style="border-radius: 5px;"
                     @click="$router.push('/articles/hehe')"
              >
                <div style="width: 100%;height: 100%;background:rgba(0,0,0,0.3);color:white;position: relative;"
                     class="d-flex align-content-space-between flex-wrap">
                  <v-subheader style="color:#ccc;" :style="hover?'color:white;':''">03/04/2021</v-subheader>
                  <div class="pa-4" style="width: 100%;">
                    <h2>Activating any IDE from JetBrains</h2>
                    <div style="width: 100%">

                      <v-list-item-subtitle style="color:#ccc;" :style="hover?'color:white;':''">
                        In this
                        article, we will tell you all the methods we know of using any IDE from JetBrains for
                        free.
                      </v-list-item-subtitle>
                    </div>
                    <div style="width: 100%;height: 100%;position: absolute;top:0px;right:0px" :style="hover?'border:1px solid #2196F3;border-radius:5px;cursor:pointer;':''"></div>
                  </div>
                </div>
              </v-img>
            </v-hover>
          </v-col>
        </v-row>
      </v-container>
    </v-row>
    <v-row>
      <v-container class="pa-1">
        <div class="d-flex justify-space-between align-baseline">
          <h1 class="mt-4 mb-1">{{_.startCase('Best of deal')}}</h1>
          <a>View All</a>
        </div>
        <v-divider class="mb-3"></v-divider>
        <v-row>
          <div :class="_.indexOf(['lg','xl'],$store.state.screenSize)>=0?'col-4':($store.state.screenSize=='md'?'col-6':'col-12')" v-for="n in 4" :key="n">
            <v-container style="width:100%;border-radius: 5px;border:1px solid #2b2b2b">
              <v-list-item three-line class="pa-4">
                <v-list-item-content>
                  <v-list-item-title class="headline mb-1">
                    Headline 5
                  </v-list-item-title>
                  <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-avatar
                  tile
                  size="80"
                  color="grey"
                >
                  <v-img src="https://www.appstorrent.ru/uploads/posts/2020-12/thumbs/1608139252_1604678660_office.png"></v-img>
                </v-list-item-avatar>
              </v-list-item>
              <v-card-actions class="pa-4 d-flex justify-space-between" >
                <v-btn
                  rounded
                  outlined
                  text
                >
                  <v-icon>mdi-cart-arrow-down</v-icon>
                </v-btn>
                <span style="font-size:24px;">5$<span style="text-decoration: line-through;font-size:18px;color:#C62828;" class="ml-1">10$</span><v-icon dark>mdi-tag-heart-outline</v-icon></span>
              </v-card-actions>
            </v-container>
          </div>
        </v-row>
      </v-container>
    </v-row>
  </div>
</template>

<script>
import leftComponent from '@/components/left'
import rightComponent from '@/components/right'
import carousel_1 from "@/components/carousel/carousel_1";
import list_view_1 from "@/components/list_views/list_view_1";
import list_view_2 from "@/components/list_views/list_view_2";
export default {
  components:{
    leftComponent,
    rightComponent,
    carousel_1,
    list_view_1,
    list_view_2,
  },
  props:['screenSize'],
  data:()=>{
    return {
       colSize:{
         left:null,
         right:null
       },
      icons:[
        {icon:'mdi-star-outline',text:'favorite'},
        {icon:'mdi-rocket-outline',text:'trending'},
        {icon:'mdi-newspaper-variant-outline',text:'articles'}
      ],
    }
  },
  methods:{

  },
  computed:{

  },
  watch:{

  },
  mounted() {
    document.title='Home page'
  }
}
</script>

<style>

</style>
