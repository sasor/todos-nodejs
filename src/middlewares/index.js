const isAuth = (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.flash('alert', 'no estas autorizado')
    res.redirect('/user/signin')
  } else {
    return next()
  }
}

module.exports = isAuth
