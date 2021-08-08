const BaseService = require("./base-service")
const Tweet = require("../models/tweet")

class TweetService extends BaseService {}

module.exports = new TweetService(Tweet)
