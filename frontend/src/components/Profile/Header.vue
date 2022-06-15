<script>
import Icons from '@/components/Icons'

export default {
  name: 'ProfileHeader',
  components: {
    Icons
  },
  props: {
    user: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<template>
  <div class="profile_header_wrapper">
    <div class="icon_wrapper" @click="$router.go(-1)">
      <icons icon="back" class="back_icon" />
    </div>
    <div class="user_info">
      <p class="username">
        {{ user.username }}
      </p>
      <p class="tweets_count">
        {{ user.tweets.length + user.retweetedTweets.length }} tweets
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.profile_header_wrapper {
  min-height: 53px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 16px;
  height: 53px;

  .icon_wrapper {
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 50%;
    margin-right: 16px;

    &:hover {
      background-color: rgba(#1da1f2, 0.1);
    }

    .back_icon {
      width: 16px;
      height: 16px;
    }
  }

  .user_info {
    .username {
      font-size: 18px;
      font-weight: bold;
      color: #000;
      margin-bottom: 4px;
    }

    .tweets_count {
      font-size: 14px;
      color: #828282;
    }
  }
}
</style>
