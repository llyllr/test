<template>
  <v-col :cols="_.indexOf(['lg','xl'],$store.state.screenSize)>=0?8:12">
    <h1 class="mt-3 mb-1">Commments (123)
      <v-icon>mdi-comment-account-outline</v-icon>
    </h1>
    <v-row>
      <v-col cols="12" style="position: relative;">
        <v-textarea v-model="comment.content" :disabled="!$store.state.user.logged">
        </v-textarea>
        <v-btn color="info" rounded :disabled="!$store.state.user.logged">submit</v-btn>
        <div style="position:absolute;top:0px;right:0px;height:100%;width:100%"
             class="d-flex justify-center align-center" v-if="!$store.state.user.logged">
          <v-btn rounded color="info" to="/login">
            <v-icon left>mdi-connection</v-icon>
            connect to comment
          </v-btn>
        </div>
      </v-col>
    </v-row>
    <v-row :class="index==0?'mt-4':'mt-2'" v-for="(n,index) in 6" :key="n">
      <v-col cols="12" style="">
        <div style="width: 100%;height: 100%;background:#262626;border-radius: 5px;color:white;">
          <v-list-item>
            <v-list-item-avatar>
              <v-img src="https://www.appstorrent.ru/uploads/posts/2019-01/1547964232_fotoredaktor-movavi.png"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title style="color:white;">User #1</v-list-item-title>
              <v-list-item-subtitle style="color:white;">23/03/2021</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <div class="pa-4">

            failed to download from google drive, goes to a new page and .... nothing ...
            guys, what to do? admin help! give me a link!
            otherwise the 2020 version does not even want to start on my air m1.

            !!! Problem solved! In order to download a file from a Google disk, after clicking on the link in the upper
            right corner, click the "login" button, log into your account and everything is ok, the download starts!

          </div>
        </div>
      </v-col>
      <v-col v-if="index==5" cols="12"
             class="d-flex justify-center">
        <v-btn color="primary" rounded large>load more
          <v-icon>mdi-dots-horizontal</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
    </v-row>
  </v-col>
</template>

<script>
export default {
  name: "comments",
  data() {
    return {
      comment: {
        content: null
      },
    }
  }
}
</script>

<style scoped>

</style>
