const uuid = require("uuid")
const mongoose = require("mongoose")

const TweetSchema = new mongoose.Schema({
  body: String,
  author: String,
  createdAt: Date,
  originalTweet: String,
  replies: [],
  likes: [],
  retweets: [],
  attachments: [],
})

TweetSchema.statics.create = function ({ body, author }) {
  return new TweetSchema(body, author)
}

module.exports = mongoose.model("Tweet", TweetSchema)

// class Tweet {
//   createdAt = new Date()
//   originalTweet = null
//   replies = []
//   likes = []
//   retweets = []
//   attachments = []

//   constructor(id = uuid.v4(), body, author) {
//     this.id = id
//     this.author = author
//     this.body = body
//   }

//   static create({ id, body, author }) {
//     return new Tweet(id, body, author)
//   }
// }

// module.exports = Tweet
