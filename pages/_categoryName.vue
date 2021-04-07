<template>
  <v-col class="pa-0">
    <v-row class="d-flex justify-space-between align-baseline">
      <v-col :cols="_.indexOf(['xl','lg'],$store.state.screenSize)>=0?8:12" style="font-size:38px;font-weight: bold;">
        {{ $route.params.categoryName }}
      </v-col>
      <v-col :cols="_.indexOf(['xl','lg'],$store.state.screenSize)>=0?2:6">
        <v-select v-model="sortBy.actived" :items="_.sortBy(sortBy.items,'text')"
                  item-text="text"
                  item-value="value"
                  label="Sort by"
        ></v-select>
      </v-col>
      <v-col :cols="_.indexOf(['xl','lg'],$store.state.screenSize)>=0?2:6">
        <v-select v-model="sortBy.actived" :items="_.sortBy(sortBy.items,'text')"
                  item-text="text"
                  item-value="value"
                  label="Sort by"
        ></v-select>
      </v-col>
    </v-row>
    <v-divider class="mb-8"></v-divider>
    <list_view_1 :items="[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]"/>
    <v-row class="mt-8">
      <v-col class="d-flex justify-center">
        <v-btn rounded color="info" large depressed>load more <v-icon>mdi-dots-horizontal</v-icon></v-btn>
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
import list_view_1 from "@/components/list_views/list_view_1";

export default {
  name: "categoryName",
  components: {
    list_view_1,
  },
  data() {
    return {
      sortBy: {
        items: [
          {text: 'Name', value: 'name'},
          {text: 'Newest', value: 'date'},
          {text: 'Comments', value: 'comment'},
          {text: 'Popularity', value: 'popularity'},
        ],
        actived: null
      }
    }
  }
}
</script>

<style scoped>

</style>
