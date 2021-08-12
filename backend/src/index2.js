const Tweet = require("./models/tweet.js")
const User = require("./models/user.js")
const colors = require("colors")
const { tweetService, userService } = require("./services")

const cihat = User.create({
  name: "Cihat Salik",
  handle: "@chtslk",
  email: "chtslk@twitter.com",
})
const sevket = User.create({
  name: "Şevket Dayı",
  handle: "@svkdy",
  email: "sevketdayi@twitter.com",
})

const tweet1 = Tweet.create({ body: "Test 0!", author: cihat })
const tweet2 = Tweet.create({ body: "Test 1!", author: cihat })
const tweet3 = Tweet.create({ body: "Test 2!", author: cihat })
const tweet4 = Tweet.create({ body: "Test 3!", author: cihat })
cihat.tweet(tweet1)
cihat.tweet(tweet2)
cihat.tweet(tweet3)
cihat.tweet(tweet4)

sevket.retweet(tweet1, "This is a retweet.")
sevket.like(tweet1)

async function main() {
  await userService.save([cihat, sevket])
  await tweetService.save([tweet1, tweet2, tweet3, tweet4])

  const users = await userService.load()
  console.table(users)
  console.table({ cihat, sevket })
}

main()
