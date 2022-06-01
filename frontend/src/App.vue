<script>
import SideBarLeft from './components/SideBarLeft'
import SideBarRight from './components/SideBarRight'
import Login from './views/Login.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'App',
  computed: {
    ...mapGetters('auth', ['isLoggedIn']),
    selectedKeys() {
      return [this.$route.name]
    },
    layout() {
      return `${this.$route.meta.layout || 'default'}-layout`
    }
  },
  async created() {
    await this.init()
  },
  methods: {
    ...mapActions('auth', ['init'])
  }
  // components: {
  //   SideBarLeft,
  //   SideBarRight,
  //   Login
  // }
}
</script>

<template>
  <div id="app">
    <div class="layout-wrapper">
      <component :is="layout" :selectedKeys="selectedKeys"></component>
    </div>
    <!-- <div v-if="!isLogin" class="login-page">
      <Login />
    </div>
    <div v-else class="layout">
      <SideBarLeft />
      <router-view id="router-view" />
      <SideBarRight />
    </div>
  </div> -->
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

#app {
  display: flex;
  margin-left: auto;
  margin-right: auto;
  min-height: 100vh;
  min-width: 100vw;
  .layout {
    // display: grid;
    // grid-template-columns: 275px 600px 350px;
    // grid-gap: 40px;
    display: flex;
    margin-left: auto;
    margin-right: auto;
  }

  #router-view {
    flex: auto;
    max-width: 600px;
    // flex-grow: 40;
  }
}
</style>
