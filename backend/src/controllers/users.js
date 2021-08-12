const user = require("../models/user")
const { userService, tweetService } = require("../services")

exports.getUsers = async (req, res) => {
  const users = await userService.load()

  const type = req.query.type || "json"

  if (type == "json") res.send(users)
  else res.render("users", { users })
}

exports.postUser = async (req, res) => {
  const user = await userService.insert(req.body)

  res.send(user)
}

exports.deleteUser = async (req, res) => {
  await userService.removeBy("_id", req.params.userId)

  res.send("OK")
}

exports.getUser = async (req, res) => {
  const user = await userService.find(req.params.userId)
  if (!user) return res.status(404).send("Cannot find user")
  const type = req.query.type || "json"

  if (type == "json") res.send(user)
  else res.render("user", { user })
}

exports.postTweet = async (req, res) => {
  const { userId } = req.params
  const { body } = req.body

  const tweet = await tweetService.tweet(userId, body)

  res.send(tweet)
}

exports.updateName = async (req, res) => {
  const { userId } = req.params
  const { name } = req.body

  const updateName = await userService.updateName(userId, name)

  res.send(updateName)
}

exports.follow = async (req, res) => {
  const { userId } = req.params
  const { userToFollowId } = req.body

  const users = await userService.follow(userId, userToFollowId)

  res.send(users)
}

exports.like = async (req, res) => {
  const { userId } = req.params
  const { likeTweetId } = req.body

  const user = await tweetService.like(userId, likeTweetId)

  res.send(user)
}

exports.retweet = async (req, res) => {
  const { userId } = req.params
  const { retweetId } = req.body

  const user = await tweetService.retweet(userId, retweetId)

  res.send(user)
}
