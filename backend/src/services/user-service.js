const BaseService = require('./base-service')
const User = require('../models/user')
const tweetService = require('./tweet-service')

class UserService extends BaseService {
  async findByUsername(username) {
    return this.findBy('username', username)
  }

  // async findByName(name) {
  //   return this.findBy('name', name)
  // }

  // async tweet(userId, tweetId) {
  //   const user = await this.find(userId)

  //   const tweet = await tweetService.insert({
  //     user,
  //     tweet
  //   })
  //   user?.tweets.push(tweet)
  //   await user.save()

  //   return tweet
  // }

  // async updateName(userId, name) {
  //   const user = await this.find(userId)
  //   user.name = name

  //   await user.save()
  //   return user
  // }

  // async follow(userId, userToFollowId) {
  //   const user = await this.find(userId)
  //   const userToFollow = await this.find(userToFollowId)

  //   if (userId == userToFollow) return

  //   user.following.push(userToFollow)
  //   userToFollow.followers.push(user)

  //   await user.save()
  //   await userToFollow.save()

  //   return user
  // }
}

module.exports = new UserService(User)
