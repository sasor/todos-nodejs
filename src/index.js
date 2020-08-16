require('dotenv').config()
const app = require('./server')
const mongoose = require('mongoose')

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(_ => {
    app.listen(
      process.env.PORT,
      _ => console.log(
        'server running at: ',
        `http://localhost:${process.env.PORT}`
      )
    )
  })
  .catch(err => console.error(err))
