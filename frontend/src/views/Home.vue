<script>
import ZoneTweet from '@/components/ZoneTweet'
import Tweet from '@/components/Tweet'
import { mapActions } from 'vuex'

export default {
  name: 'Home',
  data() {
    return {
      users: [],
      errMessage: '',
      isLoading: true
    }
  },
  // async mounted() {
  //   try {
  //     this.users = await this.fetchUsers()
  //   } catch (e) {
  //     this.errMessage = e.message
  //   } finally {
  //     this.isLoading = false
  //   }
  // },
  components: {
    ZoneTweet,
    Tweet
  }
  // methods: {
  //   ...mapActions(['fetchUsers'])
  // }
}
</script>

<template>
  <div id="home-page" class="home">
    <div class="title">
      <h3>Home</h3>
      <img src="@/assets/img/starsicon.png" alt="" class="icon" />
    </div>
    <ZoneTweet />
    <p v-if="errMessage">{{ errMessage }}</p>
    <p v-else-if="isLoading">Please wait..⌛️.</p>
    <div v-else>
      <ul v-for="user in users" :key="user.id">
        <Tweet :accountData="user" />
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.home {
  // max-width: 600px;
  // min-width: 598px;
  border: 1px solid rgba(0, 0, 0, 0.08);

  .title {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    h3 {
      font-weight: 900;
      font-size: 23px;
      line-height: 22.27px;
      color: #000;
      cursor: pointer;
    }
    img {
      cursor: pointer;
    }
  }
}
</style>
