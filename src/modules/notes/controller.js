const Note = require('./model')

const index = async (req, res) => {
  const notes = await Note.find().lean()
  res.render('notes/index', {notes})
}

const create = (req, res) => {
  res.render('notes/create')
}

const save = async (req, res) => {
  const note = new Note(req.body)
  await note.save()
  req.flash('alert', 'guardado exitosamente')
  res.redirect('/note/index')
}

const show = (req, res) => {
  res.send({success:true, method:'show'})
}

const edit = async (req, res) => {
  const note = await Note.findById(req.params.id).lean()
  res.render('notes/edit', {note})
}

const update = async (req, res) => {
  await Note.findByIdAndUpdate(req.params.id, req.body)
  req.flash('alert', 'actualizado exitosamente')
  res.redirect('/note/index')
}

const destroy = async (req, res) => {
  await Note.findByIdAndDelete(req.params.id)
  req.flash('alert', 'eliminado exitosamente')
  res.redirect('/note/index')
}

module.exports = {index, create, save, show, edit, update, destroy}
