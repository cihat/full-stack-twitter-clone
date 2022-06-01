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
    <SideBarLeft />
    <router-view id="router-view" />
    <SideBarRight />
  </div>
</template>

<style lang="scss" scoped>
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
</style>
