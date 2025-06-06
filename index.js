const express = require('express')
const app = express()
const dotenv = require('dotenv')
const testrouter = require('./router/test.route')
dotenv.config()
const PORT = process.env.PORT

app.use(express.json())
app.use('/api/v1/prime', testrouter)
app.listen(PORT, () => {
  console.log('server listen on', PORT)
})
