const Tweet = require("./tweet.js")
const uuid = require("uuid")

class User {
  constructor(id = uuid.v4(), name, handle, email) {
    this.id = id
    this.name = name
    this.handle = handle
    this.email = email
  }

  profilePicture = ""
  bio = ""
  location = ""
  website = ""
  createdAt = new Date()
  followers = []
  following = []
  tweets = []
  likedTweets = []

  tweet(tweet) {
    this.tweets.push(tweet)
  }

  follow(user) {
    this.following.push(user)
    user.followers.push(this)
  }

  like(tweet) {
    this.likedTweets.push(tweet)
  }

  retweet(originalTweet, body = "") {
    const retweet = new Tweet(body, this)
    retweet.originalTweet = originalTweet
    this.tweets.push(retweet)
    originalTweet.retweets.push(retweet)
  }

  static create({ id, name, handle, email }) {
    return new User(id, name, handle, email)
  }
}

module.exports = User
