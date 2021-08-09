const BaseService = require("./base-service")
const User = require("../models/user")
const tweetService = require("./tweet-service")

class UserService extends BaseService {
  async findByName(name) {
    return this.findBy("name", name)
  }

  async tweet(userId, tweetId) {
    const user = await this.find(userId)
    // const tweet = await tweetService.find(tweetId)

    const tweet = await tweetService.insert({
      user,
      tweet,
    })
    user?.twwets.push(tweet)
    await user.save()

    return tweet
  }
}

module.exports = new UserService(User)
