const Tweet = require("./Tweet.js")

class User {
  constructor(name, handle, email) {
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
}

module.exports = User
