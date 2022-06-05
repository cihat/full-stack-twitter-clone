const usersController = require('../controllers/user')

const router = require('express').Router()

router.get('/:username', usersController.getUser)

module.exports = router
