class Tweet {
  constructor(body, author) {
    this.author = author
    this.body = body
    console.log(author)
  }
  createdAt = new Date()
  originalTweet = null
  replies = []
  likes = []
  retweets = []
  attachments = []
}

module.exports = Tweet
