<template>
  <v-container class="pa-0">
    <v-row>
      <v-col cols="12">
        <h1>Activating any IDE from JetBrains</h1>
      </v-col>
      <v-col :cols="_.indexOf(['xl','lg'],$store.state.screenSize)>=0?8:12">
        <p>
          In this article, we will tell you all the methods we know of using any IDE from JetBrains for free.
        </p>
        <v-img src="https://www.appstorrent.ru/uploads/posts/2021-03/1614782263_jetbrains.png"></v-img>
        <p>
          The article is relevant for AppCode, CLion, DataGrip, GoLang, IntelliJ IDEA, PhpStrom, PyCharm, Rider, RubyMine, WebStorm.
        </p>
        <v-divider class="mt-4 mb-4"></v-divider>
        <h2>
          Methods for software versions 2020.x
        </h2>
        <h2>
          Trial period reset
        </h2>
        <div style="background:#262626;color:white;border-radius: 5px;" class="pa-4 mt-4">
          <h3 class="link" @click="viewMore.tip1=!viewMore.tip1" :style="viewMore.tip1?'color:#2196F3;':'color:#1565C0;'">
            Reset trial using scripts
            <v-icon right :color="viewMore.tip1?'#2196F3':'#1565C0'">{{viewMore.tip1?'mdi-chevron-up':'mdi-chevron-down'}}</v-icon>
          </h3>
          <p v-if="viewMore.tip1">
            1. Download the archive from the link></br>
            2. Unpack the archive</br>
            3. Close all JetBrains programs</br>
            4. Open the terminal</br>
            5. Write " chmod + x " without quotes and drag the reset_jetbrains_eval_mac_linux.sh file into the terminal window and press Enter</br>
            6. Drag the file into the terminal window  reset_jetbrains_eval_mac_linux.sh and press Enter (it will reset the trial period for ALL JetBrains IDEs in your OS)</br>
            7. When the script finishes, run the JetBrains IDE you need</br>
            8. A start window will appear for activation, in it select the trial version for 30 days</br>

            PS These scripts can be found inside the archives with the jetbrains-agent plugin, but these plugins no longer work in newer versions of JetBrains IDEs
          </p>
        </div>
        <div style="background:#262626;color:white;border-radius: 5px;" class="pa-4 mt-4">
          <h3 class="link" @click="viewMore.tip2=!viewMore.tip2" :style="viewMore.tip2?'color:#2196F3;':'color:#1565C0;'">
            Reset trial using scripts
            <v-icon right :color="viewMore.tip2?'#2196F3':'#1565C0'">{{viewMore.tip2?'mdi-chevron-up':'mdi-chevron-down'}}</v-icon>
          </h3>
          <p v-if="viewMore.tip2">
            1. Download the archive from the link></br>
            2. Unpack the archive</br>
            3. Close all JetBrains programs</br>
            4. Open the terminal</br>
            5. Write " chmod + x " without quotes and drag the reset_jetbrains_eval_mac_linux.sh file into the terminal window and press Enter</br>
            6. Drag the file into the terminal window  reset_jetbrains_eval_mac_linux.sh and press Enter (it will reset the trial period for ALL JetBrains IDEs in your OS)</br>
            7. When the script finishes, run the JetBrains IDE you need</br>
            8. A start window will appear for activation, in it select the trial version for 30 days</br>

            PS These scripts can be found inside the archives with the jetbrains-agent plugin, but these plugins no longer work in newer versions of JetBrains IDEs
          </p>
        </div>
        <v-divider class="mt-6 mb-4"></v-divider>
        <h2>
          Endless activation
        </h2>
        <div style="background:#262626;color:white;border-radius: 5px;" class="pa-4 mt-4">
          <h3 class="link" @click="viewMore.tip3=!viewMore.tip3" :style="viewMore.tip3?'color:#2196F3;':'color:#1565C0;'">
            Reset trial using scripts
            <v-icon right :color="viewMore.tip3?'#2196F3':'#1565C0'">{{viewMore.tip3?'mdi-chevron-up':'mdi-chevron-down'}}</v-icon>
          </h3>
          <p v-if="viewMore.tip3">
            1. Download the archive from the link></br>
            2. Unpack the archive</br>
            3. Close all JetBrains programs</br>
            4. Open the terminal</br>
            5. Write " chmod + x " without quotes and drag the reset_jetbrains_eval_mac_linux.sh file into the terminal window and press Enter</br>
            6. Drag the file into the terminal window  reset_jetbrains_eval_mac_linux.sh and press Enter (it will reset the trial period for ALL JetBrains IDEs in your OS)</br>
            7. When the script finishes, run the JetBrains IDE you need</br>
            8. A start window will appear for activation, in it select the trial version for 30 days</br>

            PS These scripts can be found inside the archives with the jetbrains-agent plugin, but these plugins no longer work in newer versions of JetBrains IDEs
          </p>
        </div>
        <v-divider class="mt-6 mt-4"></v-divider>

      </v-col>
      <v-col :cols="_.indexOf(['xl','lg'],$store.state.screenSize)>=0?4:12" class="pt-0">
        <h2>Read also</h2>
        <v-hover v-slot="{hover}" v-for="n in 4" :key="n">
          <v-img src="https://www.appstorrent.ru/uploads/posts/2021-03/1614782263_jetbrains.png" style="border-radius: 5px;" height="120px" v-ripple class="mt-4" @click="$router.push('/articles/'+n)">
            <div style="height: 100%;height: 100%;background:rgba(0,0,0,0.4);color:white;cursor: pointer;" :style="hover?'background:rgba(0,0,0,0.6);':''" class="d-flex align-center justify-space-between pa-2">
              <span>Activating any IDE from JetBrains</span>
              <span>
              <v-icon color="white">mdi-arrow-right</v-icon>
            </span>
            </div>
          </v-img>
        </v-hover>
      </v-col>
    </v-row>
    <v-row>
      <comments/>
    </v-row>
  </v-container>
</template>

<script>
import comments from "@/components/comments";
export default {
  name: "article-detail",
  components:{
    comments,
  },
  data(){
    return {
      viewMore:{
        tip1:false,
        tip2:false,
        tip3:false,
      }
    }

  }
}
</script>

<style scoped>
h3.link{
  cursor: pointer;
}
h3.link:hover{
  text-decoration: underline;
}
</style>
