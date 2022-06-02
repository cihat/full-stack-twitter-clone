<script>
import Login from '../views/Login.vue'

export default {
  name: 'auth-layout',
  components: {
    Login
  }
}
</script>

<template>
  <div class="login-page">
    <router-view id="router-view" />
  </div>
</template>

<style lang="scss" scoped>
#router-view {
  flex: auto;
  max-width: 600px;
  // flex-grow: 40;
}
</style>
