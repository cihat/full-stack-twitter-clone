const Tweet = require("./Tweet.js")
const User = require("./User.js")

const cihat = new User("Cihat Salik", "@chtslk", "chtslk@twitter.com")
const sevket = new User("Şevket Dayı", "@svkdy", "sevketdayi@twitter.com")

const marmarisTweet = new Tweet("Marmaris Yanıyorrrr!!! #istifa", cihat)
cihat.tweet(marmarisTweet)
cihat.like(marmarisTweet)
sevket.retweet(marmarisTweet, "Dayip'in nesini gördünüz bugüne kadar!!!")
sevket.like(marmarisTweet)

console.log(sevket, cihat)
