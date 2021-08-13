const BaseService = require('./base-service')
const Tweet = require('../models/tweet')
const userService = require('./user-service')

class TweetService extends BaseService {
  async tweet(userId, body) {
    const user = await userService.find(userId)
    const tweet = await this.insert({ user, body })
    user.tweets.push(tweet)
    await user.save()

    return tweet
  }

  async like(userId, likeTweetId) {
    const tweet = await this.find(likeTweetId)
    const user = await userService.find(userId)

    user.likedTweets.push(tweet)
    tweet.likes.push(user)

    await tweet.save()
    await user.save()

    return user
  }

  async retweet(userId, retweetId) {
    const user = await userService.find(userId)
    const tweetToRetweet = await this.find(retweetId)

    user.retweets.push(tweetToRetweet)
    tweetToRetweet.retweets.push(user.handle)

    await user.save()
    await tweetToRetweet.save()

    return user
  }
}

module.exports = new TweetService(Tweet)
