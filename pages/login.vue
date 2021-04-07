<template>
<login_register :type="'login'"/>
</template>

<script>
import login_register from "@/components/login_register";
export default {
  name: "login",
  layout:'layout_1',
  components:{
    login_register
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
