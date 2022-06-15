<script>
export default {
  name: 'ProfileInfo',
  props: {
    user: {
      type: Object,
      required: true
    }
  }
}
</script>

<template>
  <div class="profile_info_container">
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
    <h1>{{ user.retweetedTweets.length }} retweets</h1>
    <div>
      <Tweet :accountData="user.retweets" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.profile_info_container {
  padding: 0;
  h2 {
    font-size: 20px;
    font-weight: 700;
  }
}
</style>
