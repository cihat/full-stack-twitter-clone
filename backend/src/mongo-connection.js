const mongoose = require('mongoose')

const connectionString =
  process.env.MONGODB_CONNECTION_STRING || 'mongodb://localhost/twitter-clone'

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
  console.log('we are connected to mongoDB!!!🤪')
})
