const Tweet = require("./models/tweet.js")
const User = require("./models/user.js")
const colors = require("colors")
const { tweetDatabase, userDatabase } = require("./database")

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
  await userDatabase.save([cihat, sevket])
  await tweetDatabase.save([tweet1, tweet2, tweet3, tweet4])

  const users = await userDatabase.load()
  console.table(users)
  console.table({ cihat, sevket })
}

main()
