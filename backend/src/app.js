const express = require('express')
const indexRouter = require('./routes/index')
const tweetRouter = require('./routes/tweet')
const authRouter = require('./routes/auth')
const userRouter = require('./routes/user')

const { mongoose } = require('./mongo-connection')
const logger = require('morgan')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const cookieParser = require('cookie-parser')
const passport = require('passport')
const User = require('./models/user')
const sanitize = require('express-mongo-sanitize').sanitize
const { errors } = require('celebrate')
const cors = require('cors')

const app = express()

// app.use(
//   cors({
//     origin:
//       process.env.NODE_ENV === 'production'
//         ? 'https://full-stack-twitter-clone-frontend.vercel.app'
//         : 'http://localhost:8081',
//     credentials: true
//   })
// )

const whiteList = [
  'http://localhost:8080',
  'https://full-stack-twitter-clone-frontend.vercel.app/',
  'https://full-stack-twitter-clone-back.herokuapp.com/api/auth/session',
  'https://full-stack-twitter-clone-frontend-git-master-cihat.vercel.app/',
  'https://full-stack-twitter-clone-frontend-cihat.vercel.app/',
  'https://full-stack-twitter-clone-back.herokuapp.com/',
  'https://full-stack-twitter-clone-back.herokuapp.com/api',
  'https://full-stack-twitter-clone-back.herokuapp.com/api/auth',
  'https://full-stack-twitter-clone-back.herokuapp.com/api/tweets',
  'https://full-stack-twitter-clone-back.herokuapp.com/api/users'
]

const corsOptions = {
  origin: function (origin, callback) {
    if (whiteList.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  // origin:
  //   process.env.NODE_ENV === 'production'
  //     ? 'https://full-stack-twitter-clone-frontend.vercel.app/'
  //     : true,
  credentials: true
}
app.use(cors(corsOptions))

app.use(
  session({
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      stringify: false
    }),
    secret: process.env.SESSION_SECRET,
    cookie: {
      maxAge: 14 * 24 * 60 * 60 * 1000,
      sameSite: process.env.NODE_ENV == 'production' && 'none',
      secure: process.env.NODE_ENV == 'production'
    }
  })
)

app.use(passport.initialize())
app.use(passport.session())

passport.use(User.createStrategy())

passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

// view engine setup
app.set('views', __dirname + '/views')
app.set('view engine', 'pug')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(__dirname + '/public'))


app.all('*', (req, res, next) => {
  req.body = sanitize(req.body)
  req.headers = sanitize(req.headers)
  req.params = sanitize(req.params)

  next()
})

app.use('/api/', indexRouter)
app.use('/api/tweet', tweetRouter)
app.use('/api/auth', authRouter)
app.use('/api/user', userRouter)

app.use(errors())

app.use((err, req, res, next) => {
  const error = {
    status: err.status || 500,
    message: err.message
  }

  if (req.app.get('env' === 'development')) {
    error.stack = err.stack
  }

  res.status(error.status)

  res.send(error)
})

module.exports = app
