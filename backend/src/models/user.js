const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')
const passportLocalMongoose = require('passport-local-mongoose')
const { Schema } = mongoose

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 64,
      unique: false
    },
    username: { type: String, unique: true, required: false },
    email: { type: String, required: true, unique: true },
    sessionId: String,
    createdAt: Date,
    profilePicture: String,
    bio: String,
    location: String,
    website: String,
    followers: [
      {
        type: 'ObjectId',
        ref: 'User',
        autopopulate: {
          maxDepth: 2
        }
      }
    ],
    following: [
      {
        type: 'ObjectId',
        ref: 'User',
        autopopulate: {
          maxDepth: 2
        }
      }
    ],
    tweets: [
      {
        type: 'ObjectId',
        ref: 'Tweet',
        autopopulate: {
          maxDepth: 2
        }
      }
    ],
    likedTweets: [
      {
        type: 'ObjectId',
        ref: 'Tweet',
        autopopulate: {
          maxDepth: 2
        }
      }
    ],
    retweetedTweets: [
      {
        type: 'ObjectId',
        ref: 'Tweet',
        autopopulate: {
          maxDepth: 2
        }
      }
    ]
  },
  { timestamps: true }
)

userSchema.plugin(passportLocalMongoose, {
  usernameField: 'email',
  passwordField: 'password',
  populateFields: ['name, sessionId']
})

userSchema.plugin(autopopulate)

module.exports = mongoose.model('User', userSchema)
