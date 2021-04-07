<template>
  <v-col class="pa-0">
    <v-img src="https://www.appstorrent.ru/uploads/posts/2020-12/1607515710_downie.jpg" style="border-radius: 5px;">
      <div style="width: 100%;height:100%;background:rgba(0,0,0,0.2)"
           class="d-flex align-content-space-between flex-wrap pa-4">
        <v-subheader dark class="font-weight-bold">
          <v-tooltip bottom>
            <template v-slot:activator="{on,attr}">
              <span v-on="on" v-bind="attr">
                <v-icon class="mr-1" >mdi-calendar-range</v-icon>
              03/04/2021
              </span>

            </template>
            <span>Updated at</span>
          </v-tooltip>
        </v-subheader>
        <v-subheader dark class="font-weight-bold">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <span v-bind="attrs"
                    v-on="on">
                <v-icon class="mr-1"
                >
                mdi-cloud-download
              </v-icon>
              400001
              </span>
            </template>
            <span>Downloaded</span>
          </v-tooltip>
        </v-subheader>
        <v-subheader dark class="font-weight-bold">
          <v-tooltip bottom>
            <template v-slot:activator="{on,attrs}">
              <span v-on="on" v-bind="attrs">
                 <v-icon class="mr-1">mdi-eye-check-outline</v-icon>
              400001
              </span>
            </template>
            <span>Viewed</span>
          </v-tooltip>

        </v-subheader>
        <div class="pa-4" style="width: 100%;">
          <v-hover v-slot="{hover}">
            <span style="color:white;font-size:26px;font-weight: bold;" class="mb-4" :style="hover?'cursor:pointer;color:#2196F3;text-decoration:underline;':''">
              Adobes
              <v-icon right color="white" large>{{hover?'mdi-lightbulb-on-outline':'mdi-lightbulb-outline'}}</v-icon>
            </span>
          </v-hover>
          <h1 style="color:white;font-size:60px;" class="mb-2">Activating any IDE from JetBrains</h1>
          <div style="width: 100%">

            <v-list-item-subtitle style="color:white;">
              In this
              article, we will tell you all the methods we know of using any IDE from JetBrains for
              free.
            </v-list-item-subtitle>
            <div class="mt-2">
              <v-chip ripple link>{{ _.startCase('video editor') }}</v-chip>
              <v-chip ripple link>{{ _.startCase('Photo editor') }}</v-chip>
            </div>
          </div>
        </div>
      </div>
    </v-img>
    <v-row>
      <v-col cols="12">
        <div class="d-flex justify-space-between align-baseline">
          <h1 class="mt-8 mb-1">Infomations
            <v-icon>mdi-information-outline</v-icon>
          </h1>
        </div>
        <v-divider class="mb-3"></v-divider>
        <v-row>
          <v-col cols="4">
            <v-list-item-subtitle>Version</v-list-item-subtitle>
            <v-list-item-title style="font-weight: bold;">
              <v-icon left>mdi-puzzle-outline</v-icon>
              18.1
            </v-list-item-title>
          </v-col>
          <v-col cols="4">
            <v-list-item-subtitle class="d-flex justify-space-between">
              <span>Interface Language</span>
              <v-hover v-slot="{hover}">
                <span :style="hover?'color:#2196F3;text-decoration: underline;':''" style="cursor: pointer;color:#ccc;"
                      @click="viewMore.interface=!viewMore.interface">Show {{
                    viewMore.interface ? 'Less' : 'More'
                  }}</span>
              </v-hover>
            </v-list-item-subtitle>
            <v-list-item-title :style="!viewMore.interface?'':'white-space: normal;'">
              <v-icon left>mdi-web</v-icon>
              <v-hover v-slot="{hover}">
                <span :style="hover?'color:#2196F3;text-decoration: underline;':''"
                      style="cursor: pointer;font-weight: bold;">English</span>
              </v-hover>
              ,
              <v-hover v-slot="{hover}">
                <span :style="hover?'color:#2196F3;text-decoration: underline;':''"
                      style="cursor: pointer;font-weight: bold;">Polish</span>
              </v-hover>
              ,
              <v-hover v-slot="{hover}">
                <span :style="hover?'color:#2196F3;text-decoration: underline;':''"
                      style="cursor: pointer;font-weight: bold;">Chinese</span>
              </v-hover>
              ,
              <v-hover v-slot="{hover}">
                <span :style="hover?'color:#2196F3;text-decoration: underline;':''"
                      style="cursor: pointer;font-weight: bold;">Canadian</span>
              </v-hover>
              ,
              <v-hover v-slot="{hover}">
                <span :style="hover?'color:#2196F3;text-decoration: underline;':''"
                      style="cursor: pointer;font-weight: bold;">Japanese</span>
              </v-hover>
              ,
              <v-hover v-slot="{hover}">
                <span :style="hover?'color:#2196F3;text-decoration: underline;':''"
                      style="cursor: pointer;font-weight: bold;">Campodian</span>
              </v-hover>
              ,
              <v-hover v-slot="{hover}">
                <span :style="hover?'color:#2196F3;text-decoration: underline;':''"
                      style="cursor: pointer;font-weight: bold;">Vietnamse</span>
              </v-hover>
              ,
              <v-hover v-slot="{hover}">
                <span :style="hover?'color:#2196F3;text-decoration: underline;':''"
                      style="cursor: pointer;font-weight: bold;">Laos</span>
              </v-hover>
            </v-list-item-title>
            <v-list-item-title>

            </v-list-item-title>
          </v-col>
          <v-col cols="4">
            <v-list-item-subtitle style="text-align: end;">Size</v-list-item-subtitle>
            <v-list-item-title style="text-align: end;font-weight: bold;">
              <v-icon left>mdi-database</v-icon>
              24.4Gb
            </v-list-item-title>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">
            <v-list-item-subtitle class="d-flex justify-space-between">
              <span>Tags</span>
              <v-hover v-slot="{hover}">
                <span :style="hover?'color:#2196F3;text-decoration: underline;':''" style="cursor: pointer;color:#ccc;"
                      @click="viewMore.tag=!viewMore.tag">Show {{ viewMore.tag ? 'Less' : 'More' }}</span>
              </v-hover>
            </v-list-item-subtitle>
            <v-list-item-title :style="viewMore.tag?'white-space:normal':''">
              <v-chip v-for="n in 5" :key="n" color="info" small link>Included: Adobe Zii 2021
                <v-icon right small>mdi-tag</v-icon>
              </v-chip>
            </v-list-item-title>
          </v-col>
          <v-col cols="4">
            <v-list-item-subtitle>
              <span>Compatibility</span>
            </v-list-item-subtitle>
            <v-list-item-title style="font-weight:bold">
              <v-icon left>mdi-desktop-classic</v-icon>
              macOS 10.14 and newer
            </v-list-item-title>
          </v-col>
          <v-col cols="4">
            <v-list-item-subtitle style="text-align: end">
              <span>Architecture</span>
            </v-list-item-subtitle>
            <v-list-item-title style="text-align: end">
              <v-icon left>mdi-rotate-orbit</v-icon>
              <v-hover v-slot="{hover}">
                <span :style="hover?'color:#2196F3;text-decoration: underline;':''"
                      style="cursor: pointer;font-weight: bold;">x86 (64-bit)</span>
              </v-hover>
            </v-list-item-title>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <div class="d-flex justify-space-between align-baseline">
          <h1 class="mt-8 mb-1">Description
            <v-icon>mdi-text</v-icon>
          </h1>
          <a>Homepage
            <v-icon>mdi-home-import-outline</v-icon>
          </a>
        </div>
        <v-divider class="mb-3"></v-divider>
        <v-row>
          <v-col>
            <vue-clamp :max-lines="3" :expanded="viewMore.description">
              After Effects is the industry standard for motion graphics and visual effects. Used by motion designers,
              graphic designers and video editors to create complex motion graphics and visually appealing videos.

              Create motion graphics
              Animate text and graphics with preset styles or customize them frame by frame. Edit, add depth, animate or
              convert to editable paths for even more unique results.

              Transform your footage with visual effects
              Remove unwanted objects, stabilize shaky videos, or create motion that never happened. Adjust colors, blur
              or sharpen images, distort frames, turn flat objects into 3D shapes, and more.

              Powerful compositing tools
              Effectively work with masks and layers and create animations on any layer. Individual control of shading
              and transparency. Isolate the foreground elements from the background in no time.

              Get Started with Presets and Guides
              Get started on your project with preset styles, template compositions. Use brainstorming and other
              creative time-saving tools. Get started with walkthroughs right after you open After Effects.
            </vue-clamp>
            <v-hover v-slot="{hover}">
              <span :style="hover?'color:#2196F3;text-decoration: underline;':''" style="cursor: pointer;color:#ccc;"
                    @click="viewMore.description=!viewMore.description">Show {{
                  viewMore.description ? 'Less' : 'More'
                }}</span>
            </v-hover>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <h1 class="mt-8 mb-1">Screenshots
          <v-icon>mdi-camera</v-icon>
        </h1>
        <v-divider class="mb-3"></v-divider>
        <v-row>
          <v-col cols="6" v-for="(n,index) in 2" :key="n">
            <v-img style="border-radius: 5px"
                   :src="index==0?screenShots.imgs[screenShots.actived].src:screenShots.imgs[screenShots.actived+1].src">
              <div style="width: 100%;height: 100%;" class="d-flex align-center pa-4"
                   :class="index==1?'justify-end':''">
                <v-btn icon outlined x-large color="white" @click="index==0?updateCarousel():updateCarousel(true)">
                  <v-icon>{{ index == 0 ? 'mdi-arrow-left' : 'mdi-arrow-right' }}</v-icon>
                </v-btn>
              </div>
            </v-img>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <h1 class="mt-8 mb-1">What's new
          <v-icon>mdi-new-box</v-icon>
        </h1>
        <v-divider class="mb-3"></v-divider>
        <p> Check out what's new in the latest release of After Effects on <a>the Adobe Official Homepage
          <v-icon>mdi-home-import-outline</v-icon>
        </a></p>
        <div class="pa-4" style="background:#262626;border-radius: 5px;color: white;">
          <v-row>
            <v-col :cols="_.indexOf(['xl','lg'],$store.state.screenSize)>=0?6:12">
              <h1>Installation instructions</h1>
              Mount the downloaded image and go to the "Extra" folder.
              Run the installer and follow the standard installation procedure.
              Errors when installing applications on Mac >

              To activate, use Adobe Zii Patcher (next to the "Extra" folder).
              Activation instructions with pictures >
            </v-col>
          </v-row>
          <v-row>
            <v-col :cols="_.indexOf(['xl','lg'],$store.state.screenSize)>=0?6:12">
              <v-btn color="success" large rounded>
                <v-icon left>mdi-cloud-download-outline</v-icon>
                Download from Google Drive
              </v-btn>
              <v-btn color="info" large text rounded>
                <v-icon left>mdi-format-list-checks</v-icon>
                Previous versions
              </v-btn>
            </v-col>
            <v-col :cols="_.indexOf(['xl','lg'],$store.state.screenSize)>=0?6:12" class="d-flex justify-end">
              <v-tooltip bottom>
                <template v-slot:activator="{on,attr}">
                  <v-btn icon x-large color="success" v-on="on" v-bind="attr" @click="dialog.display=true">
                    <v-icon>mdi-shield-bug-outline</v-icon>
                  </v-btn>
                </template>
                <span>Virus checked</span>
              </v-tooltip>

            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <h1 class="mt-8 mb-1">You Might Also Like
          <v-icon>mdi-playlist-star</v-icon>
        </h1>
        <v-divider class="mb-3"></v-divider>
        <list_view_1 :items="[1,1,3]"/>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-row>
          <v-col cols="12">
            <v-divider class="mb-8 mt-4"></v-divider>
          </v-col>
        </v-row>
      </v-col>
      <comments/>
    </v-row>
    <virus_detect_dialog :dialog.sync="dialog"/>
  </v-col>
