class Tweet {
  createdAt = new Date()
  originalTweet = null
  replies = []
  likes = []
  retweets = []
  attachments = []

  constructor(body, author) {
    this.author = author
    this.body = body
  }

  static create({ body, author }) {
    return new Tweet(body, author)
  }
}

module.exports = Tweet
