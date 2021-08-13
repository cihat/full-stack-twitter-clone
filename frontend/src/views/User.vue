<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      user: {},
      errMessage: '',
      isLoading: true
    }
  },
  async mounted() {
    this.user = await this.fetchUser(this.$route.params.userId)
    this.isLoading = false
    console.log(this.user)
  },
  methods: {
    ...mapActions(['fetchUser'])
  }
}
</script>

<template lang="pug">
.user
  p {{ user.name }}
  p(v-if='isLoading') Please wait...
  div(v-else)
    h1 User Detail
    p {{ user.name }}

    h2 Tweets
    div(v-if='user.tweets.length')
      ol 
        li(v-for='tweet in user.tweets')
          .tweet
            p {{ tweet.body }}
            span {{ tweet.likes.length }} kişi beğendi.❤️
            span {{ tweet.retweets.length }} kişi retweet'ledi.🚀
    p(v-else) No tweets
</template>
