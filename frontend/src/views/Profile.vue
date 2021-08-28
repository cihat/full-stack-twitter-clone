<script>
import { mapActions } from 'vuex'
import Tweet from '@/components/Tweet'

export default {
  name: 'Profile',
  data() {
    return {
      userId: '',
      userData: {},
      isLoading: true,
      errMessage: ''
    }
  },
  components: {
    Tweet
  },
  async mounted() {
    this.userId = this.$route.params.id
    console.log(this.userId)
    try {
      this.userData = await this.fetchUser(this.userId)
      console.log(this.userData)
    } catch (e) {
      this.errMessage = e.message
    } finally {
      this.isLoading = false
    }
  },
  methods: {
    ...mapActions(['fetchUser'])
  }
}
</script>

<template>
  <div class="profile">
    <h1>This is an profile page</h1>
    <br />
    <h2>User Name: {{ userData.name }}</h2>
    <br />
    <h2>{{ userData.name }}'s {{ userData.tweets.length }} Tweets</h2>
    <p v-if="errMessage">{{ errMessage }}</p>
    <p v-else-if="isLoading">Please wait..⌛️.</p>
    <div v-else>
      <Tweet :accountData="userData" />
    </div>
    <br />
    <h2>{{ userData.following.length }} following</h2>
    <br />
    <h2>{{ userData.followers.length }} following</h2>
    <br />
    <h1>{{ userData.likedTweets.length }} liked tweets</h1>
    <div>
      <Tweet :accountData="userData.likedTweets" />
    </div>
    <br />
    <h1>{{ userData.retweets.length }} retweets</h1>
    <div>
      <Tweet :accountData="userData.retweets" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.profile {
  width: 600px;
  margin-top: 1rem;
}
</style>
