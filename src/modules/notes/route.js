const {Router} = require('express')
const isAuth = require('../../middlewares/index')
const {
  index,
  create,
  save,
  show,
  edit,
  update,
  destroy
} = require('./controller')
const router = Router()

router.get('/index', isAuth, index)
router.get('/create', isAuth, create)
router.post('/', isAuth, save)
router.get('/:id', isAuth, show)
router.get('/:id/edit', isAuth, edit)
router.put('/:id', isAuth, update)
router.delete('/:id', isAuth, destroy)

module.exports = router
