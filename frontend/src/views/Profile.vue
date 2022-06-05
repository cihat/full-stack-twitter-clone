<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import Tweet from '@/components/Tweet'

export default {
  name: 'Profile',
  data() {
    return {
      username: ''
    }
  },
  components: {
    Tweet
  },
  created() {
    this.username = this.$route.params.username
    this.fetchUser(this.username)
  },
  computed: {
    ...mapState('user', ['user'])
  },
  methods: {
    ...mapActions('user', ['fetchUser'])
  }
}
</script>

<template>
  <div class="profile">
    <h1>This is an profile page</h1>
    <br />
    <h2>User Name: {{ user.name }} @{{ user.username }}</h2>
    <br />
    <h2>{{ user.name }}'s {{ user.tweets.length }} Tweets</h2>
    <br />
    <h2>{{ user.following.length }} following</h2>
    <br />
    <h2>{{ user.followers.length }} followers</h2>
    <br />
    <h3>website: {{ user.website }}</h3>
    <br />
    <h3>Location: {{ user.location }}</h3>
    <br />
    <h3>Bio: {{ user.bio }}</h3>
    <br />
    <h1>{{ user.likedTweets.length }} liked tweets</h1>
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
