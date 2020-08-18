const User = require('./model')

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
    res.render('users/signin', {email}).end()
  }
}

const renderSignIn = (req, res) => {
  res.render('users/signin')
}

const signIn = (req, res) => {
  res.send({success:true, method:'singin'})
}

const logout = (req, res) => {
  res.send({success:true, method:'edit'})
}

module.exports = {renderSignUp, renderSignIn, signUp, signIn, logout}
