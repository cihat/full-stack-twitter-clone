const BaseService = require("./base-service")
const User = require("../models/user")

class UserService extends BaseService {}

module.exports = new UserService(User)
