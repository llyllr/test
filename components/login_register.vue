<template>
  <v-app>
    <v-container style="max-width: 496px;width:100%;height: 100%" class="d-flex align-center">
      <div style="width: 100%;">
        <v-btn depressed rounded large class="mb-2" @click="backPage()">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <v-card width="100%" flat outlined>
          <v-card-title class=""><h1>{{ isLogin ? _.startCase('login') : _.startCase('register') }}</h1></v-card-title>
          <v-card-text>
            <v-form ref="form" v-model="userInfo.valid">
              <v-text-field v-if="!isLogin" label="Email Address" prepend-icon="mdi-email-outline"
                            v-model="userInfo.email.val" :rules="userInfo.email.rules" required :disabled="loading"/>
              <v-text-field label="Username" prepend-icon="mdi-account-outline" :rules="userInfo.username.rules"
                            v-model="userInfo.username.val" required :error-messages="userInfo.username.errors" :disabled="loading"/>
              <v-text-field ref="password" prepend-icon="mdi-lock-outline" :type="passwordShow?'text':'password'"
                            v-model="userInfo.password.val" :rules="userInfo.password.rules" label="Password"
                            :append-icon="passwordShow?'mdi-eye-outline':'mdi-eye-off-outline'"
                            @click:append="passwordShow=!passwordShow" required :error-messages="userInfo.password.errors" @keypress.enter="!loading?login():''" :disabled="loading"/>
              <v-text-field v-if="!isLogin" :type="passwordShow?'text':'password'" prepend-icon="mdi-lock-outline"
                            v-model="userInfo.repassword.val" :rules="userInfo.repassword.rules" label="Repeat Password"
                            :append-icon="passwordShow?'mdi-eye-outline':'mdi-eye-off-outline'"
                            @click:append="passwordShow=!passwordShow" required :disabled="loading"/>
              <v-dialog v-if="!isLogin"
                        ref="dialog"
                        v-model="dialog.display"
                        :return-value.sync="userInfo.dob.formatted"
                        persistent
                        width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="userInfo.dob.formatted"
                    label="Picker in dialog"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                    :rules="userInfo.dob.rules"
                    @blur="userInfo.dob.val = parseDate(userInfo.dob.formatted)" :disabled="loading"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="userInfo.dob.val"
                  scrollable
                  :allowed-dates='allowedDates'
                  min="1910-01-01"
                  max="2030-01-01"
                  color="success"
                >
                  <v-spacer></v-spacer>
                  <v-btn
                    text
                    color="primary"
                    @click="dialog.display = false"
                  >
                    Cancel
                  </v-btn>
                  <v-btn
                    text
                    color="primary"
                    @click="$refs.dialog.save(userInfo.dob.formatted)"
                  >
                    OK
                  </v-btn>
                </v-date-picker>
              </v-dialog>
            </v-form>
          </v-card-text>
          <v-card-actions class="d-flex justify-center">
            <v-btn color="primary" large rounded depressed :text="!isLogin" @click="!isLogin?viewForm('login'):login()"
                   :loading="isLogin&&loading?true:false" :disabled="!isLogin&&loading?true:false">login
            </v-btn>
            <v-btn color="success" large rounded depressed :text="isLogin"
                   @click="isLogin?viewForm('register'):register()" :loading="!isLogin&&loading?true:false" :disabled="isLogin&&loading?true:false">Register
            </v-btn>
          </v-card-actions>
          <v-card-actions class="d-flex justify-center">
            <v-btn text rounded>
              forgot password?
            </v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </v-container>
    <snackbar :snackbar.sync="snackbar"/>
  </v-app>
</template>

