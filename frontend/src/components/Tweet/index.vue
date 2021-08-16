<script>
import axios from 'axios'
import Icons from '@/components/Icons'

export default {
  name: 'tweet',
  data() {
    return {
      likeNumber: null,
      reTweetNumber: null,
      replyNumber: null,
      date: null,
      userData: {
        firstName: null,
        lastName: null,
        pictureUrl: null,
        userId: null
      },
      tweetBody: {
        content: '',
        author: ''
      },
      isVideoMode: false
    }
  },
  props: {
    accountData: {
      type: Object
    }
  },
  components: {
    Icons
  },
  methods: {
    addLike() {
      this.likeNumber += 1
    },
    async randomUser() {
      await axios
        .get('https://randomuser.me/api/')
        .then((response) => {
          // handle success
          const value = [...response.data.results][0]
          // console.log(value);
          this.userData.firstName = value.name.first
          this.userData.lastName = value.name.last
          this.userData.pictureUrl = value.picture.medium
          this.userData.userId = value.id.name
        })
        .catch((error) => {
          // handle error
          console.log(error)
        })
        .then(() => {
          // console.log(this.userData);
        })
    },
    async getQuote() {
      await axios.get('https://api.quotable.io/random/').then((response) => {
        const data = response.data
        this.tweetBody.content = data.content
        this.tweetBody.author = data.author
      })
    },

    setRandomValue() {
      let comment = Math.floor(Math.random() * 50) + 1
      let reTweet = Math.floor(comment * 4.3)
      let like = Math.floor(reTweet * 15.7)

      this.reTweetNumber = reTweet
      this.likeNumber = like
      this.replyNumber = comment
      this.date = Math.floor(Math.random() * 24) + 1
    }
  },
  async created() {
    await this.getQuote()
    await this.randomUser()
    this.setRandomValue()

    setTimeout(() => {
      this.isVideoMode = true
    }, 1000)
  }
}
</script>

<template>
  <div class="container-tweets">
    <div
      id="tweets"
      v-show="isVideoMode"
      v-for="tweet in accountData.tweets"
      :key="tweet.id"
    >
      <img :src="userData.pictureUrl" />
      <!-- https://100k-faces.glitch.me/random-image" class="avatar-image -->
      <div class="tweet-content">
        <div class="user-info">
          <p class="name">{{ accountData.name }}</p>
          <p class="username" v-show="userData.userId">
            @{{ accountData.handle }}
          </p>
          <span>•</span>
          <p class="date">{{ date }}h</p>
        </div>
        <div class="tweet-body">
          <p>
            {{ tweet.body }}
            <!-- <span class="hashtag">#{{ tweetBody.author }}</span> -->
          </p>
        </div>
        <div class="buttons">
          <div class="button" id="reply">
            <icons icon="comment" />
            <span v-show="replyNumber">
              {{ tweet.attachments.length }}
            </span>
          </div>
          <div class="button" id="retweet">
            <icons icon="retweet" />
            <span v-show="reTweetNumber">{{ tweet.replies.length }}</span>
          </div>
          <div class="button" id="like">
            <icons icon="like" />
            <span v-show="likeNumber">{{ tweet.likes.length }}</span>
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
#tweets {
  display: flex;
  align-items: flex-start;
  padding: 1rem 31px 11px;
  cursor: pointer;
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