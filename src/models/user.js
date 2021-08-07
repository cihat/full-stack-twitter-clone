const Tweet = require("./tweet.js")
const uuid = require("uuid")
const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
  name: String,
  handle: String,
  email: String,
  createdAt: Date,
  profilePicture: String,
  bio: String,
  location: String,
  website: String,
  followers: [],
  following: String,
  tweets: [],
  likedTweets: [],
})

UserSchema.methods.tweet = function (tweet) {
  this.tweets.push(tweet)
}

UserSchema.methods.follow = function (user) {
  this.following.push(user)
  user.followers.push(this)
}

UserSchema.methods.like = function (tweet) {
  this.likedTweets.push(tweet)
}

UserSchema.methods.retweet = function (originalTweet, body = "") {
  const retweet = new Tweet(body, this)
  retweet.originalTweet = originalTweet
  this.tweets.push(retweet)
  originalTweet.retweets.push(retweet)
}

UserSchema.statics.create = function ({ id, name, handle, email }) {
  return new UserSchema(id, name, handle, email)
}

module.exports = mongoose.model("User", UserSchema)

// class User {
//   constructor(id = uuid.v4(), name, handle, email) {
//     this.id = id
//     this.name = name
//     this.handle = handle
//     this.email = email
//   }

//   profilePicture = ""
//   bio = ""
//   location = ""
//   website = ""
//   createdAt = new Date()
//   followers = []
//   following = []
//   tweets = []
//   likedTweets = []

//   tweet(tweet) {
//     this.tweets.push(tweet)
//   }

//   follow(user) {
//     this.following.push(user)
//     user.followers.push(this)
//   }

//   like(tweet) {
//     this.likedTweets.push(tweet)
//   }

//   retweet(originalTweet, body = "") {
//     const retweet = new Tweet(body, this)
//     retweet.originalTweet = originalTweet
//     this.tweets.push(retweet)
//     originalTweet.retweets.push(retweet)
//   }

//   static create({ id, name, handle, email }) {
//     return new User(id, name, handle, email)
//   }
// }

// module.exports = User
