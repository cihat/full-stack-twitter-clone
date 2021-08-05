const Tweet = require("./models/tweet.js")
const User = require("./models/user.js")
const colors = require("colors")

const cihat = new User("Cihat Salik", "@chtslk", "chtslk@twitter.com")
const sevket = new User("Şevket Dayı", "@svkdy", "sevketdayi@twitter.com")

const tweet1 = new Tweet("Hello World!", cihat)
cihat.tweet(tweet1)
sevket.retweet(tweet1, "This is a retweet.")
sevket.like(tweet1)
