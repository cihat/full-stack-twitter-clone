<script>
import Icons from '@/components/Icons'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'CreateTweet',
  components: {
    Icons
  },
  data() {
    return {
      tweet: '',
      loading: false,
      backendErrors: null
    }
  },
  computed: {
    ...mapGetters('account', ['user'])
  },
  methods: {
    ...mapActions('tweet', ['createTweet']),
    ...mapActions('tweet', ['fetchTweets']),
    async submitCreateTweet(e) {
      e.preventDefault()
      this.backendErrors = null
      this.loading = false

      if (!this.tweet.trim()) {
        return this.$toasted.show('Tweet cannot be empty', {
          type: 'error',
          duration: 2000,
          position: 'bottom-right'
        })
      }

      try {
        await this.createTweet({
          content: this.tweet,
          author: this.user._id
        })
        this.tweet = ''
      } catch (e) {
        this.backendErrors = e.response.data
      } finally {
        this.loading = false
        this.fetchTweets()
      }
    }
  }
}
</script>

<template>
  <form id="zone-tweet" @submit="submitCreateTweet">
    <img src="../../assets/img/twitter_egg_blue.png" class="avatar-image" />
    <div class="input-context">
      <input
        type="text"
        v-model="tweet"
        placeholder="What's happening?"
        autoComplete="off"
        name="content"
        maxlength="140"
        minlength="1"
      />
      <div class="icons">
        <div class="left-icon">
          <icons icon="image" />
          <icons icon="gif" />
          <icons icon="Stats" />
          <icons icon="smile" />
          <icons icon="schedule" />
        </div>
        <div class="right-icon">
          <button type="primary" html-type="submit" block="block">
            <!-- :disabled="!tweet" -->
            Tweet
          </button>
        </div>
      </div>
    </div>
    <div class="backend_erros_container" v-if="backendErrors">
      <p class="backend-errors">
        {{ backendErrors.message }}
      </p>
    </div>
  </form>
</template>

<style scoped lang="scss">
#zone-tweet {
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  // width: 600px;
  padding-left: 1rem;
  padding-top: 8px;
  display: flex;
  align-items: flex-start;
  img.avatar-image {
    margin-right: 1rem;
    border-radius: 50%;
    width: 48px;
    height: 48px;
  }
  .input-context {
    margin-right: 2rem;
    display: flex;
    flex-direction: column;
    flex: 1;

    input {
      color: #828282;
      font-weight: 400;
      line-height: 22.27px;
      font-size: 19px;
      padding: 1rem 1rem 40px 1rem;
    }
    input:active {
      outline: none;
      border: none;
    }
    input:focus {
      outline: 0;
      color: #000;
      font-weight: 500;
    }

    .icons {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 22px;
      .left-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        svg {
          border-radius: 50%;
          padding: 0.5rem;
          box-sizing: content-box;
          &:hover {
            background-color: rgba(#1da1f2, 0.1);
          }
        }
      }

      .right-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        button {
          margin-right: 0px;
          background-color: #1da1f2;
          width: 98px;
          height: 42px;
          border-radius: 100px;
          font-weight: 700;
          font-size: 15px;
          line-height: 17.58px;
          cursor: pointer;
          color: #fff;
          transition: 1s color, 1s background-color;
        }
        button:hover {
          color: #1da1f2;
          background-color: #fff;
          border: 1px solid #1da1f2;
        }
        button:active {
          outline: none;
          border: none;
        }
        button:focus {
          outline: 0;
        }
        button:disabled {
          background-color: #e6e6e6;
          color: #828282;
        }
      }
    }
  }
}

@media (max-width: 758px) {
  #zone-tweet {
    width: 100%;
  }
}

@media (max-width: 476px) {
  #zone-tweet {
    display: none;
  }
}
</style>
