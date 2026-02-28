const express = require('express')
const app = express()
const cors = require('cors')

require('dotenv').config()
const PORT = process.env.PORT || 8005
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})
const dbConnect = require('./config/database')
dbConnect()
app.use(cors())
app.use(express.json())

const todoRouter = require('./routes/todos')
app.use('/api/v1', todoRouter)
app.get('/', (req, res) => {
  res.send('<h1>Hello World! welcome to Express</h1>')
})

app.get('/login', (req, res) => {
  res.send('<h1>This is the login page</h1>')
})

app.get('/signup', (req, res) => {
  res.send('<h1>This is the signup page</h1>')
})

app.get('/home', (req, res) => {
  res.send('<h1>This is the home page</h1>')
})

