const { userDatabase, tweetDatabase } = require("../database")
const flatted = require("flatted")

const router = require("express").Router()

router.get("/", async (req, res) => {
  const users = await userDatabase.load()

  res.render("users", { users })
})

router.post("/", async (req, res) => {
  const user = await userDatabase.insert(req.body)

  res.send(user)
})

router.delete("/:userId", async (req, res) => {
  await userDatabase.removeBy("_id", req.params.userId)

  res.send("OK")
})

router.get("/:userId", async (req, res) => {
  const user = await userDatabase.find(req.params.userId)
  if (!user) return res.status(404).send("Cannot find user")
  res.render("user", { user })
})

router.post("/:userId/tweets", async (req, res) => {
  const { userId } = req.params
  const { body } = req.body

  const user = await userDatabase.find(userId)
  // const tweet1 = await tweetDatabase.insert(body)
  const tweet1 = {
    body: "This is a tweet",
    author: user.handle,
  }

  user.tweet(tweet1)
  console.log(user)

  await userDatabase.update(userId, user)

  res.send(user)
})

router.patch("/:userId", async (req, res) => {
  const { userId } = req.params
  const { name } = req.body

  await userDatabase.update(userId, { name })
})

module.exports = router
