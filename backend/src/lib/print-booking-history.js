const colors = require('colors')

function printTweet(user) {
  console.log(`${colors.blue(user.tweets)}`)
}

function printTweetHistory(user) {
  if (user.tweets)
    return console.log(`${colors.red(user.name)} has no tweet(s) yet.`)

  user.tweets.forEach(printTweet)
}

module.exports = printTweetHistory
