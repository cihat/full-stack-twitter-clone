const { userService } = require('../services')

exports.getUser = async (req, res) => {
  const user = await userService.findByUsername(req.params.username)
  if (!user) return res.status(404).send('Cannot find user')

  res.send(user)
}
