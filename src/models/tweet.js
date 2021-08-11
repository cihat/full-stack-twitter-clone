const mongoose = require("mongoose")

const TweetSchema = new mongoose.Schema({
  body: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    autopopulate: { maxDepth: 1 },
  },
  createdAt: Date,
  originalTweet: String,
  replies: [],
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      autopopulate: { maxDepth: 1 },
    },
  ],
  retweets: [],
  attachments: [],
})

TweetSchema.plugin(require("mongoose-autopopulate"))

module.exports = mongoose.model("Tweet", TweetSchema)
