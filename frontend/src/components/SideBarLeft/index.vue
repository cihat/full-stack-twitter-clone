<script>
import Lists from '@/components/SideBarLeft/SideBarLeftLists'
import Icons from '@/components/Icons'

export default {
  name: 'SideBarLeft',
  components: {
    Lists,
    Icons
  }
}
</script>

<template>
  <div id="sidebar-left">
    <router-link to="/" tag="a">
      <icons class="twitter-icon" icon="twitter" />
    </router-link>
    <lists />
  </div>
</template>

<style scoped lang="scss">
#sidebar-left {
  top: 0;
  left: 0;
  max-width: 251px;
  padding-left: 12px;
  padding-right: 12px;

  .twitter-icon {
    padding: 0.7rem;
    width: 50px;
    height: 50px;
    &:hover {
      background-color: rgba(#1da1f2, 0.2);
      border-radius: 100px;
    }
  }
}

@media (max-width: 1264px) {
  html {
    font-size: 14px;
  }
  #sidebar-left {
    width: 88px;
    height: 598px;
    // overflow-x: auto;
  }
}

@media (max-width: 476px) {
  #sidebar-left {
    padding: 0;
    display: none;
  }
}
</style>