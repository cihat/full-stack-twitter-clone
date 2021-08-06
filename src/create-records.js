const Tweet = require("./models/tweet.js")
const User = require("./models/user.js")
const colors = require("colors")
const { tweetDatabase, userDatabase } = require("./database")
const printTweetHistory = require("./lib/print-booking-history")

const main = async () => {
  try {
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

    const tweet1 = Tweet.create({ body: "Hello World!", author: cihat })
    const tweet2 = Tweet.create({ body: "Hello World! 2", author: sevket })

    cihat.tweet(tweet1)
    sevket.tweet(tweet2)

    cihat.retweet(tweet2, "This is a retweet.")
    sevket.retweet(tweet1, "This is a retweet.")

    cihat.like(tweet2)
    sevket.like(tweet1)

    await userDatabase.save([cihat, sevket])
    await tweetDatabase.save([tweet1, tweet2])

    const ahmet = User.create({
      name: "Ahmet",
      handle: "@ahmtylmz",
      email: "ahmetyılmaz@twitter.com",
    })

    const mehmet = User.create({
      name: "mehmet",
      handle: "@mehmetylmz",
      email: "mehmetyılmaz@twitter.com",
    })
    await userDatabase.insert(ahmet)
    await userDatabase.insert(mehmet)

    const users = await userDatabase.load()
    users.forEach(printTweetHistory)
  } catch (e) {
    console.log(e)
  }
}
main()
