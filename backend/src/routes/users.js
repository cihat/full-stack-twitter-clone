const usersController = require('../controllers/users.js')

const router = require('express').Router()

router.get('/', usersController.getUsers)

router.post('/', usersController.postUser)

router.delete('/:userId', usersController.deleteUser)

router.get('/:userId', usersController.getUser)

router.post('/:userId/tweets', usersController.postTweet)

router.patch('/:userId/following', usersController.follow)

router.patch('/:userId', usersController.updateName)

router.patch('/:userId/like', usersController.like)

router.patch('/:userId/retweet', usersController.retweet)

module.exports = router
