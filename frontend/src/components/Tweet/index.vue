<script>
import axios from 'axios'
import Icons from '@/components/Icons'
import { mapActions, mapState } from 'vuex'
import moment from 'moment'

export default {
  name: 'tweet',
  data() {
    return {}
  },
  props: {
    tweetData: {
      type: Object
    }
  },
  components: {
    Icons
  },
  computed: {
    ...mapState('tweet', ['tweet'])
  },
  methods: {
    ...mapActions('tweet', ['likeTweet']),
    ...mapActions('tweet', ['fetchTweet']),
    ...mapActions('tweet', ['fetchTweets']),
    ...mapActions('tweet', ['retweet']),

    async submitLikeTweet(tweetId) {
      try {
        await this.likeTweet(tweetId)
      } catch (e) {
        console.log(e)
      }
      finally {
        this.fetchTweets()
      }
    },
    async submitRetweet(tweetId) {
      console.log('retweet')
      try {
        await this.retweet(tweetId)
      } catch (e) {
        console.log(e)
      }
      finally {
        this.fetchTweets()
      }
    }
  }
}
</script>

<template>
  <div class="container-tweet">
    <div id="tweet">
      <router-link :to="{ path: `/${tweetData.author.username}` }" tag="a">
        <!-- <img :src="userData.pictureUrl" /> -->
        <img src="../../assets/img/twitter_egg_blue.png" alt="" />
      </router-link>
      <div class="tweet-content">
        <router-link
          :to="{
            path: `/${tweetData.author.username}/status/${tweetData._id}`
          }"
          tag="a"
        >
          <div class="user-info">
            <router-link
              :to="{ path: `/${tweetData.author.username}` }"
              tag="a"
            >
              <p class="name">{{ tweetData.author.name }}</p>
              <p class="username" v-show="tweetData.author.username">
                {{ tweetData.author.username }}
              </p>
              <span>•</span>
              <p class="date">
                {{ this.moment(tweetData.createdAt).fromNow() }}
              </p>
            </router-link>
          </div>
          <div class="tweet-body">
            <p>
              {{ tweetData.content }}
              <!-- <span class="hashtag">#{{ tweetData.author.username }}</span> -->
            </p>
          </div>
        </router-link>
        <div class="buttons">
          <div class="button" id="reply">
            <icons icon="comment" />
            <span v-show="tweetData.replies.length">
              {{ tweetData.quoteTweets.length }}
            </span>
          </div>
          <div
            class="button"
            id="retweet"
            @click="submitRetweet(tweetData._id)"
          >
            <icons icon="retweet" />
            <span v-show="tweetData.retweets.length">
              {{ tweetData.retweets.length }}
            </span>
          </div>
          <div class="button" id="like">
            <button @click="submitLikeTweet(tweetData._id)">
              <icons icon="like" />
            </button>
            <span v-show="tweetData.likes.length">{{
              tweetData.likes.length
            }}</span>
          </div>
          <div class="button" id="share">
            <icons icon="share" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
#tweet {
  display: flex;
  align-items: flex-start;
  padding: 1rem 16px 11px;
  // cursor: pointer;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);

  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
  }

  img {
    margin-right: 1rem;
    border-radius: 50%;
    width: 48px;
    height: 48px;
  }
  .tweet-content {
    width: 100%;
    .user-info {
      display: flex;
      align-items: flex-start;
      margin-bottom: 11px;
      a {
        cursor: pointer;
        display: flex;
        align-items: flex-start;
      }
      * {
        margin-right: 4px;
        line-height: 17.58px;
        font-size: 15px;
        color: #828282;
      }
      .name {
        font-weight: 700;
        color: #000;
      }
      span {
        color: #828282;
      }
    }

    .tweet-body {
      margin-bottom: 11px;
      p {
        font-size: 15px;
        line-height: 22px;
        color: #333333;
      }
      .hashtag {
        color: #1da1f2;
      }
      .hashtag:hover {
        text-decoration: underline;
      }
    }

    .buttons {
      display: flex;
      justify-content: space-around;
      width: 100%;
      #reply:hover {
        svg {
          fill: rgba(#1da1f2, 0.8);
          background-color: rgba(#1da1f2, 0.08);
          border-radius: 100px;
        }

        span {
          color: rgba(#1da1f2, 0.8);
        }
      }
      #retweet:hover {
        svg {
          fill: rgba(green, 0.8);
          background-color: rgba(green, 0.08);
          border-radius: 100px;
        }

        span {
          color: rgba(green, 0.8);
        }
      }

      #like {
        button {
          background-color: transparent;
        }
      }
      #like:hover {
        svg {
          fill: rgba(red, 0.8);
          background-color: rgba(red, 0.08);
          border-radius: 100px;
        }

        span {
          color: rgba(red, 0.8);
        }
      }
      #share:hover {
        svg {
          fill: rgba(#1da1f2, 0.8);
          background-color: rgba(#1da1f2, 0.08);
          border-radius: 50%;
        }

        span {
          color: rgba(green, 0.8);
        }
      }
      .button {
        display: flex;
        justify-content: center;
        align-items: center;
        svg {
          box-sizing: content-box;
          cursor: pointer;
          width: 18px;
          padding: 0.5rem;
          margin-right: 4px;
        }
        span {
          font-size: 12px;
        }
      }
    }
  }
}

@media (max-width: 476px) {
  #tweet {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
}
</style>