<script>
import snackbar from "@/components/snackbar";
export default {
  name: "login_register",
  components:{
    snackbar,
  },
  props: ['type'],
  data() {
    return {
      passwordShow: false,
      isLogin: true,
      userInfo: {
        email: {
          val: null,
          rules: [
            v => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Email address must be valid',
            v => !!v || 'Email address can not be empty.'
          ]
        },
        username: {
          val: null,
          rules: [
            v => !!v || 'Username can not be empty.'
          ],
          errors:null
        },
        password: {
          val: null,
          rules: [
            v => !!v || 'Password can not be empty.'
          ],
          errors:null
        },
        repassword: {
          val: null,
          rules: [
            v => !v || this.userInfo.password.val === this.userInfo.repassword.val || 'Repeat password was not match.',
            v => !!v || 'Repeat password can not be empty.'
          ]
        },
        dob: {
          val: null,
          formatted: null,
          rules: [
            v => !!v || 'Date of Birth can not be empty.'
          ]
        },
        valid: true
      },
      dialog: {
        display: false,
      },
      loading: false,
      snackbar:{
        display:false,
        content:null,
        timeout:5000,
      }
    }
  },
  methods: {
    allowedDates(val) {
      const date = new Date()
      return parseInt(val.split('-')[0]) <= date.getFullYear() - 10
    },
    formatDate(date) {
      if (!date) return null

      const [year, month, day] = date.split('-')
      return `${day}/${month}/${year}`
    },
    parseDate(date) {
      if (!date) return null
      const [day, month, year] = date.split('/')
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    },
    async register() {
      if (this.$refs.form.validate()) {
        this.loading = true
        await this.$axios.get('/:3001',{
          username:this.userInfo.username.val
        }).then(res=>{
          console.log(res)
        })
        /*
        try {
          await this.$fire.auth.createUserWithEmailAndPassword(this.userInfo.email.val, this.userInfo.password.val)
          const users = this.$fire.firestore.collection('users').doc(this.userInfo.username.val)
          await users.set({
            username: this.userInfo.username.val,
            email: this.userInfo.email.val,
            dob: this.userInfo.dob.val,
            level:0,
            created_at:(new Date())
          })
          this.loading = false
          this.$refs.form.reset()
          this.snackbar.display=true
          this.snackbar.content='🎉 You joined success! 🎉'
        } catch (e) {
          alert(e)
        }
        */
      }
    },
    async login() {
      if (this.$refs.form.validate()) {
        this.loading = true
        try {
          let isset = false,
            user = null
          await this.$fire.firestore.collection('users').doc(this.userInfo.username.val).get().then(res => {
            if (!_.isNil(res.data())) {
              isset = true
              user = res.data()
            }
          })
          if (isset) {
            await this.loginWithUsername(user)
          }
          else {
            this.loading=false
            this.userInfo.username.errors='Check username again!'
            this.userInfo.password.errors='Check password again!'
          }
          //await this.$fire.auth.signInWithEmailAndPassword(this.userInfo.username.val, this.userInfo.password.val)
          //console.log(1)
        } catch (e) {
          this.loading=false
        }
      }
    },
    viewForm(form) {
      if (form == 'register') {
        this.isLogin = false
        this.$router.push({path: '/register', params: 'register'})
      } else {
        this.isLogin = true
        this.$router.push({path: '/login', params: 'login'})
      }
      this.$refs.form.reset()
    },
    backPage() {
      this.$router.push(this.$cookiz.get('previousPage'))
    },
    async loginWithUsername(user) {
      try {
        await this.$fire.auth.signInWithEmailAndPassword(user.email, this.userInfo.password.val)
        this.$store.commit('logged', user)
        this.backPage()
      } catch (e) {
        this.loading=false
        this.userInfo.username.errors='Check username again!'
        this.userInfo.password.errors='Check password again!'
      }
    }
  },
  watch: {
    watchdob() {
      this.userInfo.dob.formatted = this.formatDate(this.userInfo.dob.val)
    },
    isLogin() {
      document.title = this.isLogin ? 'Login page' : 'Register page'
    },
    watchUsername(){
      if(this.userInfo.username.errors!=null){
        this.userInfo.username.errors=null
        this.userInfo.password.errors=null
      }
    },
    watchPassword(){
      if(this.userInfo.password.errors!=null){
        this.userInfo.password.errors=null
        this.userInfo.username.errors=null
      }
    }
  },
  computed: {
    watchdob() {
      return this.formatDate(this.userInfo.dob.val)
    },
    watchTypePage() {
      return this.type
    },
    watchUsername(){
      return this.userInfo.username.val
    },
    watchPassword(){
      return this.userInfo.password.val
    }

  },
  mounted() {
    this.isLogin = this.type === 'login'
    document.title = this.isLogin ? 'Login page' : 'Register page'
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
{
  opacity: 0;
}
</style>
