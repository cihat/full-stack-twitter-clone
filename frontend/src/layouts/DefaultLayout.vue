<script>
import SideBarLeft from '../components/SideBarLeft'
import SideBarRight from '../components/SideBarRight'
export default {
  name: 'default-layout',
  components: {
    SideBarLeft,
    SideBarRight
  }
}
</script>

<template>
  <div class="layout">
    <div class="container">
      <div class="grid grid-center">
        <div
          class="col col-12 col-xs-12 col-md-3 col-lg-3 sidebar_left_container"
        >
          <SideBarLeft />
        </div>
        <div
          class="col col-12 col-xs-12 col-md-9 col-lg-6 router_view_container"
        >
          <router-view id="router-view" />
        </div>

        <div
          class="col col-12 col-xs-12 col-md-0 col-lg-3 sidebar_right_container"
        >
          <SideBarRight />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  position: relative;
}

.sidebar_left_container {
  max-width: 260px;
}

.router_view_container {
  max-width: 600px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  padding: 0 !important;
}

.sidebar_right_container {
  max-width: 350px;
}

// .layout {
//   // display: grid;
//   // grid-template-columns: 275px 600px 350px;
//   // grid-gap: 40px;
//   display: flex;
//   margin-left: auto;
//   margin-right: auto;
// }

// #router-view {
//   flex: auto;
//   max-width: 600px;
//   // flex-grow: 40;
// }
</style>
