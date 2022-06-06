<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'App',
  computed: {
    ...mapGetters('account', ['isLoggedIn']),
    selectedKeys() {
      return [this.$route.name]
    },
    layout() {
      return `${this.$route.meta.layout || 'default'}-layout`
    }
  }
}
</script>

<template>
  <div id="app">
    <div class="layout-wrapper">
      <component :is="layout" :selectedKeys="selectedKeys" />
    </div>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap');
@import './assets/scss/main.scss';
@import './assets/css/reset.css';

body {
  background-color: $color-bg;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
