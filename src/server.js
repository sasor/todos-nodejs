const express = require('express')
const hbs = require('express-handlebars')
const movr = require('method-override')
const path = require('path')
const flash = require('connect-flash')
const session = require('express-session')
const passport = require('passport')
const noteRoutes = require('./modules/notes/route')
const userRoutes = require('./modules/users/route')
const app = express()
require('./modules/passport/index')

// Settings
app.set('views', path.join(__dirname, 'views'))
app.engine('.hbs', hbs({
  extname: '.hbs',
  defaultLayout: 'default',
  layoutsDir: path.join(app.get('views'), 'layout'),
  partialsDir: path.join(app.get('views'), 'partials')
}))
app.set('view engine', '.hbs')

// Middlewares
app.use(express.urlencoded({extended: false}))
app.use(movr('_method'))
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())
app.use((req, res, next) => {
  res.locals.alert = req.flash('alert')
  res.locals.flash = req.flash('error')
  res.locals.user = req.user || null
  next()
})

// Static files
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.render('index')
})
app.get('/about', (req, res) => {
  res.render('about')
})
app.use('/note', noteRoutes)
app.use('/user', userRoutes)

module.exports = app
