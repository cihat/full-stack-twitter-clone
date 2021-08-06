const uuid = require("uuid")

class Tweet {
  createdAt = new Date()
  originalTweet = null
  replies = []
  likes = []
  retweets = []
  attachments = []

  constructor(id = uuid.v4(), body, author) {
    this.id = id
    this.author = author
    this.body = body
  }

  static create({id, body, author }) {
    return new Tweet(id, body, author)
  }
}

module.exports = Tweet
