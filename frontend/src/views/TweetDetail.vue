<script>
import { mapActions, mapState } from 'vuex'
import Tweet from '../components/Tweet'
export default {
  name: 'TweetDetail',
  components: {
    Tweet
  },
  data() {
    return {
      tweet: '',
      loading: false,
      backendErrors: null
    }
  },
  computed: {
    ...mapState('tweet', ['getTweet'])
  },
  methods: {
    ...mapActions('tweet', ['fetchTweet'])
  },
  async created() {
    await this.fetchTweet(this.$route.params.tweetId)
  }
}
</script>

<template>
  <Tweet :tweetData="getTweet" />
</template>

<style lang="scss" scoped></style>
