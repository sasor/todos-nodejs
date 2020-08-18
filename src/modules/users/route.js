const {Router} = require('express')
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

router.get('/index', index)
router.get('/create', create)
router.post('/', save)
router.get('/:id', show)
router.get('/:id/edit', edit)
router.put('/:id', update)
router.delete('/:id', destroy)

module.exports = router
