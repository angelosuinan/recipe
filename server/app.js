const express = require('express')
const path = require('path')
const cors = require('cors')
const router = express.Router()

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, '../build')))

app.enable('trust proxy')

app.use(
  '/',
  router.get('/', function (req, res) {
    res.send(`Hello World`)
  }),
)
app.use('/graphql', require('./schema/graphql'))

module.exports = app
