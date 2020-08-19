const User = require('./model')
const passport = require('passport')

const renderSignUp = (req, res) => {
  res.render('users/signup')
}

const signUp = async (req, res) => {
  const errors = []
  const {name, email, password, confirm_password} = req.body
  if (password != confirm_password) {
    errors.push({msj: 'contrasenia no coincide'})
  }
  if (password.length < 4) {
    errors.push({msj: 'contrasenia menor a 4'})
  }
  if (errors.length != 0) {
    res.render('users/signup', { errors, user:req.body}).end()
  }
  const user = new User({name, email, password})
  user.password = await user.securePassword(user.password)
  if (await User.findOne({email})) {
    req.flash('alert', 'Correo ya existe')
    res.redirect('/user/signup')
  } else {
    await user.save()
    req.flash('alert', 'registrado exitosamente')
    res.render('users/signin', {email})
  }
}

const renderSignIn = (req, res) => {
  res.render('users/signin')
}

const signIn = passport.authenticate('local', {
  failureRedirect: '/user/signin',
  successRedirect: '/note/index',
  failureFlash: true
})

const logout = (req, res) => {
  req.logout()
  res.redirect('/user/signin')
}

module.exports = {renderSignUp, renderSignIn, signUp, signIn, logout}
