<template>
  <div class="container">
    <span>
      <a href="#">Terms of Service</a>
    </span>
    <span>
      <a href="#">Privacy Policy</a>
    </span>
    <span>
      <a href="#">Cookie Policy</a>
    </span>
    <span>
      <a href="#">Ads info</a>
    </span>
    <span>
      <a href="#">More···</a>
    </span>
    <span>
      <a href="#">© 2021 Twitter, Inc.</a>
    </span>
  </div>
</template>

<script>
export default {
  name: 'SideBarRightFooter'
}
</script>

<style scoped lang="scss">
.container {
  position: sticky;
  top: calc(314px + 1rem + 24px);
  width: 350px;
  margin-top: 16px;
  margin-left: 25px;
  padding-left: 16px;
  padding-right: 16px;

  span {
    margin-right: 4px;

    a {
      color: #5b7083;
      font-size: 12px;
    }
  }
}
</style>