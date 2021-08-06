const { userDatabase, tweetDatabase } = require("../database")
const flatted = require("flatted")

const router = require("express").Router()

router.get("/", async (req, res) => {
  const users = await userDatabase.load()

  res.render("users", { users })
})

// router.post("/", async (req, res) => {
//   const passenger = await userDatabase.insert(req.body)

//   res.send(passenger)
// })

router.delete("/:passengerId", async (req, res) => {
  await userDatabase.removeBy("id", req.params.passengerId)

  res.send("OK")
})

router.get("/:userId", async (req, res) => {
  const user = await userDatabase.find(req.params.userId)
  if (!user) return res.status(404).send("Cannot find user")
  res.render("user", { user })
})

// router.get("/:passengerId", async (req, res) => {
//   const passenger = await userDatabase.find(req.params.passengerId)
//   if (!passenger) return res.status(404).send("Cannot find passenger")
//   res.render("passenger", { passenger })
// })

// router.post("/:passengerId/bookings", async (req, res) => {
//   const { passengerId } = req.params
//   const { driverId, origin, destination } = req.body

//   const passenger = await userDatabase.find(passengerId)
//   const driver = await tweetDatabase.find(driverId)

//   passenger.book(driver, origin, destination)

//   await userDatabase.update(passenger)

//   res.send("OK")
// })

module.exports = router
