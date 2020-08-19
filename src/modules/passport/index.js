const passport = require('passport')
const Strategy = require('passport-local').Strategy
const User = require('../users/model')

passport.use(new Strategy({
  usernameField: 'email',
  passwordField: 'password'
}, async (email, password, done) => {
  const user = await User.findOne({email})
  if (!user) {
    return done(null, false, {message: 'usuario no existe'})
  } else {
    if (await user.validPassword(password)) {
      return done(null, user)
    } else {
      return done(null, false, {message: 'contrasenia incorrecta'})
    }
  }
}))

passport.serializeUser((user, done) => {
  done(null, user.id)
})
passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user)
  })
})
