const BaseDatabase = require("./base-database")
const Tweet = require("../models/tweet")

class TweetDataBase extends BaseDatabase {}

module.exports = new TweetDataBase(Tweet)
