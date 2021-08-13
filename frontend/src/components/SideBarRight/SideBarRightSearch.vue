<template>
  <div class="search">
    <img src="../../assets/tweet-icons/find-search.svg" alt="" />
    <input type="text" placeholder="Search Twitter" />
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.search {
  margin-bottom: 1rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 15px auto;
  height: 48px;
  background: #e7ecf0;
  border-radius: 100px;

  img {
    margin-left: 17.67px;
    margin-right: 9.88px;
  }
  input {
    color: #828282;
    background: #e7ecf0;
    font-size: 15px;
    line-height: 27.58px;
    width: 15rem;
  }
  input:active {
    outline: none;
    border: none;
  }
  input:focus {
    outline: 0;
  }
}
</style>