</template>

<script>
import list_view_1 from "@/components/list_views/list_view_1";
import virus_detect_dialog from "@/components/dialogs/virus_detect";
import vueClamp from 'vue-clamp'
import comments from "@/components/comments";

export default {
  name: "product_detail",
  components: {
    vueClamp,
    list_view_1,
    virus_detect_dialog,
    comments
  },
  data() {
    return {
      viewMore: {
        tag: false,
        interface: false,
        description: false,
      },
      screenShots: {
        imgs: [
          {src: 'https://www.appstorrent.ru/uploads/posts/2019-12/thumbs/1575362877_1.jpg'},
          {src: 'https://www.appstorrent.ru/uploads/posts/2019-12/thumbs/1575362858_2.jpg'},
          {src: 'https://www.appstorrent.ru/uploads/posts/2019-12/thumbs/1575362869_3.jpg'},
          {src: 'https://www.appstorrent.ru/uploads/posts/2019-12/thumbs/1575362853_4.jpg'}
        ],
        actived: 0
      },
      comment: {
        content: null
      },
      dialog:{
        display:false,
      }
    }
  },
  methods: {
    updateCarousel(right = false) {
      if (right) {
        if (this.screenShots.actived < this.screenShots.imgs.length - 2) {
          this.screenShots.actived += 1
        }
      } else {
        if (this.screenShots.actived > 0) {
          this.screenShots.actived -= 1
        }
      }
    }
  },
  mounted() {
    document.title='Application page'
  }
}
</script>

<style scoped>

</style>
