const BaseDatabase = require("./base-database")
const User = require("../models/user")

class UserDataBase extends BaseDatabase {}

module.exports = new UserDataBase(User)
