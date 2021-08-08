const { userService, tweetService } = require("../services")

exports.getUsers = async (req, res) => {
  const users = await userService.load()

  res.render("users", { users })
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
  res.render("user", { user })
}

exports.postTweet = async (req, res) => {
  const { userId } = req.params
  const { body } = req.body

  const user = await userService.find(userId)
  // const tweet1 = await tweetService.insert(body)
  const tweet1 = {
    body: "This is a tweet",
    author: user.handle,
  }

  user.tweet(tweet1)
  console.log(user)

  await userService.update(userId, user)

  res.send(user)
}

exports.updateUserName = async (req, res) => {
  const { userId } = req.params
  const { name } = req.body

  await userService.update(userId, { name })
}
