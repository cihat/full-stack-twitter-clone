const { userService, tweetService } = require("../services")
const usersController = require("../controllers/users.js")

const router = require("express").Router()

router.get("/", usersController.getUsers)

router.post("/", usersController.postUser)

router.delete("/:userId", usersController.deleteUser)

router.get("/:userId", usersController.getUser)

router.post("/:userId/tweets", usersController.postTweet)

router.patch("/:userId", usersController.updateUserName)

module.exports = router
