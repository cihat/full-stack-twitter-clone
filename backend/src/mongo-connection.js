const mongoose = require('mongoose')
require('dotenv').config()

let connectionString = null

if (process.env.NODE_ENV === 'development') {
  connectionString = `${process.env.MONGODB_CONNECTION_STRING_DEV}`
  mongoose.set('debug', true)
} else {
  connectionString = `${process.env.MONGODB_CONNECTION_STRING_PROD}`
}

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log(`Connected to ${connectionString}🤪`))
  .catch((err) => console.error(err))

module.exports = { mongoose }
