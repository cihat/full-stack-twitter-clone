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
    console.log(author)
  }
}

module.exports = Tweet
