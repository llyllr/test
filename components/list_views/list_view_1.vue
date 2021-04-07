<template>
  <v-row>
    <v-col v-for="n in items.length" :key="n" class=""
           :cols="_.indexOf(['lg','xl'],$store.state.screenSize)>=0?4:($store.state.screenSize=='md'?6:12)">
      <v-hover v-slot="{hover}">
        <v-row style="cursor: pointer;">
          <v-col cols="2">
            <v-img width="56" height="56" contain
                   src="https://www.appstorrent.ru/uploads/posts/2020-05/1588586638_vmware-fusion.png"/>
          </v-col>
          <v-col cols="7">
            <div>
              <h4 :style="hover?'color:#2196F3;cursor:pointer;':''">vm workstation</h4>
              <div class="text-caption">CleanMyMac X</div>
            </div>
          </v-col>
          <v-col cols="3">
            <v-chip :color="hover?'info':''">12.2.31</v-chip>
          </v-col>
        </v-row>
      </v-hover>
    </v-col>
  </v-row>
</template>

<script>
export default {
name: "list_view_1",
  props:['items']
}
</script>

<style scoped>

</style>
