<template>
<login_register :type="'register'"/>
</template>

<script>
import login_register from "@/components/login_register";
export default {
  name: "register",
  layout:'layout_1',
  components:{
    login_register
  },
}
</script>

<style scoped>

</style>
