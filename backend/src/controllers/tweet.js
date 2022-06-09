const Tweet = require('../models/tweet')
const { tweetService } = require('../services')
const Validator = require('async-validator').default

exports.createTweet = async (req, res, next) => {
  const descriptor = {
    content: [
      { requied: true, message: 'Tweet message is required' },
      {
        min: 1,
        message: 'Tweet message should be between 1 and 140 characters'
      },
      {
        max: 140,
        message: 'Tweet message should be between 1 and 140 characters'
      }
      // {
      //   pattern: /^[a-zA-Z0-9_]+$/,
      //   message: 'Tweet message should be alphanumeric'
      // },
      // { pattern: /^\S+$/, message: 'Tweet message should not include spaces' }
    ],
    author: [{ required: true, message: 'Author is required' }]
  }

  const validator = new Validator(descriptor)

  console.log('user', req.user)

  const tweetRequest = {
    content: req.body.content,
    author: req.user._id
  }

  try {
    await validator.validate(tweetRequest)
  } catch ({ errors }) {
    return next({ message: errors.map((e) => e.message).join('') })
  }

  let newTweet = new Tweet(tweetRequest)

  try {
    newTweet.save()

    req.user.tweets.push(newTweet)
    await req.user.save()

    res.status(201).send(newTweet)
  } catch (error) {
    return next(error)
  }
}

exports.getTweets = async (req, res, next) => {
  try {
    const tweets = await tweetService.findAll()
    res.status(200).send(tweets)
  } catch (error) {
    return next(error)
  }
}

exports.getTweet = async (req, res, next) => {
  try {
    const tweet = await tweetService.find(req.params.tweetId)
    res.status(200).send(tweet)
  } catch (error) {
    return next(error)
  }
}

exports.likeTweet = async (req, res, next) => {
  try {
    const tweet = await tweetService.likeTweet(req.params.tweetId, req.user._id)
    res.status(200).send(tweet)
  } catch (error) {
    return next(error)
  }
}

exports.retweet = async (req, res, next) => {
  try {
    const tweet = await tweetService.retweet(req.params.tweetId, req.user._id)
    res.status(200).send(tweet)
  } catch (error) {
    return next(error)
  }
}

// exports.getUsers = async (req, res) => {
//   const users = await userService.load()

//   const type = req.query.type || 'json'

//   if (type == 'json') res.send(users)
//   else res.render('users', { users })
// }

// exports.postUser = async (req, res) => {
//   const user = await userService.insert(req.body)

//   res.send(user)
// }

// exports.deleteUser = async (req, res) => {
//   await userService.removeBy('_id', req.params.userId)

//   res.send('OK')
// }

// exports.getUser = async (req, res) => {
//   const user = await userService.find(req.params.userId)
//   if (!user) return res.status(404).send('Cannot find user')
//   const type = req.query.type || 'json'

//   if (type == 'json') res.send(user)
//   else res.render('user', { user })
// }

// exports.updateName = async (req, res) => {
//   const { userId } = req.params
//   const { name } = req.body

//   const updateName = await userService.updateName(userId, name)

//   res.send(updateName)
// }

// exports.follow = async (req, res) => {
//   const { userId } = req.params
//   const { userToFollowId } = req.body

//   const users = await userService.follow(userId, userToFollowId)

//   res.send(users)
// }

// exports.like = async (req, res) => {
//   const { userId } = req.params
//   const { likeTweetId } = req.body

//   const user = await tweetService.like(userId, likeTweetId)

//   res.send(user)
// }

// exports.retweet = async (req, res) => {
//   const { userId } = req.params
//   const { retweetId } = req.body

//   const user = await tweetService.retweet(userId, retweetId)

//   res.send(user)
// }
