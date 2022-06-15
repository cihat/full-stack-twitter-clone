<script>
import CreateTweet from '@/components/CreateTweet'
import Tweet from '@/components/Tweet'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  data() {
    return {
      errMessage: '',
      isLoading: true
    }
  },
  components: {
    CreateTweet,
    Tweet
  },
  computed: {
    ...mapState('tweet', ['tweets'])
  }
}
</script>

<template>
  <div id="home-page" class="home">
    <div class="title">
      <h3>Home</h3>
      <img src="@/assets/img/starsicon.png" alt="" class="icon" />
    </div>
    <CreateTweet />
    <p v-if="errMessage">{{ errMessage }}</p>
    <p v-else-if="!tweets && tweets.length < 0">Please wait..⌛️.</p>
    <div v-else>
      <ul v-for="tweet in tweets" :key="tweet.id">
        <Tweet :tweetData="tweet" />
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.home {
  // max-width: 600px;
  // min-width: 598px;
  // border: 1px solid rgba(0, 0, 0, 0.08);

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
