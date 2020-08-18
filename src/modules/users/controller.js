const index = (req, res) => {
  res.send({success:true, method:'index'})
}

const create = (req, res) => {
  res.send({success:true, method:'create'})
}

const save = (req, res) => {
  res.send({success:true, method:'save'})
}

const show = (req, res) => {
  res.send({success:true, method:'show'})
}

const edit = (req, res) => {
  res.send({success:true, method:'edit'})
}

const update = (req, res) => {
  res.send({success:true, method:'update'})
}

const destroy = (req, res) => {
  res.send({success:true, method:'delete'})
}

module.exports = {index, create, save, show, edit, update, destroy}
