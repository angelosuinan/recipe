const express = require('express')
const path = require('path')
const cors = require('cors')

const { connectToDatabase } = require('./config')
const app = express()

connectToDatabase()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, '../build')))

app.enable('trust proxy')

app.use('/', require('./routes'))

module.exports = app
