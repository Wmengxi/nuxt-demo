<template>
  <div class="home-login">
    <special-planning></special-planning>
    <login-register></login-register>
  </div>
</template>

<script>
import SpecialPlanning from './modules/SpecialPlanning'
import LoginRegister from './modules/LoginRegister'

export default {
  components: { SpecialPlanning, LoginRegister },
}
</script>

<style lang="less">
.home-login {
  margin-top: -60px;
  margin-bottom: 10px;
  width: 840px;
  height: 360px;
  display: flex;
}

</style>
