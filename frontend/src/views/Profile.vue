<script>
import { mapGetters } from 'vuex'
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
  computed: {
    ...mapGetters('account', ['user'])
  }
}
</script>

<template>
  <div class="profile">
    <h1>This is an profile page</h1>
    <br />
    <h2>User Name: {{ user.name }}</h2>
    <br />
    <h2>{{ user.name }}'s {{ user.tweets.length }} Tweets</h2>
    <p v-if="errMessage">{{ errMessage }}</p>
    <p v-else-if="isLoading">Please wait..⌛️.</p>
    <div v-else>
      <Tweet :accountData="user" />
    </div>
    <br />
    <h2>{{ user.following.length }} following</h2>
    <br />
    <h2>{{ user.followers.length }} followers</h2>
    <br />
    <h1>{{ user.likedTweets.length }} liked tweets</h1>
    <div>
      <Tweet :accountData="user.likedTweets" />
    </div>
    <br />
    <h1>{{ user.retweets.length }} retweets</h1>
    <div>
      <Tweet :accountData="user.retweets" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.profile {
  width: 600px;
  margin-top: 1rem;
}
</style>
