<template>
  <v-row>
    <v-col v-for="n in items.length" :cols="_.indexOf(['xl','lg'],$store.state.screenSize)>=0?3:($store.state.screenSize=='md'?4:6)" :key="n">
      <v-hover v-slot="{hover}">
        <v-img src="https://www.appstorrent.ru/uploads/posts/2021-03/1617093116_wasteland-3-min.jpg"
               style="border-radius: 5px;">
          <div
            :style="'width: 100%;height: 100%;cursor:pointer;'+(hover?'border:2px solid #2196F3;border-radius:5px;':'')"></div>
        </v-img>
      </v-hover>
      <v-hover v-slot="{hover}">
        <h4 :style="hover?'color:#2196F3;cursor:pointer;':''">River City Ransom: Underground</h4>
      </v-hover>
      <div class="text-caption">
        <v-hover v-slot="{hover}">
                <span
                  :style="hover?'text-decoration:underline;color:#2196F3;cursor:pointer;':''">Simulation Strategy</span>
        </v-hover>
        /
        <v-hover v-slot="{hover}">
          <span :style="hover?'text-decoration:underline;color:#2196F3;cursor:pointer;':''">RPG</span>
        </v-hover>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
name: "list_view_2",
  props:['items']
}
</script>

<style scoped>

</style>
