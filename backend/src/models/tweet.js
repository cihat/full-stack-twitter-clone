const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')

const TweetSchema = new mongoose.Schema({
  body: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    autopopulate: true
  },
  createdAt: Date,
  originalTweet: String,
  replies: [],
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      autopopulate: true
    }
  ],
  retweets: [],
  attachments: []
})

TweetSchema.plugin(autopopulate)

module.exports = mongoose.model('Tweet', TweetSchema)
