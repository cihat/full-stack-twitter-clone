const tweetController = require('../controllers/tweet.js')

const router = require('express').Router()

router.post('/', tweetController.createTweet)

router.get('/', tweetController.getTweets)

router.patch('/:tweetId/like', tweetController.likeTweet)

// router.get('/', usersController.getUsers)

// router.post('/', usersController.postUser)

// router.delete('/:userId', usersController.deleteUser)

// router.get('/:userId', usersController.getUser)

// router.patch('/:userId/following', usersController.follow)

// router.patch('/:userId', usersController.updateName)

// router.patch('/:userId/like', usersController.like)

// router.patch('/:userId/retweet', usersController.retweet)

module.exports = router
