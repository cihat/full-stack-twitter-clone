const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  name: String,
  handle: String,
  email: String,
  createdAt: Date,
  profilePicture: String,
  bio: String,
  location: String,
  website: String,
  followers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      autopopulate: { maxDepth: 2 }
    }
  ],
  following: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      autopopulate: { maxDepth: 2 }
    }
  ],
  tweets: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Tweet',
      autopopulate: { maxDepth: 2 }
    }
  ],
  likedTweets: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Tweet',
      autopopulate: { maxDepth: 2 }
    }
  ],
  retweets: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Tweet',
      autopopulate: { maxDepth: 2 }
    }
  ]
})

UserSchema.plugin(require('mongoose-autopopulate'))

module.exports = mongoose.model('User', UserSchema)
