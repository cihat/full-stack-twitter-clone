const BaseService = require('./base-service')
const Tweet = require('../models/tweet')
const userService = require('./user-service')

class TweetService extends BaseService {
  async findAll() {
    return this.load()
  }

  async loadWithLimit(limit) {
    return this.loadLimit(limit)
  }

  async likeTweet(tweetId, userId) {
    const likesId = []
    const tweet = await this.find(tweetId)
    const user = await userService.find(userId)
    if (!tweet) return null

    const { likes } = tweet

    likes.map((like) => likesId.push(like._id.toString()))

    if (!likesId.includes(userId.toString())) {
      tweet.likes.push(userId)
      user.likedTweets.push(tweetId)

      await tweet.save()
      await user.save()
    } else {
      console.log('Tweet already liked')
    }

    return tweet
  }

  async retweet(tweetId, userId) {
    const retweetId = []
    const tweet = await this.find(tweetId)
    const user = await userService.find(userId)
    if (!tweet) return null

    const { retweets } = tweet

    retweets.map((retweet) => retweetId.push(retweet._id.toString()))

    if (!retweetId.includes(userId.toString())) {
      tweet.retweets.push(userId)
      user.retweetedTweets.push(tweetId)

      await tweet.save()
      await user.save()
    }

    return tweet
  }

  // async tweet(userId, body) {
  //   const user = await userService.find(userId)
  //   const tweet = await this.insert({ user, body })
  //   user.tweets.unshift(tweet)
  //   await user.save()

  //   return tweet
  // }

  // async like(userId, likeTweetId) {
  //   const tweet = await this.find(likeTweetId)
  //   const user = await userService.find(userId)

  //   user.likedTweets.push(tweet)
  //   tweet.likes.push(user)

  //   await tweet.save()
  //   await user.save()

  //   return user
  // }

  // async retweet(userId, retweetId) {
  //   const user = await userService.find(userId)
  //   const tweetToRetweet = await this.find(retweetId)

  //   user.retweets.push(tweetToRetweet)
  //   tweetToRetweet.retweets.push(user.handle)

  //   await user.save()
  //   await tweetToRetweet.save()

  //   return user
  // }
}

module.exports = new TweetService(Tweet)
